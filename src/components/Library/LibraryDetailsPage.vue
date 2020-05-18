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
        <v-row>
            <v-col cols="12">
                {{ objShelf.title }}
                <span class="overline">{{ objShelf.volumeCount }} Livros</span>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import api from '../services/api';

export default {
    name: 'LibraryDetailsPage',
    mixins:[api],
    data(){
        return{
            objShelf: {}
        }
    },
    created(){
        this.get(`/users/118129146934302381707/bookshelves/shelf/${this.$route.params.id}`).then((response)=>{
            this.objShelf = response.data;
        })
    },
    methods:{
        goBack(){
            this.$router.push('/library');
        }
    }
}
</script>
<style scoped>
    .back{
        justify-content: flex-end
    }
</style>