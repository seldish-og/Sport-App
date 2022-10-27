<template lang="pug">

section.container.search
    input(type="text")
    MediumBtn(@click="search") Search

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
import MediumBtn from "@/components/button/MediumBtn.vue";

export default {
    name: "NewsView.vue",
    components: {
        NewsCard,
        LayoutMap,
        MediumBtn
    }
}
</script>

<style lang="sass" scoped>

.news
    display: flex
    flex-wrap: wrap
    justify-content: space-around

    > *
        margin-left: 5px
        margin-right: 5px
        margin-bottom: 10px


.search 
    display: flex
    input 
        border: 1px solid green
        width: 100%
        border-radius: 5px

    margin-bottom: 20px


.map 
    margin-bottom: 20px

</style>