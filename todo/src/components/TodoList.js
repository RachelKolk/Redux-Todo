import React from 'react';
import {connect} from 'react-redux';

import {addNewTodo, toggleTodo, deleteTodo} from '../actions';

import './TodoList.css';


class TodoList extends React.Component {
    state = {
        newTodo: ''
    };

    handleChanges = e => {
        this.setState({newTodo: e.target.value});
    };

    addTodo = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo);
    };

    toggleTodo = (e, index) => {
        e.preventDefault();
        this.props.toggleTodo(index);
    };

    deleteTodo = (e, index) => {
        e.preventDefault();
        this.props.deleteTodo(index);
    }

    render() {
        return (
            <>
                <div>
                    {this.props.todos.map((todo, index) => (
                       <div> <h3 className={todo.completed ? 'completed' : null} 
                        onClick={e => this.toggleTodo(e, index)} key={index}>
                          {todo.value}
                        </h3>
                        <button onClick={e => this.deleteTodo(e, index)}>Delete Item</button>
                        </div>
                    ))}
                   
                </div>

                <input
                    type="text"
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                />

                <button onClick={this.addTodo}>Add To List</button>
            </>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(
    mapStateToProps,
    {addNewTodo, toggleTodo, deleteTodo}
)(TodoList);