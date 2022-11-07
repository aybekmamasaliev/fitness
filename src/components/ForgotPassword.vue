<template>
  <div class="hey_ther">
    <p class="wellcome your_password">Forgot Your Password?</p>
    <div>
      <div class="enter_the_email">
        <p>Enter the email associated with your account
          and we will send an email with instructions to reset your password.</p>
      </div>
      <form>
        <div class="formdiv_third">
          <img src="../assets/media/Message1.svg" alt="" class="email" />
          <input placeholder="Email" type="text" v-model="email" />
        </div>
      </form>
    </div>
  </div>
  <router-link to="/check"><button class="register_btn" v-on:click="load">Send Instructions</button></router-link>
  <p class="register_now">
    Already have an account? <router-link to="/loginpage" class="reg">Login </router-link>
  </p>
</template>

<script>
export default {
  data() {
    return {
      email: ""
    }
  },
  methods: {
    load() {
      let response_email = { email: this.email }
      fetch(process.env.VUE_APP_API_DOMAIN + "/auth/forgot_password/", {
        method: "POST",
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(response_email)
      })
        .then(res => console.log(res.json()))
    }
  }
}
</script>

<style>

</style>