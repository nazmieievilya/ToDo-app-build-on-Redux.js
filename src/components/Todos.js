import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import {dellTodo, toggleTodo} from '../redux/TodoSlice'



function Todos({item, textOnClick, setIdToChange}) {
  const dispatch = useDispatch()
  function sendId() {
    setIdToChange({
      id: item.id,
      text: item.name
    })
    textOnClick(true)
  }
  const Text = styled.p`
  margin: 0;
  padding: 12px;
  text-decoration: ${item.completed ? 'line-through' : 'none'};
  font-style: ${item.completed ? 'italic' : 'none'};
  color: ${item.completed ? 'gray' : 'black'};
`
 
  return (
    <TodoElem >
        <Text style={{width: "100%"}} onClick={() => sendId() } >{item.name}</Text> 
      <ControlToDo  >
        <input class="form-check-input" checked={item.completed} onChange={() => dispatch(toggleTodo({id: item.id}))} style={{height: "30px", width: "30px"}} type='checkbox'/>
        
       </ControlToDo> 
    </TodoElem>
  )
}


const TodoElem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;

`

const ControlToDo = styled.div`
  display: flex;
  align-items: center;
  input{
    margin: 10px;
  }

`

export default Todos