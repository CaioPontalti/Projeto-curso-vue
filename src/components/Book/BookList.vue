<template>
    <div>
        <v-row>
            <v-col cols="12"> 
                <v-text-field v-model="textSearch"
                                label="Search..."
                                @input="goSearch"
                >
                </v-text-field>
            </v-col>
        </v-row>
        
        <loading :condition="serchOnGoing">
            <v-row>
                <v-col cols="12"
                    md="3"
                    v-for="(book, index) in bookList" :key="index"
            >
                    <v-card class="mx-auto" shaped >
                        <v-card-title>{{ book.volumeInfo.title }}</v-card-title>

                        <v-card-subtitle v-if="book.volumeInfo.subtitle">{{ book.volumeInfo.subtitle }}</v-card-subtitle>
                        <v-card-subtitle v-else>Livro sem sub-título</v-card-subtitle>
                        
                        <v-container>
                            <span><strong>Páginas: </strong>{{ book.volumeInfo.pageCount }}</span>
                        </v-container>

                        <v-card-actions>
                            <v-btn text 
                                small
                                color="secondary" >
                            <span class="text-lowercase text-end" >ver detalhes</span> 
                            </v-btn>
                        </v-card-actions>
                    </v-card>

                </v-col>
            </v-row>
        </loading>
    </div>
    
</template>

<script>

    const axios = require('axios');

import Loading from '../Loading/Loading.vue'

export default {
    name: 'BookList',
    components:{
        Loading
    },
    data(){
        return{
            bookList:[],
            textSearch:'',
            serchOnGoing: false
        }
    },
    methods: {
        goSearch(){
            if (this.textSearch) {
                this.serchOnGoing = true;

                axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.textSearch}`).then((response) =>{
                this.bookList = response.data.items;
                
                this.serchOnGoing = false;
                });
            }
        }
    }
}
</script>