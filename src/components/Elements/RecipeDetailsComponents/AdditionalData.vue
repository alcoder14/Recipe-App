<template>
    <table class="data-table">
        <tr>
            <th>Title</th>
            <td>{{ details.title }}</td>
        </tr>
        <tr>
            <th>Ready in</th>
            <td>{{ details.readyInMinutes }} minutes</td>
        </tr>
        <tr>
            <th>Servings</th>
            <td>{{ details.servings }}</td>
        </tr>
        <tr>
            <th>Vegetarian</th>
            <td>{{ vegetarian }}</td>
        </tr>
        <tr>
            <th>Vegan</th>
            <td>{{ vegan }}</td>
        </tr>
        <tr>
            <th>Very healthy: </th>
            <td>{{ veryHealty }}</td>
        </tr>
        <tr>
            <th>Gluten</th>
            <td>{{ gluten }}</td>
        </tr>
        <tr>
            <th>HealthScore</th>
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
            padding: 10px;
        }
        th{
            color: $tertiary;
            text-align: left;
            padding-left: 20px;
        }
        td:nth-child(even){
            color: $text;
        }
    }
    
</style>