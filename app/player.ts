interface Person {
    readonly name: string;
    readonly age?: number;

    display(): string;
}

export class Player implements Person {
    constructor(readonly name: string, readonly age?: number) {
    }

    display(): string {
        return this.name.toUpperCase();
    }
}