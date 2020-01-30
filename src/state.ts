let age: number = 10;
let firstName: string = 'Dimych';
let isMentor: boolean = true;
let ages: (number | string)[] = [18, 12, 19, 22, 'alex'];
interface IMan {
    name: string;
    height: number;
    isMarried?: boolean;
}

let man1: IMan = {name: 'Dima', height: 1.78}
let man2: IMan = {name: 'Sasha', height: 1.8}
interface ICar {
    model: string;
    year: number;
    on: boolean;
    turnOn: () => void;
    rename: (model: string) => void
}
let car: ICar = {
    model: 'Reno Stepway',
    year: 2016,
    on: false,
    turnOn() {
        this.on = true;
    },
    rename(model) {
        this.model = model;
    }
}

let peoples: IMan[] = [man1, man2]

interface IPlanet {
    title: string;
    age: number;
}
let planet: IPlanet = {title: 'Zemia', age: 5000}


function toUpperCase(strings: string[]): string[] {
    let result = strings.map(s => s.toUpperCase());
    return result;
}

let x = ['adf', 'effe']


let createMan = (name:string, height:number): IMan => {
    return {
        name,
        height
    };
}


console.log(toUpperCase(x))

export default 15;