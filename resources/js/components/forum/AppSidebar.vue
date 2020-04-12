<template>
<v-card>
    <v-toolbar color="cyan" dark dense class="mt-2">
        <v-toolbar-title>Categories</v-toolbar-title>
    </v-toolbar>
    <v-list dense>
            <v-list-item-group v-model="categories" color="primary">
                <v-list-item
                v-for="(category, i) in categories"
                :key="i"
                >

                    <v-list-item-content>
                        <v-list-item-title v-text="category.name"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>

</v-card>
</template>

<script>

    export default {
        data(){
            return {
                categories:[]
            }
        },
        async created(){
            const res=await axios.get('/api/category');
               this.categories=res.data.data;

        }
    }
</script>
