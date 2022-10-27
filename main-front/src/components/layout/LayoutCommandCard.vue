<template lang="pug">

.card
    img(src="~@/assets/img/Jordan.jpg").card__avatar
    .card__name {{name}}
    .card__date {{date}}
    .card__description {{description}}
    .card__sport {{ sport }}
    
</template>

<script>
export default {
    name: "CommandCard",
    props: {
        name: String,
        date: String,
        description: String,
        sport: String,
    }
}
</script>

<style lang="sass" scoped>

.card
    display: flex
    flex-direction: column

</style>
