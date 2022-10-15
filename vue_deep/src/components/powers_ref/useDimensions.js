import {ref, shallowRef, onMounted, onBeforeUnmount} from 'vue';

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