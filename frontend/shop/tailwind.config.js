module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "1900px",
      },
      spacing: {
        1: "5px",
        17: "70px",
        11: "44px",
        13: "50px",
        36: "150px",
        80: "345px",
        "1/2.5": "47%",
        "49p": "49%",
        "fit-content": "fit-content",
      },
      fontFamily: {
        body: ["Open Sans", "system-ui", "sans-serif"],
        heading: ["Open Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: "0.7rem",
        sm: "0.8rem",
        md: "0.9rem",
        heading: "0.9rem",
        paragraph: "0.8rem",
        "display-1": "34px",
        "display-2": "28px",
        "display-3": "24px",
        "special-heading": "12px",
        lg: "1.2rem",
        xl: "1.4rem",
        xxl: "1.8rem",
        xxxl: "2.2rem",
      },
      boxShadow: {
        top: "0 0 10px rgba(0,0,0,.3)",
        "top-sm": "0px 0px 10px rgba(0,0,0,.18)",
      },
      colors: {
        error: "#FF3346",
        black: "#15114E",
        "dark-blue": "#15114E",
        light: {
          DEFAULT: "#FFFFFF",
          300: "#F1F3F3",
        },
        "bold-color": "#15114E",
        primary: {
          DEFAULT: "#00D796",
          hover: "#02BF86",
        },
        ["secondary-1"]: {
          DEFAULT: "#349EFF",
          hover: "#218BEC",
          active: "#107ADB",
          300: "#3C64B1",
        },
        green: {
          DEFAULT: "#00D796",
          10: "#E7F5F1",
          hover: "#02BF86",
          active: "#01AC75",
        },
        blue: {
          DEFAULT: "#349EFF",
          hover: "#218BEC",
          active: "#107ADB",
          300: "#3C64B1",
        },
        yellow: {
          200: "FFB12F",
        },
        white: {
          DEFAULT: "#FFFFFF",
          blue: "#F9FAFC",
        },
        gray: {
          DEFAULT: "#A3ADB4",
          10: "#EEF2F5",
          20: "#D4DADF",
          30: "#8A8A98",
          100: "#C5CDD4",
          200: "#B0BDC6",
          300: "#82868C",
          400: "#555F6F",
          500: "#9A9A9A",
        },
        semibold: "#15114E",
        red: {
          DEFAULT: "#FF3346",
        },
      },
      textColor: {
        semibold: "#15114E",
      },
      fontColor: {
        semibold: "#15114E",
      },
      borderRadius: {
        sm: "5px",
        md: "7px",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  // plugins: [require("tailwindcss-rtl")]
};
