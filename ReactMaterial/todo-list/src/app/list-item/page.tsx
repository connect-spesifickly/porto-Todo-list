import * as React from "react";
import Image from "next/image";

export type IItemsProps = {
  todoActivity: string;
  deleteTodoHandler: (id: number) => void;
  todoID: number;
  completeTodoHandler: (id: number) => void;
  isFinished: boolean;
};

class Items extends React.Component<IItemsProps> {
  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * @description This component renders a single item in the list of todos,
   * with two buttons, one for completing and one for deleting the todo.
   * @returns {JSX.Element} A JSX element representing the single todo item.
   */
  /******  20f1ce1b-443c-4f56-a6fa-38564c9e513b  *******/
  render() {
    return (
      <div className="flex justify-between w-3/4 mx-auto pt-[0px] pb-[40px] items-center lg:text-lg md:text-lg">
        <div>
          <div className="flex border-2 border-green-600">
            <input
              type="checkbox"
              disabled={this.props.isFinished}
              defaultChecked={this.props.isFinished}
              onClick={() => this.props.completeTodoHandler(this.props.todoID)}
              className="bg-black"
            />
          </div>
        </div>
        <div className="">{this.props.todoActivity}</div>
        <div className="">
          <button
            onClick={() => this.props.deleteTodoHandler(this.props.todoID)}
            className="border bg-black text-white rounded shadhow-0-0-2-white-500 p-[8px]"
          >
            <Image
              src="/image/delete.png"
              width={20}
              height={20}
              alt="delete"
            />
          </button>
        </div>
      </div>
    );
  }
}
export default Items;
// class TodoItem extends React.Component {
//   render() {
//     return <div>Ini component TodoItem</div>;
//   }
// }
