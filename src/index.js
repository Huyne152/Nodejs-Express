// Khai báo
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const hbs = require('express-handlebars')
const path  = require('path')




app.use(express.static(path.join(__dirname,'public')))
//http logger 
app.use(morgan('combined'))
// template-engine
app.engine('hbs', hbs.engine({
  extname:'.hbs' 
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'resources','views'))


app.get('/', (req, res) => {
  res.render('home')
})
app.get('/tintuc', (req, res) => {
  res.render('tintuc')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})