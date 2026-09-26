<template>
  <h3>祖宗</h3>
  <Parent/>
</template>
<script>
import Parent from './components/Parent.vue';


export default{
  data(){
    return{
      message:"爷爷的财产!!!"
    }
  },
  // provide:{
  //   message:"爷爷的财产"
  // },
  components:{
      Parent
  },
  provide(){
    return{
      message:this.message
    }
  }
}

// 温馨提示：provide和inject只能由上到下传，不能从下往上传
</script>