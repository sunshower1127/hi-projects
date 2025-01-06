Todos -> 그냥 이제 Query, Queries(동시요청), Mutation들, invalidateQueries.

---

Projects -> 페이지 만드는거. `placeholderData: keepPreviousData`

---

Products -> 무한 스크롤

`useInfiniteQuery`
무한스크롤을 만들라고 쓰라는거 같은데
앞에서 페이징쓰는건 페이지단위로 보여주는거고
무한 스크롤링은 계속 전체를 축적해나가면서 보여주는거니깐
다를 수 있죠.

---

자세한건 너무 어려워서 굳이.. 알아야하나 싶고
그냥 딱 페이지용, 무한스크롤용이다.

1. Mutation하고 완료됐을때 따로 한번 더 Query를 안하더라도 Query한 부분만 다시 가져오기 가능함. -> `queryClient.invalidateQueries(["키값"])`

2. 기본적으로 옵션 안주면 무조건 API에게 요청을 보냄.

3. `staleTime` 을 사용하면 무조건 API에게 요청을 보내지않고 캐시에서 데이터를 가져올 수 있음. `enabled` 옵션으로 조건부도 가능.

4. 아직 가져온적이 없어서 캐시에 없어 로딩중일때 무슨 데이터를 보여줄지 `placeholderData`로 정할 수 있음. 이때 캐시에 있는 데이터를 보여주고 싶다면, `queryClient.getQueryData(["키값"])`을 사용하면 됨.

5. 로딩중일때 `data: undefined` 가 되는게 아니라 그냥 페칭으로 다 가져온 후에 바꾸고 싶다면 `placeholderData: keepPreviousData` 라고 하면 됨. -> 로딩에 대비하는 다양한 방법.

6. 무한 스크롤 만들거면 `useInfiniteQuery` 쓰셈. 그냥 `useQuery`하고 차이는 얘는 축적형임. 계속 가져오는 데이터를 축적시킴.

7. `queryClient.prefetchQuery` 라는게 있음. 사용법은 useQuery하고 똑같은데 데이터를 그냥 캐시에 불러오기만 함. 사용자가 미리 누를만한 것들에 캐시 설정이랑 같이 쓰면 좋을듯. 마우스 호버시에도 뭐 쓴다고보면.
