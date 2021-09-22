import React, { useState, useEffect } from "react";
import { db } from "../../firebase.config";
import firebase from "firebase";
import TodoListItem from "../Todo";

const Textfield = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inProgress: doc.data().inProgress,
        }))
      );
    });
  }

  const addTodo = (e) => {
    e.preventDefault();
    // console.log(`adding todo `)

    db.collection("todos").add({
      inProgress: true,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todo,
    });

    setTodo("");
  };

  return (
    <div className="container py-12 w-full max-w-sm mx-auto sm:max-w-md">
      <div className="flex justify-center mb-10 sm:mb-6">
        <h1 className="flex text-4xl font-mulish space-x-2">
          <p className="text-indigo-600 mr-4">Liko's</p>Todo App{" "}
        </h1>
      </div>
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Write Todo"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
            // console.log(`imported todo ${e.target.value}`)
          }}
        />
        <button
          className="bg-indigo-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={addTodo}
          type="submit"
        >
          Add
        </button>
      </div>
      <div className="space-y-4 mt-4 text-md">
        {" "}
        {todos.map((todo) => (
          <TodoListItem
            todo={todo.todo}
            inProgress={todo.inProgress}
            id={todo.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Textfield;
