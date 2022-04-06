<script>
    export default {
        mounted(){
            const req = this.$axios.get("https://jsonplaceholder.typicode.com/users") 
            const resp = req.then(res =>{
                if(res.status === 200){

                    console.log("[User UI] status 200 OK data", res.data)
                }else{
                    console.log("[User UI] error...")

                }
            })
        }
    }
</script>

<template>

</template>