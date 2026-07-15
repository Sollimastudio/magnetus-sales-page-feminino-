import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { track } from '@vercel/analytics';
import { ArrowDown, ArrowRight, BookOpen, Brain, Check, CheckCircle2, ChevronDown, Clock3, Heart, LockKeyhole, MessageCircle, ShieldCheck, Sparkles, X, XCircle } from 'lucide-react';
import './App.css';

const CHECKOUT = 'https://pay.kiwify.com.br/m8cGccz';
const PIXEL_ID = '630829586054528';
const CAMPAIGN_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'];

const symptoms = ['Espera uma mensagem e perde a paz', 'Mede cada palavra para não afastar', 'Entrega muito e recebe o mínimo', 'Aceita o que antes jurou que não aceitaria', 'Sente culpa quando tenta impor um limite', 'Parece forte por fora e confusa por dentro'];
const steps = [
  ['Dia 0', 'Voltar ao centro', 'Reconheça seus gatilhos e use uma prática simples para acalmar o corpo antes de responder por impulso.'],
  ['Dias 1–7', 'Interromper o padrão', 'Trabalhe ansiedade, carência, antecipação e medo de perder para não agir em busca de alívio imediato.'],
  ['Dia 8', 'Fazer a virada emocional', 'Realize a prática de liberação para encerrar ciclos internos e soltar o peso que ainda governa suas escolhas.'],
  ['Dias 9–15', 'Sustentar sua presença', 'Treine limites, comunicação e decisões coerentes com seu valor — mesmo quando a emoção aparecer.'],
];
const fit = [
  'Você é competente na vida, mas perde a segurança quando gosta.',
  'Você está cansada de interpretar mensagens, silêncios e mudanças de humor.',
  'Você quer impor limites sem culpa e sem precisar se tornar fria.',
  'Você percebe que faz muito para receber pouco e quer interromper isso.',
  'Você está solteira, conhecendo alguém ou em uma relação e não quer repetir o padrão.',
  'Você aceita realizar pequenas práticas por 15 dias para construir uma postura diferente.',
];
const notFit = [
  'Procura frases mágicas para controlar, punir ou fazer alguém correr atrás.',
  'Quer fingir desinteresse sem mudar o que acontece dentro de si.',
  'Espera resultado garantido sem ler, refletir ou praticar.',
  'Precisa de diagnóstico, tratamento clínico ou atendimento emergencial.',
];
const faqs = [
  ['Já comprei outros ebooks e não terminei. Por que seria diferente?', 'O Magnetus III é organizado como um percurso diário, não como uma biblioteca de teoria. A proposta é aplicar uma etapa curta por vez. Ainda assim, sua participação é indispensável: nenhum material produz mudança sem uso.'],
  ['Isso vai me ensinar a ser fria ou a ignorar alguém?', 'Não. Frieza também pode ser uma reação de medo. O objetivo é sentir sem se abandonar, comunicar com clareza e não usar silêncio ou distância como manipulação.'],
  ['Serve se ele já se afastou ou terminou?', 'O protocolo não promete trazer ninguém de volta. Ele ajuda você a recuperar clareza, interromper impulsos e decidir como agir sem entregar sua paz à resposta da outra pessoa.'],
  ['Serve para solteiras?', 'Sim. Você pode usar o percurso para compreender relações anteriores, fortalecer critérios e não repetir o mesmo padrão quando conhecer alguém.'],
  ['Quanto tempo preciso por dia?', 'O conteúdo foi organizado para caber na rotina. Separe alguns minutos por dia para ler e realizar a prática proposta.'],
  ['Não encontro tudo isso gratuitamente na internet?', 'Informação isolada existe em muitos lugares. A diferença aqui é a sequência: reconhecer o padrão, regular a emoção e praticar uma nova postura em uma ordem aplicável.'],
  ['Isso substitui terapia?', 'Não. É um material educativo de desenvolvimento pessoal. Não substitui psicoterapia, diagnóstico, tratamento médico ou atendimento de emergência.'],
  ['Como recebo o material?', 'Após a confirmação do pagamento, o acesso digital é enviado para o e-mail informado na compra.'],
  ['E se eu comprar e não gostar?', 'Você pode solicitar o reembolso dentro de 7 dias, conforme as condições apresentadas no checkout.'],
];

function initMetaPixel() {
  if (window.fbq) return;
  const fbq = function (...args) { fbq.callMethod ? fbq.callMethod(...args) : fbq.queue.push(args); };
  fbq.push = fbq; fbq.loaded = true; fbq.version = '2.0'; fbq.queue = []; window.fbq = fbq;
  const script = document.createElement('script'); script.async = true; script.src = 'https://connect.facebook.net/en_US/fbevents.js'; document.head.appendChild(script);
  fbq('init', PIXEL_ID); fbq('track', 'PageView');
}

