// variations.jsx — 4 wireframe directions for the Budget Blueprint LP
// Each <Variation*/> is a self-contained tall artboard (1280 wide).
// All read tweaks via props { t } passed in from <App/>.

const W = 1280; // artboard width

// ───────────────────── shared bits ─────────────────────
const Nav = ({ t, brand = "BUDGET / BLUEPRINT", style }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '22px 56px', borderBottom: '1.5px solid var(--ink)', ...style }}>
    <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
      <div style={{ width: 32, height: 32, border:'1.5px solid var(--ink)',
                    display:'grid', placeItems:'center', fontFamily:'Special Elite, monospace',
                    fontSize: 14, transform:'rotate(-4deg)' }}>BB</div>
      <span className="type" style={{ letterSpacing:'.18em', fontSize: 13 }}>{brand}</span>
    </div>
    <div style={{ display:'flex', gap: 28, alignItems:'center' }}>
      <span className="hand" style={{ fontSize: 18 }}>About</span>
      <span className="hand" style={{ fontSize: 18 }}>Projects</span>
      <span className="hand" style={{ fontSize: 18 }}>Contact</span>
      <button className="btn cta" style={{ fontSize: 15 }}>{t.ctaCopy} →</button>
    </div>
  </div>
);

const SocialProof = ({ count = "1,847" }) => (
  <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
    <div style={{ display:'flex' }}>
      {[0,1,2,3].map(i => (
        <div key={i} style={{ width: 26, height: 26, borderRadius:'50%',
                              border:'1.5px solid var(--ink)', background:'var(--paper-2)',
                              marginLeft: i ? -8 : 0, display:'grid', placeItems:'center',
                              fontFamily:'Special Elite, monospace', fontSize: 9 }}>
          {['JM','AT','RS','+'][i]}
        </div>
      ))}
    </div>
    <span className="hand" style={{ fontSize: 16 }}>Joined by {count} homeowners last month</span>
  </div>
);

const Anno = ({ children, style }) => (
  <div className="anno" style={style}>{children}</div>
);

