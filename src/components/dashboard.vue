<template>
  <div>
        <v-toolbar
      flat
      color="#0F4C7D"
      dark
    >
      <v-toolbar-title>Admin</v-toolbar-title>
      <v-spacer></v-spacer>
          <v-icon class="mx-3"
          color="grey lighten-1"
          medium
        >
          mdi-message
        </v-icon>
    <v-icon class="mx-3"
          color="grey lighten-1"
          medium
        >
          mdi-bell
        </v-icon>
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
    <div class="row">
        <v-navigation-drawer 
          permanent
          expand-on-hover
        >
          <v-list>
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="title">
                  Sandra Adams
                </v-list-item-title>
                <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list
            class="ml-2"
            nav
            dense
          >
            <v-list-item link class="txt">
              <v-list-item-icon>
                <v-icon class="txt">mdi-view-dashboard</v-icon>
              </v-list-item-icon>
              <v-list-item-title><router-link to="/dashboard"> Dashboard </router-link></v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-upload</v-icon>
              </v-list-item-icon>
              <v-list-item-title><router-link to="dashboard/foodform">Add product</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-details</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Product Detail</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-receipt</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Invoice</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title >Customers List</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-briefcase</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sales</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-format-list-bulleted</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sales</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-receipt</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Invoice</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-receipt</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Invoice</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main style="background-color:#F0F0FA" class="d">
          <router-view></router-view>
        </v-main>
        </div>
      <!-- <div class="col-10">
      </div> -->
  </div>
</template>
<script>
export default {
    name:'Dashboard'
}
</script>
<style>
  .txt:hover{
    color: red;
  }
  .d{
    width: fit-content;
  }
</style>
