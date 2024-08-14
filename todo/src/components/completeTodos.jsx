export const CompleteTodos = (props) => {
  const { todos, onClickImcompleteTodos } = props;
  return (
    <div className="complete-area">
      <p className="title">完了済のTodoだよ</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickImcompleteTodos(index)}>
                戻す
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
