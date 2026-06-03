import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"
import { MdRestaurantMenu, MdOutlineSoupKitchen } from "react-icons/md";

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 상견례 코스 요리 메뉴 섹션 */}
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            {/* react-icons에서 가져온 레스토랑 아이콘을 기존 템플릿 클래스에 맞게 적용 */}
            <MdRestaurantMenu className="transportation-icon" />
          </div>
          <div className="heading">오늘의 코스 요리</div>
          <div />
          <div className="content" style={{ lineHeight: "2.4" }}>
            {/* 메뉴 목록 (br 태그로 줄바꿈) */}
            <MdOutlineSoupKitchen style={{ verticalAlign: 'text-top', marginRight: '4px' }}/> 
            삼품 냉채
            <br />
            해물 매생이 누룽지탕
            <br />
            전가복
            <br />
            칠리 중새우
            <br />
            고추잡채와 꽃빵
            <br />
            식사 (짜장 / 짬뽕 / 볶음밥)
            <br />
            계절 후식
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
