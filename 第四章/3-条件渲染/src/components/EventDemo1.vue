<template>

    <h3>内联事件处理器</h3>
    <button @click="count++">Add</button>
    <p>{{ count }}</p>
</template>
<script>
    //v-on可以简化为@
    export default{
        data(){
            return{
                count:0

            }
        }
    }
</script>