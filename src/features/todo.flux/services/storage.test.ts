import { Task } from '../models/task';
import { Store } from './storage';

describe('Given Storage Service', () => {
    describe('When we instantiate it', () => {
        let service: Store<Task>;
        beforeEach(() => {
            service = new Store();
        });
        test(`Then if localStorage have data 
                and I use service.getStore() 
                it should call localStorage.getItem
                and return de data`, () => {
            Storage.prototype.getItem = jest.fn().mockReturnValue('["test"]');
            const result = service.getStore();
            expect(localStorage.getItem).toHaveBeenCalled();
            expect(result).toEqual(['test']);
        });
        test(`Then if localStorage have not data  
            and I use  service.getStore() 
            it should call localStorage.getItem
            and return []`, () => {
            Storage.prototype.getItem = jest.fn();
            const result = service.getStore();
            expect(localStorage.getItem).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test('Then if I use setStore it should ...', () => {
            Storage.prototype.setItem = jest.fn();
            service.setStore([]);
            expect(localStorage.setItem).toHaveBeenCalled();
        });
    });
});
