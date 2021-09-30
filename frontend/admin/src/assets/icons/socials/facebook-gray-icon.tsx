import React from "react";
const FacebookGrayIcon: React.FC<React.SVGAttributes<{}>> = (props) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M4.01707 0C1.79179 0 0 1.79179 0 4.01706V17.9829C0 20.2082 1.79179 22 4.01707 22H11.5865V13.3994H9.3122V10.3029H11.5865V7.65737C11.5865 5.57892 12.9302 3.67056 16.0256 3.67056C17.2789 3.67056 18.2057 3.79088 18.2057 3.79088L18.1328 6.68251C18.1328 6.68251 17.1876 6.67358 16.1562 6.67358C15.04 6.67358 14.861 7.18789 14.861 8.04171V10.3029H18.2215L18.0751 13.3994H14.861V22H17.9829C20.2082 22 22 20.2082 22 17.9829V4.01708C22 1.79181 20.2082 2.2e-05 17.9829 2.2e-05H4.01705L4.01707 0Z"
				fill="#B0BDC6"
			/>
		</svg>
	);
};
export default FacebookGrayIcon;
