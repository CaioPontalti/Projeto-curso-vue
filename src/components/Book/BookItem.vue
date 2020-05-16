<template>
    <v-card class="mx-auto book-card" shaped >

        <div v-if="objBook.volumeInfo.imageLinks.smallThumbnail"
              class="text-center pt-3"
        >
            <img :src="objBook.volumeInfo.imageLinks.smallThumbnail" height="200px" width="150"/>
        </div>

        
        <v-card-title>
            <span>{{ objBook.volumeInfo.title.substring(0,20) }}</span>
            <span v-if="objBook.volumeInfo.title.length > 20">...</span>
        </v-card-title>

        <v-card-subtitle>{{ objBook.volumeInfo.subtitle || 'Livro sem descrição.'}}</v-card-subtitle>
       
        <div >
            <v-card-actions>
                <v-btn text 
                    small
                    color="secondary"
                    @click="goToDetails"
                >
                    <span class="text-lowercase text-end" >ver detalhes</span> 
                </v-btn>

                <v-btn text
                    small
                    color="secondary"
                    @click="goToPreview"
                >
                    <span class="text-lowercase text-end" >ver preview</span>
                </v-btn>
            </v-card-actions>   
        </div>

        
    </v-card>
</template>

<script>
export default {
    name: 'BookItem',
    props:{
        objBook: {type: Object, required:true}
    },
    methods:{
        goToPreview(){
            window.open(this.objBook.volumeInfo.previewLink, '_blank');
        },
        goToDetails(){
            this.$router.push(`/book/${this.objBook.id}`)
        }
    }
}
</script>

<style scoped>
    .book-card{
        height: 100%;
    }
</style>