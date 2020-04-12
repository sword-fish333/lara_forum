<template>
<v-container>
    <v-form  @submit.prevent="submit">
        <v-text-field
        label="Category"
        v-model="form.name"
        required
        >

        </v-text-field>
        <v-btn type='submit' color="pink" class="white--text" v-if="form.editSlug">Update</v-btn>
        <v-btn type='submit' color="teal" class="white--text" v-else>Create</v-btn>

    </v-form>
    <v-card class="mt-4">
        <v-toolbar  color="indigo" dark dense>
            <v-toolbar-title>Categories </v-toolbar-title>
        </v-toolbar>
            <v-list two-line subheader>

                <v-list-item
                    v-for="(category,index) in categories"
                    :key="category.id"
                    @click=""
                >

                    <v-list-item-action>
                        <v-btn icon small color="green" @click="edit(index)">
                          Edit
                        </v-btn>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title v-text="category.name"></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-btn icon small @click="destroy(category.slug,index)">
                            <v-icon color="red">mdi-delete</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>

            </v-list>
    </v-card>
</v-container>
</template>
<script>
    export default {
        data(){
            return {
                form:{
                    name:null
                },
                categories:{},
                editSlug:null
            }
        },
        async created() {
                if(!User.admin()){
                    this.$router.push('/forum');
                }
                const res=await axios.get('/api/category');
                this.categories=res.data.data;

        },
        methods:{
           async submit(){
               this.form.editSlug ? this.update() : this.create()


            },
            async destroy(slug,index){
               let r=window.confirm('Are you sure you want to delete this category?')
                if(!r){
                    return;
                }
              await axios.delete(`/api/category/${slug}`,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                });
       this.categories.splice(index,1);
            },

            edit(index){
               this.form.name=this.categories[index].name
                this.form.editSlug=this.categories[index].slug
                this.categories.splice(index,1)
            },

         async   create(){
                let res=await axios.post('/api/category',this.form,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                });
                this.categories.unshift(res.data);
                this.form.name=null
            },
          async  update(){
                let res=await axios.patch(`/api/category/${this.form.editSlug}`,this.form,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                });
                this.categories.unshift(res.data);
                this.form.name=null
            }
        }
    }
</script>
