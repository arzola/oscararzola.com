function App() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-os-yellow text-zinc-900 font-body">
      {/* Top banner */}
      <header className="bg-os-red text-white text-center py-4 px-4">
        <p className="text-sm sm:text-base tracking-[0.3em] font-semibold uppercase">
          In vibe code trouble?
        </p>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col">
        <section className="flex-1 bg-os-yellow">
          <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-stretch gap-8 px-6 py-10 lg:py-16">
            <div className="lg:w-1/2 rounded-xl border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,0.85)] overflow-hidden flex items-center justify-center">
              <div className="flex flex-col items-center text-center">
<img src="/image.png" alt="Os" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content side */}
            <div className="lg:w-1/2 flex flex-col justify-between gap-8">
              <div className="space-y-6">
                <p className="text-sm sm:text-base font-semibold tracking-[0.35em] uppercase text-zinc-800">
                  Professional developer  
                  <span className="block text-os-red">Comedy-grade branding</span>
                </p>
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-tight uppercase tracking-[0.12em]">
                  Your sketchy
                  <span className="block text-os-red">code solver</span>
                </h1>
                <p className="text-base sm:text-lg text-zinc-900/90 max-w-xl">
                  I&apos;m Os, a senior developer who turns vibe-coded, legacy and
                  spaghetti projects into maintainable, testable systems. The site
                  is a joke. The refactors are not.
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
                </ul>

                <div className="flex flex-wrap items-center gap-5">
                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="inline-flex items-center justify-center rounded-md border-2 border-black bg-os-red px-7 py-3.5 text-base sm:text-lg font-semibold uppercase tracking-[0.25em] text-white shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] transition hover:-translate-y-0.5 hover:shadow-[10px_10px_0_0_rgba(0,0,0,0.85)]"
                  >
                    Fix my vibe code
                  </button>
                  <a
                    href="mailto:hi@oscararzola.com?subject=In%20vibe%20code%20trouble"
                    className="text-sm sm:text-base font-semibold underline decoration-dotted underline-offset-4"
                  >
                    Or email me: hi@oscararzola.com
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="border-2 border-black bg-white/80 px-3 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">
                  <p className="font-semibold uppercase tracking-[0.18em] text-os-red">
                    Case #404
                  </p>
                  <p className="mt-1 font-semibold">
                    The 2,000-line controller (Laravel)
                  </p>
                  <p className="mt-1 text-zinc-800">
                    Split into services, added tests, shaved 70% off bug reports.
                  </p>
                </div>
                <div className="border-2 border-black bg-white/80 px-3 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">
                  <p className="font-semibold uppercase tracking-[0.18em] text-os-red">
                    Case #500
                  </p>
                  <p className="mt-1 font-semibold">
                    The crashing mobile app (Flutter)
                  </p>
                  <p className="mt-1 text-zinc-800">
                    Untangled state, fixed memory leaks, and stabilized releases.
                  </p>
                </div>
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
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-os-yellow">
                  Call Os now
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
                      href="mailto:hi@oscararzola.com?subject=In%20vibe%20code%20trouble"
                      className="underline underline-offset-4 decoration-dotted"
                    >
                      hi@oscararzola.com
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-os-yellow">
                      Fake hotline:
                    </span>{' '}
                    (500) 404-CODE
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
                Laravel · PHP · Flutter · React Native · JavaScript
              </p>
              <p className="text-zinc-500">
                Built with real best practices, despite the sketchy branding.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-os-red text-white py-4 text-center text-xs sm:text-sm uppercase tracking-[0.25em]">
        <span>Not bug free · Se habla Español</span>
      </footer>
    </div>
  )
}

export default App
