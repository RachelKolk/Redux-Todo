import {ADD_TODO, TOGGLE_TODO} from '../actions';


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
        case TOGGLE_TODO:
            console.log('toggle_todo', action);
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                  action.payload === index ? {...todo, completed: !todo.completed} : todo
                )
            };
        default:
            return state;
    }
}

export default reducer;