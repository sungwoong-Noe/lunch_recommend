import {defineStore} from "pinia";


interface UserInfo {
    address: kakao.maps.services.Address
}


export const useUserInfo = defineStore('userInfo', {
    state: () => ({
        address: {
            /**
             * 전체 지번 주소
             */
            address_name: null,
            region_1depth_name: null,
            region_2depth_name: null,
            region_3depth_name: null,
            region_3depth_h_name: null,
            h_code: null,
            b_code: null,
            mountain_yn: null,
            main_address_no: null,
            sub_address_no: null,
            zip_code: null,
            x: "127.37869649890192",
            y: "36.35469518829576",
        } as kakao.maps.services.Address
    }),

    actions: {
        setAddress(address: kakao.maps.services.Address) {
            this.address = address;
        },
    },

    getters: {
        getAddress(state) {
            return state.address
        },
    }
})
