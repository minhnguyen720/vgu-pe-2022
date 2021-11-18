import React from "react";

import PageLayout from "@components/layouts/page-layout";
import PostNavigation from "@components/ui/post-navigation";
import Head from "next/head";
import { generateHeadTitle } from "@utils/seo-utils";
import { useTranslation } from "react-i18next";
import { PAGE_DESCRIPTION } from "src/seo/description.seo";
import { PAGE_TITLE } from "src/seo/titles.seo";
import PostPageWrapper from "@components/post-page-wrapper";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PostProductServiceForm from "@components/ui/post-product-service/pps-form";

export const postProductNavs = [
  {
    label: "category-nav-label",
  },
  {
    label: "details-nav-label",
  },
  {
    label: "attachment-nav-label",
  },
  {
    label: "pricing-nav-label",
  },
  {
    label: "check-nav-label",
  },
];

interface IPostProductProps {}
// interface IPostProductProps extends React.HTMLAttributes<HTMLDivElement> {}

const PostProduct: React.FC<IPostProductProps> = () => {
  const { t } = useTranslation("form");

  return (
    <div>
      <Head>
        <title>{generateHeadTitle(t(PAGE_TITLE.POST_PRODUCT))}</title>
        <meta name="description" content={PAGE_DESCRIPTION.POST_PRODUCT} />
      </Head>
      {/* <UnderDevelopment /> */}
      <PostPageWrapper>
        <PostNavigation navs={postProductNavs} />
        <PostProductServiceForm />
      </PostPageWrapper>
    </div>
  );
};

(PostProduct as any).Layout = PageLayout;

export default PostProduct;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { locale } = ctx;

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "form",
        "industry",
        "category",
      ])),
    },
  };
};
