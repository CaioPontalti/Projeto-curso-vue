<template>
    <v-snackbar v-model="showMessage" 
            :top="true"
            :color="color"
    >
        {{ message }}
        
        <v-btn text
            @click="clearMessage"
            class="text-lowercase"
        >
            Fechar
        </v-btn>
    </v-snackbar>
</template>

<script>
export default {
    name: 'Feedback',
    data(){
        return{
            message: '',
            color:'',
            showMessage: false
        }
    },
    watch: {
        '$store.state.message.text' : 'setMessage'
    },
    methods: { 
        setMessage(){
            this.message = this.$store.state.message.text;
            this.color = this.$store.state.message.type === 'ERROR' ? 'error' : 'success';
            if(this.message != '')
            {
                this.showMessage = true; 
            }
        },
        clearMessage(){
            this.$store.commit('setErrorMessage', '')
            this.showMessage = false;
        }
    },
}
</script>