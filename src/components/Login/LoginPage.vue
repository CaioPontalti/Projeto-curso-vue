<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="12"
                md="4"
                class="text-center"
            >
                <h6 class="display-1 text-uppercase">Login</h6>
                
                <v-text-field label="token"
                        v-model="token"
                />
                
                <v-btn depressed 
                    color="info"
                    dark
                    block
                    @click="login"
                    class="mb-2"
                >
                    Login
                </v-btn>

                <v-btn text
                    color="blue"
                    @click="loginVisitante"> Entrar como visitante
                </v-btn>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>

//AIzaSyCXCf1urKNqxNQ6MZpk9qm_dIekH1TXhWE

export default {
    components:{
        
    },
    name: 'LoginPage',
    data(){
        return{
            token:''
        }
    },
    methods:{
        login(){
            if(this.token){
                this.$store.commit('setAuthToken', this.token);
                this.$store.commit('setLogged', true);
                this.$router.push('/book');
            }  
            else{
                this.$store.commit('setErrorMessage', 'Você deve informar um token')
            }
        },
        loginVisitante(){
            this.$store.commit('setLogged', true);
            this.$router.push('/book');
        }
    }
}
</script>