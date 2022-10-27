<template lang="pug">
    
ul.bg-bubbles
    li
    li
    li
    li
    li
    li
    li
    li
    li
    li

</template>

<script>
export default {
    name: "BubblesAnimation"
}
</script>

<style lang="sass" scoped>

.bg-bubbles
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 1
    background: #50a3a2
    background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%)
    background: -moz-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%)
    background: -o-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%)
    background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%)
    overflow: hidden

    li
        position: absolute
        list-style: none
        display: block
        width: 40px
        height: 40px
        background-color: rgba(255, 255, 255, 0.15)
        bottom: -160px
        -webkit-animation: square 25s infinite
        animation: square 25s infinite
        -webkit-transition-timing-function: linear
        transition-timing-function: linear
        opacity: 0.4

        &:nth-child(1)
            left: 10%

        &:nth-child(2)
            left: 20%
            width: 80px
            height: 80px
            animation-delay: 2s
            animation-duration: 17s

        &:nth-child(3)
            left: 25%
            animation-delay: 4s

        &:nth-child(4)
            left: 40%
            width: 60px
            height: 60px
            animation-duration: 52s
            background-color: rgba(255, 255, 255, 0.25)

        &:nth-child(5)
            left: 70%

        &:nth-child(6)
            left: 80%
            width: 120px
            height: 120px
            animation-delay: 10s
            background-color: rgba(255, 255, 255, 0.2)

        &:nth-child(7)
            left: 32%
            width: 160px
            height: 160px
            animation-delay: 7s
            background: url("~@/assets/img/Jordan.jpg") no-repeat center top / cover

        &:nth-child(8)
            left: 55%
            width: 20px
            height: 20px
            animation-delay: 15s
            animation-duration: 80s

        &:nth-child(9)
            left: 25%
            width: 10px
            height: 10px
            animation-delay: 5s
            animation-duration: 50s
            background-color: rgba(255, 255, 255, 0.3)

        &:nth-child(10)
            left: 90%
            width: 160px
            height: 160px
            animation-delay: 11s
            background: url("~@/assets/img/ronaldo.jpg") no-repeat center top / cover

@keyframes square
    0%
        transform: translateY(0)

    100%
        transform: translateY(-150vh) rotate(600deg)
</style>