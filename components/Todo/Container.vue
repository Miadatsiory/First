<script>
  export default {
        methods : {
            addTodo(text){
                console.info("[Container UI] tonga aty oh!!")
                this.$store.commit("todos/add",text)
            },
            toggle(todo){
                this.$store.commit("todos/toggle",todo)           }
        },
        computed :{
            todos(){
                return this.$store.state.todos.todos
            }
        }
        ,
        mounted(){
                console.log("[UI Container] data", this)
            }        
}

</script>

<template>
    <div>
        <TodoAdd @add="addTodo" />
        <TodoView v-for="todo in todos" :todo="todo" :key="todo.value" @taskFinished="toggle"/>
    </div>
</template>