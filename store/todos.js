export const state = ()=>({
    todos : [
        {text : "Task1",done:false},
        {text : "Task2",done:false},
        {text : "Task3",done:false}
    ]
})

export const mutations = {
    add(state, text){
        state.todos.push({
            text,
            done : false
        })
    },
    remove(state, {todo}){
        state.todos.splice(state.todos.indexOf(todo),1)
    },
    toggle(state, todo){
        todo.done = !todo.done
    }
}