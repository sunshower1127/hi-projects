/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"];
export const theme = {
  extend: {
    fontFamily: {
      sans: [
        '"Pretendard Variable"',
        "Pretendard",
        "-apple-system",
        "BlinkMacSystemFont",
        "system-ui",
        "Roboto",
        '"Helvetica Neue"',
        '"Segoe UI"',
        '"Apple SD Gothic Neo"',
        '"Noto Sans KR"',
        '"Malgun Gothic"',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        "sans-serif",
      ],
      serif: ["Hahmlet", "Georgia", '"Times New Roman"', "Times", "serif"],
    },
  },
};
export const plugins = [];
