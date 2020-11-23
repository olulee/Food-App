<template>
    <div>
        <h2 class="ml-2 mt-3">Welcome,</h2>
        <div class="row">
            <div class="col-12 placement">
                <div class="row">
                    <div class="col-12 col-md-3">
                        <v-card
                class="mr-2 ml-2"
                    height="150px"
                >
                    <v-card-text>
                    <h4>Sells</h4>
                    <div class="text--primary">
                        well meaning and kindly
                        {{getCart[1].price}}
                    </div>
                    </v-card-text>
                    <v-card-actions>
                    <v-btn
                        text
                        color="deep-purple accent-4"
                    >
                        Learn More
                    </v-btn>
                    </v-card-actions>
                </v-card>
                    </div>
                    <div class="col-12 col-md-3">
                        <v-card
                class="mr-2"
                    height="150px"
                >
                    <v-card-text>
                    <h4>Sells</h4>
                    <div class="text--primary">
                        well meaning and kindly
                    </div>
                    </v-card-text>
                    <v-card-actions>
                    <v-btn
                        text
                        color="deep-purple accent-4"
                    >
                        Learn More
                    </v-btn>
                    </v-card-actions>
                </v-card>
                    </div>
                    <div class="col-12 col-md-3">
                        <v-card
                class="mr-2"
                    height="150px"
                >
                    <v-card-text>
                    <h4>Sells</h4>
                    <div class="text--primary">
                        well meaning and kindly
                    </div>
                    </v-card-text>
                    <v-card-actions>
                    <v-btn
                        text
                        color="deep-purple accent-4"
                    >
                        Learn More
                    </v-btn>
                    </v-card-actions>
                </v-card>
                    </div>
                    <div class="col-12 col-md-3">
                        <v-card
                class="mr-2"
                    height="150px"
                >
                    <v-card-text>
                    <h4>Sells</h4>
                    <div class="text--primary">
                        well meaning and kindly
                    </div>
                    </v-card-text>
                    <v-card-actions>
                    <v-btn
                        text
                        color="deep-purple accent-4"
                    >
                        Learn More
                    </v-btn>
                    </v-card-actions>
                </v-card>
                    </div>
                </div>
            </div>
        </div>
        <v-row>
            <v-col>
                <v-card
                    class="ml-2"
                    max-width="500"
                >
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                    <v-card-title>Top 10 Australian beaches</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">
                    Number 10
                    </v-card-subtitle>

                    <v-card-text class="text--primary">
                    <div>Whitehaven Beach</div>

                    <div>Whitsunday Island, Whitsunday Islands</div>
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
            </v-col>
            <v-col>
                <v-card
                class="mr-2"
                max-width="500"
            >
                <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                <v-card-title>Top 10 Australian beaches</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0">
                Number 10
                </v-card-subtitle>

                <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
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
            </v-col>
        </v-row>
        </div>

</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name:'Mainboard',
    data(){
        return{

        }
    },
    computed: mapGetters(['getCart'])
}
</script>
<style>
    .placement{
        display: flex;
    }
</style>