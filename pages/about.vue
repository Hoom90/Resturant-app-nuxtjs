<script setup>
import pageLayout from '~/layouts/pageLayout.vue';
import footerComp from "../components/footer.vue"

import hero from "@/assets/svg/about.svg"
</script>

<template>
  <div class="mt-40 mb-10 mx-16 grid grid-flow-col gap-5 min-h-[600px]">
    <div class="flex justify-center items-center gap-10">
      <img :src="hero" alt="hero" class="w-[500px] rotate-45">
      <div>
        <h2 class="text-orange-500 text-[25px] my-5">About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsa voluptatibus voluptatum neque repellat quos nostrum laboriosam corporis omnis quas! Iusto nihil maiores deserunt dicta a quaerat expedita, aut rem.</p>
        <p>Amet ipsa voluptatibus voluptatum neque repellat quos nostrum laboriosam corporis omnis quas! aut re.</p>
        <p>nostrum laboriosam corporis omnis quas! Iusto nihil maiores deserunt dicta a quaerat expedita, aut rem.</p>
      </div>
    </div>
  </div>
  <footerComp/>
</template>