<template>
    <v-card >
        <v-container fluid v-if="question">
        <v-card-title>
            <div>
                <div class="headline">{{question.title}} </div>
                <small class="grey--text">{{question.user}} said {{question.created_at}}</small>

            </div>
            <v-spacer></v-spacer>
            <v-btn color="teal" dark>{{question.reply_count}} replies</v-btn>
        </v-card-title>
            <v-card-text v-html="body" ></v-card-text>
            <v-card-actions v-if="owner">

                <v-btn class="ma-2" small rounded @click="edit">
                    <v-icon color="orange">mdi-wrench</v-icon>
                </v-btn>
                <v-btn class="ma-2"  small rounded @click="destroy">
                    <v-icon color="red">mdi-delete</v-icon>
                </v-btn>
                </v-card-actions>
        </v-container>

    </v-card>
</template>
<script>
    export default {
        props:['question'],
        data(){
            return {
                own:false
            }
        },
        computed:{
            body(){
                return md.parse(this.question.body)
            },
            owner(){
              return User.owner(this.question.user_id);
            },

    },

        methods:{
            destroy(){
                try {
                    axios.delete(`/api/question/${this.question.slug}`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                    });

                    this.$router.push('/forum')
                }catch(err){
                    if(err.response){
                        alert(err.response.data)
                    }else{
                        alert(err)
                    }
                }
            },
            edit(){
               EventBus.$emit('startEditing');

            }
        }


    }
</script>
