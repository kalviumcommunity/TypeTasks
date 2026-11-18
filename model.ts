export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
    id: number;
    title: string;
    status: TaskStatus;
}

let nextId = 1;

export function addTask(tasks: Task[], title: string): Task[] {
    const newTask: Task = {
        id: nextId++,
        title,
        status: "todo"
    };

    return [...tasks, newTask];
}

export function completeTask(tasks: Task[], id: number): Task[] {
    return tasks.map((t) =>
        t.id === id ? { ...t, status: "done" } : t
    );
}

export function filterByStatus(
    tasks: Task[],
    status: TaskStatus
): Task[] {
    return tasks.filter((t) => t.status === status);
}

export function getPendingTasks(tasks: Task[]): Task[] {
    return tasks.filter((task) => task.status !== "done");
}