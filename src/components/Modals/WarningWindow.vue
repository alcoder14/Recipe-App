<template>
    <div class="modal-container" @click="closeFromOutside">
        <div class="modal-window">
            <p class="question">Are you sure you want to delete all recipes?</p>
            <div class="buttons-container">
                <button class="btn" @click="yesChosen">Yes</button>
                <button class="btn" @click="noChosen">No</button>
            </div>
            <div class="input-container">
                <input type="checkbox" id="check" v-model="checked">
                <label for="check">Don't show this again</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WarningWindow",
    data(){
        return{
            checked: false
        }
    },
    methods: { 
        yesChosen(){
            this.checkboxValidation()
            this.$emit("delete")
        },
        noChosen(){
            this.checkboxValidation()
            this.$emit("close")
        },
        closeFromOutside(e){
            if(e.target === e.currentTarget){
                this.$emit("close")
            }
        }, 
        checkboxValidation(){
            if(this.checked){
                localStorage.setItem("disableWarning", "true")
            }
        }
    }
}
</script>

<style lang="scss" scoped>

    @import "@/assets/global.scss";
    .modal-container{
        width: 100%;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.5);
        @include flex-row();
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 200;
        top: 0;
        left: 0;
        .modal-window{
            max-width: 500px;
            background-color: #f7f7f7;
            padding: 30px;
            @include flex-column();
            align-items: center;
            border-radius: 30px;
            .question{
                color: $white;
                font-size: 20px;
                text-align: center;
            }
            .buttons-container{
                margin: 20px;
                button{
                    cursor: pointer;
                    padding: 10px 16px;
                    background-color: $primary;
                    color: $tertiary;
                    font-size: 20px;
                    margin: 0 10px;
                    border-radius: 15px;
                }
            }

            .input-container{
                label{
                    color: $white;
                    margin-left: 10px;
                }
            }
        }
    }

    @media(max-width: 768px){
        .modal-container .modal-window{
            max-width: 400px;
        }
    }
    @media(max-width: 584px){
        .modal-container .modal-window{
            max-width: 300px;
        }
    }
    
</style>