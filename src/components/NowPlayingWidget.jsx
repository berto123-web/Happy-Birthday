function NowPlayingWidget({ isPlaying, onToggle, onPrev, onNext }) {
  return (
    <aside className={`now-playing ${isPlaying ? 'is-playing' : 'is-paused'}`} aria-label="Background music control">
      <button type="button" className="track-nav-button" onClick={onPrev} aria-label="Previous track">
        ‹
      </button>
      <button type="button" className="now-playing-button" onClick={onToggle} aria-label={isPlaying ? 'Pause music' : 'Play music'}>
        <div className="speaker-icon" aria-hidden="true">
          <span className="speaker-body" />
          <span className="speaker-wave wave-one" />
          <span className="speaker-wave wave-two" />
        </div>
        <div className="waveform" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </button>
      <button type="button" className="track-nav-button" onClick={onNext} aria-label="Next track">
        ›
      </button>
    </aside>
  )
}

export default NowPlayingWidget
