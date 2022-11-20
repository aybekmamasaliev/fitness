<template>
    <div class="halls">
        <p>Fitness Hall {{num}} Load</p>
        <button class="book" @click="toScheduleappo">
            {{book}}
        </button>
    </div>
    <div style="margin-top: 20px">
        <apexchart width="100%" type="line" :options="options" :series="series"></apexchart>
    </div>
</template>
<script>
export default {
    props:["num", "id"],
    data() {
        return {
            book:"",
            url:"",
            options: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"]
                }
            },
            series: [{
                name: 'series-1',
                data: [20, 15, 80, 70, 20, 70, 40]
            }],
        }
    },
    methods: {
        setBook(){
            this.num =="1" ? this.book="Book": this.book="Cancel"
        },

        toScheduleappo() {
            this.num=="1"? this.url="/scheduleappo" : this.url=`/schedulecancel/${this.id}`
            this.$router.push(this.url)
        },
        toCancel() {
            this.$router.push(`/schedulecancel/${this.current_id}`)
        },
    },
    created(){
        this.setBook()
        // this.showHalls()
    }
}
</script>
<style scoped>

</style>
