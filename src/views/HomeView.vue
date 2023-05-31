<template>
    <InputForm />
    <CardsContainer :isOdd=true titleText="Popular" requestType="random" query="" limit=4 />
    <CardsContainer :isOdd=false titleText="Chicken Meals" requestType="complexSearch" query="chicken" limit=4 />
    <CardsContainer :isOdd=true titleText="For Vegetarians" requestType="complexSearch" query="vegetarian" limit=4 />
</template>

<script>

import InputForm from '@/components/Containers/InputForm.vue';
import CardsContainer from '@/components/Containers/CardsContainer.vue';

export default {
  name: 'HomeView',
  components: {
    InputForm,
    CardsContainer
  }
}
</script>

<style lang="scss" scoped>

  @import "@/assets/global.scss";
  p{
    color: black;
  }
  
</style>
