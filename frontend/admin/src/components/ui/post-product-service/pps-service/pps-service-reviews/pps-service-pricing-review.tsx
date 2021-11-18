import ReviewQA from "@components/ui/review-qa";
import ReviewSectionTitle from "@components/ui/review-section-title";
import PPIPackageList from "@components/ui/storybook/inputs/package-pricing-input/ppi-package-list";
import PPIRowList from "@components/ui/storybook/inputs/package-pricing-input/ppi-row-list";
import Typography from "@components/ui/storybook/typography";
import { useTranslation } from "next-i18next";
import React from "react";
import { IPPSFPricingSection } from "../pps-service-interface";

interface IPPSPricingReviewProps {
  pricing: IPPSFPricingSection;
  changeSection: (id: number) => void;
}

const PPSPricingReview: React.FC<IPPSPricingReviewProps> = ({
  pricing,
  changeSection,
}) => {
  const { t } = useTranslation("form");
  const packages = pricing?.packages?.packages;
  const rows = pricing?.packages?.rows;
  function isHavePackages() {
    if (rows?.length > 0 && packages?.length > 0) return true;

    return false;
  }
  return (
    <div className="sm:w-2/3">
      <ReviewSectionTitle
        onClick={() => changeSection(4)}
        title={t("details-nav-label")}
      />

      {!isHavePackages() ? (
        <ReviewQA
          label={t("pps-service-singlePrice-label")}
          value={`${pricing?.price} ${t("budget-sign")}`}
        />
      ) : (
        <div className="text-center border rounded-sm flex">
          <PPIRowList rows={rows} />
          <PPIPackageList
            onDelete={() => {}}
            value={packages as any}
            rows={rows}
            packages={packages}
          />
        </div>
      )}
    </div>
  );
};
export default PPSPricingReview;
