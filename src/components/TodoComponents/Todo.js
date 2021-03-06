import './Todo.css'
import React from 'react';


class Todo extends React.Component {
    constructor(){
        super();
        this.state = {};
    }

    handleClearClick = () => {
        return "something for now"; 
    }

    render () {

        return (
            <div className ="formOptions">
           { /*onChange = {this.props.handleInputChange}*/}
                <input onKeyUp = {this.props.handleenter} name="input" type="text" placeholder ="...todo" value = {this.props.value} onChange = {this.props.onChange} /> 
                <button onClick = {this.props.handleClick} >Add Todo</button>
                <button onClick = {this.props.handleClearClick}>Clear Completed</button>
            </div>
        );

    }
}

export default Todo; 