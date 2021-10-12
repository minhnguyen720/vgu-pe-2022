import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/dist/client/router";

import PageLayout from "@components/layouts/page-layout";
import PostedRequestsNav from "@components/posted-requests/posted-requests-nav";
import { POSTED_REQUEST_VIEWS } from "@components/posted-requests/posted-requests-nav/prn-constants";
import BuyingRequests from "./buying-requests";
import { PAGE_NAME } from "@utils/constants";
import UnderDevelopment from "@components/under-development";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { locale, query } = ctx;
  return {
    props: {
      query,
      ...(await serverSideTranslations(locale!, ["common", "form"])),
    },
  };
};

const PostedRequests = (props: any) => {
  const { t } = useTranslation("common");

  const { query } = useRouter();

  // Default value is buying-requests
  const activeView = query?.view || POSTED_REQUEST_VIEWS.BUYING_REQUESTS;

  return (
    <>
      <div className="bg-white md:p-5 rounded-sm md:rounded-lg flex flex-col flex-wrap justify-between pb-5">
        <PostedRequestsNav />
        {activeView === POSTED_REQUEST_VIEWS.BUYING_REQUESTS && (
          <BuyingRequests />
        )}
        {activeView === POSTED_REQUEST_VIEWS.PROJECTS && <UnderDevelopment />}
      </div>
    </>
  );
};

PostedRequests.Layout = PageLayout;
PostedRequests.PageName = PAGE_NAME.POSTED_REQUESTS;

export default PostedRequests;