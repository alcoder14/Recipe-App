<template>
    <InputForm />
    <section class="section-width-100 primary-bg">
        <div class="max-width-1400" v-if="finishedLoading">

            <TitleText :title="title" />
            <div class="container">

                <div class="column-1 column">
                    <img :src="image_url" alt="Recipe Image">
                </div>

                <div class="column-2 column">

                    <div class="toggle-btns-container">
                        <div class="align-left">
                            <button class="toggle-btn" @click="toggle" :disabled="dataBtnDisabled">Data</button>
                            <button class="toggle-btn" @click="toggle" :disabled="!dataBtnDisabled">Summary</button>
                        </div>
                        <div class="align-right">

                            <button class="save-btn" @click="saveRecipe" v-if="!saved"><font-awesome-icon icon="fa-solid fa-bookmark" /></button>

                            <button class="delete-btn" @click="deleteRecipe" v-if="saved" :disabled="deleteBtnDisabled"><font-awesome-icon icon="fa-solid fa-check"/></button>

                        </div>
                    </div>

                    <AdditionalData :details="additional_data" v-if="additionalVisible" />
                    <RecipeSummary :summary="summary" v-if="summaryVisible"/>
                </div>
            </div>
            <div class="mobile-toggle-btns-container">
                <button @click="showInstructions" :disabled="instructionsButtonDisabled" class="toggle-btn instructions-btn">Instructions</button>
                <button @click="showIngredients" :disabled="!instructionsButtonDisabled" class="toggle-btn ingredients-btn">Ingredients</button>
            </div>
            <InstructionSteps :instructions="instructions" v-if="instructionsVisible" />
            <IngredientsData :ingredients="ingredients" v-if="!instructionsVisible" />
            <CardsContainer :isOdd="true" titleText="Similar recipes" limit=4 :similar_recipes_id=recipe_id requestType="similar" :disablePadding="true"/>
        </div>
        <div class="max-width-1400" v-if="!finishedLoading">
            <LoadingScreen text="Preparing your meal" :fullScreen="true" />
        </div>
    </section>
    <MessageWindow message="The recipe has been saved" v-if="messageWindowVisible" />
</template>

<script>

import axios from 'axios'
import TitleText from '@/components/Elements/TitleText.vue'
import InputForm from '@/components/Containers/InputForm.vue'
import AdditionalData from '@/components/Elements/RecipeDetailsComponents/AdditionalData.vue'
import RecipeSummary from '@/components/Elements/RecipeDetailsComponents/RecipeSummary.vue'
import InstructionSteps from '@/components/Elements/RecipeDetailsComponents/InstructionSteps.vue'
import IngredientsData from '@/components/Elements/RecipeDetailsComponents/IngredientsData.vue'
import CardsContainer from '@/components/Containers/CardsContainer.vue'
import MessageWindow from '../components/Modals/MessageWindow.vue'
import LoadingScreen from '@/components/Containers/LoadingScreen.vue'

