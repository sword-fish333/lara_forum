<template>
<div class="mt-4">
    <vue-simplemde v-model="body"   />
    <v-btn color="green" dark @click="submit()">
        Done
    </v-btn>
</div>
</template>
<script>
    export default{
        props:['questionSlug'],
        data(){
            return {
                body:null
            }
        },
        methods:{
           async submit(){
                try{
                    const res = await axios.post(`/api/question/${this.questionSlug}/reply`,{body:this.body},{
                        headers:{
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                    });
                    this.body=''
                    EventBus.$emit('newReply',res.data.reply);
                    window.scrollTo({
                        top: 400,
                        behavior: 'smooth',
                    });
                }catch(err){
                    console.log(err)
                }
            }
        }
    }
</script>
<style></style>