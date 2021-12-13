import type { GetServerSideProps } from "next";

import PageLayout from "@components/layouts/page-layout";
import React from "react";
import Head from "next/head";
import { generateHeadTitle } from "@utils/seo-utils";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { IServiceListItem } from "@graphql/types.graphql";
import { initApollo } from "@utils/apollo";
import { ServicesDocument } from "@graphql/service.graphql";
import Image from "next/image";
import { siteSettings } from "@settings/site.settings";
import SideFilter from "@components/ui/buying-requests/filter/side-filter";
import PleaseOpenOnLaptop from "@components/please-open-on-laptop";
import useIsPhone from "src/hooks/isPhone.hook";
import UnderDevelopment from "@components/under-development";
import ServiceCard from "@components/services/service-card";
import ServicesList from "@components/services/services-list";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { locale } = ctx;

  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"])),
    },
  };
};

interface IProductAndServiceProps {
  services: IServiceListItem[];
}

const ProductAndService: React.FC<IProductAndServiceProps> = () => {
  const { t } = useTranslation("common");
  const isPhone = useIsPhone();
  if (isPhone) return <PleaseOpenOnLaptop />;

  return (
    <>
      <Head>
        <title>{generateHeadTitle(t("productAndService"))}</title>
        <meta
          name="description"
          content="DSConnect.VN | Sàn thương mại điện tử B2B đa ngành, uy tín hàng đầu Việt Nam"
        />
      </Head>
      <main className={`flex space-x-6 mb-10`}>
        <div className="sticky top-40 h-fit-content">
          <SideFilter />
        </div>

        <ServicesList />
      </main>
    </>
  );
};

(ProductAndService as any).Layout = PageLayout;

export default ProductAndService;
