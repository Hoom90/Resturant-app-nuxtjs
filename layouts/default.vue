<script setup>
import headerComp from "../components/header.vue"
import footerComp from "../components/footer.vue"

onMounted(()=>{
  // window.
})
</script>
<template>
  <div class="max-w-[1440px] mx-auto">
    <div class="min-h-[800px]">
      <headerComp/>
      <NuxtPage  />
      <footerComp/>
    </div>
  </div>
</template>