import {ADD_TODO} from '../actions';


const initialState = {
    todos: [
        {value: 'Cook dinner', completed: false},
        {value: 'Wash towels', completed: false},
        {value: 'Thank you notes', completed: false}
    ]
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
        case ADD_TODO:
            console.log('add_todo', action);
            const newTodo = {
                value: action.payload,
                completed: false
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        default:
            return state;
    }
}

export default reducer;