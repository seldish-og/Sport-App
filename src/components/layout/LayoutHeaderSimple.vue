<template lang="pug">

header.header
    a.logo(href="") LiveRunners

    nav
        .hamburger(@click="openToggle")
            .top-bun
            .meat
            .bottom-bun

        ul.menu(:style="[isOpen ? openStyle : {}]")
            li
                a(href="") Новости
            li
                a(href="") Карта Мероприятий
            li
                router-link(to="/commands" @click="close")
                    a(href="") Команды
            router-link(to="/login" @click="close")
                MediumBtn(isActive=false) Войти
            router-link(to="/sign_up" @click="close") 
                MediumBtn() Зарегестрироваться


</template>

<script>

export default {
    name: "LayoutHeaderSimple",
    data: function() {
        return {
            isOpen:  false,
            openStyle: {
                height: "380px"
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


    .menu
        display: flex
        align-items: center
        gap: 20px

        li
            padding: 20px

.hamburger
    display: none
    align-self: center
    flex-direction: column
    justify-content: space-between
    width: 40px
    height: 30px
    cursor: pointer
    float: right
    
    div
        align-self: flex-end
        height: 4px
        width: 100%
        background: #20B486
        
    .meat
        width: 75%
        transition: all 200ms ease-in-out
        
    .bottom-bun
        width: 50%
        transition: all 400ms ease-in-out
    
    &:hover
        div
            width: 100%
        
        .top-bun
            animation: burger-hover 1s infinite ease-in-out alternate
        
        .meat
            animation: burger-hover 1s infinite ease-in-out alternate forwards 200ms
        
        .bottom-bun
            animation: burger-hover 1s infinite ease-in-out alternate forwards 400ms


        
//Animation Keyframes
@keyframes burger-hover
    0%
        width: 100%
    50%
        width: 50%
    100%
        width: 100%


@media screen and (max-width: 1000px) 
    .hamburger
        display: flex !important

    .header
        align-items: flex-start !important
        padding: 15px 15px 0 15px

    .menu
        margin-top: 50px
        margin-right: -5px
        height: 0px
        overflow: hidden
        gap: 20px !important
        transition: 0.2s ease
        > li
            padding: 15px !important
        flex-direction: column
        align-items: flex-end !important

</style>
