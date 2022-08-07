<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Nav,
    Footer
  }
});
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Roboto Condensed", sans-serif;
}

.about,.home_page{
  min-height: 90vh;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: black;
}

ul {
  list-style-type: none;
}
</style>
