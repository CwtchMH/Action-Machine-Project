'use client'

import React from 'react'
import { TasksState } from '@/app/lib/features/tasks/tasksSlice'
import ButtonsControlTables from '@/app/components/Todo/buttonsControlTables'
import TasksDisplay from '@/app/components/Todo/tasksDisplay';
import InputField from '@/app/components/Todo/inputField';


export default function ImportantUrgent({ tasks }: TasksState) {
  const [toggleInfor, setToggleInfor] = React.useState(true);
  const [toggleAddTask, setToggleAddTask] = React.useState(false);
  const handleAddTask = () => {
    setToggleAddTask(!toggleAddTask)
  }
  const handleToggleInfor = () => setToggleInfor(!toggleInfor)
  return (
    <div
      className={`flex flex-col pb-3 min-h-[100%] bg-rose-50 rounded-3xl lg:rounded-none lg:rounded-br-3xl
        ${toggleInfor ? '' : 'justify-center'}
        ${toggleAddTask ? 'justify-start' : ''}
        `
    }
    >
      <div
        className={`px-5 pt-3 pb-1 justify-between ${
          toggleInfor ? 'flex' : 'hidden'
        }`}
      >
        <div className="hidden lg:flex border px-2 w-fit border-black rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
            />
          </svg>
          <span className="ml-5 italic font-serif">DO IT NOW</span>
          <span className="pl-2" onClick={handleToggleInfor}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="blue"
              className="size-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </span>
        </div>
        <div className="block lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="blue"
            className="size-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </div>
        <ButtonsControlTables handleAddTask={handleAddTask} />
      </div>
      {/* Information part */}
      <TasksDisplay tasks={tasks?.important?.urgent} toggleInfor={toggleInfor} color={'rose-100'} />
      <div
        className={`${toggleInfor ? 'hidden' : 'flex'} mx-5 flex-col gap-y-2`}
      >
        <div className="rounded-3xl shadow-lg bg-rose-200">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
              />
            </svg>
          </div>
          <div className="px-5 py-1">
            <p className="font-bold italic">
              Things with clear deadlines and consequences for not taking
              immediate action
            </p>
            <p className="font-bold">Examples:</p>
            <ul className="list-disc px-5">
              <li>Finishing a client project</li>
              <li>Submitting a draft article</li>
              <li>Responding to some emails</li>
              <li>Picking up your sick kid from school</li>
            </ul>
          </div>
        </div>
        <div className="w-fit mx-auto" onClick={handleToggleInfor}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 hover:text-rose-200 cursor-pointer hover:scale-150"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
      {/* Information part */}
      <InputField color={'rose-100'} toggleAddTask={toggleAddTask} handleAddTask={handleAddTask} prior={'important'} statuss={'urgent'} roundedCorner={"br"} />
    </div>
  )
}