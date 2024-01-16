<template>
  <div>
    {{state.data}}
    <br>
    <br>
    <br>
    <br>
    <!-- {{state.data2}} -->
  </div>
</template>

<script setup>
const props = defineProps(['number'])
const state = reactive({
  data:[],
  data2:[],
})
await useAsyncData(()=>{
    useFetch('http://sahab-5:81/api/public/Content/all',{
     method: 'POST',
     body: { contentType: parseInt(props.number)},
     headers: {
      
             "Content-Type": "application/json",
             // Authorization: `bearer ${token}`
         },
   })
   .then((res)=>{
     state.data = res.data.value.data
   })

   useFetch('http://sahab-5:81/api/public/Expert/list',{
     method: 'POST',
     body: {},
     headers: {
             "Content-Type": "application/json",
             // Authorization: `bearer ${token}`
         },
   })
   .then((res)=>{
     state.data2 = res.data.value.data
   })
})
</script>

<!-- <script setup>
const props = defineProps(["number"])
const state = reactive({
  data: [],
})

const fetchData = async () => {
  try {
    const res = await useFetch('http://sahab-5:81/api/public/Content/all', {
      method: 'POST',
      body: { contentType: props.number },
      headers: {
        "Content-Type": "application/json",
        // Authorization: `bearer ${token}`
      },
    });
    state.data = res.data.value.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

await fetchData();
</script> -->
