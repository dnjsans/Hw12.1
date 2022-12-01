import React, { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Done from "./components/Done";
import "./App.css";

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "리액트", body: "기초 화이팅", isDone: false },
    { id: 2, title: "리액트", body: "기초 화이팅", isDone: true },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmitHandler = () => {
    const list = {
      id: todoList.length + 1,
      title: title,
      body: body,
      isDone: false,
    };
    setTodoList([...todoList, list]);
  };
  return (
    <Done>
      <Header />
      <div className="contents">
        <div className="addbox">
          <label className="labelname">제목</label>
          <input
            type="text"
            className="input-box"
            name="title"
            Key={todoList.id}
            value={todoList.title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="labelname">내용</label>
          <input
            type="text"
            className="input-box"
            name="body"
            Key={todoList.id}
            value={todoList.body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button onClick={onSubmitHandler}className="addbtn">
            추가하기
          </button>
        </div>
      </div>
      <Card setTodoList={setTodoList} todoList={todoList} key={todoList.id} />
    </Done>
  );
};

export default App;
