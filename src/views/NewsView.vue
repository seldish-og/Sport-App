<template lang="pug">

section.map.container#map

section.news.container
    div(v-for="i in 10")
        a(:href="'/news-item/' + i")
            NewsCard(name="Hello" description="description")

</template>

<script>

import NewsCard from "@/components/layout/NewsCard.vue"

export default {
    name: "NewsView.vue",
    components: {
        NewsCard,
    }
}
</script>

<style lang="sass" scoped>

.news
    display: flex
    flex-wrap: wrap
    gap: 20px

</style>