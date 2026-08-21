/* G.Y.M.B. Red/Blue Stage System: estrutura enxuta, pôsteres de performance reais e narrativa de lançamento bilíngue. */
/**
 * Ritual de Concreto: o cabeçalho usa o logo oficial azul da banda;
 * Hero de performance conduz o trio com guitarra ao centro; a seção de contato recupera uma fotografia editorial real da banda.
 */
import { useEffect, useState } from "react";
import { showEvents } from "./lib/showEvents";
import {
  ArrowUpRight,
  Check,
  CirclePlay,
  Copy,
  ExternalLink,
  FileDown,
  Instagram,
  Link2,
  Mail,
  Menu,
  MessageCircle,
  Play,
  Share2,
  X,
  Youtube,
} from "lucide-react";

type Lang = "en" | "pt";
type Track = "born" | "taken";
const links = {
  spotify: "https://open.spotify.com/artist/5j9opFuyXWNenUTosSpTx2?si=RNWcRRxGQXSdNPqM6wOgRg",
  youtube: "https://www.youtube.com/@Getyourmoralsburn/videos",
  born: "https://www.youtube.com/watch?v=kkFmfehKx-E",
  taken: "https://www.youtube.com/watch?v=T6pG_ClpwCo",
  youtubeMusic: "https://music.youtube.com/channel/UCe_y5t5HFYTxfYHpqbuEUKA",
  amazon: "https://music.amazon.it/artists/B0FVL9QCTC/get-your-morals-burn",
  deezer: "https://www.deezer.com/en/artist/350143732",
  apple: "https://music.apple.com/us/artist/get-your-morals-burn/1848269215",
  pressKit: "/manus-storage/main_a2ce42ee.pdf",
  instagram: "https://www.instagram.com/getyourmoralsburn/",
  whatsapp: "https://wa.me/5517981846985",
  email: "mailto:gymboficial@gmail.com?subject=G.Y.M.B.%20Booking%20and%20Media",
};

const media = {
  logo: "/manus-storage/gymb-logo-header-transparent_1b30c832.png",
  hero: "/manus-storage/hero-triptych-guitar-center-desktop_13165109.webp",
  heroMobile: "/manus-storage/hero-triptych-guitar-center-mobile_0ef056d0.webp",
  release: "/manus-storage/CAPA2_6e4f0c6a.png",
  guitarLive: "/manus-storage/guitar-live_9b9bbb0c.webp",
  percussionProfile: "/manus-storage/percussion-profile_cfa02772.webp",
  drumsWide: "/manus-storage/drums-wide_2969de72.webp",
  contact: "/manus-storage/gymb-contact-capa_f7eb19d0.png",
  marco: "/manus-storage/gymb-canva-treated-vocal-close_04526f03.png",
  walter: "/manus-storage/gymb-canva-treated-percussion-hand_2b80b5e7.png",
  atipdan: "/manus-storage/gymb-canva-treated-drums-portrait_3f6826b3.png",
  band: "/manus-storage/gymb-treated-band-wide_55b28b9d.png",
  archiveOne: "/manus-storage/gymb-canva-treated-guitar-percussion-stage_16b862dd.png",
  archiveTwo: "/manus-storage/gymb-treated-band-wide_55b28b9d.png",
};

const instagramPosts = [
  { number: "01", href: "https://www.instagram.com/p/DcJK09dvUbX/", image: "/manus-storage/07-primeiro-rock-no-recinto_0a2c513f.jpg", pt: ["PRIMEIRO ROCK NO RECINTO", "NOVO REGISTRO / PRÓXIMO SINGLE"], en: ["FIRST ROCK AT THE VENUE", "NEW FOOTAGE / UPCOMING SINGLE"] },
  { number: "02", href: "https://www.instagram.com/p/DUdeP4kDp8e/", image: "/manus-storage/01-taken-by-force_44bcf62f.jpg", pt: ["TAKED BY FORCE", "SINGLE / BATERIA"], en: ["TAKED BY FORCE", "SINGLE / DRUMS"] },
  { number: "03", href: "https://www.instagram.com/p/DURSIvCEqOm/", image: "/manus-storage/02-voices_53c1f932.jpg", pt: ["VOICES", "IMPROVISO / PERFORMANCE"], en: ["VOICES", "IMPROVISATION / PERFORMANCE"] },
  { number: "04", href: "https://www.instagram.com/p/DUJhOssD6te/", image: "/manus-storage/04-born-to-create_7d14a15d.jpg", pt: ["BORN TO CREATE", "LANÇAMENTO / LIVE SESSION"], en: ["BORN TO CREATE", "RELEASE / LIVE SESSION"] },
  { number: "05", href: "https://www.instagram.com/p/DPzxlwjDdFw/", image: "/manus-storage/05-kwaracy-festival_7c190909.jpg", pt: ["KWARACY FESTIVAL", "ARQUIVO DE PALCO / GUARACI"], en: ["KWARACY FESTIVAL", "STAGE ARCHIVE / GUARACI"] },
  { number: "06", href: "https://www.instagram.com/p/DN8luJaD4EA/", image: "/manus-storage/06-segura-peao_f62ee8a0.jpg", pt: ["SEGURA PEÃO", "ARQUIVO DE SHOW / LIVE SESSIONS I"], en: ["SEGURA PEÃO", "SHOW ARCHIVE / LIVE SESSIONS I"] },
] as const;

