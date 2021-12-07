import FilterIcon from "@assets/icons/filter-icon";
import Typography from "@components/ui/storybook/typography";
import { COLORS } from "@utils/colors";
import { useTranslation } from "next-i18next";
import React from "react";
import BudgetRange from "./budget-range";
import CategorySelect from "./category-select";
import IndustrySelect from "./industry-select";
import LocationSearch from "./location-search";
import StatusCheckbox from "./status-selector";

const SideFilter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="hidden sm:block space-y-2 bg-white p-2 min-h-[100vh]">
      <div className="flex items-center w-[250px]">
        <FilterIcon fill={COLORS.PRIMARY.DEFAULT} className="mr-4" />
        <Typography
          className="text-lg"
          text={t("filter-label")}
          variant="special-heading"
        />
      </div>
      <StatusCheckbox />
      <LocationSearch />
      <IndustrySelect />
      <CategorySelect />
      <BudgetRange />
    </div>
  );
};
export default SideFilter;