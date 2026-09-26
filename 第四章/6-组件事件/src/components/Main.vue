<template>
    <h3>Main</h3>
    <SearchComponents @searchEvent="update"/>
    <p>搜索内容为{{ search }}</p>
</template>
<script>
import SearchComponents from './SearchComponents.vue';
export default{
    data(){
        return{
            search:""
        }
    },
    components:{
        SearchComponents
    },
    methods:{
        searchEvent(data){
            this.search=data
        }
    }
}
</script>