import React from 'react';
import { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { addTodo } from 'redux/TodoSlice';

const ModalContainer = styled.div`
    margin: 0;
    @media (max-width: 400px) {
        width: 300;
    }
`;
function AddTodoModal({ show, setShowModal }) {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    function form(e) {
        e.preventDefault();
        if (text) {
            dispatch(
                addTodo({
                    id: Date.now(),
                    name: text,
                    completed: false,
                }),
            );
        }
        setShowModal(false);
        console.log(text);
        setText('');
    }
    return (
        <ModalContainer>
            <Modal onHide={() => setShowModal(false)} show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Нове завдання</Modal.Title>
                </Modal.Header>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        type="text"
                        placeholder="Введіть завдання"
                    />
                    <Form.Text className="text-muted m-3 ">
                        Після вводу натисніть &quot;Додати&quot;
                    </Form.Text>
                </Form.Group>
                <Modal.Footer className="d-flex justify-content-end">
                    <button
                        type="submit"
                        onClick={form}
                        className="btn btn-outline-success "
                    >
                        Додати
                    </button>
                </Modal.Footer>
            </Modal>
        </ModalContainer>
    );
}

export default AddTodoModal;
