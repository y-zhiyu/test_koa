// simple router
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  console.log(ctx.request.path)
  if (ctx.request.path !== '/') {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
  } else {
    ctx.response.body = 'Hello World';
  }
};

app.use(main);
app.listen(3000);