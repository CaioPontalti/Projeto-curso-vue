
<template>  
    <v-app>
        <app-header></app-header>

        <v-content>
            <router-view></router-view>
        </v-content>
        
        <feedback></feedback>
    </v-app> 
</template>

<script>

    import apiConfig from './components/services/apiConfig';
    import AppHeader from './components/Header/AppHeader.vue'
    import Feedback from './components/FeedbackMessage/Feedback.vue'

    export default {
      name: 'App',
      mixins:[apiConfig],
      components:{
          AppHeader,
          Feedback
      },
      created(){
        
        this.createinterceptors();

        if (window.localStorage.authToken) {
            this.$store.commit('setAuthToken', window.localStorage.authToken);
        }
        else{
            this.$router.push('/');
        }
      }
    }
</script>