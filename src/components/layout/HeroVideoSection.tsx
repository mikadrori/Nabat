import heroVideo from '../../assets/Hero Video.mp4'

const HEADER_HEIGHT = 82

export function HeroVideoSection() {
  return (
    <section
      className="relative w-full overflow-hidden leading-none"
      style={{
        marginTop: -HEADER_HEIGHT,
        height: '100dvh',
      }}
    >
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-top"
        aria-label="נבט — כמו שהטבע התכוון"
      />
    </section>
  )
}
