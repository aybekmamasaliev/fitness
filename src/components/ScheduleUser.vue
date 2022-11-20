<template>
  <div class="schedule">
    <div class="graph">
      <div class="drop_down" v-if="visible">
        <p class="text_drop_down" @click="redirect_profile">Profile</p>
        <p class="text_drop_down" @click="redirect_home">LogOut</p>
      </div>
      <p class="wellcome_back" @click="show">Welcome Back,</p>
      <p class="user_name">{{ first_name }} {{ last_name }}</p>
      <img src="../assets/media/Notification1.svg" alt="" class="notification_img" v-on:click="change_vision">
      <div class="info_fitness margin_top_25" v-if="!appointments.length">
        <p style="color:black" @click="capitalize">You have no fitness appointment for today</p>
      </div>
      <div class="info_fitness" v-for="item in appointments" :key="item.id">
        <p>You have fitness appointment at {{ item.appointment }} in hall_{{ item.fitness_hall }}</p>
      </div>
      <HallWidgetComponent v-for="hall in halls" :key="hall.id" :num="halls.indexOf(hall)+1" :id="hall.id"/>
    </div>
  </div>
</template>
<script>
import HallWidgetComponent from './HallWidgetComponent.vue'
export default {
  components: { HallWidgetComponent },
  data() {
    return {
      visible: false,
      user_name: "",
      first_name: "",
      last_name: "",
      has_appointment: "",
      appointment: "",
      date: "",
      fitness_hall: "",
      appo_date: "",
      appointments: [],
      current_id: "",
      halls:[],
      halls_details:[]
    }
  },
  props: [],
  methods: {
    // sendToAuthopage(){
    //   fetch(process.env.VUE_APP_API_DOMAIN+"/fitness/list_halls/")
    // },
    showHalls(){
      let token = localStorage.getItem("access")
      fetch(process.env.VUE_APP_API_DOMAIN + "/fitness/list_halls/",
        {
          method: "GET",
          headers: { "Authorization": `Bearer ${token}`}
        })
        .then(res => {
          if(res.status == "401"){
            localStorage.removeItem("access")
            localStorage.removeItem("refresh")
            this.$router.push("/loginpage")
          }else{
           return res.json()
          }
          })
        .then(data => this.halls = data)
    },
    userProfile(){
      let token = localStorage.getItem("access");

      fetch(process.env.VUE_APP_API_DOMAIN + "/user/profile/",
        {
          method: 'GET',
          headers: { "Authorization": `Bearer ${token}`}
        })
        .then(res => {
          if(res.status=="401"){
            localStorage.removeItem("access")
            localStorage.removeItem("refresh")
            this.$router.push("/loginpage")
          }else{
            return  res.json()
          }
         })
        .then(data => {
          this.first_name = data.first_name.charAt(0).toUpperCase() + data.first_name.slice(1)
          this.last_name = data.last_name.charAt(0).toUpperCase() + data.last_name.slice(1)
        })
    },
    toScheduleappo(){
      this.$router.push("/scheduleappo")
    },
    toCancel() {
      this.$router.push(`/schedulecancel/${this.current_id}`)
    },
    change_vision(){
      this.visible = !this.visible
    },
    redirect_profile(){
      this.$router.push("/profile")
    },
    redirect_home(){
      this.$router.push("/")
      localStorage.clear()
    },
    checkDate(date) {
      return new Date().toDateString() === new Date(date).toDateString()
    },
    loadUserProf() {
      let token = localStorage.getItem("access");
      fetch(process.env.VUE_APP_API_DOMAIN + "/fitness/check_appointment/",
        {
          method: "GET",
          headers: { "Authorization": `Bearer ${token}` }
        }
      )
        .then(res => res.json())
        .then(data => {
          this.appointments = data
          this.current_id = data.id
          console.log(data)
            .filter(item => item.has_appointment && this.checkDate(item.appointment))
            .map(item => {
              const newDate = `${new Date(item.appointment).getHours()}:${new Date(item.appointment).getMinutes()}`
              return {
                ...item,
                appointment: newDate
              }
            })
        })
    }
  },
  created() {
    this.userProfile()
    this.showHalls();
  }
}
</script>

<style>
a {
  text-decoration: none;
  color: black
}

.text_drop_down {
  font-family: "Poppins";
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
}

.text_drop_down:hover {
  background: lightgray;
  color: white
}

.drop_down {
  min-width: 100px;
  min-height: 90px;
  background: #F7F8F8;
  ;
  position: absolute;
  right: 25px;
  top: 80px;
  z-index: 2
}

.schedule {
  width: 100%;
  height: 100vh;
  background: #ffffff;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 1065px;
}

.graph {
  width: 375px;
  height: 1065px;
  background: #ffffff;
  border-radius: 40px;
  position: relative;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 40px;
}

.wellcome_back {
  font-family: "Poppins";
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #ada4a5;
}

.user_name {
  font-family: "Poppins";
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #1d1617;
  margin-top: 5px;
}

.notification_img {
  position: absolute;
  right: 0;
  top: 15px;
  cursor: pointer
}


.info_fitness {
  width: 315px;
  height: 57px;
  background: linear-gradient(274.42deg, #92a3fd 0%, #9dceff 124.45%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
}

.margin_top_25 {
  margin-top: 25px;
}

.info_fitness p {
  font-family: "Poppins";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #1d1617;
}

.halls {
  height: 30px;
  margin-top: 37px;
  display: flex;
  justify-content: space-between;
}

.halls p {
  color: #1d1617;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
}

.halls .book {
  width: 76px;
  height: 30px;
  background: linear-gradient(274.42deg, #92a3fd 0%, #9dceff 124.45%);
  border-radius: 50px;
  color: white;
  border: 0;
  position: inherit;
  transform: translate(0);
}

.persent_block {
  width: 315px;
  height: 160px;
  /* background-color: lightgrey; */
  margin-top: 15px;
}

.halls a {
  text-decoration: none;
}
</style>