import VueRouter from "vue-router";
import App from "../App";

export default new VueRouter({
  routes: [
    { path: "/all", component: App },
    { path: "/active", component: App },
    { path: "/completed", component: App },
  ],
});