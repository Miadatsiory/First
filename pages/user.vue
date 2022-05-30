<script>
    export default {
        data(){
            return{
                date : "",
                data :""
            }
            },
            methods : {
                onChangeDate(date){
                    this.date = date
                    console.log("[USER UI] date change to", this.date)
                }
        }
    }
</script>

<template>
    <main>
        <Navbar/>
        <h1>Users List Here</h1>
        <input v-model="data" @change="changeData"/>
        <Date label="ici label" @onChangeDate="onChangeDate"/>
    </main>
</template>