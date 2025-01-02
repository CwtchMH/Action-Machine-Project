import { Task } from "./definitions"

export const filterDoneStatus = (tasks: Task[]) => {
    return tasks.filter(task => task.finished).length === tasks.length;
}

export const filterUndoneStatus = (tasks: Task[]) => {
    return tasks.filter(task => !task.finished).length === tasks.length;
}