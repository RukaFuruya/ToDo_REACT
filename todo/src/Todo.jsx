import { useState } from "react";
import "./index.css";
// ここにUIを記述していく。

export const Todo = () => {


  const [imcompleteTodos, setIncompleteTodos] = useState([
    "Todo１です。",
    "Todo２です。"
  ]);

  return (
    <>
      <div className="input-area">
        <input placeholder="Todoを入力してね" />
        <button>追加</button>
      </div>
      <div className="imcomplete-area">
        <p className="title">未完了のTodoだよ</p>
        <ul>
          {imcompleteTodos.map((todo) => {
            return (
              <li>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了済のTodoだよ</p>
        <ul>
          <li>
            <div className="list-row">
              <p className="todo-item">Todoです</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
