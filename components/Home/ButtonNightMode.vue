<script>
    export default {
        props : {
            handleNightMode : {
                        type : Function,
                        required : true
                    }
        }
    }
</script>

<template>
    <div>
        <h1>Frame 3</h1>
        <button @click="handleNightMode"> Night Mode</button>
    </div>
</template>