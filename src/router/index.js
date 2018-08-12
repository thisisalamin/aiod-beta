import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home";
import Youtube from "@/components/Youtube";
import Soundcloud from "@/components/Soundcloud";
import Facebook from "@/components/Facebook";
import Twitter from "@/components/Twitter";
import Contact from "@/components/Contact";
import Test from "@/components/Test";

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/youtube",
      name: "Youtube",
      component: Youtube
    },
    {
      path: "/soundcloud",
      name: "Soundcloud",
      component: Soundcloud
    },
    {
      path: "/facebook",
      name: "Facebook",
      component: Facebook
    },
    {
      path: "/twitter",
      name: "Twitter",
      component: Twitter
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/test",
      name: "Test",
      component: Test
    }
  ]
});
