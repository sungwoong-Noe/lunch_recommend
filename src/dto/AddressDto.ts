/**
 * 카카오에서 받아오는 주소 검색 결과
 */
interface AddressDto {
    /**
     * 전체 지번 주소
     */
    address_name: string;
    /**
     *  지역 1 Depth, 시도 단위
     */
    region_1depth_name: string;
    /**
     *  지역 2 Depth, 구 단위
     */
    region_2depth_name: string;
    /**
     *  지역 3 Depth, 동 단위
     */
    region_3depth_name: string;
    /**
     *  지역 3 Depth, 행정동 명칭
     */
    region_3depth_h_name: string;
    /**
     *  행정 코드
     */
    h_code: string;
    /**
     *  법정 코드
     */
    b_code: string;
    /**
     *  산 여부, Y 또는 N
     */
    mountain_yn: string;
    /**
     *  지번 주번지
     */
    main_address_no: string;
    /**
     *  지번 부번지, 없을 경우 빈 문자열("") 반환
     */
    sub_address_no: string;
    /**
     * @deprecated 우편번호(6자리)
     *
     * @see [주소 검색 API의 우편번호 및 오탈자 응답 필드 제거 안내] https://devtalk.kakao.com/t/api-6/93000
     */
    zip_code: string;
    /**
     * X 좌표값, 경위도인 경우 경도(longitude)
     */
    x: string;
    /**
     * Y 좌표값, 경위도인 경우 위도(latitude)
     */
    y: string;



}