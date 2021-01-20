<template>
    <div>
        This user component
        <h1>{{userId}}</h1>
    </div>
</template>
<script>
export default {
    name:'User',
    data(){
        return {
            userId:this.$route.params.id
        }
    }
}
</script>