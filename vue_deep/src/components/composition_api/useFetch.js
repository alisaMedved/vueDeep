import { ref, isRef, unref, watchEffect } from 'vue'

export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)

    function doFetch() {
        // reset state before fetching..
        data.value = null
        error.value = null
        // unref() unwraps potential refs
        fetch(unref(url))
            .then((res) => res.json())
            .then((json) => (data.value = json))
            .catch((err) => (error.value = err))
    }
    if (isRef(url)) {
        // setup reactive re-fetch if input URL is a ref
        watchEffect(doFetch)
    } else {
        // otherwise, just fetch once
        // and avoid the overhead of a watcher
        doFetch()
    }

    return { data, error }
}

/**
 * а что если аргумент динамический и он может меняться - а ведь хук вызывается лишь однажды - когда ему велели вызваться/7
 * Кастомный хук не будет вызываться по изменению аргумента
 * ради этого используют связку isRef - unref - watchEffect
 *
 * обязательно следует выбрать один из двух вариантов
 * в случае если у вас есть реактивный реф и side effect для правильного отслеживания рефа:
 * 1) watchEffect + unref
 * 2) второй вариант watch.
 *
 * возвращаемое значение должно быть объектом, содержащим ref-ы
 * Это надо для сохранения реактивности - поменялось состояние внутри хука => он выплюнул
 * новое состоние наружу
 *
 * если уж очень нужна reactive можно сделать хак
 * const mouse = reactive(useMouse())
 * // mouse.x is linked to original ref
 * console.log(mouse.x)
 *
 * onUnmounted - очистка side effects обязательна!
 *
 * Где можно вызывать composable functions?
 * в <script setup>, setup hook, в компоненте
 *
 * 1) Vue там сможет увидеть текущее состояние instance --> подвязаться к методам жизненного цикла компонента
 * 2) vue сможет подвязать к instance все состояния и когда компонент размонтируется отписаться от них
 * дабы не было утечек памяти
 *
 *3) = await useFetch('url/bla');
 * вот такую надпись можно делать только в <script setup>
 *    тут та же проблема выхода из функции о которой говорил Илья Климов.
 *    Только в этом script setup Vue может дождаться и вернутся и продолжить
 *    В других местах будет просто выход из функции
 *
 *
 * Тут дока vue предлагает угарную тему использовать composables functions
 * не только для переиспользования но и для упрощения/сокращения кодакомпонента большого и сложного -
 * по мне тут главное не переборщить с этими упрощениями...
 *
 * В чатике vue люди говорили что все таки мешать options Api и composition Api в рамках одного компонента - дурной тон
 *
 * Пока все выглядит так, что с ними можно согласится. Но vue имеет официальную возможность для этого
 * import { useMouse } from './mouse.js'
 * import { useFetch } from './fetch.js'
 *
 * export default {
 *   setup() {
 *     const { x, y } = useMouse()
 *     const { data, error } = useFetch('...')
 *     return { x, y, data, error }
 *   },
 *   mounted() {
 *     // setup() exposed properties can be accessed on `this`
 *     console.log(this.x)
 *   }
 *   // ...other options
 * }
 */