import './App.css';
import axios from 'axios'


// added proxy : "http://localhost:3000" On package.json to prevent proxy. Any request that goes to /api  it will send to localhost:3000. Vai parecer que tudo esta rodar no mesmo PORT
function App() {
  axios.get("/api/v1/todos")
    .then(res =>{
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
  return <h1>Hello REACT</h1>
   
}

export default App;
