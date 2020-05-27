<template>
  <div id="app">
    <navBar></navBar>
    <router-view></router-view>
  </div>
</template>

<script>
import navBar from "./components/Nav";
export default {
  name: "App",
  components: {
    navBar
  }
};
</script>

<style>
#app {
  padding: 2rem;
}
</style>
