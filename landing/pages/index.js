import Head from 'next/head';
import { useState, useEffect } from 'react';

const themes = {
  dark: {
    base:       '#0C0C0F', surface:    '#131317', card:       '#1B1B1F',
    card2:      '#212125', hover:      '#27272C', border:     '#282830',
    borderHard: '#363640',
    blue5:  '#2F80ED', blue4:  '#5BA3F5', blue6: '#1A5CB8',
    cyan:   '#4FD1C5', purple: '#7B61FF', green: '#27C281',
    yellow: '#FFC857', red:    '#FF5A5F',
    text:   '#FFFFFF', textSub: '#8A9CB0', textFaint: '#3C4C5E',
    white:  '#FFFFFF',
  },
  light: {
    base:       '#F0F4F8', surface:    '#FFFFFF', card:       '#FFFFFF',
    card2:      '#F5F8FC', hover:      '#EBF0F8', border:     '#D0D9E6',
    borderHard: '#B0BDD0',
    blue5:  '#2F80ED', blue4:  '#1D5DA8', blue6: '#1A5CB8',
    cyan:   '#0D9488', purple: '#6D28D9', green: '#16A34A',
    yellow: '#D97706', red:    '#DC2626',
    text:   '#0F172A', textSub: '#64748B', textFaint: '#94A3B8',
    white:  '#FFFFFF',
  },
};

const SunIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4.5"/>
    <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>
);
const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);
const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/>
  </svg>
);
const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

function shadows(dark) {
  return dark
    ? { s1: '0 1px 3px rgba(0,0,0,0.45), 0 1px 2px rgba(0,0,0,0.3)', s2: '0 3px 8px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.35)', s3: '0 8px 24px rgba(0,0,0,0.55), 0 2px 6px rgba(0,0,0,0.4)' }
    : { s1: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.05)', s2: '0 3px 8px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.06)',  s3: '0 8px 24px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.06)' };
}

function Logo({ size = 26, c }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <img src="/logo.svg" alt="Zênite" width={size} height={size} style={{ display: 'block', flexShrink: 0 }} />
      <span style={{ fontSize: size * 0.68, fontWeight: 700, letterSpacing: -0.5, color: c.text, lineHeight: 1 }}>
        Zênite<span style={{ color: c.textSub, fontWeight: 400 }}>.cloud</span>
      </span>
    </div>
  );
}

function EmailForm({ source = 'hero', size = 'large', c, sh }) {
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState('idle');
  const [msg, setMsg]       = useState('');
  const big = size === 'large';

  const submit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const r    = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, source }) });
      const data = await r.json();
      if (r.ok) {
        setMsg(data.message === 'already_registered' ? 'Você já está na lista! Te avisaremos em breve.' : 'Perfeito! Você está na lista de acesso antecipado.');
        setStatus(data.message === 'already_registered' ? 'already' : 'success');
      } else {
        setMsg(data.error || 'Algo deu errado. Tente novamente.');
        setStatus('error');
      }
    } catch {
      setMsg('Erro de conexão. Tente novamente.');
      setStatus('error');
    }
  };

  if (status === 'success' || status === 'already') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(39,194,129,0.1)', border: '1px solid rgba(39,194,129,0.3)', borderRadius: 4, padding: '14px 20px', width: '100%' }}>
        <span style={{ fontSize: 18, color: c.green, fontWeight: 700, flexShrink: 0 }}>✓</span>
        <p style={{ color: c.green, fontSize: big ? 15 : 13, fontWeight: 600 }}>{msg}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ width: '100%', maxWidth: big ? 480 : 400 }}>
      <div className="email-form-inner" style={{ background: c.card, border: `1px solid ${c.border}`, borderRadius: 4, padding: 5, boxShadow: sh.s1 }}>
        <input
          type="email" required value={email} onChange={e => setEmail(e.target.value)}
          placeholder="seu@email.com.br"
          style={{ flex: 1, background: 'none', border: 'none', outline: 'none', color: c.text, fontSize: big ? 15 : 13, padding: big ? '8px 12px' : '6px 10px', fontFamily: 'inherit', minWidth: 0 }}
        />
        <button type="submit" disabled={status === 'loading'} className="email-form-btn" style={{
          background: status === 'loading' ? c.borderHard : c.blue5,
          color: '#FFFFFF', border: 'none', borderRadius: 3,
          padding: big ? '10px 22px' : '8px 16px',
          fontSize: big ? 14 : 12, fontWeight: 700,
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          whiteSpace: 'nowrap', transition: 'background 0.15s', fontFamily: 'inherit',
        }}>
          {status === 'loading' ? 'Aguarde…' : 'Quero acesso antecipado'}
        </button>
      </div>
      {status === 'error' && <p style={{ color: c.red, fontSize: 12, marginTop: 6, paddingLeft: 8 }}>{msg}</p>}
      <p style={{ color: c.textFaint, fontSize: 11, marginTop: 8, paddingLeft: 8 }}>
        Sem spam. Cancelamento em 1 clique. Lançamento previsto para Q3 2026.
      </p>
    </form>
  );
}

