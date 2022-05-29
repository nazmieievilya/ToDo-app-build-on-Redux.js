import './App.css';
import { useState } from 'react'
import Todos from './components/Todos';
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { addTodo } from './redux/TodoSlice'
import { ProgressBar } from 'react-bootstrap';
import AddTodoModal from './components/AddTodoModal';
import ChangeTodoModal from './components/ChangeTodoModal';
import { useDispatch } from 'react-redux'


function App() {
 const todos = useSelector((state) => state.todos.todoList);
 const [text, setText] = useState('')
 const [showModal, setShowModal] = useState(false);
 const [showChangeModal, setShowChangeModal] = useState(false)
 const [filterState, setFilterState] = useState("")



 const [idToChange, setIdToChange] = useState({
   id: 0,
   text: ''
 })
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

 function filterTodo(option) {
  switch(option){
    case 'completed':
      setFilterState("completed");
      break;
      case 'uncompleted':
        setFilterState("uncompleted");
        break;
          default: setFilterState("all");
          break;
  }
  console.log(filterState)
 }
 const returnList = () => {
  switch(filterState){
    case 'completed':
      return todos.filter((item) => item.completed === true);
      break;
      case 'uncompleted':
        return todos.filter((item) => item.completed === false)
        default: return todos ;
  }
 }


  return (
    <>
    <div clasName="App">
    <ProgressBar now={Now} max={Max} style={{height: '4px', borderRadius: '0px'}} className='barr' />

      <div className='d-flex justify-content-center mt-2 flex-column align-items-center' >
    
          <h1>Список справ</h1>
          <div className='App'>
              <div className='d-flex w-100 justify-content-between' >
              <select 
              class="form-select" style={{width: "150px"}} 
              aria-label="Default select example" 
              onChange={(e) => filterTodo(e.target.value)}
              >
                <option selected value="all">Всі</option>
                <option  value="completed">Виконані</option>
                <option value="uncompleted">Невиконані</option>
              </select>
                <button  type='submit' onClick={() => setShowModal(true)} className="btn btn-outline-success btn-sm">
                  Додати
                </button>
              </div>
              
            
            <AddTodoModal idToChange={idToChange} setShowModal={setShowModal} show={showModal} />
            <ChangeTodoModal  idToChange={idToChange} show={showChangeModal} setShowChangeModal={setShowChangeModal} />
          {returnList().map((item) => <Todos setIdToChange={setIdToChange} textOnClick={setShowChangeModal} key={item.id} item={item} />)}
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
