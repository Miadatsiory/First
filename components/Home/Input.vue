<script>
    export default {
        props : {
            text : {
                type : String,
                required : true,
            },
            handleChange : { 
                required : true,
                type : Function
            },
        }
    }

</script>

<template>
    <div>
        <h1>Frame 1</h1>
        <h3>{{text}}</h3>
        <input @change="handleChange"/>
    </div>
</template>