import { useEffect, useMemo, useRef, useState } from "react";
import HeroSection from "./HeroSection";
import TimelineSection from "./TimelineSection";
import NowPlayingWidget from "./NowPlayingWidget";
import aphroditeTrack from "../asset/music/The Ridleys - Aphrodite (Lyric Video).mp4";
import beWithYouTrack from "../asset/music/be-with-you-128-ytshorts.savetube.me.mp3";
import loveIsTrack from "../asset/music/love-is-128-ytshorts.savetube.me.mp3";
import firstPreview from "../asset/img/1st-monthsary-preview.jpg";
import secondPreview from "../asset/img/2nd-preview.jpg";
import thirdPreview from "../asset/img/3rd-preview.jpg";
import may2025Image from "../asset/img/may-2025.jpg";
import may22025Image from "../asset/img/may-2-2025.jpg";
import may32025Video from "../asset/vid/may-3-2025.MP4?url";
import august2025Image from "../asset/img/august-2025.jpg";
import august22025Video from "../asset/vid/august-2-2025.MOV?url";
import october22025Image from "../asset/img/october-2-2025.jpg";
import october2025Video from "../asset/vid/October-2025.MOV?url";
import october32025Image from "../asset/img/octrober-3-2025.jpg";
import october42025Image from "../asset/img/october-4-2025.jpg";
import october52025Image from "../asset/img/october-5-2025.jpg";
import october62025Image from "../asset/img/october-6-2025.jpg";
import october72025Video from "../asset/img/october-7-2025.MOV?url";
import november2025Video from "../asset/vid/november-2025.mp4?url";
import november22025Video from "../asset/vid/november-2-2025.MOV?url";
import december2025Image from "../asset/img/december-2025.jpg";
import december12025Image from "../asset/img/december-1-2025.jpg";
import december22025Image from "../asset/img/december-2-2025.jpg";
import december32025Image from "../asset/img/december-3-2025.jpg";
import december42025Image from "../asset/img/december-4-2025.jpg";
import february2025Image from "../asset/img/february-2025.jpg";
import february22025Image from "../asset/img/february-2-2025.jpg";
import february32025Image from "../asset/img/february-3-2025.jpg";
import february42025Image from "../asset/img/february-4-2025.jpg";
import february52025Video from "../asset/vid/february-5-2025.MOV?url";

