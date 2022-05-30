
export const state = ()=>({
    todos : []
})

export const mutations = {
    add(state, text){
        if(Array.isArray(text)){
            text.forEach(elt => {
                state.todos.push({
                    text : elt.text,
                    done : elt.done
                })
            });
        }else{
            state.todos.push({
                text,
                done : false
            })
        }

    },
    remove(state, {todo}){
        state.todos.splice(state.todos.indexOf(todo),1)
    },
    toggle(state, todo){
        todo.done = !todo.done
    }
}

export const actions = {
    async someAsyncFunc({commit}){
    //simuler une action async
        // setTimeout(function(){
    
        commit("add", 
            [
                {text : "Task1",done:false},
                {text : "Task2",done:false},
                {text : "Task3",done:false}
            ])
        // }, 2000)
    },
}

