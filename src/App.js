import "./app.css";
import React, { useState } from "react";
import InputField from "./components/InputField";
import OutputFieldList from "./components/OutputFieldList";
import addToDo from "./utils/storage";

function App() {
  const defaultList = JSON.parse(localStorage.getItem("todo")) || [];

  const [toDoList, setToDo] = useState(defaultList);

  function handleRemove(todo) {
    const newList = toDoList.filter((item) => item !== todo);
    setToDo(newList);
  }

  return (
    <main>
      <InputField
        onSubmit={(event) => {
          event.preventDefault();
          // hier später ersetzen durch bessere Form!
          let inputValue = document.querySelector("#inputField").value;
          const newList = addToDo(inputValue);
          setToDo(newList);
        }}
        onchange={(document.querySelector("#inputField").value = "")}
      />
      {toDoList && (
        <OutputFieldList toDoList={toDoList} onRemove={handleRemove} />
      )}
    </main>
  );
}

export default App;
