import {ref} from 'vue'

const map: kakao.maps.Map = ref<kakao.maps.Map>();

export function useMap() {

    return {
        map,
    }
}