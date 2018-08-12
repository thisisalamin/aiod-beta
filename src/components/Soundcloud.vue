<template>
    <div class="page-wrapper">
        <div class="row">
            <div class="col"></div>
            <div class="col-md-10 text-center">
                <div class="card-body">
                    <h1 class="display-6">Free Online Soundcloud MP3 Downloader</h1>
                    <p class="mb-0">Download Single audio or audio playlist!</p>
                </div>
            </div>
            <div class="col"></div>
        </div>
        <div class="row loading-parent">
        <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :on-cancel="whenCancelled"
        :is-full-page="fullPage"></loading>
            <div class="col"></div>
            <div class="col-10">
                <form >
                    <div class="md-form input-group">
                        <input type="text" v-model="newUrl" class="form-control" placeholder="Paste link here.. e.g. https://soundcloud.com/uiceheidd/lucid-dreams-forget-me" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                        <button  @click.prevent="submit" class="btn cyan lighten-1 btn-rounded" type="submit">Start</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col"></div>
        </div>
        <div class="row">
            <div class="col"></div>
            <div class="col-10">
                <div class="card" v-if="details">
                    <h5 class="card-header">{{details.data.title}}</h5>
                    <div class="card-body">
                        <a v-bind:href="details.data.url" class="btn cyan lighten-1 btn-rounded">Download</a>
                    </div>
                </div>
                <div class=" text-center" v-else-if="errors">
                    <div class="card-body">
                        <h1>Oops! Something went wrong, The download link not found.</h1>
                        <a href="/soundcloud" class="btn cyan lighten-1 btn-rounded center-block">Try Again</a>
                    </div>
                </div>
            </div>
            <div class="col"></div>
        </div>
    </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.min.css";
import axios from "axios";

export default {
  name: "Soundcloud",
  data() {
    return {
      details: "",
      newUrl: "",
      errors: "",
      isLoading: false,
      fullPage: true
    };
  },
  components: {
    Loading
  },
  methods: {
    submit() {
    this.isLoading = true;
      axios.defaults.baseURL =
        "https://uslessapi.herokuapp.com/service/download/";
      axios.defaults.headers.post["Authorization"] =
        "Basic dXNlcjpIMzExQFJhMTdlcg==";
      axios
        .post("soundcloud/single/", {
          url: this.newUrl
        })
        .then(response => (this.details = response,
        this.isLoading = false
        ))
        .catch(error=>(this.errors=error,
        this.isLoading = false
        ))
    }
  }
};
</script>

<style>
.loading-parent {
  position: relative;
}
</style>
