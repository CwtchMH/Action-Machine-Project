import { Tooltip } from 'react-tooltip'
import { useState, useRef, useEffect } from 'react'
import { useAppDispatch } from '@/app/lib/hooks'
import { deleteTask, editTask } from '@/app/lib/features/tasks/tasksSlice'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Task } from '@/app/lib/features/tasks/tasksSlice'

export default function ButtonControlEach({
  index,
  task,
  prior,
  status
}: {
  index: number
  task: Task
  prior: string
  status: string
}) {
  const notifySuccess = (notification: string) =>
    toast.success(notification, { autoClose: 2000 })
  const notifyError = (notification: string) =>
    toast.error(notification, { autoClose: 2000 })
  const ref = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch()
  const [toggleDone, setToggleDone] = useState(false)
  const [toggleEdit, setToggleEdit] = useState(false)

  const handleDone = () => {
    const newToggleState = !toggleDone
    setToggleDone(newToggleState)

    if (newToggleState) {
      notifySuccess('Task done successfully')
    } else {
      notifyError('Task is not done')
    }
  }

  useEffect(() => {
    if (ref?.current && toggleEdit) {
      ref.current?.focus()
    }
  })

  const handleDelete = () => {
    dispatch(
      deleteTask({
        priority: prior === 'important' ? 'important' : 'unimportant',
        status: status === 'urgent' ? 'urgent' : 'unurgent',
        index
      })
    )
  }

  const handleEdit = () => {
    setToggleEdit(!toggleEdit)
  }

  const handleEdittedTask = () => {
    const newTask = document.querySelector(
      `input[name="task-${prior}-${status}-${index}"]`
    ) as HTMLInputElement
    if (newTask.value) {
      dispatch(
        editTask({
          priority: prior === 'important' ? 'important' : 'unimportant',
          status: status === 'urgent' ? 'urgent' : 'unurgent',
          index,
          task: newTask.value
        })
      )
      setToggleEdit(false)
      notifySuccess('Task editted successfully')
    } else {
      notifyError('Task is not editted')
    }
  }

  return (
    <div className="flex justify-between items-center w-full">
      <div
        data-tooltip-id="done-tooltip"
        data-tooltip-content={'Done task'}
        onClick={handleDone}
        className={`cursor-pointer ${
          toggleDone
            ? 'flex items-center gap-1 bg-green-500 px-2 py-1 rounded-lg'
            : ''
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke={`currentColor`}
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
          />
        </svg>
        <span className={`${toggleDone ? '' : 'hidden'}`}>Done</span>
      </div>
      <Tooltip id="done-tooltip" place="top" />
      {toggleEdit && (
        <span className="w-[90%] flex justify-between items-center">
          <input
            ref={ref}
            type="text"
            className="w-[92%] rounded-xl pl-3"
            name={`task-${prior}-${status}-${index}`}
            defaultValue={task.title}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 btn-edit"
            onClick={handleEdittedTask}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
            />
          </svg>
        </span>
      )}
      {!toggleEdit && (
        <span>
          {index + 1}. {task.title}
        </span>
      )}
      <div>
        <button
          data-tooltip-id="edit-tooltip"
          data-tooltip-content={'Edit task'}
          onClick={handleEdit}
          className={`${toggleEdit ? 'hidden' : ''}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="orange"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
        <Tooltip id="edit-tooltip" place="top" />
        <button
          data-tooltip-id="delete-tooltip"
          data-tooltip-content={'Delete task'}
          onClick={handleDelete}
          className={`${toggleEdit ? 'hidden' : ''}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="red"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
        <Tooltip id="delete-tooltip" place="top" />
      </div>
    </div>
  )
}
