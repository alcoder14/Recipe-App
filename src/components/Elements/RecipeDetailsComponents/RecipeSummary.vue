<template>
  <div class="summary-container" v-html="textPrepared">
  </div>
</template>

<script>
export default {
    name: "RecipeSummary",
    props: {
        summary: String
    },
    data(){
        return {
            substringIndex: Number,
            textPrepared: String
        }
    },
    mounted(){
        this.cutText()
    },
    methods: {
        cutText(){
            this.substringIndex = this.summary.indexOf("If you like this recipe")
            this.textPrepared = this.summary.slice(0, this.substringIndex - 1)
            console.log(this.textPrepared)
        }
    }
}
</script>

<style lang="scss" scoped>

    @import "@/assets/global.scss";
    .summary-container{
        margin-top: 20px;
        color: $white;
        font-size: 20px;
        a{
            color: $tertiary;
        }
    }
    
</style>