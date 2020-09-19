const Koa = require('koa')
const serve = require('koa-static')
const path = require('path')

const app = new Koa()
const publicFiles = serve(path.join(__dirname, 'src'))
app.use(publicFiles)

app.listen(3000)