// curved arrow svg
const ArrowSwoop = ({ w=120, h=80, color='var(--accent)', flip=false, style }) => (
  <svg width={w} height={h} viewBox="0 0 120 80" style={{...style, transform: flip?'scaleX(-1)':undefined}}>
    <path d="M5 10 Q 70 5, 90 50" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="0"/>
    <path d="M82 42 L 92 52 L 80 56" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Sign-up form (used in hero + final CTA)
const LeadForm = ({ t, compact=false, dark=false }) => (
  <div style={{ display:'grid', gridTemplateColumns: compact?'1fr 1fr':'1fr', gap: 10,
                padding: compact?16:22, border:'1.5px solid var(--ink)', borderRadius: 8,
                background: dark?'var(--ink)':'var(--paper)', color: dark?'#fff':'var(--ink)',
                maxWidth: compact?520:440 }}>
    <div style={{ gridColumn: compact?'1 / span 2':'1' }}>
      <div className="type" style={{ fontSize: 10, letterSpacing:'.18em',
                                     color: dark?'rgba(255,255,255,.7)':'var(--muted)' }}>
        FREE · 18-PAGE PDF · DELIVERED IN 60 SECONDS
      </div>
    </div>
    <div style={{ borderBottom: `1.5px solid ${dark?'#fff':'var(--ink)'}`, paddingBottom: 4 }}>
      <div className="hand" style={{ fontSize: 13, opacity:.6 }}>Your name</div>
      <div className="hand" style={{ fontSize: 18, height: 22 }}>{compact?'Jordan Hayes':'│'}</div>
    </div>
    <div style={{ borderBottom: `1.5px solid ${dark?'#fff':'var(--ink)'}`, paddingBottom: 4 }}>
      <div className="hand" style={{ fontSize: 13, opacity:.6 }}>Email</div>
      <div className="hand" style={{ fontSize: 18, height: 22 }}>{compact?'jordan@—':''}</div>
    </div>
    <div style={{ borderBottom: `1.5px solid ${dark?'#fff':'var(--ink)'}`, paddingBottom: 4,
                  gridColumn: compact?'1 / span 2':'1' }}>
      <div className="hand" style={{ fontSize: 13, opacity:.6 }}>Phone (optional)</div>
      <div className="hand" style={{ fontSize: 18, height: 22 }}></div>
    </div>
    <button className="btn cta" style={{ gridColumn: compact?'1 / span 2':'1',
                                          justifyContent:'center', fontSize: 18,
                                          padding: '14px 24px', marginTop: 6 }}>
      {t.ctaCopy} →
    </button>
    <div className="type" style={{ fontSize: 9, letterSpacing:'.14em',
                                   color: dark?'rgba(255,255,255,.6)':'var(--muted)',
                                   gridColumn: compact?'1 / span 2':'1', textAlign:'center' }}>
      NO SPAM. UNSUBSCRIBE ANY TIME.
    </div>
  </div>
);

const Footer = ({ darkBorder=true }) => (
  <div style={{ borderTop: darkBorder?'1.5px solid var(--ink)':'1px solid rgba(26,26,26,.3)',
                padding: '32px 56px', display:'flex',
                justifyContent:'space-between', alignItems:'flex-end' }}>
    <div>
      <div className="type" style={{ fontSize: 12, letterSpacing:'.18em' }}>BUDGET / BLUEPRINT</div>
      <div className="hand" style={{ fontSize: 15, color:'var(--muted)', marginTop: 6 }}>
        Honest renovation budgets, built for homeowners.
      </div>
    </div>
    <div style={{ display:'flex', gap: 24 }}>
      {['Privacy','Terms','Contact','© 2026'].map(x=>(
        <span key={x} className="hand" style={{ fontSize: 14, color:'var(--muted)' }}>{x}</span>
      ))}
    </div>
  </div>
);

// shared content
const PAINS = [
  { tag:'01', t:'Quotes that span $40k', d:'Three contractors. Three wildly different numbers. No way to tell who is honest.' },
  { tag:'02', t:"Designers who won't price",  d:'You ask "how much?" and get a vibe board instead of a line item.' },
  { tag:'03', t:'The procrastination tax', d:'Every year you delay, materials climb 6–9%. Yet you can\'t commit without clarity.' },
  { tag:'04', t:'Safety on the back burner', d:'A walk-in shower or grab bar feels urgent — until the bid comes in and you freeze.' },
];

const BENEFITS = [
  { n:'01', t:'Walk in knowing the number.',
    d:'A line-item budget framework you can take to any contractor and compare apples-to-apples.' },
  { n:'02', t:'Spot the 5 design choices that swing $20k+.',
    d:'Tile, plumbing fixtures, layout shifts, vanities, glass — exactly where the money hides.' },
  { n:'03', t:"Read a contractor's quote like a pro.",
    d:'How GCs price labor, markup, and "allowances" — and the three lines you should always negotiate.' },
  { n:'04', t:'Decide with confidence, not pressure.',
    d:'Stop the spiral of pinterest boards and quotes. Move when you\'re ready, with eyes open.' },
];

const TESTIMONIALS = [
  { q:"I'd been getting quoted between $58k and $94k for the same scope. The Blueprint showed me exactly where the gap was. We saved $19k without cutting anything we cared about.",
    a:'Marielle K.', r:'Homeowner, Brookline MA' },
  { q:"My mother needed a curbless shower after her surgery. Three contractors quoted vague numbers. This guide gave me the vocabulary to ask the right questions — work started in three weeks.",
    a:'David R.', r:'Homeowner, Westchester NY' },
  { q:"Worth ten times what you'd pay for it. And it's free. I sent it to my sister the day I finished it.",
    a:'Anita P.', r:'Architect & homeowner, Portland OR' },
];

const FAQS = [
  { q:"Why is this free?",
    a:"Because educated clients are better clients. If you ever hire a contractor through our network, we earn a small referral. If you don't, you still keep the Blueprint." },
  { q:"Will you spam me or sell my info?",
    a:"No. One welcome email, then occasional notes (maybe monthly). Your data is never sold. Unsubscribe in one click." },
  { q:"Is this only for huge renovations?",
    a:"It works for any bathroom from a $12k refresh to a $150k primary suite. The frameworks scale; the math is the same." },
  { q:"I'm not ready to renovate yet — useful?",
    a:"Especially useful. It's designed for the year before you start. You'll spec smarter and stop second-guessing." },
  { q:"Who wrote it?",
    a:"A team of three: a licensed GC with 22 years in renovation, a designer who has speced 400+ baths, and an editor obsessed with making numbers legible." },
];

// ═══════════════════════════════════════════════════════════════════
// VARIATION 1 — "EDITORIAL ASYMMETRIC"
// Big offset headline, image block slips behind text. Two-col staggered.
// ═══════════════════════════════════════════════════════════════════
function VariationEditorial({ t }) {
  return (
    <div className="wf" style={{ width: W, '--accent': t.accent, '--paper': t.paper }}>
      <Nav t={t} />

      {/* HERO */}
      <div style={{ position:'relative', padding: '64px 56px 96px', minHeight: 640 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.15fr .85fr', gap: 40, alignItems:'start' }}>
          <div>
            <div className="type" style={{ fontSize: 12, letterSpacing:'.22em', marginBottom: 28 }}>
              ◆ FREE GUIDE · 2026 EDITION
            </div>
            <h1 className="kalam" style={{ fontWeight: 700, fontSize: 78, lineHeight: 0.98,
                                          margin: 0, letterSpacing: '-.02em' }}>
              {t.headline.split(' ').map((w,i,arr)=>(
                <span key={i} style={{
                  background: w.toLowerCase().includes('guess')||w.toLowerCase().includes('cost')||w.toLowerCase().includes('cost.')
                    ? 'linear-gradient(transparent 60%, rgba(184,65,44,.35) 60%)' : 'transparent'
                }}>{w}{i<arr.length-1?' ':''}</span>
              ))}
            </h1>
            <p className="hand" style={{ fontSize: 22, lineHeight: 1.5, marginTop: 28,
                                          maxWidth: 540, color:'#3a3a3a' }}>
              Stop juggling vague contractor quotes and pinterest boards.
              The <i>2026 Bathroom Budget Blueprint</i> shows you exactly what your
              renovation will cost — line by line — before you sign anything.
            </p>
            <div style={{ marginTop: 36, display:'flex', alignItems:'center', gap: 24 }}>
              <button className="btn cta" style={{ fontSize: 19, padding:'16px 28px' }}>
                {t.ctaCopy}  →
              </button>
              <span className="hand" style={{ fontSize: 16, color:'var(--muted)' }}>
                18 pages · PDF · 60 sec delivery
              </span>
            </div>
            <div style={{ marginTop: 28 }}><SocialProof /></div>
          </div>
          <div style={{ position:'relative', alignSelf:'stretch', minHeight: 540 }}>
            <div className="ph" style={{ position:'absolute', inset:'0 -40px 60px 20px',
                                          height: 480 }}>
              [ HERO PHOTO — calm primary bath ]
            </div>
            <div style={{ position:'absolute', right: -20, bottom: 0, width: 240,
                          background:'var(--paper)', border:'1.5px solid var(--ink)',
                          padding: 18, transform:'rotate(2deg)' }}>
              <div className="type" style={{ fontSize: 10, letterSpacing:'.18em',
                                              color:'var(--accent)' }}>SAMPLE PAGE</div>
              <div style={{ marginTop: 8 }}>
                <div className="line" style={{ width: '80%' }}></div>
                <div className="line" style={{ width: '60%', marginTop: 8 }}></div>
                <div style={{ display:'flex', justifyContent:'space-between', marginTop: 14 }}>
                  <span className="type" style={{ fontSize: 10 }}>TILE / LABOR</span>
                  <span className="type" style={{ fontSize: 10 }}>$ 4,800</span>
                </div>
                <div style={{ display:'flex', justifyContent:'space-between', marginTop: 6 }}>
                  <span className="type" style={{ fontSize: 10 }}>PLUMBING</span>
                  <span className="type" style={{ fontSize: 10 }}>$ 6,200</span>
                </div>
                <div style={{ display:'flex', justifyContent:'space-between', marginTop: 6 }}>
                  <span className="type" style={{ fontSize: 10 }}>VANITY</span>
                  <span className="type" style={{ fontSize: 10 }}>$ 3,400</span>
                </div>
              </div>
            </div>
            {t.showAnnotations && (
              <Anno style={{ right: 80, top: -10, transform:'rotate(8deg)', fontSize: 20, maxWidth: 160 }}>
                actual line-item<br/>preview ↘
              </Anno>
            )}
          </div>
        </div>
        {t.showAnnotations && (
          <Anno style={{ left: 36, top: 240, fontSize: 22, color:'var(--accent)' }}>
            ← starts with "You" on purpose
          </Anno>
        )}
      </div>

      {/* PROBLEM AGITATION */}
      <div style={{ background:'var(--paper-2)', padding:'80px 56px', borderTop:'1.5px solid var(--ink)',
                    borderBottom:'1.5px solid var(--ink)' }}>
        <div className="type" style={{ fontSize: 12, letterSpacing:'.22em', color:'var(--accent)' }}>
          ▲ THE QUIET FRUSTRATION
        </div>
        <h2 className="kalam" style={{ fontSize: 54, margin:'12px 0 48px', maxWidth: 760,
                                       lineHeight: 1.05, letterSpacing:'-.01em' }}>
          You can afford the renovation. You just can't get a straight answer about what it costs.
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 24 }}>
          {PAINS.map(p=>(
            <div key={p.tag} className="box" style={{ padding: 22, background:'var(--paper)' }}>
              <div className="type" style={{ fontSize: 11, letterSpacing:'.2em', color:'var(--accent)' }}>
                PAIN {p.tag}
              </div>
              <div className="kalam" style={{ fontSize: 22, fontWeight: 700, marginTop: 10,
                                              lineHeight: 1.15 }}>{p.t}</div>
              <div className="hand" style={{ fontSize: 16, marginTop: 12, color:'#3a3a3a' }}>{p.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* BENEFITS */}
      <div style={{ padding:'96px 56px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'.9fr 1.1fr', gap: 56, alignItems:'start' }}>
          <div style={{ position:'sticky', top: 40 }}>
            <div className="type" style={{ fontSize: 12, letterSpacing:'.22em' }}>
              ◆ WHAT THE BLUEPRINT GIVES YOU
            </div>
            <h2 className="kalam" style={{ fontSize: 56, margin:'12px 0 20px', lineHeight: 1.02,
                                           letterSpacing:'-.01em' }}>
              Four outcomes.<br/>One quiet weekend with the PDF.
            </h2>
            <p className="hand" style={{ fontSize: 19, color:'#3a3a3a', maxWidth: 380 }}>
              Not a sales letter. Not a brochure. A working document you'll mark up,
              highlight, and bring to your contractor.
            </p>
          </div>
          <div style={{ display:'grid', gap: 28 }}>
            {BENEFITS.map((b,i)=>(
              <div key={b.n} style={{ display:'grid', gridTemplateColumns:'48px 1fr',
                                       gap: 20, paddingBottom: 24,
                                       borderBottom: i<BENEFITS.length-1?'1px dashed var(--ink)':'none' }}>
                <div className="kalam" style={{ fontSize: 44, fontWeight: 700,
                                                color:'var(--accent)', lineHeight: 1 }}>{b.n}</div>
                <div>
                  <div className="kalam" style={{ fontSize: 28, fontWeight: 700,
                                                  lineHeight: 1.1 }}>{b.t}</div>
                  <div className="hand" style={{ fontSize: 18, marginTop: 8, color:'#3a3a3a' }}>{b.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SOCIAL PROOF */}
      <div style={{ background:'var(--ink)', color:'var(--paper)', padding:'80px 56px' }}>
        <div className="type" style={{ fontSize: 12, letterSpacing:'.22em', color: t.accent }}>
          ◆ FROM HOMEOWNERS WHO USED IT
        </div>
        <h2 className="kalam" style={{ fontSize: 48, margin:'12px 0 40px', maxWidth: 720,
                                       letterSpacing:'-.01em' }}>
          1,847 downloads last month. Here's what three of them told us.
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 28 }}>
          {TESTIMONIALS.map((t2,i)=>(
            <div key={i} style={{ border:'1.5px solid var(--paper)', padding: 24, borderRadius: 6 }}>
              <div className="kalam" style={{ fontSize: 44, lineHeight: .5,
                                              color: t.accent, fontWeight: 700 }}>"</div>
              <div className="hand" style={{ fontSize: 18, marginTop: 14, lineHeight: 1.4 }}>{t2.q}</div>
              <div style={{ marginTop: 18, paddingTop: 14,
                            borderTop:'1px dashed rgba(255,255,255,.4)' }}>
                <div className="kalam" style={{ fontSize: 20, fontWeight: 700 }}>{t2.a}</div>
                <div className="type" style={{ fontSize: 11, letterSpacing:'.14em',
                                                color:'rgba(255,255,255,.7)', marginTop: 4 }}>{t2.r}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding:'96px 56px', background:'var(--paper)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'.7fr 1.3fr', gap: 48 }}>
          <div>
            <div className="type" style={{ fontSize: 12, letterSpacing:'.22em' }}>◆ Q & A</div>
            <h2 className="kalam" style={{ fontSize: 56, margin:'12px 0 0', lineHeight: 1,
                                           letterSpacing:'-.01em' }}>
              What people<br/>ask first.
            </h2>
          </div>
          <div>
            {FAQS.map((f,i)=>(
              <div key={i} style={{ borderTop:'1.5px solid var(--ink)',
                                    padding:'24px 0' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <div className="kalam" style={{ fontSize: 26, fontWeight: 700,
                                                  lineHeight: 1.15, maxWidth: 600 }}>{f.q}</div>
                  <div className="num-circle" style={{ width: 32, height: 32 }}>
                    {i===0?'−':'+'}
                  </div>
                </div>
                {i===0 && (
                  <div className="hand" style={{ fontSize: 18, marginTop: 12,
                                                  maxWidth: 640, color:'#3a3a3a' }}>{f.a}</div>
                )}
              </div>
            ))}
            <div style={{ borderTop:'1.5px solid var(--ink)' }}></div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div style={{ background:'var(--accent)', color:'#fff', padding:'96px 56px',
                    position:'relative', overflow:'hidden' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.2fr .8fr', gap: 48, alignItems:'center' }}>
          <div>
            <div className="type" style={{ fontSize: 12, letterSpacing:'.22em',
                                            color:'rgba(255,255,255,.85)' }}>
              ◆ ONE LAST THING
            </div>
            <h2 className="kalam" style={{ fontSize: 72, margin:'12px 0 20px', lineHeight: .98,
                                            letterSpacing:'-.02em' }}>
              You've waited long enough.
            </h2>
            <p className="hand" style={{ fontSize: 22, lineHeight: 1.5, maxWidth: 520,
                                          color:'rgba(255,255,255,.92)' }}>
              The Blueprint takes 12 minutes to read. It will save you weeks of
              second-guessing and — based on the last 200 readers — somewhere
              between $8k and $24k.
            </p>
          </div>
          <LeadForm t={t} dark />
        </div>
      </div>

      <Footer />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// VARIATION 2 — "BLUEPRINT DOSSIER"
// Grid paper, dimension lines, stamps, marginalia — playing into name.
// ═══════════════════════════════════════════════════════════════════
function VariationDossier({ t }) {
  return (
    <div className="wf gridpaper" style={{ width: W, '--accent': t.accent, '--paper': t.paper }}>
      {/* Nav */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center',
                    padding:'18px 48px', borderBottom:'1.5px solid var(--ink)',
                    background:'var(--paper)' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 14 }}>
          <svg width="38" height="38" viewBox="0 0 38 38">
            <rect x="2" y="2" width="34" height="34" fill="none" stroke="#1a1a1a" strokeWidth="1.5"/>
            <line x1="2" y1="14" x2="36" y2="14" stroke="#1a1a1a" strokeWidth="1"/>
            <line x1="14" y1="2" x2="14" y2="36" stroke="#1a1a1a" strokeWidth="1"/>
            <text x="20" y="27" fontFamily="Special Elite" fontSize="11">BB</text>
          </svg>
          <div>
            <div className="type" style={{ fontSize: 12, letterSpacing:'.2em' }}>BUDGET / BLUEPRINT</div>
            <div className="type" style={{ fontSize: 9, letterSpacing:'.2em', color:'var(--muted)' }}>
              REV. 2026.01 · DOC #002
            </div>
          </div>
        </div>
        <button className="btn cta" style={{ fontSize: 15 }}>{t.ctaCopy} →</button>
      </div>

      {/* HERO as a document plate */}
      <div style={{ padding:'60px 48px 80px', position:'relative' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
          <div className="type" style={{ fontSize: 11, letterSpacing:'.2em' }}>FIG. 01 — COVER PLATE</div>
          <div className="type" style={{ fontSize: 11, letterSpacing:'.2em', color:'var(--muted)' }}>
            SCALE 1:1  ·  EDITION 2026
          </div>
        </div>
        <div className="line" style={{ marginTop: 8, marginBottom: 28 }}></div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 380px', gap: 56, alignItems:'start' }}>
          <div style={{ position:'relative' }}>
            <div style={{ position:'absolute', left: -10, top: 10 }}>
              <div className="stamp">APPROVED · 2026</div>
            </div>
            <h1 className="type" style={{ fontSize: 64, lineHeight: 1.0, margin:'40px 0 0',
                                           letterSpacing:'-.01em', fontWeight: 400 }}>
              {t.headline}
            </h1>
            <div style={{ display:'flex', alignItems:'center', gap: 14, marginTop: 24 }}>
              <div className="line" style={{ flex:1, maxWidth: 120 }}></div>
              <span className="type" style={{ fontSize: 11, letterSpacing:'.22em' }}>SECTION A</span>
            </div>
            <p className="hand" style={{ fontSize: 22, marginTop: 24, lineHeight: 1.5,
                                          maxWidth: 600, color:'#222' }}>
              The 2026 Bathroom Budget Blueprint is an 18-page document that
              breaks down a real renovation by line item — materials, labor,
              markup, and the design choices that quietly move the total.
              Free. No catch.
            </p>
            <div style={{ marginTop: 32, padding: 24, border:'1.5px solid var(--ink)',
                          background:'var(--paper)', maxWidth: 540 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center',
                            marginBottom: 14 }}>
                <span className="type" style={{ fontSize: 10, letterSpacing:'.22em' }}>
                  ✶ REQUEST PLATE
                </span>
                <span className="type" style={{ fontSize: 10, letterSpacing:'.22em',
                                                 color:'var(--muted)' }}>FORM-01</span>
              </div>
              <LeadForm t={t} compact />
            </div>
            <div style={{ marginTop: 28 }}><SocialProof /></div>
          </div>

          {/* PDF mockup */}
          <div style={{ position:'relative' }}>
            <div className="ph" style={{ height: 460, padding: 18,
                                          background:'var(--paper)',
                                          backgroundImage:'none', alignItems:'flex-start',
                                          justifyContent:'flex-start', flexDirection:'column' }}>
              <div className="type" style={{ fontSize: 10, letterSpacing:'.2em',
                                              color:'var(--accent)' }}>FIG. 02 — DELIVERABLE</div>
              <div style={{ marginTop: 24, fontFamily:'Caveat, cursive', fontSize: 28,
                            fontWeight: 700, lineHeight: 1, letterSpacing:'-.01em' }}>
                The 2026<br/>Bathroom<br/>Budget<br/>Blueprint
              </div>
              <div className="line" style={{ width:'100%', marginTop: 20 }}></div>
              <div style={{ marginTop: 14, fontSize: 11, fontFamily:'Special Elite', letterSpacing:'.18em' }}>
                18 PAGES · PDF · 2026 EDITION
              </div>
              <div style={{ position:'absolute', bottom: 20, left: 20, right: 20 }}>
                <div className="line dash"></div>
                <div style={{ display:'flex', justifyContent:'space-between', marginTop: 8 }}>
                  <span className="type" style={{ fontSize: 10 }}>CH 01 · BASELINES</span>
                  <span className="type" style={{ fontSize: 10 }}>P. 04</span>
                </div>
                <div style={{ display:'flex', justifyContent:'space-between', marginTop: 4 }}>
                  <span className="type" style={{ fontSize: 10 }}>CH 02 · LINE ITEMS</span>
                  <span className="type" style={{ fontSize: 10 }}>P. 07</span>
                </div>
                <div style={{ display:'flex', justifyContent:'space-between', marginTop: 4 }}>
                  <span className="type" style={{ fontSize: 10 }}>CH 03 · DESIGN SWINGS</span>
                  <span className="type" style={{ fontSize: 10 }}>P. 12</span>
                </div>
                <div style={{ display:'flex', justifyContent:'space-between', marginTop: 4 }}>
                  <span className="type" style={{ fontSize: 10 }}>CH 04 · READING A QUOTE</span>
                  <span className="type" style={{ fontSize: 10 }}>P. 15</span>
                </div>
              </div>
            </div>
            {/* dimension lines */}
            <div style={{ position:'absolute', left:-26, top: 0, bottom: 0,
                          display:'flex', flexDirection:'column', alignItems:'center' }}>
              <div style={{ width:1, flex:1, background:'var(--ink)' }}></div>
              <div className="type" style={{ writingMode:'vertical-rl', transform:'rotate(180deg)',
                                              fontSize: 10, letterSpacing:'.2em', padding:'8px 0' }}>
                8.5 × 11 IN
              </div>
              <div style={{ width:1, flex:1, background:'var(--ink)' }}></div>
            </div>
            {t.showAnnotations && (
              <Anno style={{ right:-10, top: 200, fontSize: 22 }}>
                you'll get this exact<br/>document — ↙
              </Anno>
            )}
          </div>
        </div>
      </div>

      {/* PROBLEM — index card style */}
      <div style={{ borderTop:'1.5px solid var(--ink)', borderBottom:'1.5px solid var(--ink)',
                    padding:'72px 48px', background:'var(--paper)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
          <div className="type" style={{ fontSize: 11, letterSpacing:'.22em' }}>
            FIG. 03 — KNOWN FAILURE MODES
          </div>
          <div className="type" style={{ fontSize: 11, letterSpacing:'.22em', color:'var(--accent)' }}>
            ▲ READ FIRST
          </div>
        </div>
        <h2 className="kalam" style={{ fontSize: 52, margin:'18px 0 40px', maxWidth: 820,
                                       lineHeight: 1.05, letterSpacing:'-.01em' }}>
          The four things that go wrong, every renovation, every time.
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: 0,
                      border:'1.5px solid var(--ink)' }}>
          {PAINS.map((p,i)=>(
            <div key={p.tag} style={{ padding: 28, position:'relative',
                                       borderRight: i%2===0?'1.5px solid var(--ink)':'none',
                                       borderBottom: i<2?'1.5px solid var(--ink)':'none' }}>
              <div style={{ display:'flex', alignItems:'baseline', gap: 14 }}>
                <span className="type" style={{ fontSize: 44, fontWeight: 400,
                                                 color:'var(--accent)' }}>{p.tag}</span>
                <div className="kalam" style={{ fontSize: 26, fontWeight: 700,
                                                 lineHeight: 1.1 }}>{p.t}</div>
              </div>
              <div className="hand" style={{ fontSize: 17, marginTop: 14, color:'#333' }}>{p.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* BENEFITS — as a parts list */}
      <div style={{ padding:'80px 48px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
          <div className="type" style={{ fontSize: 11, letterSpacing:'.22em' }}>
            FIG. 04 — DELIVERABLES SCHEDULE
          </div>
          <div className="type" style={{ fontSize: 11, letterSpacing:'.22em', color:'var(--muted)' }}>
            4 OF 4 ITEMS
          </div>
        </div>
        <h2 className="kalam" style={{ fontSize: 60, margin:'18px 0 36px',
                                       letterSpacing:'-.01em', maxWidth: 820, lineHeight: 1 }}>
          Here is the result of reading the document.
        </h2>
        <div style={{ border:'1.5px solid var(--ink)', background:'var(--paper)' }}>
          {BENEFITS.map((b,i)=>(
            <div key={b.n} style={{ display:'grid', gridTemplateColumns:'80px 1fr 200px',
                                     padding:'24px 28px', alignItems:'center',
                                     borderBottom: i<BENEFITS.length-1?'1.5px solid var(--ink)':'none' }}>
              <div className="type" style={{ fontSize: 28, color:'var(--accent)' }}>{b.n}</div>
              <div>
                <div className="kalam" style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.1 }}>
                  {b.t}
                </div>
                <div className="hand" style={{ fontSize: 17, marginTop: 6, color:'#333' }}>{b.d}</div>
              </div>
              <div className="type" style={{ fontSize: 10, letterSpacing:'.2em',
                                              color:'var(--muted)', textAlign:'right' }}>
                CH 0{i+1} · P. {[4,7,12,15][i]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SOCIAL PROOF — testimonials as field reports */}
      <div style={{ background:'var(--paper-2)', borderTop:'1.5px solid var(--ink)',
                    borderBottom:'1.5px solid var(--ink)', padding:'72px 48px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
          <div className="type" style={{ fontSize: 11, letterSpacing:'.22em' }}>
            FIG. 05 — FIELD REPORTS
          </div>
          <div className="stamp" style={{ transform:'rotate(2deg)' }}>VERIFIED</div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 24, marginTop: 32 }}>
          {TESTIMONIALS.map((tt,i)=>(
            <div key={i} style={{ background:'var(--paper)', border:'1.5px solid var(--ink)',
                                   padding: 22, position:'relative' }}>
              <div style={{ display:'flex', justifyContent:'space-between',
                            borderBottom:'1px dashed var(--ink)', paddingBottom: 8, marginBottom: 14 }}>
                <span className="type" style={{ fontSize: 10, letterSpacing:'.2em' }}>
                  REPORT 0{i+1}
                </span>
                <span className="type" style={{ fontSize: 10, letterSpacing:'.2em', color:'var(--muted)' }}>
                  {['MAR 2026','APR 2026','APR 2026'][i]}
                </span>
              </div>
              <div className="hand" style={{ fontSize: 17, lineHeight: 1.45 }}>{tt.q}</div>
              <div style={{ marginTop: 18 }}>
                <div className="kalam" style={{ fontSize: 20, fontWeight: 700 }}>— {tt.a}</div>
                <div className="type" style={{ fontSize: 10, letterSpacing:'.18em',
                                                 color:'var(--muted)' }}>{tt.r}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36, padding: 24, border:'1.5px dashed var(--ink)',
                      display:'flex', justifyContent:'space-around', textAlign:'center' }}>
          {[{n:'1,847',l:'downloads last month'},
            {n:'$14,200',l:'avg. reader savings'},
            {n:'22 yrs',l:'GC experience behind it'},
            {n:'4.9/5',l:'reader rating (n=412)'}].map(s=>(
            <div key={s.l}>
              <div className="kalam" style={{ fontSize: 48, fontWeight: 700,
                                              color:'var(--accent)', lineHeight: 1 }}>{s.n}</div>
              <div className="type" style={{ fontSize: 11, letterSpacing:'.18em',
                                              marginTop: 6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding:'80px 48px' }}>
        <div className="type" style={{ fontSize: 11, letterSpacing:'.22em' }}>FIG. 06 — ANTICIPATED QUERIES</div>
        <h2 className="kalam" style={{ fontSize: 52, margin:'12px 0 32px',
                                       letterSpacing:'-.01em' }}>
          Questions we get, weekly.
        </h2>
        <div style={{ border:'1.5px solid var(--ink)', background:'var(--paper)' }}>
          {FAQS.map((f,i)=>(
            <div key={i} style={{ padding:'22px 28px',
                                   borderBottom: i<FAQS.length-1?'1.5px solid var(--ink)':'none',
                                   display:'grid', gridTemplateColumns:'60px 1fr 32px',
                                   alignItems:'start', gap: 16 }}>
              <span className="type" style={{ fontSize: 14, letterSpacing:'.2em',
                                                color:'var(--accent)' }}>Q.0{i+1}</span>
              <div>
                <div className="kalam" style={{ fontSize: 24, fontWeight: 700,
                                                  lineHeight: 1.15 }}>{f.q}</div>
                {(i===0||i===2) && (
                  <div className="hand" style={{ fontSize: 17, marginTop: 10, color:'#333',
                                                  maxWidth: 720 }}>{f.a}</div>
                )}
              </div>
              <div className="type" style={{ fontSize: 18, textAlign:'right' }}>{(i===0||i===2)?'−':'+'}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA — as the signature block */}
      <div style={{ background:'var(--ink)', color:'var(--paper)', padding:'80px 48px',
                    position:'relative' }}>
        <div className="type" style={{ fontSize: 11, letterSpacing:'.22em', color: t.accent }}>
          FIG. 07 — SIGN HERE
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 56, alignItems:'center',
                      marginTop: 20 }}>
          <div>
            <h2 className="kalam" style={{ fontSize: 72, margin: 0, lineHeight: .98,
                                            letterSpacing:'-.02em' }}>
              You're three<br/>fields away.
            </h2>
            <p className="hand" style={{ fontSize: 22, lineHeight: 1.5, marginTop: 20,
                                          color:'rgba(247,243,235,.85)', maxWidth: 460 }}>
              No appointments, no calls, no funnels. Drop your details and the
              Blueprint lands in your inbox before your coffee gets cold.
            </p>
            <div style={{ marginTop: 28, fontFamily:'Special Elite', fontSize: 11,
                          letterSpacing:'.2em', color:'rgba(247,243,235,.6)' }}>
              ✶ X _________________________  HOMEOWNER, SIGNED
            </div>
          </div>
          <LeadForm t={t} compact />
        </div>
      </div>

      <Footer />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// VARIATION 3 — "DIAGONAL CUT"
// Bold diagonal divider, accent wedge, modern editorial.
// ═══════════════════════════════════════════════════════════════════
function VariationDiagonal({ t }) {
  return (
    <div className="wf" style={{ width: W, '--accent': t.accent, '--paper': t.paper }}>
      <Nav t={t} />

      {/* HERO with diagonal accent wedge */}
      <div style={{ position:'relative', minHeight: 720, overflow:'hidden' }}>
        {/* diagonal background */}
        <svg width={W} height={720} viewBox={`0 0 ${W} 720`}
             style={{ position:'absolute', inset: 0, zIndex: 0 }}>
          <polygon points={`0,720 ${W},720 ${W},360 0,560`} fill={t.accent} />
          {/* paper grid behind for texture */}
        </svg>

        <div style={{ position:'relative', zIndex: 1, padding:'72px 56px' }}>
          <div className="type" style={{ fontSize: 12, letterSpacing:'.22em' }}>
            ◆ FREE GUIDE  /  2026 EDITION  /  PDF
          </div>
          <h1 className="kalam" style={{ fontSize: 110, fontWeight: 700,
                                          lineHeight: .92, margin:'28px 0 0',
                                          letterSpacing:'-.025em', maxWidth: 1050 }}>
            {t.headline}
          </h1>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 56,
                        marginTop: 56, alignItems:'end' }}>
            <div>
              <p className="hand" style={{ fontSize: 24, lineHeight: 1.5,
                                            maxWidth: 480, color:'#1a1a1a' }}>
                Get the same line-item budget framework our team uses on
                $40k–$150k bathroom projects. <i>For free.</i>
              </p>
              <div style={{ marginTop: 32, display:'flex', alignItems:'center', gap: 22 }}>
                <button className="btn cta" style={{ background:'#1a1a1a',
                                                      color:'var(--paper)',
                                                      borderColor:'#1a1a1a',
                                                      fontSize: 20, padding:'18px 30px' }}>
                  {t.ctaCopy} →
                </button>
                <span className="hand" style={{ fontSize: 17 }}>
                  18 pages · 60-sec delivery
                </span>
              </div>
              <div style={{ marginTop: 26 }}><SocialProof /></div>
            </div>
            <div style={{ color:'#fff' }}>
              <div style={{ display:'flex', gap: 36 }}>
                <div>
                  <div className="kalam" style={{ fontSize: 72, fontWeight: 700, lineHeight: 1 }}>
                    18
                  </div>
                  <div className="type" style={{ fontSize: 11, letterSpacing:'.2em', marginTop: 4 }}>
                    PAGES OF SIGNAL
                  </div>
                </div>
                <div>
                  <div className="kalam" style={{ fontSize: 72, fontWeight: 700, lineHeight: 1 }}>
                    $14k
                  </div>
                  <div className="type" style={{ fontSize: 11, letterSpacing:'.2em', marginTop: 4 }}>
                    AVG. READER SAVINGS
                  </div>
                </div>
                <div>
                  <div className="kalam" style={{ fontSize: 72, fontWeight: 700, lineHeight: 1 }}>
                    0
                  </div>
                  <div className="type" style={{ fontSize: 11, letterSpacing:'.2em', marginTop: 4 }}>
                    SALES CALLS, EVER
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {t.showAnnotations && (
          <Anno style={{ right: 48, top: 280, fontSize: 24, color:'#1a1a1a' }}>
            big, declarative,<br/>second-person ↘
          </Anno>
        )}
      </div>

      {/* PROBLEM — overlapping with previous */}
      <div style={{ background:'#1a1a1a', color:'var(--paper)', padding:'80px 56px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap: 56, alignItems:'start' }}>
          <div>
            <div className="type" style={{ fontSize: 12, letterSpacing:'.22em', color: t.accent }}>
              ▲ PAIN POINTS
            </div>
            <h2 className="kalam" style={{ fontSize: 64, lineHeight: 1, margin:'16px 0 0',
                                            letterSpacing:'-.02em' }}>
              You've already started the spiral.
            </h2>
            <p className="hand" style={{ fontSize: 19, marginTop: 24,
                                          color:'rgba(247,243,235,.78)', maxWidth: 360 }}>
              Three quotes, two designers, a pinterest board with 412 saves, and
              you still don't know what your bathroom <i>actually</i> costs.
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: 24 }}>
            {PAINS.map((p,i)=>(
              <div key={p.tag} style={{ borderTop:'1.5px solid var(--paper)',
                                         paddingTop: 18 }}>
                <div className="kalam" style={{ fontSize: 36, fontWeight: 700,
                                                  color: t.accent, lineHeight: 1 }}>{p.tag}</div>
                <div className="kalam" style={{ fontSize: 26, fontWeight: 700,
                                                  marginTop: 8, lineHeight: 1.1 }}>{p.t}</div>
                <div className="hand" style={{ fontSize: 17, marginTop: 8,
                                                 color:'rgba(247,243,235,.78)' }}>{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BENEFITS — big diagonal split */}
      <div style={{ padding:'96px 56px', position:'relative' }}>
        <div className="type" style={{ fontSize: 12, letterSpacing:'.22em' }}>
          ◆ WHAT YOU WALK AWAY WITH
        </div>
        <h2 className="kalam" style={{ fontSize: 72, margin:'12px 0 56px',
                                       letterSpacing:'-.02em', lineHeight: .98,
                                       maxWidth: 1000 }}>
          Four shifts. By the end of the PDF. Promise.
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: 48 }}>
          {BENEFITS.map((b,i)=>(
            <div key={b.n} style={{ position:'relative', paddingLeft: 80 }}>
              <div style={{ position:'absolute', left:0, top:0, width: 64, height: 64,
                            background: i%2===0?'var(--accent)':'#1a1a1a',
                            color:'#fff', display:'grid', placeItems:'center',
                            fontFamily:'Kalam, cursive', fontSize: 32, fontWeight: 700,
                            transform:'rotate(-3deg)' }}>{b.n}</div>
              <div className="kalam" style={{ fontSize: 34, fontWeight: 700,
                                                lineHeight: 1.05, letterSpacing:'-.01em' }}>{b.t}</div>
              <div className="hand" style={{ fontSize: 19, marginTop: 10, color:'#333',
                                              maxWidth: 480 }}>{b.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SOCIAL PROOF as big quote */}
      <div style={{ background:'var(--paper-2)', padding:'96px 56px',
                    borderTop:'1.5px solid var(--ink)', borderBottom:'1.5px solid var(--ink)' }}>
        <div className="type" style={{ fontSize: 12, letterSpacing:'.22em' }}>
          ◆ READERS, ON RECORD
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap: 56, marginTop: 24 }}>
          <div>
            <div className="kalam" style={{ fontSize: 120, color: t.accent,
                                              lineHeight: .4, fontWeight: 700 }}>"</div>
            <div className="kalam" style={{ fontSize: 40, fontWeight: 700, lineHeight: 1.1,
                                              letterSpacing:'-.01em', marginTop: -10 }}>
              {TESTIMONIALS[0].q}
            </div>
            <div style={{ marginTop: 28, display:'flex', alignItems:'center', gap: 14 }}>
              <div style={{ width: 48, height: 48, borderRadius:'50%',
                            border:'1.5px solid var(--ink)', background:'var(--paper)',
                            display:'grid', placeItems:'center',
                            fontFamily:'Special Elite', fontSize: 13 }}>MK</div>
              <div>
                <div className="kalam" style={{ fontSize: 22, fontWeight: 700 }}>
                  {TESTIMONIALS[0].a}
                </div>
                <div className="type" style={{ fontSize: 11, letterSpacing:'.18em',
                                                 color:'var(--muted)' }}>
                  {TESTIMONIALS[0].r}
                </div>
              </div>
            </div>
          </div>
          <div style={{ display:'grid', gap: 20, alignContent:'start' }}>
            {TESTIMONIALS.slice(1).map((tt,i)=>(
              <div key={i} className="box" style={{ padding: 20, background:'var(--paper)' }}>
                <div className="hand" style={{ fontSize: 17, lineHeight: 1.45 }}>{tt.q}</div>
                <div style={{ marginTop: 14, display:'flex', justifyContent:'space-between' }}>
                  <span className="kalam" style={{ fontSize: 18, fontWeight: 700 }}>{tt.a}</span>
                  <span className="type" style={{ fontSize: 10, letterSpacing:'.18em',
                                                    color:'var(--muted)' }}>{tt.r}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ — minimal list */}
      <div style={{ padding:'96px 56px' }}>
        <div className="type" style={{ fontSize: 12, letterSpacing:'.22em' }}>◆ FAQ</div>
        <h2 className="kalam" style={{ fontSize: 64, margin:'12px 0 36px',
                                       letterSpacing:'-.02em' }}>
          Before you ask.
        </h2>
        <div>
          {FAQS.map((f,i)=>(
            <div key={i} style={{ borderTop:'1.5px solid var(--ink)', padding:'28px 0',
                                   display:'grid', gridTemplateColumns:'80px 1fr 40px',
                                   gap: 24, alignItems:'start' }}>
              <span className="kalam" style={{ fontSize: 40, fontWeight: 700,
                                                 color: t.accent, lineHeight: 1 }}>0{i+1}</span>
              <div>
                <div className="kalam" style={{ fontSize: 28, fontWeight: 700,
                                                  lineHeight: 1.15, letterSpacing:'-.01em' }}>{f.q}</div>
                {i<2 && (
                  <div className="hand" style={{ fontSize: 19, marginTop: 10, color:'#333',
                                                  maxWidth: 760 }}>{f.a}</div>
                )}
              </div>
              <span className="kalam" style={{ fontSize: 32, lineHeight: 1,
                                                 textAlign:'right' }}>{i<2?'−':'+'}</span>
            </div>
          ))}
          <div style={{ borderTop:'1.5px solid var(--ink)' }}></div>
        </div>
      </div>

      {/* FINAL CTA — diagonal again */}
      <div style={{ position:'relative', minHeight: 520, overflow:'hidden',
                    background:'#1a1a1a', color:'#fff' }}>
        <svg width={W} height={520} viewBox={`0 0 ${W} 520`}
             style={{ position:'absolute', inset:0 }}>
          <polygon points={`0,0 ${W},0 ${W},200 0,360`} fill={t.accent}/>
        </svg>
        <div style={{ position:'relative', padding:'96px 56px',
                      display:'grid', gridTemplateColumns:'1.1fr .9fr', gap: 48,
                      alignItems:'center' }}>
          <div>
            <div className="type" style={{ fontSize: 12, letterSpacing:'.22em',
                                            color:'rgba(255,255,255,.85)' }}>
              ◆ LAST PUSH
            </div>
            <h2 className="kalam" style={{ fontSize: 96, lineHeight: .92, margin:'14px 0 0',
                                            letterSpacing:'-.03em', maxWidth: 600 }}>
              Stop guessing. Start budgeting.
            </h2>
            <p className="hand" style={{ fontSize: 22, marginTop: 24, lineHeight: 1.5,
                                          color:'rgba(255,255,255,.85)', maxWidth: 480 }}>
              Twelve minutes of reading. Tens of thousands of dollars of clarity.
              No risk — it's free.
            </p>
          </div>
          <LeadForm t={t} dark />
        </div>
      </div>

      <Footer />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// VARIATION 4 — "BENTO MAGAZINE"
// Modular bento cards, overlapping type, mag-style.
// ═══════════════════════════════════════════════════════════════════
function VariationBento({ t }) {
  return (
    <div className="wf" style={{ width: W, '--accent': t.accent, '--paper': t.paper,
                                  background:'var(--paper-2)' }}>
      <Nav t={t} brand="BB · BUDGET BLUEPRINT" style={{ background:'var(--paper)' }} />

      {/* HERO BENTO */}
      <div style={{ padding:'40px 40px 80px' }}>
        <div style={{ display:'grid',
                      gridTemplateColumns:'1.5fr 1fr 1fr',
                      gridTemplateRows:'auto auto',
                      gap: 16, marginTop: 24 }}>
          {/* Headline card */}
          <div style={{ gridColumn:'1 / span 2', gridRow:'1 / span 2',
                        background:'var(--paper)', border:'1.5px solid var(--ink)',
                        padding: 40, position:'relative', minHeight: 540 }}>
            <div className="type" style={{ fontSize: 12, letterSpacing:'.22em',
                                             color:'var(--accent)' }}>
              ◆ ISSUE Nº 04 / 2026 EDITION
            </div>
            <h1 className="kalam" style={{ fontSize: 96, lineHeight: .94, fontWeight: 700,
                                            margin:'24px 0 0', letterSpacing:'-.025em' }}>
              {t.headline}
            </h1>
            <p className="hand" style={{ fontSize: 23, marginTop: 28, lineHeight: 1.5,
                                          maxWidth: 560 }}>
              The free 18-page PDF that breaks down a 2026 bathroom renovation
              line-by-line — so your next contractor meeting feels like a
              conversation, not an ambush.
            </p>
            <div style={{ marginTop: 32, display:'flex', alignItems:'center', gap: 22 }}>
              <button className="btn cta" style={{ fontSize: 19, padding:'16px 28px' }}>
                {t.ctaCopy} →
              </button>
              <SocialProof />
            </div>
            {t.showAnnotations && (
              <Anno style={{ right: 36, top: 36, transform:'rotate(6deg)', fontSize: 22 }}>
                FREE.<br/>(seriously) ↘
              </Anno>
            )}
          </div>

          {/* PDF mockup card */}
          <div style={{ gridColumn:'3', gridRow:'1', background:'var(--ink)',
                        color:'var(--paper)', padding: 24, borderRadius: 0,
                        border:'1.5px solid var(--ink)', minHeight: 260, position:'relative' }}>
            <div className="type" style={{ fontSize: 10, letterSpacing:'.2em',
                                             color: t.accent }}>THE DOCUMENT</div>
            <div className="kalam" style={{ fontSize: 30, fontWeight: 700,
                                              marginTop: 16, lineHeight: 1 }}>
              2026<br/>Bathroom<br/>Budget<br/>Blueprint
            </div>
            <div className="type" style={{ fontSize: 10, letterSpacing:'.18em',
                                             color:'rgba(247,243,235,.7)',
                                             position:'absolute', bottom: 20, left: 24,
                                             right: 24 }}>
              18 PAGES · PDF · ✶ 2026
            </div>
          </div>

          {/* Stat card */}
          <div style={{ gridColumn:'3', gridRow:'2', background: t.accent, color:'#fff',
                        border:'1.5px solid var(--accent)', padding: 24, minHeight: 260,
                        display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
            <div className="type" style={{ fontSize: 11, letterSpacing:'.22em',
                                             color:'rgba(255,255,255,.85)' }}>
              ▲ READER SAVINGS
            </div>
            <div>
              <div className="kalam" style={{ fontSize: 80, fontWeight: 700, lineHeight: .9 }}>
                $14k
              </div>
              <div className="hand" style={{ fontSize: 17, marginTop: 8, lineHeight: 1.3 }}>
                avg. savings vs. their original quote — last 200 readers
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROBLEM — magazine pull-quote + cards */}
      <div style={{ background:'var(--paper)', borderTop:'1.5px solid var(--ink)',
                    borderBottom:'1.5px solid var(--ink)', padding:'72px 40px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap: 40,
                      alignItems:'start' }}>
          <div>
            <div className="type" style={{ fontSize: 12, letterSpacing:'.22em',
                                             color:'var(--accent)' }}>
              ▲ FEATURE 01  ·  THE PROBLEM
            </div>
            <h2 className="kalam" style={{ fontSize: 68, lineHeight: 1, margin:'14px 0 0',
                                            letterSpacing:'-.02em' }}>
              You don't have a money problem. You have an <i>information</i> problem.
            </h2>
          </div>
          <p className="hand" style={{ fontSize: 21, lineHeight: 1.55,
                                        color:'#1a1a1a', marginTop: 32 }}>
            High-income homeowners aren't trying to save a dollar — they're trying
            to make a confident decision. The renovation industry, structurally,
            makes that nearly impossible.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 16,
                      marginTop: 40 }}>
          {PAINS.map((p,i)=>(
            <div key={p.tag} style={{ background:'var(--paper-2)',
                                       border:'1.5px solid var(--ink)', padding: 20 }}>
              <div className="kalam" style={{ fontSize: 56, fontWeight: 700,
                                                 color:'var(--accent)', lineHeight: .9 }}>
                {p.tag}
              </div>
              <div className="kalam" style={{ fontSize: 22, fontWeight: 700,
                                                marginTop: 8, lineHeight: 1.1 }}>{p.t}</div>
              <div className="hand" style={{ fontSize: 15, marginTop: 8, color:'#333' }}>{p.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* BENEFITS — bento again, asymmetric */}
      <div style={{ padding:'80px 40px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
          <div>
            <div className="type" style={{ fontSize: 12, letterSpacing:'.22em',
                                             color:'var(--accent)' }}>
              ▲ FEATURE 02  ·  THE OUTCOME
            </div>
            <h2 className="kalam" style={{ fontSize: 68, lineHeight: 1, margin:'14px 0 0',
                                            letterSpacing:'-.02em' }}>
              Read it once. Renovate forever differently.
            </h2>
          </div>
          <div className="type" style={{ fontSize: 11, letterSpacing:'.2em' }}>04 BENEFITS →</div>
        </div>

        <div style={{ display:'grid',
                      gridTemplateColumns:'1.4fr 1fr 1fr',
                      gridTemplateRows:'260px 260px',
                      gap: 16, marginTop: 40 }}>
          <div style={{ gridColumn:'1', gridRow:'1 / span 2', background:'var(--paper)',
                        border:'1.5px solid var(--ink)', padding: 32,
                        display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
            <div className="kalam" style={{ fontSize: 96, fontWeight: 700,
                                              color:'var(--accent)', lineHeight: 1 }}>01</div>
            <div>
              <div className="kalam" style={{ fontSize: 32, fontWeight: 700,
                                                lineHeight: 1.05 }}>{BENEFITS[0].t}</div>
              <div className="hand" style={{ fontSize: 18, marginTop: 12, color:'#333' }}>
                {BENEFITS[0].d}
              </div>
            </div>
          </div>
          {BENEFITS.slice(1).map((b,i)=>{
            const bg = i===0?'var(--ink)':i===1?'var(--paper)':t.accent;
            const fg = i===0?'var(--paper)':i===2?'#fff':'var(--ink)';
            return (
              <div key={b.n} style={{ background: bg, color: fg, padding: 22,
                                       border:'1.5px solid var(--ink)' }}>
                <div className="kalam" style={{ fontSize: 56, fontWeight: 700,
                                                   lineHeight: .9, opacity:.85 }}>{b.n}</div>
                <div className="kalam" style={{ fontSize: 24, fontWeight: 700,
                                                   marginTop: 10, lineHeight: 1.1 }}>{b.t}</div>
                <div className="hand" style={{ fontSize: 15, marginTop: 8,
                                                 opacity:.85 }}>{b.d}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SOCIAL PROOF */}
      <div style={{ background:'var(--paper)', borderTop:'1.5px solid var(--ink)',
                    borderBottom:'1.5px solid var(--ink)', padding:'72px 40px' }}>
        <div className="type" style={{ fontSize: 12, letterSpacing:'.22em',
                                         color:'var(--accent)' }}>
          ▲ FEATURE 03  ·  THE WITNESSES
        </div>
        <h2 className="kalam" style={{ fontSize: 60, margin:'14px 0 32px',
                                       letterSpacing:'-.02em', lineHeight: 1, maxWidth: 900 }}>
          What happens when homeowners actually read it.
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap: 16 }}>
          {TESTIMONIALS.map((tt,i)=>{
            const styles = [
              { background:'var(--paper-2)' },
              { background:'var(--ink)', color:'var(--paper)' },
              { background: t.accent, color:'#fff' },
            ][i];
            return (
              <div key={i} style={{ ...styles, border:'1.5px solid var(--ink)',
                                     padding: 24, minHeight: 280,
                                     display:'flex', flexDirection:'column',
                                     justifyContent:'space-between' }}>
                <div>
                  <div className="kalam" style={{ fontSize: 64, fontWeight: 700,
                                                     lineHeight: .4, opacity:.6 }}>"</div>
                  <div className="hand" style={{ fontSize: 18, lineHeight: 1.45,
                                                   marginTop: 20 }}>{tt.q}</div>
                </div>
                <div style={{ marginTop: 18 }}>
                  <div className="kalam" style={{ fontSize: 22, fontWeight: 700 }}>{tt.a}</div>
                  <div className="type" style={{ fontSize: 10, letterSpacing:'.18em',
                                                   opacity:.7, marginTop: 4 }}>{tt.r}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding:'80px 40px' }}>
        <div className="type" style={{ fontSize: 12, letterSpacing:'.22em',
                                         color:'var(--accent)' }}>
          ▲ FEATURE 04  ·  Q & A
        </div>
        <h2 className="kalam" style={{ fontSize: 60, margin:'14px 0 32px',
                                       letterSpacing:'-.02em' }}>
          Common worries, handled.
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: 16 }}>
          {FAQS.map((f,i)=>(
            <div key={i} style={{ background: i%2?'var(--paper)':'var(--paper-2)',
                                   border:'1.5px solid var(--ink)', padding: 22 }}>
              <div style={{ display:'flex', justifyContent:'space-between',
                            alignItems:'flex-start', gap: 12 }}>
                <div className="kalam" style={{ fontSize: 24, fontWeight: 700,
                                                  lineHeight: 1.15, flex: 1 }}>{f.q}</div>
                <span className="type" style={{ fontSize: 10, letterSpacing:'.2em',
                                                  color:'var(--accent)' }}>Q.0{i+1}</span>
              </div>
              <div className="hand" style={{ fontSize: 16, marginTop: 12,
                                              lineHeight: 1.45, color:'#333' }}>{f.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA — bento again */}
      <div style={{ padding:'40px 40px 80px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.3fr 1fr', gap: 16 }}>
          <div style={{ background:'var(--ink)', color:'var(--paper)',
                        border:'1.5px solid var(--ink)', padding: 48,
                        position:'relative', overflow:'hidden' }}>
            <div className="type" style={{ fontSize: 12, letterSpacing:'.22em',
                                             color: t.accent }}>
              ◆ FINAL CALL
            </div>
            <h2 className="kalam" style={{ fontSize: 88, lineHeight: .94, margin:'18px 0 0',
                                            letterSpacing:'-.025em' }}>
              You. Three fields. Twelve minutes.
            </h2>
            <p className="hand" style={{ fontSize: 21, marginTop: 24, lineHeight: 1.5,
                                          color:'rgba(247,243,235,.85)', maxWidth: 500 }}>
              That's the entire ask. Drop your details below, get the Blueprint,
              read it on the couch tonight.
            </p>
          </div>
          <LeadForm t={t} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

// expose
Object.assign(window, {
  VariationEditorial, VariationDossier, VariationDiagonal, VariationBento
});
