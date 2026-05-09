import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/* ─── BRIDE SVG ─────────────────────────────────────────────
   White flowing short dress, bouquet with ribbon
   Right arm reaches toward groom (right side)
────────────────────────────────────────────────────────────── */
function BrideSVG() {
  return (
    <svg viewBox="0 0 100 245" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hair – loose updo bun */}
      <ellipse cx="52" cy="18" rx="21" ry="14" fill="#2c1a0e" />
      <circle cx="67" cy="11" r="10" fill="#2c1a0e" />
      <ellipse cx="38" cy="16" rx="10" ry="7" fill="#2c1a0e" />
      {/* Head */}
      <circle cx="50" cy="33" r="19" fill="#f2dcc8" />
      {/* Eyes */}
      <circle cx="43" cy="31" r="2.2" fill="#3a2010" />
      <circle cx="57" cy="31" r="2.2" fill="#3a2010" />
      {/* Smile */}
      <path d="M 44 41 Q 50 46 56 41" stroke="#c08070" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Neck */}
      <rect x="44" y="51" width="12" height="11" rx="4" fill="#f2dcc8" />
      {/* Dress bodice – off shoulder */}
      <path d="M 30 58 Q 20 62 18 72 L 35 72 Z" fill="white" />
      <path d="M 70 58 Q 80 62 82 72 L 65 72 Z" fill="white" />
      <path d="M 33 62 L 67 62 L 65 105 L 35 105 Z" fill="white" />
      {/* Dress skirt – short, slightly flared */}
      <path d="M 35 103 Q 22 128 12 175 L 88 175 Q 78 128 65 103 Z" fill="white" />
      {/* Dress inner shadow */}
      <path d="M 45 62 L 42 105 L 58 105 L 55 62 Z" fill="rgba(220,210,200,0.25)" />
      {/* Left arm holding bouquet */}
      <path d="M 33 68 Q 17 87 11 112" stroke="#f2dcc8" strokeWidth="9" strokeLinecap="round" fill="none" />
      {/* Bouquet */}
      <circle cx="9" cy="120" r="14" fill="#d4ecc8" />
      <circle cx="2" cy="111" r="8" fill="#c4e0b4" />
      <circle cx="18" cy="109" r="7" fill="#e0f0d4" />
      <circle cx="5" cy="124" r="6" fill="#cce8b8" />
      <circle cx="20" cy="122" r="5" fill="#daf0c8" />
      {/* Ribbon streaming */}
      <path d="M 14 132 Q 8 148 5 168" stroke="#f8b8c8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 10 135 Q 4 152 2 172" stroke="#f8c8d4" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Right arm – reaching toward groom */}
      <path d="M 67 68 Q 83 81 93 98" stroke="#f2dcc8" strokeWidth="9" strokeLinecap="round" fill="none" />
      {/* Right hand */}
      <circle cx="95" cy="104" r="7" fill="#f2dcc8" />
      {/* Legs */}
      <path d="M 40 173 Q 35 200 32 232" stroke="#f2dcc8" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M 60 173 Q 65 200 68 232" stroke="#f2dcc8" strokeWidth="10" strokeLinecap="round" fill="none" />
    </svg>
  )
}

