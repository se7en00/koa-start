// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
const path = require('path');

// 创建一个Koa对象表示web app本身:
const app = new Koa();
const serve = require('koa-static')
const staticPath = path.resolve(__dirname, 'static');

const staticServe = serve(staticPath, {
    setHeaders: (res, path, stats) => {
      if (path.indexOf('jpeg') > -1) {
        res.setHeader('Cache-Control', ['private', 'max-age=60']);
      }
    }
  });

app.use(staticServe);
  
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
    console.log("2222"); // 打印URL
});

const routing = require('./routers')
routing(app)
// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');