<template>
  <Child ref="child" />
  <button>

  </button>
</template>

<script>
import Child from './Child.vue'

export default {
  components: {
    Child
  },
  mounted() {
    // this.$refs.child will hold an instance of <Child />
  }
}

/**
 ты помнишь как можно прокидывать события во вью:
 Задача: Есть иерархия компонентов Component A --> Component B --> Component C надо из С передать данные в А.
 1) Вариант первый: C эмитит событие в В, В переэмичивает событие в А
 2) Вариант номер два: через store vuex
 3) Компонент А публикует через provide функцию, ребенок употребляет ее через inject

 Ну что ж поздравляем - мы узнали четвертый нерекомендуемый самой либой костыльный способ -
 Компонент А через ref вызывает функцию ребенка когда ему надо
 а также забирает значение состояния ребенка когда ему надо

 Динамическое ли значение в поле рефа, что содержит состояние ребенка?
 Во вью 2 - понятно дело нет (не уверена что там вообще есть такой функционал + и во вью2 рефы нереактивны)
 но вот во вью3рефы реактивны и потому шанс навесить вотчер и отслеживать есть. Ебнуто как не знай что.

 Вторая тема рофляная про рефы
 https://github.com/vuejs/vue/issues/4952#issuecomment-280661367

 решением этой проблемы стали функции передаваемые в реф
 **/
</script>