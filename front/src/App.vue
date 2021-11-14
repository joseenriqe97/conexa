<template>
  <div v-if="isAuthorized">
    <header-component @closeSession="closeSession" />
    <router-view />
  </div>
  <div v-if="!isAuthorized">
    <router-view />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import headerComponent from "../src/components/header.vue";

export default defineComponent({
  components: {
    headerComponent,
  },
  setup() {
    //VARIABLES
    const route = useRoute();
    const router = useRouter();
    //METHODS

    const closeSession = () => {
      localStorage.removeItem("_token");
      router.push({
        path: "/login",
      });
    };

    //HOOKS
    const isAuthorized = computed(() => route.meta?.requiresAuth);
    return {
      isAuthorized,
      closeSession,
    };
  },
});
</script>

<style>
body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
/* .contentCenter {
  display: flex;
  justify-content: center;
  align-items: center;
} */
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
</style>