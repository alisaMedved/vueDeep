<template>
  <div id="app">
<!--    <ExampleFirst v-if="flagComponentAppear" />-->
<!--    <button @click="onClick">-->
<!--      нажми чтобы исчез/появился компонент-->
<!--    </button>-->
<!--    <ExampleBoolean/>-->
<!--    <ExampleRefTwo/>-->
    <RefPowerFirst />
  </div>
</template>

<script>

// import ExampleFirst from './components/example_first';
// import ExampleBoolean from './components/example_boolean';
// import ExampleRefTwo from './components/example_ref_two';
import RefPowerFirst from './components/powers_ref/example_first';

export default {
  name: 'App',
  components: {
    // ExampleFirst,
    // ExampleBoolean,
    // ExampleRefTwo,
    RefPowerFirst,
  },
  data() {
    return {
      flagComponentAppear: true,
    };
  },
  methods: {
    onClick() {
      const newValue = this.flagComponentAppear;
      this.flagComponentAppear = !newValue;
    },
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
