<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
export default {
  name: 'App',
  components : {
    "v-header" : Header,
    "v-footer" : Footer,
  }
}
</script>

<style>
#app {
  padding: 0;
}
</style>
