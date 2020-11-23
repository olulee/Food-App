<template>
  <div class="row">
      <div class=" col-md-4" :key="i" v-for="(food,i) in getFood">
          <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <v-img
      height= "200"
      :src= "require(`../assets/${food.imageData}`)"
    ></v-img>
    <v-card-title> {{food.foodName}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="#FF2525"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 subtitle-1">
        # {{food.price}}
      </div>

      <div>{{food.foodDetail}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <!-- <v-card-title v-if="time >= food.time || time <= time2">Available</v-card-title> -->
    <v-card-title v-if="time >= food.time  && food.time <=time2 ">Available</v-card-title>
    <v-card-title v-else>Not Available</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>{{food.time}}</v-chip>

        <!-- <v-chip>7:30PM</v-chip> -->

        <!-- <v-chip>8:00PM</v-chip> -->

        <!-- <v-chip>9:00PM</v-chip> -->
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
      class="mx-auto"
        color="#7AB900"
        text
        @click="reserve(food)"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
      </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
  export default {
    name:'Displayfood',
    computed: mapGetters(['getFood']),
    data: () => ({
      loading: false,
      selection: 1,
      time: '',
      time2: ''
    }),
    mounted(){
        let time = new Date
        let h = time.getHours()
        let m = time.getMinutes()
        this.time = `${h}:${m}`
        let h2 = h+4
        let m2 = m
        this.time2 = `${h2}:${m2}`
        console.log('t1',this.time)
        console.log('t2',this.time2)
        
        console.log(this.getFood[2].time)
        if (this.getFood[2].time >= this.time && this.getFood[2].time <=this.time2) {
          console.log('yes')
        }
    },

    methods: {...mapActions(['cartItems']),
      reserve (c) {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
        this.cartItems(c)
      },
    },
  }
</script>


<style>
.cont{
    display: flex;
}
</style>