import Todos from "components/Todos";
import { TodoStatuses } from "constants/constants";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TodoContainer = styled.div`
  border-bottom: 1px solid black;
  padding: 5px;
`;
function TodosComponent({ setIdToChange, setShowChangeModal, filterState }) {
  const todos = useSelector((state) => state.todos.todoList);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const boxVariant = {
    hidden: {
      x: -100,
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 990,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  useEffect(() => {
    switch (filterState) {
      case TodoStatuses.Completed:
        setFilteredTodos(todos.filter((item) => item.completed === true));
        break;
      case TodoStatuses.Uncompleted:
        setFilteredTodos(todos.filter((item) => item.completed === false));
        break;
      case TodoStatuses.All:
        setFilteredTodos(todos);
    }
  }, [todos, filterState, filteredTodos]);

  return (
    <motion.div variants={boxVariant} initial="hidden" animate="visible">
      {filteredTodos.map((item) => {
        return (
          <TodoContainer key={item.id}>
            <motion.div
              key={item.id}
              whileTap={{
                scale: 0.995,
              }}
              variants={listVariant}
            >
              <Todos
                key={item.id}
                setIdToChange={setIdToChange}
                textOnClick={setShowChangeModal}
                item={item}
              />
            </motion.div>
          </TodoContainer>
        );
      })}
    </motion.div>
  );
}

export default TodosComponent;
