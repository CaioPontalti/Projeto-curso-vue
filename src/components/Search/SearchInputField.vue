<template>
    <v-text-field v-model="textSearch"
        label="Search..."
        @change="doSearch"
    >
    </v-text-field>
</template>
<script>
export default {
    name: 'SearchInputField',
    data(){
        return{
            textSearch:''
        }
    },
    methods: {
        doSearch(){
            this.$emit('search', this.textSearch)
        }
    }
}
</script>