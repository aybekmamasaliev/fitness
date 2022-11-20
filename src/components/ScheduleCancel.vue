<template>
    <div class="appointment ">
        <router-link to="/schedule">
            <img src="../assets/media/close.svg" alt="" class="close">
        </router-link>
        <p class="p_of_appointment">Cancel Appointment</p>
        <p class="fitness_hall">Are you sure want</p>
        <p class="to_cancel" @click="myFunc"> to cancel appointment?</p>
        <button class="btn_small" @click="cancelAppo">Cancel Appointment</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: 0
        }
    },
    methods: {
        cancelAppo() {
            this.$router.push("/schedule")
        },
        toCancelAppo() {
            let token = localStorage.getItem("access")
            fetch(process.env.VUE_APP_API_DOMAIN + `/fitness/cancel_appointment/${this.id}`,
                {
                    method: "DELETE",
                    headers: { "Authorization": `Bearer ${token}` }
                })
                .then(res=>res.json())
        }
    },
    created() {
        this.id = this.$route.params.id
    }
}
</script>

<style>

</style>