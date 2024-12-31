'use client'

export default function TasksDisplay({ tasks, toggleInfor, color}: { tasks: string[]; toggleInfor: boolean; color: string }) {
  return (
    <div className={`${toggleInfor ? 'block' : 'hidden'}`}>
      {tasks &&
        tasks.map((task: string, index: number) => (
          <p
            key={index}
            className={`mt-2 bg-${color} cursor-pointer rounded-lg text-sm text-black capitalize flex px-3 py-2 mx-2 justify-center text-base shadow-sm border border-gray-300 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md break-all`}
          >
            {index + 1}. {task}
          </p>
        ))}
    </div>
  )
}
