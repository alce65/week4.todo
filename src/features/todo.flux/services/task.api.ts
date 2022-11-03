import { ITask, Task } from '../models/task';

export class TaskApi {
    url: string;
    constructor(url = '') {
        this.url = url ? url : (process.env.REACT_APP_URL_TASKS as string);
    }

    // read / get
    getTasks(): Promise<Array<Task>> {
        return fetch(this.url).then((response) => {
            if (response.ok) return response.json();
            const message = `Error ${response.status}: ${response.statusText}`;
            const error = new Error(message);
            error.name = 'HTTPError';
            throw error;
        });
    }

    // create / post
    createTask(task: ITask): Promise<Task> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => response.json());
    }

    // delete
    deleteTask(id: number): Promise<Response> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        });
    }

    // uptate / patch
    updateTask(id: number, partialTask: Partial<ITask>): Promise<Task> {
        return fetch(`${this.url}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialTask),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => response.json());
    }
}
