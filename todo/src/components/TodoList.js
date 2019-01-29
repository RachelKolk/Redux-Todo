import React from 'react';
import {connect} from 'react-redux';

import {addNewTodo} from '../actions';


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


    render() {
        return (
            <>
                <div>
                    {this.props.todos.map((todo, index) => (
                        <h2 key={index}>{todo.value}</h2>
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
    {addNewTodo}
)(TodoList);