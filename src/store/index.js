import vue from 'vue';
import vuex from 'vuex';
import allUsers from './users'

vue.use(vuex);
const myFood = new vuex.Store({
    modules:{
        allUsers
    }
})
export default myFood