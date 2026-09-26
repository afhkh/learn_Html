<template>
    <h3>Child</h3>
    <p>{{ title }}</p>
    <p>{{ age }}</p>
    <ul>
        <li v-for="(item,index) of names" :key="index">{{ item }}</li>
    </ul>
    <p>{{ userInfo.name }}</p>
    <p>{{ userInfo.age }}</p>
</template>
<script>
export default{
    data(){
        return{
            
        }
    },
    props:["title","age","names","userInfo"] //props传递数据，只能从父级传递到子级，不能反其道而行
}
</script>