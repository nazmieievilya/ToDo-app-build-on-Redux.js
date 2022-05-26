import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { dellTodo, toggleTodo } from '../redux/TodoSlice'

function Todos({item}) {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  const Text = styled.p`
  color: ${ item.completed ? "gray" : "black"} ;
  text-decoration: ${ item.completed ? "line-through" : "none"};
  font-style: ${ item.completed ? "italic" : "none"};;
`
  return (
    <TodoElem>
      <Text>{item.name}</Text> <ControlToDo  >
        <input checked={item.completed} onChange={() => dispatch(toggleTodo({id: item.id}))} style={{height: "30px", width: "30px"}} type='checkbox' />
        <button type="button" onClick={() => dispatch(dellTodo({id: item.id,  status: item.completed})) } className="btn btn-outline-danger btn-sm "><i className="bi bi-x-lg"></i></button>
       </ControlToDo> 
    </TodoElem>
  )
}


const TodoElem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  
  @media (max-width: 500px) {
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
  }

`

const ControlToDo = styled.div`
  display: flex;
  align-items: center;
  input{
    margin: 10px;
  }

`

export default Todos