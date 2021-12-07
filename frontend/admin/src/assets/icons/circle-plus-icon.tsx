import React from "react";
const CirclePlusIcon: React.FC<React.SVGAttributes<{}>> = ({
  fill,
  ...props
}) => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.4994 5.83329C11.056 5.83329 5.83268 11.0566 5.83268 17.5C5.83268 23.9433 11.056 29.1666 17.4994 29.1666C23.9427 29.1666 29.166 23.9433 29.166 17.5C29.166 11.0566 23.9427 5.83329 17.4994 5.83329ZM2.91602 17.5C2.91602 9.44581 9.4452 2.91663 17.4994 2.91663C25.5535 2.91663 32.0827 9.44581 32.0827 17.5C32.0827 25.5541 25.5535 32.0833 17.4994 32.0833C9.4452 32.0833 2.91602 25.5541 2.91602 17.5ZM17.4994 10.2083C18.3048 10.2083 18.9577 10.8612 18.9577 11.6666V16.0416H23.3327C24.1381 16.0416 24.791 16.6945 24.791 17.5C24.791 18.3054 24.1381 18.9583 23.3327 18.9583H18.9577V23.3333C18.9577 24.1387 18.3048 24.7916 17.4994 24.7916C16.6939 24.7916 16.041 24.1387 16.041 23.3333V18.9583H11.666C10.8606 18.9583 10.2077 18.3054 10.2077 17.5C10.2077 16.6945 10.8606 16.0416 11.666 16.0416H16.041V11.6666C16.041 10.8612 16.6939 10.2083 17.4994 10.2083Z"
        fill={fill || "#C5CDD5"}
      />
    </svg>
  );
};
export default CirclePlusIcon;