<!-- <template>
  <h3>组件的生命周期</h3>
  <p>{{ message }}</p>
  <button @click="updateHandle">更新数据</button>

</template>
<script>
// 生命周期函数
//     创建期：beforeCreate  created
//     挂载期：beforeMounte  mounted
//     更新期：beforeUpdate  updated
//     销毁期间：beforeUnmount  unmounted


export default{
  data(){
    return{
      message:"更新之前"
    }
  },
  methods:{
    updateHandle(){
      this.message="更新之后"
    }
  },
  beforeCreate(){
    console.log("组件创建之前");
  },
  created(){
    console.log("组件创建之后");
  },
  beforeMount(){
    console.log("组件渲染之前");
  },
  mounted(){
    console.log("组件渲染之后");
  },
  beforeUpdate(){
    console.log("组件更新之前");
  },
  updated(){
    console.log("组件更新之后");
  },
  beforeUnmount(){
    console.log("组件销毁之前");
  },
  unmounted(){
    console.log("组件销毁之后");
  },
}
</script>
<style>

</style> -->
<template>
  <!-- <component :is=""></component>    表示组件切换-->
  <keep-alive>
    <component :is="tabComponent"></component>
  </keep-alive>

  <button @click="changeHandle">切换组件</button>
</template>
<script>
import { defineAsyncComponent } from 'vue';
import ComponentA from './components/ComponentA.vue';
// import ComponentB from './components/ComponentB.vue';
//异步加载组件  (小组件就不要用了，正常都是大组件用)
const ComponentB=defineAsyncComponent(()=>
  import("./components/ComponentB.vue")
)
export default{
  data(){
    return{
      tabComponent:"ComponentA"
    }
  },
    components:{
      ComponentA,
      ComponentB
    },
    methods:{
      changeHandle(){
        this.tabComponent=this.tabComponent=="ComponentA" ? "ComponentB" : "ComponentA"
      }
    }
}

</script>