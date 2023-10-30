
<template>
    <span class="blockSpan">
        <div class="header">
            <h3>Recipes</h3>
        </div>
        <div class="image">
            <img src="/svgs/cooking.svg" alt="">
        </div>
        <div class="text">
            <p>TasteTrove API comes with a diverse selection of cuisines and more items get added regularily</p>
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
    width: 90%;
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
@media only screen and (min-width: 770px){
    .blockSpan{
    >.text{
        >p{
        }
    }
    >.image{
        >img{
        }
    }
    >.header{
        >h3{
        }
    }
}    
}
@media only screen and (min-width: 1024px){
    .blockSpan{
        width: 70%;
        >.text{
        >p{
        }
    }
    >.image{
        >img{
        }
    }
    >.header{
        >h3{
        }
    }
}
}
</style>


