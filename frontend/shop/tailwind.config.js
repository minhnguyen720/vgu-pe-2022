module.exports = {
	mode: "jit",
	purge: {
		content: ["./src/**/*.{js,ts,jsx,tsx}"]
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screens: {
				"3xl": "1900px"
			},
			fontFamily: {
				body: ["Open Sans", "system-ui", "sans-serif"],
				heading: ["Open Sans", "system-ui", "sans-serif"]
			},
			fontSize: {
				xs: "14px",
				sm: "16px",
				heading: "16px",
				paragraph: "16px",
				md: "18px",
				"display-1": "44px",
				"display-2": "36",
				"display-3": "30px",
				"special-heading": "18px"
			},
			colors: {
				"dark-blue": "#15114E",
				light: "#FFFFFF",
				green: {
					DEFAULT: "#00D796",
					hover: "#02BF86",
					active: "#01AC75"
				},
				blue: {
					DEFAULT: "#349EFF",
					hover: "#218BEC",
					active: "#107ADB",
					300: "#3C64B1"
				},
				gray: {
					10: "#EEF2F5",
					100: "#C5CDD4",
					200: "#B0BDC6",
					300: "#82868C",
					400: "#555F6F"
				},
				semibold: "#15114E",
				red: {
					DEFAULT: "#FF3346"
				}
			},
			textColor: {
				semibold: "#15114E"
			},
			fontColor: {
				semibold: "#15114E"
			}
		}
	},
	plugins: [require("tailwindcss-rtl")]
};
