import React, { useState } from "react";

// addTodo function is passed down from App.js
const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  // handleSubmit of form takes in an event i.e. the submission of the form
  const handleSubmit = e => {
    // prevent submission of form
    e.preventDefault();
    // if no value, then just return the form
    if (!text) return;
    // else addTodo function takes in the value we type in and adds it to newTodos
    addTodo(text);
    // set value of input to ""
    setText("");
  };

  // enterItem takes in an event, which is the onChange event and sets the text to the value of whatever we have typed in
  const enterItem = e => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        // automatic value of input is an empty string "" i.e. the value of the state or whatever the value changes to when we type it in
        value={text}
        placeholder="Add Todo..."
        // when the input is changed, we want to run a function and set the new state of the input to whatever we type in. without the following, whatever we type won't enter & it'll be a read-only field
        onChange={enterItem}
      ></input>
    </form>
  );
};

export default TodoForm;
