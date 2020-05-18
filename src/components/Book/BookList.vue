<template>
    <div>
        <v-row>
            <v-col cols="12"> 

               <search-input-field @search="goSearch"/>

            </v-col>
        </v-row>
        <v-row v-if="bookList.length">
            <v-btn text
                cols="12"
                @click="goClean"
                class="clean"
            >
                <span class="text-lowercase">Limpar busca</span> 
            </v-btn>
        </v-row>

        <loading :condition="serchOnGoing">
            <v-row>
                <v-col cols="12"
                    md="3"
                    v-for="(book, index) in bookList" :key="index"
            >
                    <book-item :objBook="book"/>

                </v-col>
            </v-row>
        </loading>
    </div>
    
</template>

<script>

import api from '../services/api';

import Loading from '../Loading/Loading.vue';
import BookItem from './BookItem.vue';
import SearchInputField from '../Search/SearchInputField.vue';

export default {
    name: 'BookList',
    mixins:[api],
    components:{
        Loading,
        BookItem,
        SearchInputField
    },
    data(){
        return{
            bookList:[],
            textSearch:'',
            serchOnGoing: false,
            textOld:''
        }
    },
    methods: {
        goSearch(textSearch){
            if (textSearch) {
                if (textSearch != this.textOld || !this.bookList.length) {

                    this.textOld = textSearch;
                    this.serchOnGoing = true;
                    
                    this.get(`/volumes?q=${textSearch}`).then((response) =>{
                        this.bookList = response.data.items;
                
                        this.serchOnGoing = false;
                    });
                }
            }
        },
        goClean(){
            this.bookList = []
        }
    }
}
</script>

<style scoped>
    .clean{
        margin-top: -30px;
    }
</style>
