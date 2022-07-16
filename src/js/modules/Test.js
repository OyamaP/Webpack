export class Test {
    constructor(name) {
        this.name = name;
    }

    hello = () => {
        console.log(`${this.name}, hello`);
    }
}
