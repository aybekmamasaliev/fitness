<template>
  <div class="hey_there">
    <p class="wellcome your_password">Create New Password</p>
    <div>
      <form>
        <div class="formdiv_first">
          <img src="../assets/media/Lock2.svg" alt="" class="email">
          <img src="../assets/media/Hide3.svg" alt="" class="eye" v-on:click="change_type">
          <input placeholder="Password" :type="input_type" v-model="arr.password">
        </div>
        <div class="between_input2">
          <p>Must be at least 8 characters</p>
        </div>
        <div class="formdiv_second">
          <img src="../assets/media/Lock2.svg" alt="" class="email">
          <img src="../assets/media/Hide3.svg" alt="" class="eye" v-on:click="change_type_check">
          <input placeholder="Password" :type="input_type_conf" v-model="arr.password_confirmation">
        </div>
        <div class="between_input2">
          <p>Both passwords must match </p>
        </div>
      </form>
    </div>
  </div>
  <button class="login_btn" v-on:click="load">Reset Password</button>
</template>

<script>
export default {
  data() {
    return {
      input_type: "password",
      input_type_conf: "password",
      arr: {
        password: "",
        password_confirmation: "",
        token:""
      }
    }
  },
  created(){
    // this.arr.token = localStorage.getItem("access")
    const token = this.$route.params.token;
    this.arr.token = token;
  },
  methods: {
    change_type() {
      if (this.input_type === "password") {
        this.input_type = "text"
      } else if (this.input_type === "text") {
        this.input_type = "password"
      }
    },
    change_type_check() {
      if (this.input_type_conf === "password") {
        this.input_type_conf = "text"
      } else if (this.input_type_conf === "text") {
        this.input_type_conf = "password"
      }
    },
    load() {
      fetch(process.env.VUE_APP_API_DOMAIN + "/auth/reset_password/", {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(this.arr)
      })
    }
  }

}
</script>

<style>

</style>