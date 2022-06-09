import React from "react";
import { useState } from "react";
import styled from "styled-components";

const ControlContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
function ControlComponents({ setFilterState, setShowModal }) {
  function filterTodo(option) {
    switch (option) {
      case "completed":
        setFilterState("completed");
        break;
      case "uncompleted":
        setFilterState("uncompleted");
        break;
      default:
        setFilterState("all");
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
        <option selected value="all">
          Всі
        </option>
        <option value="completed">Виконані</option>
        <option value="uncompleted">Невиконані</option>
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
