import {getTodo,deleteTodo} from '../services/todo-api'
import {useState,  useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'

function Todo(){
    const nav=useNavigate();
    const {id}=useParams();
    const [todo,setTodo]=useState({});
    
    useEffect(()=>{getTodo(id)
    .then(res=>setTodo(res.data))},[])

    const deleteTheTodo = () =>{
        deleteTodo(id);//service in todos-api
        nav('/');//take us back to home screen
    }
    return (
        <div>
            <h1>Todo:</h1>
            <h3>{todo.description}</h3>
            Completed:<input type='checkbox'defaultChecked={todo.complete}></input>
            <button onClick={deleteTheTodo}>delete</button>
            <button onClick={()=>{nav(`/${id}/edit`)}}>Edit</button>
            <a href='/'>Back</a>
        </div>
    )
}

export default Todo;