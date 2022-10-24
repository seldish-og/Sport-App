<template lang="pug">

LayoutHeader()
router-view

</template>

<script>

import LayoutHeader from "@/components/layout/LayoutHeader.vue"

export default {
  name: "App",
  components: {
    LayoutHeader
  }
}
</script>

<style lang="scss">



</style>