const copy = {
  pt: {
    nav: ["INÍCIO", "MÚSICA", "VÍDEOS", "GALERIA", "RELEASE", "FORMAÇÃO", "CONTATO"],
    eyebrow: "METAL PROGRESSIVO · ALTERNATIVO · EXPERIMENTAL",
    heroLead: "Desconstruindo dogmas e quebrando amarras mentais através de paisagens sonoras densas, dinâmicas e imprevisíveis.",
    listen: "OUVIR NO SPOTIFY",
    videos: "VER VÍDEOS",
    musicKicker: "LATEST RELEASES / 2025",
    musicTitle: "LANÇAMENTOS &\nDISCOGRAFIA",
    musicBody: "Peso não pede licença. Groove, ruído e queda livre entre o silêncio e o impacto.",
    newSingle: "GET YOUR MORALS BURN",
    newSingleMeta: "NOVO SINGLE · EM BREVE",
    newSingleSignal: "EM PROCESSO / DISPONÍVEL EM BREVE",
    taken: "TAKED BY FORCE",
    takenMeta: "SINGLE · LIVE SESSION",
    born: "BORN TO CREATE",
    bornMeta: "SINGLE · LIVE SESSION",
    playerTitle: "OUÇA AQUI",
    playerBody: "Escolha uma faixa e assista à performance no player integrado, sem sair do site.",
    playerNote: "O áudio é reproduzido pelo vídeo oficial da banda.",
    share: "COMPARTILHAR",
    whatsapp: "WHATSAPP",
    copyLink: "COPIAR LINK",
    copied: "LINK COPIADO",
    videosTitle: "VÍDEOS &\nPERFORMANCE",
    videosBody: "Palco, improviso e atrito — registre a frequência.",
    channel: "INSCREVA-SE NO CANAL DO YOUTUBE",
    instagramKicker: "ARQUIVO SOCIAL / INSTAGRAM",
    instagramBody: "Lançamentos, improvisos, colaborações e registros de shows já publicados no Instagram.",
    openInstagram: "ABRIR POST",
    watchInstagram: "ASSISTIR NO SITE",
    closePlayer: "FECHAR PLAYER",
    galleryKicker: "REGISTROS DE PALCO / ACERVO",
    galleryTitle: "SHOWS &\nREGISTROS",
    galleryBody: "Suor, amplificador e luz ruim. Abra cada noite sem estender a página.",
    openGallery: "ABRIR GALERIA",
    galleryPhotos: "FOTOS",
    closeGallery: "FECHAR GALERIA",
    galleryLoading: "CARREGANDO ACERVO",
    pressTitle: "SOBRE A BANDA &\nRELEASE OFICIAL",
    pressHeadline: "Get Your Morals Burn une peso moderno, groove orgânico e imprevisibilidade em apresentações de alto impacto.",
    pressParagraphs: [
      "Get Your Morals Burn (G.Y.M.B.) é um projeto autoral de Metal Progressivo Alternativo que confronta o ouvinte com uma proposta sonora dinâmica, densa e fora do convencional. Focada no impacto ao vivo e na quebra de dogmas visuais e sonoros, a banda entrega apresentações marcadas por grande amplitude dinâmica — transitando sem esforço entre atmosferas imersivas e etéreas e explosões de peso de alta intensidade.",
      "A proposta da G.Y.M.B. é construir uma experiência envolvente que recusa fórmulas prontas e estruturas previsíveis. O som do trio equilibra afinações baixas e timbres saturados com um groove único, nutrido por elementos de percussão e dinâmicas rítmicas do jazz e da música brasileira.",
      "A performance vocal acompanha essa volatilidade, alternando momentos de canto limpo, expressivo e com camadas de efeitos, com vocais rasgados de extrema carga dramática. O resultado no palco é um espetáculo visceral, fluido e moderno, ideal para públicos que buscam música pesada com identidade própria e sofisticação artística.",
    ],
    copyRelease: "COPIAR RELEASE",
    releaseCopied: "RELEASE COPIADO",
    downloadPressKit: "BAIXAR PRESS KIT PDF",
    lineupTitle: "FORMAÇÃO",
    members: [
      ["MARCO FERRERA", "VOCAIS & GUITARRAS"],
      ["WALTER H. BLACK", "PERCUSSÃO, EFEITOS & ATMOSFERAS"],
      ["ATIPDAN", "BATERIA, SAMPLES & PROGRAMAÇÕES"],
    ],
    contactTitle: "CONTATO &\nCONTRATAÇÃO",
    contactKicker: "CALL SHEET / BOOKING DESK",
    contactBody: "Palco, imprensa, estrada: acione a produção.",
    booking: "WHATSAPP / PRODUÇÃO",
    socials: "CANAIS OFICIAIS",
    menuLabel: "Abrir menu",
    footer: "BARRETOS / SP / BRASIL",
  },
  en: {
    nav: ["HOME", "MUSIC", "VIDEOS", "GALLERY", "PRESS RELEASE", "LINEUP", "CONTACT"],
    eyebrow: "ALTERNATIVE · EXPERIMENTAL · PROGRESSIVE METAL",
    heroLead: "Shattering imposed dogmas and breaking mental chains through dense, dynamic, and unpredictable soundscapes.",
    listen: "STREAM ON SPOTIFY",
    videos: "WATCH VIDEOS",
    musicKicker: "LATEST RELEASES / 2025",
    musicTitle: "DISCOGRAPHY &\nRELEASES",
    musicBody: "Weight asks no permission. Groove, noise and free fall between silence and impact.",
    newSingle: "GET YOUR MORALS BURN",
    newSingleMeta: "NEW SINGLE · COMING SOON",
    newSingleSignal: "IN PROCESS / AVAILABLE SOON",
    taken: "TAKED BY FORCE",
    takenMeta: "SINGLE · LIVE SESSION",
    born: "BORN TO CREATE",
    bornMeta: "SINGLE · LIVE SESSION",
    playerTitle: "LISTEN IN PLACE",
    playerBody: "Choose a track and watch the performance inside the site without leaving this page.",
    playerNote: "Audio is played through the band’s official video.",
    share: "SHARE",
    whatsapp: "WHATSAPP",
    copyLink: "COPY LINK",
    copied: "LINK COPIED",
    videosTitle: "VIDEOS &\nLIVE PERFORMANCE",
    videosBody: "Stage, improvisation and friction — register the frequency.",
    channel: "VISIT OUR YOUTUBE CHANNEL",
    instagramKicker: "SOCIAL ARCHIVE / INSTAGRAM",
    instagramBody: "Releases, improvisations, collaborations and live moments already published on Instagram.",
    openInstagram: "OPEN POST",
    watchInstagram: "WATCH IN SITE",
    closePlayer: "CLOSE PLAYER",
    galleryKicker: "LIVE DOCUMENTATION / ARCHIVE",
    galleryTitle: "LIVE SHOWS &\nDOCUMENTATION",
    galleryBody: "Sweat, amplifiers and bad light. Open each night without extending the page.",
    openGallery: "OPEN GALLERY",
    galleryPhotos: "PHOTOS",
    closeGallery: "CLOSE GALLERY",
    galleryLoading: "LOADING ARCHIVE",
    pressTitle: "ABOUT THE BAND &\nOFFICIAL PRESS RELEASE",
    pressHeadline: "Get Your Morals Burn Blends Modern Low-End Weight, Organic Groove, and Unpredictability in High-Impact Live Performances.",
    pressParagraphs: [
      "Get Your Morals Burn (G.Y.M.B.) is an original Alternative Progressive Metal project delivering a dynamic, dense, and non-conventional sound experience. Built around intense live energy and a commitment to shattering visual and sonic dogmas, the band delivers performances marked by extreme dynamic range—effortlessly shifting between immersive, atmospheric textures and high-impact heavy breakdowns.",
      "G.Y.M.B.’s core mission is to construct a captivating sonic journey that rejects fixed formulas and predictable structures. The trio balances low tunings and heavily saturated tones with a distinct, organic groove enriched by percussion and rhythmic dynamics drawn from jazz and Brazilian music.",
      "The vocal performance embraces this volatility, moving from clean, expressive lines with ambient effects to raw, highly dramatic screams. On stage, this creates a visceral, fluid, and modern show crafted for audiences seeking heavy music with a unique identity and artistic sophistication.",
    ],
    copyRelease: "COPY RELEASE",
    releaseCopied: "RELEASE COPIED",
    downloadPressKit: "DOWNLOAD PRESS KIT PDF",
    lineupTitle: "CURRENT LINEUP",
    members: [
      ["MARCO FERRERA", "VOCALS & GUITARS"],
      ["WALTER H. BLACK", "PERCUSSION, SOUND EFFECTS & ATMOSPHERES"],
      ["ATIPDAN", "DRUMS, SAMPLES & PROGRAMMING"],
    ],
    contactTitle: "BOOKING &\nMEDIA CONTACT",
    contactKicker: "CALL SHEET / BOOKING DESK",
    contactBody: "Stage, press, road: call production.",
    booking: "WHATSAPP / BOOKING",
    socials: "OFFICIAL CHANNELS",
    menuLabel: "Open menu",
    footer: "BARRETOS / SP / BRAZIL",
  },
} as const;

