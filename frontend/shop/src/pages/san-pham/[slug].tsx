import DetailImages from "@components/ui/detail-image-section";
import RecordSocialShareList from "@components/record-detail/record-social-share-list";
import PageLayout from "@components/layouts/page-layout";
import RecordDescription from "@components/record-detail/record-desc";
import RecordName from "@components/record-detail/record-name";
import RecordPrice from "@components/record-detail/record-price";
import Typography from "@components/ui/storybook/typography";
import { IProduct, IVariation } from "@graphql/types.graphql";
import { initApollo } from "@utils/apollo";
import { viDateFormat } from "@utils/functions";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useState } from "react";
import RecordCompanySummary from "@components/record-detail/record-company-summary";
import RecordDetail from "@components/record-detail/record-detail";
import Head from "next/head";
import { generateHeadTitle } from "@utils/seo-utils";
import SDDiscussion from "@components/service-detail/sd-discussion/sdd";
import SDDAskQuestion from "@components/service-detail/sd-discussion/sdd-ask";
import { ProductDocument } from "@graphql/product.graphql";
import PDDiscussion from "@components/product-detail/pd-discussion";
import PDDAskQuestion from "@components/product-detail/pd-discussion/pdd-ask";
import ProductVariationPrice from "@components/record-detail/product-variation-price";

interface IServiceDetailProps {
  product: IProduct;
}

const ProductDetail: React.FC<IServiceDetailProps> = ({ product }) => {
  const { t } = useTranslation();

  const {
    coverImage,
    description,
    name,
    gallery,
    company,
    maxPrice,
    warehouseLocation,
    minPrice,
    price,
    industryId,
    categoryId,
    createdAt,
    variations,
  } = product;

  const [reload, setReload] = useState(false);

  function refetchDiscussions() {
    setReload(!reload);
  }

  return (
    <>
      <Head>
        <title>{generateHeadTitle(t(name))}</title>
        <meta
          name="description"
          content="DSConnect.VN | Sàn thương mại điện tử B2B đa ngành, uy tín hàng đầu Việt Nam"
        />
      </Head>
      <div className="flex space-x-7 justify-between">
        <div className="pb-10 w-full">
          <div className="flex space-x-4">
            {/* Left Section */}
            <div>
              <DetailImages coverImage={coverImage!} images={gallery || []} />
              {/* <div className="fic space-x-4">
                <Typography
                  text={`${t("brd-share-label")}:`}
                  variant="smallTitle"
                />
                <RecordSocialShareList />
              </div> */}
            </div>
            {/* Right Section */}
            <div className="w-full">
              <RecordName
                name={name}
                companyName={company?.name!}
                createdAt={viDateFormat(createdAt)}
              />
              <RecordPrice
                minPrice={minPrice}
                maxPrice={maxPrice}
                price={price}
              />
              <ProductVariationPrice variations={variations!} />
              <RecordDescription
                location={warehouseLocation}
                company={company}
                industryId={industryId}
                categoryId={categoryId}
                description={description || ""}
                type="PRODUCT"
              />
            </div>
          </div>
          <div className="space-y-3 mt-4">
            <RecordDetail record={product} />
            <RecordCompanySummary company={company} />
            <PDDiscussion productId={product.id} reload={reload} />
            <PDDAskQuestion
              refetchDiscussions={refetchDiscussions}
              productId={product.id}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { locale, params } = ctx;
  const slug = params?.slug;

  const apollo = initApollo();
  const { data } = await apollo.query({
    query: ProductDocument,
    variables: { slug },
  });
  const product = data.product;

  return {
    props: {
      product,
      ...(await serverSideTranslations(locale!, [
        "common",
        "industry",
        "category",
        "form",
      ])),
    },
  };
};

(ProductDetail as any).Layout = PageLayout;

export default ProductDetail;
