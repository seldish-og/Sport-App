<template lang="pug">

.commands.container
    CommandCard(v-for="i in 10")
    
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
    flex-wrap: wrap
    gap: 20px
    margin-right: 20px

</style>