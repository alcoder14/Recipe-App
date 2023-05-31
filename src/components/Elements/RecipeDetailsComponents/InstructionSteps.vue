<template>
    <h5 class="rp-details-h5">Instructions</h5>
    <div class="instructions-container">
        <div class="instruction" v-for="(item, index) in instructions" :key="item.instruction">

            <div class="cell cell-1">
                <h5 class="step-number">{{ index + 1 }}. Step:</h5>
            </div>
            <div class="cell cell-2">
                <p class="step-text">{{ item.instruction }}</p>
            </div>

        </div>
    </div>

</template>

<script>
export default {
    name: "InstructionSteps",
    props: {
        instructions: Array
    }
    
}
</script>

<style lang="scss" scoped>

    @import "@/assets/global.scss";
    .instruction{
        @include flex-row();
        margin: 20px 0;
        padding: 20px;
        border-radius: 30px;
        background-color: $secondary;
        .cell{
            @include flex-row();
            align-items: center;
        }
        .cell-1{
            flex-basis: 10%;
            justify-content: center;
            align-items: center;
            .step-number{
                font-size: 24px;
                color: $tertiary;
            }
        }
        .cell-2{
            flex-basis: 90%;
            .step-text{
                color: $white;
                font-size: 20px;
            }
        }
    }

    @media(max-width: 1440px){
        .instruction{
            .cell-1{
                flex-basis: 20%;
                justify-content: flex-start;
            }
            .cell-2{
                flex-basis: 80%;
            }
        }
    }
    @media(max-width: 768px){
        .instruction{
            .cell-1{
                flex-basis: 25%;
            }
            .cell-2{
                flex-basis: 75%;
            }
        }
    }

    @media(max-width: 584px){
        .instruction{
            @include flex-column();
            .cell-1, .cell-2{
                flex-basis: 100%;
            }
            .cell-1{
                margin-bottom: 10px;
            }
        }
    }
    
</style>