const navTargets = ["#home", "#music", "#videos", "#gallery", "#press", "#lineup", "#contact"];

function SectionTitle({ children }: { children: string }) {
  return <h2 className="section-title whitespace-pre-line">{children}</h2>;
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("pt");
  const [introVisible, setIntroVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTrack, setActiveTrack] = useState<Track>("born");
  const [copiedRelease, setCopiedRelease] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeInstagramPost, setActiveInstagramPost] = useState<(typeof instagramPosts)[number] | null>(null);
  const [activeShowEvent, setActiveShowEvent] = useState<(typeof showEvents)[number] | null>(null);
  const [activeShowImage, setActiveShowImage] = useState<string | null>(null);
  const [galleryLoading, setGalleryLoading] = useState(false);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("gymb-language");
    if (savedLanguage === "en" || savedLanguage === "pt") setLang(savedLanguage);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setIntroVisible(false), reducedMotion ? 0 : 1320);
    return () => window.clearTimeout(timer);
  }, []);

  const t = copy[lang];
  const activeTrackTitle = activeTrack === "born" ? t.born : t.taken;
  const activeTrackUrl = activeTrack === "born" ? links.born : links.taken;
  const shareText = lang === "pt" ? `Ouça ${activeTrackTitle} da GET YOUR MORALS BURN.` : `Listen to ${activeTrackTitle} by GET YOUR MORALS BURN.`;
  const whatsappShare = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${activeTrackUrl}`)}`;
  const releaseText = `${t.pressHeadline}\n\n${t.pressParagraphs.join("\n\n")}`;

  function switchLanguage(nextLanguage: Lang) {
    setLang(nextLanguage);
    window.localStorage.setItem("gymb-language", nextLanguage);
  }

  async function copyText(text: string, onCopied: () => void) {
    try {
      await navigator.clipboard.writeText(text);
      onCopied();
    } catch {
      window.prompt("Copy this text:", text);
      onCopied();
    }
  }

  function copyRelease() {
    void copyText(releaseText, () => {
      setCopiedRelease(true);
      window.setTimeout(() => setCopiedRelease(false), 1800);
    });
  }

  function copyTrackLink() {
    void copyText(activeTrackUrl, () => {
      setCopiedLink(true);
      window.setTimeout(() => setCopiedLink(false), 1800);
    });
  }

  function openShowGallery(event: (typeof showEvents)[number]) {
    setActiveShowEvent(event);
    setActiveShowImage(event.images[0]);
    setGalleryLoading(true);
  }

  function closeShowGallery() {
    setActiveShowEvent(null);
    setActiveShowImage(null);
    setGalleryLoading(false);
  }

  async function shareTrack() {
    if (navigator.share) {
      try {
        await navigator.share({ title: `${activeTrackTitle} — GET YOUR MORALS BURN`, text: shareText, url: activeTrackUrl });
        return;
      } catch {
        return;
      }
    }
    window.open(whatsappShare, "_blank", "noopener,noreferrer");
  }

  const memberImages = [media.marco, media.walter, media.atipdan];
  const editorialPortraits = [
    { src: media.guitarLive, pt: "GUITARRA & VOZ", en: "GUITAR & VOCALS" },
    { src: media.percussionProfile, pt: "PERCUSSÃO & ATMOSFERAS", en: "PERCUSSION & ATMOSPHERES" },
    { src: media.drumsWide, pt: "BATERIA & PULSO", en: "DRUMS & PULSE" },
  ];

  return (
    <>
      {introVisible && <div className="site-intro" role="status" aria-live="polite" aria-label="GET YOUR MORALS BURN"><div className="site-intro-inner"><img src={media.logo} alt="GET YOUR MORALS BURN" /><span>RITUAL DE CONCRETO</span><i aria-hidden="true" /><small>CARREGANDO</small></div></div>}
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a href="#home" className="brand-lockup" aria-label="GET YOUR MORALS BURN">
            <img src={media.logo} alt="G.Y.M.B. — Get Your Morals Burn" />
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {t.nav.map((item, index) => <a key={item} href={navTargets[index]}>{item}</a>)}
          </nav>

          <div className="header-actions">
            <div className="language-switch" aria-label="Language selector">
              <button type="button" className={lang === "en" ? "active" : ""} onClick={() => switchLanguage("en")} aria-pressed={lang === "en"}>EN <span>ENGLISH</span></button>
              <button type="button" className={lang === "pt" ? "active" : ""} onClick={() => switchLanguage("pt")} aria-pressed={lang === "pt"}>PT <span>PORTUGUÊS</span></button>
            </div>
            <button type="button" className="menu-toggle" aria-label={t.menuLabel} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
          </div>
        </div>
        <div className="double-rail" />
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{t.nav.map((item, index) => <a key={item} href={navTargets[index]} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>}
      </header>

      <main id="home">
        <section className="hero-section band-section">
          <div className="hero-art" aria-hidden="true"><picture><source media="(max-width: 680px)" srcSet={media.heroMobile} /><img src={media.hero} alt="" /></picture></div>
          <div className="hero-overlay" />
          <div className="hero-content hero-centered page-width">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>GET YOUR<br />MORALS<br /><em>BURN</em></h1>
            <p className="hero-lead">{t.heroLead}</p>
            <div className="hero-actions">
              <a href={links.spotify} target="_blank" rel="noreferrer" className="button button-red"><CirclePlay size={16} />{t.listen}<ArrowUpRight size={14} /></a>
              <a href="#music" className="button button-outline"><Play size={14} fill="currentColor" />{t.videos}</a>
            </div>
          </div>
        </section>

        <section id="music" className="band-section music-section">
          <div className="page-width">
            <div className="section-intro split-intro">
              <div><p className="eyebrow">{t.musicKicker}</p><SectionTitle>{t.musicTitle}</SectionTitle></div>
              <p>{t.musicBody}</p>
            </div>

            <div className="release-list">
              <div className="release-row upcoming-row new-single-row"><span>00</span><div><b>{t.newSingle}</b><small>{t.newSingleMeta}</small></div><div className="new-single-signal"><i>•••</i><small>{t.newSingleSignal}</small></div></div>
              <button type="button" onClick={() => setActiveTrack("taken")} className={`release-row ${activeTrack === "taken" ? "selected" : ""}`}><span>01</span><div><b>{t.taken}</b><small>{t.takenMeta}</small></div><Play size={18} fill="currentColor" /></button>
              <button type="button" onClick={() => setActiveTrack("born")} className={`release-row ${activeTrack === "born" ? "selected" : ""}`}><span>02</span><div><b>{t.born}</b><small>{t.bornMeta}</small></div><Play size={18} fill="currentColor" /></button>
            </div>

            <div className="player-shell player-only">
              <div className="player-video">
                <iframe title={`${activeTrackTitle} — GET YOUR MORALS BURN`} src={`https://www.youtube-nocookie.com/embed/${activeTrack === "born" ? "kkFmfehKx-E" : "T6pG_ClpwCo"}?rel=0&modestbranding=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy" />
                <div className="share-bar"><span>{t.share}: <b>{activeTrackTitle}</b></span><div><button type="button" onClick={shareTrack}><Share2 size={13} />{t.share}</button><a href={whatsappShare} target="_blank" rel="noreferrer"><MessageCircle size={13} />{t.whatsapp}</a><button type="button" onClick={copyTrackLink}><Link2 size={13} />{copiedLink ? t.copied : t.copyLink}</button></div></div>
              </div>
            </div>

            <div className="platform-bar" aria-label="Streaming platforms">
              <a href={links.spotify} target="_blank" rel="noreferrer">SPOTIFY <ExternalLink size={15} /></a>
              <a href={links.youtubeMusic} target="_blank" rel="noreferrer">YOUTUBE MUSIC <ExternalLink size={15} /></a>
              <a href={links.deezer} target="_blank" rel="noreferrer">DEEZER <ExternalLink size={15} /></a>
              <a href={links.amazon} target="_blank" rel="noreferrer">AMAZON MUSIC <ExternalLink size={15} /></a>
              <a href={links.apple} target="_blank" rel="noreferrer">APPLE MUSIC <ExternalLink size={15} /></a>
            </div>
            <div className="music-channel-cta"><a className="youtube-cta youtube-cta-music" href={links.youtube} target="_blank" rel="noreferrer"><Youtube size={23} fill="currentColor" />{t.channel}<ArrowUpRight size={19} /></a></div>
          </div>
        </section>

        <section id="videos" className="band-section videos-section">
          <div className="page-width">
            <div className="section-intro videos-heading"><div><SectionTitle>{t.videosTitle}</SectionTitle><p>{t.videosBody}</p></div></div>
            <div className="instagram-archive">
              <div className="instagram-archive-heading"><p className="eyebrow">{t.instagramKicker}</p><p>{t.instagramBody}</p></div>
            <div className="instagram-scroll" aria-label="Instagram performance archive">{instagramPosts.map((post) => { const [title, category] = post[lang]; return <button type="button" key={post.number} onClick={() => setActiveInstagramPost(post)} className="instagram-card"><span className="media-seal" aria-hidden="true" /><img src={post.image} alt={`${title} Instagram post`} /><div><span>{post.number}</span><small>{category}</small><b>{title}</b><em><Play size={13} fill="currentColor" />{t.watchInstagram}<ArrowUpRight size={13} /></em></div></button>; })}</div>
            </div>
          </div>
        </section>

        <section id="gallery" className="band-section shows-section">
          <div className="page-width">
            <div className="section-intro split-intro shows-intro">
              <div><p className="eyebrow">{t.galleryKicker}</p><SectionTitle>{t.galleryTitle}</SectionTitle></div>
              <p>{t.galleryBody}</p>
            </div>
            <div className="show-event-grid">
              {showEvents.map((event) => {
                const details = event[lang];
                return <article className="show-event-card" key={event.number}><button type="button" onClick={() => openShowGallery(event)}><span className="media-seal" aria-hidden="true" /><img src={event.cover} alt={`${details.title} gallery cover`} /><div><span>{event.number}</span><small>{details.note}</small><b>{details.title}</b><em>{event.images.length.toString().padStart(2, "0")} {t.galleryPhotos}<ArrowUpRight size={13} /></em></div></button></article>;
              })}
            </div>
          </div>
        </section>

        <section id="press" className="band-section press-section">
          <div className="page-width press-layout">
            <div className="press-copy"><SectionTitle>{t.pressTitle}</SectionTitle><h3>{t.pressHeadline}</h3><div className="press-body">{t.pressParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="press-actions"><a href={links.pressKit} target="_blank" rel="noreferrer" className="button button-red"><FileDown size={16} />{t.downloadPressKit}</a><button type="button" className="button button-outline" onClick={copyRelease}>{copiedRelease ? <Check size={16} /> : <Copy size={16} />}{copiedRelease ? t.releaseCopied : t.copyRelease}</button></div></div>
            <figure className="feature-poster"><img src={media.release} alt="G.Y.M.B. performance in red and blue graphic treatment" /><figcaption>LIVE ENERGY / G.Y.M.B.</figcaption></figure>
          </div>
          <div className="page-width editorial-portrait-grid">{editorialPortraits.map((portrait, index) => <figure key={portrait.src}><img src={portrait.src} alt={`${portrait[lang]} of GET YOUR MORALS BURN`} /><figcaption><span>0{index + 1}</span>{portrait[lang]}</figcaption></figure>)}</div>
        </section>

        <section id="lineup" className="band-section lineup-section">
          <div className="page-width"><div className="lineup-heading"><SectionTitle>{t.lineupTitle}</SectionTitle></div><div className="member-grid">{t.members.map(([name, role], index) => <article className="member-card" key={name}><img src={memberImages[index]} alt={`${name} of GET YOUR MORALS BURN`} /><div><span>0{index + 1}</span><h3>{name}</h3><p>{role}</p></div></article>)}</div></div>
        </section>

        <section id="contact" className="band-section contact-section">
          <div className="page-width contact-layout"><div><p className="eyebrow">{t.contactKicker}</p><SectionTitle>{t.contactTitle}</SectionTitle><p className="contact-lead">{t.contactBody}</p></div><div className="contact-stack"><a href={links.email}><Mail size={21} /><span><small>E-MAIL / PRESS</small><b>gymboficial@gmail.com</b></span><ArrowUpRight size={16} /></a><a href={links.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={21} /><span><small>{t.booking}</small><b>+55 (17) 98184-6985</b></span><ArrowUpRight size={16} /></a><a href={links.instagram} target="_blank" rel="noreferrer"><Instagram size={21} /><span><small>INSTAGRAM / LIVE FEED</small><b>@getyourmoralsburn</b></span><ArrowUpRight size={16} /></a></div><figure className="contact-visual"><img src={media.contact} alt="GET YOUR MORALS BURN official portrait" /><figcaption>G.Y.M.B. / LIVE CONTACT</figcaption></figure></div>
        </section>
      </main>

      {activeInstagramPost && <div className="instagram-player-backdrop" role="presentation" onMouseDown={() => setActiveInstagramPost(null)}><div className="instagram-player-modal" role="dialog" aria-modal="true" aria-label="Instagram player" onMouseDown={(event) => event.stopPropagation()}><div className="instagram-player-top"><div><span>{activeInstagramPost.number}</span><b>{activeInstagramPost[lang][0]}</b></div><button type="button" onClick={() => setActiveInstagramPost(null)}><X size={16} />{t.closePlayer}</button></div><iframe title={`${activeInstagramPost[lang][0]} Instagram post`} src={`${activeInstagramPost.href}embed/captioned/`} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" loading="lazy" /><a className="instagram-original-link" href={activeInstagramPost.href} target="_blank" rel="noreferrer"><Instagram size={14} />{t.openInstagram}<ArrowUpRight size={14} /></a></div></div>}

      {activeShowEvent && activeShowImage && <div className="show-gallery-backdrop" role="presentation" onMouseDown={closeShowGallery}><div className="show-gallery-modal" role="dialog" aria-modal="true" aria-label={activeShowEvent[lang].title} onMouseDown={(event) => event.stopPropagation()}><div className="show-gallery-top"><div><span>{activeShowEvent.number}</span><b>{activeShowEvent[lang].title}</b><small>{activeShowEvent[lang].note} / {activeShowEvent.images.length} {t.galleryPhotos}</small></div><button type="button" onClick={closeShowGallery}><X size={16} />{t.closeGallery}</button></div><div className={`show-gallery-focus ${galleryLoading ? "is-loading" : ""}`} aria-busy={galleryLoading}>{galleryLoading && <div className="gallery-loader"><i /><span>{t.galleryLoading}</span></div>}<img src={activeShowImage} alt={`${activeShowEvent[lang].title} selected image`} onLoad={() => setGalleryLoading(false)} /></div><div className="show-gallery-thumbs">{activeShowEvent.images.map((image, index) => <button type="button" key={image} className={activeShowImage === image ? "active" : ""} onClick={() => { setGalleryLoading(true); setActiveShowImage(image); }} aria-label={`${activeShowEvent[lang].title} photo ${index + 1}`} aria-pressed={activeShowImage === image}><img src={image} alt="" /></button>)}</div></div></div>}

      <footer><div className="page-width"><span className="brand-seal footer-seal" aria-hidden="true" /><span>© 2026 GET YOUR MORALS BURN</span><span>{t.footer}</span><div className="footer-socials" aria-label="Official social links"><a href={links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={14} />INSTAGRAM</a><a href={links.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={14} />YOUTUBE</a><a href={links.spotify} target="_blank" rel="noreferrer" aria-label="Spotify"><CirclePlay size={14} />SPOTIFY</a></div></div></footer>
    </div>
    </>
  );
}
