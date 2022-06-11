import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "redux/TodoSlice";
import styled from "styled-components";

function Todos({ item, textOnClick, setIdToChange }) {
  const dispatch = useDispatch();
  function sendId() {
    setIdToChange({
      id: item.id,
      text: item.name,
    });
    textOnClick(true);
  }
  const Text = styled.p`
    border: none;
    width: 100%;
    margin: 0;
    padding: 15px;
    text-decoration: ${item.completed ? "line-through" : "none"};
    font-style: ${item.completed ? "italic" : "none"};
    color: ${item.completed ? "gray" : "black"};
    cursor: pointer;
    word-wrap: break-word;
    :hover {
      background-color: rgb(193, 211, 219, 0.5);
      border-radius: 10px;
    }
  `;
  const appearAnim = {
    hidden: {
      x: "-100vw",
      opacity: 1,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div variants={appearAnim} initial="hidden" animate="visible">
      <TodoElem>
        <Text onClick={() => sendId()}>{item.name}</Text>
        <ControlToDo>
          <StyledInput
            className="form-check-input"
            checked={item.completed}
            onChange={() => dispatch(toggleTodo({ id: item.id }))}
            type="checkbox"
          />
        </ControlToDo>
      </TodoElem>
    </motion.div>
  );
}

const StyledInput = styled.input`
  width: 25px;
  height: 25px;
`;

const TodoElem = styled.div`
  margin: 0;
  display: flex;
  width: 700px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    width: 95vw;
  }
`;

const ControlToDo = styled.div`
  display: flex;
  align-items: center;
  input {
    margin: 10px;
  }
`;

export default Todos;