export default {
    name: "RecipeDetailsView",
    components: {
        TitleText,
        InputForm,
        AdditionalData,
        RecipeSummary,
        InstructionSteps,
        IngredientsData,
        CardsContainer,
        MessageWindow,
        LoadingScreen
    },
    data(){
        return {
            recipe_id: 0,
            recipe_details: [],
            ingredients: [],
            instructions: [],
            title: "",
            image_url: "",
            original_url: "",
            summary: "",
            additional_data: {
                glutenFree: Boolean,
                healthScore: Number,
                readyInMinutes: Number,
                servings: Number,
                veryHealthy: Boolean,
                vegan: Boolean,
                vegetarian: Boolean
            },

            // Data/Summary toggling management
            summaryVisible: false,
            additionalVisible: true,
            dataBtnDisabled: true,

            // Local Storage
            localStorageItems: [],
            saved: false,
            deleteBtnDisabled: false,
            messageWindowVisible: false,

            // Ingredients/Instructions toggling management
            instructionsVisible: true,

            instructionsButtonDisabled: true,

            // Window Width

            windowWidth: window.innerWidth,

            // Finished loading

            finishedLoading: false,

            // Basic Info for Saved RecipeBoxes

            basicInfo: {
                id: 0,
                title: "",
                image: ""
            }
        }
    },
    created(){
        this.recipe_id = this.$route.params.id
    },
    mounted(){
        // Call checkSaved
        if(localStorage.getItem("recipeIDs") !== null){
            this.checkSaved()
        }

        // Fetch Data
        axios.get("https://api.spoonacular.com/recipes/" + this.recipe_id + "/information?apiKey=" + process.env.VUE_APP_API_SPOONACULAR)
            .then(response => {

                this.recipe_details = response.data

                console.log(this.recipe_details)

                console.log(this.recipe_details.analyzedInstructions[0].steps)

                this.extractInstructions(this.recipe_details.analyzedInstructions[0].steps)

                this.ingredients = this.recipe_details.extendedIngredients
                this.constructTitle(this.recipe_details)
                this.image_url = this.recipe_details.image
                this.original_url = this.recipe_details.sourceUrl
                this.summary = this.recipe_details.summary

                this.extractAdditionalData(this.recipe_details)
                this.finishedLoading = true


                this.basicInfo.id = this.recipe_id,
                this.basicInfo.image = this.image_url
                this.basicInfo.title = this.title
            })

    },
    methods: {
        extractInstructions(details){
            this.instructions = details.map(step => ({
                instruction: step.step
            }))
            console.log(this.instructions)
        },
        constructTitle(details){
            this.title = details.title + " - recipe"
        },
        extractAdditionalData(details){
            this.additional_data.glutenFree = details.glutenFree
            this.additional_data.readyInMinutes = details.readyInMinutes
            this.additional_data.healthScore = details.healthScore
            this.additional_data.servings = details.servings
            this.additional_data.veryHealthy = details.veryHealthy
            this.additional_data.vegan = details.vegan
            this.additional_data.vegetarian = details.vegetarian
            this.additional_data.title = details.title
        },   

        // Toggle between summary and additional data

        toggle(){
            this.summaryVisible = !this.summaryVisible
            this.additionalVisible = !this.additionalVisible

            this.dataBtnDisabled = !this.dataBtnDisabled
        },


        saveRecipe(){
            if(localStorage.getItem("recipeIDs") == null){
                localStorage.setItem("recipeIDs", JSON.stringify([this.basicInfo]))
                console.log(localStorage.recipeIDs)
            } else {
                this.localStorageItems = JSON.parse(localStorage.getItem("recipeIDs"));
                this.localStorageItems.push(this.basicInfo)

                localStorage.setItem("recipeIDs", JSON.stringify(this.localStorageItems))

                console.log(localStorage.recipeIDs)
            }
            this.deleteBtnDisabled = true

            this.toggleSaved()
            this.toggleMessageWindow()
        },
        deleteRecipe(){
            this.localStorageItems = JSON.parse(localStorage.getItem("recipeIDs"))

            this.localStorageItems = this.localStorageItems.filter(item => item.id !== this.recipe_id)

            localStorage.setItem("recipeIDs", JSON.stringify(this.localStorageItems))

            this.toggleSaved()
        },

        // Recipe saved or unsaved

        toggleSaved(){
            this.saved = !this.saved
        },

        // When the page is loaded, immediately check if recipe with this ID is already saved
        checkSaved(){
            this.localStorageItems = JSON.parse(localStorage.getItem("recipeIDs"))
            
            this.localStorageItems.forEach((item) =>{
                item.id == this.recipe_id ? this.saved = true : this.saved = false
            })
            

        },
        // Manage the Message Window
        toggleMessageWindow(){
            this.messageWindowVisible = true

            setTimeout(() => {
                this.messageWindowVisible = false
                this.deleteBtnDisabled = false
            }, 2800);
        },


        showInstructions(){
            this.instructionsVisible = true
            this.instructionsButtonDisabled = true
        },
        showIngredients(){
            this.instructionsVisible = false
            this.instructionsButtonDisabled = false
        }
    }
}
</script>

<style lang="scss" scoped>

    @import "@/assets/global.scss";
    .container{
        width: 100%;
        @include flex-row();
        justify-content: space-between;
        margin: 20px 0;
        .column{
            flex-basis: 48%;
        }
        .column-1 img{
            border-radius: 40px;
            width: 100%;
            height: auto;
        }
        .column-2{
            .toggle-btns-container{
                @include flex-row();
                justify-content: space-between;
                .align-right{
                    @include flex-row();
                    justify-content: flex-end;
                    align-items: flex-end;
                }
            }
        }
    }

    .toggle-btn, .save-btn, .delete-btn{
        outline: none;
        border: none;
        font-size: 22px;
        background-color: $tertiary;
        border: $tertiary solid 3px;
        padding: 12px 18px;
        color: white;
        margin-right: 20px;
        cursor: pointer;
        border-radius: 14px;
        transition: background-color 0.4s;
        &:hover{
            background-color: $white;
            color: $tertiary;
            border-color: $white;
        }
    }
    .save-btn, .delete-btn{
        margin-right: 0;
    }
    .mobile-toggle-btns-container{
        width: 100%;
        margin: 20px 0;
    }

    // Media Queries 
    @media(max-width: 1024px){
        .container{
            @include flex-column();
            .column {
                width: 100%;
            }
            .column-1{
                margin-bottom: 20px;
            }
        }
    }

    @media(max-width: 584px){
        .mobile-toggle-btns-container{
            @include flex-row();
            justify-content: space-between;
            .instructions-btn, .ingredients-btn{
                width: 48%;
                margin-right: 0;
            }
        }

        .toggle-btn, .save-btn, .delete-btn{
            font-size: 18px;
        }
    }
    
</style>