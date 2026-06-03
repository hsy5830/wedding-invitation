import React, { useState, useRef, useEffect } from "react"
import "./index.scss"

/**
 * 배경음악(BGM)을 재생하고 제어하는 컴포넌트입니다.
 * 모바일 브라우저의 자동 재생 제한 정책으로 인해 사용자가 직접 클릭하여 재생을 제어할 수 있는 플로팅 버튼을 제공합니다.
 *
 * @returns {JSX.Element} BGM 제어 버튼 컴포넌트
 */
export const Bgm = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch((error) => {
          console.error("배경음악 재생 중 에러 발생 (브라우저 정책 등):", error)
        })
    }
  }

  // 음악이 끝나면 자동으로 재생 상태를 false로 변경
  useEffect(() => {
    const playAudioOnUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true)
            removeListeners()
          })
          .catch((err) => {
            console.log("사용자 상호작용 전 자동재생 차단됨:", err)
          })
      }
    }
    const removeListeners = () => {
      window.removeEventListener("click", playAudioOnUserInteraction)
      window.removeEventListener("touchstart", playAudioOnUserInteraction)
      window.removeEventListener("scroll", playAudioOnUserInteraction)
    }
    // 사용자의 첫 상호작용 감지 리스너 등록
    window.addEventListener("click", playAudioOnUserInteraction)
    window.addEventListener("touchstart", playAudioOnUserInteraction)
    window.addEventListener("scroll", playAudioOnUserInteraction)
    return () => {
      removeListeners()
    }
  }, [])
  return (
    <div className="bgm-container">
      <audio
        ref={audioRef}
        src="/wedding-invitation/wedding_march.mp3" // 환경변수 대신 직접 경로 지정 적용
        loop
        preload="auto"
      />
      <button
        className={`bgm-button ${isPlaying ? "playing" : ""}`}
        onClick={togglePlay}
        aria-label={isPlaying ? "배경음악 일시정지" : "배경음악 재생"}
        title={isPlaying ? "배경음악 일시정지" : "배경음악 재생"}
      >
        {isPlaying ? (
          <div className="music-waves">
            <span className="wave-bar"></span>
            <span className="wave-bar"></span>
            <span className="wave-bar"></span>
            <span className="wave-bar"></span>
          </div>
        ) : (
          <div className="music-muted">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </button>
    </div>
  )
}
