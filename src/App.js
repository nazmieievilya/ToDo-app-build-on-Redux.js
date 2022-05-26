import './App.css';
import { useState } from 'react'
import Todos from './components/Todos';
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addTodo } from './redux/TodoSlice'
import { ProgressBar } from 'react-bootstrap';


function App() {
 const todos = useSelector((state) => state.todos)
 const [text, setText] = useState('')
 
 
 const Now = todos.filter((item) => item.completed === true).length;
 const Max = todos.length
 const dispatch = useDispatch()
 function form (e) {
   e.preventDefault()
   dispatch(addTodo({name: text}))
   setText('')
 }
 const ShowP = Max === 0 ? 0 : Now
  return (
    <>
    <ProgressBar now={ShowP} max={Max === 0 ? 1 : Max} style={{height: '4px'}}  />
    <div className='d-flex justify-content-center mt-2 flex-column align-items-center' >
        <h1>Список справ</h1>
        <div className='App'>
          <InputContainer>
            <form  
            onSubmit={form}
            >
            <input 
            onChange={(e) => setText(e.target.value)}
            value={text}
            type='text'
            style={{height: '30px'}}
            placeholder='       Введіть завдання'
            />
            <button type='submit' onClick={form} className="btn btn-outline-success btn-sm">Додати</button>
            </form>
          
          </InputContainer>
        
          {todos.map((item) => <Todos key={item.id} item={item} /> )}
        </div>
    </div>
    </>
    
    
    
  );
}
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  button {
    margin: 4px;
  }
  form{
    display: flex;
    align-items: center;
  }

`
export default App;
