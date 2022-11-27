<template>
    About
  </template>
  
  <script>
  import { useRoute } from 'vue-router';

  export default {
    name: 'About',
    setup(){
      const route=useRoute()
      const {id}=route.params
      console.log('id= ' ,id)
    }

  }
  </script>