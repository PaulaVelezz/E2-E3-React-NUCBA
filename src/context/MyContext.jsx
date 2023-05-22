import { createContext, useContext, useState } from "react";

const Contexto = createContext();

const initialTodoListState = ["Seguir practicando React Js"];

const ContextoProvider = ({children}) => {
    const [todoList, setTodoList] = useState(initialTodoListState);

    const addTodo = (newTodoItem) => {
        setTodoList({...todoList, newTodoItem});
    };

    const removeTodo = (todoIndex) => {
        const newList = todoList.filter ((_, index) => index !== todoIndex);
        setTodoList(newList);
    };

    const contextValue = {
        todoList, 
        addTodo,
        removeTodo,
    };


    return (
        <Contexto.Provider
            value = {{contextValue}}
        >
            {children}
        </Contexto.Provider>
    )
}

export const useTodoContext = () => useContext (Contexto);


export default ContextoProvider;