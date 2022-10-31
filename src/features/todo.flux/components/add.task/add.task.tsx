import { SyntheticEvent, useContext, useState } from 'react';
import { TodoFluxContext } from '../../context/context';
import { ITask } from '../../models/task';
import styles from './add.task.module.css';

type formData = {
    title: string;
    responsible: string;
};

export function AddTask() {
    const title = 'Añadir tareas';

    const { handleAdd } = useContext(TodoFluxContext);

    const initialState: formData = {
        title: '',
        responsible: '',
    };
    const [formState, setFormState] = useState(initialState);

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        const newTask: ITask = { ...formState, isComplete: false };
        handleAdd(newTask);
    };

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };

    return (
        <div className={styles.host}>
            <p>{title}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="title"
                        placeholder="Cuál es la tarea"
                        value={formState.title}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="responsible"
                        placeholder="Quien es el responsable"
                        value={formState.responsible}
                        onInput={handleInput}
                    />
                </div>
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
}
