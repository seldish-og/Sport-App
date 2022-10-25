<template lang="pug">

section.map.container#map
    LayoutMap()


section.news.container
    div(v-for="i in 10")
        a(:href="'/news-item/' + i")
            NewsCard(name="Hello" description="description")

</template>

<script>

import NewsCard from "@/components/layout/LayoutNewsCard.vue"
import LayoutMap from "@/components/layout/LayoutMap.vue"

export default {
    name: "NewsView.vue",
    components: {
        NewsCard,
        LayoutMap
    }
}
</script>

<style lang="sass" scoped>

.news
    display: flex
    flex-wrap: wrap

    > *
        margin-left: 5px
        margin-right: 5px
        margin-bottom: 10px

</style>