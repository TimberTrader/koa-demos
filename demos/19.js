const Koa = require('koa');
const app = new Koa();

const main = function(ctx) {
  const n = Number(ctx.cookies.get('view') || 0);
  /* + 1 omitted above ... displays only last # views
  when added views incremented by 1
  but cookie value in dev.tools shows 1 higher ... investigate*/
  ctx.cookies.set('view', n);
  ctx.response.body = n + ' views';
}

app.use(main);
app.listen(3000);
