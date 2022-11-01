import { make, reMake } from './index';
import { bar, foo } from './functions';
import { OneClass } from './constructor';

jest.mock('./functions');
describe('Given make function...', () => {
    test('should first', () => {
        (foo as jest.Mock).mockReturnValue(0);
        const r = make();
        expect(r).toBe(0);
        expect(foo).toHaveBeenCalled();
    });
});

jest.mock('./constructor');
describe('Given reMake function...', () => {
    test('should first', () => {
        OneClass.prototype.bar = jest.fn().mockReturnValue(0);
        const r = reMake();
        expect(r).toBe(0);
        expect(OneClass.prototype.foo).toHaveBeenCalled();
    });
});
