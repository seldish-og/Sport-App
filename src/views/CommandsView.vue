<template lang="pug">

.commands.container
    div(v-for="i in 10")
        a(:href="'/command/' + i")
            CommandCard(name="name", description="description")
    
</template>

<script>

import CommandCard from "@/components/layout/LayoutCommandCard.vue"

export default {
    name: "CommandsView",
    components: {
        CommandCard
    }
}

</script>

<style lang="sass" scoped>

.commands 
    display: flex
    justify-content: space-around
    flex-wrap: wrap
    gap: 20px

    > *
        margin-right: 20px
        margin-bottom: 20px

</style>