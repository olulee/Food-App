const state = {
    users:[],
    foods:[],
    id: '',
    name: '',
    login: false,
    cart: [],
    emailCheck: false
};

const getters = {
    getAuthentication(){
        return state.login
    },
    getFood(){
        // return state.foods
        let foods = []
        if(localStorage.hasOwnProperty.call(localStorage,'foodlist')){
            foods = JSON.parse(localStorage.getItem('foodlist'))
        }
        return foods
    },
    getCart(){
        let myCart = []
        if(localStorage.hasOwnProperty.call(localStorage,'cart')){
            myCart = JSON.parse(localStorage.getItem('cart'))
        }
        state.cart = myCart
        return state.cart
    },
    getEmailCheck(){
        return state.emailCheck
    }
};
const actions = {
    submitSiginUp({commit},user){
        commit('signUp',user)
    },
    submitSignIn({commit},visitor){
        commit('signIn',visitor)
    },
    uploadFood({commit},food){
        commit('addFood',food)
    },
    cartItems({commit},c){
        commit('cartFood',c)
    },
    deleteCart({commit},d){
        commit('delete',d)
    },
    increaseQuantity({commit},item){
        commit('increase',item)
    },
    decreaseQuantity({commit},item){
        commit('decrease',item)
    }
};
const mutations = {
    signUp(state,u){
        // console.log(u);
        let userDetail = [];
        if(localStorage.hasOwnProperty.call(localStorage,'foodusers')){
            userDetail = JSON.parse(localStorage.getItem('foodusers'))
        }
        if (userDetail.length!=0) {
            for (let index = 0; index < userDetail.length; index++) {
                console.log(userDetail[index].email);
                if (userDetail[index].email == u.email) {
                    // alert('User Already Exisit')
                    state.emailCheck = true
                }
                else{
                    userDetail = [...userDetail,u]
                    localStorage.setItem('foodusers',JSON.stringify(userDetail))
                    state.users = [...state.user,u]

                }
                
            }
        }else{
            console.log(u)
            userDetail = [...userDetail,u]
            localStorage.setItem('foodusers',JSON.stringify(userDetail))
            // state.users = [...state.user,u]
        }
        // let mailDetail = userDetail.find(d=>d.email == 'oluleye@gmail.com');
        // console.log(mailDetail)
        // state = [...u]
        // console.log(state)
        // localStorage.setItem('foodusers',JSON.stringify(state))

    },
    signIn(state,v){
        // console.log(v);
        let userDetail = [];
        if(localStorage.hasOwnProperty.call(localStorage,'foodusers')){
            userDetail = JSON.parse(localStorage.getItem('foodusers'))
        }
        // console.log(userDetail);
        // for (let index = 0; index < userDetail.length; index++) {
        //     if (userDetail[index].email == v.email & userDetail[index].password == v.password) {
        //         let authenticated = userDetail[index].status = true
        //         console.log(userDetail)
        //         // localStorage.setItem('foodusers',JSON.stringify(userDetail))
        //         state.login = authenticated

        //     }
            
        // }
        let checkLogin = userDetail.find(log=>log.email ==v.email & log.password ==v.password)
        // console.log(checkLogin)
        if (checkLogin) {
            let index = userDetail.indexOf(checkLogin)
            let loginStatus = userDetail[index].status=true
            state.login =loginStatus
        }
        else state.login = false
    },
    addFood(state,f){
        console.log(f)
        let foodList = [];
        if(localStorage.hasOwnProperty.call(localStorage,'foodlist')){
            foodList = JSON.parse(localStorage.getItem('foodlist'))
        }
        foodList=[...foodList,f]
        localStorage.setItem('foodlist',JSON.stringify(foodList))
        console.log(foodList)
        state.foods = [...foodList,state.foods]
        // console.log(state.foods)
        // console.log(state.foods[0])
    },
    cartFood(state,carted){
        // console.log(carted)
        let myCart =[]
         // distructuring the itemsPro from the action.......
        //  const {available_time,product_id,product_name,product_price,productimage} = itemsPro;
        //  const food = {available_time,product_id,product_name,product_price,productimage,quantity:0}; 
        if(localStorage.hasOwnProperty.call(localStorage,'cart')){
            myCart = JSON.parse(localStorage.getItem('cart'))
        }
        let food = {...carted, quantity:1}
        state.cart = myCart
        let checkCart = state.cart.find(p => p.foodId ==carted.foodId);
        // console.log(checkCart)
        if(checkCart){
            let index = state.cart.indexOf(checkCart)
            // console.log(index)
            state.cart[index].quantity++
            //  checkCart.quantity++;
            //  console.log(checkCart);
        }else{
            // myCart = [...myCart,food]
            // state.cart = myCart
            state.cart = [...state.cart,food]; 
          }
          localStorage.setItem('cart',JSON.stringify(state.cart ))
        //   console.log(state.cart)
        
    },
    delete(state,item){
        // console.log(item)
        let cart = []
        if(localStorage.hasOwnProperty.call(localStorage,'cart')){
            cart = JSON.parse(localStorage.getItem('cart'))
        }
        let removed = cart.filter(c=>c.foodId !== item.foodId)
        console.log(removed)
        state.cart = removed
        localStorage.setItem('cart',JSON.stringify(state.cart ))

    },
    increase(state,item){
        let cart = []
        if(localStorage.hasOwnProperty.call(localStorage,'cart')){
            cart = JSON.parse(localStorage.getItem('cart'))
        }
        state.cart = cart
        let selected = state.cart.find(c=>c.foodId === item.foodId)
        let index =  state.cart.indexOf(selected)
        state.cart[index].quantity ++
        localStorage.setItem('cart',JSON.stringify(state.cart ))

    },
    decrease(state,item){
        let cart = []
        if(localStorage.hasOwnProperty.call(localStorage,'cart')){
            cart = JSON.parse(localStorage.getItem('cart'))
        }
        state.cart = cart
        let selected = state.cart.find(c=>c.foodId === item.foodId)
        let index =  state.cart.indexOf(selected)
        state.cart[index].quantity --
        localStorage.setItem('cart',JSON.stringify(state.cart ))

    }
}
const allUsers = {state,getters,actions,mutations};
export default allUsers;
