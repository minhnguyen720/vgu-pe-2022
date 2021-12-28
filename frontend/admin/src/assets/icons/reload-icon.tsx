import React from "react";
const ReloadIcon: React.FC<React.SVGAttributes<{}>> = ({ fill, ...props }) => {
  return (
    <svg
      width="32"
      height="40"
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 7.40649C16.7767 7.40649 17.4063 6.77689 17.4063 6.00024C17.4063 5.22359 16.7767 4.59399 16 4.59399V7.40649ZM5.14825 30.936C5.69952 31.4831 6.5899 31.4797 7.13697 30.9284C7.68404 30.3771 7.68062 29.4867 7.12935 28.9397L5.14825 30.936ZM12.83 11.2202C12.3992 11.8664 12.5738 12.7395 13.22 13.1703C13.8662 13.6011 14.7393 13.4265 15.1701 12.7803L12.83 11.2202ZM18 6.00024L19.1701 6.78029C19.377 6.46997 19.4521 6.09017 19.379 5.72446C19.3058 5.35874 19.0904 5.03705 18.7801 4.83017L18 6.00024ZM12.7801 0.830173C12.1339 0.399365 11.2608 0.573985 10.83 1.2202C10.3992 1.86641 10.5738 2.73951 11.22 3.17031L12.7801 0.830173ZM16 32.5316C15.2234 32.5316 14.5938 33.1612 14.5938 33.9378C14.5938 34.7145 15.2234 35.3441 16 35.3441V32.5316ZM26.8518 9.00202C26.3005 8.45496 25.4102 8.45837 24.8631 9.00965C24.316 9.56092 24.3194 10.4513 24.8707 10.9984L26.8518 9.00202ZM19.1701 28.7803C19.6009 28.1341 19.4263 27.261 18.7801 26.8302C18.1339 26.3994 17.2608 26.574 16.83 27.2202L19.1701 28.7803ZM14 34.0002L12.83 33.2202C12.3992 33.8664 12.5738 34.7395 13.22 35.1703L14 34.0002ZM19.22 39.1703C19.8662 39.6011 20.7393 39.4265 21.1701 38.7803C21.6009 38.1341 21.4263 37.261 20.7801 36.8302L19.22 39.1703ZM16 4.59399C7.49139 4.59399 0.593781 11.4916 0.593781 20.0002H3.40628C3.40628 13.0449 9.04469 7.40649 16 7.40649V4.59399ZM0.593781 20.0002C0.593781 24.2756 2.33712 28.1464 5.14825 30.936L7.12935 28.9397C4.82852 26.6564 3.40628 23.4957 3.40628 20.0002H0.593781ZM15.1701 12.7803L19.1701 6.78029L16.83 5.2202L12.83 11.2202L15.1701 12.7803ZM18.7801 4.83017L12.7801 0.830173L11.22 3.17031L17.22 7.17031L18.7801 4.83017ZM16 35.3441C24.5087 35.3441 31.4063 28.4464 31.4063 19.9378H28.5938C28.5938 26.8931 22.9554 32.5316 16 32.5316V35.3441ZM31.4063 19.9378C31.4063 15.6625 29.6629 11.7917 26.8518 9.00202L24.8707 10.9984C27.1715 13.2816 28.5938 16.4423 28.5938 19.9378H31.4063ZM16.83 27.2202L12.83 33.2202L15.1701 34.7803L19.1701 28.7803L16.83 27.2202ZM13.22 35.1703L19.22 39.1703L20.7801 36.8302L14.7801 32.8302L13.22 35.1703Z"
        fill={fill || "black"}
      />
    </svg>
  );
};
export default ReloadIcon;