react-router가 v7이 되면서 remix하고 통합됐음.

framework 버전하고 기존 library 버전이 있는데,
새로 나온 framework 버전이 remix임.

근데 remix는 아무래도 next한테 밀려서

일단 기존 library 버전의 react-router만 자세히 알아보고 (사실 이것만으로도 벅참)

next의 라우터랑 remix 는 다음에 다루도록 하겠습니다.

---

vite 시작

`npm i react-router`

---

배포시에 뭔가 후처리 해야할게 있을 수 있음.
index.html로 전부 리디렉션 시킨다나 뭐라나.
유의하길 ㅇㅇ

---

react-router는 경로에 따른 페이지를 지원함.
history에 의해서(Link, navigate, 뒤로가기 버튼, 앞으로가기 버튼) 이동하는건 그냥 컴포넌트 단위로 이동되지만, (이건 useBlocker로 막을 수 있음)
사용자가 URL을 직접 컨트롤하거나, 새로고침 버튼을 누르는건 아예 스크립트가 새로 로드됨. (이건 useBeforeLoad로 막을 수 있음)

그렇기 때문에 앞의 경우는 `shouldRevalidate` 에 의해서 loader를 컨트롤 할 수 있지만
뒤의 경우는 무조건 경로상의 모든 loader가 다 호출됨.

여기서 파생되는게 이제 호스팅할때 `SPA` 설정임.
어느 라우트로 가든 `index.html` 파일을 보여달라고 호스팅 서버한테 요청해야함.
그래야 이제 index.html 안에 있는 react-router가 URL을 보고 어떤 페이지를 보여줄지 판단하는거죠

---

gh-pages 로 호스팅하는경우 basename에 repo 이름 적어줘야한다는거 잊지말자.
