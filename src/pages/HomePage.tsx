import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CASE_STUDIES } from '../data/caseStudies';
import { Button } from '../components/ui/Button/Button';
import { Input } from '../components/ui/Input/Input';
import styles from './HomePage.module.css';
import gonzaloImg from '../assets/un_poco_de_mi.jpg';

gsap.registerPlugin(ScrollTrigger);

const FORMSPREE_URL = 'https://formspree.io/f/meeppazv';

export function HomePage() {
  const [contactMode, setContactMode] = useState<'text' | 'draw'>('text');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSucceeded, setIsSucceeded] = useState(false);
  const contactCanvasRef = useRef<HTMLCanvasElement>(null);
  const contactFormRef = useRef<HTMLFormElement>(null);
  const containerRef  = useRef<HTMLDivElement>(null);

  // Inicializar canvas de contacto cuando cambia de modo
  useEffect(() => {
    if (contactMode === 'draw' && contactCanvasRef.current) {
      const canvas = contactCanvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.imageSmoothingEnabled = false;
        // Fix 10: Usar color del tema en lugar de blanco fijo
        const surface = getComputedStyle(document.documentElement)
          .getPropertyValue('--color-surface').trim() || '#FFFFFF';
        ctx.fillStyle = surface;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, [contactMode]);

  // Dibujo en canvas de contacto
  const contactCanvasDrawRef = useRef(false);
  const contactCanvasLastPosRef = useRef({ x: 0, y: 0 });

  const getCanvasPos = (canvas: HTMLCanvasElement, clientX: number, clientY: number) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  };

  const startContactDraw = (x: number, y: number) => {
    contactCanvasDrawRef.current = true;
    contactCanvasLastPosRef.current = { x, y };
  };

  const moveContactDraw = (x: number, y: number) => {
    if (!contactCanvasDrawRef.current || !contactCanvasRef.current) return;
    const ctx = contactCanvasRef.current.getContext('2d');
    if (!ctx) return;

    // Fix 10: Usar color del tema para el trazo
    const onSurface = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-on-surface').trim() || '#1A1A1A';

    ctx.imageSmoothingEnabled = false;
    ctx.strokeStyle = onSurface;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(contactCanvasLastPosRef.current.x, contactCanvasLastPosRef.current.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    contactCanvasLastPosRef.current = { x, y };
  };

  const stopContactDraw = () => {
    contactCanvasDrawRef.current = false;
  };

  // Mouse events
  const handleContactCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!contactCanvasRef.current) return;
    const pos = getCanvasPos(contactCanvasRef.current, e.clientX, e.clientY);
    startContactDraw(pos.x, pos.y);
  };

  const handleContactCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!contactCanvasRef.current) return;
    const pos = getCanvasPos(contactCanvasRef.current, e.clientX, e.clientY);
    moveContactDraw(pos.x, pos.y);
  };

  const handleContactCanvasMouseUp = () => stopContactDraw();
  const handleContactCanvasMouseLeave = () => stopContactDraw();

  // Touch events
  const handleContactCanvasTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (!contactCanvasRef.current || !e.touches[0]) return;
    const pos = getCanvasPos(contactCanvasRef.current, e.touches[0].clientX, e.touches[0].clientY);
    startContactDraw(pos.x, pos.y);
  };

  const handleContactCanvasTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (!contactCanvasRef.current || !e.touches[0]) return;
    const pos = getCanvasPos(contactCanvasRef.current, e.touches[0].clientX, e.touches[0].clientY);
    moveContactDraw(pos.x, pos.y);
  };

  const handleContactCanvasTouchEnd = () => stopContactDraw();

  // Limpiar canvas de contacto
  const clearContactCanvas = () => {
    if (!contactCanvasRef.current) return;
    const ctx = contactCanvasRef.current.getContext('2d');
    if (!ctx) return;
    // Fix 10: Tema-aware clear
    const surface = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-surface').trim() || '#FFFFFF';
    ctx.fillStyle = surface;
    ctx.fillRect(0, 0, contactCanvasRef.current.width, contactCanvasRef.current.height);
  };

  // Helper: enviar datos a Formspree (funciona en local y en Vercel)
  const sendToFormspree = async (data: Record<string, string>) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) throw new Error('Error al enviar');
  };

  // Submit del formulario de contacto
  const handleContactFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      if (contactMode === 'draw' && contactCanvasRef.current) {
        // Convertir canvas a blob
        const blob = await new Promise<Blob>((resolve) => {
          contactCanvasRef.current!.toBlob((b) => resolve(b!), 'image/png');
        });

        // Validar tamaño (max 5MB)
        if (blob.size > 5 * 1024 * 1024) {
          alert('El dibujo es muy grande. Intenta con un dibujo mas simple.');
          setIsSubmitting(false);
          return;
        }

        // Subir a Cloudinary
        const cloudinaryData = new FormData();
        cloudinaryData.append('file', blob);
        cloudinaryData.append('upload_preset', 'portfolio_drawings');

        const cloudResponse = await fetch(
          'https://api.cloudinary.com/v1_1/dahvu7eyh/image/upload',
          { method: 'POST', body: cloudinaryData }
        );

        if (!cloudResponse.ok) throw new Error('Error al subir el dibujo');

        const cloudData = await cloudResponse.json();

        // Obtener valores del formulario
        const nameInput = contactFormRef.current?.querySelector<HTMLInputElement>('input[name="name"]');
        const emailInput = contactFormRef.current?.querySelector<HTMLInputElement>('input[name="email"]');

        if (!nameInput?.value || !emailInput?.value) {
          alert('Completa nombre y email');
          setIsSubmitting(false);
          return;
        }

        await sendToFormspree({
          name: nameInput.value,
          email: emailInput.value,
          message: 'He enviado un dibujo',
          drawing_url: cloudData.secure_url,
        });
      } else {
        // Modo texto
        const nameInput = contactFormRef.current?.querySelector<HTMLInputElement>('input[name="name"]');
        const emailInput = contactFormRef.current?.querySelector<HTMLInputElement>('input[name="email"]');
        const messageInput = contactFormRef.current?.querySelector<HTMLTextAreaElement>('textarea[name="message"]');

        if (!nameInput?.value || !emailInput?.value || !messageInput?.value) {
          alert('Completa todos los campos');
          setIsSubmitting(false);
          return;
        }

        await sendToFormspree({
          name: nameInput.value,
          email: emailInput.value,
          message: messageInput.value,
        });
      }

      setIsSucceeded(true);
      contactFormRef.current?.reset();
    } catch (error) {
      console.error('Error:', error);
      alert('No se pudo enviar. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in hero
      gsap.fromTo('[data-fade]',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', stagger: 0.07, delay: 0.1 }
      );
      // Scroll reveal
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true } }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Gonzalo Daniel Pérez — UX/UI Designer</title>
        <meta name="description" content="Portfolio de UX/UI Design. Metodología AI-native. Corrientes, Argentina." />
      </Helmet>

      <div ref={containerRef}>

        {/* ── HERO HOOK ── */}
        <section className={styles.hero}>
          <h1
            className={styles.heroTitle}
            data-fade
            aria-label="UX con AI aplicada"
          >
            <span>UX CON AI</span>
            <span>APLICADA</span>
          </h1>
        </section>

        {/* ── ABOUT ── */}
        <section className={styles.about}>

          <div className={styles.aboutContent} data-reveal>
            <div className={styles.aboutLayout}>

              {/* Izquierda: imagen + párrafo */}
              <div className={styles.aboutBody}>
                <div className={styles.aboutImagePlaceholder}>
                  <img src={gonzaloImg} alt="Gonzalo Daniel Pérez" className={styles.aboutImage} />
                </div>
                <p className={styles.aboutText}>
                  Hola, soy Gonzalo Pérez — UX/UI Lead. Trabajé con Design Systems, enseñé UX/UI a 70+ estudiantes,
                  y ahora trabajo con metodología AI-native manteniendo el criterio humano en cada decisión.
                  La claridad en el proceso importa tanto como el resultado.
                </p>
                <Link to="/about" className={styles.sectionLink}>
                  Ver más →
                </Link>
              </div>

              {/* Derecha: título */}
              <div className={styles.aboutTitleWrap}>
                <h2
                  className={styles.aboutTitle}
                  aria-label="Un poco de mi"
                >
                  <span>UN</span>
                  <span>POCO</span>
                  <span>DE MI</span>
                </h2>
              </div>

            </div>

          </div>
        </section>

        {/* ── PROYECTOS ── */}
        <section className={styles.featured}>
          <div className={styles.featuredLayout}>

            {/* Título PRO/YEC/TOS */}
            <div className={styles.featuredTitleWrap} data-reveal>
              <h2 className={styles.featuredTitle}>
                <span>PRO</span>
                <span>YEC</span>
                <span>TOS</span>
              </h2>
            </div>

            {/* Lista vertical de proyectos */}
            <div className={styles.featuredList}>
              {CASE_STUDIES.map(cs => (
                <Link key={cs.slug} to={`/works/${cs.slug}`} className={styles.featuredItem} data-reveal>
                  <span className={styles.featuredItemType}>{cs.type}</span>
                  <span className={styles.featuredItemTitle}>{cs.title}</span>
                  <span className={styles.featuredItemPeriod}>{cs.period}</span>
                </Link>
              ))}
              <Link to="/works" className={styles.sectionLink} data-reveal>
                Ver todos →
              </Link>
            </div>

          </div>
        </section>

        {/* ── CONTACTO ── */}
        <section id="contacto" className={styles.contact} data-reveal>
          <div className={styles.contactLayout}>

            {/* Izquierda: formulario + redes */}
            <div className={styles.contactContent}>
              {/* Formulario */}
              {isSucceeded ? (
                <div className={styles.contactSuccess}>
                  <p className={styles.contactSuccessText}>
                    ✓ Tu mensaje llegó correctamente.<br />
                    <span className={styles.contactSuccessSecondary}>
                      Nos pondremos en contacto pronto.
                    </span>
                  </p>
                </div>
              ) : (
                <form ref={contactFormRef} onSubmit={handleContactFormSubmit} className={styles.contactForm} noValidate>
                  {/* Toggle Texto / Dibujo */}
                  <div className={styles.contactModeToggle}>
                    <button
                      type="button"
                      className={`${styles.contactModeBtn} ${contactMode === 'text' ? styles.contactModeBtnActive : ''}`}
                      onClick={() => setContactMode('text')}
                    >
                      📝 Texto
                    </button>
                    <button
                      type="button"
                      className={`${styles.contactModeBtn} ${contactMode === 'draw' ? styles.contactModeBtnActive : ''}`}
                      onClick={() => setContactMode('draw')}
                    >
                      🎨 Dibujo
                    </button>
                  </div>

                  {/* Nombre y Email en la misma fila */}
                  <div className={styles.contactRow}>
                    <Input
                      id="contact-name"
                      label="Nombre"
                      type="text"
                      name="name"
                      required
                    />
                    <Input
                      id="contact-email"
                      label="Email"
                      type="email"
                      name="email"
                      required
                      pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                    />
                  </div>

                  {/* Campo mensaje */}
                  {contactMode === 'text' && (
                    <Input
                      as="textarea"
                      id="contact-message"
                      label="Mensaje"
                      name="message"
                      required
                      minLength={10}
                    />
                  )}

                  {contactMode === 'draw' && (
                    <>
                      <input type="hidden" name="message" value="He enviado un dibujo. Ver en el campo 'drawing_url'." />
                      <div className={styles.contactDrawContainer}>
                        <canvas
                          ref={contactCanvasRef}
                          width={600}
                          height={300}
                          className={styles.contactCanvas}
                          onMouseDown={handleContactCanvasMouseDown}
                          onMouseMove={handleContactCanvasMouseMove}
                          onMouseUp={handleContactCanvasMouseUp}
                          onMouseLeave={handleContactCanvasMouseLeave}
                          onTouchStart={handleContactCanvasTouchStart}
                          onTouchMove={handleContactCanvasTouchMove}
                          onTouchEnd={handleContactCanvasTouchEnd}
                        />
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        type="button"
                        onClick={clearContactCanvas}
                      >
                        Limpiar
                      </Button>
                    </>
                  )}

                  <Button type="submit" disabled={isSubmitting} fullWidth>
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                  </Button>
                </form>
              )}

              {/* Redes sociales */}
              <div className={styles.contactLinks}>
                <a href="mailto:gonzaloperezdg@gmail.com" className={styles.contactLink}>
                  <span className={styles.contactLinkLabel}>Mail</span>
                  <span className={styles.contactLinkValue}>gonzaloperezdg@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/gonzaloperezdg/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  <span className={styles.contactLinkLabel}>LinkedIn</span>
                  <span className={styles.contactLinkValue}>linkedin.com/in/gonzaloperezdg</span>
                </a>
                <a href="https://github.com/Gonzaloperezdg" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  <span className={styles.contactLinkLabel}>GitHub</span>
                  <span className={styles.contactLinkValue}>github.com/Gonzaloperezdg</span>
                </a>
              </div>
            </div>

            {/* Derecha: título CON TAC TO */}
            <div className={styles.contactTitleWrap}>
              <h2 className={styles.contactTitle}>
                <span>CON</span>
                <span>TAC</span>
                <span>TO</span>
              </h2>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}
