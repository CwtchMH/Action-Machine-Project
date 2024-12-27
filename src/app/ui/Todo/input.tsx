"use client";
import React, { useActionState, useEffect, useState } from "react";
import { z } from "zod";
import { createTask, State } from "@/app/lib/actions";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { addTask, deleteAllTasks } from "@/app/lib/features/tasks/tasksSlice";

export default function Input() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createTask, initialState);
  const dispatch = useAppDispatch();
  const [inputTask, setInput] = useState("");
  const [statusTask, setStatus] = useState("Select an option");
  const [priorityTask, setPriority] = useState("Select an option");

  const handlePriority = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(event.target.value);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllTasks());
  }

  useEffect(() => {
    if (state?.taskData) {
      dispatch(
        addTask({
          priority:
            state?.taskData?.priority === "important"
              ? "important"
              : "unimportant",
          status: state?.taskData?.status === "urgent" ? "urgent" : "unurgent",
          task: state?.taskData?.taskContent,
        })
      );

      setPriority("Select an option");
      setInput("");
      setStatus("Select an option");
    }
  }, [state?.taskData]);

  useEffect(() => {
    if (state?.errors) {
      document.getElementById("input-field").value = inputTask;
      document.getElementById("priority").value = priorityTask;
      document.getElementById("status").value = statusTask;
    }
  }, [state?.errors]);

  return (
    <div className="pt-4 mb-5 flex items-center" id="div-input">
      <form
        action={formAction}
        className="flex items-center flex-col md:flex-row justify-evenly w-[85%]"
      >
        <div className="md:w-[50%] w-full">
          <input
            id="input-field"
            type="text"
            className="border-2 border-black rounded-lg w-[100%] h-12 pl-4"
            placeholder="New task for new life"
            name="taskContent"
            aria-describedby="input-error"
            value={inputTask}
            onChange={handleInput}
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
            onChange={handlePriority}
            value={priorityTask}
          >
            <option key={0} id="default-pri" disabled>
              Select an option
            </option>
            <option key={1} value="important">
              Important
            </option>
            <option key={2} value="unimportant">
              Unimportant
            </option>
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
            value={statusTask}
            onChange={handleStatus}
          >
            <option key={0} id="default-status" disabled>
              Select an option
            </option>
            <option key={1} value="urgent">
              Urgent
            </option>
            <option key={2} value="unurgent">
              Unurgent
            </option>
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
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="flex gap-1 btn-primary w-[40%] md:w-fit md:py-2 md:px-5"
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
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Add a new task
          </button>
        </div>
      </form>
      <div className="flex justify-between pr-6 w-[15%]">
        <button
          className="group border-3 border-black btn-danger flex flex-row items-center md:py-2 md:px-7"
          onMouseEnter={(e) => {
            e.currentTarget?.nextSibling?.classList.add("hidden");
          }}
          onMouseLeave={(e) => {
            e.currentTarget?.nextSibling?.classList.remove("hidden");
          }}
          onClick={handleDeleteAll}
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
          className="group relative border-3 border-black btn-success flex items-center flex-row md:py-2 md:px-7"
          onMouseEnter={(e) => {
            e.currentTarget?.previousSibling?.classList.add("hidden");
            e.currentTarget?.parentElement?.classList.add("justify-end");
            e.currentTarget?.parentElement?.classList.remove("justify-between");
          }}
          onMouseLeave={(e) => {
            e.currentTarget?.previousSibling?.classList.remove("hidden");
            e.currentTarget?.parentElement?.classList.remove("justify-end");
            e.currentTarget?.parentElement?.classList.add("justify-between");
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
    </div>
  );
}
