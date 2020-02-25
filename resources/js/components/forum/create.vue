<template>
<v-container>
    <v-form @submit.prevent="create"
            ref="form"
            lazy-validation
    >


        <v-text-field
            v-model="form.title"
            type="text"
            label="Title"
            required
        ></v-text-field>



                    <v-select
                        :items="categories"
                        item-text="name"
                        item-value="id"

                        v-model="form.category_id"
                        label="Category"
                        autocomplete
                    ></v-select>
        <vue-simplemde v-model="form.body"  />


        <v-btn color="green" type="submit" class="white--text">Create</v-btn>

    </v-form></v-container>
</template>

<script>
    export default{
            data(){
                return {
                    form:{
                        title:null,
                        category_id:null,
                        body:null
                    },
                    categories:[]
                }
            },

        async created(){
              try{
                  const res=await axios.get('/api/category');
                this.categories=res.data.data;
              }  catch(err){
                  if(err.response){
                      console.log(err.response.data);
                  }else{
                      console.log(err)
                  }
              }
        },

        methods:{
                async create(){
                    try {
                        const res = await axios.post('/api/question',this.form,{
                            headers:{
                                'Content-Type': 'application/json',
                               'Authorization': `Bearer ${localStorage.getItem('token')}`
                            },
                        });
                        console.log('res',res);
                        this.$router.push(res.data.path);

                    }catch(err){
                        if(err.response){
                            alert(err.response.data.error)

                        }else{
                            console.log(err);
                        }
                    }
                    },
            customFilter(){}
        }
    }
</script>
<style>

</style>
