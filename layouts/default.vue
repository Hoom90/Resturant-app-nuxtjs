<script setup>
import headerComp from "../components/header.vue"
import footerComp from "../components/footer.vue"

onMounted(()=>{
  // window.
})
</script>
<template>
  <div class="max-w-[1440px] mx-auto">
    <headerComp/>
    <div class="min-h-[800px]">
      <NuxtPage  />
    </div>
    <footerComp/>
  </div>
</template>