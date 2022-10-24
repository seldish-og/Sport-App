<template lang="pug">

input(:type="type" :placeholder="placeholder")

</template>

<script>

export default {
    name: "AuthInput",
    props: {
        type: String,
        placeholder: String,
    }
}

</script>

<style lang="sass" scoped>
input
    display: block
    appearance: none
    outline: 0
    border: 1px solid rgba(255, 255, 255, 0.4)
    background-color: rgba(255, 255, 255, 0.2)
    width: 90%
    border-radius: 3px
    padding: 10px 15px
    margin: 0 auto 10px auto
    text-align: center
    font-size: 18px
    color: white
    transition-duration: 0.25s
    font-weight: 300

    &:hover
        background-color: rgba(255, 255, 255, 0.4)

    &:focus
        background-color: white
        width: 95%
        color: #53e3a6
</style>