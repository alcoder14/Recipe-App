<template>
  <section class="section-width-100 secondary-bg">
    <div class="max-width-1400 container">
        <form class="form" @submit.prevent="handleSubmit">
            <input type="text" placeholder="What do you want to cook today?" class="input" v-model="input">
            <button class="submit" type="submit"><font-awesome-icon icon="fa-solid fa-search"/></button>
        </form>
    </div>
  </section>
</template>

<script>
export default {
    name: "InputForm",
    data(){
        return{
            input: ""
        }
    },
    methods:{
        handleSubmit(){
            this.$router.push({name: 'searched', params: {searchQuery: this.input}})
        }
    }
}
</script>

<style lang="scss" scoped>

    @import "@/assets/global.scss";
    $radius: 25px;
    .container{
        height: 300px;
        @include flex-column();
        justify-content: center;
        .form{
            @include flex-row();
            justify-content: center;
            .input{
                width: 60%;
                border-top-left-radius: $radius;
                border-bottom-left-radius: $radius;
                border: $text solid 2px;
                border-right: none;
            }
            .submit{
                width: 5%;
                border-top-right-radius: $radius;
                border-bottom-right-radius: $radius;
                background-color: $primary;
                color: $tertiary;
                cursor: pointer;
                transition: all 0.4s;
                border: $text solid 2px;
                border-left: none;
            }
            .submit:hover{
                background-color: $tertiary;
                color: $text;
            }
            .input, .submit{
                font-size: 25px;
                padding: 10px 14px;
            }
        }
    }

    @media(max-width: 1024px){
        .container{
            height: 250px;
            .form{
                .input{
                    width: 70%;
                }
                .submit{
                    width: 10%;
                }
                .input, .submit{
                    font-size: 20px;
                    padding: 8px 12px;
                }
            }
        }
    }

    @media(max-width: 768px){
        .container{
            height: 200px;
            .form{
                .input{
                    width: 75%;
                }
            }
        }
    }
    @media(max-width: 584px){
        .container{
            height: 150px;
            .form{ 
                .input{
                    width: 85%;
                    font-size: 18px;
                }
                .submit{
                    width: 15%;
                }
            }
        }
    }
    
</style>