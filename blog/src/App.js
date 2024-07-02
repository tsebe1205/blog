 import { useState } from "react";
import "./App.css";

function App() {
  let [inputText, setInputText] = useState("");
  let [todos, setTodos] = useState([]);


  const log = (value) => {
    setInputText(value);
  };

  const handlerClick = () => {
    setTodos([...todos, inputText]);
    setInputText("");
  };


 const removeElement = (index) => {
    const newTodos = []
    for (let i = 0; i < todos.length; i++) {
      if(i !== index){
        newTodos.push(todos[i]);
      }
    }
    setTodos(newTodos);
  }
 


  return (
    <div>
      <input   value={inputText} onChange={(event) => log(event.target.value)} placeholder="add" />
      <button onClick={handlerClick}>click me</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
    
          <button onClick={()=>removeElement(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;