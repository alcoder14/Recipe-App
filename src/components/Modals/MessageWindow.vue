<template>
  <div class="modal-window animation">
    <p class="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
    name: "MessageWindow",
    props: {
        message: String
    }
}
</script>

<style lang="scss" scoped>

    @import "@/assets/global.scss";
    $position: 40px;
    .modal-window{
        z-index: 100;
        width: 400px;
        height: 100px;
        background-color: $tertiary;
        border-radius: 30px;
        position: fixed;
        bottom: $position;
        right: $position;
        @include flex-row();
        justify-content: center;
        align-items: center;
        padding: 10px;
        .message{
            font-size: 24px;
            color: white;
        }
    }
    .animation{
        animation-name: animate-window;
        animation-duration: 0.9s;
        animation-fill-mode: forwards;
    }
    @keyframes animate-window{
        0%{transform: translateX(100%); opacity: 0;}
        100%{transform: translateX(0%); opacity: 1;}
    }

    // Media Queries

    @media(max-width: 1024px){
        $position: 30px;
        .modal-window{
            width: 300px;
            height: 75px;
            .message{
                font-size: 18px;
            }
        }
    }
    @media(max-width: 584px){
        $position: 20px;
        .modal-window{
            width: 250px;
            height: 70px;
            bottom: 100px;
            right: 30px;
            .message{
                font-size: 15px;
            }
        }
    }
    
</style>