<template>
<v-container >

    <v-form @submit.prevent="update">
        <v-text-field
            v-model="form.title"
            type="text"
            label="Title"
            required
        ></v-text-field>

        <vue-simplemde v-model="form.body"  />
        <v-card-actions>
            <v-btn  small rounded type="submit">
                <v-icon color="green">mdi-thumb-up</v-icon>
            </v-btn>
            <v-btn  small rounded @click="cancel">
                <v-icon color="red">mdi-thumb-down</v-icon>
            </v-btn>
        </v-card-actions>
    </v-form>

</v-container>
</template>
<script>
    export  default {
        props:['question'],

        data(){
            return {
                form:{
                    title:null,
                    body:null
                }
            }
        },
        mounted (){
            this.form=this.question
        },
        methods:{
            cancel(){
                EventBus.$emit('cancelEditing');
            },

           async update(){
                await axios.put(`/api/question/${this.form.slug}`,this.form,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                });
                this.cancel();
            }
        }

    }
</script>
