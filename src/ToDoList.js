import { Component } from "react";
import iconka from './iconka.png';

export class ToDoList extends Component {
    state = {
        userInput: "",
        ToDoList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addItem(input){
        if (input === '') {
            alert ('Пожалуйста введите данные!')
        } else {
        let listArray = this.state.ToDoList;
        listArray.push(input);
        this.setState({ToDoList: listArray, userInput: ''})
        }
    }

    deleteItem() {
        let listArray = this.state.ToDoList;
        listArray = [];
        this.setState({ToDoList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text"
                placeholder="ваш текст..." 
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>

            <div className="container">
            <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Добавить</button>
            </div>

            <ul>
                {this.state.ToDoList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                        <img src={iconka} width="30px" alt="icon"/>
                        {item}
                        </li>
                ))}
            </ul>
            <div className="container">
            <button onClick={() => this.deleteItem()} className="btn delete">Удалить</button>
            </div>
            </form>
            </div>
        )
    }  
}
