export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="imcomplete-area">
      <p className="title">未完了のTodoだよ</p>
      <ul>
        {/* 関数から処理を書く */}
        {todos.map((todo, index) => (
          // mapでループ処理の際に順番がわからなくなるから、indexをつけてあげる必要がある。
          // じゃないとエラーが出る。
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* onClickには関数を挿入してあげる */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
