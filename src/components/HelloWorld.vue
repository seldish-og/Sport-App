<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <label>Enter email<input class="mail" type="mail" required v-module='mail'></label>
    <label>Enter Password<input class="password" type="password" required v-module='password'></label>
    <label>Accept<button v-on:click="this.$store.commit('SET_LOGIN', mail, password);" class="accept" ></button></label>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'HelloWorld',
  data: function() {
    return {
      mail: String,
      password: String
    }
  },
  props: {
    msg: String
  },
  methods: {
    ...mapActions([
      "LOGIN",
    ])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
