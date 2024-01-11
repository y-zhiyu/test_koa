// form
const Koa = require('koa');
// const koaBody = require('koa-body'); // 用于koa框架解析请求体的模块
const { koaBody } = require('koa-body')

const app = new Koa();

const main = async function (ctx) {
  const body = ctx.request.body;
  console.log("🚀 ~ main ~ ctx:", ctx)
  if (!body.name) ctx.throw(400, '.name required');
  ctx.body = { name: body.name };
};

app.use(koaBody());
app.use(main);
app.listen(3000);