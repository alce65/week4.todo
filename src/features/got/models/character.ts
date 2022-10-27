export class Character {
    static series = 'GoT';
    private _isAlive: boolean;
    public get isAlive(): boolean {
        return this._isAlive;
    }
    protected message: string;
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public category: 'king' | 'fighter' | 'counselor' | 'squire'
    ) {
        this._isAlive = true;
        this.message = '';
    }
    communicate() {
        return this.message;
    }
    dead() {
        this._isAlive = false;
    }
}
