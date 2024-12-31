'use client'

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface Task {
//     id: string;
//     title: string;
// }

interface StatusState {
    urgent: string[],
    unurgent: string[]
}

export interface InitialState {
    important: StatusState,
    unimportant: StatusState
}

export interface TasksState {
    tasks: InitialState;
}


const initialState: TasksState = {
    tasks: {
        important: {
            urgent: ['Học bài', 'Làm bài tập', 'Ăn uống', 'Tụ tập'],
            unurgent: ['Đi chơi', 'Đi ăn']
        },
        unimportant: {
            urgent: ['Đi chơi', 'Đi ăn', 'Ngủ'],
            unurgent: ['Học bài', 'Làm bài tập', 'Ăn uống']
        }
    }
}

const tasksSlice = createSlice({
    name: 'action',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{ priority: 'important' | 'unimportant', status: 'urgent' | 'unurgent', task: string }>) => {
            const { priority, status, task } = action.payload;
            state.tasks[priority][status].push(task);
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
        }
    }
})

export const { addTask, deleteAllTasks, deleteTasksFaculty } = tasksSlice.actions;

export default tasksSlice.reducer;