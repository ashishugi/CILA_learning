<template>
    <div>
        <tr v-bind:class="{display:true}" v-for="x in fruits" v-bind:key="x.id">
            {{x.id}} {{x.name}}
        </tr>
    </div>
</template>
<script>
export default {
    name:'Table',
    props:{

    },
    data(){
        return {
            fruits:[
                {id:1 , name:'Apple'},
                {id:2 , name:'Orange'},
                {id:3 , name:'Banana'},
                {id:4 , name:'Grapes'},
            ]
        }
    }
}
</script>
<style scoped>
    
</style>