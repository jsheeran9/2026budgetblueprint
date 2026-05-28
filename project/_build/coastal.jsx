// coastal.jsx — Coastal Builders Associates · hi-fi landing page
// Rummah-inspired editorial layout. Hero = full-bleed photo + dark overlay,
// left text + FUDs + social proof, right lead-capture card. Sections below.
// Wrapped in IIFE so local component names (Nav, Footer, Field, ...) don't
// collide with global ones from variations.jsx.

(function () {

  const CB_W = 1440;

  // ── Palettes ────────────────────────────────────────────────────────
  const PALETTES = {
    slate: {
      paper: '#EFEAE0', // warm marble
      paperAlt: '#E6E0D2',
      ink: '#1B1F23',
      inkAlt: '#272B30',
      accent: '#A37A3D', // brass
      accentDark: '#8A6630',
      muted: '#6F6A60',
      rule: 'rgba(27,31,35,.14)',
      tape: 'rgba(255, 246, 220, .75)'
    },
    brass: {
      paper: '#F2E7CF',
      paperAlt: '#E8DAB8',
      ink: '#2A1E0F',
      inkAlt: '#3A2A18',
      accent: '#7A4B1E',
      accentDark: '#5C3812',
      muted: '#6E5B3C',
      rule: 'rgba(42,30,15,.16)',
      tape: 'rgba(255, 240, 200, .8)'
    },
    marble: {
      paper: '#F6F2EB',
      paperAlt: '#ECE6DA',
      ink: '#1F1F22',
      inkAlt: '#2C2C30',
      accent: '#7E7568', // taupe
      accentDark: '#5E574C',
      muted: '#827E76',
      rule: 'rgba(31,31,34,.12)',
      tape: 'rgba(245, 240, 220, .8)'
    },
    storm: {
      paper: '#E4E5E2',
      paperAlt: '#D3D5D0',
      ink: '#13181C',
      inkAlt: '#1E2429',
      accent: '#3A5A6B', // coastal slate-blue
      accentDark: '#2A4555',
      muted: '#5F6A6E',
      rule: 'rgba(19,24,28,.16)',
      tape: 'rgba(220, 230, 230, .7)'
    }
  };

  // Curated unsplash placeholders (architecture / interiors / portraits).
  const R = window.__resources || {};
  const IMG = {
    hero: R.hero,
    heroAlt: R.heroAlt,
    heroLight: R.heroLight,
    about1: R.about1,
    about2: R.about2,
    svc1: R.svc1,
    svc2: R.svc2,
    svc3: R.svc3,
    svc4: R.svc4
  };

  const HERO_IMAGES = [
  { key: 'spa', label: 'Spa', url: IMG.hero },
  { key: 'modern', label: 'Modern', url: IMG.heroAlt },
  { key: 'light', label: 'Light', url: IMG.heroLight }];


  // ── shared inline styles ────────────────────────────────────────────
  const ff = {
    serif: '"Instrument Serif", "Cormorant Garamond", Georgia, serif',
    sans: '"Geist", "Söhne", ui-sans-serif, system-ui, sans-serif',
    mono: '"Geist Mono", ui-monospace, "SF Mono", Menlo, monospace'
  };

  function CoastalLanding({ t }) {
    const p = PALETTES[t.palette] || PALETTES.slate;
    const heroImg = HERO_IMAGES.find((h) => h.key === t.heroImage)?.url || IMG.hero;

    return (
      <div style={{ width: CB_W, fontFamily: ff.sans, color: p.ink, background: p.paper,
        position: 'relative', overflow: 'hidden' }}>
      <Nav p={p} />
      <Hero p={p} heroImg={heroImg} t={t} />
      <Services p={p} />
      <AboutCollage p={p} showTape={t.collageTape} />
      <Process p={p} />
      <ServiceArea p={p} />
      <Contact p={p} />
      <Footer p={p} />
    </div>);

  }

  // ══════════════════════════════════════════════════════════════════════
  // NAV
  // ══════════════════════════════════════════════════════════════════════
  function Nav({ p }) {
    return (
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 30,
        padding: '24px 56px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: `1px solid rgba(255,255,255,.12)`
      }}>
      <Logomark color="#fff" />
      <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
        {['Services', 'Projects', 'About', 'Process', 'FAQ'].map((l) =>
          <span key={l} style={{ fontFamily: ff.sans, fontSize: 13, color: '#fff',
            letterSpacing: '.04em', fontWeight: 400 }}>{l}</span>
          )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{ fontFamily: ff.mono, fontSize: 11.5, color: 'rgba(255,255,255,.78)',
            letterSpacing: '.06em' }}>(361) 555-0142</span>
        <button style={{
            fontFamily: ff.sans, fontSize: 13, fontWeight: 500,
            padding: '11px 20px', borderRadius: 999, border: '1px solid rgba(255,255,255,.45)',
            background: 'transparent', color: '#fff', letterSpacing: '.02em', cursor: 'pointer'
          }}>Free Bathroom Consultation↗</button>
      </div>
    </div>);

  }

  function Logomark({ color }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path d="M3 22 Q 10 16, 17 22 T 31 22" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M3 27 Q 10 21, 17 27 T 31 27" stroke={color} strokeWidth="1.5" fill="none" opacity=".55" />
        <path d="M9 14 L 17 6 L 25 14 L 25 22 L 9 22 Z" stroke={color} strokeWidth="1.5" fill="none" />
      </svg>
      <div style={{ lineHeight: 1 }}>
        <div style={{ fontFamily: ff.serif, fontSize: 22, color, letterSpacing: '-.005em' }}>Coastal Builders Associates

          </div>
        <div style={{ fontFamily: ff.mono, fontSize: 9.5, color, letterSpacing: '.22em',
            opacity: .68, marginTop: 3 }}>ASSOCIATES · EST. 2003

          </div>
      </div>
    </div>);

  }

  // ══════════════════════════════════════════════════════════════════════
  // HERO — full-bleed image, dark overlay, left text, right lead form
  // ══════════════════════════════════════════════════════════════════════
  function Hero({ p, heroImg, t }) {
    return (
      <section style={{ position: 'relative', minHeight: 820, color: '#fff',
        overflow: 'hidden' }}>
      {/* Image */}
      <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'grayscale(.08) contrast(1.02)'
        }} />
      {/* Overlay gradients */}
      <div style={{
          position: 'absolute', inset: 0,
          background:
          `linear-gradient(110deg, rgba(15,18,21,.86) 0%, rgba(15,18,21,.72) 38%, rgba(15,18,21,.28) 72%, rgba(15,18,21,.55) 100%),
           linear-gradient(180deg, rgba(15,18,21,.55) 0%, rgba(15,18,21,.05) 30%, rgba(15,18,21,.65) 100%)`
        }} />

      <div style={{
          position: 'relative', zIndex: 2, padding: '180px 56px 88px',
          display: 'grid', gridTemplateColumns: '1.25fr .9fr', gap: 64, alignItems: 'start'
        }}>
        {/* LEFT — pitch */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 }}>
            <span style={{ width: 28, height: 1, background: 'rgba(255,255,255,.6)' }}></span>
            <span style={{ fontFamily: ff.mono, fontSize: 11, letterSpacing: '.24em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,.85)' }}>
              2026 Bathroom Budget Blueprint · Free Guide
            </span>
          </div>

          <h1 style={{
              fontFamily: ff.serif, fontSize: 88, lineHeight: 1.02, margin: 0,
              letterSpacing: '-.018em', fontWeight: 400, maxWidth: 760
            }}>
            {t.headline.split('*').map((chunk, i) =>
              i % 2 === 1 ?
              <em key={i} style={{ fontStyle: 'italic', color: p.accent }}>{chunk}</em> :
              <span key={i}>{chunk}</span>
              )}
          </h1>

          <p style={{
              fontFamily: ff.sans, fontSize: 18.5, lineHeight: 1.55, marginTop: 28,
              color: 'rgba(255,255,255,.85)', maxWidth: 560, fontWeight: 300
            }}>
            {t.subheadline}
          </p>

          {/* FUDs */}
          <div style={{ marginTop: 38, display: 'grid', gap: 14, maxWidth: 560 }}>
            {[
              ['Real Texas pricing', 'Pulled from 200+ Coastal Bend & Hill Country bathroom remodels.'],
              ['No salesy follow-up', 'One welcome email, one optional check-in. That\'s it.'],
              ['Read it in 12 minutes', '18 pages, line-itemized, designed to be skimmed or studied.']].
              map(([t1, t2], i) =>
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '22px 1fr',
                gap: 14, alignItems: 'baseline' }}>
                <span style={{ width: 18, height: 18, borderRadius: 999,
                  background: p.accent, color: '#fff', display: 'inline-grid',
                  placeItems: 'center', fontSize: 11, fontWeight: 600,
                  fontFamily: ff.sans, transform: 'translateY(2px)' }}>✓</span>
                <div>
                  <span style={{ fontFamily: ff.sans, fontSize: 16, fontWeight: 500 }}>{t1}</span>
                  <span style={{ fontFamily: ff.sans, fontSize: 15,
                    color: 'rgba(255,255,255,.65)', fontWeight: 300 }}> — {t2}</span>
                </div>
              </div>
              )}
          </div>

          {/* Social proof row */}
          <div style={{ marginTop: 44, display: 'flex', alignItems: 'center', gap: 28,
              paddingTop: 26, borderTop: '1px solid rgba(255,255,255,.18)',
              maxWidth: 560 }}>
            <div>
              <div style={{ fontFamily: ff.sans, fontSize: 14, color: '#fff',
                  fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Stars color={p.accent} /> Rated 5 Stars on Google
                <GoogleG />
              </div>
              <div style={{ fontFamily: ff.sans, fontSize: 13,
                  color: 'rgba(255,255,255,.7)', marginTop: 3 }}>
                 <b style={{ fontWeight: 600, color: '#fff' }}></b> Texas
                homeowners last month
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Lead capture form */}
        <LeadCard p={p} t={t} />
      </div>

      {/* Bottom marquee strip */}
      <div style={{ position: 'relative', zIndex: 2,
          borderTop: '1px solid rgba(255,255,255,.15)',
          padding: '18px 56px', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
          color: 'rgba(255,255,255,.7)' }}>
        {['VICTORIA · TX', 'AUSTIN · TX', 'SAN ANTONIO · TX',
          'HOUSTON · TX', 'CORPUS CHRISTI · TX'].map((c) =>
          <span key={c} style={{ fontFamily: ff.mono, fontSize: 11.5,
            letterSpacing: '.2em' }}>{c}</span>
          )}
      </div>
    </section>);

  }

  function Stars({ color }) {
    return (
      <span style={{ display: 'inline-flex', gap: 1, color }}>
      {[0, 1, 2, 3, 4].map((i) =>
        <svg key={i} width="13" height="13" viewBox="0 0 13 13">
          <polygon fill={color} points="6.5,1 8.3,4.7 12.4,5.3 9.5,8.1 10.1,12 6.5,10.1 2.9,12 3.5,8.1 0.6,5.3 4.7,4.7" />
        </svg>
        )}
    </span>);

  }

  function GoogleG() {
    return (
      <svg width="14" height="14" viewBox="0 0 48 48" style={{ marginLeft: 4, flex: 'none' }} aria-label="Google">
        <path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
        <path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
        <path fill="#FBBC05" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
        <path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
      </svg>);

  }

  function LeadCard({ p, t }) {
    return (
      <div style={{
        background: p.paper, color: p.ink, borderRadius: 14,
        padding: '34px 32px 28px',
        boxShadow: '0 30px 60px rgba(0,0,0,.35), 0 8px 20px rgba(0,0,0,.18)',
        position: 'relative'
      }}>
      {/* Tag */}
      <div style={{ position: 'absolute', top: -14, left: 24,
          background: p.accent, color: '#fff',
          fontFamily: ff.mono, fontSize: 10.5, letterSpacing: '.18em',
          padding: '6px 12px', borderRadius: 4 }}>
        FREE · 18-PAGE PDF
      </div>

      <div style={{ fontFamily: ff.mono, fontSize: 11, letterSpacing: '.22em',
          color: p.muted, marginBottom: 10 }}>
        STEP 01 / 01
      </div>
      <h2 style={{ fontFamily: ff.serif, fontSize: 36, lineHeight: 1.05,
          margin: 0, fontWeight: 400, letterSpacing: '-.012em' }}>
        Send me the <em style={{ fontStyle: 'italic', color: p.accent }}>Blueprint</em>.
      </h2>
      <p style={{ fontFamily: ff.sans, fontSize: 14.5, color: p.muted,
          marginTop: 10, lineHeight: 1.45, fontWeight: 400 }}>Quick delivery. No call required. 

        </p>

      <div style={{ marginTop: 22, display: 'grid', gap: 14 }}>
        <Field label="Full name" placeholder="Jordan Hayes" p={p} />
        <Field label="Email" placeholder="jordan@example.com" p={p} type="email" />
        <Field label="Phone (optional)" placeholder="(361) 555-0149" p={p} />

        <button style={{
            marginTop: 8, padding: '17px 22px', borderRadius: 10,
            background: p.ink, color: p.paper, border: 'none', cursor: 'pointer',
            fontFamily: ff.sans, fontSize: 15.5, fontWeight: 500,
            letterSpacing: '.01em',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between'
          }}>
          <span>{t.ctaCopy}</span>
          <span style={{ fontFamily: ff.serif, fontStyle: 'italic',
              fontSize: 22, color: p.accent }}>↗</span>
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 8,
            alignItems: 'center', marginTop: 4 }}>
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M6 1 L 1 4 L 1 6.5 Q 1 9.5 6 11 Q 11 9.5 11 6.5 L 11 4 Z"
              stroke={p.muted} strokeWidth="1" fill="none" />
            <path d="M4 6 L 5.5 7.5 L 8 5" stroke={p.accent}
              strokeWidth="1.4" fill="none" strokeLinecap="round" />
          </svg>
          <span style={{ fontFamily: ff.mono, fontSize: 10.5,
              letterSpacing: '.12em', color: p.muted,
              textTransform: 'uppercase' }}>WE NEVER SELL YOUR INFO.

            </span>
        </div>
      </div>
    </div>);

  }

  function Field({ label, placeholder, p, type = 'text' }) {
    return (
      <label style={{ display: 'block' }}>
      <span style={{ fontFamily: ff.sans, fontSize: 12, fontWeight: 500,
          color: p.muted, letterSpacing: '.02em',
          textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
        {label}
      </span>
      <div style={{
          background: p.paperAlt, border: `1px solid ${p.rule}`,
          borderRadius: 8, padding: '13px 14px',
          fontFamily: ff.sans, fontSize: 15.5, color: p.muted, fontWeight: 300
        }}>
        {placeholder}
      </div>
    </label>);

  }

  // ══════════════════════════════════════════════════════════════════════
  // SOCIAL PROOF BAR — under the hero
  // ══════════════════════════════════════════════════════════════════════
  function SocialProofBar({ p }) {
    return (
      <div style={{ background: p.paperAlt, borderBottom: `1px solid ${p.rule}`,
        padding: '24px 56px', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center', gap: 32 }}>
      <span style={{ fontFamily: ff.mono, fontSize: 11, letterSpacing: '.22em',
          color: p.muted }}>AS FEATURED IN</span>
      {['HOUZZ', 'KHOU 11', 'TEXAS MONTHLY', 'NEXT DOOR', 'NARI · GULF COAST'].map((b) =>
        <span key={b} style={{ fontFamily: ff.serif, fontSize: 24, color: p.ink,
          letterSpacing: '.01em', fontWeight: 400, opacity: .68 }}>{b}</span>
        )}
    </div>);

  }

  // ══════════════════════════════════════════════════════════════════════
  // SERVICES — 4-column grid w/ numbered italic eyebrows
  // ══════════════════════════════════════════════════════════════════════
  const SERVICES = [
  { n: '01', title: 'Bathroom Remodels',
    body: 'From a one-day refresh to a primary-suite rebuild — gut renovations, layout shifts, custom tile, glass.',
    img: IMG.svc1,
    bullets: ['Wet-room conversions', 'Curbless walk-ins', 'Custom vanities', 'Heated floors'] },
  { n: '02', title: 'Aging in Place',
    body: 'Stay in the home you love. Quiet, dignified modifications engineered by a CAPS-certified team.',
    img: IMG.svc2,
    bullets: ['Grab bars (concealed)', 'Roll-in showers', 'Comfort-height fixtures', 'ADA layouts'] },
  { n: '03', title: 'Aluminum Ramps',
    body: 'Modular, code-compliant ramps installed in under 48 hours. Rent or own. Removable, returnable, resellable.',
    img: IMG.svc3,
    bullets: ['EZ-Access certified', 'Up to 26\u2032 runs', 'Threshold transitions', 'Rentals from $189/mo'] }];


  function Services({ p }) {
    return (
      <section style={{ padding: '120px 56px 110px', background: p.paper }}>
      <div style={{ display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: 56 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <span style={{ width: 28, height: 1, background: p.accent }}></span>
            <span style={{ fontFamily: ff.mono, fontSize: 11, letterSpacing: '.24em',
                color: p.accent }}>SERVICES · 01 / 03</span>
          </div>
          <h2 style={{ fontFamily: ff.serif, fontSize: 64, lineHeight: 1.0,
              margin: 0, letterSpacing: '-.018em', fontWeight: 400,
              maxWidth: 800 }}>
            Three things. Done <em style={{ fontStyle: 'italic', color: p.accent }}>extraordinarily</em> well.
          </h2>
        </div>
        <p style={{ fontFamily: ff.sans, fontSize: 16, color: p.muted,
            maxWidth: 320, lineHeight: 1.55, fontWeight: 300, margin: 0 }}>
          We don't pretend to do everything. We specialize — and we've stayed
          specialized for seventeen years.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, maxWidth: 1180, margin: '0 auto' }}>
        {SERVICES.map((s) =>
          <article key={s.n} style={{
            background: p.paperAlt, borderRadius: 14, padding: 22,
            display: 'flex', flexDirection: 'column', minHeight: 520,
            border: `1px solid ${p.rule}`
          }}>
            <div style={{ width: '100%', height: 220, borderRadius: 8,
              backgroundImage: `url(${s.img})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              marginBottom: 22 }} />
            <div style={{ fontFamily: ff.serif, fontStyle: 'italic',
              fontSize: 18, color: p.accent, marginBottom: 8 }}>
              <span style={{ fontFamily: ff.mono, fontStyle: 'normal',
                fontSize: 11, letterSpacing: '.2em',
                marginRight: 10 }}>{s.n}</span>
              {s.title.toLowerCase()}
            </div>
            <h3 style={{ fontFamily: ff.serif, fontSize: 28, lineHeight: 1.1,
              margin: 0, fontWeight: 400, letterSpacing: '-.01em' }}>
              {s.title}
            </h3>
            <p style={{ fontFamily: ff.sans, fontSize: 14.5, lineHeight: 1.5,
              color: p.muted, marginTop: 10, fontWeight: 300, flex: 1 }}>
              {s.body}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '18px 0 0',
              borderTop: `1px solid ${p.rule}`, paddingTop: 14 }}>
              {s.bullets.map((b) =>
              <li key={b} style={{ fontFamily: ff.sans, fontSize: 13,
                color: p.ink, padding: '5px 0',
                display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 4, height: 4, borderRadius: 999,
                  background: p.accent, flex: 'none' }}></span>
                  {b}
                </li>
              )}
            </ul>
          </article>
          )}
      </div>
    </section>);

  }

  // ══════════════════════════════════════════════════════════════════════
  // ABOUT / COLLAGE — paired images with tape, numbered feature list
  // ══════════════════════════════════════════════════════════════════════
  function AboutCollage({ p, showTape }) {
    return (
      <section style={{ background: p.paperAlt, padding: '120px 56px',
        borderTop: `1px solid ${p.rule}`,
        borderBottom: `1px solid ${p.rule}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
          alignItems: 'center' }}>
        {/* Collage */}
        <div style={{ position: 'relative', minHeight: 620 }}>
          <div style={{
              position: 'absolute', left: 0, top: 30, width: 380, height: 480,
              backgroundImage: `url(${IMG.about1})`, backgroundSize: 'cover',
              backgroundPosition: 'center', borderRadius: 4,
              boxShadow: '0 20px 40px rgba(0,0,0,.18)'
            }}>
            {showTape &&
              <div style={{ position: 'absolute', top: -14, left: 60, width: 120, height: 28,
                background: p.tape,
                transform: 'rotate(-4deg)',
                boxShadow: '0 2px 4px rgba(0,0,0,.08)' }}></div>
              }
          </div>
          <div style={{
              position: 'absolute', right: 0, top: 130, width: 360, height: 460,
              backgroundImage: `url(${IMG.about2})`, backgroundSize: 'cover',
              backgroundPosition: 'center', borderRadius: 4,
              boxShadow: '0 20px 40px rgba(0,0,0,.18)',
              transform: 'rotate(2deg)'
            }}>
            {showTape &&
              <div style={{ position: 'absolute', top: -10, right: 60, width: 100, height: 26,
                background: p.tape,
                transform: 'rotate(5deg)',
                boxShadow: '0 2px 4px rgba(0,0,0,.08)' }}></div>
              }
          </div>
          {/* polaroid card */}
          <div style={{
              position: 'absolute', left: 180, bottom: 0, width: 200,
              background: p.paper, padding: '14px 14px 18px',
              boxShadow: '0 18px 36px rgba(0,0,0,.22)',
              transform: 'rotate(-6deg)'
            }}>
            <div style={{ width: '100%', height: 140,
                background: `linear-gradient(135deg, ${p.accent}, ${p.accentDark})`,
                borderRadius: 2 }}></div>
            <div style={{ marginTop: 10, fontFamily: ff.serif, fontStyle: 'italic',
                fontSize: 16, color: p.ink, lineHeight: 1.2 }}>Main Street Bath — Victoria, 2025

              </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <span style={{ width: 28, height: 1, background: p.accent }}></span>
            <span style={{ fontFamily: ff.mono, fontSize: 11, letterSpacing: '.24em',
                color: p.accent }}>WHO WE ARE</span>
          </div>
          <h2 style={{ fontFamily: ff.serif, fontSize: 60, lineHeight: 1, margin: 0,
              letterSpacing: '-.018em', fontWeight: 400 }}>
            A small <em style={{ fontStyle: 'italic', color: p.accent }}>Texas</em> team,
            obsessed with bathrooms.
          </h2>
          <p style={{ fontFamily: ff.sans, fontSize: 17, lineHeight: 1.6,
              color: p.muted, marginTop: 22, fontWeight: 300, maxWidth: 540 }}>
            Coastal Builders was started in 2009 by a licensed GC and his
            mother-in-law after she fell in the shower of a home she'd lived in
            for thirty-one years. We've spent seventeen years getting better at
            one thing: bathroom renovations that homeowners actually trust.
          </p>

          <div style={{ marginTop: 38, display: 'grid', gap: 6 }}>
            {[
              ['01', 'Seventeen years specializing in baths',
              'Not a generalist with a side project. Baths are 80% of what we build.'],
              ['02', 'CAPS-certified for aging in place',
              'Three of our four PMs hold the Certified Aging-in-Place Specialist designation.'],
              ['03', 'Fixed-price contracts',
              'No surprise "allowances." If we underestimate, that\'s our problem, not yours.'],
              ['04', 'Texas-only, on purpose',
              'Five towns, one team, twenty-minute response time. We won\'t outgrow that.']].
              map(([n, t1, t2]) =>
              <div key={n} style={{ display: 'grid', gridTemplateColumns: '72px 1fr',
                gap: 20, padding: '18px 0',
                borderTop: `1px solid ${p.rule}` }}>
                <span style={{ fontFamily: ff.serif, fontStyle: 'italic', fontSize: 28,
                  color: p.accent, lineHeight: 1 }}>{n}</span>
                <div>
                  <div style={{ fontFamily: ff.serif, fontSize: 22,
                    fontWeight: 400, letterSpacing: '-.005em' }}>{t1}</div>
                  <div style={{ fontFamily: ff.sans, fontSize: 14.5,
                    color: p.muted, marginTop: 4, lineHeight: 1.5,
                    fontWeight: 300 }}>{t2}</div>
                </div>
              </div>
              )}
            <div style={{ borderTop: `1px solid ${p.rule}` }}></div>
          </div>
        </div>
      </div>
    </section>);

  }

  // ══════════════════════════════════════════════════════════════════════
  // PROCESS — dark slate, 3 numbered steps
  // ══════════════════════════════════════════════════════════════════════
  function Process({ p }) {
    const steps = [
    { n: '01', t: 'Walkthrough & line-item quote',
      d: 'We come to your home (or video call). You leave with a fixed-price quote broken down to the dollar — no "allowances," no surprises.',
      time: '~60 min'
    },
    { n: '02', t: 'Design & material selection',
      d: 'Optional. Our designer specs tile, fixtures, and finishes from a curated catalog — or works with what you already love. Three rounds, fixed fee.',
      time: '2 – 3 weeks'
    },
    { n: '03', t: 'Build, clean, hand over',
      d: 'A four-person crew, on site daily. Daily photo updates. A final walk-through, then a year of follow-ups to make sure everything stays right.',
      time: '3 – 6 weeks'
    }];


    return (
      <section style={{ background: p.ink, color: p.paper,
        padding: '120px 56px 130px', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: 64 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <span style={{ width: 28, height: 1, background: p.accent }}></span>
            <span style={{ fontFamily: ff.mono, fontSize: 11, letterSpacing: '.24em',
                color: p.accent }}>OUR PROCESS · 3 STEPS</span>
          </div>
          <h2 style={{ fontFamily: ff.serif, fontSize: 72, lineHeight: 1, margin: 0,
              letterSpacing: '-.02em', fontWeight: 400, maxWidth: 900 }}>
            From <em style={{ fontStyle: 'italic', color: p.accent }}>handshake</em> to hot
            shower, in three deliberate steps.
          </h2>
        </div>
        <div style={{ fontFamily: ff.mono, fontSize: 11, letterSpacing: '.22em',
            color: 'rgba(255,255,255,.5)' }}>{"AVG. INSTALLATION: <1 WEEK"}

          </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
          borderTop: '1px solid rgba(255,255,255,.16)' }}>
        {steps.map((s, i) =>
          <div key={s.n} style={{
            padding: '40px 36px 36px',
            borderRight: i < steps.length - 1 ? '1px solid rgba(255,255,255,.16)' : 'none',
            position: 'relative', minHeight: 380
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between',
              alignItems: 'baseline', marginBottom: 32 }}>
              <span style={{ fontFamily: ff.serif, fontStyle: 'italic', fontSize: 72,
                color: p.accent, lineHeight: .8 }}>{s.n}</span>
              <span style={{ fontFamily: ff.mono, fontSize: 11, letterSpacing: '.18em',
                color: 'rgba(255,255,255,.55)' }}>{s.time}</span>
            </div>
            <h3 style={{ fontFamily: ff.serif, fontSize: 32, lineHeight: 1.1,
              margin: 0, fontWeight: 400, letterSpacing: '-.012em',
              maxWidth: 300 }}>{s.t}</h3>
            <p style={{ fontFamily: ff.sans, fontSize: 15, lineHeight: 1.6,
              color: 'rgba(255,255,255,.72)', marginTop: 18,
              fontWeight: 300, maxWidth: 340 }}>{s.d}</p>
          </div>
          )}
      </div>
    </section>);

  }

  // ══════════════════════════════════════════════════════════════════════
  // SERVICE AREA
  // ══════════════════════════════════════════════════════════════════════
  function ServiceArea({ p }) {
    const cities = [
    { name: 'Victoria', sub: 'HQ · Office on N Main', pop: 'pop. 65,000' },
    { name: 'Austin', sub: 'Project office', pop: 'pop. 974,000' },
    { name: 'Port Lavaca', sub: 'Coastal Bend', pop: 'pop. 12,300' },
    { name: 'Cuero', sub: 'DeWitt County', pop: 'pop. 7,800' },
    { name: 'Goliad', sub: 'Historic district', pop: 'pop. 1,700' }];

    return (
      <section style={{ padding: '120px 56px', background: p.paper }}>
      <div style={{ display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 80,
          alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <span style={{ width: 28, height: 1, background: p.accent }}></span>
            <span style={{ fontFamily: ff.mono, fontSize: 11, letterSpacing: '.24em',
                color: p.accent }}>SERVICE AREA</span>
          </div>
          <h2 style={{ fontFamily: ff.serif, fontSize: 60, lineHeight: 1, margin: 0,
              letterSpacing: '-.018em', fontWeight: 400 }}>
            Five Texas towns. <em style={{ fontStyle: 'italic', color: p.accent }}>That's
            our entire map.</em>
          </h2>
          <p style={{ fontFamily: ff.sans, fontSize: 16, lineHeight: 1.6,
              color: p.muted, marginTop: 20, fontWeight: 300, maxWidth: 380 }}>
            We stay small so we can show up. Twenty-minute response within
            Victoria, same-day within forty miles, scheduled visits beyond.
          </p>
        </div>

        <div>
          {cities.map((c, i) =>
            <div key={c.name} style={{
              display: 'grid', gridTemplateColumns: '80px 1fr 1fr 80px',
              alignItems: 'center', gap: 24,
              padding: '30px 0', borderTop: `1px solid ${p.rule}`,
              borderBottom: i === cities.length - 1 ? `1px solid ${p.rule}` : 'none'
            }}>
              <span style={{ fontFamily: ff.mono, fontSize: 12,
                letterSpacing: '.18em', color: p.muted }}>
                0{i + 1}
              </span>
              <h3 style={{ fontFamily: ff.serif, fontSize: 44, lineHeight: 1,
                margin: 0, fontWeight: 400, letterSpacing: '-.018em' }}>
                {c.name}
              </h3>
              <div>
                <div style={{ fontFamily: ff.sans, fontSize: 14, color: p.ink,
                  fontWeight: 500 }}>{c.sub}</div>
                <div style={{ fontFamily: ff.sans, fontSize: 13, color: p.muted,
                  fontWeight: 300, marginTop: 2 }}>{c.pop}</div>
              </div>
              <span style={{ fontFamily: ff.serif, fontStyle: 'italic',
                fontSize: 26, color: p.accent, textAlign: 'right' }}>↗</span>
            </div>
            )}
        </div>
      </div>
    </section>);

  }

  // ══════════════════════════════════════════════════════════════════════
  // CONTACT — meta left, form right, marble bg
  // ══════════════════════════════════════════════════════════════════════
  function Contact({ p }) {
    return (
      <section style={{ background: p.paperAlt, padding: '120px 56px',
        borderTop: `1px solid ${p.rule}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 72,
          alignItems: 'start' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <span style={{ width: 28, height: 1, background: p.accent }}></span>
            <span style={{ fontFamily: ff.mono, fontSize: 11, letterSpacing: '.24em',
                color: p.accent }}>CONTACT</span>
          </div>
          <h2 style={{ fontFamily: ff.serif, fontSize: 60, lineHeight: 1, margin: 0,
              letterSpacing: '-.018em', fontWeight: 400 }}>
            Or just <em style={{ fontStyle: 'italic', color: p.accent }}>call</em> us.
          </h2>
          <p style={{ fontFamily: ff.sans, fontSize: 17, lineHeight: 1.6,
              color: p.muted, marginTop: 22, fontWeight: 300, maxWidth: 440 }}>
            A real person picks up Tuesday–Saturday, 8am–6pm Central. After hours,
            leave a message — we return calls in under four business hours.
          </p>

          <div style={{ marginTop: 40, display: 'grid', gap: 0 }}>
            {[
              ['PHONE', '(361) 555-0142', 'Tue–Sat · 8am–6pm CT'],
              ['EMAIL', 'hello@coastalbuilders.tx', 'Replies within one business day'],
              ['OFFICE', '914 N Main St, Victoria TX 77901', 'By appointment']].
              map(([l, v, sub]) =>
              <div key={l} style={{ borderTop: `1px solid ${p.rule}`,
                padding: '22px 0' }}>
                <div style={{ fontFamily: ff.mono, fontSize: 10.5,
                  letterSpacing: '.22em', color: p.muted }}>{l}</div>
                <div style={{ fontFamily: ff.serif, fontSize: 32,
                  fontWeight: 400, letterSpacing: '-.012em',
                  marginTop: 6 }}>{v}</div>
                <div style={{ fontFamily: ff.sans, fontSize: 13.5,
                  color: p.muted, marginTop: 4, fontWeight: 300 }}>{sub}</div>
              </div>
              )}
            <div style={{ borderTop: `1px solid ${p.rule}` }}></div>
          </div>
        </div>

        {/* Form */}
        <div style={{ background: p.paper, borderRadius: 14, padding: 40,
            boxShadow: '0 20px 50px rgba(0,0,0,.08)',
            border: `1px solid ${p.rule}` }}>
          <div style={{ fontFamily: ff.mono, fontSize: 11, letterSpacing: '.22em',
              color: p.muted, marginBottom: 14 }}>
            BOOK A WALKTHROUGH · NO PRESSURE
          </div>
          <h3 style={{ fontFamily: ff.serif, fontSize: 38, lineHeight: 1.05,
              margin: 0, fontWeight: 400, letterSpacing: '-.012em' }}>
            Tell us about your <em style={{ fontStyle: 'italic', color: p.accent }}>project</em>.
          </h3>

          <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 16 }}>
            <Field label="Full name" placeholder="Jordan Hayes" p={p} />
            <Field label="Phone" placeholder="(361) 555-0149" p={p} />
            <div style={{ gridColumn: '1 / span 2' }}>
              <Field label="Email" placeholder="jordan@example.com" p={p} />
            </div>
            <div style={{ gridColumn: '1 / span 2' }}>
              <label style={{ display: 'block' }}>
                <span style={{ fontFamily: ff.sans, fontSize: 12, fontWeight: 500,
                    color: p.muted, letterSpacing: '.02em',
                    textTransform: 'uppercase', display: 'block',
                    marginBottom: 6 }}>Project type</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['Bathroom', 'Aging in place', 'Ramp'].map((c, i) =>
                    <span key={c} style={{
                      padding: '9px 16px', borderRadius: 999,
                      border: `1px solid ${i === 0 ? p.accent : p.rule}`,
                      background: i === 0 ? p.accent : 'transparent',
                      color: i === 0 ? '#fff' : p.ink,
                      fontFamily: ff.sans, fontSize: 13, fontWeight: 500
                    }}>{c}</span>
                    )}
                </div>
              </label>
            </div>
            <div style={{ gridColumn: '1 / span 2' }}>
              <label style={{ display: 'block' }}>
                <span style={{ fontFamily: ff.sans, fontSize: 12, fontWeight: 500,
                    color: p.muted, letterSpacing: '.02em',
                    textTransform: 'uppercase', display: 'block',
                    marginBottom: 6 }}>What are you hoping for?</span>
                <div style={{ background: p.paperAlt,
                    border: `1px solid ${p.rule}`,
                    borderRadius: 8, padding: '13px 14px', minHeight: 90,
                    fontFamily: ff.sans, fontSize: 15, color: p.muted,
                    fontWeight: 300 }}>
                  A walk-in shower with a built-in bench, ideally finished before
                  Thanksgiving. Open to ideas on tile.
                </div>
              </label>
            </div>
            <button style={{
                gridColumn: '1 / span 2', marginTop: 6, padding: '18px 22px',
                borderRadius: 10, background: p.ink, color: p.paper,
                border: 'none', cursor: 'pointer',
                fontFamily: ff.sans, fontSize: 16, fontWeight: 500,
                letterSpacing: '.01em',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between'
              }}>
              <span>Request my free walkthrough</span>
              <span style={{ fontFamily: ff.serif, fontStyle: 'italic',
                  fontSize: 24, color: p.accent }}>↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>);

  }

  // ══════════════════════════════════════════════════════════════════════
  // FOOTER
  // ══════════════════════════════════════════════════════════════════════
  function Footer({ p }) {
    return (
      <footer style={{ background: p.ink, color: p.paper, padding: '80px 56px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: 48, paddingBottom: 56,
          borderBottom: '1px solid rgba(255,255,255,.14)' }}>
        <div>
          <Logomark color={p.paper} />
          <p style={{ fontFamily: ff.sans, fontSize: 14.5, lineHeight: 1.6,
              color: 'rgba(255,255,255,.68)', marginTop: 24, fontWeight: 300,
              maxWidth: 360 }}>A small Texas team building bathrooms across central and south Texas since 2003.


            </p>
          <div style={{ marginTop: 24, display: 'flex', gap: 8 }}>
            {['NARI', 'CAPS', 'BBB · A+', 'LIC #44721'].map((b) =>
              <span key={b} style={{ fontFamily: ff.mono, fontSize: 10,
                letterSpacing: '.16em',
                padding: '6px 10px', border: '1px solid rgba(255,255,255,.22)',
                borderRadius: 4, color: 'rgba(255,255,255,.78)' }}>{b}</span>
              )}
          </div>
        </div>

        {[
          ['Services', ['Bathroom Remodels', 'Aging in Place', 'Aluminum Ramps', 'Free Consultations']],
          ['Company', ['About', 'Process', 'Projects', 'Testimonials', 'Careers']],
          ['Contact', ['(361) 555-0142', 'joseph.sheeran@coastalbuildersassociates.com', '\n', 'Austin | Houston | San Antonio | Golden Crescent', 'Mon–Sat · 8a–6p']]].
          map(([t1, items]) =>
          <div key={t1}>
            <div style={{ fontFamily: ff.mono, fontSize: 10.5, letterSpacing: '.22em',
              color: 'rgba(255,255,255,.55)', marginBottom: 18 }}>
              {t1.toUpperCase()}
            </div>
            <div style={{ display: 'grid', gap: 10 }}>
              {items.map((i) =>
              <span key={i} style={{ fontFamily: ff.sans, fontSize: 14,
                color: 'rgba(255,255,255,.85)',
                fontWeight: 300 }}>{i}</span>
              )}
            </div>
          </div>
          )}
      </div>

      <div style={{ marginTop: 32, display: 'flex', justifyContent: 'space-between',
          alignItems: 'center' }}>
        <span style={{ fontFamily: ff.mono, fontSize: 11, letterSpacing: '.16em',
            color: 'rgba(255,255,255,.5)' }}>© 2026 COASTAL BUILDERS ASSOCIATES

          </span>
        <div style={{ display: 'flex', gap: 28 }}>
          {['Privacy', 'Terms', 'Accessibility'].map((l) =>
            <span key={l} style={{ fontFamily: ff.sans, fontSize: 13,
              color: 'rgba(255,255,255,.7)' }}>{l}</span>
            )}
        </div>
      </div>
    </footer>);

  }

  // Expose
  window.CoastalLanding = CoastalLanding;
  window.COASTAL_PALETTES = PALETTES;
  window.COASTAL_HERO_IMAGES = HERO_IMAGES;

})();