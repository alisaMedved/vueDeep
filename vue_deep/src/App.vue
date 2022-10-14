<template>
  <div id="app">
    <ExampleFirst />
  </div>
</template>

<script>

import ExampleFirst from './components/example_first';

export default {
  name: 'App',
  components: {
    ExampleFirst
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
