<template lang="pug">
.auth
  AuthForm.auth__form(title="Welcome")
    img.image(src="~@/assets/img/Jordan.jpg")
    PhotoInput().upload
    AuthBtn(@click="submit").submit Upload
  BubblesAnimation
</template>
    
<script>
import axios from "axios";

import PhotoInput from "@/components/input/PhotoInput.vue";
import AuthForm from "@/components/form/AuthForm.vue";
import AuthBtn from "@/components/button/AuthBtn.vue";
import AuthError from "@/components/error/AuthError.vue";
import BubblesAnimation from "@/components/animation/BubblesAnimation.vue";

export default {
  name: "LoginView",
  data: function () {
    return {
      previewImage: null,
      username: "",
      password: "",
    };
  },
  components: {
    PhotoInput,
    // AuthInput,
    AuthForm,
    AuthBtn,
    BubblesAnimation,
    AuthError,
  },
  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };

      var oFReader = new FileReader();
      oFReader.readAsDataURL(document.querySelector(".upload").files[0]);

      oFReader.onload = function (oFREvent) {
        document.querySelector(".image").src = oFREvent.target.result;
      };
    },
    submit: function () {
      this.$router.push("/uploadphoto");
      axios
        .post("http://localhost:3000/auth/uploadphoto", {
          username: this.username,
          password: this.password,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
    
    
<style lang="sass"  scoped>

.auth__form

.auth
  .image
    text-align: center
    margin: 0 auto
    margin-bottom: 15px
    &.form-success .container h1
      transform: translateY(85px)

      &__form
        display: flex
        flex-direction: column
        justify-content: center

</style>