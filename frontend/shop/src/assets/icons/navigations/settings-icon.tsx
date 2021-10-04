import React from "react";
interface INavigationProps extends React.SVGAttributes<{}> {
  isActive?: boolean;
}
const SettingsIcon: React.FC<INavigationProps> = ({
  isActive,
  fill,
  ...props
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 2C9.44771 2 9 2.44772 9 3C9 4.69226 6.95399 5.53974 5.75738 4.34314C5.36686 3.95261 4.73369 3.95261 4.34317 4.34314C3.95265 4.73366 3.95265 5.36683 4.34317 5.75735C5.53982 6.954 4.69223 9 3 9C2.44772 9 2 9.44771 2 10C2 10.5523 2.44772 11 3 11C4.69236 11 5.53964 13.0461 4.34311 14.2426C3.95258 14.6332 3.95258 15.2663 4.34311 15.6569C4.73363 16.0474 5.3668 16.0474 5.75732 15.6569C6.9539 14.4603 9 15.3077 9 17C9 17.5523 9.44771 18 10 18C10.5523 18 11 17.5523 11 17C11 15.3077 13.046 14.4602 14.2427 15.6568C14.6332 16.0474 15.2664 16.0474 15.6569 15.6568C16.0474 15.2663 16.0474 14.6332 15.6569 14.2426C14.4603 13.0461 15.3077 11 17 11C17.5523 11 18 10.5523 18 10C18 9.44771 17.5523 9 17 9C15.3078 9 14.4601 6.95405 15.6568 5.75737C16.0473 5.36684 16.0473 4.73368 15.6568 4.34315C15.2663 3.95263 14.6331 3.95263 14.2426 4.34315C13.046 5.53979 11 4.69219 11 3C11 2.44772 10.5523 2 10 2ZM7.00816 2.77703C7.12224 1.2243 8.41814 0 10 0C11.5819 0 12.8778 1.2243 12.9918 2.77703C14.1704 1.75977 15.9525 1.8104 17.071 2.92894C18.1896 4.04748 18.2402 5.82955 17.2229 7.00816C18.7757 7.12221 20 8.41812 20 10C20 11.5819 18.7757 12.8778 17.223 12.9918C18.2403 14.1704 18.1896 15.9525 17.0711 17.0711C15.9525 18.1896 14.1705 18.2402 12.9918 17.2229C12.8778 18.7757 11.5819 20 10 20C8.41813 20 7.12221 18.7757 7.00816 17.2229C5.82955 18.2402 4.04745 18.1896 2.92889 17.0711C1.81034 15.9525 1.75972 14.1704 2.77702 12.9918C1.2243 12.8778 0 11.5819 0 10C0 8.41812 1.22433 7.12221 2.77709 7.00816C1.75978 5.82955 1.81041 4.04747 2.92896 2.92892C4.0475 1.81038 5.82955 1.75975 7.00816 2.77703Z"
        fill={fill || isActive ? "#00D796" : "#82868C"}
      />
      <path
        d="M10 8C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12C10.5304 12 11.0391 11.7893 11.4142 11.4142C11.7893 11.0391 12 10.5304 12 10C12 9.46957 11.7893 8.96086 11.4142 8.58579C11.0391 8.21071 10.5304 8 10 8ZM7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6C11.0609 6 12.0783 6.42143 12.8284 7.17157C13.5786 7.92172 14 8.93913 14 10C14 11.0609 13.5786 12.0783 12.8284 12.8284C12.0783 13.5786 11.0609 14 10 14C8.93913 14 7.92172 13.5786 7.17157 12.8284C6.42143 12.0783 6 11.0609 6 10C6 8.93913 6.42143 7.92172 7.17157 7.17157Z"
        fill={fill || isActive ? "#00D796" : "#82868C"}
      />
    </svg>
  );
};
export default SettingsIcon;
