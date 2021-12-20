import type { GetServerSideProps } from "next";

import PageLayout from "@components/layouts/page-layout";
import React from "react";
import Head from "next/head";
import { generateHeadTitle } from "@utils/seo-utils";
import { useTranslation } from "react-i18next";
import UnderDevelopment from "@components/under-development";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getAuthCredentials, isAuthenticated } from "@utils/auth-utils";
import { ROUTES } from "@utils/routes";
import CompanyList from "@components/companies/company-list";
import SideFilter from "@components/ui/common-filter/side-filter";
import CompanySideFilter from "@components/companies/company-side-filter/company-side-filter";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { locale } = ctx;

  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "industry"])),
    },
  };
};

const CompanyDirectory = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{generateHeadTitle(t("companyDirectory"))}</title>
        <meta
          name="description"
          content="DSConnect.VN | Sàn thương mại điện tử B2B đa ngành, uy tín hàng đầu Việt Nam"
        />
      </Head>
      <main className="flex relative space-x-6 mb-8 min-h-[600px]">
        <div className={`flex-shrink-0`}>
          <CompanySideFilter />
        </div>
        <div className={`w-full`}>
          <CompanyList />
        </div>
      </main>
    </>
  );
};

CompanyDirectory.Layout = PageLayout;

export default CompanyDirectory;
