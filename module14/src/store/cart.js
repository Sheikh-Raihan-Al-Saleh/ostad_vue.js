import {reactive, computed} from 'vue'
import {order} from './order'
import { authStore } from './store'
const cart = reactive({
    items:{},
    couponCode:"20OFF",
    discountInPercentage:0,
    discountApplied:false,
    originalPrice:0,
    async applyCoupon(){
        const apiUrl="http://localhost:8000/api/coupon"
        const token=authStore.getUserToken()

        if (!token){
           return
        }

        const payload={
            coupon:this.couponCode,
        }

        try{
            const response = await fetch(apiUrl,{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                    'Authorization':`Bearer ${token},`
                    },
                    body:JSON.stringify(payload)
            });

            if(!response.ok){
                throw new Error("Error in applying the coupon");
            }

            const couponData=await response.json();
            if(couponData.value!=0){

                this.discountApplied=true
                this.discountInPercentage=couponData.value
            }
        } catch(error){

            console.error('Error fetching orders', error);
        }
    },
    removeCoupon(){
       this.discountApplied=false
       this.discountInPercentage=0
    },
    totalCartItems:computed(()=>{
        let total = 0
        for(let id in cart.items){
            total += cart.items[id].quantity
        }
        return total
    }),
    
    totalPrice:computed(()=>{
        let total = 0
        for(let id in cart.items){
           total += cart.items[id].product.price * cart.items[id].quantity
        }

        cart.originalPrice=total.toFixed(2)

        if(cart.discountApplied){
            total=total-(total*cart.discountInPercentage/100)
        }

        return parseFloat(total.toFixed(2))
    }),

    addItem(product){
        if(this.items[product.id]){
            this.items[product.id].quantity++
        }else{
            this.items[product.id] = {
                product,
                quantity:1
            }
        }
        this.saveCartInLocalStorage()
    },
    removeItem(product) {
        delete this.items[product.id];
        this.saveCartInLocalStorage();
    },
    
    emptyCart(){
        this.items = {}
        this.saveCartInLocalStorage()
    },
    saveCartInLocalStorage(){
        localStorage.setItem('cart', JSON.stringify(this.items))
    },
    getCartFromLocalStorage(){
        this.items = JSON.parse(localStorage.getItem('cart')) || {}
    },
    checkout(){
        order.placeOrder(this.totalPrice, this.items)
        this.items = {}
        this.saveCartInLocalStorage();
    }

})

cart.getCartFromLocalStorage()
export {cart}