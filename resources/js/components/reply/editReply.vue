<template>
    <div class="my-5">
    <vue-simplemde v-model="reply.reply" />
    <v-card-actions  style="margin-top:10px">
        <v-btn color="green" small dark @click="update()"> Save</v-btn>
        <v-btn color="red" small dark @click="cancel()">Cancel</v-btn>
    </v-card-actions>
    </div>
</template>
<script>
    export default {
    props:['reply'],
        methods:{
        cancel(){
            EventBus.$emit('cancelEditing')

        },
           async update(){
               try{
                   const res = await axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`,{body:this.reply.reply},{
                       headers:{
                           'Content-Type': 'application/json',
                           'Authorization': `Bearer ${localStorage.getItem('token')}`
                       },
                   });
                this.cancel();
               }catch(err){
                   console.log(err)
               }
        }
        }
    }
</script>