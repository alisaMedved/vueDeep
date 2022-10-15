<template>
  <div>
    <!--      ref="items"-->
<!--    :ref="`file_${idx}`"-->
  <div
      v-for="(file, idx) in list"
      :key="file.id"
      :ref="getListRef(_, idx)"
  >
    {{ file.name }}

    <button @click="logDOMElement(idx)">
      Log DOM element
    </button>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [{name: 'Fox', id: 1}, {name: 'Cat', id: 1}, {name: 'Dog', id: 1}],
    }
  },
  mounted() {
    console.log(this.$refs)
  },
  methods: {
    logDOMElement(idx) {
      // в issue указано что элементы в рефе могут быть перечислены не в том порядке в котором они перечилсяюся у цикла
      // for
      // console.log(this.$refs.items[idx]);
      console.log(this.$refs[idx]);
      // решение первое - создавать уникальный реф
      // console.log(this.$refs[`file_{idx}`]);
      // вообще с помощью других аттрибутов доставать по getElementById or QuerySelector
      // и последнее передать в реф функцию
    },
    getListRef(elm, idx) {
      // конкретный item выводится
      console.log(elm);
      let refsArray = [];
      refsArray[idx] = elm;
      return refsArray;
    }
  },
}
</script>