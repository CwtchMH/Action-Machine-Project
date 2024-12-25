export const CREATE_TASK = "CREATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const DELETE_ALL_TASKS = "DELETE_ALL_TASKS";
export const EDIT_TASK = "EDIT_TASK";

export type Action =
  | { type: typeof CREATE_TASK; payload: string; priority: "important" | "unimportant"; status: "urgent" | "unurgent" }
  | { type: typeof DELETE_TASK; payload: { priority: "important" | "unimportant"; status: "urgent" | "unurgent"; taskIndex: number } }
  | { type: typeof EDIT_TASK; payload: { priority: "important" | "unimportant"; status: "urgent" | "unurgent"; taskIndex: number; updatedTask: string } }
  | { type: typeof DELETE_ALL_TASKS };
