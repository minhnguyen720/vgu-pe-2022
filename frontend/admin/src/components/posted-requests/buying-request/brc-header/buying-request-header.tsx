import DocumentAddIcon from "@assets/icons/document-add-icon";
import FolderDownloadIcon from "@assets/icons/folder-download-icon";
import TrashCanIcon from "@assets/icons/trash-can-icon";
import Link from "@components/ui/link";
import SelectProject from "@components/ui/select-project";
import Button from "@components/ui/storybook/button";
import Checkbox from "@components/ui/storybook/checkbox";
import UnderDevelopment from "@components/under-development";
import CreateProject from "@components/create-project";
import { ROUTES } from "@utils/routes";
import { useRouter } from "next/dist/client/router";
import React, { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useBRContext } from "src/contexts/buying-request.context";
import { useModal } from "src/contexts/modal.context";
import useIsPhone from "src/hooks/isPhone.hook";
import { useDeleteBuyingRequestsMutation } from "@graphql/buying-request.graphql";
import Loading from "@components/ui/loading";
import SpinLoading from "@components/ui/storybook/spin-loading";
import { COLORS } from "@utils/colors";
import { IBuyingRequest, IProject } from "@graphql/types.graphql";
import AddToProject from "@components/ui/add-to-project";
import SearchInput from "@components/search-input";

interface IBuyingRequestSearchProps
  extends React.HTMLAttributes<HTMLDivElement> {
  brs: IBuyingRequest[];
  selecteds: IBuyingRequest[];
  setSelecteds: (value: IBuyingRequest[]) => void;
  onAddToProjectClick: () => void;
}

const BuyingRequestHeader: React.FC<IBuyingRequestSearchProps> = ({
  brs,
  selecteds,
  setSelecteds,
  onAddToProjectClick,
}) => {
  const { t } = useTranslation();
  const isPhone = useIsPhone();
  const { refetchBrs } = useBRContext();
  const [deleteBrs, { loading }] = useDeleteBuyingRequestsMutation({
    onCompleted: refetchBrs,
  });

  function deleteSelectedBrs() {
    const selectedBrIds = selecteds.map((br) => parseInt(br.id));

    deleteBrs({ variables: { ids: selectedBrIds } });
  }

  function handleSelectAllChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) setSelecteds([...brs]);
    else setSelecteds([]);
  }

  const addToProjectButton = (
    <Button
      className="w-1/2.5 h-10 md:w-fit-content"
      onClick={onAddToProjectClick}
    >
      <FolderDownloadIcon className="mr-2" />
      {t("add-to-project-button-label")}
    </Button>
  );

  const createPostRequestButton = (
    <Link href={ROUTES.POST_REQUEST} className="w-1/2.5 h-10 md:w-fit-content">
      <Button className="w-full h-full">
        <DocumentAddIcon className="mr-2" /> {t("create-post-button-label")}
      </Button>
    </Link>
  );

  return (
    <div className="flex items-center mt-4 mx-4">
      <div className="hidden sm:block">
        <SearchInput />
      </div>
      <div className="md:ml-auto flex items-center justify-between w-full md:w-fit-content">
        {!isPhone && !!selecteds.length && (
          <button onClick={deleteSelectedBrs}>
            {loading ? (
              <SpinLoading color={COLORS.GRAY[200]} className="mr-4" />
            ) : (
              <TrashCanIcon className="mr-4" />
            )}
          </button>
        )}
        <Checkbox
          className="border-2 text-sm font-semibold text-gray h-10 flex-center w-1/2.5 md:w-fit-content md:px-5 md:mr-5 rounded-sm items-center"
          name="select-all"
          checked={selecteds.length === brs.length}
          onChange={handleSelectAllChange}
          title={t("select-all")}
          label={t("select-all-label")}
        />
        {!selecteds.length && createPostRequestButton}

        {!!selecteds.length && addToProjectButton}
      </div>
    </div>
  );
};
export default BuyingRequestHeader;
