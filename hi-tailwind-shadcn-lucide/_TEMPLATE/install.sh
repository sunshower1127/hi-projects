yarn create vite . --template react-swc-ts
yarn set version berry
yarn

# react, reactdom 19 버전
yarn up "**"

# yarn berry typescript 에러 방지
yarn dlx @yarnpkg/sdks vscode
git init

# .gitignore에 yarn berry 추가
cat <<EOL >> .gitignore

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
sed -i '' '/reactHooks\.configs\.recommended\.rules,/a \
      "react-refresh/only-export-components": "off",\
      "no-unused-vars": "off",\
      "@typescript-eslint/no-unused-vars": "off",\
' eslint.config.js



yarn dev