<template>
        <div class="box">
            <router-link :to="/recipe/ + id" class="link">
                <img :src="image" alt="image" v-show="!image_unavailable">
            </router-link>

            <router-link :to="/recipe/ + id" class="link">
                <div class="image-unavailable" v-show="image_unavailable">Image unavailable</div>
            </router-link>
            
            <div class="text-container">
                <h4>{{ title }}</h4>
                <button class="delete-recipe" @click="deleteRecipe" v-if="showDeleteIcon">
                    <FontAwesomeIcon icon="fa-solid fa-trash" />
                </button>
            </div>

        </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: "RecipeBox",
    props: {
        recipe: Object,
        image_link_ready: Boolean,
        showDeleteIcon: Boolean
    },
    data() {
        return {
            title: "",
            id: "",
            image: "",
            image_unavailable: false,
            imageObject: new Image(),
            biggerHeight: false,
            savedRecipes: [],
            allowedLength: 20
        };
    },
    created() {
        this.title = this.recipe.title;
        if (this.title.length > this.allowedLength) {
            this.title = this.title.slice(0, this.allowedLength) + "...";
        }
        this.id = this.recipe.id;
        this.image = this.recipe.image;
        // Check if API returned image for recipe
        if (this.image === undefined) {
            this.image_unavailable = true;
        }
        else {
            this.image_unavailable = false;
        }
        // Check if API returned full link for image 
        if (this.image_link_ready === false) {
            this.image = this.construct_image_link(this.image);
            this.imageObject.src = this.image;
            if (this.imageObject.naturalHeight > this.imageObject.naturalWidth) {
                this.biggerHeight = true;
            }
            else {
                this.biggerHeight = false;
            }
        }
    },
    methods: {
        construct_image_link(relative_path) {
            return "https://spoonacular.com/recipeImages/" + relative_path;
        },

        deleteRecipe(){
            this.savedRecipes = JSON.parse(localStorage.getItem("recipeIDs"))

            console.log(this.savedRecipes)
            console.log(this.id)

            this.savedRecipes = this.savedRecipes.filter(recipe => recipe.id !== this.id)

            if(this.savedRecipes.length === 0){
                this.savedRecipes = []
            
            } 

            localStorage.setItem("recipeIDs", JSON.stringify(this.savedRecipes))

            window.location.reload()
            
        
        }
    },
    components: { FontAwesomeIcon }
}
</script>

<style lang="scss" scoped>

    @import "@/assets/global.scss";
    $border-radius: 30px;

    .link{
        text-decoration: none;
    }
    .box{
        width: 100%;
        border-radius: $border-radius;
        margin-bottom: 20px;
        height: fit-content;
        .link{
            width: inherit;
        }
        img{
            width: inherit;
            height: auto;
            z-index: 10;
            border-radius: $border-radius;
        }
        .image-unavailable{
            width: 100%;
            height: 200px;
            background-color: $secondary;
            border-radius: $border-radius;
            @include flex-column();
            justify-content: center;
            align-items: center;
            color: $white;
        }
        .text-container{
            width: inherit;
            width: 100%;
            z-index: 20;
            @include flex-row();
            justify-content: space-between;
            align-items: center;
            h4{
                padding-top: 10px;
                color: $tertiary;
                font-size: 20px;
            }
            button {
                outline: 0;
                border: 0;
                padding: 10px;
                background-color: $tertiary;
                color: $primary;
                font-size: 15px;
                border-radius: 10px;
                cursor: pointer;
            }
        }
    }

    @media(max-width: 1024px){
        .box .text-container h4{
            font-size: 24px;
        }
    }
    @media(max-width: 768px){
        .box .text-container h4{
            font-size: 20px;
        }
    }
    
</style>