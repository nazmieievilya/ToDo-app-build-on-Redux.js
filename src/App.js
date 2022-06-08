import 'App.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import AddTodoModal from 'components/AddTodoModal';
import ChangeTodoModal from 'components/ChangeTodoModal';
import Todos from 'components/Todos';

const ControlContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 2rem;
`;
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
    background-color: azure;
    margin: 0;
    padding: 0;
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
    const [filterState, setFilterState] = useState('');

    const [idToChange, setIdToChange] = useState({
        id: 0,
        text: '',
    });
    const Now = todos.filter((item) => item.completed === true).length;
    const Max = todos.length;

    function filterTodo(option) {
        switch (option) {
            case 'completed':
                setFilterState('completed');
                break;
            case 'uncompleted':
                setFilterState('uncompleted');
                break;
            default:
                setFilterState('all');
                break;
        }
        console.log(filterState);
    }
    const returnList = () => {
        switch (filterState) {
            case 'completed':
                return todos.filter((item) => item.completed === true);
                break;
            case 'uncompleted':
                return todos.filter((item) => item.completed === false);
            default:
                return todos;
        }
    };

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
                type: 'spring',
                stiffness: 990,
                when: 'beforeChildren',
                staggerChildren: 0.2,
            },
        },
    };
    return (
        <>
            <MainContainer>
                <StyledProgressBar now={Now} max={Max} />
                <AppContainer>
                    <h1>Список справ</h1>
                    <ControlContainer>
                        <select
                            class="form-select"
                            style={{ width: '150px' }}
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

                    <AddTodoModal
                        idToChange={idToChange}
                        setShowModal={setShowModal}
                        show={showModal}
                    />
                    <ChangeTodoModal
                        idToChange={idToChange}
                        show={showChangeModal}
                        setShowChangeModal={setShowChangeModal}
                    />
                    <motion.div
                        variants={boxVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        {returnList().map((item) => {
                            return (
                                <motion.div
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
                                        key={item.id}
                                        item={item}
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AppContainer>
            </MainContainer>
        </>
    );
}
export default App;
