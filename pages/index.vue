<script setup>
import pageLayout from '~/layouts/pageLayout.vue';
import hero from '@/assets/svg/hero.svg';
import side1 from '@/assets/svg/side1.svg';
import side2 from '@/assets/svg/side2.svg';
import avatar from '@/assets/svg/user.svg';
import heroBg from '@/assets/svg/heroBg.svg'
import chef from '@/assets/svg/chef.svg'
import idea from '@/assets/svg/bulb.svg'
import cost from '@/assets/svg/coin.svg'
import healthy from '@/assets/svg/heart.svg'
import fast from '@/assets/svg/basket.svg'
import best from '@/assets/svg/star.svg'
import safe from '@/assets/svg/security.svg'
import global from '@/assets/svg/location.svg'
import hero2 from '@/assets/svg/hero2.svg'

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

const menu = ref([
  product1, product2, product3, product4, product5,
  product6, product7, product8,
])
const gallery = ref([
  product1, product2, product3, product4, product5,
  product6, product7, product8, product9, product10,
  product11, product12, product13, product14, product15,
])
const slides = ref([
  product1, product2, product3, product4, product5,
]);
// product6, product7, product8, product9, product10,
// product11, product12, product13, product14, product15,
// product1

// const state =reactive({
//   data:[],
//   data2:[]
// })

// await useFetch('https://fakestoreapi.com/products')
// .then((res)=>{
//   state.data = res.data.value;
// })


