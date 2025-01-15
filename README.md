프레임워크나 라이브러리등 사용 예제들 모아놓기

1. 프로젝트 시작
   1. yarn berry
   2. [vite](https://ko.vite.dev/guide/) → `yarn create vite`
   3. lint → 커스텀 ts관련 몇몇 에러 끄기
2. 유틸리티 함수
   1. [immer](https://immerjs.github.io/immer/installation) → `yarn add immer`
   2. [ky](https://github.com/sindresorhus/ky) → `yarn add ky` , 헤더설정(Cache-Control, Credential)
   3. [zod](https://zod.dev/?id=from-npm) → `yarn add zod`
3. 디자인 & 애니메이션
   1. [tailwind](https://tailwindcss.com/docs/guides/vite) → 복잡함. 따로 서술
   2. [shadcn](https://ui.shadcn.com/docs/installation/vite) → tailiwind 설치법과 절대경로 세팅까지.. 얘도 프레임워크 단위.
   3. [lucide-react](https://lucide.dev/guide/installation) → `yarn add lucide-react` , Icon으로 쓰기 위한 추가 설정
   4. [framer-motion](https://motion.dev/docs/react-quick-start) → `yarn add motion`
4. 라우팅
   1. [react-router](https://reactrouter.com/start/library/installation) → `yarn add react-router` , src 갈아엎어야함, provider 설정
5. 스토리지, 캐싱, 상태관리
   1. [idb-keyval](https://github.com/jakearchibald/idb-keyval) → `yarn add idb-keyval`
   2. [react-cookie](https://github.com/bendotcodes/cookies/tree/main/packages/react-cookie) → `yarn add react-cookie` , provider 설정
   3. [zustand](https://zustand.docs.pmnd.rs/getting-started/introduction) → `yarn add zustand` , 미들웨어, devtool
   4. [react-query](https://tanstack.com/query/v5/docs/framework/react/installation) → `yarn add @tanstack/react-query` , provider, devtool
6. 테스트 & 문서화
   1. [vitest](https://vitest.dev/guide/) → `yarn add -D vitest`
   2. [storybook](https://storybook.js.org/docs/get-started/frameworks/react-vite?renderer=react) → `yarn dlx storybook@latest init` , 예시코드 하나정도?
   3. [playwright](https://playwright.dev/docs/intro) → `yarn create playwright`
