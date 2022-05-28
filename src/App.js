import './App.css';
import { useState } from 'react'
import Todos from './components/Todos';
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { addTodo } from './redux/TodoSlice'
import { ProgressBar } from 'react-bootstrap';
import ChangeTodoModal from './components/ChangeTodoModal';
import { useDispatch } from 'react-redux'


function App() {
 const todos = useSelector((state) => state.todos.todoList);
 const [text, setText] = useState('')
 const [showModal, setShowModal] = useState(false)
 const dispatch = useDispatch()
 const Now = todos.filter((item) => item.completed === true).length
 const Max = todos.length
 function form(e) {
   e.preventDefault()
   dispatch(addTodo({
     id: Date.now(),
     name: text,
     completed: false
   }))
   console.log(text)
   setText('')
 }
  return (
    <>
    <div clasName="App">
    <ProgressBar  now={Now} max={Max} style={{height: '4px'}} className='barr' />

      <div className='d-flex justify-content-center mt-2 flex-column align-items-center' >
    
          <h1>Список справ</h1>
          <div className='App'>
              <div className='d-flex w-100 justify-content-end' >
                <button  type='submit' onClick={() => setShowModal(true)} className="btn btn-outline-success btn-sm">
                  Додати
                </button>
              </div>
              
            
            <ChangeTodoModal setShowModal={setShowModal} show={showModal} />
          {todos.map((item) => <Todos key={item.id} item={item} />)}
          </div>
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
