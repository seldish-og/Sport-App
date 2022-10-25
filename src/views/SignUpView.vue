<template lang="pug">
.auth
    AuthForm(title="Welcome").auth__form
        AuthInput(v-model="userame" type="text" placeholder="Login")
        AuthInput(v-model="password" type="password" placeholder="Password")
        .auth__buttons-row
            AuthBtn(@click.prevent="" active=true) Sign Up
            span &nbsp;
            AuthBtn(@click.prevent="") Login
        AuthBtn(@click="submit") Login
    BubblesAnimation()

</template>

<script>
import axios from "axios"

import AuthInput from "@/components/input/AuthInput.vue"
import AuthForm from "@/components/form/AuthForm.vue"
import AuthBtn from "@/components/button/AuthBtn.vue"
import AuthError from "@/components/error/AuthError.vue"
import BubblesAnimation from "@/components/animation/BubblesAnimation.vue"

export default {
        name: "SignUpView",
        data: function() {
            return {
                username: "",
                password: "",
            }
        },
        props: ["isLogin"],
        components: {
            AuthInput,
            AuthForm,
            AuthBtn,
            AuthError,
            BubblesAnimation,
        },
        methods: {
            submit: function() {
                axios.post('http://localhost:3000/auth/login', {
                    username: this.username,
                    password: this.password
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
}
</script>


<style lang="sass"  scoped>

.auth

    &.form-success .container h1
        transform: translateY(85px)

    &__form
        display: flex
        flex-direction: column
        justify-content: center
    
    &__buttons-row
        display: flex
        width: 90%
        margin: 0 auto 10px auto
        gap: 10px

</style>