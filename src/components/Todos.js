import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import {dellTodo, toggleTodo} from '../redux/TodoSlice'
function Todos({item}) {
  const dispatch = useDispatch()
 
  return (
    <TodoElem>
        <Text>{item.name}</Text> 
      <ControlToDo  >
        <input class="form-check-input" checked={item.completed} onChange={() => dispatch(toggleTodo({id: item.id}))} style={{height: "30px", width: "30px"}} type='checkbox'/>
        <button type="button" onClick={() => dispatch(dellTodo({id: item.id}))} className="btn btn-outline-danger btn-sm "><i className="bi bi-x-lg"></i></button>
       </ControlToDo> 
    </TodoElem>
  )
}

const Text = styled.p`
  padding: 0;
  margin: 0;
`
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