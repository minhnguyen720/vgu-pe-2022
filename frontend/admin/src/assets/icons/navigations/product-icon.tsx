import React from "react";

interface INavigationProps extends React.SVGAttributes<{}> {
  isActive?: boolean;
}

const ProductIcon: React.FC<INavigationProps> = ({
  isActive,
  fill,
  ...props
}) => {
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
        d="M2 2.6335C2.13986 2.57696 2.308 2.51452 2.50288 2.45153C3.19213 2.22874 4.21301 2 5.5 2C6.78699 2 7.80787 2.22874 8.49712 2.45153C8.692 2.51452 8.86014 2.57696 9 2.6335V13.5129C8.14878 13.2485 6.96016 13 5.5 13C4.03984 13 2.85122 13.2485 2 13.5129V2.6335ZM10 0.885279C9.77428 0.78519 9.47653 0.666219 9.11225 0.548473C8.25463 0.271262 7.02551 0 5.5 0C3.97449 0 2.74537 0.271262 1.88775 0.548473C1.45896 0.68707 1.12235 0.827363 0.886892 0.936562C0.769109 0.991186 0.676448 1.03812 0.610019 1.07329C0.576798 1.09089 0.550113 1.10555 0.530103 1.11679L0.505102 1.131L0.496382 1.13607L0.492972 1.13807L0.491505 1.13893C0.489539 1.1401 0.245103 1.28495 0.490198 1.13971C0.186333 1.31978 0 1.64679 0 2V15C0 15.3593 0.192752 15.691 0.504925 15.8689C0.816899 16.0466 1.20021 16.0435 1.50921 15.8606C1.50648 15.8622 1.50477 15.8632 1.50477 15.8632L1.50609 15.8625L1.50765 15.8616L1.50921 15.8606C1.51529 15.8572 1.52757 15.8505 1.54599 15.8408C1.58283 15.8213 1.64398 15.7901 1.72834 15.7509C1.89718 15.6726 2.15822 15.5629 2.50288 15.4515C3.19213 15.2287 4.21301 15 5.5 15C6.78699 15 7.80787 15.2287 8.49712 15.4515C8.84178 15.5629 9.10282 15.6726 9.27166 15.7509C9.35602 15.7901 9.41717 15.8213 9.45401 15.8408C9.47243 15.8505 9.48474 15.8573 9.49083 15.8608C9.49357 15.8623 9.49523 15.8632 9.49523 15.8632M9.49523 15.8632L9.49391 15.8625L9.49235 15.8616L9.49083 15.8608C9.80477 16.0462 10.1954 16.0463 10.5092 15.8606C10.5153 15.8572 10.5276 15.8505 10.546 15.8408C10.5828 15.8213 10.644 15.7901 10.7283 15.7509C10.8972 15.6726 11.1582 15.5629 11.5029 15.4515C12.1921 15.2287 13.213 15 14.5 15C15.787 15 16.8079 15.2287 17.4971 15.4515C17.8418 15.5629 18.1028 15.6726 18.2717 15.7509C18.356 15.7901 18.4172 15.8213 18.454 15.8408C18.4724 15.8505 18.4847 15.8573 18.4908 15.8608L18.4919 15.8613C18.8007 16.0435 19.1835 16.0464 19.4951 15.8689C19.8072 15.691 20 15.3593 20 15V2C20 1.64679 19.8137 1.31978 19.5098 1.13971L19.5085 1.13893L19.507 1.13807L19.5036 1.13607L19.4949 1.131L19.4699 1.11679C19.4499 1.10555 19.4232 1.09089 19.39 1.07329C19.3236 1.03812 19.2309 0.991186 19.1131 0.936562C18.8776 0.827363 18.541 0.68707 18.1123 0.548473C17.2546 0.271262 16.0255 0 14.5 0C12.9745 0 11.7454 0.271262 10.8877 0.548473C10.5235 0.666219 10.2257 0.78519 10 0.885279M18 2.6335V13.5129C17.1488 13.2485 15.9602 13 14.5 13C13.0398 13 11.8512 13.2485 11 13.5129V2.6335C11.1399 2.57696 11.308 2.51452 11.5029 2.45153C12.1921 2.22874 13.213 2 14.5 2C15.787 2 16.8079 2.22874 17.4971 2.45153C17.692 2.51452 17.8601 2.57696 18 2.6335ZM18.4908 2.86075C18.4935 2.86228 18.4952 2.86325 18.4952 2.86325L18.4939 2.86248L18.4908 2.86075ZM18.4908 15.8608L18.4941 15.8626L18.4919 15.8613"
        fill={fill || isActive ? "#00D796" : "#82868C"}
      />
    </svg>
  );
};
export default ProductIcon;
