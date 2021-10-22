import React from "react";
const FilterIcon: React.FC<React.SVGAttributes<{}>> = ({ fill, ...props }) => {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 2C4.44772 2 4 2.44772 4 3C4 3.55228 4.44772 4 5 4C5.55228 4 6 3.55228 6 3C6 2.44772 5.55228 2 5 2ZM2.17071 2C2.58254 0.834808 3.69378 0 5 0C6.30622 0 7.41746 0.834808 7.82929 2H15C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4H7.82929C7.41746 5.16519 6.30622 6 5 6C3.69378 6 2.58254 5.16519 2.17071 4H1C0.447715 4 0 3.55228 0 3C0 2.44772 0.447715 2 1 2H2.17071ZM11 8C10.4477 8 10 8.44772 10 9C10 9.55229 10.4477 10 11 10C11.5523 10 12 9.55229 12 9C12 8.44772 11.5523 8 11 8ZM8.17071 8C8.58254 6.83481 9.69378 6 11 6C12.3062 6 13.4175 6.83481 13.8293 8H15C15.5523 8 16 8.44772 16 9C16 9.55229 15.5523 10 15 10H13.8293C13.4175 11.1652 12.3062 12 11 12C9.69378 12 8.58254 11.1652 8.17071 10H1C0.447715 10 0 9.55229 0 9C0 8.44772 0.447715 8 1 8H8.17071ZM5 14C4.44772 14 4 14.4477 4 15C4 15.5523 4.44772 16 5 16C5.55228 16 6 15.5523 6 15C6 14.4477 5.55228 14 5 14ZM2.17071 14C2.58254 12.8348 3.69378 12 5 12C6.30622 12 7.41746 12.8348 7.82929 14H15C15.5523 14 16 14.4477 16 15C16 15.5523 15.5523 16 15 16H7.82929C7.41746 17.1652 6.30622 18 5 18C3.69378 18 2.58254 17.1652 2.17071 16H1C0.447715 16 0 15.5523 0 15C0 14.4477 0.447715 14 1 14H2.17071Z"
        fill={fill || "#A3ADB4"}
      />
    </svg>
  );
};
export default FilterIcon;
