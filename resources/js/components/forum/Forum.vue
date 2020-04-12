<template>
  <v-container fluid grid-list-md>
      <v-layout row wrap>
          <v-flex xs8>
              <question v-for="question in questions"
                        :key="question.path"
              :question="question"
              ></question>
          </v-flex>
       <v-flex xs4>
        <app-sidebar></app-sidebar>
       </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
    import question  from "./question";
    import AppSidebar  from "./AppSidebar";

    export default {
        data(){
            return {
                questions:[]
            }
        },
        components:{
            question,
            AppSidebar
        },
       async created() {
            if(!User.loggedIn()){
                this.$router.push('/login');
            }
           try{
            const res=await axios.get('/api/question');
            this.questions=res.data.data;
        }catch(err){
           console.log(err.response.data)
           }
        }
    }
</script>
<style>

</style>
