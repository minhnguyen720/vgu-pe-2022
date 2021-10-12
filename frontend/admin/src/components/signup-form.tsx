import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "./form";
import Input from "./ui/storybook/inputs/input";
import Checkbox from "./ui/storybook/checkbox";
import Button from "./ui/storybook/button";
import PhoneNumberInput from "./ui/phone-number-input/phone-number-input";
import DocumentInput from "./ui/storybook/document-input";
import { useCompanySignupMutation } from "@graphql/company.graphql";
import { Router, useRouter } from "next/dist/client/router";
import { ROUTES } from "@utils/routes";
import { setAuthCredentials, setMeData } from "@utils/auth-utils";
import { useMeInfoMutation } from "@graphql/auth.graphql";
import { IMeInfoResponse } from "@graphql/types.graphql";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  licenseNumber: string;
  password: string;
  confirmPassword: string;
  emailSubscription: boolean;
  agreement: boolean;
  phoneNumber: string;
  companyName: string;
  companyLicenses: Array<File>;
};

const signupSchema = yup.object().shape({
  firstName: yup.string().required("form:firstName-required-error"),
  lastName: yup.string().required("form:lastName-required-error"),
  phoneNumber: yup.string().required("form:phoneNumber-required-error"),
  companyName: yup.string().required("form:companyName-required-error"),
  licenseNumber: yup.string().required("form:licenseNumber-required-error"),
  email: yup
    .string()
    .required("form:email-required-error")
    .email("form:email-invalid-error"),
  password: yup.string().required("form:password-required-error"),
  confirmPassword: yup
    .string()
    .required("form:password-required-error")
    .oneOf([yup.ref("password"), null], "form:password-not-match-error"),
  companyLicenses: yup
    .array()
    .min(1, "form:companyLicenses-is-required-error")
    .required("form:companyLicenses-is-required-error"),
});

const SignupForm = () => {
  const { t } = useTranslation("form");
  const router = useRouter();
  const [meInfo, { loading: meInfoLoading, error }] = useMeInfoMutation();
  const [signup, { loading }] = useCompanySignupMutation({
    onCompleted: async ({
      companySignup: { success, message, token, role },
    }) => {
      if (!success) {
        alert(message);
        return;
      }

      setAuthCredentials(token as string, role as string);
      const { data } = await meInfo();
      setMeData(data?.meInfo as IMeInfoResponse);
      router.replace(ROUTES.HOMEPAGE);
    },
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(signupSchema),
  });

  async function onSubmit({
    companyLicenses,
    confirmPassword,
    ...values
  }: FormValues) {
    const input = {
      licenseFiles: companyLicenses,
      ...values,
    };

    await signup({
      variables: { input },
    });
  }

  return (
    <Form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex md:my-3">
        <Input
          className="my-3 md:my-0 md:w-96 md:mr-16"
          {...register("firstName")}
          label={t("firstName-label")}
          placeholder={t("firstName-placeholder")}
          error={t(errors?.firstName?.message || "")}
        />
        <Input
          className="my-3 md:my-0 md:w-96"
          {...register("lastName")}
          label={t("lastName-label")}
          placeholder={t("lastName-placeholder")}
          error={t(errors?.lastName?.message || "")}
        />
      </div>
      <div className="md:flex md:my-3">
        <PhoneNumberInput
          control={control}
          className="my-3 md:my-0 md:w-96 md:mr-16"
          {...register("phoneNumber")}
          label={t("phoneNumber-label")}
          variant="outline"
          placeholder={t("phoneNumber-placeholder")}
          error={t(errors?.phoneNumber?.message || "")}
        />
        {/* @TODO: OnBlur check if the email is exist */}
        <Input
          className="my-3 md:my-0 md:w-96"
          {...register("email")}
          label={t("email-label")}
          placeholder={t("email-placeholder")}
          error={t(errors?.email?.message || "")}
        />
      </div>
      <div className="md:flex md:my-3">
        <Input
          className="my-3 md:my-0 md:w-96 md:mr-16"
          {...register("password")}
          label={t("password-label")}
          type="password"
          placeholder={t("password-placeholder")}
          error={t(errors?.password?.message || "")}
        />
        <Input
          className="my-3 md:my-0 md:w-96"
          {...register("confirmPassword")}
          label={t("confirmPassword-label")}
          type="password"
          placeholder={t("confirmPassword-label")}
          error={t(errors?.confirmPassword?.message || "")}
        />
      </div>
      <div className="md:flex md:my-3">
        <Input
          className="my-3 md:my-0 md:w-96 md:mr-16"
          {...register("companyName")}
          label={t("companyName-label")}
          placeholder={t("companyName-placeholder")}
          error={t(errors?.companyName?.message || "")}
        />
        <Input
          className="my-3 md:my-0 md:w-96"
          {...register("licenseNumber")}
          label={t("licenseNumber-label")}
          placeholder={t("licenseNumber-placeholder")}
          error={t(errors?.licenseNumber?.message || "")}
        />
      </div>
      <div className="mt-1">
        <DocumentInput
          accept=".pdf"
          control={control}
          name="companyLicenses"
          label={t("license-label")}
          note={t("license-subLabel")}
          error={t((errors?.companyLicenses as any)?.message || "")}
        />
      </div>
      <div className="my-3 md:items-center">
        <Checkbox
          {...register("emailSubscription")}
          label={t("want-to-receive-email")}
          className="mt-5 mb-2 text-semibold text-sm"
        />
        <Checkbox
          className="text-semibold text-sm"
          {...register("agreement")}
          label={t("agreement")}
        />
      </div>
      <Button loading={loading} size="fluid">
        {t("signup")}
      </Button>
    </Form>
  );
};
export default SignupForm;