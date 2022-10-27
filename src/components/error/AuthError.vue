<template lang="pug">

div.error
    i.fa.fa-times-circle
    span(v-show="code").error__code {{code}} 
    span.error__message {{ message }}
    
</template>

<script>
export default {
    name: "AuthError",
    props: {
        message: String,
        code: Number,
    }
}
</script>

<style lang="sass" scoped>

.error
    align-items: center
    text-align: left
    margin: 0 auto 10px auto
    width: 90%
    padding: 10px 20px
    border-radius: 3px 3px 3px 3px
    color: #D8000C
    background-color: #FFBABA

    >* 
        margin-right: 5px

</style>