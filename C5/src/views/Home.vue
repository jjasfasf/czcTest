<template>

    <router-link :to="{ name :'about' ,params:{id: 1}}">Home</router-link>
    <button @click="linkTo">Home</button>
  </template>
  
  <script>
     import { useRouter  } from 'vue-router';

      
  export default {
    name: 'Home',
    setup(){
       const router=useRouter()
       console.log('router',router)
       const linkTo=()=>{
        router.push({
          name:'about',
          params:{
            id: 1
          }
        })
       }
       return{
      linkTo
    }
  }
    
    
  }
  </script>