<template>
  <footer>
        <p>Made by <a href="https://www.aldevportfolio.com/">Aljaz Loncaric</a></p>
  </footer>
</template>

<script>
export default {
    name: "FooterComponent"
}
</script>

<style lang="scss" scoped>

    @import "@/assets/global.scss";
    footer{
        width: 100%;
        height: 12vh;
        background-color: $secondary;
        padding: 30px;
        @include flex-row();
        align-items: center;
        justify-content: center;
        color: $text;
        p{
            font-size: 30px;
            color: $text;
        }
        a{
            color: $text;
        }
    }

    @media(max-width: 768px){
        footer{
            height: 9vh;
            p{
                font-size: 24px;
            }
        }
    }
    
</style>