/* ── App Mockup ── */
const screenImages = {
  dashboard: { dark: '/DashboardDark.png', light: '/DashboardLigth.png' },
  vault:     { dark: '/VaultDark.png',     light: '/VaultLigth.png'     },
  audit:     { dark: '/AuditDark.png',     light: '/AuditLigth.png'     },
  access:    { dark: '/accessDark.png',    light: '/accessLigth.png'    },
};

function AppMockup({ screen = 'dashboard', isDark, sh, c }) {
  const src = screenImages[screen][isDark ? 'dark' : 'light'];
  return (
    <div style={{ borderRadius: 6, overflow: 'hidden', border: `1px solid ${c.borderHard}`, boxShadow: sh.s3 }}>
      <div style={{ background: c.surface, padding: '10px 16px', borderBottom: `1px solid ${c.border}`, display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex', gap: 5, flexShrink: 0 }}>
          {['#FF5A5F','#FFC857','#27C281'].map(col => (
            <div key={col} style={{ width: 10, height: 10, borderRadius: '50%', background: col, opacity: 0.8 }} />
          ))}
        </div>
        <div style={{ flex: 1, background: c.card, border: `1px solid ${c.border}`, borderRadius: 3, padding: '4px 12px', fontSize: 11, color: c.textSub, textAlign: 'center', maxWidth: 240, margin: '0 auto' }}>
          app.zenite.cloud
        </div>
      </div>
      <img src={src} alt={screen} style={{ display: 'block', width: '100%', height: 'auto' }} />
    </div>
  );
}

/* ── Page ── */
export default function Home() {
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [isDark, setIsDark]             = useState(true);
  const [menuOpen, setMenuOpen]         = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('z-theme');
    if (saved) setIsDark(saved === 'dark');
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      }),
      { threshold: 0.10, rootMargin: '0px 0px -28px 0px' }
    );
    document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem('z-theme', next ? 'dark' : 'light');
  };

  const closeMenu = () => setMenuOpen(false);

  const c  = themes[isDark ? 'dark' : 'light'];
  const sh = shadows(isDark);

  const ThemeBtn = () => (
    <button onClick={toggleTheme} title={isDark ? 'Mudar para claro' : 'Mudar para escuro'}
      style={{ width: 34, height: 34, borderRadius: 4, background: 'transparent', border: `1px solid ${c.border}`, color: c.textSub, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.15s, color 0.15s', flexShrink: 0 }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = c.borderHard; e.currentTarget.style.color = c.text; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = c.border;     e.currentTarget.style.color = c.textSub; }}>
      {isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  );

  return (
    <>
      <Head>
        <title>Zênite — Cofre Digital com Conformidade LGPD para PMEs</title>
        <meta name="description" content="Proteja dados de clientes com criptografia zero-knowledge, auditoria LGPD automática e gestão de acessos. O cofre digital para escritórios, clínicas e corretoras." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      {/* ── NAVBAR ── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: c.surface, borderBottom: `1px solid ${c.border}`, padding: '0 5%', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: sh.s1, transition: 'background-color 0.32s ease, border-color 0.32s ease' }}>
        <Logo size={26} c={c} />

        {/* Desktop links */}
        <div className="nav-desktop">
          <a href="#features" style={{ color: c.textSub, fontSize: 14, padding: '7px 14px', borderRadius: 4, textDecoration: 'none' }}>Funcionalidades</a>
          <a href="#preview"  style={{ color: c.textSub, fontSize: 14, padding: '7px 14px', borderRadius: 4, textDecoration: 'none' }}>Prévia</a>
          <a href="#cta" style={{ background: c.blue5, color: '#FFFFFF', fontSize: 13, fontWeight: 700, padding: '8px 18px', borderRadius: 4, textDecoration: 'none', boxShadow: sh.s1 }}>Acesso Antecipado</a>
          <div style={{ width: 1, height: 20, background: c.border, margin: '0 4px' }} />
          <ThemeBtn />
        </div>

        {/* Mobile: theme + hamburger */}
        <div className="nav-mobile-right">
          <ThemeBtn />
          <button onClick={() => setMenuOpen(o => !o)} aria-label="Menu"
            style={{ width: 34, height: 34, borderRadius: 4, background: 'transparent', border: `1px solid ${c.border}`, color: c.text, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`} style={{ background: c.surface, borderBottom: `1px solid ${c.border}`, boxShadow: sh.s2 }}>
        <a href="#features" onClick={closeMenu} style={{ display: 'block', color: c.textSub, fontSize: 16, fontWeight: 500, padding: '14px 0', borderBottom: `1px solid ${c.border}` }}>Funcionalidades</a>
        <a href="#preview"  onClick={closeMenu} style={{ display: 'block', color: c.textSub, fontSize: 16, fontWeight: 500, padding: '14px 0', borderBottom: `1px solid ${c.border}` }}>Prévia</a>
        <div style={{ padding: '16px 0 8px' }}>
          <a href="#cta" onClick={closeMenu} style={{ display: 'block', background: c.blue5, color: '#FFFFFF', fontSize: 15, fontWeight: 700, padding: '13px 20px', borderRadius: 4, textAlign: 'center' }}>Acesso Antecipado</a>
        </div>
      </div>

      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 5% 80px', position: 'relative', overflow: 'hidden', background: c.base, transition: 'background-color 0.32s ease' }}>
        <div style={{ position: 'absolute', top: '15%', left: '8%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle,rgba(47,128,237,0.07),transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '15%', right: '5%', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle,rgba(79,209,197,0.05),transparent 70%)', pointerEvents: 'none' }} />

        <div className="hero-1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c.card, border: `1px solid ${c.borderHard}`, borderRadius: 4, padding: '6px 16px', marginBottom: 28, boxShadow: sh.s1, maxWidth: '100%' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.green, flexShrink: 0 }} />
          <span className="hero-badge-text" style={{ fontWeight: 600, color: c.blue4 }}>Acesso Antecipado — Startup Weekend Chapecó 2026</span>
        </div>

        <h1 className="hero-2" style={{ fontSize: 'clamp(30px,5vw,68px)', fontWeight: 900, letterSpacing: -2, textAlign: 'center', lineHeight: 1.08, maxWidth: 800, marginBottom: 20 }}>
          <span style={{ color: c.text }}>Seus dados de clientes</span><br />
          <span style={{ color: c.blue4 }}>blindados e em conformidade</span><br />
          <span style={{ color: c.text }}>com a LGPD</span>
        </h1>

        <p className="hero-3" style={{ fontSize: 'clamp(15px,2vw,18px)', color: c.textSub, textAlign: 'center', maxWidth: 560, marginBottom: 40, lineHeight: 1.6 }}>
          O cofre digital com criptografia <strong style={{ color: c.text }}>zero-knowledge</strong>, auditoria LGPD automática e relatório para a ANPD em um clique. Para escritórios, clínicas e corretoras.
        </p>

        <div className="hero-4" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <EmailForm source="hero" size="large" c={c} sh={sh} />
        </div>

        <div className="hero-5 hero-stats">
          {[
            { val: '12,6M',    label: 'PMEs no Brasil' },
            { val: '60%',      label: 'Fecham após ataque' },
            { val: 'R$ 7,19M', label: 'Custo médio violação' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: c.text, letterSpacing: -1 }}>{s.val}</div>
              <div style={{ fontSize: 12, color: c.textFaint }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section style={{ padding: '80px 5%', background: c.surface, borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`, transition: 'background-color 0.32s ease' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p data-reveal style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: c.blue5, marginBottom: 12 }}>O problema real</p>
          <h2 data-reveal data-d="1" style={{ fontSize: 'clamp(22px,3.5vw,44px)', fontWeight: 800, letterSpacing: -1, marginBottom: 16, lineHeight: 1.2, color: c.text }}>
            Seus arquivos estão no WhatsApp,{' '}
            <span style={{ color: c.red }}>e a ANPD já está multando.</span>
          </h2>
          <p data-reveal data-d="2" style={{ color: c.textSub, fontSize: 16, maxWidth: 600, marginBottom: 48, lineHeight: 1.7 }}>
            A primeira multa da LGPD foi para uma <strong style={{ color: c.text }}>microempresa</strong>. 62% dos ataques cibernéticos no Brasil miram PMEs. E 73% já foram vítimas de algum incidente.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 12 }}>
            {[
              { title: '"Documento no WhatsApp — se apagar, já era."',          desc: 'Inne Yara, Bens Seguros · Campina Grande/PB',       color: c.red    },
              { title: '"Usuários acessam documentos que não deveriam."',        desc: 'Bernardo · Inviolável, sistema SOC/SIEM próprio',   color: c.yellow },
              { title: '"Contato com paciente pelo próprio WhatsApp pessoal."',  desc: 'Lucas Nylan, Médico · usuário do Amplimed',         color: c.yellow },
            ].map((q, i) => (
              <div key={q.title} data-reveal data-d={String(i + 1)} style={{ background: c.card, border: `1px solid ${c.border}`, borderRadius: 6, padding: 24, borderLeft: `3px solid ${q.color}`, boxShadow: sh.s1 }}>
                <p style={{ fontSize: 15, fontWeight: 600, color: c.text, marginBottom: 8, lineHeight: 1.4 }}>{q.title}</p>
                <p style={{ fontSize: 12, color: c.textSub }}>{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: '80px 5%', background: c.base, transition: 'background-color 0.32s ease' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p data-reveal style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: c.blue5, marginBottom: 12 }}>Solução</p>
          <h2 data-reveal data-d="1" style={{ fontSize: 'clamp(22px,3.5vw,44px)', fontWeight: 800, letterSpacing: -1, marginBottom: 16, lineHeight: 1.2, color: c.text }}>
            Um cofre digital que protege,{' '}
            <span style={{ color: c.blue4 }}>classifica e prova conformidade.</span>
          </h2>
          <p data-reveal data-d="2" style={{ color: c.textSub, fontSize: 16, maxWidth: 540, marginBottom: 56, lineHeight: 1.7 }}>
            Nem nós lemos seus arquivos. Relatório para a ANPD em um clique. Bloqueio automático de ransomware.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12 }}>
            {[
              { title: 'Zero-Knowledge',      desc: 'Criptografia AES-256 no seu dispositivo antes de subir para a nuvem. Nem a Zênite pode ler seus arquivos.', color: c.cyan   },
              { title: 'Auditoria LGPD',       desc: 'Trilha imutável de todas as ações. Exporta relatório pronto para a ANPD em um clique, sem advogado.',        color: c.blue5  },
              { title: 'Classificação por IA', desc: 'Detecta CPF, dados financeiros e sensíveis no upload automático. Você sabe onde cada dado está.',             color: c.yellow },
              { title: 'Controle de Acessos',  desc: 'Admin, Colaborador, Viewer. Permissões por pasta. Bloqueio imediato de ex-funcionários.',                     color: c.purple },
              { title: 'Anti-Ransomware',       desc: 'Detecta e bloqueia downloads em massa suspeitos antes que o ataque se consolide.',                            color: c.red    },
              { title: 'Offline + Nuvem',       desc: 'Opera local quando sem internet. Sincroniza automaticamente quando a conexão volta.',                         color: c.green  },
            ].map((f, i) => (
              <div key={f.title} data-reveal data-d={String((i % 3) + 1)}
                style={{ background: c.card, border: `1px solid ${c.border}`, borderRadius: 6, padding: 24, borderTop: `3px solid ${f.color}`, transition: 'transform 0.15s, box-shadow 0.15s', boxShadow: sh.s1 }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = sh.s2; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none';             e.currentTarget.style.boxShadow = sh.s1; }}
              >
                <h3 style={{ fontSize: 15, fontWeight: 700, color: c.text, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: c.textSub, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP PREVIEW ── */}
      <section id="preview" style={{ padding: '80px 5%', background: c.surface, borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`, transition: 'background-color 0.32s ease' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p data-reveal style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: c.blue5, marginBottom: 12 }}>Prévia do produto</p>
          <h2 data-reveal data-d="1" style={{ fontSize: 'clamp(22px,3.5vw,44px)', fontWeight: 800, letterSpacing: -1, marginBottom: 40, lineHeight: 1.2, color: c.text }}>
            Veja como o Zênite funciona
          </h2>

          <div data-reveal data-d="2" className="preview-tabs">
            {[
              { key: 'dashboard', label: 'Dashboard'    },
              { key: 'vault',     label: 'Cofre Digital' },
              { key: 'audit',     label: 'Auditoria'    },
              { key: 'access',    label: 'Acessos'      },
            ].map(tab => (
              <button key={tab.key} onClick={() => setActiveScreen(tab.key)} style={{
                padding: '8px 16px', borderRadius: 4, fontSize: 13, fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.15s',
                background: activeScreen === tab.key ? 'rgba(47,128,237,0.12)' : c.card,
                border: `1px solid ${activeScreen === tab.key ? c.blue5 : c.border}`,
                color: activeScreen === tab.key ? c.blue4 : c.textSub,
                fontFamily: 'inherit', boxShadow: sh.s1,
              }}>
                {tab.label}
              </button>
            ))}
          </div>

          <div data-reveal data-d="3">
            <AppMockup screen={activeScreen} isDark={isDark} c={c} sh={sh} />
          </div>

          <p style={{ fontSize: 12, color: c.textFaint, textAlign: 'center', marginTop: 12 }}>
            Interface real do produto · Alterna automaticamente com o tema
          </p>
        </div>
      </section>

      {/* ── VS COMPETITORS ── */}
      <section style={{ padding: '80px 5%', background: c.base, transition: 'background-color 0.32s ease' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p data-reveal style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: c.blue5, marginBottom: 12 }}>Diferencial</p>
          <h2 data-reveal data-d="1" style={{ fontSize: 'clamp(22px,3.5vw,44px)', fontWeight: 800, letterSpacing: -1, marginBottom: 40, lineHeight: 1.2, color: c.text }}>
            Diferente do Google Drive e Dropbox
          </h2>
          <div data-reveal data-d="2" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
              <thead>
                <tr style={{ background: c.card }}>
                  <th style={{ textAlign: 'left',   padding: '12px 16px', fontSize: 12, color: c.textSub, borderBottom: `2px solid ${c.border}`,  fontWeight: 600 }}>Funcionalidade</th>
                  <th style={{ textAlign: 'center', padding: '12px 16px', fontSize: 13, color: c.blue4,   borderBottom: `2px solid ${c.blue5}`,   fontWeight: 700 }}>Zênite</th>
                  <th style={{ textAlign: 'center', padding: '12px 12px', fontSize: 12, color: c.textSub, borderBottom: `2px solid ${c.border}`,  fontWeight: 500 }}>G. Drive</th>
                  <th style={{ textAlign: 'center', padding: '12px 12px', fontSize: 12, color: c.textSub, borderBottom: `2px solid ${c.border}`,  fontWeight: 500 }}>Dropbox</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feat: 'Criptografia Zero-Knowledge',    z: true, g: false,     d: false     },
                  { feat: 'Log de Auditoria LGPD',          z: true, g: false,     d: false     },
                  { feat: 'Relatório ANPD em 1 clique',     z: true, g: false,     d: false     },
                  { feat: 'Classificação IA (CPF, RG…)',    z: true, g: false,     d: false     },
                  { feat: 'Bloqueio anti-ransomware',       z: true, g: false,     d: false     },
                  { feat: 'RBAC (Admin/Colab/Viewer)',      z: true, g: 'parcial', d: 'parcial' },
                  { feat: 'Armazenamento na nuvem',         z: true, g: true,      d: true      },
                  { feat: 'Funciona offline',               z: true, g: 'parcial', d: 'parcial' },
                ].map(row => (
                  <tr key={row.feat} style={{ borderBottom: `1px solid ${c.border}` }}>
                    <td style={{ padding: '10px 16px', fontSize: 13, color: c.textSub }}>{row.feat}</td>
                    {[row.z, row.g, row.d].map((val, i) => (
                      <td key={i} style={{ textAlign: 'center', padding: '10px 12px' }}>
                        {val === true  ? <span style={{ color: c.green,     fontSize: 16, fontWeight: 700 }}>✓</span>
                       : val === false ? <span style={{ color: c.textFaint, fontSize: 16 }}>✗</span>
                       :                <span style={{ color: c.yellow,     fontSize: 11, fontWeight: 600 }}>Parcial</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" style={{ padding: '80px 5% 100px', background: c.surface, borderTop: `1px solid ${c.border}`, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'background-color 0.32s ease' }}>
        <div data-reveal style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <img src="/logo.svg" alt="Zênite" width={48} height={48} />
        </div>
        <h2 data-reveal data-d="1" style={{ fontSize: 'clamp(24px,4vw,52px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 16, lineHeight: 1.1, color: c.text }}>
          Garanta seu acesso antecipado.<br />
          <span style={{ color: c.blue4 }}>Grátis por 60 dias.</span>
        </h2>
        <p data-reveal data-d="2" style={{ color: c.textSub, fontSize: 16, maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.7 }}>
          Os primeiros 100 clientes recebem 60 dias grátis e suporte de onboarding personalizado. Sem cartão de crédito.
        </p>
        <div data-reveal data-d="3" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <EmailForm source="cta" size="large" c={c} sh={sh} />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer-inner" style={{ padding: '28px 5%', borderTop: `1px solid ${c.border}`, background: c.base, transition: 'background-color 0.32s ease' }}>
        <Logo size={22} c={c} />
        <div style={{ fontSize: 12, color: c.textFaint }}>
          Startup Weekend Cybersecurity Chapecó 2026 · Protegendo PMEs brasileiras · LGPD-ready
        </div>
      </footer>
    </>
  );
}
