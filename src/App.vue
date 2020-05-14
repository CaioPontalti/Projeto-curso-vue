
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
    import AppHeader from './components/Header/AppHeader.vue'
    import Feedback from './components/FeedbackMessage/Feedback.vue'

    export default {
      name: 'App',
      components:{
          AppHeader,
          Feedback
      }
    }
</script>