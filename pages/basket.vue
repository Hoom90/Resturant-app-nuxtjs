<script setup>
import removeIcon from "@/assets/svg/cartRemove.svg"
import addIcon from "@/assets/svg/cartAdd.svg"
import deliverIcon from "@/assets/svg/cartCheck.svg"
import reduceIcon from "@/assets/svg/minus.svg"

import product1 from '@/assets/image/image1.png'
import product2 from '@/assets/image/image2.png'
import product3 from '@/assets/image/image3.png'
import product4 from '@/assets/image/image4.png'
import product5 from '@/assets/image/image5.png'
import product6 from '@/assets/image/image6.png'
import product7 from '@/assets/image/image7.png'
import product8 from '@/assets/image/image8.png'
import product9 from '@/assets/image/image9.png'
import product10 from '@/assets/image/image10.png'
import product11 from '@/assets/image/image11.png'
import product12 from '@/assets/image/image12.png'
import product13 from '@/assets/image/image13.png'
import product14 from '@/assets/image/image14.png'
import product15 from '@/assets/image/image15.png'
const price = reactive({
  transportation: 20000,
  tax: 5000,
  final: 0,
})
const state = reactive({
  data: [
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 1,
      image: product1,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      fullTitle: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      titleDetail: "Foldsack No. 1 Backpack, Fits 15 Laptops",
      title: "Fjallraven",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 2,
      image: product2,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      fullTitle: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      titleDetail: "Foldsack No. 1 Backpack, Fits 15 Laptops",
      title: "Fjallraven",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 3,
      image: product3,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      fullTitle: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      titleDetail: "Foldsack No. 1 Backpack, Fits 15 Laptops",
      title: "Fjallraven",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 4,
      image: product4,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      fullTitle: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      titleDetail: "Foldsack No. 1 Backpack, Fits 15 Laptops",
      title: "Fjallraven",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 5,
      image: product5,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      fullTitle: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      titleDetail: "Foldsack No. 1 Backpack, Fits 15 Laptops",
      title: "Fjallraven",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 6,
      image: product6,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      fullTitle: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      titleDetail: "Foldsack No. 1 Backpack, Fits 15 Laptops",
      title: "Fjallraven",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 7,
      image: product7,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      fullTitle: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      titleDetail: "Foldsack No. 1 Backpack, Fits 15 Laptops",
      title: "Fjallraven",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 8,
      image: product8,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      fullTitle: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      titleDetail: "Foldsack No. 1 Backpack, Fits 15 Laptops",
      title: "Fjallraven",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 9,
      image: product9,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      fullTitle: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      titleDetail: "Foldsack No. 1 Backpack, Fits 15 Laptops",
      title: "Fjallraven",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 10,
      image: product10,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      fullTitle: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      titleDetail: "Foldsack No. 1 Backpack, Fits 15 Laptops",
      title: "Fjallraven",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 11,
      image: product11,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      fullTitle: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      titleDetail: "Foldsack No. 1 Backpack, Fits 15 Laptops",
      title: "Fjallraven",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 12,
      image: product12,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      fullTitle: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      titleDetail: "Foldsack No. 1 Backpack, Fits 15 Laptops",
      title: "Fjallraven",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 13,
      image: product13,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      fullTitle: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      titleDetail: "Foldsack No. 1 Backpack, Fits 15 Laptops",
      title: "Fjallraven",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 14,
      image: product14,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      fullTitle: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      titleDetail: "Foldsack No. 1 Backpack, Fits 15 Laptops",
      title: "Fjallraven",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 15,
      image: product15,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      fullTitle: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      titleDetail: "Foldsack No. 1 Backpack, Fits 15 Laptops",
      title: "Fjallraven",
      counter:0,
    },
  ],
  basket: [],
  user: {},
  modal: false,
  error:false,
})

onMounted(()=>{
  getOrder()
})

const validateForm = () =>{
  if(!state.user.name || !state.user.phone || !state.user.address) { state.error = !state.error; return}

  //fetch data

  state.modal = true
}

const getOrder = () =>{
  const local = JSON.parse(localStorage.getItem('basket'))
  if(local){
    local.some(item =>{
      const res = state.data.find(t=>t.id == item.id)
      if(res){
        res.counter = item.counter
        price.final += (res.price * item.counter)
        state.basket.push(res)
      }
    })
  }
}

const removeProduct = (id,deleteAll) =>{
  const deleteData = (index) =>{
    state.basket.splice(index,1)
    localStorage.setItem('basket',JSON.stringify(state.basket))
  }  
  if(deleteAll){
    const index = state.basket.indexOf(t=>t.id == id)
    if(index){
      deleteData()
    }
    state.basket = []
    price.final = 0
    getOrder()
  }
  else{
    const res = state.basket.find(t=>t.id == id)
    if(res){
      if(res.counter <= 1){
        const index = state.basket.indexOf(t=>t.id == id)
        if(index){
          deleteData()
        } 
      }
      else{
        res.counter--
        localStorage.setItem('basket',JSON.stringify(state.basket))
      }
    }
    state.basket = []
    price.final = 0
    getOrder()
  }
  
}

