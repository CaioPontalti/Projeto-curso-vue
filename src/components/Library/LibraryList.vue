<template>
    <div>
        <loading :condition="serchOnGoing">
            <v-row>
                <v-col cols="12"
                    md="3"
                    v-for="(shelf, index) in shelfList" :key="index"
                >
                    <library-item :objShelf="shelf"/>

                </v-col>
            </v-row>
        </loading>
    </div>
</template>

<script>

import api from '../services/api';

import Loading from '../Loading/Loading.vue';
import LibraryItem from './LibraryItem.vue';

export default {
    name:'LibraryList',
    mixins:[api],
    components:{
        Loading,
        LibraryItem
    },
    data(){
        return{
            serchOnGoing: false,
            shelfList:[]
        }
    },
    created(){
        this.serchOnGoing = true;

        this.get('/users/118129146934302381707/bookshelves').then((response) =>{
            this.shelfList = response.data.items;
        });

        this.serchOnGoing = false;
    }
}
</script>