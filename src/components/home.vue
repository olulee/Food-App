<template>
  <div>
    <div >
      <Navbar/>
      <div >
       <v-card class="top">  
         <!-- <div v-if="getEmailCheck" class="alert alert-danger text-center">Email Address already exist</div> -->
      <h1 class="title1 text-white ">Food Store</h1>
      <h2 class="subtitle text-white m-5">Discover the best food & drinks in London</h2>
      <div class="mysrc">
      <v-form class="d-justify-center">
    <v-container >
      <v-row>
        <v-col cols="12"  >
          <v-text-field 
            v-model="message"
            outlined
            clearable
            label="Search for a cuisine or a dish"
            type="text"
          >
            <template v-slot:append>
              <v-fade-transition leave-absolute>
                <!-- <v-progress-circular -->
                  
                  size="24"
                  color="info"
                  indeterminate
                <!-- ></v-progress-circular> -->
                <v-icon>mdi-magnify</v-icon>
              </v-fade-transition>
            </template>
          </v-text-field>
        </v-col>

      </v-row>
    </v-container>
  </v-form>
  </div>
      <v-responsive :aspect-ratio="16/1">
      </v-responsive>
    </v-card>
    </div>
    </div>
    <div class="row place" >
      <div class="col-md-5 place1">
      <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="../img/cont-dish.jpg"
    >
    </v-img>
    <v-card-title>Continental Dishes</v-card-title>

    <v-card-subtitle class="pb-0">Continental Dishes</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Have a look at our Continental dishes, you gonna love it.</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
      </div>
  <div class="col-md-5 place2">
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="../img/local-dish.jpg"
    >
    </v-img>
    <v-card-title>Continental Dishes</v-card-title>

    <v-card-subtitle class="pb-0">Continental Dishes</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Have a look at our Continental dishes, you gonna love it.</div>

    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
    </div>
    <div>
    <div class=" row food">
      <h5 class=" f1 col-md-4 m-4"><router-link to="/viewlist" class="text-white"> List Of All Foods</router-link></h5>
      <h5 class=" f2 col-md-4 m-4"><router-link to="/addfood" class="text-success">List Of Available Foods</router-link></h5>
    </div>
    <footer className='row'>
      <ul className='col-12'>
        <li>About</li>
          <li>Help Center</li>
          <li>Terms</li>
          <li>Privacy policy</li>
          <li>Cookies</li>
          <li>Blog</li>
          <li>Advertise</li>
          <li>Settings</li>
          <li>© 2020 food, Inc.</li>
      </ul>
    </footer>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Navbar from './navbar';
export default {
  name: 'Home',
  components: {
    Navbar
  },
  data(){
    return{
      message: ''
    }
  },
  computed: mapGetters(['getEmailCheck'])
}
</script>

<style scoped>
.top{
  background-image: url('../img/food1.jpg');
  opacity: 0.9;
}
.title1{
  font-family: cursive;
  font-size: 80px;
  font-weight: 600;
  text-align: center;
}
.subtitle{
  font-family: sans-serif;
  text-align: center;
}
.mysrc{
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}
.inp{
text-align: center;
  /* border: 1px solid white;
  border-radius: 10px; */
  /* width: 800px; */

}

i{
  padding: 10px; 
  min-width: 40px; 
}
.crd{
  height: 200px;
}
.place{
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
.place1{
  margin: 30px;
  border: 1px solid rgb(77, 151, 116);
  border-radius: 20px;
}
.place2{
  margin: 30px;
  border: 1px solid rgb(77, 151, 116);
  border-radius: 20px;
}
a{
  text-decoration: none;
}
.dish{
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 10px;
}
.place1:hover{
  /* -ms-transform: scale(1.5); IE 9 */
  /* -webkit-transform: scale(1.5); Safari 3-8 */
  transform: scale(1.1); 
  transition: 0.9s;
}
.place2:hover{
  /* -ms-transform: scale(1.5); IE 9 */
  /* -webkit-transform: scale(1.5); Safari 3-8 */
  transform: scale(1.1); 
  transition: 0.9s;
}
.food{
  display: flex; 
  /* margin: auto; */
  justify-content: center;
  margin-top: 10px;
}
.f1{
  font-family: cursive;
  background-color: #4E454A;
  color: #FBAD0D;
  /* width: 20px; */
  padding: 40px;
  text-align: center;
}
.f2{
  font-family: cursive;
  background-color: #4E454A;
  color: #FBAD0D;
  /* width: 200px; */
  padding: 40px;
  text-align: center;
}
/* .food h5{
  font-family: cursive;
  background-color: #4E454A;
  color: #FBAD0D;
  width: 600px;
  padding: 40px;
  text-align: center;
} */
footer ul li{
    display: inline;
    justify-content: center;
    padding-right: 20px;
    color: grey;
    font-size: 13px;
}
footer ul{
    text-align: center;
    margin-top: 10px;
}
</style>
