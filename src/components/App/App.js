import React, { Component } from 'react';

import AddForm from '../AddForm/AddForm';
import TodoList from '../TodoList/TodoList';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="component-app">
                <div className="component-app__container">
                    <h1>TODO LIST</h1>
                    <AddForm />
                    <TodoList />
                </div>
            </div>
        );
    }
}

export default App;