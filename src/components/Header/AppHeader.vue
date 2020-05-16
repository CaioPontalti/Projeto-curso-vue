<template>
   <div>
        
        <v-app-bar
            color="secondary"
            dark
            app
            clipped-left
        >
            <v-app-bar-nav-icon @click="drawer = !drawer" v-if="$store.state.logged"/>
            <v-toolbar-title >Google books</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items v-if="$store.state.logged">
                <v-btn text @click="goToLivros">
                    Livros
                </v-btn>
                <v-btn text @click="goToCollection">
                    Minha Coleção
                </v-btn>
                <v-btn text @click="logoff">
                    Sair
                </v-btn>
            </v-toolbar-items>

        </v-app-bar>

    </div>
</template>

<script>
export default {
    name: 'AppHeader',
    methods:{
        goToLivros(){
            this.$router.push('/book').catch(err => {});
        },
        goToCollection(){
            this.$router.push('/collection');
        },
        logoff(){
            this.$store.commit('setAuthToken', '');
            this.$store.commit('setLogged', false);
            this.$router.push('/');
        },
    }
}
</script>