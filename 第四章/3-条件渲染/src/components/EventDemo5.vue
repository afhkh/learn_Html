<template>

    <h3>事件传参</h3>
    <!-- key前面的:就是v-bind 动态加载id -->
    <p @click="getNameHandler(item,$event)" v-for="(item,index) of names" :key="index">{{ item }}</p>
</template>
<script>
    //v-on可以简化为@
    export default{
        data(){
            return{
                names:["原神","鸣潮","终末地"]
            }
        },
        //所有的方法或者函数都放在这里
        methods:{
           getNameHandler(name,e){
                console.log(name);
                console.log(e)
           }
        }
    }
</script>