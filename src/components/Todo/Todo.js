import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markComplete } from '../../actions'

// import './Todo.scss';

export class Todo extends Component {
    constructor(props) {
        super(props);
        this.todo = React.createRef();
    }
    handleComplete = () => {
        this.props.completed ? this.todo.current.style.textDecoration = 'none' : this.todo.current.style.textDecoration = 'line-through'
        
        this.props.markComplete(this.props.name);
    }
    render() {
        return (
            <div 
                ref={this.todo}
                className="todo-component" 
                onClick={this.handleComplete}
                //style={(this.props.completed) ? {color: 'red'} : {color: 'blue'}}
            >
                {this.props.name}
            </div>
        );
    }
}

export default connect(null, {markComplete})(Todo);