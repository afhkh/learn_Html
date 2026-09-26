<script>
export default{
  //innerHTML innerText
  name:"helloworld",
  data(){
    return{
      message:"测试",
      rawHtml:"<a herf='http://www.baidu.com'>百度</a>",
      dynamicId:10001 ,//通过v-bind动态的将id属性值放到了div标签中，v-bind可以简写成：
      dynamicID:10002,
      flag1:true 
    }
  }
}
</script>

<template>
    <div class="hello">
      <h3>学习Vue:模板语法</h3>
      <p>{{ message }}</p>
      <div>{{ rawHtml }}</div>
      <div v-html="rawHtml"></div>
      <div v-bind:id="dynamicId"></div>
      <div :id="dynamicID"></div>
      <p>{{ flag1 ? "真猴子" : "假猴子" }}</p>
    </div>
</template>
