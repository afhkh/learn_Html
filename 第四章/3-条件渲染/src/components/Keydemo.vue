<template>
    <h3>Key属性添加到v-for中</h3>
    <p v-for="(item,index) in names" :key="index">{{ item }}</p>
</template>
<script>
export default{
    data(){
        return{
            names:["原神","鸣潮","星穹铁道","终末地"]
        }
    }
}
</script>