
<script setup>
import {useDimension} from './useDimensions';
const element = useDimension('width');

/*
* setup - это синтаксический сахар во vue - он создан чтобы использовать composition Api
* но у него также есть ряд и других преимуществ и особенностей
*
* 1) если обычный скрипт вызывается лишь раз - когда компонент импортируется, то скрипт с setup будет вызываться
* при каждо created instance. Можешь посмотреть схему жизненного цикла компонента и ты увидишь там вызов setup в начале. все что в этом скрипте
* описано все это войдет в функцию setup.
*
* 2) также лучше произволительность (template компилируется в функцию рендеринга в той же области видимости, без промежуточного прокси)
* 4) возможность описывать события и пропсы на чисом TS
* 5) Better IDE type-inference performance
* 6) указывают что мол меньше болерплейта
* 7) насчет видимости методов и переменных все так же кроме импортированных функций и переменных.
* В скрипте без setup вам нужно их как-то дополнительно подвязать - в date передать либо в methods как-нибудь вызывать
* в скрипте же с setup никаких таких подвязок не требуется можно сразу юзать
* */
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