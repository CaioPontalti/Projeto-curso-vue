<template>
    <v-container fluid class="fill-height">
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="secondary"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field label="token"
                                v-model="token"
                        />

                        <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            type="password">
                        </v-text-field>
                    </v-form>
              </v-card-text>
              <v-card-actions>
                    <v-btn 
                        color="secondary"
                        depressed
                        block
                        @click="login"
                    >
                        Login
                    </v-btn>
              </v-card-actions>
              <v-card-actions>
                    <v-btn text
                        color="secondary"
                        depressed
                        block
                        @click="loginVisitante"
                    >
                        Entrar como visitante
                    </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

    </v-container>
</template>

<script>

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
                this.$router.push('/book');
            }  
            else{
                this.$store.commit('setErrorMessage', 'Você deve informar um token')
            }
        },
        loginVisitante(){
            this.$store.commit('setLogged', true);
            this.$store.commit('setAuthToken', 'AIzaSyCXCf1urKNqxNQ6MZpk9qm_dIekH1TXhWE');
            this.$router.push('/book');
        }
    }
}
</script>