<template lang="pug">

.card
    img(src="~@/assets/img/Jordan.jpg").card__image
    .card__main
        .card__name {{name}}
        .card__description {{description}} 
        .card__date {{data}}

</template>

<script>
export default {
    name: "NewsItem",
    props: {
        name: String,
        description: String,
        data: String
    }
}
</script>

<style lang="sass" scoped>

.card
    display: flex
    flex-direction: column
    max-width: 300px
    flex-gap: 20px
    margin-right: 15px
    margin-bottom: 15px

    &__main
        display: flex
        flex-direction: column
        padding: 15px
        background: #20B386

        > *
            color: #fff

    &__image
        width: 100%
        height: 250px

    &__name
        font-size: 22px

    &__desciption
        font-size: 16px

    &__date
        font-size: 14px



    

</style>