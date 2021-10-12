import React from "react";

interface INavigationProps extends React.SVGAttributes<{}> {
  isActive?: boolean;
}

const HomeIcon: React.FC<INavigationProps> = ({ isActive, fill, ...props }) => {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.33565 0.252591C9.71453 -0.0841969 10.2855 -0.0841969 10.6644 0.252591L19.6644 8.25259C20.0772 8.61951 20.1143 9.25158 19.7474 9.66436C19.3805 10.0771 18.7484 10.1143 18.3356 9.74741L18 9.44907V17C18 18.1046 17.1046 19 16 19H4.00001C2.89544 19 2.00001 18.1046 2.00001 17V9.44907L1.66437 9.74741C1.25159 10.1143 0.619519 10.0771 0.252601 9.66436C-0.114317 9.25158 -0.0771359 8.61951 0.335647 8.25259L9.33565 0.252591ZM4.00001 7.67129V17H7.00001V12C7.00001 11.4477 7.44773 11 8.00001 11H12C12.5523 11 13 11.4477 13 12V17H16V7.67129L10 2.33795L4.00001 7.67129ZM11 17V13H9.00001V17H11Z"
        fill={fill || isActive ? "#00D796" : "#82868C"}
      />
    </svg>
  );
};
export default HomeIcon;
