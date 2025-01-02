'use client'

import ButtonControlEach from "./buttonControlEach";

export default function TasksDisplay({ prior, status, tasks, toggleInfor, color}: { prior: string, status: string, tasks: string[]; toggleInfor: boolean; color: string }) {
  return (
    <div className={`${toggleInfor ? 'block' : 'hidden'} mb-2`}>
      {tasks &&
        tasks.map((task: string, index: number) => (
          <div
            key={index}
            className={`mt-2 bg-${color} cursor-pointer rounded-lg text-sm text-black capitalize flex px-3 py-2 mx-2 justify-center text-base shadow-sm border border-gray-300 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md break-all`}
          >
            <ButtonControlEach index={index} task={task} prior={prior} status={status} />
          </div>
        ))}
    </div>
  )
}
