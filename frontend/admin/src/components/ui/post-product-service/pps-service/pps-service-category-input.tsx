import IndustryCategorySelect from "@components/ui/storybook/inputs/industry-category-input/industry-category-select";
import Input from "@components/ui/storybook/inputs/input";
import { IIndustry } from "@utils/industries";
import { ICategory } from "@utils/categories";
import React from "react";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormTrigger,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IPostServiceFormValues } from "./pps-service-interface";

interface IPPSServiceCategoryInputProps {
  register: UseFormRegister<IPostServiceFormValues>;
  errors: FieldErrors<IPostServiceFormValues>;
  control: Control<IPostServiceFormValues>;
  trigger: UseFormTrigger<IPostServiceFormValues>;
}

const PPSServiceCategoryInput: React.FC<IPPSServiceCategoryInputProps> = ({
  register,
  errors,
  trigger,
  control,
}) => {
  const { t } = useTranslation("form");

  return (
    <>
      <Input
        required
        {...register("category.name")}
        label={t("serviceName-input-label")}
        numberQueue={1}
        onChange={(e) => {
          register("category.name").onChange(e);
          trigger("category.name");
        }}
        placeholder={t("serviceName-input-placeholder")}
        error={t(errors.category?.name?.message || "")}
      />
      <IndustryCategorySelect
        required
        label={t("serviceIndustryCategory-label")}
        numberQueue={2}
        control={control}
        onIndustryChange={() => trigger("category.industry")}
        onCategoryChange={() => trigger("category.category")}
        industryControllerName="category.industry"
        getIndustryLabel={(e: IIndustry) => t("industry:" + e.label)}
        categoryControllerName="category.category"
        getCategoryLabel={(e: ICategory) => t("category:" + e.label)}
        error={t(
          (errors.category?.industry as any)?.message ||
            (errors.category?.category as any)?.message
        )}
      />
    </>
  );
};
export default PPSServiceCategoryInput;
