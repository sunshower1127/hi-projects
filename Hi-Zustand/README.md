# Zustand -> 상태 관리 라이브러리

주로 사용자 설정이라던지, 전역 상태 관리에 사용함.
(백엔드에서 건너오는 데이터는 tanstack/react-query를 많이 사용)

https://zustand.docs.pmnd.rs/getting-started/introduction <- Zustand 문서
https://www.heropy.dev/p/n74Tgc <- 잘 정리되어 있는 블로그

# Setup

vite(react, ts) 설정

`npm i zustand`

immer 쓰려면 (쓰는거 추천)
`npm i immer`

---

[x] 타입스크립트 완벽 호환
[x] 1개의 store, 여러개 slice
[x] 부분 구독(성능 최적화) 정리
[x] middlewares(devtools, persist, immer) 완벽 정리

---

slice 단위로 가져오는거 구현하느라고 좀 힘들었는데
굳이? 싶긴함
마이크로하게 하나씩 가저오는게 훨씬 낫죠. 괜히 시간만 낭비했네
action은 그냥 리렌더링에 아무런 영향없으니깐 actions에다가 함수 다 몰아넣는거 추천함.
일단 좋은 경험했다 치고 끝냄

---
