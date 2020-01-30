import React from 'react';
import './App.css';
import {IGarage} from "./state";
import axios from "axios";

interface ITodolist{
    id:string;
    addedDate:string;
    order:number;
    title:string;
}

interface  IProps{
    garage:IGarage;
}
interface IState{
    todolists:ITodolist[]
}
class App extends React.Component<IProps,IState> {
    state:IState={
        todolists:[]
    }
    componentDidMount():void{
        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists',{withCredentials:true}).then(res=>{
            this.setState({todolists:res.data})
        })
    }
    render(){
        return (
            <div className="App">
                {this.props.garage.getAllCars().map(c=>{
                    return <p>model:{c.model}-age{c.year}</p>
                })}
                {this.state.todolists.map(t=>{
                    return <div>{t.title}</div>
                })}
            </div>
        );
    }

}

export default App;
