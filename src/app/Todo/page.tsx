import Input from "../ui/Todo/input";
import TasksDisplay from "../ui/Todo/tasksDisplay";

export default function Page() {
    return (
      <div id="main-div-todo" className="bg-white h-screen m-0 p-0 flex">
        <div
          className="bg-[#f5f5f5] lg:w-[100%] xl:w-[85%] lg:h-[90%] m-auto shadow-2xl rounded-lg"
          id="middle-div"
        >
          <Input />
          <hr />
          <TasksDisplay />
        </div>
      </div>
    );
}