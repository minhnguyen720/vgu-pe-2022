import { siteSettings } from "@settings/site.settings";
import { getActivePath } from "@utils/functions";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { useTranslation } from "react-i18next";
import Link from "./link";

const Navigations = () => {
  const { navigations } = siteSettings;
  const { pathname } = useRouter();

  const { t } = useTranslation("common");

  function checkIsActive(href: string) {
    return getActivePath(pathname) === href;
  }

  return (
    <div>
      {navigations?.length > 0 &&
        navigations.map((navigation) => {
          const { href, label } = navigation;
          return (
            <Link
              href={href}
              key={navigation.label + "Nav-item"}
              className={`px-6 text-sm border-b-2 pb-[17px]
              ${
                checkIsActive(href)
                  ? "text-primary font-semibold border-primary"
                  : "text-gray-200"
              }`}
            >
              {t(label)}
            </Link>
          );
        })}
    </div>
  );
};
export default Navigations;