function checkoutUrl() {
  const url = new URL(CHECKOUT);
  const current = new URLSearchParams(window.location.search);
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem('magnetus_attribution') || '{}'); } catch { saved = {}; }
  CAMPAIGN_KEYS.forEach((key) => { const value = current.get(key) || saved[key]; if (value) url.searchParams.set(key, value); });
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
  const choose = (value) => { localStorage.setItem('magnetus_consent', value); if (value === 'accepted') initMetaPixel(); setVisible(false); };
  React.useEffect(() => { if (localStorage.getItem('magnetus_consent') === 'accepted') initMetaPixel(); }, []);
  if (!visible) return null;
  return <aside className="consent" aria-label="Preferências de privacidade"><p><strong>Sua privacidade importa.</strong> Usamos dados de navegação para medir campanhas e melhorar esta página.</p><div><button onClick={() => choose('essential')}>Somente essenciais</button><button className="consent-accept" onClick={() => choose('accepted')}>Aceitar</button></div></aside>;
}

function App() {
  const [openFaq, setOpenFaq] = React.useState(0);
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search); const data = {};
    CAMPAIGN_KEYS.forEach((key) => { if (params.get(key)) data[key] = params.get(key); });
    if (Object.keys(data).length) localStorage.setItem('magnetus_attribution', JSON.stringify(data));
  }, []);

  return <>
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <main id="conteudo">
      <section className="hero">
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="eyebrow"><Sparkles size={16} /> Para mulheres fortes que se perdem quando gostam</p>
          <h1>Você não ficou fraca.<br />Você perdeu seu centro.</h1>
          <p className="hero-lead">Entenda por que você começa a esperar mensagens, aceitar menos e agir pelo medo de perder — e siga um protocolo de 15 dias para recuperar sua presença.</p>
          <div className="hero-actions"><a className="cta" href="#entenda">Quero entender o que acontece comigo<ArrowDown size={19} /></a><a className="text-link" href="#oferta">Já conheço e quero acessar</a></div>
          <p className="secure"><LockKeyhole size={15} /> Conteúdo digital · aplicação no seu ritmo · 7 dias de garantia</p>
        </div>
      </section>

      <section id="entenda" className="recognition section">
        <div className="container narrow">
          <p className="kicker">Talvez ninguém tenha colocado isso em palavras</p>
          <h2>Você continua sendo a mesma mulher capaz. Mas, quando gosta, começa a viver em função de sinais.</h2>
          <p className="section-intro ink">A mudança pode ser silenciosa: primeiro você espera. Depois interpreta. Então se adapta, cede e tenta fazer mais — acreditando que assim ficará segura.</p>
          <div className="symptoms">{symptoms.map((text) => <div key={text}><Heart size={19} /><span>{text}</span></div>)}</div>
          <p className="bridge">O sofrimento não começa porque você sente demais. Começa quando, para não perder o outro, você deixa de se escutar.</p>
        </div>
      </section>

      <section className="pattern section soft">
        <div className="container">
          <p className="kicker">O padrão invisível</p><h2>Não é apenas “ansiedade por mensagem”. É uma sequência que rouba sua presença.</h2>
          <div className="pattern-flow">
            {[['01','Você se envolve','A possibilidade de perder ativa um estado de alerta.'],['02','Busca segurança','A resposta, o encontro ou a aprovação dele parecem trazer alívio.'],['03','Age para aliviar','Você manda, explica, cede ou aceita antes de pensar no que realmente quer.'],['04','Recebe menos','Quanto mais se abandona, menos reconhece seus próprios limites.']].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
          </div>
          <div className="insight"><Brain /><p><strong>É por isso que “é só não mandar mensagem” raramente resolve.</strong> A mensagem é o comportamento visível. Por baixo dela existem medo, antecipação e busca de segurança. A mudança precisa começar antes da ação.</p></div>
        </div>
      </section>

      <section className="definition section dark">
        <div className="container">
          <p className="kicker gold">Então, o que é magnetismo?</p><h2>Magnetismo pessoal não é chamar atenção.<br />É não desaparecer de si quando a atenção chega.</h2>
          <p className="section-intro">Dentro do Magnetus, presença magnética é a coerência entre o que você sente, o que considera digno e a forma como escolhe agir.</p>
          <div className="definition-grid">
            <article><h3><XCircle /> Não é</h3>{['Ser a mulher mais bonita do ambiente','Fingir desinteresse','Usar silêncio como punição','Decorar mensagens manipulativas','Fazer alguém correr atrás'].map(x=><p key={x}><X />{x}</p>)}</article>
            <article><h3><CheckCircle2 /> É</h3>{['Sentir sem agir por desespero','Sustentar limites sem culpa','Comunicar sem se explicar demais','Reconhecer reciprocidade','Escolher sem se abandonar'].map(x=><p key={x}><Check />{x}</p>)}</article>
          </div>
        </div>
      </section>

      <section className="false-solutions section">
        <div className="container split-copy">
          <div><p className="kicker">Por que você ainda volta ao mesmo lugar?</p><h2>Talvez você tenha tentado mudar apenas o comportamento.</h2><p>Sumir, bloquear, repetir frases de autoestima, assistir a vídeos soltos ou prometer que “desta vez não vai atrás” pode funcionar por algumas horas. Mas, quando o gatilho volta, o padrão assume novamente.</p></div>
          <div className="quote-card"><MessageCircle /><p>Você não precisa de mais uma regra para parecer forte.</p><strong>Precisa de uma sequência para continuar sendo você mesmo quando o medo aparece.</strong></div>
        </div>
      </section>

      <section className="method section dark">
        <div className="container">
          <p className="kicker gold">O caminho Magnetus III</p><h2>Primeiro você se regula.<br />Depois compreende. Então se posiciona.</h2>
          <p className="section-intro">O protocolo organiza a mudança em uma ordem prática. Não tenta controlar a outra pessoa; devolve a decisão para você.</p>
          <div className="steps">{steps.map(([day,title,text],i)=><article key={day}><span>0{i+1}</span><small>{day}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
          <div className="method-cta"><CheckoutButton location="after_method">Quero seguir este caminho</CheckoutButton></div>
        </div>
      </section>

      <section className="fit-section section">
        <div className="container fit-columns">
          <article className="fit-card yes"><p className="kicker">Magnetus III é para você se...</p><h2>Você quer mudar sem deixar de ser sensível.</h2>{fit.map(x=><p key={x}><Check />{x}</p>)}</article>
          <article className="fit-card no"><p className="kicker">Não é a escolha certa se...</p><h2>Você procura controle sobre outra pessoa.</h2>{notFit.map(x=><p key={x}><X />{x}</p>)}</article>
        </div>
      </section>

      <section className="contents section soft">
        <div className="container split">
          <div className="product-stage"><img src="/images/oferta_combo_nova.jpg" alt="Magnetus III e seus materiais complementares" width="540" height="675" loading="lazy" decoding="async" /></div>
          <div><p className="kicker">Você não compra apenas um PDF</p><h2>Você recebe um percurso com começo, meio e aplicação.</h2>
            <ul className="receive-list"><li><BookOpen /><span><strong>Magnetus III</strong>Protocolo guiado de presença feminina por 15 dias.</span></li><li><ShieldCheck /><span><strong>Antídoto do Antivalor</strong>Material para identificar atitudes que enfraquecem seus limites e sua percepção de valor.</span></li><li><Sparkles /><span><strong>Masterclass “Morte em Vida”</strong>Aula complementar para aprofundar a percepção sobre abandono de si.</span></li></ul>
            <p className="format-note"><Clock3 size={17}/> Conteúdo 100% digital, para acessar no seu ritmo.</p>
          </div>
        </div>
        <div className="container preview-block"><p className="kicker">Por dentro do protocolo</p><h2>Você vai aprender a perceber o momento anterior à reação.</h2><div className="preview-grid">{[['Reconhecer','“O que meu corpo está tentando resolver agora?”'],['Interromper','“Se eu não precisasse de uma resposta imediata, o que escolheria?”'],['Reposicionar','“Esta atitude confirma ou contradiz o valor que digo ter?”']].map(([t,q])=><article key={t}><small>{t}</small><p>{q}</p></article>)}</div><p className="preview-note">Exemplos do tipo de reflexão prática trabalhada ao longo do percurso.</p></div>
      </section>

      <section className="author section">
        <div className="container author-grid"><div className="author-photo"><img src="/images/sol-lima.webp" alt="Sol Lima, criadora do Magnetus III" width="422" height="512" loading="lazy" /></div><div><p className="kicker">Quem criou o Magnetus III</p><h2>Sol Lima</h2><p className="author-role">Coach de relacionamentos e criadora da metodologia Relacione-se®.</p><p>Sol Lima criou o Magnetus a partir de uma pergunta central: por que mulheres inteligentes, capazes e conscientes do próprio valor podem desaparecer emocionalmente quando têm medo de perder uma relação?</p><p>Seu trabalho não ensina a vencer jogos amorosos. Ensina a reconhecer o instante em que uma mulher começa a negociar a si mesma — e a construir uma resposta mais consciente, firme e coerente.</p><blockquote>“Não quero ensinar você a ser escolhida a qualquer custo. Quero ajudar você a voltar a participar da escolha.”</blockquote></div></div>
      </section>

      <section className="outcomes section soft"><div className="container narrow"><p className="kicker">O que começa a mudar</p><h2>Menos reação. Mais clareza para escolher.</h2><div className="outcome-grid">{['Você percebe o gatilho antes de mandar aquela mensagem.','Diz o que precisa sem se justificar excessivamente.','Distingue conexão real de migalhas de atenção.','Para de negociar limites para manter alguém por perto.','Constrói uma presença mais calma, firme e coerente.','Volta a tomar decisões a partir do próprio valor.'].map(x=><p key={x}><Check />{x}</p>)}</div><p className="disclaimer">Os resultados dependem da aplicação individual. O material é educativo e não substitui acompanhamento psicológico ou médico.</p></div></section>

      <section className="objections section"><div className="container"><p className="kicker">Talvez uma parte sua ainda esteja dizendo...</p><h2>“Eu já sei o que deveria fazer. Só não consigo fazer quando acontece.”</h2><div className="objection-grid">{[['“Não tenho disciplina.”','Você não precisa mudar tudo de uma vez. O percurso divide a prática em etapas diárias.'],['“Tenho medo de virar uma mulher fria.”','O objetivo não é sentir menos. É parar de transformar sentimento em abandono de si.'],['“Ele já se afastou.”','Magnetus não promete mudar a decisão dele. Ele trabalha a pessoa que continuará com você em qualquer cenário: você.'],['“Meu caso é diferente.”','As histórias mudam. O ciclo de alerta, busca de segurança e reação impulsiva costuma seguir uma estrutura reconhecível.']].map(([q,a])=><article key={q}><h3>{q}</h3><p>{a}</p></article>)}</div></div></section>

      <section id="oferta" className="offer section dark"><div className="container offer-grid"><div><p className="kicker gold">Comece hoje</p><h2>15 dias para parar de entregar sua paz nas mãos de outra pessoa.</h2><p>Magnetus III + Antídoto do Antivalor + masterclass complementar.</p><div className="offer-summary">{['Protocolo completo de 15 dias','Materiais complementares','Acesso digital imediato','Garantia de 7 dias'].map(x=><span key={x}><Check />{x}</span>)}</div><div className="guarantee"><ShieldCheck /><span><strong>Você tem 7 dias para decidir.</strong>Leia, conheça a proposta e, se o conteúdo não fizer sentido para você, solicite o reembolso dentro do prazo informado no checkout.</span></div></div><div className="price-card"><span>Seu acesso completo</span><p><small>R$</small> 69,90</p><em>à vista ou 12× de R$ 6,99</em><CheckoutButton location="offer">Quero começar meus 15 dias</CheckoutButton><small className="payment"><LockKeyhole /> Pagamento processado com segurança pela Kiwify</small></div></div></section>

      <section className="faq section"><div className="container narrow"><p className="kicker">Dúvidas e objeções reais</p><h2>Antes de tomar sua decisão</h2><div className="faq-list">{faqs.map(([q,a],i)=><article key={q} className={openFaq===i?'open':''}><button aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?-1:i)}><span>{q}</span><ChevronDown /></button><div><p>{a}</p></div></article>)}</div></div></section>

      <section className="final section"><div className="container narrow"><p className="kicker gold">Sua próxima escolha pode ser diferente</p><h2>Você não precisa deixar de sentir.<br />Precisa parar de se abandonar.</h2><p>Comece pelo relacionamento que estará presente em todos os outros: o relacionamento com você.</p><CheckoutButton location="final">Quero recuperar meu centro</CheckoutButton><p className="secure"><ShieldCheck size={16}/> Acesso imediato e 7 dias de garantia</p></div></section>
    </main>
    <footer><div className="container"><strong>MAGNETUS III</strong><p>Conteúdo educativo para desenvolvimento pessoal.</p><nav><a href="/privacidade.html">Privacidade</a><a href="/termos.html">Termos de uso</a></nav><small>© {new Date().getFullYear()} Magnetus III. Todos os direitos reservados.</small></div></footer>
    <div className="mobile-bar"><div><small>Protocolo completo</small><strong>R$ 69,90</strong></div><CheckoutButton location="sticky_mobile">Quero acessar</CheckoutButton></div>
    <Consent/><Analytics/>
  </>;
}

export default App;
