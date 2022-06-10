import { changeTodo, dellTodo } from "../redux/TodoSlice";
import React from "react";
import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const StyledFormGoup = styled(Form.Group)`
  margin: 1rem;
`;
const StyldeSpan = styled.span`
  background-color: #e6e6e6;
`;
const StyledP = styled.p`
  margin: 0.2rem;
`;
const StyledModalFooter = styled(Modal.Footer)`
  display: flex;
  justify-content: space-between;
`;
const ModalContainer = styled.div`
  margin: 0;
  @media (max-width: 400px) {
    width: 300;
  }
`;
function ChangeTodoModal({ show, setShowChangeModal, idToChange }) {
  const [newtext, setNewtext] = useState("");
  const dispatch = useDispatch();
  function dispatchNewText(e) {
    e.preventDefault();
    if (newtext) {
      setShowChangeModal(false);
      setNewtext("");
      dispatch(
        changeTodo({
          id: idToChange.id,
          text: newtext,
        })
      );
    }
  }
  const deleteToDo = () => {
    dispatch(dellTodo({ id: idToChange.id }));
    setShowChangeModal(false);
    setNewtext("");
  };
  return (
    <ModalContainer>
      <Modal onHide={() => setShowChangeModal(false)} show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Змінити текст завдання</Modal.Title>
        </Modal.Header>
        <StyledP>
          Поточний текст: <StyldeSpan>{idToChange.text}</StyldeSpan>
        </StyledP>
        <hr />
        <StyledFormGoup controlId="formBasicEmail">
          <Form.Control
            onChange={(e) => setNewtext(e.target.value)}
            type="text"
            placeholder="Новий текст"
            value={newtext}
          />
          <Form.Text>Після вводу натисніть &quot;Змінити&quot;</Form.Text>
        </StyledFormGoup>
        <StyledModalFooter>
          <button
            type="button"
            onClick={() => deleteToDo()}
            className="btn btn-outline-danger btn-sm d-flex align-items-center "
          >
            Видалити завдання<i className="bi bi-x-lg p-1 "></i>
          </button>
          <button
            type="submit"
            onClick={dispatchNewText}
            className="btn btn-outline-success "
          >
            Змінити
          </button>
        </StyledModalFooter>
      </Modal>
    </ModalContainer>
  );
}

export default ChangeTodoModal;
