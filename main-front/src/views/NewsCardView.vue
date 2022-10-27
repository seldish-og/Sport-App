<template lang="pug">

.container.card    
    img(src="~@/assets/img/Jordan.jpg").card__image
    .card__main
        .card__name Hello it works
        .card__description  Hello
        .card__date Hello

</template>

<script>

import axios from "axios"

export default {
    name: "NewsCardView",
    data: function() {
        return {
            name: "",
            description: "",
            date: "",
        }
    },
    mounted: function() {
        axios.post("/rt.pornhub.com/api/stars")
    },
}
</script>

<style lang="sass">

.card
    display: flex

    &__main
        display: flex
        flex-direction: column
        gap: 20px

</style>

