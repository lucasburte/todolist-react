import React, { useState } from "react";
import './App.css';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Ma Todo-List</h1>
      </header>
      <TodoForm  inputText={inputText} todos ={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
