<template>
    <h3>Slots再续集</h3>
    <slot name="header" :msg="childMessage"></slot>
    <slot name="main" :job="jobmessage"></slot>
</template>
<script>
export default{
    data(){
        return{
            childMessage:"子组件数据",
            jobmessage:"akjgf"
        }
    }
}
</script>