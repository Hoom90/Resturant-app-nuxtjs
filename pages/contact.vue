<script setup>
import pageLayout from '~/layouts/pageLayout.vue';
import footerComp from "../components/footer.vue"

import hero from "@/assets/svg/salad.svg"
import hero2 from "@/assets/svg/yogurt.svg"
import hero3 from "@/assets/svg/vegi.svg"

</script>

<template>
  <div class="mt-40 mb-10 mx-16 grid grid-flow-col gap-5 min-h-[600px]">
    <div class="flex justify-center items-center">
      <div class="flex-row justify-center items-center text-center lg:text-start lg:max-w-[50%]">
        <h2 class="text-orange-500 text-[25px] my-5">Contact Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus iusto similique voluptas, neque temporibus perspiciatis dolor odit cum. Delectus voluptatum error facere repellat, alias illum quos minus ad libero.</p>
      </div>
      <div class="flex justify-center items-center relative w-1/2">
        <img :src="hero" alt="hero" class="hidden lg:block">
        <img :src="hero2" alt="hero" class="hidden lg:block absolute top-0 -left-28">
        <img :src="hero3" alt="hero" class="hidden lg:block absolute -bottom-10 -right-64">
      </div>
    </div>
  </div>
  <footerComp/>
</template>
