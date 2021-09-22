import React from "react";
import { db } from "../firebase.config";

const TodoListItem = ({ todo, inProgress, id }) => {
  function toggleInProgress() {
    db.collection("todos").doc(id).update({
      inProgress: !inProgress,
    });
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }
  return (
    <div>
      <div className="container flex w-full">
        <ul className="flex flex-col w-full">
          <li className="border-gray-400 flex flex-row mb-2">
            <div className="select-none cursor-pointer bg-gray-400 rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium text-lg font-mono">{todo}</div>
                <div className="text-gray-600 text-sm">
                  {inProgress ? "In Progress" : "Completed"}
                </div>
              </div>
              <div className="">
                <button
                  className="bg-gray-300 border-r-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                  onClick={toggleInProgress}
                >
                  {inProgress ? "Done" : "UnDone"}
                </button>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                  onClick={deleteTodo}
                >
                  X
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* <p>{todo}</p> */}
    </div>
  );
};

export default TodoListItem;
