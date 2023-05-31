<template>
    <table class="data-table">
        <tr>
            <td>Title</td>
            <td>{{ details.title }}</td>
        </tr>
        <tr>
            <td>Ready in</td>
            <td>{{ details.readyInMinutes }} minutes</td>
        </tr>
        <tr>
            <td>Servings</td>
            <td>{{ details.servings }}</td>
        </tr>
        <tr>
            <td>Vegetarian</td>
            <td>{{ vegetarian }}</td>
        </tr>
        <tr>
            <td>Vegan</td>
            <td>{{ vegan }}</td>
        </tr>
        <tr>
            <td>Very healthy: </td>
            <td>{{ veryHealty }}</td>
        </tr>
        <tr>
            <td>Gluten</td>
            <td>{{ gluten }}</td>
        </tr>
        <tr>
            <td>HealthScore</td>
            <td>{{ details.healthScore }}</td>
        </tr>
    </table>
</template>

<script>
export default {
    name: "AdditionalData",
    props: {
        details: Object
    },
    data(){
        return{
            gluten: "",
            vegetarian: "",
            vegan: "",
            veryHealty: ""
        }
    },
    mounted(){
        console.log(this.details)

        this.details.glutenFree ? this.gluten = "No" : this.gluten = "Yes"

        this.details.vegetarian ? this.vegetarian = "Yes" : this.vegetarian = "No"

        this.details.vegan ? this.vegan = "Yes" : this.vegan = "No"
        
        this.details.veryHealty ? this.veryHealty = "Yes" : this.veryHealty = "No"
    }
}
</script>

<style lang="scss" scoped>

    @import "@/assets/global.scss";
    .data-table{
        width: 100%;
        margin-top: 20px;
        border-collapse: collapse;
        tr:nth-child(odd){
            background-color: $primary;
        }
        tr:nth-child(even){
            background-color: $secondary;
        }
        tr{
            border: none;
        }
        td{
            font-size: 18px;
            color: $white;
            padding: 10px;
        }
    }
    
</style>