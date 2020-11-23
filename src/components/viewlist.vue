<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#43a047"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
         src="../img/food.jpg"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <router-link to="/">Home</router-link>

      <v-toolbar-title>Food List</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
          <v-tab>
        <v-badge
          color="green"
          :content= 'getCart.length'
        >
        <router-link to="cart"><v-icon>mdi-basket</v-icon></router-link>
        </v-badge>
      </v-tab>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-5"
      class="overflow-auto"
      max-height="600"
    >
    
      <v-container style="height: 1500px;" class="food"> <Displayfood/> </v-container>
      
    </v-sheet>
  </v-card>
</template>
<script>
import {mapGetters} from 'vuex'
import Displayfood from './displayfood'
export default {
    name:'Foodlist',
    computed: mapGetters(['getFood', 'getCart']),
    components:{
        Displayfood
    }
}
</script>
<style>
    .title{
        /* border: 1px solid; */
        /* border-radius: 10px; */
        background-color: #E2E3E5;
        font-family: cursive;
        font-weight: 1000;
        font-size: 20px;
        padding: 20px;
    }
    .food{
      margin-top: 150px;
    }
</style>