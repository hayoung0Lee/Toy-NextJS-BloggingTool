# Starting Next Project(Main feature)

1. Make Next Project

```
npx create-next-app
```

2. [Velog](https://velog.io/)의 기능들:

- main화면

  <img src="./img/main.png" width=500>

- 소개 화면

  <img src="./img/intro.png" width=500>

- create 화면

  <img src="./img/createPage.png" width=500>

- create전 옵션 설정 화면

  <img src="./img/createOptionSetting.png" width=500>

- 글을 읽는 화면

  <img src="./img/read.png" width=500>

- 글 전체 목록

  <img src="./img/list.png" width=500>

- (추가적으로 필요할 기능)그리고 로그인/로그아웃 기능

  - 로그아웃 버튼

    <img src="./img/logout.png" width=100>

  - 로그인 버튼

    <img src="./img/login.png" width=100>

  - 소셜 로그인

    <img src="./img/socialLogin.png" width=100>

3. 이를 바탕으로 도출한 기능

   - 블로그 글 CRUD
     - markdown file 자체로 스토리지에 저장하고 읽어오는 것 구현
     - 댓글, 대댓글 구현

4. 각 페이지를 Next.js의 어떤 구성 방법으로 할지 구상

- markdown file은 next.js 서버에 저장, 추후에 분리할 수 있도록
- (intro)소개 페이지는 static page로 작성하되, update가 종종 있으면 incremental regeneration으로 구현
- (main/list)목록 페이지는 static하게 만들되, 컨텐츠가 업데이트된 경우 regenerate
- (create)create page는 static하게 빌드
- (read) static build + incremental regeneration 또는 contents만 client에서 fetch해서 보여주기
- (update) 수정창은 server-side rendering
  - 내 생각엔 server-side rendering이 될것 같은데, 컨텐츠 넣어서 렌더링 해줘야하니까? 아니면 static하게 만들어서 보내고, 컨텐츠만 client에서 호출해서 뿌려줄수도 있을 것 같다
- (delete) build 한 것을 어떻게 지우지?
  - 없어진 것에 요청이 오면 없다고 알리는 방법에 대해서는 공부하면서 이해하기
  - [참고](https://github.com/vercel/next.js/discussions/18967)

5. Database

- Next.js가 어떻게 동작하는지를 공부하는 것이 우선이라 효율이나 그런걸 많이 고려하지 못하고 구성하겠지만 나중에 댓글이나, 대댓글 기능을 구성할때 심각한 문제가 있으면 고칠 것 같다.
- 시작할땐 우선 내가 블로그 글을 작성하는 기능이 우선이라 `pk, 파일 경로, 작성일, 생성일` 이렇게만 구성할 예정
- 추후에 로그인 기능이 필요하면 `user 정보 관련 테이블`, `댓글 관련 테이블`, 다중 유저를 받는 것으로 기능을 확장한다면 위의 글 관련 테이블에 user 아이디를 추가해서 컨텐츠를 관리할 것 같다.

## 앞으로 할일

실제로 삽질하면서 구성을 실제로 해보고 꾸준히 계획을 업데이트 해야할 것 같다. 아직 Next.js도 잘몰라서 지금의 계획이 맞는지는 잘모르겠지만 일단 삽질을 시작하려고 한다!
