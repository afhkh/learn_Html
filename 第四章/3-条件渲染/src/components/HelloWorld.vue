<script>
export default{
  name:"helloworld",
  //v-if v-else负责当flag为true时显示v-if 否则显示v-else的内容
  //v-show 当flag为true时，显示内容  当flag为false时，不显示内容
  //v-if具有更高的切换开销 v-show具有更高的初始渲染开销
  // 如果需要非常频繁的切换，使用v-show比较好，如果运行条件很少改变，使用v-if较好
  data(){
    return{
      flag:true
    }
  }
}
</script>

<template>
  <div class="hello">
    <p v-if="flag">我是孙猴子</p>
    <p v-else>我是奶龙</p>
    <p v-show="flag">你真的是那只孙猴子吗</p>

  </div>
  
</template>
