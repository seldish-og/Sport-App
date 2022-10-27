<template lang="pug">

button(:style="[active ? activeStyle : notActiveStyle]")
    slot

</template>
    
<script>

export default {
  name: "HighBtn",
  data: function() {
    return {
      activeStyle: {
        border: "2px solid #f7f7f9",
        background: "none",
        color: "#f7f7f9"
      },
      notActiveStyle: {
        border: "none",
        background: "white",
      }
    }
  },
  props: {
    active: Boolean,
  },
};

</script>

<style lang="sass" scoped>

button
    appearance: none
    outline: 0
    background-color: white
    border: 0
    padding: 10px 15px
    color: #53e3a6
    border-radius: 3px
    width: 90%
    cursor: pointer
    font-size: 18px
    transition-duration: 0.25s

    &:hover
        background-color: #f5f7f9

</style>