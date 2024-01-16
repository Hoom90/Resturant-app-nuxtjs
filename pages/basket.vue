<script setup>
const state = reactive({
  data:[],
  user: {},
  modal: false,
})

onMounted(()=>{
  state.data = JSON.stringify(localStorage.getItem('basket'))
})

const validateForm = () =>{
  // if(!state.user.name || !state.user.phone || !state.user.address) return

  //fetch data

  state.modal = true
}

</script>
<template>
  <div class="my-40 mx-16 grid grid-flow-col gap-5">
    <div class="p-5 border rounded">
      <h3 class="text-center">Fill Delevery Information:</h3>
      <form @submit.prevent="validateForm">
        <div class="max-w-[500px] mx-auto grid gap-1">
          <mm-input v-model="state.user.name" placeholder="Name" has-rule="true"></mm-input>
          <mm-input v-model="state.user.phone" placeholder="Phone" has-rule="true"></mm-input>
          <mm-input v-model="state.user.address" placeholder="Address" has-rule="true"></mm-input>
          <mm-button type="submit" class="bg-blue-500 text-white hover:bg-blue-600 mt-5">confirm</mm-button>
        </div>
      </form>
      {{ state.user }}
    </div>
    <div class="p-5 border rounded">
      <div>
        Form has name* phonenumber* address* productinfo* productamount* productprice
      </div>
      <div>
        A summary of info shown as bill to user after compeleting form
      </div>
    </div>
  </div>
  <mm-modal v-model="state.modal"/>
</template>



<style>

</style>