// Deprecated.

const Nuxt = require('nuxt')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = require('express')()

app.use(bodyParser.json())

app.use(session({
  secret: 'luoguof123456!!',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}))

app.post('/_api/login', function (req, res) {
  if (req.body.username === 'laosb' && req.body.password === 'test123') {
    req.session.authUser = { username: 'laosb' }
    return res.json({ username: 'laosb' })
  }
  res.status(401).json({ error: 'Bad credentials' })
})

app.post('/_api/logout', function (req, res) {
  delete req.session.authUser
  res.json({ ok: true })
})

const isProd = process.env.NODE_ENV === 'production'
const nuxt = new Nuxt({ dev: !isProd })
const promise = (isProd ? Promise.resolve() : nuxt.build())
promise.then(() => {
  app.use(nuxt.render)
  app.listen(process.env.PORT || 3000)
  console.log(`Server is listening on http://localhost:${process.env.PORT || 3000}`)
})
.catch((error) => {
  console.error(error)
  process.exit(1)
})