const timelineItems = [
  {
    year: "May 2025",
    title: "First Meet",
    frame: "polaroid",
    mediaType: "image",
    mediaSrc: may2025Image,
    note: "This was the time when I travelled to Nueva Ecija to meet you for the first time. Even though the place was unfamiliar to me I still did go out my comfort zone just to see you. Seeing you in person made me feel at ease. I knew right then and there that you were someone special.",
  },
  {
    year: "May 2025",
    title: "First Buoquet",
    frame: "polaroid",
    mediaType: "image",
    mediaSrc: may22025Image,
    note: "This was the time na andon tayo sa bahay niyo at patago pa ang pagkiss natin and first time ko din makilala si mame.",
  },
  {
    year: "May 2025",
    title: "Going Home",
    frame: "polaroid",
    mediaType: "video",
    mediaSrc: may32025Video,
    note: "Eto yung time na bitin na bitin na magkasama tayo. First meet natin pero nagkavibes agad tayo parang matagal na tayo magkakilala.",
  },
  {
    year: "August 2025",
    title: "Love Blooms",
    frame: "film",
    mediaType: "image",
    mediaSrc: august2025Image,
    note: "This was the time when I finally asked you to be my girlfriend. First time ko ulit bumaba magisa sa Manila and this was also the time na naranasan natin maglive-in.",
  },
  {
    year: "August 2025",
    title: "Song of Us",
    frame: "film",
    mediaType: "video",
    mediaSrc: august22025Video,
    note: "Eto yung kinantahan kita para tanungin kita para maging girlfriend mo. I was nervous so hindi smooth ang pagkanta ko but still I did it because I'm committed to you.",
  },
  {
    year: "October 2025",
    title: "Getting Ready",
    frame: "polaroid",
    mediaType: "image",
    mediaSrc: october22025Image,
    note: "This was the time na umuwi ako ng Nueva para sunduin kita papuntang Baguio. This wast also the time na nalasing ako sainyo HASHAHA.",
  },
  {
    year: "October 2025",
    title: "Our First Trip",
    frame: "film",
    mediaType: "video",
    mediaSrc: october2025Video,
    note: "This was the time na first trip natin together. I was so excited kasi kasama kita papuntang Baguio and I was also excited na ipasyal ka sa hometown ko.",
  },
  {
    year: "October 2025",
    title: "SM Baguio",
    frame: "polaroid",
    mediaType: "image",
    mediaSrc: october32025Image,
    note: "This was the time na inaasar kita at first time na makita ang fog hehehe.",
  },
  {
    year: "October 2025",
    title: "Good Taste",
    frame: "polaroid",
    mediaType: "image",
    mediaSrc: october42025Image,
    note: "This was the time na kumain tayo sa Good Taste at pinilit mo pa na ikaw magbayad non hmp. Pero I'm glad na nagustuhan mo ang food nila.",
  },
  {
    year: "October 2025",
    title: "Night Market",
    frame: "polaroid",
    mediaType: "image",
    mediaSrc: october52025Image,
    note: "This was the time na naglakad tayo sa night market at nag-enjoy sa mga pagkain at busog na busog. Hindi pa tayo makahanap ng damit ni Lester.",
  },
  {
    year: "October 2025",
    title: "Grumpy Joe",
    frame: "polaroid",
    mediaType: "image",
    mediaSrc: october62025Image,
    note: "Naenjoy ko din yung dinner natin dito at mas nakilala ka pa nila mama and lola.",
  },
  {
    year: "October 2025",
    title: "Christmas Village",
    frame: "polaroid",
    mediaType: "video",
    mediaSrc: october72025Video,
    note: "I enjoyed the lights and the christmas vibe dito. Medyo disappointed tayo pero I still enjoyed kasi kasama kita na pumasyal.",
  },
  {
    year: "November 2025",
    title: "Chilling at Home",
    frame: "polaroid",
    mediaType: "video",
    mediaSrc: november2025Video,
    note: "Yung time na toh nabitin tayo kasi hendi pumayag si mama na magstay pa ako ng isang araw huhuhu pero namiss kita niyan kaya its still a memorable moment for me. I enjoyed the time na magkasama tayo kahit nasa bahay lang tayo at nagchill lang.",
  },
  {
    year: "November 2025",
    title: "Baby Cayden",
    frame: "polaroid",
    mediaType: "video",
    mediaSrc: november22025Video,
    note: "2 months old na si Cayden dito tas dito mo din first na mabuhat si Cayden.",
  },
  {
    year: "December 2025",
    title: "Secret Garden",
    frame: "polaroid",
    mediaType: "image",
    mediaSrc: december2025Image,
    note: "This was the time na nagpunta tayo sa Secret Garden at nag-enjoy sa mga bundok at mga flowers. Hindi pa tayo nakabili ng tripod dito.",
  },
  {
    year: "December 2025",
    title: "Mines View",
    frame: "polaroid",
    mediaType: "image",
    mediaSrc: december12025Image,
    note: "This was an enjoyable time at nakaunwind tayo sa fresh air at view ng Mines View.",
  },
  {
    year: "December 2025",
    title: "Botanical Garden",
    frame: "polaroid",
    mediaType: "image",
    mediaSrc: december22025Image,
    note: "Ang daming nangyare dito na masasaya. Pinakacore memory ko talaga dito is yung nadapa ka sa stairs mwamwa.",
  },
  {
    year: "December 2025",
    title: "Dragon's Treasure",
    frame: "polaroid",
    mediaType: "image",
    mediaSrc: december32025Image,
    note: "Napakaganda ng view dito at nakakakalma. Very nice timing yung dating natin dito kasi saktong sunset siya.",
  },
  {
    year: "December 2025",
    title: "Cafe Stella",
    frame: "polaroid",
    mediaType: "image",
    mediaSrc: december42025Image,
    note: "Creepy moment dito kasi sa dinaanan natin pero worth it ang biyahe dahil maganda yung cafe.",
  },
  {
    year: "February 2025",
    title: "Rob's Birthday",
    frame: "polaroid",
    mediaType: "image",
    mediaSrc: february2025Image,
    note: "I was suprised this time kasi hindi ko inexpect na pupunta ka sa birthday ko. Thank you for coming sa birthday ko love, it was a very special moment love. I love you so much!",
  },
  {
    year: "February 2025",
    title: "Tavern Cafe",
    frame: "polaroid",
    mediaType: "image",
    mediaSrc: february22025Image,
    note: "Ang pinunta talaga natin dito ay yung view hindi yung kape at pagkain hihihi",
  },
  {
    year: "February 2025",
    title: "Valentines Date",
    frame: "polaroid",
    mediaType: "image",
    mediaSrc: february32025Image,
    note: "Our solo moment together napakafresh ng hangin dito.",
  },
  {
    year: "February 2025",
    title: "Lourdes Grotto",
    frame: "polaroid",
    mediaType: "image",
    mediaSrc: february42025Image,
    note: "Akala date ang pupuntahan naging hiking pala. Even though pagod tayo parehas na umakyat ng bundok I still treasure this our bonding time.",
  },
  {
    year: "February 2025",
    title: "Strawberry Farm",
    frame: "polaroid",
    mediaType: "video",
    mediaSrc: february52025Video,
    note: "The best place so far na napuntahan natin!",
  },
];

