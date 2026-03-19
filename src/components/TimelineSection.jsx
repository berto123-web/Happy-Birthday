function TimelineMedia({ item }) {
  if (item.mediaType === 'video') {
    return (
      <video
        className="frame-media frame-video"
        src={item.mediaSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    )
  }

  return <img className="frame-media frame-image" src={item.mediaSrc} alt={item.title} />
}

function TimelineCard({ item, side, index }) {
  return (
    <article className={`timeline-card ${side}`}>
      <div className={`photo-frame ${item.frame}`}>
        <TimelineMedia item={item} />
      </div>
      <h3>{item.title}</h3>
      <p>{item.note}</p>
      <small>Memory #{String(index + 1).padStart(2, '0')}</small>
    </article>
  )
}

function TimelineSection({ items, message }) {
  return (
    <section className="timeline-section" aria-label="Vertical birthday timeline">
      <h2>The Time Capsule Gallery</h2>
      <div className="timeline-wrap">
        <div className="timeline-spine" />
        {items.map((item, index) => {
          const side = index % 2 === 0 ? 'left' : 'right'
          const showNode = index === 0 || items[index - 1].year !== item.year

          return (
            <div className="timeline-row" key={`${item.year}-${item.title}`}>
              {showNode ? (
                <span className="timeline-node">
                  {item.year}
                </span>
              ) : null}
              <TimelineCard item={item} side={side} index={index} />
            </div>
          )
        })}
      </div>
      {message ? (
        <article className="message-card" aria-label="Special message card">
          <span className="message-label">Final Note</span>
          <h3>{message.title}</h3>
          <p>{message.body}</p>
          <small>{message.signature}</small>
        </article>
      ) : null}
    </section>
  )
}

export default TimelineSection
