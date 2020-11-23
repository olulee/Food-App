<template>
    <div class="container-fluid cont" >
        <div class="row item">
            <div class="col-12"  :key="i" v-for="(cart,i) in getCart">
                <div class="row">
            <div class="col-2 bg-white" >
                <v-img class="item-img"
                    height= "80"
                    :src= "require(`../assets/${cart.imageData}`)"
                ></v-img>
            </div>
            <div class="col-4 bg-white">
                <h5>{{cart.foodDetail}}</h5>
            </div>
            <div class="col-2 bg-white">
                
                <h5>
                    <button class="btn" v-on:click="increase(cart)">+</button>
                     {{cart.quantity}} 
                    <button class='btn' v-on:click="decreaseQuantity(cart)">-</button>
                </h5>
                
            </div>
            <div class="col-2 bg-white">
                <h5>#{{cart.price * cart.quantity}}</h5>
            </div>
            <div class="col-2 bg-white">
                <v-icon v-on:click="deleteCart(cart)">mdi-delete</v-icon>
            </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name:'Displaycart',
    data(){
        return{

        }
    },
    computed: mapGetters(['getCart']),
    methods:{...mapActions(['deleteCart','increaseQuantity','decreaseQuantity']),
        increase(c){
            this.increaseQuantity(c)
        }
        // handleDelete(item){
        //     this.deleteCart(item)
        // }

    }
}
</script>
<style>
    .cont{
        background-color: #FAFAFA;
        padding-top: 50px;
        /* height: 100px; */
    }
    .item{
        margin-left: auto;
        margin-right: auto;
    }
    .item-img{
        /* height: 10px; */
        width: 80px;
    }
</style>