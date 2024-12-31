'use client'

import { useAppSelector } from '../lib/hooks'
import React from 'react'
import UnimportantUrgent from '../ui/Todo/unimportantUrgent'
import UnimportantUnurgent from '../ui/Todo/unimportantUnurgent'
import ImportantUrgent from '../ui/Todo/importantUrgent'
import ImportantUnurgent from '../ui/Todo/importantUnurgent'

export default function Page() {
  const tasks = useAppSelector((state) => state.tasksReducer?.tasks)

  return (
    <div
      id="main-div-todo"
      className="bg-white h-screen m-0 p-0 flex justify-end items-center"
    >
      <div className="w-full h-5/6 xl:w-[87%] xl:h-full flex flex-row flex-wrap">
        <div className="w-full h-[7%] hidden xl:flex">
          <div className="w-[10%]"></div>
          <div className="w-[45%] flex justify-center items-center font-extrabold text-xl">
            Urgent
          </div>
          <div className="w-[45%] flex justify-center items-center font-extrabold text-xl">
            Non Urgent
          </div>
        </div>
        <div className="hidden xl:flex flex-col justify-around h-[93%] w-[10%]">
          <div className="">
            <p className="-rotate-90 font-extrabold text-xl">Important</p>
          </div>
          <div>
            <p className="-rotate-90 font-extrabold text-xl">Not Important</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-2 xl:gap-y-0 xl:grid-cols-2 w-full xl:w-[90%]">
          <ImportantUrgent tasks={tasks} />
          <ImportantUnurgent tasks={tasks} />
          <UnimportantUrgent tasks={tasks} />
          <UnimportantUnurgent tasks={tasks} />
        </div>
      </div>
    </div>
  )
}
