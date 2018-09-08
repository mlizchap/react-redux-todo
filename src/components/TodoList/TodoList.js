import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from '../Todo/Todo';
import './TodoList.scss';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="component-todolist">
                {this.props.todos.map(todo => {
                    return (
                        <Todo 
                            key={todo.name} 
                            name={todo.name} 
                            completed={todo.completed}
                        />
                    )
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoList);