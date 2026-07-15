import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { track } from '@vercel/analytics';
import { ArrowRight, BookOpen, Check, ChevronDown, Clock3, Heart, LockKeyhole, ShieldCheck, Sparkles } from 'lucide-react';
import './App.css';

const CHECKOUT = 'https://pay.kiwify.com.br/m8cGccz';
const PIXEL_ID = '630829586054528';

const steps = [
  ['Dia 0', 'Voltar ao centro', 'Reconheça seus gatilhos e acalme o corpo antes de responder por impulso.'],
  ['Dias 1–7', 'Romper o padrão', 'Trabalhe ansiedade, carência e o medo de perder para parar de correr atrás.'],
  ['Dia 8', 'Virada emocional', 'Faça a prática de liberação para encerrar ciclos e soltar o que ainda pesa.'],
  ['Dias 9–15', 'Sustentar sua presença', 'Treine limites, comunicação e escolhas coerentes com o seu valor.'],
];

const faqs = [
  ['Como recebo o material?', 'Após a confirmação do pagamento, o acesso digital é enviado para o e-mail informado na compra.'],
  ['Preciso estar em um relacionamento?', 'Não. O protocolo serve para quem está conhecendo alguém, vive uma relação ou quer se preparar para não repetir os mesmos padrões.'],
  ['Quanto tempo preciso por dia?', 'O conteúdo foi organizado para caber na rotina. Separe alguns minutos por dia para ler e realizar a prática proposta.'],
  ['Isso ensina jogos de manipulação?', 'Não. Magnetus III trabalha autorregulação, clareza, limites e presença. O objetivo não é controlar outra pessoa.'],
  ['E se eu comprar e não gostar?', 'Você pode solicitar o reembolso dentro de 7 dias, conforme as condições apresentadas no checkout.'],
];

function initMetaPixel() {
  if (window.fbq) return;
  const fbq = function (...args) { fbq.callMethod ? fbq.callMethod(...args) : fbq.queue.push(args); };
  fbq.push = fbq; fbq.loaded = true; fbq.version = '2.0'; fbq.queue = [];
  window.fbq = fbq;
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);
  fbq('init', PIXEL_ID);
  fbq('track', 'PageView');
}

function checkoutUrl() {
  const url = new URL(CHECKOUT);
  const current = new URLSearchParams(window.location.search);
  const saved = JSON.parse(localStorage.getItem('magnetus_attribution') || '{}');
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'].forEach((key) => {
    const value = current.get(key) || saved[key];
    if (value) url.searchParams.set(key, value);
  });
  return url.toString();
}

function CheckoutButton({ location, children = 'Quero começar agora', className = '' }) {
  const handleClick = () => {
    window.fbq?.('track', 'InitiateCheckout', { content_name: 'Magnetus III', content_type: 'product', value: 69.9, currency: 'BRL' });
    track('checkout_click', { location });
  };
  return <a className={`cta ${className}`} href={checkoutUrl()} onClick={handleClick}>{children}<ArrowRight size={19} /></a>;
}

function Consent() {
  const [visible, setVisible] = React.useState(() => !localStorage.getItem('magnetus_consent'));
  const choose = (value) => {
    localStorage.setItem('magnetus_consent', value);
    if (value === 'accepted') initMetaPixel();
    setVisible(false);
  };
  React.useEffect(() => {
    if (localStorage.getItem('magnetus_consent') === 'accepted') initMetaPixel();
  }, []);
  if (!visible) return null;
  return <aside className="consent" aria-label="Preferências de privacidade"><p><strong>Sua privacidade importa.</strong> Usamos dados de navegação para medir campanhas e melhorar esta página.</p><div><button onClick={() => choose('essential')}>Somente essenciais</button><button className="consent-accept" onClick={() => choose('accepted')}>Aceitar</button></div></aside>;
}

function App() {
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const data = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'].forEach((key) => {
      if (params.get(key)) data[key] = params.get(key);
    });
    if (Object.keys(data).length) localStorage.setItem('magnetus_attribution', JSON.stringify(data));
  }, []);

  return <>
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <main id="conteudo">
      <section className="hero">
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="eyebrow"><Sparkles size={16} /> Protocolo prático de 15 dias</p>
          <h1>Pare de se apagar<br />para ser escolhida.</h1>
          <p className="hero-lead">Recupere seu centro, reduza a ansiedade e aprenda a se posicionar sem jogos, cobranças ou medo de perder.</p>
          <CheckoutButton location="hero">Quero recuperar meu centro</CheckoutButton>
          <p className="secure"><LockKeyhole size={15} /> Compra segura · acesso digital imediato · 7 dias de garantia</p>
        </div>
      </section>

      <section className="recognition section">
        <div className="container narrow">
          <p className="kicker">Talvez você conheça essa sensação</p>
          <h2>Você é forte para tudo — até começar a gostar de alguém.</h2>
          <div className="symptoms">
            {['Espera uma mensagem e perde a paz', 'Mede cada palavra para não afastar', 'Entrega muito e recebe o mínimo', 'Aceita o que antes jurou que não aceitaria'].map((text) => <div key={text}><Heart size={19} /><span>{text}</span></div>)}
          </div>
          <p className="bridge">Isso não significa que você é fraca. Significa que seu corpo aprendeu a buscar segurança na resposta do outro. E padrões aprendidos podem ser interrompidos.</p>
        </div>
      </section>

      <section className="method section dark">
        <div className="container">
          <p className="kicker gold">O caminho Magnetus III</p>
          <h2>Um passo por dia para voltar a escolher a si mesma.</h2>
          <p className="section-intro">Sem fórmulas para manipular ninguém. Você trabalha de dentro para fora: regula a emoção, entende o padrão e pratica uma nova postura.</p>
          <div className="steps">{steps.map(([day, title, text], index) => <article key={day}><span>0{index + 1}</span><small>{day}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="contents section">
        <div className="container split">
          <div className="product-stage"><img src="/images/oferta_combo_nova.jpg" alt="Magnetus III e seus materiais complementares" width="540" height="675" loading="lazy" decoding="async" /></div>
          <div>
            <p className="kicker">O que você recebe</p>
            <h2>Um sistema completo, não só mais um livro.</h2>
            <ul className="receive-list">
              <li><BookOpen /><span><strong>Magnetus III</strong>Protocolo guiado de presença feminina por 15 dias.</span></li>
              <li><ShieldCheck /><span><strong>Antídoto do Antivalor</strong>Material complementar para identificar atitudes que enfraquecem seus limites.</span></li>
              <li><Sparkles /><span><strong>Masterclass “Morte em Vida”</strong>Aula complementar apresentada junto à oferta.</span></li>
            </ul>
            <p className="format-note"><Clock3 size={17} /> Conteúdo 100% digital, para acessar no seu ritmo.</p>
          </div>
        </div>
      </section>

      <section className="outcomes section soft">
        <div className="container narrow">
          <p className="kicker">O que começa a mudar</p>
          <h2>Menos reação. Mais clareza para escolher.</h2>
          <div className="outcome-grid">{['Você percebe o gatilho antes de mandar aquela mensagem.', 'Aprende a dizer o que precisa sem se justificar demais.', 'Distingue conexão real de migalhas de atenção.', 'Para de negociar limites só para manter alguém por perto.', 'Constrói uma presença mais calma, firme e coerente.', 'Volta a tomar decisões a partir do próprio valor.'].map((text) => <p key={text}><Check />{text}</p>)}</div>
          <p className="disclaimer">Os resultados dependem da aplicação individual. O material é educativo e não substitui acompanhamento psicológico ou médico.</p>
        </div>
      </section>

      <section id="oferta" className="offer section dark">
        <div className="container offer-grid">
          <div><p className="kicker gold">Comece hoje</p><h2>15 dias para parar de entregar sua paz nas mãos de outra pessoa.</h2><p>Magnetus III + Antídoto do Antivalor + masterclass complementar.</p><div className="guarantee"><ShieldCheck /><span><strong>Você tem 7 dias para decidir.</strong>Se o conteúdo não fizer sentido para você, solicite o reembolso dentro do prazo informado no checkout.</span></div></div>
          <div className="price-card"><span>Acesso completo</span><s>R$ 174,75</s><p><small>R$</small> 69,90</p><em>à vista ou 12× de R$ 6,99</em><CheckoutButton location="offer">Quero acessar o Magnetus III</CheckoutButton><small className="payment"><LockKeyhole /> Pagamento processado com segurança pela Kiwify</small></div>
        </div>
      </section>

      <section className="faq section">
        <div className="container narrow"><p className="kicker">Dúvidas frequentes</p><h2>Antes de tomar sua decisão</h2><div className="faq-list">{faqs.map(([question, answer], index) => <article key={question} className={openFaq === index ? 'open' : ''}><button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><ChevronDown /></button><div><p>{answer}</p></div></article>)}</div></div>
      </section>

      <section className="final section"><div className="container narrow"><p className="kicker gold">Sua próxima escolha pode ser diferente</p><h2>Você não precisa deixar de sentir.<br />Precisa parar de se abandonar.</h2><CheckoutButton location="final">Quero começar meus 15 dias</CheckoutButton><p className="secure"><ShieldCheck size={16} /> Acesso imediato e 7 dias de garantia</p></div></section>
    </main>
    <footer><div className="container"><strong>MAGNETUS III</strong><p>Conteúdo educativo para desenvolvimento pessoal.</p><nav><a href="/privacidade.html">Privacidade</a><a href="/termos.html">Termos de uso</a></nav><small>© {new Date().getFullYear()} Magnetus III. Todos os direitos reservados.</small></div></footer>
    <div className="mobile-bar"><div><small>Acesso completo</small><strong>R$ 69,90</strong></div><CheckoutButton location="sticky_mobile">Quero acessar</CheckoutButton></div>
    <Consent />
    <Analytics />
  </>;
}

export default App;
