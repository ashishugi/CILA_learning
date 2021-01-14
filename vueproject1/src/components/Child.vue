<template>
    <div>
        <h1>Child Component {{age}} : {{name}}</h1>
        <h3 v-for="x in vegi" v-bind:key="x.name">
            {{x.id}} {{x.name}}
        </h3>
    </div>
</template>
<script>
export default {
    name:'Child',
    props:{
        name:String,
        age:Number,
        vegi:Array,
    }
}
</script>