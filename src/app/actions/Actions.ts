import { DELETE_ALL_TASKS, DELETE_TASK, CREATE_TASK, EDIT_TASK } from "../ActionTypes/actionTypes";

const createTask = (task: string, priority: string, status: string) => {
    return {
        type: CREATE_TASK,
        payload: task,
        priority: priority,
        status: status
    }
}

export { createTask };