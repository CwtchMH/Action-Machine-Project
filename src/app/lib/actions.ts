"use server";

import { error } from "console";
import { z } from "zod";

const NewTask = z.object({
    taskContent: z.string().min(1, 'Please enter your new task').max(255, "Please shorten the length of your task"),
    priority: z.string({
        invalid_type_error: "Please enter here"
    }),
    status: z.string({
        invalid_type_error: "Please enter here"
    })
})

export type State = {
    errors?: {
        taskContent?: string[];
        priority?: string[];
        status?: string[];
    };
    message?: string | null;
}

export async function createTask(prevState: State, formData: FormData): Promise<State> {
    const validateField = NewTask.safeParse({
        taskContent: formData.get("taskContent"),
        priority: formData.get("priority"),
        status: formData.get("status")
    })

    if(!validateField.success) {
        return {
            errors: validateField.error.flatten().fieldErrors,
            message: "Missing field, please enter required fields"
        }
    }

    const { taskContent, priority, status } = validateField.data;

  // Return success state
  return {
    message: "Task created successfully",
    errors: {}, // No errors
  };
}

