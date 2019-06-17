const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.response.body = 'Hello World, again ... just to make sure';
};

app.use(main);
app.listen(3000);
