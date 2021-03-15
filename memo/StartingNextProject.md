# Starting Next Project(Main feature)

1. Make Next Project

```
npx create-next-app
```

1. [Velog](https://velog.io/)의 기능들:

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

2. 이를 바탕으로 도출한 기능
   - 블로그 글 CRUD
     - markdown file 자체로 스토리지에 저장하고 읽어오는 것 구현
     - 댓글, 대댓글 구현
