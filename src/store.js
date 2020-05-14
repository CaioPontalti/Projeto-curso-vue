import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        authToken:'',
        logged: false,
        message:{
            text:'',
            type:''
        }
    },
    mutations:{
        setAuthToken(state, payload){
            state.authToken = payload;
        },
        setLogged(state, payload){
            state.logged = payload;
        },
        setErrorMessage(state, payload){
            state.message ={
                text: payload,
                type: "ERROR"
            }
        },
        setSuccessMessage(state, payload){
            state.message ={
                text: payload,
                type: "SUCCESS"
            }
        }
    }
}) 
