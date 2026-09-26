<template>
    <h3>Child</h3>
    <p>{{ message }}</p>
    <p>{{ fullmessage }}</p>
</template>
<script>
export default{
    inject:["message"],
    data(){
        return{
            fullmessage:this.message
        }
    }
}
</script>