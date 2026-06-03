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
        <div className="location-info" style={{ display: "block", position: "relative" }}>
          
          {/* 2. 아이콘 래퍼에 position: "absolute"를 주어 정중앙 정렬 흐름을 방해하지 않게 띄워줍니다 */}
          <div className="transportation-icon-wrapper" style={{ position: "absolute", left: "10px", top: "5px" }}>
            <MdRestaurantMenu className="transportation-icon" />
          </div>
          
          {/* 이제 아래 제목과 본문은 정확하게 카드 중심의 100% 정중앙으로 이동합니다 */}
          <div className="heading" style={{ textAlign: "center", fontSize: "1.2rem" }}>귀한 분들을 위한 코스 요리</div>
          
          <div className="content" style={{ lineHeight: "2.4", textAlign: "center", marginTop: "30px" }}>
            특품 냉채
            <br />
            삼선탕
            <br />
            오룡해삼
            <br />
            간소왕새우(칠리/깐풍)
            <br />
            생아스파라거스 관자
            <br />
            자연송이 안심
            <br />
            꽃빵
            <br />
            짜장, 기스면, 짬뽕 택일
            <br />
            후식
            
            {/* 하단 추가 안내 문구 */}
            <div style={{ fontSize: "0.85rem", color: "#8b7d6b", marginTop: "40px", lineHeight: "1.5", fontWeight: "bold" }}>
              ☆ 원하는 메뉴 있으시면 대접하겠습니다! ☆
            </div>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
