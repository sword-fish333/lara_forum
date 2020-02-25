<template>
    <v-card>
        <v-container fluid v-if="question">
        <v-card-title>
            <div>
                <div class="headline">{{question.title}} </div>
                <small class="grey--text">{{question.user}} said {{question.created_at}}</small>

            </div>
            <v-spacer></v-spacer>
            <v-btn color="teal" class="white--text">5 replies</v-btn>
        </v-card-title>
            <v-card-text v-html="body" ></v-card-text>
            <v-card-actions v-if="owner">

                <v-btn class="ma-2" small rounded>
                    <v-icon color="orange">mdi-wrench</v-icon>
                </v-btn>
                <v-btn class="ma-2"  small rounded>
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


    }
</script>
