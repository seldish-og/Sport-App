<template lang="pug">

header.header
    a.logo(href="") LiveRunners

    nav
        img(src="~@/assets/logo.png").avatar(@click="openToggle")

        ul.menu(:style="[isOpen ? openStyle : {}]")
            li
                a(href="") Мои команды
            li
                a(href="") Карта Мероприятий
            li
                a(href="") Новости
            li
                a(href="") Команды
            li
                a(href="") Выйти


</template>

<script>

export default {
    name: "LayoutHeader",
    data: function() {
        return {
            isOpen:  false,
            openStyle: {
                height: "auto"
            },
            avatarStyle: {
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "0",
            }
        }
    },
    methods: {
        close() {
            this.isOpen = false
        },
        open() {
            this.isOpen = true
        },
        openToggle() {
            if (this.isOpen == false) {
                this.open()
            } else {
                this.close()
            }
        }
    }

}

</script>

<style lang="sass" scoped>

.header
    display: flex
    justify-content: space-between
    align-items: center
    position: relative
    z-index: 2
    padding: 15px
    background: #fff

    nav
        position: relative


    .menu
        position: absolute
        display: flex
        overflow: hidden
        align-items: center
        flex-direction: column
        top: 55px 
        right: 0
        height: 0
        gap: 20px
        width: 200px
        background: #20B386
        border-radius: 5px
        transition: 0.3s ease-out

        li
            padding: 20px
            border-bottom: 1px solid #fff

            &:hover

            &:last-child
                border-bottom: none
            > a
                color: #fff

.avatar
    width: 50px
    overflow: hidden
    height: 50px
    cursor: pointer
    float: right
    border-radius: 100px
    border: 2px solid #20B386

    
</style>
