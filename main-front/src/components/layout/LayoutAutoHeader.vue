<template lang="pug">

div(v-if="isAuthorized")
    LayoutHeaderAuthorized()
div(v-else)
    LayoutHeaderSimple()

</template>

<script>

import LayoutHeaderAuthorized from "@/components/layout/LayoutHeaderAuthorized.vue"
import LayoutHeaderSimple from "@/components/layout/LayoutHeaderSimple.vue";

export default {
    name: "LayoutAutoHeader",
    props: {
        isAuthorized: Boolean
    },
    components: {
        LayoutHeaderAuthorized,
        LayoutHeaderSimple
    }
}
</script>

<style lang="sass" scoped>

</style>

