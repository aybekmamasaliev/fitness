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
                    <img src="../assets/media/Hide3.svg" alt="" class="eye" v-on:click="old_password"/>
                    <input placeholder="Password" :type="type_of_old_password" />
                </div>
                <div class="formdiv_fourth margin_top15">
                    <img src="../assets/media/Lock2.svg" alt="" class="email" />
                    <img src="../assets/media/Hide3.svg" alt="" class="eye" v-on:click="new_password"/>
                    <input placeholder="Old Password" :type="type_of_new_password" />
                </div>
                <div class="between_input2">
                    <p>Must be at least 8 characters</p>
                </div>
                <div class="formdiv_fourth">
                    <img src="../assets/media/Lock2.svg" alt="" class="email" />
                    <img src="../assets/media/Hide3.svg" alt="" class="eye" v-on:click="new_password_conf"/>
                    <input placeholder="Confirm New Password" :type="type_of_new_password_conf" />
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
    data(){
        return{
            type_of_old_password:"password",
            type_of_new_password:"password",
            type_of_new_password_conf:"password"
        }
    },
    methods:{
        old_password(){
            this.type_of_old_password = this.type_of_old_password === "password" ? "text" : "password"
        },
        new_password(){
            this.type_of_new_password = this.type_of_new_password === "password" ? "text" : "password"
        },
        new_password_conf(){
            this.type_of_new_password_conf = this.type_of_new_password_conf === "password" ? "text" : "password"
        }
    }
}
</script>

<style>

</style>