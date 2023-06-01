<template>
  <div class="title-container">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
    name: "TitleText",
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>

    @import "@/assets/global.scss";

    .title-container{
        width: 100%;
        h2{
            text-align: left;
            font-size: 40px;
            color: $white;
        }
    }
    @media(max-width: 1024px){
        .title-container h2{
            font-size: 35px;
        }
    }
    
</style>