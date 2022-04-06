<script>
    export default {
        props : {
            object : Object,
        }
    }
</script>

<template>
    <div>
        <h3>========LOOP OBJECT=========</h3>
        <ul>
        <li v-for="(value, name) in object" >{{name}} {{value}}</li>
        </ul>
    </div>
</template>