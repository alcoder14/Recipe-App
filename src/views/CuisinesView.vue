<template>
  <section class="section-width-100 primary-bg h-90">
    <div class="max-width-1400 flag-container">
      <CuisineBox v-for="item in cuisines" :key="item.name" :cuisine="item"/>
    </div>
  </section>
</template>

<script>

import CuisineBox from '@/components/Elements/CuisineBox.vue';

export default {
    name: "CuisinesView",
    components: {
      CuisineBox
    },
    data(){
      return{
        cuisines: [
          {
            name: "German",
            icon: "fi-de"
          },
          {
            name: "American",
            icon: "fi-us",
          },
          {
            name: "Thai",
            icon: "fi-th"
          },
          {
            name: "French",
            icon: "fi-fr"
          },
          {
            name: "Japanese",
            icon: "fi-jp",
          },
          {
            name: "Italian",
            icon: "fi-it"
          },
          {
            name: "Spanish",
            icon: "fi-es"
          },
          {
            name: "Mexican",
            icon: "fi-mx"
          },
          {
            name: "Greek",
            icon: "fi-gr"
          },
          {
            name: "British",
            icon: "fi-gb"
          },
          {
            name: "Chinese",
            icon: "fi-cn"
          },
          {
            name: "Indian",
            icon: "fi-in"
          }

        ]
      }
    }
}
</script>

<style lang="scss" scoped>



@import "@/assets/global.scss";
  .h-90{
      height: 90vh;
  }
  .flag-container{
    display: grid;
    grid-template-columns: repeat(4, 300px);
    grid-template-rows: 29% 29% 29%;
    justify-content: space-between;
    gap: 30px;
    height: 90vh;
  }
  @media(max-width: 1440px){
    .flag-container{
      grid-template-columns: repeat(4, 22%);
    }
  }
  @media(max-width: 1160px){
    .h-90{
      height: fit-content;
    }
    .flag-container{
      grid-template-columns: repeat(3, 30%);
    }
  }
  @media(max-width: 768px){
    .flag-container{
      grid-template-columns: repeat(2, 48%);
      justify-content: space-evenly;
    }
  }
  /*
  @media(max-width: 584px){
    .flag-container{
      justify-content: center;
      grid-template-columns: repeat(1, 90%);
    }
  }
  */
  
</style>