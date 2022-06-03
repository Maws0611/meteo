<template>
    <div class="container ">
        <div class="form-group mb-5">
            <label for="postion" class="text-light">Entrez le nom d'une ville</label>
            <input 
            type="text" 
            id="postion" 
            class="form-control"
            v-model="requete"
            v-on:keypress.enter="goMeteo">
            <!-- @keypress.enter="goMeteo"> -->
        </div>
            <!-- <div class="w-75 m-auto" v-if="temps">
                <h3 class="text-center pb-3">Postion: {{temps.name}} </h3>
                <div class="card p-5 text-center">
                    <p class="mt-5 text-affichage">Temperature: {{temps.main.temp.toFixe()}}</p>
                    <p class="mb-5">Temps: {{temps.weather[0].description}}</p>
                </div>
        </div> -->
        <div class="w-75 m-auto temps" >
                <h3 class="text-center text-light pb-3">Postion: Senegal </h3>
                <div class="card p-5 text-center">
                    <p class="mt-5 text-affichage">Temperature: 23</p>
                    <p class="mb-5 text-affichage">Temps: Nuageux</p>
                </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'MeteoApp',
        data(){
            return {
                requete: '',
                temps: undefined,
                api_key: '82edd23decf7edb7b0c5df34a5e42f90',
                api_url: 'https://api.openweathermap.org/data/2.5/weather?'
            }
        },
        methods: {
           
            goMeteo: function(){
                    axios
                .get(`${this.api_key}q=${this.requete}&units=metric&APPID=${this.api_url}&lang=fr`)
                .then(response=>{
                    console.log(response);
                    // this.temps= response.data
                })
                    this.requete=''
                }
        }
    }
</script>

<style scoped>
.temps{
visibility: 'hidden';
}
    .text-affichage{
        font-size: 30px;
    }
   
</style>