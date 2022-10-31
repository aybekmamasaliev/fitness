<template>
    <div class="hey_there">
        <p class="wellcome your_password">Profile</p>
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

                <div class="between_input2">
                    <p>Email is not editable</p>
                </div>
                <div class="formdiv_fourth">
                    <img src="../assets/media/Lock2.svg" alt="" class="email" />
                    <img src="../assets/media/Hide3.svg" alt="" class="eye" />
                    <input placeholder="Password" type="password" />
                </div>
                <div class="formdiv_fourth margin_top15">
                    <img src="../assets/media/Lock2.svg" alt="" class="email" />
                    <img src="../assets/media/Hide3.svg" alt="" class="eye" />
                    <input placeholder="Old Password" type="password" />
                </div>
                <div class="between_input2">
                    <p>Must be at least 8 characters</p>
                </div>
                <div class="formdiv_fourth">
                    <img src="../assets/media/Lock2.svg" alt="" class="email" />
                    <img src="../assets/media/Hide3.svg" alt="" class="eye" />
                    <input placeholder="Confirm New Password" type="password" />
                </div>
                <div class="between_input2">
                    <p>Both passwords must match</p>
                </div>
                <div style="display: flex; flex-direction:row; margin-top: 20px;">
                </div>
            </form>
        </div>
    </div>
    <router-link to="/schedule"><button class="register_btn">Save Changes</button></router-link>
</template>

<script>
export default {

}
</script>

<style>

</style>