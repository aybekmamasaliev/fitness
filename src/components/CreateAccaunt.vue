<template>
  <div class="hey_there">
    <p class="hey">Hey there,</p>
    <p class="wellcome">Create an Account</p>
    <div>
      <form>
        <div class="formdiv_first">
          <img src="../assets/media/Profile1.svg" alt="" class="email" />
          <input placeholder="First Name" type="email" v-model="form.first_name" />
        </div>
        <div class="formdiv_second">
          <img src="../assets/media/Profile1.svg" alt="" class="email" />
          <input placeholder="Last Name" type="text" v-model="form.last_name" />
        </div>
        <div class="formdiv_third">
          <img src="../assets/media/Message1.svg" alt="" class="email" />
          <input placeholder="Email" type="text" v-model="form.email" />
        </div>
        <div class="between_input">
          <p>Email already exists</p>
          <p>Only @mail.ru emails allowed</p>
        </div>
        <div class="formdiv_fourth">
          <img src="../assets/media/Lock2.svg" alt="" class="email" />
          <img src="../assets/media/Hide3.svg" alt="" class="eye" v-on:click="change_type" />
          <input placeholder="Password" :type="input_type" v-model="form.password" />
        </div>
        <div class="between_input2">
          <p>Must be at least 8 characters</p>
        </div>
        <div class="formdiv_fourth">
          <img src="../assets/media/Lock2.svg" alt="" class="email" />
          <img src="../assets/media/Hide3.svg" alt="" class="eye" v-on:click="change_type_confirm" />
          <input placeholder="Confirm Password" :type="input_type_confirm" v-model="form.password_confirmation" />
        </div>
        <div class="between_input2">
          <p>Both passwords must match</p>
        </div>
        <div style="display: flex; flex-direction:row; margin-top: 20px;">
          <div class="special_div_for_checkbox">
            <input type="checkbox" v-model="form.accept" />
          </div>
          <span class="accept_text">
            By continuing you accept our Privacy Policy and Term of Use
          </span>
        </div>
      </form>

    </div>

  </div>

  <button class="register_btn" v-on:click="register" :disabled="!form.accept">
    Register
  </button>
  <p class="register_now">
    Already have an account? <router-link to="/loginpage" class="reg">Login</router-link>
  </p>
</template>
<script>
export default {
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        accept: false
      },
      input_type: "password",
      input_type_confirm: "password"
    }
  },
  methods: {
    register() {
      if (!this.form.first_name) {
        alert("pleace fill firstName")
        return
      } else if (!this.form.last_name) {
        alert("pleace fill lastName")
        return
      } else if (!this.form.email) {
        alert("pleace fill Email")
        return
      } else if (!this.form.password) {
        alert("pleace fill password")
        return
      } else if (!this.form.password_confirmation) {
        alert("pleace confirm your password")
        return
      } else if(this.form.password!== this.form.password_confirmation){
          alert("password confirmation does not match")
          return
      }else {
        this.$router.push("/check")
      }
      console.log(this.form)
      fetch(process.env.VUE_APP_API_DOMAIN + "/auth/register/", {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(this.form)
      })
        .then(res => console.log(res.json()))
    },

    change_type() {
      this.input_type = this.input_type === "password" ? "text" : "password"

    },
    change_type_confirm() {
      this.input_type_confirm = this.input_type_confirm === "password" ? "text" : "password"
    }
  }
}
</script>

<style>

</style>