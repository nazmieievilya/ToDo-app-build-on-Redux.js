import { TodoStatuses } from "constants/constants";
import React from "react";
import styled from "styled-components";

const ControlContainer = styled.div`
  padding: 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
function ControlComponents({ setFilterState, setShowModal }) {
  function filterTodo(option) {
    switch (option) {
      case TodoStatuses.Completed:
        setFilterState(TodoStatuses.Completed);
        break;
      case TodoStatuses.Uncompleted:
        setFilterState(TodoStatuses.Uncompleted);
        break;
      default:
        setFilterState(TodoStatuses.All);
        break;
    }
  }
  return (
    <ControlContainer>
      <select
        class="form-select"
        style={{ width: "150px" }}
        aria-label="Default select example"
        onChange={(e) => filterTodo(e.target.value)}
      >
        <option defaultValue={TodoStatuses.All}>Всі</option>
        <option value={TodoStatuses.Completed}>Виконані</option>
        <option value={TodoStatuses.Uncompleted}>Невиконані</option>
      </select>
      <button
        type="submit"
        onClick={() => setShowModal(true)}
        className="btn btn-outline-success btn-sm"
      >
        Додати
      </button>
    </ControlContainer>
  );
}

export default ControlComponents;
