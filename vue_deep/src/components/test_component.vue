<template>
  <div v-if="canShow">
    I'm TestComponent
  </div>
</template>

<script>
export default {
  props: {
    canShow: {
      type: Boolean,
      required: true,
    },
  },
};
</script>