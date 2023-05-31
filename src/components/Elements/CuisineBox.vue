<template>
  <router-link :to="link" class="link">
    <div class="box">
        <span :class="icon"></span>
        <h4 class="title">{{ cuisine.name }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
    name: "CuisineBox",
    props: {
        cuisine: Object
    },
    computed: {
        icon(){
            return "fi " + this.cuisine.icon + " fis"
        },
        link(){
            return "/cuisine/" + this.cuisine.name
        }
    }
}
</script>

<style lang="scss" scoped>

    @import "@/assets/global.scss";

    .link{
        text-decoration: none;
        color: $tertiary;
    }
    .box{
        width: 100%;
        height: 250px;
        @include flex-column();
        justify-content: space-evenly;
        align-items: center;
        background-color: $secondary;
        border-radius: 40px;
        border: $primary solid 3px;
        transition: border 0.4s ease-out;
        &:hover{
            border: solid 3px $tertiary;
        }
        .fi{
            width: 40%;
            height: 40%;
        }
        .title{
            font-size: 26px;
        }
    }
    @media(max-width: 584px){
        .box{
            height: 180px;
            .fi{
                width: 30%;
                height: 30%;
            }
            .title{
                font-size: 22px;
            }
        }
    }
    
</style>