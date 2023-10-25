
<template>
    <span class="generateSpan">
        <div class="generateButton">
            <p @click="generateKey">
                Generate Key
            </p>
        </div>
        <div class="generatedDisplay" v-if="key !== undefined">
            <h3>Your key:</h3>
            <p>{{ key }}</p>
        </div>
    </span>
</template>

<script>
import axios from 'axios';
import Cookies from 'vue-cookies';
    export default {
        components:{

        },

        data() {
            return {
                key : undefined    
            }
        },

        methods:{
            generateKey(){
                let sessionInfo = Cookies.get('clientSession'); 
                axios({
                    url:`https://tastetroveapi.cameron-ord.online/api/generateKey`,
                    method: 'POST',
                    data:{
                        client_id: sessionInfo[0]['client_id'],
                        token: sessionInfo[0]['session_token']
                    }
                }).then((response)=>{
                    this.key = response['data'][0]['apiKey'];
                }).catch((error)=>{
                    error;
                });
            }
        },
        computed:{

        },
        created(){

        },
        mounted(){

        },
        beforeMount(){

        },
        beforeUpdate(){

        },
        updated(){

        },
        beforeUnmount(){

        },
        unmounted(){

        }

    }
</script>

<style lang="scss" scoped>

</style>


