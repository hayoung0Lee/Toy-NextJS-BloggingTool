# Toy-NextJS-BloggingTool(v1)

The main goal of the `Toy-NextJS-BloggingTool` project is to learn how Next.js works, especially how Server-Side Rendering, Incremental Static Generation, Static Generation, Client-Side Rendering work all together in this framework. I was inspired a lot by [Velog project](https://github.com/velopert/velog).

- visit [Next.js](https://nextjs.org) to find more about this framework.

# Project stack

- Next.js
- styled-component
- redux
- postgresql
- redis
- aws
- typescript

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
2. Page - [[toy blog service] Next.js의 Pages 이해하기](https://mytutorials.tistory.com/342)
3. API
4. Database(Custom Server)
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

# Reference

# License

This is released under the MIT license. See [LICENSE](LICENSE) for details.
