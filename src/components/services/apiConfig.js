import apiInstance from './apiInstance';

export default {
    name:'apiConfig',
    methods: {
        createinterceptors(){
            apiInstance.interceptors.request.use((config) =>{
                const newConfig = config;
                
                if (newConfig.url.indexOf('?') !== -1) newConfig.url += '&';
                else newConfig.url += '?';
                
                //config.headers.Authorization = this.$store.state.authToken;

                newConfig.url += `key=${this.$store.state.authToken}`;

                return newConfig;
            });
        }
    },
}