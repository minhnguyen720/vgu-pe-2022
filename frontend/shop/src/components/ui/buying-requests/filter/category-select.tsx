import React, { useState, useEffect } from "react";

import { useTranslation } from "next-i18next";
import Select from "@components/ui/storybook/inputs/select";
import FilterLabel from "./filter-label";
import { useRouter } from "next/dist/client/router";
import {
  getCategories,
  getCategoryByLabel,
  getIndustryCategories,
  ICategory,
} from "@datas/categories";
import { getIndustryByLabel } from "@datas/industries";

interface ICategorySelectProps extends React.HTMLAttributes<HTMLDivElement> {}

const CategorySelect: React.FC<ICategorySelectProps> = ({
  className,
  ...props
}) => {
  const { t } = useTranslation();

  const { query, ...router } = useRouter();
  const industry = query.industry as string;

  const industryId = getIndustryByLabel(industry)?.id;
  const categoryFilter = query.category as string;

  function setQuery(category: string) {
    if (!category && query.category) delete query?.category;

    const { pathname } = router;
    router.push({
      pathname,
      query: {
        ...query,
        ...(!!category ? { category } : {}),
      },
    });
  }

  function handleChange(e: ICategory | any) {
    setQuery(e?.label);
  }

  return (
    <div {...props}>
      <FilterLabel text={t("category-filter-label")} />
      <Select
        options={getIndustryCategories(industryId as number) || []}
        name="categoryFilter"
        isClearable
        value={getCategoryByLabel(categoryFilter)}
        getInitialValue={(opt: ICategory) => opt.slug === categoryFilter}
        placeholder={t("categoryFilter-placeholder")}
        onChange={handleChange}
        getOptionValue={((option: ICategory) => option?.slug) as any}
        getOptionLabel={
          ((option: ICategory) => t("category:" + option?.label)) as any
        }
      />
    </div>
  );
};
export default CategorySelect;
