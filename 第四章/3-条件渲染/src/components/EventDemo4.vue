<template>

    <h3>事件传参</h3>
    <button @click="addCount('hello')">Add</button>
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
            //event对象
            addCount(msg){
                //Vue中的event对象，就是原生JS的event对象
                // e.target.innerHTML="Add"+this.count
                console.log(msg);
                this.count++

            }
        }
    }
</script>