<template>
  <div class="loading-container" :class="{'fullscreen': fullScreen === true}">
    <p class="text">{{ text }}</p>
    <div class="progress-container">
        <div class="progress"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: "LoadingScreen",
    props: {
        text: String,
        fullScreen: Boolean
    }
}
</script>

<style lang="scss" scoped>

    @import "@/assets/global.scss";
    .loading-container{
        width: 100%;
        height: 450px;
        @include flex-column();
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        .text{
            font-size: 40px;
            color: $text;
            text-align: center;
        }

        .progress-container{
            width: 30%;
            height: 10px;
            background-color: $tertiary;
            margin: 20px;
            border-radius: 12px;
            position: relative;
            .progress{
                height: inherit;
                background-color: $text;
                width: 10%;
                border-radius: inherit;
                position: absolute;
                left: 0;
                animation-name: animate-loading;
                animation-duration: 1.2s;
                animation-iteration-count: infinite;
                animation-timing-function: linear;
            }

            @keyframes animate-loading{
                0%{width: 0; left: 0;}
                5%{width: 10%; left: 0;}
                95%{left: 90%; width: 10%;}
                100%{width: 0; left: 100%;}
            }
        }
    }

    .fullscreen{
        border-radius: none;
        height: 100vh;
        z-index: 500;
        position: fixed;
        background-color: white;
        top: 0;
        left: 0;
    }

    @media(max-width: 1024px){
        .loading-container .progress-container{
            width: 50%;
        }
    }
    @media(max-width: 584px){
        .loading-container .progress-container{
            width: 70%;
        }
    }
    
</style>