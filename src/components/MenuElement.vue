
<template>
    <div>
       <div class="dropDown">
        <h2 @click="showMenu(this.$refs.menuBox)" dropDownButton ref="icon" class="icon">Nav</h2>
        <div class="menuBox" ref="menuBox" dropdown>
            <div class="menuContent">
                <div class="contentWrapper">
                    <div class="menuSubHeader">
                        <h4>Docs</h4>
                    </div>
                    <div class="menuText">
                        <p class="menuTag">API keys</p>
                        <p class="menuTag">How to use</p>
                        <p class="menuTag">Usage policy</p>
                    </div>
                </div>
                <div class="contentWrapper">
                    <div class="menuSubHeader">
                        <h4>Account</h4>
                    </div>
                    <div class="menuText">
                        <p class="menuTag">Login</p>
                        <p class="menuTag">Signup</p>
                        <p class="menuTag">About</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
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


            showMenu(ref){

                const isDropdownButton = this.$refs.icon.matches('[dropDownButton]')
                console.log(isDropdownButton)
                if(!isDropdownButton && ref.closest('[dropdown]') != null) return

                let currentDropdown;
                if(isDropdownButton) {
                    currentDropdown = ref.closest('[dropdown]');
                    currentDropdown.classList.toggle('isActive');
                }
                document.querySelectorAll('[dropdown].isActive').forEach(dropdown => {
                    if(dropdown === currentDropdown) return
                    dropdown.classList.remove('isActive')
                })
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
.dropDown{
    position: relative;

    >.icon{
        color: var(--dark);
        cursor: pointer;
    }
    >.menuBox{
        width: 125px;
        position: absolute;
        left: 0;
        top: calc(100% + 0.75rem);
        background-color: var(--bg);
        padding: 0.75em;
        border-radius: 5px;
        pointer-events: none;
        opacity: 0;
        transform: translateY(-10px);
        transition: 0.3s ease-in-out;

        >.menuContent{
            display: grid;
            grid-auto-flow: row;
            row-gap: 25px;

            >.contentWrapper{
                display: grid;
                    
                >.menuText{
                    display: grid;
                    align-items: center;
                    >.menuTag{
                        margin-top: 5px;
                        margin-bottom: 5px;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        padding-left: 8.5px;
                        padding-right: 8.5px;
                        cursor: pointer;
                        color: var(--highlight);
                        font-weight: 500;
                    }
                }
                >.menuSubHeader{
                    display: grid;
                    align-items: center;
                    text-align: center;
                    >h4{
                        color: var(--bg);
                        background-color: var(--dark);
                        border-radius: 5px;
                        margin-bottom: 5px;
                        padding-left: 7.5px;
                        padding-right: 7.5px;
                        padding-top: 5.5px;
                        padding-bottom: 5.5px;

                    }
                }
            }
        }
    }

    >.menuBox.isActive{
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);
        transition: 0.3s ease-in-out;
    }
}
</style>


