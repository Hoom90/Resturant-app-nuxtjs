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

const route = useRoute()
const router = useRouter()
const state = reactive({
  data: [
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 1,
      image: product1,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 2,
      image: product2,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 3,
      image: product3,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 4,
      image: product4,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 5,
      image: product5,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 6,
      image: product6,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 7,
      image: product7,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 8,
      image: product8,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 9,
      image: product9,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 10,
      image: product10,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 11,
      image: product11,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 12,
      image: product12,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 13,
      image: product13,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 14,
      image: product14,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 15,
      image: product15,
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
  ],
  singleData : {},
})

onMounted(()=>{
  if(route.params.id == ''){
    router.push('/product/list')
  }
  else{
    state.singleData = state.data.find(t => t.id == route.params?.id)
  }
})

// await useFetch('https://fakestoreapi.com/products')
// .then((res)=>{
//   console.log(res.data.value);
//   state.data = res.data.value
// })

</script>

<template>
  <div class="my-40 mx-16">
    <div class="p-5 px-10 shadow-md rounded min-h-[500px]">
      <div class="">
        <img :src="state.singleData.image" class="mx-auto" :alt="`product${state.singleData.id}`">
        {{state.singleData.title}}
        <div class="my-5"></div>
        {{state.singleData.description}}
        <div class="my-5"></div>
        {{state.singleData.price}}
        <div class="my-5">
          {{state.singleData.rating?.rate}}
          {{state.singleData.rating?.count}}
        </div>
      </div>
    </div>
  </div>
</template>