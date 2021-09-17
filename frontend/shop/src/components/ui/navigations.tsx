import { siteSettings } from "@settings/site.settings";
import React from "react";
import { useTranslation } from "react-i18next";
import Link from "./link";

const Navigations = () => {
	const { navigations } = siteSettings;
	const { t } = useTranslation("common");

	return (
		<div>
			{navigations?.length > 0 &&
				navigations.map((navigation) => {
					const { href, label } = navigation;

					return (
						<Link href={href} className="mr-7 text-body text-sm">
							{t(label)}
						</Link>
					);
				})}
		</div>
	);
};
export default Navigations;
