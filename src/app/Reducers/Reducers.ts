import { CREATE_TASK, DELETE_ALL_TASKS, DELETE_TASK, EDIT_TASK } from "../ActionTypes/actionTypes";
import { Action } from "../ActionTypes/actionTypes";

const initialState = {
    tasks: {
        important: {
            urgent: [],
            unurgent: []
        },
        unimportant: {
            urgent: [],
            unurgent: []
        }
    }
}

const Reducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case CREATE_TASK:
            const { payload, priority, status } = action;
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [priority]: {
                        ...state.tasks[priority],
                        [status]: [
                            ...state.tasks[priority][status],
                            payload
                        ]
                    }
                }
            }
    }
}