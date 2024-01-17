<script setup>
import pageLayout from '~/layouts/pageLayout.vue';

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
const state = reactive({
  data: [
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 1,
      image: product1,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 2,
      image: product2,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 3,
      image: product3,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 4,
      image: product4,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 5,
      image: product5,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 6,
      image: product6,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 7,
      image: product7,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 8,
      image: product8,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 9,
      image: product9,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 10,
      image: product10,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 11,
      image: product11,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 12,
      image: product12,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 13,
      image: product13,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 14,
      image: product14,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      counter:0,
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 15,
      image: product15,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      counter:0,
    },
  ],
  basket : [],
  counter: [],
})

// await useFetch('https://fakestoreapi.com/products')
// .then((res)=>{
//   console.log(res.data.value);
//   state.data = res.data.value
// })

onMounted(()=>{
  getData()
})

const getData = () => {
  state.basket = JSON.parse(localStorage.getItem('basket')) ?? []
  state.basket.forEach(item =>{
    const res = state.data.find(t => t.id == item.id)
    res.counter = item.counter
  })
}

const addToBasket = (id) =>{
  const res = state.basket.find(t=>t.id == id)
  if(res){
    let resData = state.data.find(t=>t.id == id)
    resData.counter++
    res.counter++
  }else{
    let res = state.data.find(t=>t.id == id)
    res.counter++
    state.basket.push({id,counter:1})
  }
  localStorage.setItem('basket',JSON.stringify(state.basket))
}

</script>

<template>
  <div class="my-40 mx-16">
    <div class="flex flex-col gap-5 text-center mb-10">
      <p class="text-[#ffa537]">Our Menu</p>
      <p class="text-[2rem] max-w-[500px] mx-auto">Best Online Food provider in History Ever seen!!</p>
    </div>
    <div class="flex flex-wrap justify-center gap-5">
      <button v-for="item in state.data" :key="item.id" @click="addToBasket(item.id)" class="relative w-1/2 md:w-1/3 lg:w-[300px] p-5 px-10 shadow-md rounded transition-all ease-in-out hover:scale-[1.1]">
        <div class="">
          <img :src="item.image" class="mx-auto" :alt="`product${item.id}`">
          {{item.title}}
        </div>
        <div v-if="item.counter > 0" class="absolute -top-2 -right-2 bg-orange-500 rounded-full w-[30px] h-[30px] flex items-center justify-center text-white">
          {{item.counter}}
        </div>
      </button>
    </div>
  </div>
</template>