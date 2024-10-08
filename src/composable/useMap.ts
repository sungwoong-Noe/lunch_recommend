import {type Ref, ref} from 'vue'
import type {KakaoMapMarkerListItem} from "vue3-kakao-maps";



const map: Ref<kakao.maps.Map | undefined> = ref<kakao.maps.Map>();
const markerList = ref<KakaoMapMarkerListItem[]>([]);


export function useMap() {

    return {
        map,
        setMap: (mapRef: kakao.maps.Map): void  => {
            map.value = mapRef;
        },
        getMap: (): kakao.maps.Map | undefined => {
            return map.value;
        },

        // 카카오 키워드로 검색 기능
        setMarkerList(keyword: string): void {
            const place = new kakao.maps.services.Places(map.value);


            place.keywordSearch(keyword, (result: kakao.maps.services.PlacesSearchResult, status: kakao.maps.services.Status): void => {
                if (status === kakao.maps.services.Status.OK) {

                    const bounds = new kakao.maps.LatLngBounds();

                    for (const marker of result) {

                        console.log('marker', marker);

                        const markerItem: KakaoMapMarkerListItem = {

                            lat: +marker.y,
                            lng: +marker.x,
                            infoWindow: {
                                content: marker.place_name,
                                visible: false,
                            }
                        };

                        markerList.value.push(markerItem);
                        bounds.extend(new kakao.maps.LatLng(+marker.y, +marker.x));
                        map.value?.setBounds(bounds);

                    }
                }
            });
        },
        getMarkers: (): KakaoMapMarkerListItem[] => {
            return markerList.value;
        }
    }
}