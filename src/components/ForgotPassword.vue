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
                <input placeholder="Email" type="text" />
              </div>
            </form>
          </div>
        </div>
        <router-link to="/check"><button class="register_btn">Register</button></router-link>
        <p class="register_now">
          Already have an account? <a href="#" class="reg">Login </a>
        </p>
</template>

<script>
export default {

}
</script>

<style>

</style>