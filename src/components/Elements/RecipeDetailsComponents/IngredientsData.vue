<template>
    <h5 class="rp-details-h5">Ingredients</h5>
    <div class="ingredients-container">
        <div class="ingredient-cell" v-for="item in ingredients" :key="item.id">
            <div class="text-cell">
                <h5 class="name">{{ item.name }}</h5>
            </div>
            <div class="text-cell">
                <p class="content">{{ item.amount }} {{ item.unit }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "IngredientsData",
    props: {
        ingredients: Array
    }
}
</script>

<style lang="scss" scoped>

    @import "@/assets/global.scss";
    .ingredients-container{
        display: grid;
        grid-template-columns: 49% 49%;
        justify-content: space-between;
        margin: 10px 0;
        .ingredient-cell{
            @include flex-row();
            justify-content: space-evenly;
            padding: 20px;
            background-color: $secondary;
            margin: 10px 0;
            border-radius: 30px;
            .text-cell{
                @include flex-row();
                width: 50%;
                justify-content: flex-start;
                text-align: left;
                .name{
                    color: $tertiary;
                    font-size: 24px;
                }
                .content{
                    color: $text;
                    font-size: 20px;
                }
            }
        }
    }

    @media(max-width: 768px){
        .ingredients-container .ingredient-cell{
            @include flex-column();
            .text-cell{
                width: 100%;
            }
            .text-cell:nth-child(1){
                margin-bottom: 10px;
            }
        }
    }
    
</style>