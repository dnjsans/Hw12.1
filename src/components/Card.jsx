import React from "react";

function Card({ todoList, setTodoList }) {
  const DeleteBtn = (id) => {
    const newTodoList = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(newTodoList);
  };

  const ChangeBtn = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodoList(newTodoList);
  };

  return (
    <div className="listbox">
      <div>
        <h1 className="work">Working...</h1>
      </div>
      <div className="smallbox">
        {todoList.map((todo) => {
          if (!todo.isDone) {
            return (
              <div className="todobox">
                <div>
                  <h1>{todo.title}</h1>
                  <div>{todo.body}</div>
                </div>
                <div className="allbtn">
                  <button
                    className="deletebtn"
                    onClick={() => DeleteBtn(todo.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    className="changebtn"
                    onClick={() => ChangeBtn(todo.id)}
                  >
                    완료
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>

      <div>
        <h1 className="work">Done..!</h1>
      </div>
      <div className="smallbox">
        {todoList.map((todo) => {
          if (todo.isDone) {
            return (
              <div className="todobox">
                <div>
                  <h1>{todo.title}</h1>
                  <div>{todo.body}</div>
                </div>
                <div className="allbtn">
                  <button
                    className="deletebtn"
                    onClick={() => DeleteBtn(todo.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    className="changebtn"
                    onClick={() => ChangeBtn(todo.id)}
                  >
                    취소
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Card;
