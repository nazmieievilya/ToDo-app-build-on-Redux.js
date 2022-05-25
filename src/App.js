import "./App.css";
import styled from 'styled-components'
import Todos from "./components/Todos";
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from "./features/TodoSlice";
import { useSelector } from "react-redux";


export default function App() {
  const [form, setForm] = useState('')
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos )
  const quantityOfTodos = todos.length
  const completedTodos = todos.filter((todo) => todo.completed === true )
  const quantityOfCompleted = completedTodos.length
  console.log(quantityOfCompleted)
  const ShowT = quantityOfTodos != 0 ? quantityOfTodos : null
  const ShowC = completedTodos != 0 ? quantityOfCompleted + '/' : null
  
  



  function submitForm(event) {
    event.preventDefault()
    dispatch(addTodo({
      title: form,

    }))
    setForm('')
  }

  return (
  <div className="App" >
    <form className="formC" onSubmit={submitForm} >
        <h3>{ShowC}{ShowT}</h3>
        <input value={form} onChange={(e) => setForm(e.target.value)} type="text" />
        <button type="submit" >submit</button>
    </form>
    
      <Todos />
      
  </div>
  )


}


