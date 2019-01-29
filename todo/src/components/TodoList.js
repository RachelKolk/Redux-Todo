import React from 'react';
import {connect} from 'react-redux';


class TodoList extends React.Component {
    state = {
        newTodo: ''
    };


    render() {
        return (
            <>
                <h2>todos mapped out will go here</h2>
            </>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(
    mapStateToProps,
    {}
)(TodoList);