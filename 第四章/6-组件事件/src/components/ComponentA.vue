<template>
    <h3>ComponentA</h3>
    <ComponentB title="标题" :onEvent="dataFn"/>
    <p>父元素：{{ message }}</p>
</template>
<script>
import ComponentB from './ComponentB.vue';


export default{
    components:{
        ComponentB
    },
    data(){
        return{
            message:""
        }
    },
    methods:{
        dataFn(data){
            this.message=data
        }
    }
}
</script>