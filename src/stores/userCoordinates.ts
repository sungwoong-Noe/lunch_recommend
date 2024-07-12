import {defineStore} from "pinia";
import {useGeolocation} from "@vueuse/core";


interface Coordinates {
    latitude: number,
    longitude: number
}


export const useUserCoordinatesStore = defineStore('userCoordinates', {
    state: () => ({
        coordinates: {latitude: 0, longitude: 0} as Coordinates,
    }),
    actions: {
        setCoordinates({lng, lat}:{lng:number, lat:number}){
            this.coordinates.latitude = lat;
            this.coordinates.longitude = lng;
        }
    },
    getters: {
        getCoordinates(state) {

            return state.coordinates;
        }
    }
})