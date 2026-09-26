<template>
    <h3>侦听器</h3>
    <p>{{ message }}</p>
    <button @click="updatedata">修改数据</button>


</template>
<script>
export default{
    data(){
        return{
            message:"Hello"
        }
    },
    methods:{
        updatedata(){
            this.message="world"
        }
    },
    watch:{
        //newValue:改变之后的数据
        //oldValue:改变之前的数据
        //函数名必须与侦听的数据对象保持一致
        message(newValue,oldValue){
            //数据发生变化，自动执行函数
            console.log(newValue,oldValue);
        }
    }
}
</script>