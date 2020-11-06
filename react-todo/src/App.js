import React, {useState} from "react";
import './App.css';
//Import a Components
import Form from "./components/Form";
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  //useState est mis dans un tableau, comme si chaque tache était placé dans un tableau.
  return (
    <div className="App">
      <header>
  <h1> Ed's Todo List {inputText}</h1>
      </header>
      <Form todos={todos}setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
