"use client";
// import Image from "next/image";
import Items from "./list-item/page";
import React from "react";
import Axios from "axios";

interface TodoItem {
  id: number;
  todoActivity: string;
  isFinished: boolean;
}
class Home extends React.Component {
  state = {
    todoItem: [] as TodoItem[],
    inputTodo: " ",
  };

  fecthTodo = () => {
    Axios.get("http://localhost:2000/todo")
      .then((response) => {
        console.log(response.data);
        this.setState({ todoItem: response.data });
      })
      .catch((err) => {
        alert(err);
      });
  };

  deleteTodo = (id1: number) => {
    Axios.delete(`http://localhost:2000/todo/${id1}`)
      .then(() => {
        this.fecthTodo();
      })
      .catch((err) => {
        alert(err);
      });
  };

  addItem = () => {
    Axios.post("http://localhost:2000/todo", {
      todoActivity: this.state.inputTodo,
      isFinished: false,
    })
      .then(() => this.fecthTodo())
      .catch((err) => {
        alert(err);
      });
  };

  completeTodo = (id1: number) => {
    Axios.patch(`http://localhost:2000/todo/${id1}`, { isFinished: true })
      .then(() => this.fecthTodo())
      .catch((err) => {
        alert(err);
      });
  };

  listItem = () => {
    return this.state.todoItem.map((val) => {
      return (
        // eslint-disable-next-line react/jsx-key
        <Items
          isFinished={val.isFinished}
          completeTodoHandler={this.completeTodo}
          deleteTodoHandler={this.deleteTodo}
          todoID={val.id}
          key={val.id}
          todoActivity={val.todoActivity}
        />
      );
    });
  };

  inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputTodo: event.target.value });
  };

  inputItem = () => {
    return (
      <div className="grid w-3/4 mx-auto">
        <h1 className="text-white pb-[4px] text-lg">Add todo :</h1>
        <input
          type="text"
          onChange={this.inputHandler}
          className="border bg-[#323232] text-white p-1 rounded"
        />
        <button
          onClick={this.addItem}
          className="p-[7px] btn btn-primary bg-blue-300 rounded text-black w-[130px] text-xl font-semibold mt-[10px]"
        >
          ADD TASK
        </button>
      </div>
    );
  };

  componentDidMount(): void {
    this.fecthTodo();
  }

  isDone(todo: TodoItem) {
    if (todo.isFinished) {
      return true;
    }
  }
  render() {
    return (
      <div className="bg-[#323232] text-white w-[100vw] mx-auto h-[auto] pb-[260px]">
        <div className=" ">
          <h1 className="font-semibold text-center text-3xl pt-[70px] pb-[30px]">
            Chores Todo List
          </h1>
          <this.listItem />
        </div>
        <div className=" fixed bottom-0 h-1/3 bg-[#323232]  border-t-2 border-white w-[100vw]">
          <h1 className="font-semibold text-center text-3xl pt-[15px] pb-[30px]">
            Done : {this.state.todoItem.filter(this.isDone).length}
          </h1>
          <this.inputItem />
        </div>
      </div>
    );
  }
}
export default Home;