</script>
<template>
  <!-- <div class="my-40">
    {{ state.data }}
  </div> -->
  <!-- Hero -->
  <section class="h-[800px] relative px-16">
    <img :src="heroBg" class="absolute top-0 right-0 w-[50%] h-full object-cover -z-10" alt="heroBg">
    <img :src="side1" class="hidden md:block absolute top-48 w-[200px] -left-14 -rotate-45 -z-10" alt="side1">
    <div class="flex gap-10 md:px-16">
      <img :src="hero" class="hidden md:block order-2 max-w-[800px] w-auto" alt="hero">
      <div class="h-full my-auto mt-40 max-w-[800px]">
        <p class="text-justify tracking-tighter">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dicta et magni perferendis reprehenderit nihil possimus,
          voluptatem veniam ex dolor vel neque ab quam sint placeat enim. Eius qui aliquid quas.
        </p>
        <p class="text-[3rem] mt-6">Happiness is a Great Food!</p>
        <NuxtLink to="/product" class="bg-[#f1972a] block p-3 px-10 mt-10 transition-all ease-in-out hover:bg-[#ffa537] text-center hover:text-white rounded w-fit">
          <span class="my-auto leading-1">Order Now!</span>
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- Cards -->
  <section class="flex flex-col md:flex-row gap-10 px-16 relative md:-mt-[140px]">
    <img :src="side2" class="hidden md:block absolute top-10 w-[200px] -left-10 -rotate-45 -z-10" alt="side1">
    <div class="rounded shadow-lg bg-white p-10 transition-all ease-in-out hover:scale-[1.01]" v-for="item in [idea,cost,healthy]">
      <div class="bg-[#ffa537] max-w-[100px] p-5 rounded-full mx-auto">
        <img :src="item" alt="hero">
      </div>
      <div>
        <p class="text-[2rem] text-center">card title</p>
        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  </section>

  <!-- SpecialedBy -->
  <section class="relative my-10 mt-48">
    <img :src="heroBg" class="absolute top-20 right-0 md:right-20 rounded-[200px] object-cover -rotate-45 -z-10" alt="side1">
    <img :src="side2" class="hidden md:block absolute -right-20 w-[200px]" alt="side1">
    <div class="flex-row justify-center items-center text-center">
      <p class="text-[#ffa537]">SpecialedBy</p>
      <p class="text-[2rem] max-w-[500px] mx-auto">We Provide our best service and taste which you remember!</p>
      <div class="flex gap-20 px-16 mt-10">
        <img :src="chef" class="hidden lg:block order-2 w-[40%]" alt="chef">
        <div class="hidden md:flex gap-10">
          <div v-for="col in [[fast,safe],[global,best]]" id="chef" class="flex flex-col gap-10">
            <div class="rounded shadow-lg bg-white p-3" v-for="row in col">
              <div class="bg-[#ffa537] max-w-[120px] p-3 rounded-full mx-auto mb-10">
                <img :src="row" alt="hero">
              </div>
              <div>
                <p class="text-[2rem] text-center">card title</p>
                <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex flex-col gap-10 md:hidden">
          <div class="rounded shadow-lg bg-white p-5" v-for="row in [fast,safe,global,best]">
            <div class="bg-[#ffa537] max-w-[150px] p-3 rounded-full mx-auto mb-10">
              <img :src="row" alt="hero">
            </div>
            <div>
              <p class="text-[2rem] text-center">card title</p>
              <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Us -->
  <section class="relative my-20 mt-48">
    <img :src="heroBg" class="absolute top-[15rem] md:top-0 left-0 object-cover w-[50%] md:h-full -z-10" alt="side1">
    <div class="flex-row justify-center items-center h-[800px]">
      <div class="flex gap-20 px-16 h-full">
        <div class="order-2 flex flex-col gap-5">
          <p class="text-[#ffa537]">About Us</p>
          <p class="text-[2rem] max-w-[500px]">Best Online Food provider in History <span class="text-[#ffa537]">Ever seen</span> !!</p>
          <p class="text-justify tracking-tighter">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium similique possimus dignissimos doloremque voluptate ducimus numquam debitis sequi quisquam harum.
            Natus fugiat earum magni ipsum nisi voluptatum eum doloremque aspernatur.
            
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium similique possimus dignissimos doloremque voluptate ducimus numquam debitis sequi quisquam harum.
            Natus fugiat earum magni ipsum nisi voluptatum eum doloremque aspernatur.
            
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium similique possimus dignissimos doloremque voluptate ducimus numquam debitis sequi quisquam harum.
            Natus fugiat earum magni ipsum nisi voluptatum eum doloremque aspernatur.
          </p>
          <p class="text-justify tracking-tighter">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium similique possimus dignissimos doloremque voluptate ducimus numquam debitis sequi quisquam harum.
            Natus fugiat earum magni ipsum nisi voluptatum eum doloremque aspernatur.
          </p>
          <NuxtLink to="/product" class="bg-[#f1972a] p-3 px-10 mt-10 transition-all ease-in-out hover:bg-[#ffa537] hover:text-white rounded w-fit ml-auto md:ml-0">
            <span class="my-auto leading-1">Order Now!</span>
          </NuxtLink>
        </div>
        <img :src="hero2" class="hidden md:block w-1/2 my-auto -ml-10" alt="hero2">
      </div>
    </div>
  </section>

  <!-- Today Special -->
  <section class="relative my-20 mt-48">
    <div class="flex justify-center items-center min-h-[800px]">
      <div class="-mt-20">
        <div class="px-16 text-center">
          <p class="text-[#ffa537]">Today Special</p>
          <p class="text-[2rem]">Food is Important For Health</p>
        </div>
        <div class="min-h-[300px] relative flex flex-col lg:flex-row gap-10 overflow-hidden p-10">
          <div class="transition-all ease-in-out mx-auto" v-for="(slide,index) in slides" :key="index">
            <img class="h-[250px] aspect-square object-cover border rounded shadow-lg transition-all ease-in-out hover:scale-[1.1]" :src="slide" alt="slide">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Menu -->
  <section class="relative my-20 mt-48">
    <img :src="heroBg" class="absolute top-[15rem] md:top-10 right-0 object-cover -z-20 w-[100vw] h-[800px]" style="border-bottom-left-radius: 50%;border-top-left-radius: 100%;border-bottom-right-radius: 100%;border-top-right-radius: 50%;" alt="side1">
    <div class="flex-row justify-center items-center min-h-[800px] px-16">
      <div class="flex flex-col gap-5 text-center">
        <p class="text-[#ffa537]">Our Menu</p>
        <p class="text-[2rem] max-w-[500px] mx-auto">Best Online Food provider in History <span class="text-white">Ever seen</span> !!</p>
        <div>
          <button class="px-10 py-3 border-b border-transparent hover:border-b-2 hover:border-white hover:text-white">Tab</button>
          <button class="px-10 py-3 border-b border-transparent hover:border-b-2 hover:border-white hover:text-white">Tab</button>
          <button class="px-10 py-3 border-b border-transparent hover:border-b-2 hover:border-white hover:text-white">Tab</button>
        </div>
      </div>
      <div class="flex flex-wrap gap-5 justify-center items-center mt-10">
        <NuxtLink to="/product" class="flex gap-5 justify-center items-center bg-[#ffffffd8] pr-5 rounded shadow" v-for="item in menu">
          <div>
            <img :src="item" class="aspect-square w-[100px] rounded" alt="item">
          </div>
          <div>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div class="text-[#ffa537] mb-auto py-7">2.000</div>
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- Food Gallery -->
  <section class="relative my-20 mt-48">
    <div class="flex-row justify-center items-center min-h-[800px] px-16">
      <div class="flex flex-col gap-5 text-center">
        <p class="text-[#ffa537]">Food Gallery</p>
        <p class="text-[2rem] max-w-[500px] mx-auto">Best Online Food provider in History Ever seen!!</p>
      </div>
      <div class="flex flex-wrap gap-5 justify-center items-center mt-10">
        <div class="border w-1/6 flex justify-center items-center">
          <img :src="gallery[11]" class="aspect-square m-auto" alt="item">
        </div>
        <div class="flex-col w-1/6">
          <img :src="gallery[12]" class="aspect-square w-full mb-5 h-full border" alt="item">
          <img :src="gallery[13]" class="aspect-square w-full h-full border" alt="item">
        </div>
        <div class="border w-1/6 flex justify-center items-center">
          <img :src="gallery[14]" class="aspect-square m-auto" alt="item">
        </div>
        <div class="flex-col w-1/6">
          <img :src="gallery[10]" class="aspect-square w-full mb-5 h-full border" alt="item">
          <img :src="gallery[5]" class="aspect-square w-full h-full border" alt="item">
        </div>
        <div class="border w-1/6 flex justify-center items-center">
          <img :src="gallery[6]" class="aspect-square m-auto" alt="item">
        </div>
        <div class="flex-col w-1/6">
          <img :src="gallery[7]" class="aspect-square w-full mb-5 h-full border" alt="item">
          <img :src="gallery[8]" class="aspect-square w-full h-full border" alt="item">
        </div>
      </div>
    </div>
  </section>


</template>

<style scoped>
#chef:nth-child(2){
  margin-top: 40px;
}
</style>