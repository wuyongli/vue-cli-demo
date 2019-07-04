<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>这是写在app.vue内的h1标签</h1>
    <HelloCode v-bind:books="codebooks" @pfn="sayHi" @pfn2="test2"></HelloCode>
  </div>
</template>

<script>
import HelloCode from "./components/HelloCode.vue";

export default {
  name: "app",
  components: {
    HelloCode
  },
  data: function() {
    return {
      codebooks: { name: "python", price: 80 }
    };
  },
  methods: {
    sayHi: function(data) {
      alert(data);
    },
    test2() {
      alert("$emit的第二种写法");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: red;
}
</style>
