<template>
    <div class="schedule">
        <div class="graph">
            <p class="wellcome_back">Welcome Back,</p>
            <p class="user_name">Stefani Wong</p>
            <img src="../assets/media/Notification1.svg" alt="" class="notification_img">
            <div class="info_fitness margin_top_25">
                <p style="color:black">You have no fitness appointment for today</p>
            </div>
            <div class="info_fitness">
                <p>You have fitness appointment at 00:00 in hall_X</p>
            </div>
            <div class="halls">
                <p>Fitness Hall 1 Load</p>
                <router-link to="/scheduleappo"><button class="book">Book</button></router-link>
            </div>
            <div class="persent_block"></div>

            <div class="halls">
                <p>Fitness Hall 2 Load</p><button class="book">Cancel</button>
            </div>
            <div class="persent_block"></div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style>

.schedule{
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
.graph{
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
  border:0;
  position:inherit;
  transform: translate(0);
}

.persent_block{
  width: 315px;
  height: 160px;
  background-color: lightgrey;
  margin-top: 15px;
}

.halls a{
  text-decoration: none;
}

</style>