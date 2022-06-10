import Todos from "components/Todos";
import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import { TodoStatuses } from "constants/constants";
function TodosComponent({ setIdToChange, setShowChangeModal, filterState }) {
  const todos = useSelector((state) => state.todos.todoList);
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
  const returnList = () => {
    switch (filterState) {
      case TodoStatuses.Completed:
        return todos.filter((item) => item.completed === true);
        break;
      case TodoStatuses.Uncompleted:
        return todos.filter((item) => item.completed === false);
      default:
        return todos;
    }
  };
  return (
    <motion.div variants={boxVariant} initial="hidden" animate="visible">
      {returnList().map((item) => {
        return (
          <motion.div key={item.id}
            whileHover={{
              scale: 1.005,
            }}
            whileTap={{
              scale: 0.99,
            }}
            variants={listVariant}
          >
            <Todos
              setIdToChange={setIdToChange}
              textOnClick={setShowChangeModal}
              item={item}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default TodosComponent;
