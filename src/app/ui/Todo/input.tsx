"use client"
import { useActionState } from "react";
import { z } from "zod";
import { createTask, State } from "@/app/lib/actions";

export default function Input() {
    const initialState: State = { message: null, errors: {} };
    const [state, formAction] = useActionState(createTask, initialState);
  return (
    <div className="pt-4 mb-5" id="div-input">
      <form
        action={formAction}
        className="flex items-center flex-col md:flex-row justify-evenly w-full"
      >
        <div className="md:w-[50%] w-full">
          <input
            type="text"
            className="border-2 border-black rounded-lg w-[100%] h-12 pl-4"
            placeholder="New task for new life"
            name="taskContent"
            aria-describedby="input-error"
          />
          <div id="input-error" aria-live="polite" aria-atomic="true">
            {state.errors?.taskContent &&
              state.errors.taskContent.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="priority" className="font-bold text-center">
            Priority:
          </label>
          <select
            id="priority"
            className="border-2 border-gray-300 bg-white rounded-lg"
            name="priority"
            aria-describedby="priority-error"
          >
            <option value="" selected disabled>
              Select an option
            </option>
            <option value="important">Important</option>
            <option value="unimportant">Unimportant</option>
          </select>
          <div id="priority-error" aria-live="polite" aria-atomic="true">
            {state.errors?.priority &&
              state.errors.priority.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="status" className="font-bold text-center">
            Status:
          </label>
          <select
            id="status"
            className="border-2 border-gray-300 bg-white rounded-lg"
            name="status"
            aria-describedby="status-error"
          >
            <option selected disabled>
              Select an option
            </option>
            <option value="urgent">Urgent</option>
            <option value="unurgent">Unurgent</option>
          </select>
          <div id="status-error" aria-live="polite" aria-atomic="true">
            {state.errors?.status &&
              state.errors.status.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className=" flex justify-evenly mt-3 md:mb-0 md:justify-between">
          <button
            type="submit"
            className="btn btn-primary w-[40%] md:w-fit md:py-2 md:px-5"
          >
            Add a new task
          </button>
          <button className="btn btn-danger w-[40%] md:w-fit md:py-2 md:px-5">
            Delete all tasks
          </button>
        </div>
      </form>
    </div>
  );
}
