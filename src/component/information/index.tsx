import { STATIC_ONLY } from "../../env"
import { LazyDiv } from "../lazyDiv"
import { AttendanceInfo } from "./attendance"
// 이제 사용하지 않는 Modal, Button, BRIDE_INFO, GROOM_INFO import는 삭제하여 코드를 가볍게 만들었습니다.

/**
 * 식사 정보 안내 컴포넌트입니다.
 */
export const Information1 = () => {
  return (
    <>
      <h2 className="english">Information</h2>
      <div className="info-card">
        <div className="label">식사 안내</div>
        <div className="content">
          식사시간: 12시 30분 부터
          <br />
          장소: 2층 래래향
          <br />
          주차: 식당 건물에 자유롭게 가능합니다
        </div>
      </div>
    </>
  )
}

/**
 * 안내사항 컴포넌트입니다. (기존 축의금 계좌번호 안내 대체)
 */
export const Information2 = () => {
  // 모달을 띄우기 위해 필요했던 useState 상태값들을 모두 제거했습니다.

  return (
    <>
      <div className="info-card">
        <div className="label">안내사항</div>
        <div className="content" style={{ lineHeight: "2.2" }}>
          <b>[ 예약 안내 ]</b>
          <br />
          예약자명 <b>'임채현'</b>을 말씀해 주시면
          <br />
          준비된 룸으로 안내해 드립니다.
          <br />
          <br />
          <b>[ 복장 안내 ]</b>
          <br />
          편안하고 부드러운 분위기의 상견례 자리이오니,
          <br />
          너무 격식 차리지 않은 깔끔한 복장으로 
          <br />
          (No Tie!)
          <br />
          가벼운 발걸음 해주시길 바랍니다.
        </div>
      </div>
    </>
  )
}

/**
 * 정보 안내(식사, 안내사항, 참석의사)를 통합하여 표시하는 컴포넌트입니다.
 *
 * @returns {JSX.Element} 정보 안내 섹션
 */
export const Information = () => {
  // 정적 모드일 경우 참석 의사 전달 기능을 제외합니다.
  if (STATIC_ONLY) {
    return (
      <>
        <LazyDiv className="card information">
          <Information1 />
        </LazyDiv>
        <LazyDiv className="card information">
          <Information2 />
        </LazyDiv>
      </>
    )
  }

  return (
    <LazyDiv className="card information">
      <Information1 />
      <Information2 />
      <AttendanceInfo />
    </LazyDiv>
  )
}