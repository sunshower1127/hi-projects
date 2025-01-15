일단 보통 용도가 뭐냐?

로컬 캐싱이죠.
큰 파일은 idb
작은 파일은 localstorage

큰 파일은 뭐 예시보니깐 플레이리스트가 3000개였나 그정도 사이즈? 암튼
대부분은 서버에서 받아오는거일테고,

이게 그냥 냅다 queryClient 오브젝트 자체를 idb에 꽂아버리는수도 있고
https://tanstack.com/query/latest/docs/framework/react/plugins/persistQueryClient/#api

아니면 내가 query나 mutation에다가
직접 구현할 수도 있음. 이경우가 더 정확할 수도 있고

---

일단 라이브러리 없이는 쓰기 힘들고 너무 전통적인 방법이라 async로 쓰려면 하나하나 다 Promise로 감싸야함.

최소한 idb는 쓰고
진짜 쉽게 쓰려면 idb-keyval 쓰면 됨.

일단 react-query부터 제대로 마스터를 하고
그다음에 넘어가는게 맞아보임.
react-query의 심화과정이라고 봅시다 그냥.

---
