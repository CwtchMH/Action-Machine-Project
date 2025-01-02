'use client'

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TasksState } from "../../definitions";


const initialState: TasksState = {
    tasks: {
        important: {
            urgent: [
                { id: 1, title: 'Học bài', detail: '', createdAt: '2025-01-02', finished: false},
                { id: 2, title: 'Học 1', detail: '', createdAt: '2025-01-02', finished: false},
                { id: 3, title: 'Học 2', detail: '', createdAt: '2025-01-02', finished: false},
                { id: 4, title: 'Học 3', detail: '', createdAt: '2025-01-02', finished: false},
            ],
            unurgent: [
                { id: 1, title: 'Học 4', detail: '', createdAt: '2025-01-02', finished: false},
                { id: 2, title: 'Học 5', detail: '', createdAt: '2025-01-02', finished: false},
                { id: 3, title: 'Học 6', detail: '', createdAt: '2025-01-02', finished: false},
                { id: 4, title: 'Học 7', detail: '', createdAt: '2025-01-02', finished: false},
            ]
        },
        unimportant: {
            urgent: [
                { id: 1, title: 'Học 8', detail: '', createdAt: '2025-01-02', finished: false},
                { id: 2, title: 'Học 9', detail: '', createdAt: '2025-01-02', finished: false},
                { id: 3, title: 'Học 10', detail: '', createdAt: '2025-01-02', finished: false},
                { id: 4, title: 'Học 11', detail: '', createdAt: '2025-01-02', finished: false},
            ],
            unurgent: [
                { id: 1, title: 'Học 12', detail: '', createdAt: '2025-01-02', finished: false},
                { id: 2, title: 'Học 13', detail: '', createdAt: '2025-01-02', finished: false},
                { id: 3, title: 'Học 14', detail: '', createdAt: '2025-01-02', finished: false},
                { id: 4, title: 'Học 15', detail: '', createdAt: '2025-01-02', finished: false},
            ]
        }
    }
}

const tasksSlice = createSlice({
    name: 'action',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{ priority: 'important' | 'unimportant', status: 'urgent' | 'unurgent', task: string }>) => {
            const { priority, status, task } = action.payload;
            const oldTask = state.tasks[priority][status].at(-1);
            const now = new Date(Date.now());
            const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
            const newId = oldTask ? oldTask.id + 1 : 1;
            state.tasks[priority][status].push({ id: newId, title: task, detail: '', createdAt: formattedDate, finished: false});
        },
        deleteAllTasks: (state) => {
            state.tasks = {
                important: {
                    urgent: [],
                    unurgent: []
                },
                unimportant: {
                    urgent: [],
                    unurgent: []
                }
            };
        },
        deleteTasksFaculty: (state, action: PayloadAction<{ priority: 'important' | 'unimportant', status: 'urgent' | 'unurgent' }>) => {
            const { priority, status } = action.payload;
            state.tasks[priority][status] = [];
        },
        deleteTask: (state, action: PayloadAction<{ priority: 'important' | 'unimportant', status: 'urgent' | 'unurgent', index: number }>) => {
            const { priority, status, index } = action.payload;
            state.tasks[priority][status].splice(index, 1);
        },
        editTask: (state, action: PayloadAction<{ priority: 'important' | 'unimportant', status: 'urgent' | 'unurgent', index: number, task: string }>) => {
            const { priority, status, index, task } = action.payload;
            state.tasks[priority][status][index].title = task;
        },
        toggleStatus: (state, action: PayloadAction<{ priority: 'important' | 'unimportant', status: 'urgent' | 'unurgent', index: number }>) => {
            const { priority, status, index } = action.payload;
            state.tasks[priority][status][index].finished = !state.tasks[priority][status][index].finished;
        },
        toggleAllStatusToTrue: (state, action: PayloadAction<{ priority: 'important' | 'unimportant', status: 'urgent' | 'unurgent' }>) => {
            const { priority, status } = action.payload;
            state.tasks[priority][status].forEach(task => task.finished = true);
        },
        toggleAllStatusToFalse: (state, action: PayloadAction<{ priority: 'important' | 'unimportant', status: 'urgent' | 'unurgent' }>) => {
            const { priority, status } = action.payload;
            state.tasks[priority][status].forEach(task => task.finished = false);
        }
    }
})

export const { addTask, deleteAllTasks, deleteTasksFaculty, deleteTask, editTask, toggleStatus, toggleAllStatusToFalse, toggleAllStatusToTrue } = tasksSlice.actions;

export default tasksSlice.reducer;