import { useEffect, useMemo, useState } from 'react'

function getTargetDate(targetYear, targetMonth, targetDay) {
  return new Date(targetYear, targetMonth - 1, targetDay, 0, 0, 0)
}

function toCountdownParts(msRemaining) {
  const totalSeconds = Math.max(0, Math.floor(msRemaining / 1000))
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const mins = Math.floor((totalSeconds % 3600) / 60)
  const secs = totalSeconds % 60

  return { days, hours, mins, secs }
}

function pad(value) {
  return String(value).padStart(2, '0')
}

function CountdownTimer({ targetYear, targetMonth, targetDay }) {
  const targetDate = useMemo(
    () => getTargetDate(targetYear, targetMonth, targetDay),
    [targetYear, targetMonth, targetDay],
  )
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const timerId = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(timerId)
  }, [])

  const parts = toCountdownParts(targetDate.getTime() - now)

  return (
    <section className="countdown" aria-label="Countdown to next birthday">
      <div className="countdown-grid">
        <span>{pad(parts.days)}</span>
        <i>:</i>
        <span>{pad(parts.hours)}</span>
        <i>:</i>
        <span>{pad(parts.mins)}</span>
        <i>:</i>
        <span>{pad(parts.secs)}</span>
      </div>
      <p>NALANG BAGO ANG BIRTHDAY MO LOVE!</p>
    </section>
  )
}

export default CountdownTimer
