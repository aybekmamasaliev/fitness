<template>
    <div class="hey_there">
        <p class="hey">Hey there,</p>
        <p class="wellcome">Welcome Back</p>
        <div>
            <form>
                <div class="formdiv_first">
                    <img src="../assets/media/Message1.svg" alt="" class="email">
                    <input placeholder="Email" type="email" v-model="email">
                </div>
                <div class="formdiv_second">
                    <img src="../assets/media/Lock2.svg" alt="" class="email">
                    <img src="../assets/media/Hide3.svg" alt="" class="eye" v-on:click="toggle_input_type">
                    <input placeholder="Password" :type="input_type" v-model="password">
                </div>
            </form>
        </div>
        <p class="forgot"> <router-link to="/forgot">Forgot your password?</router-link></p>
    </div>
    <button class="login_btn" @click="login">
        <img src="../assets/media/Login1.svg" alt="">Login
    </button>
    <p class="register_now">Don’t have an account yet? <router-link to="/register" class="reg">Register </router-link> </p>
</template>
<script>

export default {
    data() {
        return {
            email: "qqq@asmo.su",
            password: "11@@qqWW",
            input_type: "password",
        }
    },
    created() {
        if (localStorage.getItem('access') && localStorage.getItem("refresh")) {
            this.$router.push("/schedule");
        }
    },
    methods: {
        login() {
            let form = { email: this.email, password: this.password }
            fetch(process.env.VUE_APP_API_DOMAIN + "/auth/login/", {
                method: "POST",
                mode: 'cors',
                credentials: 'same-origin',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(form)
            })
                .then(response => response.json())
                .then((response) => {
                    const { access, refresh } = response
                    localStorage.setItem("access", access)
                    localStorage.setItem("refresh", refresh)
                    if(localStorage.getItem("access")){
                        this.$router.push("/schedule")
                    }else{
                        this.$router.push("/")
                    }
                }
                )
        },
        toggle_input_type() {
            this.input_type = this.input_type === "password" ? "text" : "password"
        }
    }
}
</script>

<style>

</style>