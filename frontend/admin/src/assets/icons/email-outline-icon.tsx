import React from "react";
const EmailOutlineIcon: React.FC<React.SVGAttributes<{}>> = (props) => {
	return (
		<svg
			width="16"
			height="12"
			viewBox="0 0 15 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M0.5 1.5C0.5 0.671574 1.17157 0 2 0H14C14.8284 0 15.5 0.671573 15.5 1.5V10.5C15.5 11.3284 14.8284 12 14 12H2C1.17157 12 0.5 11.3284 0.5 10.5V1.5ZM3.13894 1.5L8 5.75342L12.8611 1.5H3.13894ZM14 2.49658L8.49388 7.31443C8.21111 7.56186 7.78889 7.56186 7.50612 7.31443L2 2.49658V10.5H14V2.49658Z"
				fill="#657756"
			/>
		</svg>
	);
};
export default EmailOutlineIcon;
