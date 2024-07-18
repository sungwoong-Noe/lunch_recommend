import {ref} from 'vue';

const show = ref(false);

const component = ref();

export function useModal() {

    return {

        component,
        show,
        showModal: (): void => show.value = true,
        hideModal: (): void => show.value = false
    }
}

