<script>
    export default {
        data(){
            return{
                text : "votre text s'affichera ici.",
                count : 0,
                show : false,
                backgroundColor : "white",
                items : [
                    {id : 1, message : "Je suis"},
                    {id : 2, message : "Tu es"},
                    {id : 3, message : "Il/Elle est"},
                    {id : 4, message : "Nous sommes"},
                    {id : 5, message : "Vous ètes"},
                    {id : 6, message : "Ils/Elles sont"},
                ],
                object : {
                    name : "Koto",
                    age : 22,
                    language : "python"
                }
            }
        },
        methods : {
            handleClick () {

                this.count += 1;
                // console.log("[UI] show :  ",this.show)    
            },
            handleChange(e){
                this.text = e.target.value
                console.log(e.target.value)
            },
            handleNightMode(){
                this.show = !this.show
                console.log('[UI] night mode set to', this.show)
            }
        }
    }
</script>

<template>
    <div :class="[{night : show}, {ft : show} ]">
        <HomeView/>
        <HomeInput :handleChange="handleChange" :text="text" />
        <HomeButtonCounter :count="count" :CounterHandler="handleClick"/>
        <HomeButtonNightMode  :handleNightMode="handleNightMode"/>
        <HomeListArray :items="items" />
        <HomeListObject :object="object" />
    </div>
</template>