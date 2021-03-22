# CRUD 구현해보자

이번 목표는 CRUD를 위한 API endpoints를 만드는 것이다. 나는 custom server를 사용하지 않고 next.js에서 지원하는 api 기능을 활용해서 개발을 해보려고 한다. 추후에 custom server를 사용할 이유가 있을때는 express와 함께 사용해보려고 한다.

## API를 Next.js는 어떻게 처리하나... 대강!

- node_modules/next/dist/next-server/server/next-server.js 파일내를 보면 아래처럼 처리하는 부분이 있다.

```javascript
if (pathname === "/api" || pathname.startsWith("/api/")) {
  const handled = await this.handleApiRequest(req, res, pathname, query);
  if (handled) {
    return { finished: true };
  }
}
```

위와 같은 부분이 있다. `/api`로 시작하는 요청은 여기서 처리해버리고 return을 한다. 이때 handleApiRequest를 타고 어찌저찌 가면 결국 `node_modules/next/dist/next-server/server/api-utils.js` 파일을 참조하고 있다는 것을 알 수 있다.

- 아래는 apiResolver의 내용이다.

```javascript
async function apiResolver(
  req,
  res,
  query,
  resolverModule,
  apiContext,
  propagateError,
  onError
) {
  console.log(
    "apiResolver"
    // req,
    // res,
    // query,
    // resolverModule,
    // apiContext,
    // propagateError,
    // onError
  );
  const apiReq = req;
  const apiRes = res;
```

내가 이걸 확인하는 이유는 `api/hello.js`파일을 아래와 같이 작성하고 요청을 했을때 hello.js 파일을 요청이 왔을때 한번읽고 build하는것 같아서다.

```javascript
console.log("Hello API");
export default (req, res) => {
  res.status(200).json({ name: "John Doe" });
};
```

이렇게 해두면 최초의 `api/hello` 요청이 왔을때는 `console.log("Hello API");`이 출력되고, `apiResolver`가 출력되는데 그다음부터는 `apiResolver`만 출력된다.

- 첫번째:

  <img src="./img/firstCall.png" width=200>

- 그 다음부터

  <img src="./img/moreCall.png" width=200>

이 이상으로 파악은 어려운데, api관련 기능 처리관련해서는 `apiResolver` 에서 처리가 일어나고 있다는것을 파악했고, 이제 잘되어있겠구나... 믿고 기능을 개발해보려고 한다.

## CRUD를 위한 Rest api endpoint만들기

- API또한 page를 구성할때와 거의 같다(같은것 같다..)

    <img src="./img/apiFolder.png" width=200>

  - 위처럼 구성하면 `api/posts` 요청은 index.js 파일에서 정의 가능하다.
  - `api/posts/:postId`는 [postId].js 파일에서 정의할 수 있다.
  - 이렇게 아래의 api를 정의하고 기능을 구현하려고 한다.

    ```javascript
    // api/posts/index.js에 정의
    // GET api/posts

    // GET api/posts?title=[kw]

    // POST api/posts

    // api/posts/[postId].js에 정의
    // GET api/posts/:postId

    // PUT api/posts/:postId

    // DELETE api/posts/:postId
    ```

## 참고자료

- https://velog.io/

- https://nextjs.org/docs/api-routes/introduction

- How to save markdown
  - [DEV: How should markdown be saaved and rendered?](https://dev.to/michael/how-should-markdown-be-saved-and-rendered-51f)
  - [How would you store markdown?](https://www.reddit.com/r/Database/comments/iwvjse/how_would_you_store_markdown/)
  - [What is the best way to store a field that supports markdown in my database when I need to render both HTML and “simple text” views?](https://stackoverflow.com/questions/17250972/what-is-the-best-way-to-store-a-field-that-supports-markdown-in-my-database-when)
