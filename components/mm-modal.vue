<template>
  <div v-if="modal" class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[#00000079] z-[100]" @click="closeModal">
    <div class=" w-[500px] h-[500px] bg-white shadow rounded p-5 relative flex-row items-start justify-start">
      <button class="absolute bg-transparent border-none" @click="closeModal"><img :src="closeIcon"></button>
      <div class="text-center">header</div>
      <div class="h-[calc(100%-65px)]">
        <slot/>
      </div>
      <div class="absolute w-[calc(100%-40px)] flex gap-1">
        <mm-button class="text-white bg-blue-500 hover:bg-blue-600" v-if="props.confirmAction">{{ props.confirmText ?? 'confirm' }}</mm-button>
        <mm-button class="text-white bg-red-500 hover:bg-red-600" v-if="props.closeAction">{{ props.closeText ?? 'close' }}</mm-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import closeIcon from "@/assets/svg/close.svg"
const props = defineProps(["modelValue","confirmAction","closeAction","confirmText","closeText"])
const emits = defineEmits(['update:modelValue'])
const modal = ref(false)

watch(()=> props.modelValue,()=>{
  modal.value = props.modelValue
})

const closeModal = () =>{
  modal.value = false
  emits('update:modelValue', modal.value)
}

</script>

<style>

</style>