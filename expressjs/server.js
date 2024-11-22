const express = require('express')
const app = express()
const port = 3000


const todos = [ 
  {id:1, todo:"learn express", done:false},
  {id:2, todo:"learn js", done:true},
  {id:3, todo:"learn react", done:false}
]

// routes
app.get('/', (req, res) => {
  res.send('Ola Mundo!')
})
// route that returns a list of to dos to the client
app.get('/api/v1/todos',(req,res)=>{
  res.json(todos)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})