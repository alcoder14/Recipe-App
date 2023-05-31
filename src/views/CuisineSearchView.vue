<template>
    <InputForm/>
    <section class="section-width-100 primary-bg">
        <div class="max-width-1400">
            <TitleText :title="page_title" v-if="finishedLoading" />
            <ResultNumberManagement :resultsNumberTotal="resultsNumberTotal" @numberChanged="setRecipeNumber"/>
            <div class="box-container">
                <RecipeBox v-for="item in cuisine_items" :key="item.id" :recipe="item" :image_link_ready="false"/>
            </div>
        </div>
        <div class="max-width-1400" v-if="!finishedLoading">
            <LoadingScreen text="Loading" />
        </div>
    </section>
</template>

<script>

import axios from 'axios';
import InputForm from '@/components/Containers/InputForm.vue';
import RecipeBox from '@/components/Elements/RecipeBox.vue';
import TitleText from '@/components/Elements/TitleText.vue';
import ResultNumberManagement from '@/components/Elements/ResultNumberManagement.vue';
import LoadingScreen from '@/components/Containers/LoadingScreen.vue';

export default {
    name: "CuisinesSearchView",
    components: {
        InputForm,
        RecipeBox,
        TitleText,
        ResultNumberManagement,
        LoadingScreen
    },
    data(){
        return{
            countryNameQuery: "",
            cuisine_items: [],
            page_title: "",
            resultsNumberTotal: 0,
            resultsNumberSet: 20,
            finishedLoading: false
        }
    },

    mounted(){
        this.countryNameQuery = this.$route.params.countryName

        this.constructTitle()
        this.fetchData()
    },

    methods: {
        constructTitle(){
            this.page_title = "Searched: " + this.countryNameQuery + " cuisine"
        },
        fetchData(){
            axios.get("https://api.spoonacular.com/recipes/search?cuisine=" + this.countryNameQuery + "&apiKey=" + process.env.VUE_APP_API_SPOONACULAR + "&number=" + this.resultsNumberSet)
                .then(response => {
                    this.finishedLoading = true
                    this.cuisine_items = response.data.results
                    this.resultsNumberTotal = response.data.totalResults
                    console.log(this.cuisine_items)
                })
        },

        setRecipeNumber(value){
            this.resultsNumberSet = value 
            this.constructTitle()
            this.fetchData()
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/global.scss";
</style>