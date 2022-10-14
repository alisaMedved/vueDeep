<template>
  <div>
    <!-- В этом случае canShow будет равен true внутри TestComponent -->
    <TestComponent canShow="" />

    <!-- Этот пример аналогичен предыдущему, vue-template-compiler выставит пустую строку для нашего prop'а -->
    <TestComponent canShow />

    <!-- Тут canShow тоже равен true -->
    <TestComponent canShow="can-show" />
    <TestComponent canShow="canShow" />
    <TestComponent canShow="dftgyhu" />
    <TestComponent :canShow="null" />
  </div>
</template>

<script>
import TestComponent from './test_component';

export default {
  components: {
    TestComponent,
  },
};
</script>