/* ─── GROOM SVG ─────────────────────────────────────────────
   White linen shirt, light cream trousers
   Left arm reaches toward bride (left side)
────────────────────────────────────────────────────────────── */
function GroomSVG() {
  return (
    <svg viewBox="0 0 100 245" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hair – short */}
      <ellipse cx="50" cy="22" rx="20" ry="13" fill="#1c1009" />
      <ellipse cx="34" cy="26" rx="8" ry="6" fill="#1c1009" />
      {/* Head */}
      <circle cx="50" cy="34" r="19" fill="#f0d8c0" />
      {/* Eyes */}
      <circle cx="43" cy="32" r="2.2" fill="#2a1408" />
      <circle cx="57" cy="32" r="2.2" fill="#2a1408" />
      {/* Smile */}
      <path d="M 43 42 Q 50 47 57 42" stroke="#b07060" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Neck */}
      <rect x="44" y="52" width="12" height="11" rx="4" fill="#f0d8c0" />
      {/* Shirt – loose linen */}
      <path d="M 27 62 L 73 62 L 71 128 L 29 128 Z" fill="white" />
      {/* V-collar */}
      <path d="M 37 62 L 50 79 L 63 62" fill="none" stroke="#ddd5cc" strokeWidth="1.5" />
      {/* Shirt shadow */}
      <path d="M 45 62 L 43 128 L 57 128 L 55 62 Z" fill="rgba(210,205,198,0.2)" />
      {/* Pants – cream/white */}
      <path d="M 29 126 L 26 238 L 47 238 L 50 155 L 53 238 L 74 238 L 71 126 Z" fill="#f0ebe2" />
      {/* Belt */}
      <rect x="29" y="124" width="42" height="6" rx="3" fill="#ddd5c8" />
      {/* Left arm – reaching LEFT toward bride */}
      <path d="M 28 70 Q 12 86 4 106" stroke="#f0d8c0" strokeWidth="9" strokeLinecap="round" fill="none" />
      {/* Left hand */}
      <circle cx="2" cy="112" r="7" fill="#f0d8c0" />
      {/* Right arm – relaxed */}
      <path d="M 72 70 Q 84 84 86 100" stroke="#f0d8c0" strokeWidth="9" strokeLinecap="round" fill="none" />
      {/* Shoes */}
      <ellipse cx="35" cy="240" rx="14" ry="5.5" fill="#d4c4b0" />
      <ellipse cx="65" cy="240" rx="14" ry="5.5" fill="#d4c4b0" />
    </svg>
  )
}

/* ─── HERO SECTION ──────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-[#f8f4ee] overflow-hidden">
      {/* Subtle decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full border border-[#d4b896] opacity-20" />
        <div className="absolute w-96 h-96 rounded-full border border-[#d4b896] opacity-10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="text-center px-10 relative z-10"
      >
        <p className="text-[10px] tracking-[0.5em] text-[#c4956a] uppercase mb-10">
          Small Wedding
        </p>
        <h1 className="font-serif text-[#3a3530] text-[1.55rem] font-light leading-[1.7] mb-8">
          우리의 작은 결혼식에<br />초대합니다
        </h1>
        <div className="w-7 h-px bg-[#c4956a] mx-auto mb-8 opacity-60" />
        <p className="text-[13px] text-[#9a8a80] tracking-[0.35em] font-light">
          홍길동 · 김영희
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-3"
      >
        <p className="text-[8px] tracking-[0.5em] text-[#c0b0a8] uppercase">scroll</p>
        <motion.div
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-[#c4956a] to-transparent"
        />
      </motion.div>
    </section>
  )
}

/* ─── SCROLL RUN SCENE ──────────────────────────────────────── */
function ScrollRunScene() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  /* Characters slide from edges → near center */
  const brideX = useTransform(scrollYProgress, [0, 0.88], ['-46vw', '-11vw'])
  const groomX = useTransform(scrollYProgress, [0, 0.88], [ '46vw',  '11vw'])

  /* Slight grow as they approach (depth illusion) */
  const charScale = useTransform(scrollYProgress, [0, 0.88], [0.8, 1])

  /* Sea / beach fade-in from bottom */
  const seaOpacity = useTransform(scrollYProgress, [0.1, 0.8], [0, 1])

  /* "Together" message */
  const msgOpacity = useTransform(scrollYProgress, [0.8, 0.96], [0, 1])
  const msgY       = useTransform(scrollYProgress, [0.8, 0.96], [18, 0])

  /* Hint text fades out */
  const hintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])

  return (
    <div ref={containerRef} className="relative h-[320vh]">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Sky → sea gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f4ee] via-[#edf5f4] to-[#c2e4e0]" />

        {/* Sea layer fades in */}
        <motion.div
          style={{ opacity: seaOpacity }}
          className="absolute bottom-0 left-0 right-0 h-[38%]"
        >
          <svg viewBox="0 0 400 160" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M 0 50 Q 50 28 100 50 Q 150 72 200 50 Q 250 28 300 50 Q 350 72 400 50 L 400 160 L 0 160 Z"
              fill="#90ccc8" opacity="0.45"
            />
            <path
              d="M 0 72 Q 60 52 120 72 Q 180 92 240 72 Q 300 52 360 72 L 400 80 L 400 160 L 0 160 Z"
              fill="#78c4c0" opacity="0.35"
            />
          </svg>
        </motion.div>

        {/* Sandy shore */}
        <div className="absolute bottom-0 left-0 right-0 h-[12%] bg-gradient-to-t from-[#e8d5a8] via-[#eddfc0] to-transparent" />

        {/* ── Characters ── */}
        <div
          className="absolute inset-0 flex items-end justify-center"
          style={{ paddingBottom: '12%' }}
        >
          {/* Bride – right arm reaches right toward groom */}
          <motion.div
            style={{ x: brideX, scale: charScale }}
            className="absolute w-[108px] origin-bottom"
          >
            <BrideSVG />
          </motion.div>

          {/* Groom – left arm reaches left toward bride */}
          <motion.div
            style={{ x: groomX, scale: charScale }}
            className="absolute w-[108px] origin-bottom"
          >
            <GroomSVG />
          </motion.div>
        </div>

        {/* Together message */}
        <motion.div
          style={{ opacity: msgOpacity, y: msgY }}
          className="absolute bottom-[6%] w-full text-center pointer-events-none"
        >
          <p className="font-serif text-[#5a4a40] text-sm tracking-[0.35em] font-light">
            그리고, 우리가 되었습니다
          </p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute top-8 w-full text-center pointer-events-none"
        >
          <p className="text-[8px] tracking-[0.45em] text-[#b8a89c] uppercase">
            scroll down
          </p>
        </motion.div>

      </div>
    </div>
  )
}

