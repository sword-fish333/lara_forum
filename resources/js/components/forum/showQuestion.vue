<template>
    <v-card>
        <v-container fluid>
        <v-card-title>
            <div>
                <div class="headline">{{data.title}} </div>
                <small class="grey--text">{{data.user}} said {{data.created_at}}</small>

            </div>
            <v-spacer></v-spacer>
            <v-btn color="teal" class="white--text">5 replies</v-btn>
        </v-card-title>
            <v-card-text v-html="data.body"></v-card-text>
        </v-container>
    </v-card>
</template>
<script>
    export default {
        props:['data']
    }
</script>
