<template>
    <div class="hey_there">
        <p class="wellcome your_password">Create New Password</p>
        <div>
            <form>
                <div class="formdiv_first">
                    <img src="../assets/media/Lock2.svg" alt="" class="email">
                    <img src="../assets/media/Hide3.svg" alt="" class="eye">
                    <input placeholder="Password" type="password">
                </div>
                <div class="between_input2">
                    <p>Must be at least 8 characters</p>
                </div>
                <div class="formdiv_second">
                    <img src="../assets/media/Lock2.svg" alt="" class="email">
                    <img src="../assets/media/Hide3.svg" alt="" class="eye">
                    <input placeholder="Password" type="password">
                </div>
                <div class="between_input2">
                    <p>Both passwords must match </p>
                </div>
            </form>
        </div>
    </div>
    <router-link to="/"><button class="login_btn">Reset Password</button></router-link>
</template>

<script>
export default {

}
</script>

<style>

</style>