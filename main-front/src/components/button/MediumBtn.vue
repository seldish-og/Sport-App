<template lang="pug">
    
button(:style="[isActive ? acitiveState : notActiveState]")
    slot

</template>

<script>

export default {
    name: "MediumBtn",
    data: function() {
        return {
            acitiveState: {
                border: "2px solid #20B386",
                background: "none",
                color: "#20B386",
            },
            notActiveState: {
                border: "none",
                color: "#fff",
                background: "#20B386",
            }
        }
    },
    props: {
        isActive: Boolean
    }
}

</script>

<style lang="sass" scoped>

button
    border-radius: 8px
    padding: 12px 24px

</style>