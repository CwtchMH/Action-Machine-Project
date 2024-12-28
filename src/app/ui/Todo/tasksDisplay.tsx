'use client'


import { useAppSelector } from "@/app/lib/hooks";
import ImportantUrgent from "./importantUrgent";
import ImportantUnurgent from "./importantUnurgent";
import UnimportantUrgent from "./unimportantUrgent";
import UnimportantUnurgent from "./unimportantUnurgent";


export default function TasksDisplay() {

  const tasks = useAppSelector(state => state.tasksReducer?.tasks)

  return (
    <div
      id="div-tasks"
      className="mt-5 mx-5 bg-[#edf7f6] h-[75%] border-2 border-gray-500"
    >
      <div className="grid grid-rows-1 h-[6%]">
        <div className="grid grid-cols-9">
          <div className="border-r-2 border-b-2 border-gray-500 flex justify-center items-center text-rose-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>
          </div>
          <div className="col-span-4 border-gray-500 border-2 border-t-0 font-bold text-xl flex justify-center items-center">
            Urgent
          </div>
          <div className="col-span-4 border-gray-500 border-r-0 border-2 border-t-0 flex text-xl font-bold justify-center items-center">
            Unurgent
          </div>
        </div>
      </div>
      <div className="grid grid-rows-1 h-[47%]">
        <div className="grid grid-cols-9">
          <div className="border-2 border-gray-500 border-l-0 font-bold text-2xl flex justify-center items-center">
            <p className="-rotate-90">Important</p>
          </div>
          <div className="border-2 border-gray-500 col-span-4">
            {/* <div className="break-words">
              {tasks.important.urgent.map((task, index) => (
                <p key={index} className="mt-2 text-sm text-red-500">
                  {task}
                </p>
              ))}
            </div> */}

            <ImportantUrgent tasks={tasks}/>
          </div>
          <div className="col-span-4 border-gray-500 border-r-0 border-2">
            <ImportantUnurgent tasks={tasks} />
          </div>
        </div>
      </div>
      <div className="grid grid-rows-1 h-[47%]">
        <div className="grid grid-cols-9">
          <div className="border-2 border-gray-500 border-l-0 border-b-0 font-bold text-2xl flex justify-center items-center">
            <p className="-rotate-90">Unimportant</p>
          </div>
          <div className="border-2 border-gray-500 border-b-0 col-span-4">
            <UnimportantUrgent tasks={tasks} />
          </div>
          <div className="col-span-4 border-gray-500 border-r-0 border-2 border-b-0">
            <UnimportantUnurgent tasks={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
}
