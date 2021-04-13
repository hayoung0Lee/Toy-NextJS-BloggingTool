# Toy-NextJS-BloggingTool(v1)

The main goal of the `Toy-NextJS-BloggingTool` project is to learn how Next.js works, especially how Server-Side Rendering, Incremental Static Generation, Static Generation, Client-Side Rendering work all together in this framework. I was inspired a lot by [Velog project](https://github.com/velopert/velog).

- visit [Next.js](https://nextjs.org) to find more about this framework.

# Project stack

- Next.js
- typescript
- redux
- postgresql
- redis
- aws

# Run on your machine and customize it as you wish

You can run my project as develop mode following the commands below.

```
// get this docker-compose file: https://github.com/hayoung0Lee/docker-memo/blob/main/postgres/docker-compose.yml
docker-compose up --build

// make tables...
going to add this part soon

// run this next.js app
git clone 'this project'
npm install
npm run dev
```

# How I developed this website

1. Deriving features - [[toy blog service] Next.js 기반 서비스 기능 도출 과정](https://mytutorials.tistory.com/341)
   - summary:
     - What I want to gain from this project are these four things
       1. Learning how to do CRUD using Next.js with an understanding of Server-Side Rendering, Incremental Static Generation, Static Generation, Client-Side Rendering
       2. Learning how to use database(Postgres and Redis)
       3. Learning how to make my simple package by building Markdown Viewer Package and applying it to this project
       4. Making social login features and learning how to build a feature for showing trending and newest posts.
2. Page

   1. [[toy blog service] Next.js의 Pages 이해하기(간단한 Typescript설정)](https://mytutorials.tistory.com/342)
      - summary:
        - In this post, I wrote things that I learned mainly about `Pages` and `Routing`
   2. [[toy blog service] 각페이지를 어떻게 렌더링할지...](https://mytutorials.tistory.com/345)
   3. [[toy blog service] Intro Page와 Index 페이지를 통해서 살펴보는 Static Generation과 Incremental Static Regeneration차이](https://mytutorials.tistory.com/346)
   4. [[toy blog service] Dynamic route를 가진 페이지에서 getStaticProps를 하려면 getStaticPaths가 필요하다!](https://mytutorials.tistory.com/347)
   5. [[toy blog service] Preview Mode 이해하기](https://mytutorials.tistory.com/348)

3. API
4. Database(Custom Server):
   1. https://www.youtube.com/watch?v=PxiQDo0CmDE&list=PLYSZyzpwBEWSQsrukurP09ksi49H9Yj40&index=5&ab_channel=BrunoAntunes
5. Make my package
6. Styling
7. Typescript: [Typescript-Diary](https://github.com/hayoung0Lee/Typescript-Diary)
8. webpack:

<!-- 8. Authentication
1. Database
2. Redis
3.  CRUD
4.  Throttle, Debounce
5.  Deploy with AWS -->

# Important

- getStaticProps: for static build page - [visit](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)

# Reference

- [Next.js Building a Car Trader Application](https://www.youtube.com/watch?v=Hy4Por0yfqE&list=PLYSZyzpwBEWTt-0uuxAcSrJmMlnD9Yuz3&ab_channel=BrunoAntunes)
- [How to Build a Fullstack App with Next.js, Prisma, and PostgreSQL](https://vercel.com/guides/nextjs-prisma-postgres)

# License

This is released under the MIT license. See [LICENSE](LICENSE) for details.
