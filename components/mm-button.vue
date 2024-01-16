<template>
  <button :type="props.type??'button'" class="border p-2 px-10 rounded" :class="props.class">
    <slot/>
  </button>
</template>

<script  setup>
const props = defineProps(["type","class"])
</script>

<style>

</style>