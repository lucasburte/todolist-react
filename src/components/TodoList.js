import React from "react";
import TodoElement from "./TodoElement"

const TodoList = ({todos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <TodoElement text={todo.text} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;