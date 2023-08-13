const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello About!')
})

app.get('/info', (req, res) => {
  res.send('Hello Info!')
})

app.get('/menu', (req, res) => {
  res.send('Hello Menu!');
})

app.get('/:email', (req, res) => {
  let email = req.params.email
  res.send(`Your email is ${email}`)
})

app.get('/about', (req, res) => {
  let key1 = req.query.key1
  let key2 = req.query.key2
  res.send(`Return key1 is ${key1} and key2 is ${key2}`)
})

// app.post('/users', (req, res) => {
  
// })

app.post('/users', (req, res) => {
  res.set('Custom-Header', 'this is a custom header')
  res.status(201)
  res.send(`created user`)
})


// app.get('/song', (req, res) => {

// })

// app.post('/song', (req,res) => {

// })

// app.get('/song/:id', (req, res) => {
//   let id = req.params.id

// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
