import { Task } from '../models/task';
import { TaskApi } from './task.api';

describe('Given TaskApi Service', () => {
    describe('When we instantiate it', () => {
        let service: TaskApi;
        beforeEach(() => {
            service = new TaskApi();
        });
        test(`Then if I use service.getTask() 
            it should return a Promise of an Array of Task`, async () => {
            global.fetch = jest
                .fn()
                .mockResolvedValue({ json: jest.fn().mockResolvedValue([]) });
            const result = await service.getTasks();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test.only(`Then if I use service.createTask()
                it should return a Promise of the crated task`, async () => {
            const mockTask = new Task('', '');
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(mockTask),
            });
            const result = await service.createTask(mockTask);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockTask);
        });
        test('Then if I use .... it should ...', async () => {
            await service.deleteTask(1);
        });
        test('Then if I use ..... it should ...', async () => {
            await service.updateTask(1, { isComplete: true });
        });
    });
});
