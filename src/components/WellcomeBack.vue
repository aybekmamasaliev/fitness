<template>
    <div class="hey_there">
        <p class="hey">Hey there,</p>
        <p class="wellcome">Welcome Back</p>
        <div>
            <form>
                <div class="formdiv_first">
                    <img src="../assets/media/Message1.svg" alt="" class="email">
                    <input placeholder="Email" type="email">
                </div>
                <div class="formdiv_second">
                    <img src="../assets/media/Lock2.svg" alt="" class="email">
                    <img src="../assets/media/Hide3.svg" alt="" class="eye">
                    <input placeholder="Password" type="password">
                </div>
            </form>
        </div>
        <p class="forgot"> <a href="#">Forgot your password?</a></p>
    </div>
    <router-link to="/create"><button class="login_btn"><img src="../assets/media/Login1.svg" alt="">Login</button>
    </router-link>
    <p class="register_now">Don’t have an account yet? <a href="#" class="reg">Register </a> </p>
</template>

<script>

export default {

}
</script>

<style>
</style>