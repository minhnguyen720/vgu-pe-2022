import React, { useEffect } from "react";
import { UseFormGetValues } from "node_modules/react-hook-form";
import { PostRequestFormValue } from "./post-request-schema";
import GeneralSection from "./check-section/general-section";
import DetailsSection from "./check-section/details-section";
import { useTranslation } from "react-i18next";
import Divider from "@components/ui/divider";
import AdditionalSection from "./check-section/additional-section";

import ImagesSection from "./check-section/images-section";

interface ICheckSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  getValues: UseFormGetValues<PostRequestFormValue>;
  changeSection: (id: number) => void;
}

const CheckSection: React.FC<ICheckSectionProps> = ({
  getValues,
  changeSection,
}) => {
  const { t } = useTranslation("form");

  const details = getValues("details");
  const general = getValues("general");
  const additional = getValues("additional");

  const hasImage = details?.gallery?.length > 0;

  return (
    <div>
      <h3 className="text-md sm:text-lg my-10">
        {t("check-section-title-label")}
      </h3>
      {hasImage && (
        <ImagesSection
          className="md:hidden my-5"
          imgWidth={300}
          imgHeight={200}
          images={details?.gallery}
          changeSection={changeSection}
        />
      )}
      <div className={`flex flex-col bg-white`}>
        <GeneralSection
          hasImage={hasImage}
          images={details?.gallery}
          formValues={general}
          changeSection={changeSection}
        />
        <Divider className="mb-7" />
        <DetailsSection
          hasImage={hasImage}
          formValues={details}
          changeSection={changeSection}
        />
        {additional && (
          <AdditionalSection
            hasImage={hasImage}
            formValues={additional}
            changeSection={changeSection}
          />
        )}
      </div>
    </div>
  );
};
export default CheckSection;
