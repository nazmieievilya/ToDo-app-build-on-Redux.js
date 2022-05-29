import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import { addTodo } from '../redux/TodoSlice';
import { useState } from 'react'
import Todos from './Todos';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'




const ModalContainer = styled.div`
  margin: 0
  @media (max-width: 400px) {
    width: 300
  }

`
const FormT = styled.form`
  
`
function AddTodoModal({show, setShowModal}) {
    const todos = useSelector((state) => state.todos.todoList);
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const Now = todos.filter((item) => item.completed === true).length
    const Max = todos.length
    function form(e) {
      e.preventDefault()
      if (text) {
        dispatch(addTodo({
          id: Date.now(),
          name: text,
          completed: false
        }))
      }
      
      console.log(text)
      setText('')
    }
  return (
    <ModalContainer>
      <Modal onHide={() => setShowModal(false)} show={show} >
        <Modal.Header closeButton>
          <Modal.Title>Нове завдання</Modal.Title>
        </Modal.Header>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={(e) => setText(e.target.value)} value={text} type="text" placeholder="Введіть завдання" />
                <Form.Text className="text-muted m-3 ">
                  Після вводу натисніть "Додати"
                </Form.Text>
              </Form.Group>
        <Modal.Footer className='d-flex justify-content-end' >
        <button type='submit' onClick={form} className="btn btn-outline-success ">Додати</button>
          
          
        </Modal.Footer>
      </Modal>
    </ModalContainer>
    
  )
}

export default AddTodoModal