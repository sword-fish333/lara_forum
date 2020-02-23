<template>
    <v-container>
    <v-form
        ref="form"
        lazy-validation
    >


        <v-text-field
            v-model="form.email"
            type="email"
            label="E-mail"
            required
        ></v-text-field>

        <v-text-field
            v-model="form.email"
            type="password"
            label="Password"
            required
        ></v-text-field>

        <v-btn color="green" submit>Login</v-btn>
    </v-form>
    </v-container>
</template>

<script>
    export  default {

        data(){
            return {
                form:{
                    email:null,
                    password:null
                }
            }
        }

    }
</script>
<style>

</style>
