<template lang="pug">

.card
    img(src="").card__avatar
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

</style>
