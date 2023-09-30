
<template>
    <span class="blockSpan">
        <div class="header">
            <h3>Nutrition</h3>
        </div>
        <div class="image">
            <img src="/svgs/nutrition.svg" alt="">
        </div>
        <div class="text">
            <p>Always know what you're eating, TasteTroveAPI has got you covered with each recipes nutritional data.</p>
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
.blockSpan{
    align-items: center;
    display: grid;
    grid-auto-flow: row;
    row-gap: 25px;
    >.text{
        display: grid;
        justify-items: center;
        >p{
            padding: 5px;
            background-color: var(--bg);
            border-radius: 5px;
            font-weight: 700;
            color: var(--highlight);
            width: 75%;
            text-align: center;
        }
    }
    >.image{
        justify-items: center;
        display: grid;
        >img{
           
            background-color: var(--bg);
            border-radius: 25%;
            width: 100px;
        }
    }
    >.header{
        display: grid;
        justify-items: center;
        >h3{
            color: var(--bg);
            background-color: var(--dark);
            border-radius: 5px;
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 8px;
            padding-right: 8px;
            text-align: center;
        }
    }
}
</style>


