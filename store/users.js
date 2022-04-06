export const state = ()=>({
    users : [],
})

export const mutations$ = {
    getUsers(state,users){
        state.users = users
    },
}