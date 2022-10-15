
<script setup>
import {useDimension} from './useDimensions';
const element = useDimension('width');
</script>

<template>
  <main
      class="container"
  >
    <div
        class="block-text"
        :ref="element"
    />

  </main>
</template>

<style scoped lang="css">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.block-text {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 240px;
  min-height: 240px;
  background-color: #330088;
  resize: both;
  overflow: scroll;
  color: #fff;
}
</style>