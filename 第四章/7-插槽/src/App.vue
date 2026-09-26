<template>
  <!-- <SlotsBase>
      <div>
        <h3>插槽标题</h3>
        <p>插槽内容</p>
      </div>
  </SlotsBase> -->
  <!-- <SlotsTow>
    <h3>{{ message }}</h3>
  </SlotsTow> -->
  <SlotsAttr>
    <template #header="slotprops">
      <h3>{{ currentTest }}-{{ slotprops.msg }}</h3>
    </template>
    <template #main="slotprops">
      <p>{{ slotprops.job }}</p>
    </template>
  </SlotsAttr>
</template>
<script>
import SlotsBase from './components/SlotsBase.vue';
import SlotsTow from './components/SlotsTow.vue';
import SlotsAttr from './components/SlotsAttr.vue';
export default{
  data(){
    return{
      message:"插槽内容续集",
      currentTest:"测试内容"
    }
  },
  components:{
    SlotsBase,
    SlotsTow,
    SlotsAttr
  }
}
</script>
<style>

</style>

