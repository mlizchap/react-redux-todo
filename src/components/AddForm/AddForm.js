import React, { Component } from 'react';       
import { connect } from 'react-redux';

import { createTodo } from '../../actions';
import './AddForm.scss';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            error: false
         };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value && this.props.todos.filter(i => i.name == this.state.value).length < 1) {
            this.props.createTodo(this.state.value);
            this.setState({ value: '' })
        } else if (this.state.value) {
            this.setState({ error: true, value: '' })
        } 
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value, error: false })
    }
    render() {
        return (
            <form 
                className="addform-component"
                onSubmit={(e) => this.handleSubmit(e)}>
                <input 
                    className="addform-component__input"
                    type="text" 
                    onChange={(e) => this.handleChange(e)} 
                    value={this.state.value}
                />                
                <input 
                    className="addform-component__submit-button"
                    type="submit" 
                    value="add"
                />
                <div className="addform-component__error-message">
                {(this.state.error) ? <div className="error-message">Todo Already Exists!</div> : <div>&nbsp;</div> }
                </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return { todos: state.todos }
}

export default connect(mapStateToProps, {createTodo})(AddForm);