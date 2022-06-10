import React from "react";
import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodo } from "redux/TodoSlice";
import styled from "styled-components";

const StyledModalFooter = styled(Modal.Footer)`
  display: flex;
  justify-content: end;
`;
const StyledFormGoup = styled(Form.Group)`
  margin-bottom: 2rem;
`;
const ModalContainer = styled.div`
  margin: 0;
  @media (max-width: 400px) {
    width: 300;
  }
`;
function AddTodoModal({ show, setShowModal }) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  function form(e) {
    e.preventDefault();
    if (text) {
      dispatch(
        addTodo({
          id: Date.now(),
          name: text,
          completed: false,
        })
      );
    }
    setShowModal(false);
    console.log(text);
    setText("");
  }
  return (
    <ModalContainer>
      <Modal onHide={() => setShowModal(false)} show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Нове завдання</Modal.Title>
        </Modal.Header>
        <StyledFormGoup controlId="formBasicEmail">
          <Form.Control
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            placeholder="Введіть завдання"
          />
          <Form.Text>Після вводу натисніть &quot;Додати&quot;</Form.Text>
        </StyledFormGoup>
        <StyledModalFooter>
          <button
            type="submit"
            onClick={form}
            className="btn btn-outline-success "
          >
            Додати
          </button>
        </StyledModalFooter>
      </Modal>
    </ModalContainer>
  );
}

export default AddTodoModal;
