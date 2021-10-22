import React from "react";
const FolderIcon: React.FC<React.SVGAttributes<{}>> = ({ fill, ...props }) => {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.832031 2.5013C0.832031 1.48878 1.65284 0.667969 2.66536 0.667969H7.2487C7.49181 0.667969 7.72497 0.764546 7.89688 0.936454L9.46173 2.5013H17.332C18.3446 2.5013 19.1654 3.32211 19.1654 4.33464V13.5013C19.1654 14.5138 18.3446 15.3346 17.332 15.3346H2.66537C1.65284 15.3346 0.832031 14.5138 0.832031 13.5013V2.5013ZM6.869 2.5013L2.66536 2.5013V13.5013H17.332V4.33464H9.08203C8.83892 4.33464 8.60576 4.23806 8.43385 4.06615L6.869 2.5013Z"
        fill={fill || "#B0BDC6"}
      />
    </svg>
  );
};
export default FolderIcon;
