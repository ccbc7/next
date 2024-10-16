"use client";

import axios from "axios";
import { useState } from "react";
import { Todo } from "../components/Todo";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function Sample() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <>
      <div className="App">
        <h3>こんばんは</h3>
        <button onClick={onClickFetchData}>データ取得</button>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
          />
        ))}
      </div>
    </>
  );
}
