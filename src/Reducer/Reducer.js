const Reducer = (state, action) => {
    const { type, payload } = action;
    switch (type){
        case 'DeleteTodo':
            return state.filter(todo => todo.id !== payload.todoId)
        case 'CheckItem':
            return state.map(todo => todo.id === payload.todoId ? {...todo , items: todo.items.map(item => item.id === payload.itemId ? {...item ,status: payload.e.target.checked} : item)} : todo)
        case 'AddNewTodo':
            return [...state , {id:Math.floor(Math.random()*1000),title:payload.Title,items:[]}]
        case 'LocalSave':
            return JSON.parse(payload.data)
        case 'AddNewItem':
            return state.map(todo => todo.id === payload.TodoId ? {...todo, items: [...todo.items, {id:Math.floor(Math.random()*100), title:payload.Title , status:false}]} : todo)
        case 'DeleteItem':
            return state.map(todo => todo.id === payload.todoId ? {...todo ,items:todo.items.filter(item => item.id !== payload.itemId)} : todo)
        default:
            return state
    }
}

export default Reducer