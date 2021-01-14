<template>
    <div>
        <button v-on:click="updateTitle">
            Update Parent Title
        </button>
    </div>
</template>
<script>
export default {
    name:'Child1',
    props:{

    },
    methods:{
        updateTitle : function(){
            this.$emit('changeTitle',"this the new string"); // event to fire , data to transfer 
        }
    }
}
</script>