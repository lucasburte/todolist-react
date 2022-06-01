import React from 'react'

const TodoForm = () => {
   return (
    <form>
      <input type="text" className="input" />
      <button className="button" type="submit">
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
