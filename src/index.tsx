import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {Car, createGarage} from './state'


let car1 = new Car('Ferrary',120);
let car2 = new Car('Buggatti',300);
let car3 = new Car('Lambo',500);


let garage=createGarage();

garage.addCar(car1);
garage.addCar(car2);
garage.addCar(car3)
ReactDOM.render(<App garage={garage} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
