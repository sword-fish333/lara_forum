<template>
    <v-card
    class="mt-2"
    >

        <v-card-title>
            <div>
                <h3  class="headline mb-0">
                    <router-link :to="question.path">
                    {{question.title}}
                    </router-link>
                </h3>
                <small  class="grey--text">
                    {{question.user}}
                        said
                    {{question.created_at}}</small>
            </div>
        </v-card-title>

        <v-card-text class="text--primary">
           {{question.body}}
        </v-card-text>


    </v-card>
</template>
<script>
    export default{
        props:['question']
    }
</script>
