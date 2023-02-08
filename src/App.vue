<template>
  <router-view></router-view>
</template>
<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  watch: {
    $route(to, from) {
      console.log('routed'+to);
      document.title = to.meta.title || "Other Title";
    },
  },
};
</script>
