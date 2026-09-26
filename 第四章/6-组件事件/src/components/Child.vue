<template>
    <h3>Child</h3>
    <button @click="clickEventHandle">传递数据</button>
</template>
<script>
    export default{
        data(){
            return{
                msg:"Child数据"
            }
        },
        methods:{
            clickEventHandle(){
                //自定义事件
                this.$emit("someEvent",this.msg)
            }
        }
    }

    //---------------------------------------------------------
    //组件之间传递数据的方案
    //父传子：props
    //子传父：自定义事件（$emit）
</script>