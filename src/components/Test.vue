<template>
<div class="page-wrapper">
    <div class="loading-parent">
        <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :on-cancel="whenCancelled"
        :is-full-page="fullPage"></loading>
        
        <label><input type="checkbox" v-model="fullPage">Full page?</label>
        <button @click.prevent="doAjax">fetch Data</button>
    </div>
</div>
</template>

<script>
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.min.css';
    // Using axios for the demo only
    import axios from 'axios';
    
    export default {
        data() {
            return {
                isLoading: false,
                fullPage: true
            }
        },
        components: {
            Loading
        },
        methods: {
            doAjax() {
                this.isLoading = true;
                // AJAX example with axios
                axios.post('/api').then((response)=>{
                  this.isLoading = false                
                })
            },
            whenCancelled() {
              console.log("User cancelled the loader.")
            }
        }
    }
</script>
<style>
.loading-parent {
  position: relative;
}
</style>