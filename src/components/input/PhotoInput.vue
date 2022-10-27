<template lang="pug">

input(type="file" accept="image/jpeg, image/png, image/jpg" @change="uploadImage")

</template>

<script>
export default {
    name: "photoInput",
    data(){
        return{
        }
    },
    methods: {
    }    
}
</script>

<style lang="sass" scoped>

input
    outline: 0
    background-color: white
    border: 0
    padding: 10px 15px
    color: #53e3a6
    border-radius: 3px
    width: 90%
    cursor: pointer
    font-size: 18px
    transition-duration: 0.25s

    &:hover
        background-color: #f5f7f9
</style>