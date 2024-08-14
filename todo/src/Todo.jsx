import { useState } from "react";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/completeTodos";
import "./index.css";
// ここにUIを記述していく。

export const Todo = () => {
  // 入力を補完するステート
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // 入力を検知して、Todoリストに持っていく処理
  // 基本的にeventを入れてあげる
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    // alert();
    // 新しい配列newTodosを作る。元のimcompleteTodosにtodoTextを入力する
    if (todoText !== "") {
      const newTodos = [...imcompleteTodos, todoText];
      setIncompleteTodos(newTodos);
      setTodoText("");
    }
  };

  // 削除ボタンが押された時に対象のTodoを消してあげる
  const onClickDelete = (index) => {
    // alert(index);
    // console.log(index);
    const newTodos = [...imcompleteTodos];
    // 特定の箇所から、１つ削除する: splice
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタンが押された時に対象のTodoを完了済みに放り込む
  const onClickComplete = (index) => {
    // 完了ボタンが押されたら対象の部分を削除してあげる
    const newIncompleteTodos = [...imcompleteTodos];
    // 特定の箇所から、１つ削除する: splice
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, imcompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
    // console.log(index);
  };

  // 完了済みの「戻す」ボタンが押された際の挙動
  const onClickImcompleteTodos = (index) => {
    // 完了ボタンが押されたら対象の部分を削除してあげる
    const newCompleteTodos = [...completeTodos];
    // 特定の箇所から、１つ削除する: splice
    newCompleteTodos.splice(index, 1);

    const ImcompleteTodos = [...imcompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(ImcompleteTodos);
    // console.log(index);
  };

  const isMax = imcompleteTodos.length >= 5;

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMax}
      />
      {isMax && (
        <p style={{ color: "red" }}>上限は５つまで</p>
      )}
      <IncompleteTodos
        todos={imcompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        todos={completeTodos}
        onClickImcompleteTodos={onClickImcompleteTodos}
      />
    </>
  );
};
