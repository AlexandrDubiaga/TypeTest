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



interface ICar {
    model: string;
    year: number;
    on: boolean;
    turnOn: () => void;
    rename: (model: string) => void
}

export interface IGarage{
    addCar:(car:ICar)=>void;
    logAllCarsNames:()=>void;
    getAllCars:()=>ICar[];
}

export let createGarage = ():IGarage => {
    let _cars:ICar[] =  [];

    return {
        addCar(car) {
            _cars.push(car);
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ');
            _cars.forEach(c => console.log(c.model));
        },
        getAllCars() {
            return _cars;
        }
    }
}






console.log(toUpperCase(x))


export class Car {
    model:string;
    year:number;
    on:boolean=false;
    constructor(model:string,year:number){
        this.model = model;
        this.year = year;
    }
    turnOn(){
        this.on = true;
    }
    rename(model:string):string{
        return this.model = model;
    }

}



export default 15;