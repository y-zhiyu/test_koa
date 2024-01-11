// logger
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  // console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  let _str = {
    date: new Date(),
    method: ctx.request.method,
    url: ctx.request.url
  }
  ctx.response.body = _str;
};

app.use(main);
app.listen(3000);