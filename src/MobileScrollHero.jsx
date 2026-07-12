import React from 'react';

const TOTAL_FRAMES = 160;

export default function MobileScrollHero({ targetId = 'questionario' }) {
  const trackRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const imagesRef = React.useRef([]);
  const firstCaptionRef = React.useRef(null);
  const secondCaptionRef = React.useRef(null);
  const ctaRef = React.useRef(null);
  const frameIndexRef = React.useRef(1);
  const requestRef = React.useRef(null);
  const progressRef = React.useRef(0);

  const [loadedCount, setLoadedCount] = React.useState(0);
  const [isReady, setIsReady] = React.useState(false);

  const drawFrame = React.useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current[index - 1];

    if (!img || !img.complete) {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const previous = imagesRef.current[index - 1 - offset];
        const next = imagesRef.current[index - 1 + offset];

        if (previous?.complete) {
          img = previous;
          break;
        }

        if (next?.complete) {
          img = next;
          break;
        }
      }
    }

    if (!img || !img.complete) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imageWidth = img.naturalWidth || img.width;
    const imageHeight = img.naturalHeight || img.height;
    const imageRatio = imageWidth / imageHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (imageRatio > canvasRatio) {
      drawWidth = canvasHeight * imageRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
    } else {
      drawHeight = canvasWidth / imageRatio;
      offsetY = (canvasHeight - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  const updateOverlay = React.useCallback((progress) => {
    if (firstCaptionRef.current) {
      const p = Math.min(1, Math.max(0, progress / 0.16));
      firstCaptionRef.current.style.opacity = String(1 - p);
      firstCaptionRef.current.style.transform = `translateY(${-32 * p}px)`;
      firstCaptionRef.current.style.pointerEvents = progress < 0.16 ? 'auto' : 'none';
    }

    if (secondCaptionRef.current) {
      const p = Math.min(1, Math.max(0, (progress - 0.68) / 0.18));
      secondCaptionRef.current.style.opacity = String(p);
      secondCaptionRef.current.style.transform = `translateY(${28 - 28 * p}px)`;
    }

    if (ctaRef.current) {
      const p = Math.min(1, Math.max(0, (progress - 0.84) / 0.12));
      ctaRef.current.style.opacity = String(p);
      ctaRef.current.style.transform = `translateY(${22 - 22 * p}px)`;
      ctaRef.current.style.pointerEvents = p > 0.2 ? 'auto' : 'none';
    }
  }, []);

  React.useEffect(() => {
    let mounted = true;
    const loadedImages = [];
    let count = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frame = String(i).padStart(3, '0');
      img.src = `/images/hero-sequence/ezgif-frame-${frame}.jpg`;
      loadedImages[i - 1] = img;
      imagesRef.current = loadedImages;

      img.onload = () => {
        if (!mounted) return;
        count += 1;
        setLoadedCount(count);

        if (i === 1) drawFrame(1);
        if (count >= 12) setIsReady(true);
      };

      img.onerror = () => {
        if (!mounted) return;
        count += 1;
        setLoadedCount(count);
      };
    }

    return () => {
      mounted = false;
    };
  }, [drawFrame]);

  React.useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const scale = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.floor(window.innerWidth * scale);
      canvas.height = Math.floor(window.innerHeight * scale);
      drawFrame(frameIndexRef.current);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, [drawFrame]);

  React.useEffect(() => {
    const syncScrollState = () => {
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const scrollableHeight = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.max(0, Math.min(1, -rect.top / scrollableHeight));

      progressRef.current = progress;
      frameIndexRef.current = Math.min(TOTAL_FRAMES, Math.max(1, Math.round(progress * (TOTAL_FRAMES - 1)) + 1));

      if (requestRef.current !== null) return;

      requestRef.current = requestAnimationFrame(() => {
        try {
          updateOverlay(progressRef.current);
          drawFrame(frameIndexRef.current);
        } finally {
          requestRef.current = null;
        }
      });
    };

    window.addEventListener('scroll', syncScrollState, { passive: true });
    const syncInterval = window.setInterval(syncScrollState, 120);
    syncScrollState();

    return () => {
      window.removeEventListener('scroll', syncScrollState);
      window.clearInterval(syncInterval);
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }
    };
  }, [drawFrame, updateOverlay, isReady]);

  const scrollToQuestionnaire = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="mobile-scroll-hero" ref={trackRef} aria-label="Magnetus III em movimento">
      <div className="mobile-scroll-hero__sticky">
        <canvas
          ref={canvasRef}
          className="mobile-scroll-hero__canvas"
          aria-hidden="true"
          style={{ opacity: isReady ? 1 : 0 }}
        />

        <div className="mobile-scroll-hero__shade" aria-hidden="true" />

        {!isReady && (
          <div className="mobile-scroll-hero__loading">
            <div className="mobile-scroll-hero__loader" />
            <p>Carregando experiência</p>
            <span>{Math.min(100, Math.round((loadedCount / TOTAL_FRAMES) * 100))}%</span>
          </div>
        )}

        <div className="mobile-scroll-hero__brand">Magnetus III</div>

        <div className="mobile-scroll-hero__caption mobile-scroll-hero__caption--first" ref={firstCaptionRef}>
          <h1>Cansada de se sentir invisível?</h1>
        </div>

        <div className="mobile-scroll-hero__caption mobile-scroll-hero__caption--second" ref={secondCaptionRef}>
          <h2>
            Você não precisa se diminuir
            <span>para ser vista.</span>
          </h2>
        </div>

        <div className="mobile-scroll-hero__cta" ref={ctaRef}>
          <p>Responda ao diagnóstico e descubra onde a sua presença está sendo apagada.</p>
          <button type="button" onClick={scrollToQuestionnaire}>
            Quero me destacar
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
