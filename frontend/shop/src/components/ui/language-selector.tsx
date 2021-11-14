import ArrowDownIcon from "@assets/icons/arrow-down-icon";
import UnitedKingdomFlagIcon from "@assets/icons/flags/united-kingdom-icon";
import VietnamFlagIcon from "@assets/icons/flags/vietnam-icon";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Typography from "./storybook/typography";

const languageFlag = {
  en: UnitedKingdomFlagIcon,
  vi: VietnamFlagIcon,
};

const LanguageSelector = () => {
  const { t } = useTranslation("common");
  const { locale, ...router } = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  function changeLocale(newLocale: "vi" | "en") {
    if (newLocale === locale) return;
    const { pathname, query } = router;
    router.push(
      {
        pathname,
        query,
      },
      {},
      { locale: newLocale }
    );
  }

  const Flag = (languageFlag as any)[locale || "vi"];

  return (
    <div className="flex items-center w-36">
      <span className="text-sm text-gray-200 mr-3">{t("language")}</span>
      <button
        onClick={() => setShowMenu((old) => !old)}
        className="relative flex cursor-pointer items-center"
      >
        <Flag className="w-7 h-7" />
        <ArrowDownIcon className="ml-2" />

        {showMenu && (
          <div
            className="absolute top-full right-0 bg-white p-5 pr-10 shadow-lg z-50"
            style={{ width: "max-content" }}
          >
            <div
              onClick={() => changeLocale("en")}
              className="flex items-center py-2"
            >
              <UnitedKingdomFlagIcon className="w-7 h-7 mr-4" />
              <Typography text={t("englishLanguage-label")} />
            </div>
            <div
              onClick={() => changeLocale("vi")}
              className="flex items-center py-2"
            >
              <VietnamFlagIcon className="w-7 h-7 mr-4" />
              <Typography text={t("vietnameseLanguage-label")} />
            </div>
          </div>
        )}
      </button>
    </div>
  );
};
export default LanguageSelector;
