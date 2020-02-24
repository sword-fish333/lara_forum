<template>
    <v-container>
        <v-form @submit.prevent="signup"
                ref="form"
                lazy-validation
        >

            <v-text-field
                v-model="form.name"
                type="text"
                label="Name"
                required
            ></v-text-field>
            <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>
            <v-text-field
                v-model="form.email"
                type="email"
                label="E-mail"
                required
            ></v-text-field>
            <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>
            <v-text-field
                v-model="form.password"
                type="password"
                label="Password"
                required
            ></v-text-field>
            <span class="red--text" v-if="errors.password">{{errors.password[0]}}</span>

            <v-text-field
                v-model="form.password_confirmation"
                type="password"
                label="Password confirmation"
                required
            ></v-text-field>
            <span class="red--text" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</span>

            <v-btn color="green" type="submit">Sign up</v-btn>
            <router-link to="/login">

                <v-btn color="blue" type="submit">Login</v-btn>
            </router-link>
        </v-form>
    </v-container>
</template>
<script>
    export default {
        data(){
            return {
                form:{
                    email:null,
                    password:null,
                    name:null,
                    password_confirmation:null
                },
                errors:{}
            }
        },
        created(){
            if(User.loggedIn()){
                this.$router.push({name:'forum'})
            }
        },
            methods:{
              async  signup(){
                    try {
                        const res = await axios.post('/api/auth/signup', this.form);

                        User.responseAfterLogin(res.data);
                        this.$router.push({name:'forum'});
                    }catch(err){
                      this.errors=err.response.data.errors;

                    }
                console.log('this.errors',this.errors);
                }
            }
    }
</script>
