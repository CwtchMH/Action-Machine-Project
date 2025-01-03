'use client';

import { useAppDispatch } from '@/app/lib/hooks'
import { deleteTasksFaculty } from '@/app/lib/features/tasks/tasksSlice'
import { toast } from 'react-toastify'
import { Task } from '@/app/lib/definitions'
import { useMemo } from 'react'
import { filterDoneStatus } from '@/app/lib/utils'
import {
  toggleAllStatusToFalse,
  toggleAllStatusToTrue
} from '@/app/lib/features/tasks/tasksSlice'

export default function ButtonsControlTables({
  tasks,
  show2lastbuttons,
  handleAddTask,
  prior,
  status
}: {
  tasks: Task[]
  show2lastbuttons: boolean
  handleAddTask: () => void
  prior: string
  status: string
}) {
  const notify = (notification: string) => toast(notification)
  const notifyError = (notification: string) => toast.error(notification)
  const notifySuccess = (notification: string) => toast.success(notification)

  const dispatch = useAppDispatch()

  const handleDeleteAllTasks = () => {
    dispatch(
      deleteTasksFaculty({
        priority: prior === 'important' ? 'important' : 'unimportant',
        status: status === 'urgent' ? 'urgent' : 'unurgent'
      })
    )
    notify(
      `All tasks of ${prior.toUpperCase()} x ${status.toUpperCase()} deleted successfully`
    )
  }

  const allDone = useMemo(() => filterDoneStatus(tasks), [tasks])

  const handleToggleAllStatus = () => {
    if (allDone) {
      dispatch(
        toggleAllStatusToFalse({
          priority: prior === 'important' ? 'important' : 'unimportant',
          status: status === 'urgent' ? 'urgent' : 'unurgent'
        })
      )

      notifyError(
        `All tasks of ${prior.toUpperCase()} x ${status.toUpperCase()} are undone`
      )
    } else {
      dispatch(
        toggleAllStatusToTrue({
          priority: prior === 'important' ? 'important' : 'unimportant',
          status: status === 'urgent' ? 'urgent' : 'unurgent'
        })
      )

      notifySuccess(`All tasks of ${prior.toUpperCase()} x ${status.toUpperCase()} are done`)
    }
  }

  return (
    <>
      {/* Màn hình lớn */}
      <div className={`hidden justify-between gap-1 xl:flex`}>
        <button className="btn-primary flex gap-1" onClick={handleAddTask}>
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
          className={`group border-3 border-black btn-danger flex-row items-center md:px-3 ${
            show2lastbuttons ? 'flex' : 'hidden'
          }`}
          onMouseEnter={(e) => {
            if (show2lastbuttons) {
              e.currentTarget?.nextSibling?.classList.add('hidden')
            }
          }}
          onMouseLeave={(e) => {
            if (show2lastbuttons) {
              e.currentTarget?.nextSibling?.classList.remove('hidden')
            }
          }}
          onClick={handleDeleteAllTasks}
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
          className={`group border-3 border-black items-center flex-row md:px-3 ${
            show2lastbuttons ? 'flex' : 'hidden'
          }
          ${allDone ? 'btn-danger' : 'btn-success'}
          `}
          onMouseEnter={(e) => {
            e.currentTarget?.previousSibling?.classList.add('hidden')
            e.currentTarget?.parentElement?.classList.add('justify-end')
            e.currentTarget?.parentElement?.classList.remove('justify-between')
          }}
          onMouseLeave={(e) => {
            e.currentTarget?.previousSibling?.classList.remove('hidden')
            e.currentTarget?.parentElement?.classList.remove('justify-end')
            e.currentTarget?.parentElement?.classList.add('justify-between')
          }}
          onClick={handleToggleAllStatus}
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
            {allDone ? 'Undone all tasks' : 'Done all tasks'}
          </span>
        </button>
      </div>
      {/* Màn hình lớn */}
      {/* Màn hình bé */}
      <div className="flex xl:hidden justify-between gap-1">
        <button className="btn-primary flex gap-1" onClick={handleAddTask}>
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
    </>
  )
}
