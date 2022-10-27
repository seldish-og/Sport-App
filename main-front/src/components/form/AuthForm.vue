<template lang="pug">

.form.container
    h1(v-if="title") {{title}}
    form
        slot
    
</template>

<script>
export default {
    name: "AuthForm",
    props: {
        title: String,
    }
}
</script>

<style lang="sass" scoped>

form
    padding: 20px 0

.form
    position: relative
    z-index: 2
.container
    max-width: 600px
    margin: 0 auto
    padding: 80px 0
    text-align: center
    height: 100vh

    h1
        font-size: 40px
        transition-duration: 1s
        transition-timing-function: ease-in-put
        font-weight: 200

</style>