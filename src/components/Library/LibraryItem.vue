<template>
    <v-card class="mx-auto book-card" shaped >
        
        <v-card-title>
            <span>{{ objShelf.title }}</span>            
        </v-card-title>
        
        <v-card-text>
            <span>
                Número de Livros: 
                <span class="font-weight-medium ml-1"> {{ objShelf.volumeCount }} </span>
            </span >
            <v-card-actions>
                <v-btn text 
                    small
                    color="secondary"
                    @click="goToDetails"
                >
                    <span class="text-lowercase text-end" >ver detalhes</span> 
                </v-btn>
            </v-card-actions>
        </v-card-text>

    </v-card>
</template>
<script>
export default {
    name: 'LibraryItem',
    props:{
        objShelf:{type:Object, required: true}
    },
    methods:{
        goToDetails(){
            this.$router.push(`/library/${this.objShelf.id}`);
        }
    }
}
</script>