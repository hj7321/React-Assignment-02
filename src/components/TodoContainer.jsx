import { useState } from "react";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";

const TodoContainer = () => {
  const initialTodos = [
    {
      id: 1,
      title: "리액트 과제",
      content: "나만의 Todo List 만들기",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 복습",
      content: "리액트 강의 다시 듣기",
      isDone: false,
    },
    {
      id: 3,
      title: "자바스크립트 공부",
      content: "자바스크립트 고급 문법 공부하기",
      isDone: true,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <>
      <header>
        <h1>My Todo List📝</h1>
        <TodoForm setTodos={setTodos} />
      </header>
      <section>
        <TodoList
          title={"Working...🔥"}
          name={"working-box"}
          todos={workingTodos}
          setTodos={setTodos}
        />
        <TodoList
          title={"Done!🎉"}
          name={"done-box"}
          todos={doneTodos}
          setTodos={setTodos}
        />
      </section>
    </>
  );
};

export default TodoContainer;
