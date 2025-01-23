yarn create vite . --template react-swc-ts
yarn set version berry
yarn

# react, reactdom 19 버전
yarn up "**"

# yarn berry typescript 에러 방지
yarn dlx @yarnpkg/sdks vscode
git init

# .gitignore에 yarn berry 추가
cat <<'EOL' >> .gitignore

# yarn berry
.pnp.*
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
EOL


# eslint 파일 수정

sed -i '' '22,25d' eslint.config.js

sed -i '' '21a\
      "react-refresh/only-export-components": "off",\
      "no-unused-vars": "off",\
      "@typescript-eslint/no-unused-vars": "off",\
      "@typescript-eslint/no-explicit-any": "warn",\
' eslint.config.js

# 절대 경로 추가
yarn add -D @types/node

sed -i '' '1a\
import path from "path";\
' vite.config.ts

sed -i '' '7a\
  resolve: {\
    alias: {\
      "@": path.resolve(__dirname, "./src"),\
    },\
  },\
' vite.config.ts

sed -i '' '1a\
  "compilerOptions": {\
    "baseUrl": ".",\
    "paths": {\
      "@/*": ["./src/*"]\
    }\
  },\
' tsconfig.json

sed -i ''  '2a\
    "baseUrl": ".",\
    "paths": {\
      "@/*": ["./src/*"]\
    },\
' tsconfig.app.json

# tailwind 설치

yarn add -D tailwindcss@3 postcss autoprefixer prettier-plugin-tailwindcss
yarn dlx tailwindcss@3 init -p

cat <<'EOL' > .prettierrc
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindFunctions": ["clsx", "cva", "cn"],
}
EOL

# 폰트 설정

cat <<'EOL' > src/index.css
/* "Pretendard Variable" */
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");

/* Hahmlet */
@import url("https://fonts.googleapis.com/css2?family=Hahmlet:wght@100..900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

cat <<'EOL' > tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '""Pretendard Variable"',
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          '""Helvetica Neue"',
          '""Segoe UI"',
          '""Apple SD Gothic Neo"',
          '""Noto Sans KR"',
          '""Malgun Gothic"',
          '""Apple Color Emoji"',
          '""Segoe UI Emoji"',
          '""Segoe UI Symbol"',
          "sans-serif",
        ],
        serif: ["Hahmlet", "Georgia", '""Times New Roman"', "Times", "serif"],
      },
    },
  },
  plugins: [],
};

EOL

# shadcn 설치
yarn dlx shadcn init -d

# lucide-react 설치
yarn add lucide-react

# vitest & react-testing-library 설치
yarn add -D vitest @testing-library/react @testing-library/user-event @testing-library/jest-dom

