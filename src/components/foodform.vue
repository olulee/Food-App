<template>
    <div>
          <form>
    <v-text-field
      v-model="foodName"
      label="Enter Food Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="foodDetail"
      label="Enter food details"
      required
    ></v-text-field>
    <input v-model="price" class="form-control" type="number" placeholder="Enter food price">

    <label for="">Select Category
        <select v-model="selected" name="food" id="food">
            <option value="Local dishes">Local dishes</option>
            <option value="Continental dishes">Continental dishes</option>
        </select>
    </label>
    <input v-model="time" class="form-control" type="time" placeholder="Time">
    <input v-on:change="handleimage" class="form-control" type="file" >
    <div id="preview">
    <img v-if="imageData" :src="imageData" />
  </div>
    <v-checkbox
      v-model="checkbox"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn class="mr-4" @click="handleSubmit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
        <!-- <div class="top">
            <h3 class="py-3 ml-5 t1">Add food page</h3>
        </div>
        <div class="main">
            <form class="form-group">
                <input v-model="foodName" class="form-control" type="text" placeholder="Enter food">
                <input v-model="foodDetail" class="form-control" type="text" placeholder="Enter food details">
                <input v-model="price" class="form-control" type="number" placeholder="Enter food price">
                <input v-model="time" class="form-control" type="time" placeholder="">
                <label for="">Select Category
                    <select v-model="selected" name="food" id="food">
                        <option value="Local dishes">Local dishes</option>
                        <option value="Continental dishes">Continental dishes</option>
                    </select>
                </label>
                <input v-on:change="handleimage" class="form-control" type="file" >
                <div id="preview">
    <img v-if="imageData" :src="imageData" />
  </div>
                <button class="btn btn-success form-control" v-on:click="handleSubmit">Submit</button>
            </form>
        </div> -->
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name: 'Foodform',
    data(){
        return{
            foodId: 0,
            foodName: '',
            foodDetail: '',
            selected: '',
            price:'',
            imageData:'',
            time: '',
            checkbox: false
        }
    },
    methods:{...mapActions(['uploadFood']),
        handleSubmit(){
            let foodList = []
            if(localStorage.hasOwnProperty.call(localStorage,'foodlist')){
            foodList = JSON.parse(localStorage.getItem('foodlist'))
            }
            console.log(foodList)
            if (foodList.length === 0) {
                let food = {foodId:this.foodId, foodName:this.foodName,foodDetail:this.foodDetail,price:this.price,selected:this.selected,imageData:this.imageData,time:this.time};
                this.uploadFood(food)
            }else{
                let lastFood = foodList[foodList.length-1]
                console.log(lastFood)
                this.foodId = lastFood.foodId+1
                let food = {foodId:this.foodId, foodName:this.foodName,foodDetail:this.foodDetail,price:this.price,selected:this.selected,imageData:this.imageData,time:this.time};
                console.log(food)
                this.uploadFood(food)
            }
        },
        handleimage(e){
            let img = e.target.value;
            let newfile = img.split("fakepath");
            let path =  newfile[1].split('\\');
            this.imageData = path[1];
            // this.imageData= URL.createObjectURL(img)
            // if (img && img[0]) {
            //     var reader = new FileReader();
            //     reader.onload = (e)=>{
            //         this.imageData = e.target.result
            //     }
            //     reader.readAsDataURL(img[0])
            // }
    
            console.log(this.imageData)
        },
        clear () {
        // this.$v.$reset()
        this.foodName = ''
        this.foodDetail = ''
        this.selected = null
        this.checkbox = false
        this.imageData = '',
        this.price = ''
      },
    }
}
</script>
<style>
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