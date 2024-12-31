import { useAppDispatch } from "@/app/lib/hooks"
import { addTask } from "@/app/lib/features/tasks/tasksSlice"

export default function InputField({ color, toggleAddTask, handleAddTask, prior, statuss, roundedCorner } : { color: string, toggleAddTask: boolean, handleAddTask: () => void, prior: string, statuss: string, roundedCorner: string }) {
    const dispatch = useAppDispatch();
    const handleAddNewTask = () => {
        const task = document.querySelector('input[name="task"]') as HTMLInputElement;
        if (task.value) {
            dispatch(addTask({ priority: prior === 'important' ? 'important' : 'unimportant', status: statuss === 'urgent' ? 'urgent' : 'unurgent', task: task.value }))
            task.value = '';
        }
    }
    return (
    <div
      className={`bg-${color} px-3 py-2 mx-2 rounded-${roundedCorner}-3xl rounded-lg shadow-sm border border-gray-300 flex-row justify-evenly ${
        toggleAddTask ? 'flex mt-auto' : 'hidden'
      }`}
    >
      <input
        placeholder="New task for new life"
        type="text"
        className="w-[85%] rounded-xl pl-3"
        name="task"
      />
      <div className="btn-success" onClick={handleAddNewTask}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
          />
        </svg>
      </div>
      <div className="btn-danger" onClick={handleAddTask}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </div>
  )
}