</script>
<template>
  <div class="mt-40 mb-10 mx-16 grid grid-flow-col gap-5 min-h-[500px]">
    <div v-if="state.basket.length != 0" class="grid gap-3">
      <div class="p-5 border rounded">
        <h3 class="flex items-center justify-start text-[20px] h-[50px]">Order Information:</h3>
        <div class="max-w-[500px] mx-auto grid gap-1 ">
          <div class="grid grid-cols-2">
            <p>Transportation: </p>
            <p class="text-orange-500">{{ price.transportation }}</p>
          </div>
          <div class="grid grid-cols-2">
            <p>Tax: </p>
            <p class="text-orange-500">{{ price.tax }}</p>
          </div>
          <div class="grid grid-cols-2">
            <p>Final Price: </p>
            <p class="text-orange-500">{{ price.final }}</p>
          </div>
        </div>
      </div>
      <div class="p-5 border rounded" v-if="state.basket.length != 0">
        <h3 class="text-center text-[25px]">Fill Delivery Information:</h3>
        <form @submit.prevent="validateForm">
          <div class="max-w-[500px] mx-auto grid gap-1">
            <mm-input v-model="state.user.name" placeholder="Name*" has-rule="true"></mm-input>
            <mm-input v-model="state.user.phone" placeholder="Phone*" has-rule="true"></mm-input>
            <mm-input v-model="state.user.address" placeholder="Address*" has-rule="true"></mm-input>
            <mm-button type="submit" class="bg-blue-500 text-white hover:bg-blue-600 mt-5 flex justify-center items-center gap-3">
              <img :src="deliverIcon">
              <span> | Confirm</span>
            </mm-button>
          </div>
        </form>
      </div>
    </div>
    <div class="p-5 border rounded flex-col">
      <div class="flex justify-between items-center mb-5">
        <h3 class="text-[20px]">Your Order Information:</h3>
        <a href="/product/">
          <mm-button class="p-1 flex justify-center items-center bg-orange-500 hover:bg-orange-600 text-white"><img :src="addIcon"></mm-button>
        </a>
      </div>
      <div class="h-[80%]">
        <div v-for="item in state.basket" class="flex justify-between mb-3 hover:bg-orange-100 p-1 pr-10 rounded" v-if="state.basket.length != 0">
          <div class="flex justify-start items-center gap-3">
            <div>
              <img :src="item.image" :alt="`product${item.id}`" class="w-[80px] border rounded-full">
            </div>
            <div>
              <p class="text-[18px]">{{ item.title }}</p>
              <p class="text-[14px] text-gray-500">{{ item.titleDetail }}</p>
              <div class="flex justify-center gap-3 mt-1">
                <div class="flex justify-center items-center gap-1">
                  <div class="border border-orange-500 h-[32px] p-1 flex juce items-center rounded-l shadow-lg hover:shadow-none cursor-pointer" @click="removeProduct(item.id)">
                    <img :src="reduceIcon" class="w-[20px] h-[20px]">
                  </div>
                  <div class="text-white flex items-center bg-orange-500 rounded rounded-r-full p-1 px-3">Amount : {{ item.counter }}</div>
                </div>
                <div class="bg-orange-500 rounded-full p-1 px-3 min-w-[150px] text-center text-white">Price : {{ item.price * item.counter }}</div>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <button class="p-1 rounded flex justify-center items-center" @click="removeProduct(item.id,true)">
              <img :src="removeIcon">
            </button>
          </div>
        </div>
        <div v-else class="h-full flex justify-center items-center">
          <p class="text-[30px] text-center">
            Your Basket is Empty!
          </p>
        </div>
      </div>
    </div>
  </div>

  <mm-modal v-model="state.modal">
    <div class="flex justify-center items-center h-full">
      <div class="absolute w-[200px] h-[200px] rounded-full border-8 border-green-500"></div>
      <p class="text-[30px] z-10 bg-white">Thank you,{{ state.user.name }}. Food will be Delivered to {{ state.user.address }}. Please make {{ state.user.phone }} available.</p>
    </div>
  </mm-modal>

  <mm-modal v-model="state.error">
    <div class="flex justify-center items-center h-full">
      <div class="absolute w-[200px] h-[200px] rounded-full border-8 border-red-500"></div>
      <p class="text-[30px] z-10 bg-white">Fill Information First</p>
    </div>
  </mm-modal>
</template>



<style>

</style>