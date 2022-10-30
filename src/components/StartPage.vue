<template>
    <div>
        <div class="fitness_booking">
            <p>FITNESS BOOKING</p>
        </div>
        <div class="every_body_can">
            <p>Everybody Can Train</p>
        </div>
        <router-link to="/wellcome"><button class="get_str_btn">Get Started</button></router-link>
    </div>
</template>
<script>
export default {
}
</script>

<style>

.every_body_can {
  width: 200px;
  height: 20px;
  font-weight: 400;
  font-size: 18px;
  color: #7b6f72;
  text-align: center;
}

.fitness_booking {
  width: 230px;
  height: 100px;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #1d1617;
}

.get_str_btn {
    bottom: 50px;
}
</style>