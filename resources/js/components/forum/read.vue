<template>
    <div >
        <edit-question :question="question" v-if="editing"></edit-question>
        <div v-else>
            <show-question :question="question"></show-question>
   <v-container v-if="question">
            <replies :questionSlug="question.slug" :replies="question.replies"></replies>
        <new-reply :questionSlug="question.slug"></new-reply>
   </v-container>
        </div>

    </div>
</template>

<script>
    import ShowQuestion from "./showQuestion";
    import EditQuestion from "./editQuestion";
    import Replies from '../reply/replies.vue';
    import NewReply from '../reply/newReply.vue';

    export default {
        components: {ShowQuestion,EditQuestion,Replies,NewReply},
        data(){
            return{
                question:null,
                editing:null
            }
        },
          created() {
            this.listen();
            this.getQuestion();
        },
        methods:{
            listen(){
                EventBus.$on('startEditing',()=>{
                   this.editing=true;
                })

                EventBus.$on('cancelEditing',()=>{
                 this.editing=false;
                })
            },
            async  getQuestion(){
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
            }
        },

    }
</script>
