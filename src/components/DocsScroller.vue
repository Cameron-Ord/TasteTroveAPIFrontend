
<template>
    <span class="DocsSpan">
        <div class="textContainer">
            <p @click="goToSelection(this.$refs.keys)" ref="keys" class="scrollerText">API keys</p>
            <p @click="goToSelection(this.$refs.cuisine)" ref="cuisine" class="scrollerText">GET by Cuisine</p>
            <p @click="goToSelection(this.$refs.name)" ref="name" class="scrollerText">GET by Name</p>
            <p @click="goToSelection(this.$refs.id)" ref="id" class="scrollerText">GET recipe ID</p>
            <p @click="goToSelection(this.$refs.healthy)" ref="healthy" class="scrollerText">GET by isHealthy</p>
            <p @click="goToSelection(this.$refs.instructions)" ref="instructions" class="scrollerText">GET Instructions</p>
            <p @click="goToSelection(this.$refs.nutrition)" ref="nutrition" class="scrollerText">GET Nutrition</p>
        </div>
    </span>
</template>

<script>
import Cookies from 'vue-cookies';
    export default {
        components:{

        },

        data() {
            return {
                
            }
        },

        methods:{
            goToSelection(ref){
                Cookies.remove('docsGoto');
                Cookies.set('docsGoto', ref.textContent.replace(/ /g, "_"));
                this.$emit('showChoice');
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
.DocsSpan{
    display: grid;
    align-items: center;
    width: 100%;
    >.textContainer{
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(150px,1fr));
        grid-auto-flow: row;
        row-gap: 15px;
    }
}
</style>


