<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12"
                   md="4"
                   lg="3"
            >
                <h6 class="display-1">Livros</h6>
            </v-col>
        </v-row>

        <book-list></book-list>

    </v-container>
</template>

<script>

    import BookList from './BookList.vue';

    export default {
        name: 'BookListPage',
        components:{
            BookList
        }
    }
</script>