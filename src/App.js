import AddTodoModal from "components/AddTodoModal";
import ChangeTodoModal from "components/ChangeTodoModal";
import ControlComponents from "components/ControlComponents";
import TodosComponent from "components/TodosComponent";
import { useState } from "react";
import React from "react";
import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledProgressBar = styled(ProgressBar)`
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  height: 4px;
  border-radius: 0px;
`;
const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  margin: 0;
  position: static;
  overflow-x: hidden;
  @media (max-width: 700px) {
    width: 100vw;
  }
  .barr {
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
  }
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`;
function App() {
  const todos = useSelector((state) => state.todos.todoList);
  const [showModal, setShowModal] = useState(false);
  const [showChangeModal, setShowChangeModal] = useState(false);
  const [filterState, setFilterState] = useState("");
  const [idToChange, setIdToChange] = useState({
    id: 0,
    text: "",
  });
  const Now = todos.filter((item) => item.completed === true).length;
  const Max = todos.length;

  return (
    <>
      <MainContainer>
        <StyledProgressBar now={Now} max={Max} />
        <AppContainer>
          <h1>Список справ</h1>
          <ControlComponents
            setShowModal={setShowModal}
            setFilterState={setFilterState}
          />
          <AddTodoModal setShowModal={setShowModal} show={showModal} />
          <ChangeTodoModal
            idToChange={idToChange}
            show={showChangeModal}
            setShowChangeModal={setShowChangeModal}
          />
          <TodosComponent
            filterState={filterState}
            setIdToChange={setIdToChange}
            setShowChangeModal={setShowChangeModal}
          />
        </AppContainer>
      </MainContainer>
    </>
  );
}
export default App;
