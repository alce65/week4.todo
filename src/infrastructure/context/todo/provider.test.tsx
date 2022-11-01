import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { TodoContext } from './context';
import { TodoContextProvider } from './provider';
import { TaskApi } from '../../../features/todo/services/task.api';
import { Task } from '../../../features/todo/models/task';
import userEvent from '@testing-library/user-event';
jest.mock('../../../features/todo/services/task.api');

const task1 = new Task('Task1', 'Pepe');
const task2 = new Task('Task2', 'Luisa');

describe('Given the context', () => {
    describe('When it is used by a test componente', () => {
        let TestComponent: () => JSX.Element;
        beforeEach(() => {
            TaskApi.prototype.getTasks = jest.fn().mockResolvedValue([task1]);
            TestComponent = function () {
                const { tasks, handleAdd, handlerComplete, handlerEraser } =
                    useContext(TodoContext);
                return (
                    <>
                        <p>Probando contexto</p>
                        <ul>
                            {tasks.map((item) => (
                                <li key={item.id}>{item.title}</li>
                            ))}
                        </ul>
                        <button
                            type="button"
                            onClick={() => {
                                handleAdd(new Task('Task2', 'Juan'));
                            }}
                        >
                            Add Task
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                handlerComplete(task1);
                            }}
                        >
                            Complete Task
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                handlerEraser(task2.id);
                            }}
                        >
                            Delete Task
                        </button>
                    </>
                );
            };
        });

        test('Then todolist should be render from context', async () => {
            render(
                <TodoContextProvider>
                    <TestComponent></TestComponent>
                </TodoContextProvider>
            );
            let element = screen.getByText(/Probando contexto/i);
            expect(element).toBeInTheDocument();
            expect(TaskApi.prototype.getTasks).toHaveBeenCalled();

            element = await screen.findByText(/Task1/i);
            expect(element).toBeInTheDocument();
        });
        test('Then new todo should be render when add button is clicked', async () => {
            TaskApi.prototype.createTask = jest
                .fn()
                .mockResolvedValue(new Task('Task2', 'Juan'));
            render(
                <TodoContextProvider>
                    <TestComponent></TestComponent>
                </TodoContextProvider>
            );

            userEvent.click(screen.getByText(/Add Task/i));
            expect(TaskApi.prototype.createTask).toHaveBeenCalled();
            const element = await screen.findByText(/Task2/i);
            expect(element).toBeInTheDocument();
        });
        test('Then a todo should be completed when change button is clicked', async () => {
            task1.isComplete = true;
            TaskApi.prototype.updateTask = jest.fn().mockResolvedValue(task1);

            render(
                <TodoContextProvider>
                    <TestComponent></TestComponent>
                </TodoContextProvider>
            );
            await screen.findByText(/Task1/i);
            userEvent.click(screen.getByText(/Complete Task/i));
            expect(TaskApi.prototype.updateTask).toHaveBeenCalled();
        });
        test('Then a todo should be deleted when delete button is clicked', async () => {
            TaskApi.prototype.deleteTask = jest
                .fn()
                .mockResolvedValue({ status: 200 });
            render(
                <TodoContextProvider>
                    <TestComponent></TestComponent>
                </TodoContextProvider>
            );
            userEvent.click(await screen.findByText(/Delete Task/i));
            expect(TaskApi.prototype.deleteTask).toHaveBeenCalled();
        });
    });
});
