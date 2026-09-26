<template>
    <h3>事件修饰符</h3>
    <a @click.prevent="clickHandle" href="https://www.bilibili.com/"></a>
    <div @click="clickdiv">
        <p @click.stop="clickP">测试冒泡</p>
    </div>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    methods:{
        clickHandle(e){
            //阻止默认事件
            // e.preventDefault();
            console.log("点击了");
        },
        clickdiv(){
            console.log("Div")
        },
        clickP(e){
            // e.stopPropagation();//只打印P
            console.log("P");
        }
    }
}
</script>