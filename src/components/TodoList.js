import React from "react";
import TodoElement from "./TodoElement"

const TodoList = ({todos, setTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <TodoElement setTodos={setTodos} todo={todo} todos={todos} key={todo.id} text={todo.text} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;