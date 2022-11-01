import { OneClass } from './constructor';
import { bar, foo } from './functions';

export function make() {
    bar();
    return foo();
}

export function reMake() {
    const api = new OneClass();
    api.bar();
    api.foo();
}
