<template>
          <div class="hey_there">
          <p class="hey">Hey there,</p>
          <p class="wellcome">Create an Account</p>
          <div>
            <form>
              <div class="formdiv_first">
                <img src="../assets/media/Profile1.svg" alt="" class="email" />
                <input placeholder="First Name" type="email" />
              </div>
              <div class="formdiv_second">
                <img src="../assets/media/Profile1.svg" alt="" class="email" />
                <input placeholder="Last Name" type="text" />
              </div>
              <div class="formdiv_third">
                <img src="../assets/media/Message1.svg" alt="" class="email" />
                <input placeholder="Email" type="text" />
              </div>
              <div class="between_input">
                <p>Email already exists</p>
                <p>Only @mail.ru emails allowed</p>
              </div>

              <div class="formdiv_fourth">
                <img src="../assets/media/Lock2.svg" alt="" class="email" />
                <img src="../assets/media/Hide3.svg" alt="" class="eye" />
                <input placeholder="Password" type="password" />
              </div>
              <div class="between_input2">
                <p>Must be at least 8 characters</p>
              </div>
              <div class="formdiv_fourth">
                <img src="../assets/media/Lock2.svg" alt="" class="email" />
                <img src="../assets/media/Hide3.svg" alt="" class="eye" />
                <input placeholder="Confirm Password" type="password" />
              </div>
              <div class="between_input2">
                <p>Both passwords must match</p>
              </div>
              <div style="display: flex; flex-direction:row; margin-top: 20px;">
                <div class="special_div_for_checkbox">
                  <input type="checkbox" />
                </div>
                <span class="accept_text">
                    By continuing you accept our Privacy Policy and Term of Use
                </span>
              </div>
            </form>
          </div>
        </div>
        <router-link to ="/forgot"><button class="register_btn">Register</button></router-link>
        <p class="register_now">
          Already have an account? <a href="#" class="reg">Login</a>
        </p>
</template>

<script>
export default {

}
</script>

<style>

</style>