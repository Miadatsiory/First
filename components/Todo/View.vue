<script>
    export default {
        props : {
            todo : {type : Object}
        },
        methods : {
            handleFinished(){
                this.$emit('taskFinished',this.todo)
            },
            handleHover(){
                console.info('[Add UI] ye misy zavatra')
            }
        }
    }
</script>

<template>
    <div class="View Container">
        <div class="item" @hover='handleHover'>
            <ul>
                <li v-for="(value,name) in todo" :key="value">
                    <p>{{name}} : {{value}}</p>
                </li>
            </ul>
        </div>
        <div class="item">
            <button @click="handleFinished">Terminier</button>
        </div>
        
    </div>
</template>

<style>
.View {
    background-color: #80bfff;
    border : solid 1px;
    border-radius : 5px;
    margin : 5px;
}
.Container{
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-content : center;
    align-items : flex-start;
}
.item {
    margin :10px;
}
</style>