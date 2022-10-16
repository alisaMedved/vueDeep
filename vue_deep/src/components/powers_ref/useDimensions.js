import {ref, shallowRef, onMounted, onBeforeUnmount} from 'vue';

// поздравляем это composable function - то есть функция использующая composition Api
// и содержащая логику по управлению/отслеживанию состояния

//... то есть это по реактовски Кастомный хук!
export function useDimension (dimension = 'width') {
    const element = ref();
    const functionRef = el => {
        console.log(el)
        element.value = el;
    }
console.log(element);
    const observer = shallowRef();

    onMounted(() => {
        observer.value = new ResizeObserver(
            entries => {
                console.log(entries[0].contentRect[dimension]);
                element.value.textContent = `${entries[0].contentRect[dimension]}`;
            }
        )
        observer.value.observe(element.value)
    })
    onBeforeUnmount(() => {
        observer.value.disconnect()
    })
    return functionRef;
}

/** А откуда вообще название composition Api?
 * composition Api позволяет вкладывать в друг друга эти кастомные хуки (compasebles)
 * и в честь это было названо composition - композиция изолированных блоков логики
 * **
 */