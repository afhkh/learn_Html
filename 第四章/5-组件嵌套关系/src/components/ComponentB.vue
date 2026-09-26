<template>
    <h3>ComponentB</h3>
    <p>{{ title }}</p>
    <p>{{ age }}</p>
    <p v-for="(item,index) of names" :key="index">{{ item }}</p>
    <button @click="update">修改数据</button>
</template>
<script>
export default{
    data(){
        return{
            
        }
    },
    props:{
        title:{
            type:[String,Number,Array,Object],
            //必选项,传了没警告，不传有警告
            required:true
        },
        age:{
            type:Number,
            default:0
        },
        //数字和字符串可以直接default，但是如果是数组和对象，必须通过工厂函数返回默认值
        names:{
            type:Array,
            default(){
                return ["空"]
            }
        }
    },
    //props是只读的不能修改数据
    methods:{
        update(){
            //报错，不能修改父级元素传递过来的数据
            this.title="新数据"
        }
    }
}
</script>