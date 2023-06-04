<template>
    <section :class="{'primary-bg': isOdd, 'secondary-bg': !isOdd}" class="section-width-100 height">
        <div class="max-width-1400" :class="{'disable-padding': disablePadding}" v-if="finishedLoading">
            <TitleText :title="titleText" />
            <div class="box-container">
                <RecipeBox v-for="item in items" :key="item.id" :recipe="item" :image_link_ready="true"/>
            </div>
        </div>
        <div class="max-width-1400" v-if="!finishedLoading">
            <LoadingScreen text="Loading meals" />
        </div>
    </section>
</template>

<script>


import TitleText from '../Elements/TitleText.vue';
import RecipeBox from '../Elements/RecipeBox.vue';
import LoadingScreen from './LoadingScreen.vue';

import axios from 'axios'

export default {
    name: "CardsContainer",
    components: {
        TitleText,
        RecipeBox,
        LoadingScreen
    },
    props:{
        isOdd: Boolean,
        titleText: String,
        requestType: String,
        query: String,
        limit: Number,
        similar_recipes_id: Number,
        disablePadding: Boolean
    },
    data(){
        return{
            api_link: "https://api.spoonacular.com/recipes/",
            api_key: process.env.VUE_APP_API_SPOONACULAR,
            constructed_api_link: "",
            items: [],
            finishedLoading: false
        }
    },
    computed: {
        preparedLink(){
            return this.constructLink()
        }
    },
    methods: {
        constructLink(){

            // Link types: complexSearch, random, similar
            
            if(this.similar_recipes_id !== undefined){
                // Link for similar recipes 
                this.constructed_api_link = this.api_link + this.similar_recipes_id + "/similar?apiKey=" + this.api_key
            } else {
                // link for other recipes (random, complexSearch)
                this.constructed_api_link = this.api_link + this.requestType + "?apiKey=" + this.api_key
            }

            // Add query parameter if link is complexSearch
            if(this.requestType == "complexSearch"){
                this.constructed_api_link += "&query=" + this.query
            }

            this.constructed_api_link += "&number=" + this.limit

            return this.constructed_api_link

        }
    },
    mounted(){
        axios.get(this.preparedLink)
            .then(response => {
                if(this.requestType == "random"){
                    this.items = response.data.recipes
                } else if(this.requestType == "complexSearch"){
                    this.items = response.data.results
                } else {
                    this.items = response.data
                }
                this.finishedLoading = true
                console.log(response.data)

            })
            .catch(error =>{
                console.log(error)
            })
        
    }
}
</script>

<style lang="scss" scoped>

    @import "@/assets/global.scss";

    .height{
        height: fit-content;
    }
    .disable-padding{
        padding: 0;
    }
    
</style>