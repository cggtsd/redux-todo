import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions'

function App() {
  const [todo, setTodo] = useState()
  const dispatch = useDispatch()
  const Todo = useSelector(state => state.Todo)
  const { todos } = Todo
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(AddTodoAction(todo))
  }

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t))
  }
  return (
    <>
     
      <h1>Todo List App in Redux</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='Enter a todo' style={{
          width: 350,
          padding: 10,
          borderRadius: 20,
          boder: 'none',
          fontSize:20
        }}  onChange={(e)=>setTodo(e.target.value)}/>
        <button type='submit' style={{
          padding: 12,
          borderRadius: 25,
          fontSize: 15,
          marginLeft:20
        }}>Go</button>
      </form>
      <ul className='allTodos'>
        {
          todos.map(t => (
            <li className='singleTodo'><span className='todoText' key={t.id}>{t.todo} </span>
           <button onClick={()=>removeHandler(t)}>Delete</button></li>
          ))
        }
        
      </ul>
    </>
  )
}

export default App
