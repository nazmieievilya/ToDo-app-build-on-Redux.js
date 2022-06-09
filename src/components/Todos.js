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
    margin: 0;
    padding: 12px;
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
        <Text style={{ width: "100%" }} onClick={() => sendId()}>
          {item.name}
        </Text>
        <ControlToDo>
          <input
            class="form-check-input"
            checked={item.completed}
            onChange={() => dispatch(toggleTodo({ id: item.id }))}
            style={{ height: "25px", width: "25px" }}
            type="checkbox"
          />
        </ControlToDo>
      </TodoElem>
    </motion.div>
  );
}

const TodoElem = styled.div`
  display: flex;
  width: 700px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  margin-bottom: 5px;
  padding-bottom: 5px;
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
