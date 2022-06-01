import './App.css';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Ma Todo-List</h1>
      </header>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
