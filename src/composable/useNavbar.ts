import { ref } from 'vue';


const drawer = ref(false);


export function useNavbar() {
    return {
        drawer,
        toggleNavbar() {
            drawer.value = !drawer.value;
        }
    }
}