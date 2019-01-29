
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
            return {

            }

    }
}

export default reducer;