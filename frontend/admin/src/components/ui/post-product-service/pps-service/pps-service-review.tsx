import Divider from "@components/ui/divider";
import Button from "@components/ui/storybook/button";
import Typography from "@components/ui/storybook/typography";
import React from "react";
import { UseFormGetValues } from "react-hook-form";
import { useTranslation } from "react-i18next";
import PPSCategoryReview from "./pps-service-reviews/pps-service-category-review";
import PPSDetailsReview from "./pps-service-reviews/pps-service-details-review";
import PPSAttachmentReview from "./pps-service-reviews/pps-service-attachment-review";
import { IPostServiceFormValues } from "./pps-service-interface";
import PPSPricingReview from "./pps-service-reviews/pps-service-pricing-review";

interface IPPSServiceReviewProps {
  changeSection: (t: number) => void;
  getValues: UseFormGetValues<IPostServiceFormValues>;
}

const PPSServiceReview: React.FC<IPPSServiceReviewProps> = ({
  changeSection,
  getValues,
}) => {
  const { t } = useTranslation("form");
  return (
    <div>
      <Typography text={t("pps-review-note")} variant="description" />

      <div className="mt-5 space-y-5">
        <PPSCategoryReview
          changeSection={changeSection}
          category={getValues("category")}
        />
        <Divider />
        <PPSDetailsReview
          changeSection={changeSection}
          details={getValues("details")}
        />
        <Divider />
        <PPSAttachmentReview
          changeSection={changeSection}
          attachment={getValues("attachment")}
        />
        <Divider />
        <PPSPricingReview
          changeSection={changeSection}
          pricing={getValues("pricing")}
        />
      </div>
    </div>
  );
};
export default PPSServiceReview;
