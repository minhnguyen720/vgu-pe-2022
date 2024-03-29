import React, { useState, useEffect } from "react";
import {
  UseFormRegister,
  Control,
  FieldErrors,
  UseFormTrigger,
  UseFormGetValues,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import { PostRequestFormValue } from "./post-request-schema";
import ParticipantFilterForm from "./participant-filter-form";
import { IBuyingRequest } from "@graphql/types.graphql";
import SelectInput from "@components/ui/storybook/select-input";
import PRFBudgetInput from "./details-form/ptf-budget-input";
import PRFQuantityInput from "./details-form/prf-quantity-input";
import DateInput from "@components/ui/storybook/inputs/date-input";
import { IVietnamCity, vietnamProvinces } from "@utils/vietnam-cities";
import { ISourceType, sourceTypes } from "src/datas/source-type";
import { useRouter } from "next/dist/client/router";

interface IGeneralInputProps {
  register: UseFormRegister<PostRequestFormValue>;
  control: Control<PostRequestFormValue>;
  errors: FieldErrors<PostRequestFormValue>;
  trigger: UseFormTrigger<PostRequestFormValue>;
  initValue?: IBuyingRequest;
  getValues: UseFormGetValues<PostRequestFormValue>;
}

const DetailsInput: React.FC<IGeneralInputProps> = ({
  register,
  control,
  initValue,
  trigger,
  errors,
}) => {
  const { t } = useTranslation("form");

  const { locale } = useRouter();

  return (
    <div className="md:w-2/3 space-y-3 sm:mb-5">
      <PRFBudgetInput
        errors={errors}
        trigger={trigger}
        control={control}
        numberQueue={1}
      />

      <PRFQuantityInput
        register={register}
        errors={errors}
        numberQueue={2}
        trigger={trigger}
        control={control}
      />

      <DateInput
        control={control}
        name="details.endDate"
        locale={locale}
        required
        onChange={() => {
          trigger("details.endDate");
        }}
        minDate={new Date()}
        placeholder={t("post-request-endDate-placeholder")}
        error={t(errors?.details?.endDate?.message || "")}
        label={`${t("post-request-endDate-label")}`}
        numberQueue={3}
      />

      <SelectInput
        name="details.location"
        numberQueue={4}
        required
        label={`${t("post-request-location-label")}`}
        placeholder={t("post-request-location-placeholder")}
        control={control}
        options={vietnamProvinces}
        onChange={(_) => {
          trigger("details.location");
        }}
        getInitialValue={(option?: IVietnamCity) =>
          option?.name === (initValue?.location as string)
        }
        error={t((errors?.details?.location as any)?.message || "")}
        getOptionLabel={(option: IVietnamCity) => option.name}
        getOptionValue={(option: IVietnamCity) => option.name}
      />

      <SelectInput
        name="details.sourceType"
        numberQueue={6}
        required
        label={`${t("post-request-sourceType-label")}`}
        placeholder={t("post-request-sourceType-placeholder")}
        control={control}
        options={sourceTypes}
        onChange={(_) => {
          trigger("details.sourceType");
        }}
        getInitialValue={(option?: ISourceType) =>
          option?.id === initValue?.sourceTypeId
        }
        error={t((errors?.details?.sourceType as any)?.message || "")}
        getOptionLabel={(option: ISourceType) =>
          t("source-type:" + option.label)
        }
        getOptionValue={(option: ISourceType) =>
          t("source-type:" + option.label)
        }
      />

      <ParticipantFilterForm
        initValue={initValue}
        register={register}
        control={control}
        errors={errors}
      />
    </div>
  );
};

export default DetailsInput;
