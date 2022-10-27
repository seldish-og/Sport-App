<template lang="pug">

LayoutAutoHeader(isAuthorized=false)
router-view

</template>

<script>

import LayoutAutoHeader from '@/components/layout/LayoutAutoHeader.vue';

export default {
  name: "App",
  data: function() {
    return {
      isAuthorized : false
    }
  },
  components: {
    LayoutAutoHeader
  }
}
</script>

<style lang="scss">



</style>
