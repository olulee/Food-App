<template>
    <div>
    <!-- <nav class="navbar navbar-expand-lg nav-img ">
  <a class="navbar-brand" href="#">Foodista</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li> -->
      <!-- <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li> -->
    <!-- </ul> -->
    <!-- <form class="form-inline"> -->
        <!-- <router-link class="nav-link mr-sm-2 text-white log" to="/addfood">Admin</router-link>
        <a class="nav-link mr-sm-2 text-white log" href="#" data-toggle="modal" data-target="#myModal1">Login</a>
        <a class="nav-link mr-sm-2 text-white log" href="#" data-toggle="modal" data-target="#myModal">Signup</a> -->
    <!-- <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> -->
    <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
  <!-- </form> -->
      <!-- <div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content"> -->
      
        <!-- Modal Header -->
        <!-- <div class="modal-header">
          <h4 class="modal-title">Signup</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div> -->
        
        <!-- Modal body -->
        <!-- <div class="modal-body">
          <form action="" class="form-group ">
              <input v-model="name" class="form-control mb-3" type="text" placeholder="FullName">
              <input v-model="email" class="form-control mb-3" type="email"  placeholder="Email">
              <input v-model="password" class="form-control mb-3" type="password"  placeholder="Password">
              <button class="form-control btn mt-5 signup-btn" v-on:click="handleSubmit">Create account</button>
          </form>
        </div> -->
        
        <!-- Modal footer -->
        <!-- <div class="modal-footer">
          <p class="foot-text">Already have an account? <router-link to="#">Login</router-link></p> -->
          <!-- <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          <button v-on:click="makeSave" type="button" class="btn btn-success" data-dismiss="modal">save</button> -->
        <!-- </div>
        
      </div>
    </div>
  </div> -->
  <!-- signin modal -->
        <!-- <div class="modal fade" id="myModal1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content"> -->
      
        <!-- Modal Header -->
        <!-- <div class="modal-header">
          <h4 class="modal-title">Signin</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div> -->
        
        <!-- Modal body -->
        <!-- <div class="modal-body sign-form">
          <div class="">
          <form action="" class="form-group ">
              <input v-model="name" class="form-control mb-3" type="text" placeholder="FullName">
              <input v-model="email" class="form-control mb-3" type="email"  placeholder="Email"> -->
              <!-- <input v-model="password" class="form-control mb-3" type="password"  placeholder="Password">
              <button class="form-control btn mt-5 signup-btn" v-on:click="handleSignin">Signin</button>
          </form>
          </div>
        </div> --> 
        
        <!-- Modal footer -->
        <!-- <div class="modal-footer">
          <p class="foot-text">Already have an account? <router-link to="#">Login</router-link></p> -->
          <!-- <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          <button v-on:click="makeSave" type="button" class="btn btn-success" data-dismiss="modal">save</button> -->
        <!-- </div>
      </div>
    </div>
  </div>
  </div>
</nav> -->
<v-toolbar
      dark
      prominent
      src="../img/food.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>OrderMe</v-toolbar-title>

      <v-spacer></v-spacer>
      <button class="btn text-white login" data-toggle="modal" data-target="#myModal1">Login</button>
      <button class="btn text-white login" data-toggle="modal" data-target="#myModal">Signup</button>

      <v-badge
      
      color="deep-purple accent-4"
      content="9999+"
      left
      transition="slide-x-transition"
    >
      <v-hover >
        <v-icon
          color="grey lighten-1"
          large
        >
          mdi-account-circle
        </v-icon>
      </v-hover>
    </v-badge>
    </v-toolbar>
    <div v-if="!status" class="alert alert-danger">Unable to signin: Invalid Username or password</div>
     <div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Signup</h4>
          <div v-if="getEmailCheck" class="alert alert-danger text-center">Email Address already exist</div>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
          <form action="" class="form-group ">
              <input v-model="name" class="form-control mb-3" type="text" placeholder="FullName">
              <input v-model="email" class="form-control mb-3" type="email"  placeholder="Email">
              <input v-model="password" class="form-control mb-3" type="password"  placeholder="Password">
              <button class="form-control btn mt-5 signup-btn" v-on:click="handleSubmit">Create account</button>
          </form>
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <p class="foot-text">Already have an account? <router-link to="#">Login</router-link></p> 
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          <!-- <button v-on:click="makeSave" type="button" class="btn btn-success" data-dismiss="modal">save</button>  -->
        </div>
        
      </div>
    </div>
  </div>
          <!-- signin modal -->
        <div class="modal fade" id="myModal1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Signin</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body sign-form">
          <div class="">
          <form action="" class="form-group ">
              <!-- <input v-model="name" class="form-control mb-3" type="text" placeholder="FullName"> -->
              <input v-model="email" class="form-control mb-3" type="email"  placeholder="Email">
              <input v-model="password" class="form-control mb-3" type="password"  placeholder="Password">
              <button class="form-control btn mt-5 signup-btn" v-on:click="handleSignin" data-dismiss="modal">Signin</button>
          </form>
          </div>
        </div> 
        {{getAuthentication}}
        <!-- Modal footer -->
        <div class="modal-footer">
          <p class="foot-text">Already have an account? <router-link to="#">Login</router-link></p>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          <!-- <button v-on:click="makeSave" type="button" class="btn btn-success" data-dismiss="modal">save</button>  -->
        </div> 
      </div>
    </div>
  </div>
    </div>
</template>
<script>
import {mapGetters,mapActions} from "vuex";
export default {
    name: 'Navbar',
    data(){
      return{
        users:[],
        id : 0 ,
        name : '',
        email : '',
        password : '',
        status : true,
      }
    },
    computed : mapGetters(['getAuthentication','getEmailCheck']),
    methods : {...mapActions(['submitSiginUp','submitSignIn']),
      handleSubmit(){
        let reg = {id:this.id++, name:this.name, email:this.email, password:this.password, status:this.status }
        // this.users = [...this.users,reg];
        // console.log(reg)
        this.submitSiginUp(reg);
      },
      handleSignin(){
        let signin = {email:this.email, password:this.password};
        // this.submitSignIn(signin);
        let userDetail = [];
        if(localStorage.hasOwnProperty.call(localStorage,'foodusers')){
            userDetail = JSON.parse(localStorage.getItem('foodusers'))
        }
        let checkLogin = userDetail.find(log=>log.email ==signin.email & log.password ==signin.password)
        if (checkLogin) {
            let index = userDetail.indexOf(checkLogin)
            let loginStatus = userDetail[index].status=true
            this.status =loginStatus
        this.$router.push('/viewlist')
        }
        else this.status = false
      }
    }
}
</script>
<style scoped>
.login{
  font-size: 20px;
}
/* .nav-img{
  background-image: url('../img/food-bg1.jpg');
} */
  .log{
    font-size: 20px;
  }
.signup-btn{
  background-color: #EC4654;
  font-size: 20px;
  color: white;
  border-radius: 10px;
  height: 50px;
}
</style>