/* ─── WEDDING INFO SECTION ──────────────────────────────────── */
function WeddingInfoSection() {
  return (
    <section className="min-h-screen bg-[#f8f4ee] flex flex-col items-center justify-center px-8 py-28">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="w-full max-w-[300px] text-center"
      >
        <p className="text-[9px] tracking-[0.55em] text-[#c4956a] uppercase mb-14">
          Wedding Day
        </p>

        <div className="space-y-11">
          <div>
            <p className="text-[8px] tracking-[0.4em] text-[#c0b0a8] mb-3">DATE</p>
            <p className="font-serif text-[#3a3530] text-[1.9rem] font-light tracking-wider leading-none">
              2026. 06. 14
            </p>
            <p className="text-[12px] text-[#9a8a80] mt-2 tracking-[0.25em] font-light">
              일요일
            </p>
          </div>

          <div className="w-6 h-px bg-[#d4b896] mx-auto opacity-70" />

          <div>
            <p className="text-[8px] tracking-[0.4em] text-[#c0b0a8] mb-3">TIME</p>
            <p className="font-serif text-[#3a3530] text-[1.9rem] font-light tracking-wider leading-none">
              오후 1:00
            </p>
          </div>

          <div className="w-6 h-px bg-[#d4b896] mx-auto opacity-70" />

          <div>
            <p className="text-[8px] tracking-[0.4em] text-[#c0b0a8] mb-3">VENUE</p>
            <p className="font-serif text-[#3a3530] text-[1.4rem] font-light tracking-wide">
              카페 브리지
            </p>
            <p className="text-[11px] text-[#9a8a80] mt-3 leading-relaxed font-light tracking-wide">
              서울특별시 마포구 와우산로 21
            </p>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-[#e8ddd0]">
          <p className="font-serif text-[#c4956a] text-[0.95rem] font-light italic">
            Gildong &amp; Younghee
          </p>
          <p className="text-[8px] tracking-[0.38em] text-[#c8b8ae] mt-2">
            2026 · 06 · 14
          </p>
        </div>
      </motion.div>
    </section>
  )
}

/* ─── APP ───────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="bg-[#f8f4ee] max-w-[480px] mx-auto min-h-screen">
      <HeroSection />
      <ScrollRunScene />
      <WeddingInfoSection />
    </div>
  )
}
