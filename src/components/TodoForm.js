import React from 'react'

const TodoForm = ({setInputText, todos, setTodos, inputText}) => {

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {text: inputText, completed: false, id: Math.random() * 100}
    ]);
    setInputText("");
  };
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="input" />
      <button onClick={submitTodoHandler} className="button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter">
          <option value="all">Tous</option>
          <option value="completed">Tâches faites</option>
          <option value="uncompleted">Tâches à faire</option>
        </select>
      </div>
    </form>
  );
};

export default TodoForm;
