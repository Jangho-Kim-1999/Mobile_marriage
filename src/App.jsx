import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const PHOTOS = [
  { src: '/Mobile_marriage/images/scene-1.png', pos: 'center 40%', text: '서로에게\n걸어가는 시간' },
  { src: '/Mobile_marriage/images/scene-2.png', pos: 'center 50%', text: null },
  { src: '/Mobile_marriage/images/scene-3.png', pos: 'center 50%', text: null },
  { src: '/Mobile_marriage/images/scene-4.png', pos: 'center 50%', text: null },
  { src: '/Mobile_marriage/images/scene-5.jpg', pos: 'center 40%', text: null },
]

const N = PHOTOS.length

function PhotoLayer({ photo, index, scrollYProgress }) {
  const step = 1 / N

  /* Compute opacity keyframes based on position */
  const isFirst = index === 0
  const isLast  = index === N - 1

  const fadeInStart  = isFirst ? 0                   : index * step - step * 0.2
  const fadeInEnd    = isFirst ? 0                   : index * step + step * 0.2
  const fadeOutStart = isLast  ? 1                   : (index + 1) * step - step * 0.2
  const fadeOutEnd   = isLast  ? 1                   : (index + 1) * step + step * 0.1

  const opacityIn  = useTransform(scrollYProgress, [fadeInStart,  fadeInEnd],  [isFirst ? 1 : 0, 1])
  const opacityOut = useTransform(scrollYProgress, [fadeOutStart, fadeOutEnd], [1, isLast ? 1 : 0])

  /* Combine: min of both so photo fades in AND fades out */
  const opacity = useTransform(
    [opacityIn, opacityOut],
    ([a, b]) => Math.min(a, b)
  )

  const scale = useTransform(
    scrollYProgress,
    [index * step, Math.min((index + 1) * step, 1)],
    [1.04, 1.0]
  )

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.img
        src={photo.src}
        alt=""
        style={{ scale, objectPosition: photo.pos }}
        className="w-full h-full object-cover"
        draggable={false}
      />
    </motion.div>
  )
}

function SceneText({ text, index, scrollYProgress }) {
  const step     = 1 / N
  const start    = index * step
  const mid      = start + step * 0.25
  const fadeOut  = start + step * 0.65
  const fadeEnd  = Math.min(fadeOut + step * 0.15, 1)

  const opacity = useTransform(
    scrollYProgress,
    [start, mid, fadeOut, fadeEnd],
    [0, 1, 1, 0]
  )
  const y = useTransform(scrollYProgress, [start, mid], [14, 0])

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <p className="font-serif text-white text-[1.3rem] font-light leading-[1.9] tracking-[0.15em] text-center whitespace-pre-line drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
        {text}
      </p>
    </motion.div>
  )
}

function WeddingInfoOverlay({ scrollYProgress }) {
  const step  = 1 / N
  const start = (N - 1) * step + step * 0.35
  const end   = Math.min(start + step * 0.35, 1)

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
  const y       = useTransform(scrollYProgress, [start, end], [18, 0])

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-center justify-end pb-[14%] pointer-events-none"
    >
      <div className="text-center space-y-5">
        <p className="text-[9px] tracking-[0.55em] text-white/70 uppercase">Small Wedding</p>

        <p className="font-serif text-white text-[1.5rem] font-light tracking-[0.12em]">
          홍길동 · 김영희
        </p>

        <div className="w-6 h-px bg-white/40 mx-auto" />

        <div className="space-y-2">
          <p className="font-serif text-white text-[1.05rem] font-light tracking-wider">
            2026. 06. 14&nbsp;&nbsp;SUN&nbsp;&nbsp;오후 1:00
          </p>
          <p className="text-[11px] text-white/70 tracking-[0.2em] font-light">
            카페 브리지
          </p>
          <p className="text-[10px] text-white/55 tracking-wide font-light">
            서울특별시 마포구 와우산로 21
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function ScrollHint({ scrollYProgress }) {
  const opacity = useTransform(scrollYProgress, [0, 0.06], [1, 0])
  return (
    <motion.div
      style={{ opacity }}
      className="absolute top-10 w-full text-center pointer-events-none"
    >
      <p className="text-[8px] tracking-[0.5em] text-white/60 uppercase">scroll</p>
    </motion.div>
  )
}

export default function App() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div className="bg-black max-w-[480px] mx-auto">
      {/* Scroll container — N × 160vh gives story pacing */}
      <div ref={containerRef} className="relative" style={{ height: `${N * 160}vh` }}>

        {/* Sticky viewport locked to screen */}
        <div className="sticky top-0 w-full overflow-hidden" style={{ height: '100dvh' }}>

          {/* Stacked photo layers, each crossfades on scroll */}
          {PHOTOS.map((photo, i) => (
            <PhotoLayer key={i} photo={photo} index={i} scrollYProgress={scrollYProgress} />
          ))}

          {/* Dark readability overlay */}
          <div className="absolute inset-0 bg-black/28 pointer-events-none" />

          {/* Per-photo text overlays */}
          {PHOTOS.map((photo, i) =>
            photo.text ? (
              <SceneText key={i} text={photo.text} index={i} scrollYProgress={scrollYProgress} />
            ) : null
          )}

          {/* Wedding info appears on last photo */}
          <WeddingInfoOverlay scrollYProgress={scrollYProgress} />

          {/* Scroll cue fades out immediately */}
          <ScrollHint scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </div>
  )
}
