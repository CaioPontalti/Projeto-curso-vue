<template>
   <v-container fluid>
       <div>
           <v-container fluid>
               <v-row >
                    <v-btn text
                        block
                        @click="goBack"
                        class="back"
                    >
                        <span class="text-lowercase">Voltar</span>
                    </v-btn>
                </v-row>
           </v-container>
       </div>
       
       <v-row v-if="book && book.volumeInfo">
           <v-col cols="12" md="3" class="text-center">
               <img :src="book.volumeInfo.imageLinks.smallThumbnail" />
           </v-col>
           
           <v-col cols="12" md="9">
                <h4 class="display-1">{{ book.volumeInfo.title }}</h4>
                <h5 class="headline mt-1">{{ book.volumeInfo.subtitle  || 'Livro sem Descrição'}} </h5>

                <!-- <p class="mt-2">{{ book.volumeInfo.description }}</p> -->
                <p v-html="book.volumeInfo.description" class="mt-2"></p>

                <div v-if="book.volumeInfo.authors && book.volumeInfo.authors.length">
                    <v-subheader >Authors</v-subheader>
                    <v-divider/>
                    <v-chip v-for="(autor, index) in book.volumeInfo.authors" :key="index" 
                        pill
                        class="mt-2 mr-1"
                    >
                        <v-avatar left
                            color="secondary white--text"
                        >
                            {{autor.substring(0,1)}}
                        </v-avatar>
                        {{ autor }}
                    </v-chip>
                </div>

                <div v-if="book.volumeInfo.categories && book.volumeInfo.categories.length">
                    <v-subheader>Categories</v-subheader>
                    <v-divider/>
                    <v-chip  v-for="(category, index) in book.volumeInfo.categories" :key="index"
                        class="mt-2 mr-1">
                        {{ category }}
                    </v-chip>
                </div>

           </v-col>
       </v-row>
   </v-container>
</template>

<script>

import api from '../services/api';

export default {
    name: 'BookDetailsPage',
    mixins:[api],
    data(){
        return{
            book:{}
        }
    },
    created(){
        this.get(`/volumes/${this.$route.params.id}`).then((response)=>{
            this.book = response.data;
        });
    },
    methods:{
        goBack(){
            this.$router.push('/book');
        }
    }
}
</script>

<style scoped>
    .back{
        justify-content: flex-end
    }
</style>