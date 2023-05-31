<template>
    <nav>
        <router-link to="/" class="link">Home</router-link>

        <router-link to="/cuisines" class="link">Cuisines</router-link>

        <router-link to="/myRecipes" class="link" >My Recipes</router-link>
    </nav>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style lang="scss" scoped>

    @import "@/assets/global.scss";
    nav{
        width: 100%;
        height: 10vh;
        background-color: $primary;
        @include flex-row();
        justify-content: center;
        align-items: center;
        .link{
            text-decoration: none;
            font-size: 25px;
            color: $tertiary;
            margin: 0 10px;
            text-transform: uppercase;
        }
    }
    .underline{
        border-bottom: $tertiary solid 2px;
    }

    @media(max-width: 1024px){
        nav{
            height: 8vh;
            .link{
                font-size: 22px;
            }
        }
    }
    @media(max-width: 768px){
        nav{
            height: 7vh;
            .link{
                font-size: 20px;
            }
        }
    }
    
</style>