<template>
    <h3>数组变化侦听</h3>
    <button @click="addListHandle">添加数据</button>
    <ul>
        <li v-for="(item,index) of names" :key="index">{{ item }}</li>
    </ul>
    <button @click="concation1">合并</button>
    <h3>数组1</h3>
    <ul>
        <li v-for="(item,index) of nums1" :key="index">{{ item }}</li>
    </ul>
    <h3>数组2</h3>
    <ul>
        <li v-for="(item,index) of nums2" :key="index">{{ item }}</li>
    </ul>
</template>
<script>
export default{
    data(){
        return{
            names:["原神","鸣潮","终末地"],
            nums1:[1,2,3,4,5],
            nums2:[6,7,8,9,10]
        }
    },
    methods:{
        addListHandle(){
            //引起UI自动更新
            // this.names.push("sakura")
            //不会引起UI自动更新
            // this.names.concat(["sakura"])
            // console.log(this.names.concat(["sakura"]));

            this.names=this.names.concat(["sakura"])
        },
        concation1(){
            this.nums1=this.nums1.concat(this.nums2)
        }
    }
}
</script>