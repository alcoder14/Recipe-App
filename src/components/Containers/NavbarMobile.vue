<template>
    <div class="mobile-navbar-container">
        <router-link to="/" class="link">
            <font-awesome-icon icon="fa-solid fa-home" class="icon"></font-awesome-icon>
            Home
        </router-link>
        <router-link to="/cuisines" class="link"> 
            <font-awesome-icon icon="fa-solid fa-globe" class="icon"></font-awesome-icon>
            Cuisines
        </router-link>
        <router-link to="/myRecipes" class="link">
            <font-awesome-icon icon="fa-solid fa-list" class="icon"></font-awesome-icon>
            Saved
        </router-link>
    </div>
</template>

<script>
export default {
    name: "NavbarMobile",
}
</script>

<style lang="scss" scoped>

    @import "@/assets/global.scss";
    .mobile-navbar-container{
        width: 100%;
        padding: 20px;
        background-color: $tertiary;
        z-index: 300;
        position: fixed;
        bottom: 0;
        left: 0;
        @include flex-row();
        justify-content: space-evenly;
        align-items: center;
        border-top-left-radius: 80px;
        border-top-right-radius: 80px;
        .link{
            @include flex-column();
            color: white;
            text-decoration: none;
            font-size: 20px;
            .icon{
                color: $primary;
                font-size: 30px;
                margin-bottom: 10px;
            }
        }
    }
    
</style>