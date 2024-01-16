<script setup>

const state = reactive({
  menu:[
    {title:"Home",url:"/"},
    {title:"Product",url:"/product/"},
    {title:"About",url:"/about"},
    {title:"Contact",url:"/contact"}
  ]
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
        <button type="button" class="px-3 border-b-2 border-transparent transition-all hover:border-black">Images</button>
        <NuxtLink to="/basket">
          <button type="button" class="bg-black text-white p-3 rounded transition-all hover:bg-[#1f1f1f]">Basket</button>
        </NuxtLink>
      </div>
      <!-- <div class="md:hidden">
        <button type="button" class="bg-black text-white p-3 rounded">Login / SignUp</button>
      </div> -->
    </div>
  </div>
</template>