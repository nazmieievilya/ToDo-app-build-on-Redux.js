import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { changeTodo, dellTodo } from '../redux/TodoSlice';
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

function ChangeTodoModal({show,  setShowChangeModal, idToChange, }) {
    const [newtext, setNewtext] = useState('')
    const dispatch = useDispatch()
    function dispatchNewText(e) {
        e.preventDefault()
        if(newtext){
          setShowChangeModal(false)
          setNewtext('')
          dispatch(
            changeTodo({
                id: idToChange.id,
                text: newtext
            })
        )
        } 

        
    }
    const deleteToDo = () => {
      dispatch(dellTodo({id: idToChange.id}))
      setShowChangeModal(false)
          setNewtext('')
    }
  return (
    <ModalContainer>
      <Modal onHide={() => setShowChangeModal(false) } show={show} >
        <Modal.Header closeButton>
          <Modal.Title>Змінити текст завдання</Modal.Title>
        </Modal.Header>
          <p className='m-2' >Поточний текст: <span style={{backgroundColor: "#66cc6f"}} >{idToChange.text}</span></p> 
              <Form.Group className="mb-3" controlId="formBasicEmail">
              
                <Form.Control 
                onChange={(e) => setNewtext(e.target.value) } 
                type="text" placeholder="Новий текст"
                value={newtext}
                />
                <Form.Text className="text-muted m-2 ">
                  Після вводу натисніть "Змінити"
                </Form.Text>
              </Form.Group>
        <Modal.Footer className='d-flex justify-content-between' >
        <button type="button" onClick={() => deleteToDo()} className="btn btn-outline-danger btn-sm d-flex align-items-center ">Видалити завдання<i className="bi bi-x-lg p-1 "></i></button>
        <button type='submit' onClick={ dispatchNewText } className="btn btn-outline-success ">Змінити</button>
        </Modal.Footer>
      </Modal>
    </ModalContainer>
  )
}

export default ChangeTodoModal