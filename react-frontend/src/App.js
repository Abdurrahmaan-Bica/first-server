import{useEffect, useState} from 'react'
// useEffect allows us to run a piece of code before the UI is mounted, nesse caso Hello React
// useState allows us to set the state so that we can work with data
import './App.css';
import axios from 'axios'


// added proxy : "http://localhost:3000" On package.json to prevent proxy. Any request that goes to /api  it will send to localhost:3000. Vai parecer que tudo esta rodar no mesmo PORT
function App() {
  
  const [todos,setTodos] = useState([])


    useEffect(()=>{
      axios.get("/api/v1/todos")
    .then(res =>{
      console.log(res.data)
      setTodos(res.data)
    }).catch(err=>{
      console.log(err)
    })
    },[]) // in a nutshell this useEfffect allows us to run whatever is inside, before the UI is mounted
  return (
    <div>
        <h1>Number of TODOS {todos.length}</h1>
        <ul>
          {todos.map(t => <li>ID: {t.id} Description: {t.todo} Done: {t.done}</li>)}
        </ul>
    </div>
  )
   
}

export default App;
