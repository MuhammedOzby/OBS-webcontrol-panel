import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: function () {
      return import("../views/About.vue");
    },
  },
  {
    path: "/live",
    name: "Live",
    component: function () {
      return import("../views/Live.vue");
    },
  },
  {
    path: "/record",
    name: "Record",
    component: function () {
      return import("../views/Record.vue");
    },
  },
  {
    path: "/sound",
    name: "Sound",
    component: function () {
      return import("../views/Sound.vue");
    },
  },
  {
    path: "/others",
    name: "Others",
    component: function () {
      return import("../views/Others.vue");
    },
  },
  {
    path: "/tools",
    name: "Tools",
    component: function () {
      return import("../views/Tools.vue");
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
