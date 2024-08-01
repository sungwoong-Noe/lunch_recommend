import {defineStore} from "pinia";


interface UserInfo {
    address: kakao.maps.services.Address
}


export const useUserInfo = defineStore('userInfo', {
    state: (): UserInfo => ({
        address: {
            /**
             * 전체 지번 주소
             */
            address_name: "",
            region_1depth_name: "",
            region_2depth_name: "",
            region_3depth_name: "",
            region_3depth_h_name: "",
            h_code: "",
            b_code: "",
            mountain_yn: "",
            main_address_no: "",
            sub_address_no: "",
            zip_code: "",
            x: "127.37869649890192",
            y: "36.35469518829576",
        }
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
