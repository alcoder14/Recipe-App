<template>
  <div class="row-container">
    <div class="results-number-container block">
        <h5 class="results-row-text">Total: {{ this.resultsNumberTotal }} recipes </h5>
    </div>
    <div class="results-settings-container block">
        <h5 class="results-row-text">Showing </h5>
        <select v-model="chosenOption" @change="emitEvent" class="dropdown">
            <option value="20">20</option>
            <option value="36">36</option>
            <option value="48">48</option>
            <option value="72">72</option>
        </select>
        <h5 class="results-row-text"> recipes</h5>
    </div>
  </div>
</template>

<script>
export default {
    name: "ResultNumberManagement",
    props: {
        resultsNumberTotal: Number
    },
    data(){
        return {
            chosenOption: 20
        }
    },
    methods: {
        emitEvent(){
            console.log(this.chosenOption)
            this.$emit("numberChanged", this.chosenOption)
        }
    }
}
</script>

<style lang="scss" scoped>

    @import "@/assets/global.scss";

    .row-container{
        @include flex-row();
        width: 100%;
        position: sticky;
        top: 0;
        padding: 10px 0;
        background-color: $primary;
        .block{
            width: 50%;
            @include flex-row();
        }
        .results-number-container{
            justify-content: flex-start;
            padding: 10px 0;
            font-size: 24px;
        }
        .results-settings-container{
            justify-content: flex-end;
            align-items: center;
            font-size: 24px;
            .dropdown{
                font-size: 24px;
                margin: 0 20px;
                outline: none;
            }
        }
        .results-row-text{
            color: $tertiary;
        }
    }

    @media(max-width: 768px){
        .row-container .results-settings-container .dropdown{
            margin: 0 10px;
            font-size: 18px;
        }   
    }

    @media(max-width: 525px){
        .row-container{
            @include flex-column();
            .results-settings-container{
                justify-content: flex-start;
            }
            .block{
                width: 100%;
            }
        }
    }
    
</style>