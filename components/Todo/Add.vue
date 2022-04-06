<script>
    export default {
        methods:{
            handleChange(e){
                console.info("[Add UI] text change to", this.text)
                this.text = e.target.value
            },
            handleClick(){
                // console.log()
                this.$emit("add",this.$refs.input.value)
            }
        }
    }
</script>

<template>
    <div>
        <input ref='input' @change="handleChange"/>
        <button @click="handleClick">Valider</button>
    </div>
</template>