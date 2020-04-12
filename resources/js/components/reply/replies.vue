<template>
    <div v-if="content">
        <reply v-for="(reply,index) in content"
               :key="reply.id"
               :index="index"
               :reply="reply"
        v-if="replies"
        ></reply>
    </div>
</template>
<script>
    import Reply from './reply'
    export default{
        props:['questionSlug','replies'],
        data(){
            return {
                content:this.replies
            }
        },
        components:{Reply},
        created(){
            this.listen()
        },
        methods:{
            listen(){
                EventBus.$on('newReply',(reply)=>{
                    this.content.unshift(reply)
                });

                EventBus.$on('deleteReply',(index)=>{
                    axios.delete(`/api/question/${this.questionSlug}/reply/${this.content[index].id}`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                    });

                    this.content.splice(index,1);
                });
            }
        }

    }
</script>
<style></style>