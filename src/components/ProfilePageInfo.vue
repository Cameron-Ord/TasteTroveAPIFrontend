
<template>
    <span class="profInfo" v-if="profileInfo !== undefined">
        <div class="welcomeDiv">
            <h1 class="profileUsername">Welcome, {{ profileInfo[0]['username'] }}</h1>
        </div>
        <div class="profileInfo">
            <h4 class="profileEmail"> Email : {{ profileInfo[0]['email'] }}</h4>
            <h4 class="profileMember"> Member since : {{profileInfo[0]['created_at']}} </h4>
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
                profileInfo: undefined
            }
        },

        methods:{
            getUsrInfo(){
                let sessionInfo = Cookies.get('clientSession'); 
                axios({
                    url: `https://tastetroveapi.cameron-ord.online/api/getClientInfo`,
                    method: 'GET',
                    params:{
                        client_id: sessionInfo[0]['client_id']
                    }
                }).then((response)=>{
                    this.profileInfo = [];
                    for(let c = 0; c<response['data'].length; c++){
                        this.profileInfo.push(response['data'][c]);
                    }
                }).catch((error)=>{
                    error;
                })
            }
        },
        computed:{

        },
        created(){
            this.getUsrInfo();
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
.profInfo{
    display: grid;
    justify-items: center;
    align-items: center;
    grid-auto-flow: row;
    row-gap: 25px;
    >.profileInfo{
        display: grid;
        justify-items: center;
        text-align: center;
        grid-auto-flow: row;
        row-gap: 15px;
        
        >h4{

        }
    }
    >.welcomeDiv{
        display: grid;
        justify-items: center;
        text-align: center;
        >h1{

        }
    }
}
</style>


