# Toy-NextJS-BloggingTool(v1)

The main goal of the `Toy-NextJS-BloggingTool` project is to learn how Next.js works, especially how Server-Side Rendering, Incremental Static Generation, Static Generation, Client-Side Rendering work all together in this framework. I was inspired a lot by [Velog project](https://github.com/velopert/velog).

- visit [Next.js](https://nextjs.org) to find more about this framework.

- also, in this project I'm using my custom react component package, `hayoung-markdown`. Please check [this package](https://github.com/hayoung0Lee/hayoung-markdown).

# Project stack

- Next.js
- Typescript
- [Json-server](https://github.com/typicode/json-server)

# Run on your machine and customize it as you wish

You can run my project as develop mode following the commands below.

```
// run this next.js app
git clone 'this project'
npm install
npm run build
npm run start

// run Json-server
npx json-server --watch ./src/utils/testDB.json

// when you have to update hayong-markdown package
npm install hayoung-markdown@latest // this is my markdown package
```

# How I developed this website

1. Deriving features
   - [[toy blog service] Next.js 기반 서비스 기능 도출 과정](https://mytutorials.tistory.com/341)
     - What I want to gain from this project are these three things
       1. Learning how to do CRUD using Next.js with an understanding of Server-Side Rendering, Incremental Static Generation, Static Generation, Client-Side Rendering
       2. Learning how to make my simple package by building Markdown Viewer Package and applying it to this project
       3. Building APIs
2. Page

   1. [[toy blog service] Next.js의 Pages 이해하기(간단한 Typescript설정)](https://mytutorials.tistory.com/342)
      - In this post, I wrote things that I learned mainly about `Pages` and `Routing`
   2. [[toy blog service] 각페이지를 어떻게 렌더링할지...](https://mytutorials.tistory.com/345)
   3. [[toy blog service] Intro Page와 Index 페이지를 통해서 살펴보는 Static Generation과 Incremental Static Regeneration차이](https://mytutorials.tistory.com/346)
   4. [[toy blog service] Dynamic route를 가진 페이지에서 getStaticProps를 하려면 getStaticPaths가 필요하다!](https://mytutorials.tistory.com/347)
   5. [[toy blog service] Preview Mode 이해하기](https://mytutorials.tistory.com/348)
   6. [[toy blog service] getServerSideProps 이용하기](https://mytutorials.tistory.com/352)

3. Making package & Learning Webpack

   1. [[toy blog service] Webpack, TypeScript와 React(Babel은 천천히!)](https://mytutorials.tistory.com/350)
   2. [[toy blog service] React Component를 Package화 하기(hayoung-markdown)](https://mytutorials.tistory.com/351)

4. APIs with Json Server
   - [[toy blog service] Next.js의 API와 json-server 사용하기](https://mytutorials.tistory.com/353)

<!-- 4. API & Database, Json Server:
      - simple server and apis using json-server: https://github.com/roldanjr/next-crud/blob/master/pages/api/employees/%5Bid%5D.js
1. Deploying with AWS -->

<!-- # Important

- getStaticProps: for static build page - [visit](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) -->

<!-- # Reference

- [Next.js Building a Car Trader Application](https://www.youtube.com/watch?v=Hy4Por0yfqE&list=PLYSZyzpwBEWTt-0uuxAcSrJmMlnD9Yuz3&ab_channel=BrunoAntunes)
- [How to Build a Fullstack App with Next.js, Prisma, and PostgreSQL](https://vercel.com/guides/nextjs-prisma-postgres) -->

<!-- Json-server: https://www.npmjs.com/package/json-server#database -->

<!-- Using React ContextAPI + useReducer as a replacement of Redux as a State Management Architecture: https://hmh.engineering/using-react-contextapi-usereducer-as-a-replacement-of-redux-as-a-state-management-architecture-336452b2930e -->

# License

This is released under the MIT license. See [LICENSE](LICENSE) for details.
