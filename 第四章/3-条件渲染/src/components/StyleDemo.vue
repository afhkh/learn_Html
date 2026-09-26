<template>
    <p :style="{color:activeColor,fontSize:fontSize+'px'}">Style绑定1</p>
    <p :style="styleObject">Style绑定2</p>

</template>
<script>
export default{
    data(){
        return{
            activeColor:"green",
            fontSize:30,
            styleObject:{
                color:"red",
                fontSize:"30px"
            }
        }
    }
}
</script>