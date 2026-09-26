<template>
    <h3>列表渲染</h3>
    <p v-for="(item,index) in names">{{ item }}-{{ index }}</p>
    <div>
        <p v-for="(key,value,index) in userInfo">{{ key }}-{{value}}-{{ index }}</p>
    </div>
</template>
<script>
export default{
    data(){
        return{
            names:["哈哈个",'原神','鸣潮'],
            userInfo:{
                name:"wiffa",
                age:20,
                sex:"男"
            }
        }
    }
}
</script>