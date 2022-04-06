<script>
    export default {
        props : {
            count : Number,
            CounterHandler : {
                type : Function,
                required : true
            }
        }
    }
</script>

<template>
    <div>
        <h1>Frame 2</h1>
        <button @click="CounterHandler"> vous m'avez cliquer {{count}} fois</button>
    </div>
</template>