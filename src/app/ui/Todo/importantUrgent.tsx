'use client';

import { TasksState } from "@/app/lib/features/tasks/tasksSlice";


export default function ImportantUnurgent({tasks}: TasksState) {
    return (
      <div>
        <div>
          {tasks.important.urgent.map((task: string, index: number) => (
            <p
              key={index}
              className="mt-2 bg-[#d6efee] cursor-pointer rounded-lg text-sm text-black capitalize flex px-3 py-2 mx-2 justify-center text-base shadow-sm border border-gray-300 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md break-all"
            >
              {index + 1}. {task}
            </p>
          ))}
        </div>
      </div>
    );
}