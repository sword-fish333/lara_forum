<template>
<show-question :question="question"></show-question>
</template>

<script>
    import ShowQuestion from "./showQuestion";
    export default {
        components: {ShowQuestion},
        data(){
            return{
                question:null
            }
        },
        async created() {
            try{
                const res=await axios.get(`/api/question/${this.$route.params.slug}`);
                this.question=res.data.data;
            }catch(err){
                if(err.response){
                    console.log(err.response.data)
                }else{
                    console.log(err)

                }
            }
        console.log(this.question);
        }
    }
</script>
