<script setup>
import cart from "@/assets/svg/cart.svg"
const route = useRoute()
const state = reactive({
  menu:[
    {title:"Home",url:"/"},
    {title:"Product",url:"/product/"},
    {title:"About",url:"/about"},
    {title:"Contact",url:"/contact"}
  ],
  cartStatus:false,
})

onMounted(()=>{
  if(localStorage.getItem('basket') ?? false){
    state.cartStatus = true
  }
  else{
    state.cartStatus = false
  }
})

watch(()=>route.path,()=>{
  if(localStorage.getItem('basket') ?? false){
    let local = JSON.parse(localStorage.getItem('basket'))
    if(local.length != 0){
      state.cartStatus = true
    }
    else{
      state.cartStatus = false
    }
  }
  else{
    state.cartStatus = false
  }
})

</script>
<template>
  <div class="flex justify-between items-center py-6 px-16 fixed w-full top-0 z-10 max-w-[1440px] mx-auto bg-white rounded-b-xl shadow">
    <div class="text-[30px]">
      <nuxt-link to="/">Resturant</nuxt-link>
    </div>
    <div class="hidden lg:flex ml-[90px] justify-center items-center gap-3">
      <nuxt-link :to="item.url" class="px-3 border-b-2 border-transparent transition-all ease-in-out hover:border-black" v-for="item in state.menu">{{item.title}}</nuxt-link>
    </div>
    <div class="">
      <div class="hidden md:flex justify-center items-center gap-3">
        <button type="button" class="px-3 border-b-2 border-transparent transition-all hover:border-black">Gallary</button>
        <NuxtLink to="/basket" class="relative">
          <button class="text-white p-1 pr-3 rounded transition-all bg-orange-500 flex items-center justify-center hover:bg-orange-600"><img :src="cart"><span> | Basket</span></button>
          <div v-if="state.cartStatus" class="bg-blue-500 w-[10px] h-[10px] rounded-full absolute -top-1 -right-1"></div>
        </NuxtLink>
      </div>
      <!-- <div class="md:hidden">
        <button type="button" class="bg-black text-white p-3 rounded">Login / SignUp</button>
      </div> -->
    </div>
  </div>
</template>