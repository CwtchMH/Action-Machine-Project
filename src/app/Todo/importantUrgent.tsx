'use client'

import React from 'react'
import { TasksState } from '../lib/features/tasks/tasksSlice'

export default function ImportantUrgent({ tasks }: TasksState) {
  const [toggleInfor, setToggleInfor] = React.useState(false)
  const handleToggleInfor = () => setToggleInfor(!toggleInfor)
  return (
    <div
      className={`flex flex-col min-h-[100%] bg-rose-50 rounded-3xl lg:rounded-none lg:rounded-br-3xl ${
        toggleInfor ? '' : 'justify-center'
      }`}
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
        {/* Màn hình lớn */}
        <div className={`hidden justify-between gap-1 xl:flex`}>
          <button className="btn-primary flex gap-1">
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add a new task
          </button>
          <button
            className="group border-3 border-black btn-danger flex flex-row items-center md:px-3"
            onMouseEnter={(e) => {
              e.currentTarget?.nextSibling?.classList.add('hidden')
            }}
            onMouseLeave={(e) => {
              e.currentTarget?.nextSibling?.classList.remove('hidden')
            }}
          >
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
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span className="hidden group-hover:block transition-opacity duration-300 text-black text-xs">
              Delete all tasks
            </span>
          </button>
          <button
            className="group relative border-3 border-black btn-success flex items-center flex-row md:px-3"
            onMouseEnter={(e) => {
              e.currentTarget?.previousSibling?.classList.add('hidden')
              e.currentTarget?.parentElement?.classList.add('justify-end')
              e.currentTarget?.parentElement?.classList.remove(
                'justify-between'
              )
            }}
            onMouseLeave={(e) => {
              e.currentTarget?.previousSibling?.classList.remove('hidden')
              e.currentTarget?.parentElement?.classList.remove('justify-end')
              e.currentTarget?.parentElement?.classList.add('justify-between')
            }}
          >
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
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
            <span className="hidden group-hover:block transition-opacity duration-300 text-black text-xs">
              Done all tasks
            </span>
          </button>
        </div>
        {/* Màn hình lớn */}
        {/* Màn hình bé */}
        <div className="flex xl:hidden justify-between gap-1">
          <button className="btn-primary flex gap-1">
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add
          </button>
          <button className="group border-3 border-black btn-danger flex flex-row items-center md:px-3">
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
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span className="text-black text-xs px-2">Delete all</span>
          </button>
          <button className="group relative border-3 border-black btn-success flex items-center flex-row md:px-3">
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
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
            <span className="text-black text-xs px-2">Done all</span>
          </button>
        </div>
        {/* Màn hình bé */}
      </div>
      {/* Information part */}
      <div className={`${toggleInfor ? 'block' : 'hidden'}`}>
        {tasks?.important?.urgent &&
          tasks?.important?.urgent.map((task: string, index: number) => (
            <p
              key={index}
              className="mt-2 bg-rose-100 cursor-pointer rounded-lg text-sm text-black capitalize flex px-3 py-2 mx-2 justify-center text-base shadow-sm border border-gray-300 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md break-all"
            >
              {index + 1}. {task}
            </p>
          ))}
      </div>
      <div className={`${toggleInfor ? 'hidden' : 'flex'} mx-5 flex-col gap-y-2`}>
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
        <div className='w-fit mx-auto' onClick={handleToggleInfor}>
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
    </div>
  )
}