const TARGET_YEAR = 2026;
const TARGET_MONTH = 3;
const TARGET_DAY = 25;
const FORCE_FULL_MODE = true;

const PLAYLIST = [aphroditeTrack, beWithYouTrack, loveIsTrack];
const PREVIEW_IMAGES = [firstPreview, secondPreview, thirdPreview];
const SPECIAL_MESSAGE = {
  title: "A Special Message For You",
  body: "My love, if you are reading this, I hope you feel how deeply you are loved. Every photo, every video, and every little memory here carries a piece of my heart. Thank you for making my ordinary days feel softer, brighter, and more meaningful. No matter the distance or the time, I will always choose you, cherish you, and celebrate you. Happy birthday, love. This time capsule is only a small glimpse of how precious you are to me. I love you so so much love, and I miss you so much. See you soonest, my love. ❤️",
  signature: "— Your baby, Rob",
};

function getTargetDate(targetYear, targetMonth, targetDay) {
  return new Date(targetYear, targetMonth - 1, targetDay, 0, 0, 0);
}

function TimeCapsulePage() {
  const targetDate = useMemo(
    () => getTargetDate(TARGET_YEAR, TARGET_MONTH, TARGET_DAY),
    [],
  );
  const [now, setNow] = useState(Date.now());
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const timerId = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) {
      return;
    }

    const handleEnded = () => {
      setCurrentTrackIndex((index) => (index + 1) % PLAYLIST.length);
    };

    audioEl.addEventListener("ended", handleEnded);
    return () => audioEl.removeEventListener("ended", handleEnded);
  }, []);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) {
      return;
    }

    if (!isPlaying) {
      audioEl.pause();
      return;
    }

    const playPromise = audioEl.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Browser blocked autoplay — wait for first user interaction then start
        setIsPlaying(false);
        const startOnInteraction = () => {
          audioEl.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {});
          document.removeEventListener("click", startOnInteraction);
          document.removeEventListener("touchstart", startOnInteraction);
          document.removeEventListener("keydown", startOnInteraction);
        };
        document.addEventListener("click", startOnInteraction, { once: true });
        document.addEventListener("touchstart", startOnInteraction, { once: true });
        document.addEventListener("keydown", startOnInteraction, { once: true });
      });
    }
  }, [currentTrackIndex, isPlaying]);

  const isDateUnlocked = now >= targetDate.getTime();
  const isUnlocked = FORCE_FULL_MODE || isDateUnlocked;

  const handleToggleAudio = async () => {
    const audioEl = audioRef.current;
    if (!audioEl) {
      return;
    }

    if (audioEl.paused) {
      try {
        await audioEl.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    audioEl.pause();
    setIsPlaying(false);
  };

  const handlePrevTrack = () => {
    setCurrentTrackIndex(
      (index) => (index - 1 + PLAYLIST.length) % PLAYLIST.length,
    );
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((index) => (index + 1) % PLAYLIST.length);
  };

  return (
    <main className="scene">
      <audio
        ref={audioRef}
        src={PLAYLIST[currentTrackIndex]}
        autoPlay
        preload="auto"
      />
      <div className="ambient-light" />
      <div className="desk-surface" />
      <section
        className="monitor-shell"
        aria-label="Desktop monitor showing birthday website"
      >
        <div className="monitor-bezel">
          <div className="monitor-screen">
            <div className="grain-overlay" />
            <div className="vignette-overlay" />
            <div className="website-scroll">
              <HeroSection
                recipientName="My Love ❤️ Mary Ronalyn Garcia"
                isUnlocked={isUnlocked}
                targetYear={TARGET_YEAR}
                targetMonth={TARGET_MONTH}
                targetDay={TARGET_DAY}
              />
              {isUnlocked ? (
                <TimelineSection
                  items={timelineItems}
                  message={SPECIAL_MESSAGE}
                />
              ) : (
                <section
                  className="preview-section"
                  aria-label="Time capsule gallery preview"
                >
                  <h2>Birthday Capsule</h2>
                  <p>
                    This will be my special surprise for you. Even though I am
                    not with you physically, my love and memories are always
                    with you. I want you to feel my presence and love through
                    these moments captured in time. So enjoy this Birthday
                    Capsule that I've prepared for you.
                  </p>
                  <div className="preview-strip">
                    {PREVIEW_IMAGES.map((imageSrc, index) => (
                      <div
                        className="preview-card"
                        key={`preview-${index + 1}`}
                      >
                        <img
                          className="preview-image"
                          src={imageSrc}
                          alt={`Preview memory ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
            <NowPlayingWidget
              isPlaying={isPlaying}
              onToggle={handleToggleAudio}
              onPrev={handlePrevTrack}
              onNext={handleNextTrack}
            />
          </div>
        </div>
        <div className="monitor-stand" />
      </section>
    </main>
  );
}

export default TimeCapsulePage;
