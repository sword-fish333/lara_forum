<template>
<div class="mt-4">
    <v-card>
        <v-card-title>
            <div class="headline">username</div>
            <div >&nbsp;said {{reply.created_at}}</div>
        </v-card-title>
        <v-divider></v-divider>
        <edit-reply  :reply="reply" v-if="editing"></edit-reply>
        <v-card-text  v-else v-html="replyInput"></v-card-text>
        <div v-if="!editing">
        <v-card-actions v-if="own">
            <v-btn color="green" small dark @click="edit()"> Edit</v-btn>
            <v-btn color="red" small dark @click="destroy()">Delete</v-btn>
        </v-card-actions>
        </div>
    </v-card>
</div>
</template>
<script>
    import EditReply from './editReply.vue';
    export default{
        props:['reply','index'],
        components:{EditReply},
        data(){
            return {
                editing:false,
                beforeEditReply:''
            }
        },
        created(){
            this.listen()
        },
        computed:{
            own() {
                return User.owner(this.reply.user_id)
            },
            replyInput(){
                return md.parse(this.reply.reply)
            }
        },
        methods:{
            destroy(){
                EventBus.$emit('deleteReply',this.index)
            },
            edit(){
                this.editing=true,
                    this.beforeEditReply=this.reply.reply
            },
            listen(){
                EventBus.$on('cancelEditing',()=>{
                    this.editing=false,
                        this.reply.reply=this.beforeEditReply
                })
            }
        }
    }
</script>
<style></style>