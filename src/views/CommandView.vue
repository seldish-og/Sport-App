<template lang="pug">
    
.command 
    img(src="~@/assets/img/Jordan.jpg")
    .command__main
        .command__name Hello there
        .command__date 20/20/20
        .command__description this is description
        .command__contacts this is contact
        .command__sport this is sport
        .command__owner 

</template>

<script>
export default {
    name: "CommandView",
}
</script>

<style lang="sass" scoped>

.command
    display: flex
    &__main
        display: flex
        flex-direction: column
</style>