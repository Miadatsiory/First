<script>
    export default {
        props : {
            items : Array
        }
    }
</script>

<template>
    <div>
        <h3>========LOOP Array=========</h3>
        <ul>
            <li v-for="item in items" :key="item.id">{{item.message}}</li>
        </ul>
    </div>
</template>