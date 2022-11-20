<template>
    <div class="appointment ">
        <router-link to="/schedule"><img src="../assets/media/close.svg" alt="" class="close"></router-link>
        <p class="p_of_appointment">Schedule Appointment </p>
        <p class="fitness_hall">Fitness Hall N</p>
        <!-- <div>

            <label for="meeting-time">Choose a time for your appointment:</label>
            <input type="datetime-local" id="meeting-time" name="meeting-time" value="2018-06-12T19:30"
                min="2018-06-07T00:00" max="2035-06-14T00:00">

        </div> -->
        <div class="div_of_wath"><img src="../assets/media/time.svg" alt="">
            <p class="today">Today | {{time}}</p>
        </div>
        <button class="btn_small" @click="schedulelAppo">Schedule appointment</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            time:"null"
        }
    },
    methods: {
        schedulelAppo() {
            this.$router.push("/schedule")
        },
        getTimeAppo(){
            let token=localStorage.getItem("access")
            fetch(process.env.VUE_APP_API_DOMAIN+"//fitness/check_appointment/",
            {method:"GET",
            headers:{"Authorization":`Bearer ${token}`}
        }
            )
            .then(res=>res.json())
            .then(data=>{
                this.time=data[0].appointment
                console.log(this.time)
            })
        }
    },
    created(){
       this.getTimeAppo()
    }
}
</script>
<style>

</style>