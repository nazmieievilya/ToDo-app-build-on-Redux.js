import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { toggleComplete, deleteTodo } from '../features/TodoSlice'
import { useDispatch } from 'react-redux'
function Todos() {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos )

    
  return (
    <div  >
        {todos.map(todo => 
            <TodoItem key={todo.id} > <p>{todo.title}</p> 
              <div>
              <input
                onChange={() => dispatch(toggleComplete({id: todo.id, status: todo.status}))} 
                checked={todo.status} type='checkbox' />
                <button onClick={() => dispatch(deleteTodo({id: todo.id})) } >x</button> 
              </div>
             
             </TodoItem>
        )}
    </div>
  )
}
const TodoItem = styled.div`
display: flex;
width: 40vw;
border-bottom: 1px solid black;
flex-direction: row;
justify-content: space-between;
align-items: center;

@media (max-width: 768px ) {
    width: 90vw;
    padding-left: 20px;
    padding-right: 20px;
}

`


export default Todos