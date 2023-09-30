
<template>
    <span class="DocsSpan">
        <div class="textContainer">
            <p>API keys</p>
            <p>GET by Cuisine</p>
            <p>GET by Name</p>
            <p>GET by ID</p>
            <p>GET Random</p>
            <p>GET by Nutrition</p>
            <p>GET by isHealthy</p>
            <p>GET Instructions</p>
        </div>
    </span>
</template>

<script>
    export default {
        components:{

        },

        data() {
            return {
                
            }
        },

        methods:{

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
    }
}
</style>


