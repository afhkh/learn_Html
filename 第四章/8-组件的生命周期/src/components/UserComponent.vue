<template>
    <h3>组件生命周期函数应用</h3>
    <p ref="name">原神牛逼</p>
    <ul>
        <li v-for="(item,index) in banner" :key="index">
            <h3>{{ item.title }}</h3>
            <h3>{{ item.content }}</h3>
        </li>
    </ul>
</template>
<script>
export default{
    data(){
        return{
            banner:[]
        }
    },
    
    beforeMount(){
        console.log(this.$refs.name);// undefined
    },
    mounted(){
        //相对于数据来说结构更重要，所以数据放在渲染阶段呈现
        console.log(this.$refs.name);
        this.banner=[]
    }
}

</script>