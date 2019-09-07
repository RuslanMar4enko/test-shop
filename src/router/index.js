import Vue from "vue";
import VueRouter from "vue-router";


import Home from "../pages/Home";
import ShowComment from "../pages/ShowComment"

Vue.use(VueRouter);



const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/show/comment",
    name: "showComment",
    component: ShowComment,
  },
];


const router = new VueRouter({
  routes,
});


export default router;
