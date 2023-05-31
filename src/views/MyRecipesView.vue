<template>
    <section class="section-width-100 primary-bg h-90">
        <div class="max-width-1400">
            <TitleText title="Saved Recipes" />
            <div class="settings">
                <h5 class="total-number">Total: {{ recipesNum }} recipes</h5>
                <button class="delete-all" @click="showWarning" :disabled="deleteBtnDisabled">Delete All</button>
            </div>
            <div class="box-container container">
                <RecipeBox v-for="recipe in savedRecipes" :key="recipe.id" :recipe="recipe" :image_link_ready="true" :showDeleteIcon="true"/>
            </div>
            <div class="noSavedRecipes" v-if="noSavedRecipes">
                <p>No Saved Recipes</p>
            </div>
        </div>
    </section>
    <WarningWindow v-if="warningVisible" @delete="deleteRecipes" @close="closeWarning"/>
</template>

<script>

import RecipeBox from '@/components/Elements/RecipeBox.vue';
import TitleText from '@/components/Elements/TitleText.vue';
import WarningWindow from '@/components/Modals/WarningWindow.vue';

export default {
    name: "MyRecipesView",
    
    components: {
        RecipeBox,
        TitleText,
        WarningWindow
    },

    data(){
        return{
            savedRecipes: [],
            noSavedRecipes: true,
            recipesNum: 0,
            warningVisible: false,
            deleteBtnDisabled: true
        }
    },
    methods: {
        showWarning(){
            if(localStorage.getItem("disableWarning") === "false"){
                this.warningVisible = true
            } else {
                this.deleteRecipes()
            }
        },

        deleteRecipes(){
            this.savedRecipes = []
            localStorage.setItem("recipeIDs", JSON.stringify(this.savedRecipes))
            this.recipesNum = this.savedRecipes.length
            this.deleteBtnDisabled = true
            this.noSavedRecipes = true
            this.closeWarning()
        },


        closeWarning(){
            this.warningVisible = false
        },


    },
    mounted(){

        // Get number of saved recipes
        if(localStorage.getItem("recipeIDs") !== null){
            this.savedRecipes = JSON.parse(localStorage.getItem("recipeIDs"))
            this.recipesNum = this.savedRecipes.length
            console.log(this.recipesNum)
        }
        if(this.savedRecipes.length !== 0){
            this.noSavedRecipes = false
            this.deleteBtnDisabled = false
        } else {
            this.deleteBtnDisabled = true
        }

        // Create localStorage if it does not exist
        if(localStorage.getItem("disableWarning") === null){
            localStorage.setItem("disableWarning", "false")
        }


    }
}
</script>

<style lang="scss" scoped>

    @import "@/assets/global.scss";
    .h-90{
        min-height: 90vh;
    }
    .settings{
        margin-top: 20px;

    }
    .noSavedRecipes{
        width: 100%;
        height: 70vh;
        background-color: $secondary;
        border-radius: 30px;
        @include flex-row();
        justify-content: center;
        align-items: center;
        p{
            font-size: 30px;
            color: $tertiary;
        }
    }
    
    .container{
        width: 100%;
    }

    .settings{
        width: 100%;
        @include flex-row();
        justify-content: space-between;
        align-items: center;
        .total-number{
            font-size: 20px;
            color: $tertiary;
        }
        .delete-all{
            outline: none;
            border: none;
            border-radius: 10px;
            font-size: 20px;
            color: white;
            background-color: $tertiary;
            padding: 10px 16px;
            cursor: pointer;
        }
    }
    
</style>