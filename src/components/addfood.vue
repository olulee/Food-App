<template>
    <div>
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

        <h2>MegaFood</h2>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Food List</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
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
      <v-container style="height: 1500px;"  class="fields">

        <Foodform/>
      </v-container>
    </v-sheet>
  </v-card>
    </div>
</template>
<script>
import Foodform from './foodform'
import {mapActions} from 'vuex'
export default {
    name: 'Addfood',
    components:{
        Foodform
    },
    data(){
        return{
            foodId: 0,
            foodName: '',
            foodDetail: '',
            selected: '',
            price:'',
            imageData:'',
            time: ''
        }
    },
    methods:{...mapActions(['uploadFood']),
        handleSubmit(){
            let food = {foodId:this.foodId++,foodName:this.foodName,foodDetail:this.foodDetail,price:this.price,selected:this.selected,imageData:this.imageData,time:this.time};
            console.log(food)
            this.uploadFood(food)
        },
        handleimage(e){
            let img = e.target.files[0];
            this.imageData= URL.createObjectURL(img)
            // if (img && img[0]) {
            //     var reader = new FileReader();
            //     reader.onload = (e)=>{
            //         this.imageData = e.target.result
            //     }
            //     reader.readAsDataURL(img[0])
            // }

            // console.log(img)
            // console.log(this.imageData)
        }
    }
}
</script>
<style>
.fields{
    margin-top: 150px;
}
.top{
    background-image: url('../img/add.jpg');
    /* height: 50px; */
    opacity: 0.8;
    

}
.t1{
    color: #D1A656;
    font-family: 'Trebuchet MS';
}
.main{
    /* background-color: #8C8C8C; */
    margin: auto;
    width: 80%;
}
</style>