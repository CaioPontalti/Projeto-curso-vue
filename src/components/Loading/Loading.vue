<template>
    <div>
        <div v-if="condition">
           <v-progress-circular
                indeterminate
                color="secondary">
            </v-progress-circular>
        </div>
        <div v-if="!condition">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Loading',
    props:{
        condition:{ type:Boolean, required: true }
    }
}
</script>