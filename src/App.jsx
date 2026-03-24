import { useEffect, useState } from 'react'

function App() {
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 59, seconds: 59 })
  const [glitchTitle, setGlitchTitle] = useState(false)

  useEffect(() => {
    let time = 23 * 3600 + 59 * 60 + 59
    const interval = setInterval(() => {
      const hours = Math.floor(time / 3600)
      const minutes = Math.floor((time % 3600) / 60)
      const seconds = time % 60
      setCountdown({ hours, minutes, seconds })
      time = time > 0 ? time - 1 : 23 * 3600 + 59 * 60 + 59
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setGlitchTitle(true)
      setTimeout(() => setGlitchTitle(false), 500)
    }, 5000)
    const glitchInterval = setInterval(() => {
      setGlitchTitle(true)
      setTimeout(() => setGlitchTitle(false), 500)
    }, 30000)
    return () => {
      clearTimeout(timeout)
      clearInterval(glitchInterval)
    }
  }, [])

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const formatTime = (n) => String(n).padStart(2, '0')

  return (
    <div className="min-h-screen flex flex-col text-zinc-900 font-body">
      {/* Scan Lines Overlay */}
      <div className="scan-lines" aria-hidden="true" />

      {/* REC Indicator */}
      <div className="rec-indicator" aria-hidden="true">
        <span className="rec-dot" />
        REC
      </div>

      {/* Scrolling Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span>Fix Your Vibe Code Today! · FREE Code Audit · No Bug Too Small! · Call Now! · Fix Your Vibe Code Today! · FREE Code Audit · No Bug Too Small! · Call Now! · Fix Your Vibe Code Today! · FREE Code Audit · No Bug Too Small! · Call Now! · Fix Your Vibe Code Today! · FREE Code Audit · No Bug Too Small! · Call Now! · </span>
          <span aria-hidden="true">Fix Your Vibe Code Today! · FREE Code Audit · No Bug Too Small! · Call Now! · Fix Your Vibe Code Today! · FREE Code Audit · No Bug Too Small! · Call Now! · Fix Your Vibe Code Today! · FREE Code Audit · No Bug Too Small! · Call Now! · Fix Your Vibe Code Today! · FREE Code Audit · No Bug Too Small! · Call Now! · </span>
        </div>
      </div>

      {/* Top banner */}
      <header className="bg-os-red text-white text-center py-4 px-4">
        <p className="text-sm sm:text-base tracking-[0.3em] font-semibold uppercase flash-text">
          In vibe code trouble?
        </p>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col">
        <section className="flex-1 bg-os-yellow paper-texture relative">
          {/* Coffee Stains */}
          <svg className="coffee-stain w-[120px] h-[120px]" style={{ top: '15%', right: '5%', transform: 'rotate(15deg)' }} viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#5c3d2e" strokeWidth="8" opacity="0.3" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#5c3d2e" strokeWidth="4" opacity="0.2" />
            <ellipse cx="30" cy="40" rx="8" ry="5" fill="#5c3d2e" opacity="0.15" />
          </svg>
          <svg className="coffee-stain w-[80px] h-[80px]" style={{ bottom: '35%', left: '8%', transform: 'rotate(-25deg)' }} viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#5c3d2e" strokeWidth="6" opacity="0.3" />
          </svg>

          <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-start gap-8 px-6 py-10 lg:py-16">
            {/* Image with Starburst */}
            <div className="lg:w-1/2 rounded-xl border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,0.85)] overflow-hidden relative bg-white">
              {/* Staple Marks */}
              <span className="staple staple-tl" aria-hidden="true" />
              <span className="staple staple-tr" aria-hidden="true" />

              {/* Starburst */}
              <div className="starburst" style={{ top: '-30px', right: '-20px', width: '100px', height: '100px' }} aria-hidden="true">
                <svg viewBox="0 0 100 100">
                  <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" fill="#c8102e" />
                  <polygon points="50,5 59,34 90,34 65,52 74,85 50,67 26,85 35,52 10,34 41,34" fill="#c8102e" stroke="#ffd100" strokeWidth="1" />
                </svg>
                <span className="starburst-text">FREE<br />AUDIT!</span>
              </div>

              <img src="/image.png" alt="Os" className="w-full h-auto block" />
            </div>

            {/* Content side */}
            <div className="lg:w-1/2 flex flex-col gap-6 relative">
              {/* Sticky Note */}
              <div className="sticky-note font-script text-base text-zinc-800 hidden sm:block" aria-hidden="true">
                Quick fix? Call Os!
                <br /><br />
                <span className="text-xs">(not a real phone)</span>
              </div>

              <div className="space-y-6">
                {/* As Seen On GitHub Badge */}
                <a
                  href="https://github.com/arzola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="seen-on-badge inline-flex hover:opacity-80 transition-opacity"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  As Seen On GitHub!
                </a>

                <p className="text-sm sm:text-base font-semibold tracking-[0.35em] uppercase text-zinc-800">
                  Professional developer
                  <span className="block text-os-red">Comedy-grade branding</span>
                </p>

                <h1
                  className={`font-display text-5xl sm:text-6xl md:text-7xl leading-tight uppercase tracking-[0.12em] vhs-title ${glitchTitle ? 'glitching' : ''}`}
                  data-text="Your sketchy code solver"
                >
                  <span className="highlight">Your sketchy</span>
                  <span className="block text-os-red">code solver</span>
                </h1>

                <p className="text-base sm:text-lg text-zinc-900/90 max-w-xl">
                  I&apos;m Os, a senior developer who turns vibe-coded, legacy and
                  spaghetti projects into maintainable, testable systems. <span className="highlight">The site
                  is a joke. The refactors are not.</span>
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-os-red" />
                    <span>
                      <strong className="font-semibold">Laravel & PHP</strong> — PSR-12,
                      PSR-4, refactors, bug hunts, and architecture.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-os-red" />
                    <span>
                      <strong className="font-semibold">Flutter & React Native</strong> —
                      widget hell, state chaos, and performance issues.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-os-red" />
                    <span>
                      <strong className="font-semibold">JavaScript & frontends</strong> —
                      globals, copy-paste, webpack/Vite headaches.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-os-red" />
                    <span>
                      <strong className="font-semibold">Codebase audits</strong> — honest
                      reports, concrete next steps, no bullshit.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-os-red" />
                    <span>
                      <strong className="font-semibold">Agentic Workflows</strong> — custom
                      AI pipelines, prompt engineering, and automation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-os-red" />
                    <span>
                      <strong className="font-semibold">SKILL Issues</strong> — patching agents
                      that skipped the right skills. (Ironic, I know.)
                    </span>
                  </li>
                </ul>

                {/* Countdown Timer */}
                <div className="countdown-timer">
                  <span className="text-xs uppercase tracking-wider">Offer expires in:</span>
                  <span className="countdown-time">
                    {formatTime(countdown.hours)}:{formatTime(countdown.minutes)}:{formatTime(countdown.seconds)}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-5">
                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="pulse-btn inline-flex items-center justify-center rounded-md border-2 border-black bg-os-red px-7 py-3.5 text-base sm:text-lg font-semibold uppercase tracking-[0.25em] text-white shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]"
                  >
                    Fix my vibe code
                  </button>
                  <a
                    href="mailto:vibe@oscararzola.com?subject=In%20vibe%20code%20trouble"
                    className="text-sm sm:text-base font-semibold underline decoration-dotted underline-offset-4"
                  >
                    Or email me: vibe@oscararzola.com
                  </a>
                </div>

                {/* Testimonial Bubble */}
                <div className="testimonial-bubble">
                  "Os fixed our 500-line useEffect chain. Now I can finally sleep at night."
                </div>
                <p className="testimonial-author">— Satisfied Client, Probably</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Files Row */}
        <section className="bg-os-yellow paper-texture py-10 border-t-4 border-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wide mb-6">
              Case Files
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border-2 border-black bg-white/80 px-4 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] relative">
                <span className="staple staple-tl" aria-hidden="true" />
                <p className="font-semibold uppercase tracking-[0.18em] text-os-red text-sm">
                  Case #404
                </p>
                <p className="mt-1 font-semibold text-sm">
                  The 2,000-line controller (Laravel)
                </p>
                <p className="mt-1 text-zinc-700 text-sm">
                  Split into services, added tests, shaved 70% off bug reports.
                </p>
              </div>
              <div className="border-2 border-black bg-white/80 px-4 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] relative">
                <span className="staple staple-tl" aria-hidden="true" />
                <p className="font-semibold uppercase tracking-[0.18em] text-os-red text-sm">
                  Case #500
                </p>
                <p className="mt-1 font-semibold text-sm">
                  The crashing mobile app (Flutter)
                </p>
                <p className="mt-1 text-zinc-700 text-sm">
                  Untangled state, fixed memory leaks, and stabilized releases.
                </p>
              </div>
              <div className="border-2 border-black bg-white/80 px-4 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] relative">
                <span className="staple staple-tl" aria-hidden="true" />
                <p className="font-semibold uppercase tracking-[0.18em] text-os-red text-sm">
                  Case #503
                </p>
                <p className="mt-1 font-semibold text-sm">
                  The vibe-coded MVP
                </p>
                <p className="mt-1 text-zinc-700 text-sm">
                  CEO&apos;s &quot;Uber in 2 days&quot; became &quot;Uber in 6 weeks, actually working.&quot;
                </p>
              </div>
              <div className="border-2 border-black bg-white/80 px-4 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] relative">
                <span className="staple staple-tl" aria-hidden="true" />
                <p className="font-semibold uppercase tracking-[0.18em] text-os-red text-sm">
                  Case #418
                </p>
                <p className="mt-1 font-semibold text-sm">
                  The AI agent spaghetti
                </p>
                <p className="mt-1 text-zinc-700 text-sm">
                  Prompts calling prompts calling prompts. Untangled into something maintainable.
                </p>
              </div>
              <div className="border-2 border-black bg-white/80 px-4 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] relative">
                <span className="staple staple-tl" aria-hidden="true" />
                <p className="font-semibold uppercase tracking-[0.18em] text-os-red text-sm">
                  Case #502
                </p>
                <p className="mt-1 font-semibold text-sm">
                  The &quot;it works on my machine&quot;
                </p>
                <p className="mt-1 text-zinc-700 text-sm">
                  Dockerized, documented, and now works everywhere. Even on &quot;my machine.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Row */}
        <section className="bg-zinc-100 py-10 border-t-4 border-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wide mb-6 text-zinc-900">
              What They Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border-2 border-zinc-300 shadow-md">
                <div className="testimonial-bubble mb-4">
                  &quot;I installed Claude and suddenly my codebase had 47 ESLint overrides. Os fixed it in 3 days. My lint config is finally under 10 lines.&quot;
                </div>
                <p className="text-sm font-semibold text-zinc-700 pl-12">
                  — Project Manager, SaaS Startup
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border-2 border-zinc-300 shadow-md">
                <div className="testimonial-bubble mb-4">
                  &quot;I wanted a Tinder for dogs. The agent gave me a Tinder for cats with a 404 on every profile. Os salvaged it. Now it&apos;s a Tinder for dogs AND cats.&quot;
                </div>
                <p className="text-sm font-semibold text-zinc-700 pl-12">
                  — Startup CEO, PetTech
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border-2 border-zinc-300 shadow-md">
                <div className="testimonial-bubble mb-4">
                  &quot;My intern vibe-coded a payment system. Os caught the security holes before production. Saved us from a very expensive mistake.&quot;
                </div>
                <p className="text-sm font-semibold text-zinc-700 pl-12">
                  — Senior Dev, FinTech
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border-2 border-zinc-300 shadow-md">
                <div className="testimonial-bubble mb-4">
                  &quot;Our repo had more comments than code. Os made it readable without losing any context. Finally, I can onboard new devs in days, not weeks.&quot;
                </div>
                <p className="text-sm font-semibold text-zinc-700 pl-12">
                  — CTO, Agency
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process + contact */}
        <section className="bg-zinc-900 text-zinc-50">
          <div className="mx-auto max-w-6xl px-6 py-10 lg:py-14 space-y-10">
            <div className="grid gap-8 lg:grid-cols-[2fr,1fr] lg:items-start">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide">
                  How I clean your code record
                </h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 text-base">
                  <div className="border border-zinc-700 bg-zinc-900/60 px-4 py-3 rounded-md">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-os-yellow">
                      Step 1 · Discovery
                    </p>
                    <p className="mt-1 font-semibold">
                      You explain the crime scene.
                    </p>
                    <p className="mt-1 text-zinc-200">
                      Stack, repo, deadlines, what keeps you up at night.
                    </p>
                  </div>
                  <div className="border border-zinc-700 bg-zinc-900/60 px-4 py-3 rounded-md">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-os-yellow">
                      Step 2 · Audit
                    </p>
                    <p className="mt-1 font-semibold">
                      I review the evidence.
                    </p>
                    <p className="mt-1 text-zinc-200">
                      Architecture, performance, tests, and nasty surprises.
                    </p>
                  </div>
                  <div className="border border-zinc-700 bg-zinc-900/60 px-4 py-3 rounded-md">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-os-yellow">
                      Step 3 · Fix
                    </p>
                    <p className="mt-1 font-semibold">
                      I refactor and patch.
                    </p>
                    <p className="mt-1 text-zinc-200">
                      Focus on safety, clarity, tests, and future maintainers.
                    </p>
                  </div>
                  <div className="border border-zinc-700 bg-zinc-900/60 px-4 py-3 rounded-md">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-os-yellow">
                      Step 4 · Handover
                    </p>
                    <p className="mt-1 font-semibold">
                      You get the clean record.
                    </p>
                    <p className="mt-1 text-zinc-200">
                      PRs, documentation, and suggested next steps.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact card */}
              <div
                id="contact"
                className="border-2 border-os-yellow bg-zinc-950 px-5 py-6 rounded-md shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-os-yellow flash-text">
                  Call Os now!
                </p>
                <p className="mt-3 text-xl font-extrabold">
                  Have a cursed codebase?
                </p>
                <p className="mt-2 text-base text-zinc-200">
                  Send me a quick summary of your stack, repo size and main
                  problems. I&apos;ll reply with options and a rough plan.
                </p>

                <div className="mt-5 space-y-2 text-base">
                  <p>
                    <span className="font-semibold text-os-yellow">
                      Email:
                    </span>{' '}
                    <a
                      href="mailto:vibe@oscararzola.com?subject=In%20vibe%20code%20trouble"
                      className="underline underline-offset-4 decoration-dotted"
                    >
                      vibe@oscararzola.com
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-os-yellow">
                      Fake hotline:
                    </span>{' '}
                    <span className="flash-text">(500) 404-CODE</span>
                  </p>
                  <p className="text-xs text-zinc-500 italic">
                    Not an actual phone line. Please don&apos;t call, your phone
                    deserves better.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-400">
              <p className="uppercase tracking-[0.3em] text-zinc-500">
                Laravel · PHP · Flutter · React Native · JavaScript · Agentic Workflows
              </p>
              <p className="text-zinc-500">
                Built with real best practices, despite the sketchy branding.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-os-red text-white py-4 text-center text-xs sm:text-sm uppercase tracking-[0.25em]">
        <span>Not bug free · Se habla Español · <span className="flash-text">Act Now!</span></span>
      </footer>
    </div>
  )
}

export default App