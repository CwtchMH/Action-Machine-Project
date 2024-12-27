import { configureStore } from "@reduxjs/toolkit";
import TasksSlice from '../lib/features/tasks/tasksSlice'

export const store = configureStore({
  reducer: {
    tasksReducer: TasksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;