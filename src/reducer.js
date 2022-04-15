import todosReducer from "./features/todos/todosSlice"
import filtersReducer from "./features/filters/filtersSlice"

export default function appReducer(state = {}, action) {
    return {
        todos: todosReducer(state.todos, action),
        filters: filtersReducer(state.filters, action)
    }
}