<template>

    <h3>方法事件处理器</h3>
    <button @click="addCount">Add</button>
    <p>{{ count }}</p>
</template>
<script>
    //v-on可以简化为@
    export default{
        data(){
            return{
                count:0

            }
        },
        //所有的方法或者函数都放在这里
        methods:{
            addCount(){
                //读取到data里面的数据的方案：this.count
                this.count++

            }
        }
    }
</script>