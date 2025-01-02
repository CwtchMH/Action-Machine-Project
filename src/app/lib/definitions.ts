export interface Task {
    id: number;
    title: string;
    detail: string;
    createdAt: string;
    finished: boolean;
}

export interface StatusState {
    urgent: Task[],
    unurgent: Task[]
}

export interface InitialState {
    important: StatusState,
    unimportant: StatusState
}

export interface TasksState {
    tasks: InitialState;
}