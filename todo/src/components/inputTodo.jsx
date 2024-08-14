const style = {
  backgroundColor: "#c6e5d9", // キャメルケースで記述
  width: "300px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        placeholder="Todoを入力してね"
        onChange={onChange}
        value={todoText}
        disabled={disabled}
      />
      <button disabled={disabled} onClick={onClick}>追加</button>
    </div>
  );
};

// jsの中にCSSを記述する。
