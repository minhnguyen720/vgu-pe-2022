import DetailImages from "@components/ui/detail-image-section";
import SDSocialShareList from "@components/buying-request-detail/brd-social-share-list";
import PageLayout from "@components/layouts/page-layout";
import SDDescription from "@components/service-detail/sd-desc";
import SDName from "@components/service-detail/sd-name";
import SDPrice from "@components/service-detail/sd-price";
import Typography from "@components/ui/storybook/typography";
import { ServiceDocument } from "@graphql/service.graphql";
import { IService } from "@graphql/types.graphql";
import { initApollo } from "@utils/apollo";
import { viDateFormat } from "@utils/functions";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useState } from "react";
import SDCompanySummary from "@components/buying-request-detail/brd-company-summary";
import SDDetail from "@components/service-detail/sd-detail";
import Head from "next/head";
import { generateHeadTitle } from "@utils/seo-utils";
import SDDiscussion from "@components/service-detail/sd-discussion/sdd";
import SDDAskQuestion from "@components/service-detail/sd-discussion/sdd-ask";
import UnderDevelopment from "@components/under-development";
import { ProductsDocument } from "@graphql/product.graphql";

interface IServiceDetailProps {
  product: IService;
}

const ProductDetail: React.FC<IServiceDetailProps> = ({ product }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{generateHeadTitle(t("Product"))}</title>
        <meta
          name="description"
          content="DSConnect.VN | Sàn thương mại điện tử B2B đa ngành, uy tín hàng đầu Việt Nam"
        />
      </Head>
      <UnderDevelopment />
    </>
  );

  const {
    coverImage,
    description,
    name,
    images,
    company,
    maxPrice,
    minPrice,
    price,
    industryId,
    categoryId,
    createdAt,
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
      {true ? (
        <UnderDevelopment />
      ) : (
        <div className="flex space-x-7 justify-between">
          <div className="pb-10 w-full">
            <div className="flex space-x-4">
              {/* Left Section */}
              <div>
                <DetailImages coverImage={coverImage!} images={images || []} />
                <div className="fic space-x-4">
                  <Typography
                    text={`${t("brd-share-label")}:`}
                    variant="smallTitle"
                  />
                  <SDSocialShareList />
                </div>
              </div>
              {/* Right Section */}
              <div className="w-full">
                <SDName
                  name={name}
                  companyName={company?.name!}
                  createdAt={viDateFormat(createdAt)}
                />
                <SDPrice
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  price={price}
                />
                <SDDescription
                  industryId={industryId}
                  categoryId={categoryId}
                  description={description || ""}
                  companyId={company?.id!}
                />
              </div>
            </div>
            <div className="space-y-3 mt-4">
              <SDDetail service={product} />
              <SDCompanySummary company={company} />
              <SDDiscussion serviceId={product.id} reload={reload} />
              <SDDAskQuestion
                refetchDiscussions={refetchDiscussions}
                serviceId={product.id}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { locale, params } = ctx;
//   const slug = params?.slug;

//   const apollo = initApollo();
//   const { data } = await apollo.query({
//     query: ProductDocument,
//     variables: { slug },
//   });

//   const product = data.product;

//   return {
//     props: {
//       product,
//       ...(await serverSideTranslations(locale!, [
//         "common",
//         "industry",
//         "category",
//         "form",
//       ])),
//     },
//   };
// };

(ProductDetail as any).Layout = PageLayout;

export default ProductDetail;
