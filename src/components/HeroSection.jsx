import CountdownTimer from './CountdownTimer'
import heroVideo from '../asset/vid/lv_7458231180102536501_20260319204132.mp4?url'

function HeroSection({ recipientName, isUnlocked, targetYear, targetMonth, targetDay }) {
  const lockedTitle = 'This is my special surprise for you my love'
  const unlockedTitle = `HAPPY BIRTHDAY, ${recipientName.toUpperCase()}.`

  return (
    <header className="hero-section">
      <div className="hero-photo" aria-label="Hero backdrop with candid video memory card">
        <div className="photo-glow" />
      </div>
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{isUnlocked ? unlockedTitle : lockedTitle}</h1>
            {isUnlocked ? (
              <div className="countdown countdown-unlocked">
                <div className="countdown-grid">
                  <span>00</span>
                  <i>:</i>
                  <span>00</span>
                  <i>:</i>
                  <span>00</span>
                  <i>:</i>
                  <span>00</span>
                </div>
                <p>THE TIME CAPSULE GALLERY IS NOW OPEN ✨</p>
              </div>
            ) : (
              <CountdownTimer targetYear={targetYear} targetMonth={targetMonth} targetDay={targetDay} />
            )}
          </div>
          <div className="candid-video-card">
            <video className="hero-video" src={heroVideo} autoPlay muted loop playsInline preload="auto" />
            <div className="photo-caption">Our Memories</div>
            </div>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
