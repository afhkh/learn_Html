<template>
    <h3>{{ haha.name }}</h3>
    <!-- 下面这四个计算方法只计算一次，而函数每次调用都执行一次 -->
    <p>{{ itakjhgKa}}</p>
    <p>{{ itakjhgKa}}</p>
    <p>{{ itakjhgKa}}</p>
    <p>{{ itakjhgKa}}</p>
    <p>{{ itakjhgKas() }}</p>
    <p>{{ itakjhgKas() }}</p>
    <p>{{ itakjhgKas() }}</p>
    <p>{{ itakjhgKas() }}</p>
</template>
<script>
export default{
    data(){
        return{
            haha:{
                name:"傻卵二次元",
                content:["原神","鸣潮","终末地"]
            }
        }
    },
    //计算属性
    conputed:{
        itakjhgKa(){
            return this.haha.content.length >0 ? "Yes" :"No"
        }
    },
    //放方法或者函数
    methods:{
        itakjhgKas(){
            return this.haha.content.length >0 ? "Yes" :"No"
        }
    }
}
</script>