<template>
    <InputForm />
    <section class="section-width-100 primary-bg">
        <div class="max-width-1400" v-if="finishedLoading">
            <TitleText :title="title" />
            <ResultNumberManagement :resultsNumberTotal="resultsNumberTotal" @numberChanged="setRecipeNumber"/>
            <div class="box-container">
                <RecipeBox v-for="item in results" :key="item.id" :recipe="item" :image_link_ready="true"/>
            </div>
        </div>
        <div class="max-width-1400" v-if="!finishedLoading">
            <LoadingScreen text="Loading" />
        </div>
    </section>
</template>

<script>

import InputForm from '../components/Containers/InputForm.vue'
import RecipeBox from '@/components/Elements/RecipeBox.vue'
import TitleText from '@/components/Elements/TitleText.vue'
import ResultNumberManagement from '@/components/Elements/ResultNumberManagement.vue'
import LoadingScreen from '@/components/Containers/LoadingScreen.vue'
import axios from 'axios'

export default {
    name: "RecipeSearchView",
    components: {
        InputForm,
        RecipeBox,
        TitleText,
        ResultNumberManagement,
        LoadingScreen
    },
    data(){
        return{
            searchQuery: "",
            api_link: "https://api.spoonacular.com/recipes/complexSearch?apiKey=",
            api_key: process.env.VUE_APP_API_SPOONACULAR,
            full_link: "",
            results: [],
            title: "",
            resultsNumberTotal: 0,
            resultsNumberSet: 20,
            finishedLoading: false
        }
    },
    mounted(){
        this.searchQuery = this.$route.params.searchQuery
        this.constructLink()
        this.constructTitle()
        this.fetchData()
    },
    methods: {
        constructLink(){
            this.full_link = this.api_link + this.api_key + "&query=" + this.searchQuery + "&number=" + this.resultsNumberSet
        },
        constructTitle(){
            this.title = "Searched: " + this.searchQuery 
        },
        fetchData(){
            axios.get(this.full_link)
            .then(response =>{
                console.log(response.data)
                this.results = response.data.results
                this.resultsNumberTotal = response.data.totalResults
                this.finishedLoading = true
                console.log(this.resultsNumberTotal)
            })
        },
        // When user changes a number of visible recipes
        setRecipeNumber(value){
            this.resultsNumberSet = value
            this.constructLink()
            this.fetchData()
        }
    }
}
</script>

<style scoped>
</style>