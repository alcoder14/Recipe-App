<template>
  <NavbarDesktop v-if="desktopNavbarVisible" />
  <NavbarMobile v-if="!desktopNavbarVisible"/>
  <router-view :key="$route.params"/>
  <FooterComponent />
  <div class="blank-space" v-if="footerSpaceVisible"></div>
</template>

<script>
  import FooterComponent from "./components/Containers/FooterComponent.vue";
  import NavbarDesktop from "./components/Containers/NavbarDesktop.vue";
  import NavbarMobile from './components/Containers/NavbarMobile.vue';

  export default{
    name: 'App',
    components: {
      FooterComponent,
      NavbarDesktop,
      NavbarMobile
    },
    data(){
      return{
        desktopNavbarVisible: true,
        footerSpaceVisible: false
      }
    },
    mounted(){
      window.addEventListener("resize", this.checkWidth)
      this.checkWidth()
    },
    methods: {
      checkWidth(){
        if(window.innerWidth < 584){
          this.desktopNavbarVisible = false
          this.footerSpaceVisible = true
        } else {
          this.desktopNavbarVisible = true
          this.footerSpaceVisible = false
        }
      }
    }


  }
</script>

<style scoped>

  @import "@/assets/global.scss";
  .blank-space{
    height: 75px;
    width: 100%;
    background-color: #323232;
  }
  
</style>
