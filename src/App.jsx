import React from 'react';
import { ArrowRight, BadgeCheck, ChevronDown, Clock3, FileText, LockKeyhole, ShieldCheck, Sparkles, XCircle, CheckCircle } from 'lucide-react';
import './App.css';

const checkoutUrl = 'https://pay.kiwify.com.br/m8cGccz';

const fitPoints = [
  'Você se percebe ansiosa, reativa ou disponível demais quando gosta de alguém.',
  'Você quer parar de tentar convencer e começar a se posicionar com calma.',
  'Você entende que magnetismo não nasce de joguinho, mas de postura interna.',
  'Você precisa de um roteiro claro para cortar padrões de escassez emocional.'
];

const methodSteps = [
  {
    label: 'Dias 1 a 5',
    title: 'Corte do Antivalor',
    text: 'Identifique os sinais que vazam insegurança: urgência, explicação excessiva, espera passiva e necessidade de resposta.'
  },
  {
    label: 'Dias 6 a 10',
    title: 'Regulação e presença',
    text: 'Reorganize suas respostas emocionais para não agir no pico da ansiedade nem entregar poder por impulso.'
  },
  {
    label: 'Dias 11 a 15',
    title: 'Posicionamento magnético',
    text: 'Aplique linguagem, silêncio estratégico e presença social para ser percebida como escolha de alto valor.'
  }
];

const deliverables = [
  {
    icon: FileText,
    title: 'Manual Magnetus III',
    text: 'O protocolo principal de 15 dias para reconstruir presença, valor percebido e domínio emocional.'
  },
  {
    icon: ShieldCheck,
    title: 'Antídoto do Antivalor',
    text: 'O diagnóstico dos comportamentos que sabotam sua autoridade antes mesmo de qualquer conversa.'
  },
  {
    icon: Clock3,
    title: 'Acesso imediato',
    text: 'Material digital liberado após a confirmação do pagamento, para começar sem esperar.'
  }
];

function App() {
  const [openFaq, setOpenFaq] = React.useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqs = [
    {
      question: "O acesso é imediato?",
      answer: "Sim, direto no seu e-mail após a confirmação do pagamento. Você poderá começar o protocolo hoje mesmo."
    },
    {
      question: "Serve para quem quer reconquistar o ex?",
      answer: "Sim, desde que o foco não seja implorar atenção, mas reconstruir postura, contraste e valor percebido. O material conduz essa mudança de presença antes de qualquer tentativa de aproximação."
    },
    {
      question: "Tenho vergonha, o nome aparece na fatura?",
      answer: "Não. Sabemos da importância da sua privacidade. A compra aparecerá discretamente como \"Compra Digital\" na sua fatura."
    },
    {
      question: "O que exatamente eu recebo?",
      answer: "Você recebe o material digital do Magnetus III, o Antídoto do Antivalor e os conteúdos indicados na oferta. A proposta é entregar um caminho de aplicação, não apenas leitura passiva."
    },
    {
      question: "Quanto tempo preciso por dia?",
      answer: "O ideal é reservar alguns minutos por dia para leitura, reflexão e aplicação. O protocolo foi pensado para caber em uma rotina real, sem exigir horas de estudo."
    },
    {
      question: "Isso é sobre manipular alguém?",
      answer: "Não. O foco é parar de agir por escassez, ansiedade e reatividade. A mudança central é de postura, limites, leitura comportamental e presença."
    },
    {
      question: "Tem garantia?",
      answer: "Sim. A oferta possui garantia de 7 dias, conforme exibido na página de compra. Se não fizer sentido para você dentro do prazo, é possível solicitar reembolso pela plataforma."
    }
  ];

  return (
    <div className="app">
      <header className="hero-section">
        <div className="hero-shell">
          <div className="hero-badge">
            <Sparkles size={18} />
            Protocolo digital de ativação feminina
          </div>
          <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="hero-image-link" aria-label="Comprar Magnetus III">
          <img 
            src="/images/magnetus_feminina_hero.png" 
            alt="Magnetus III - Ative sua Presença" 
              className="hero-image"
          />
        </a>
          <div className="hero-actions">
            <p className="secure-note">
              <LockKeyhole size={16} />
              Compra segura, acesso imediato e discreto
            </p>
          </div>
        </div>
      </header>

      {/* 2. O DEDO NA FERIDA (Conexão Emocional) */}
      <section className="pain-section">
        <div className="container">
          <div className="pain-content">
            <h2 className="section-title">
              Você sente que está fazendo "tudo certo" e, ainda assim, continua sendo <span className="text-bordeaux">deixada para depois</span>?
            </h2>
            <div className="pain-text">
              <p>
                Você é independente, inteligente e bem-sucedida. Mas, quando o assunto é o coração, parece que você volta a ser aquela menina que espera pela aprovação de alguém.
              </p>
              <p>
                Você olha o celular, espera a mensagem que não vem, ou pior: se molda para caber na vida de um homem que nem sabe o que quer.
              </p>
              <div className="final-blow">
                <p>
                  <strong>Não é falta de sorte.</strong> É uma <span className="highlight">programação silenciosa de escassez</span> que instalaram em você. E enquanto você não desinstalar isso, o ciclo de rejeição vai se repetir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fit-section">
        <div className="container">
          <div className="fit-grid">
            <div className="fit-copy">
              <span className="eyebrow">Antes de comprar</span>
              <h2 className="section-title">Este protocolo é para quem quer parar de reagir como se estivesse sendo escolhida.</h2>
              <p>
                Magnetus III não promete controle sobre outra pessoa. A promessa é mais profunda: devolver o comando da sua postura, da sua presença e da forma como você se comunica quando existe desejo envolvido.
              </p>
            </div>
            <div className="fit-panel">
              {fitPoints.map((point) => (
                <div className="fit-row" key={point}>
                  <CheckCircle size={20} />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO ANTES VS DEPOIS */}
      <section className="comparison-section">
        <div className="container">
          <h2 className="section-title text-center text-white">A Metamorfose da Presença</h2>
          <div className="comparison-grid">
            <div className="comparison-card before">
              <div className="card-header">
                <XCircle className="icon-error" />
                <h3>Antes do Protocolo</h3>
              </div>
              <ul className="comparison-list">
                <li>Estado de hipervigilância crônica</li>
                <li>Busca constante por aprovação externa</li>
                <li>Comunicação que emite carência e insegurança</li>
                <li>Ser a "mulher legal" que é sempre deixada para depois</li>
                <li>Sentimento de insuficiência e invisibilidade</li>
              </ul>
            </div>
            <div className="comparison-card after">
              <div className="card-header">
                <CheckCircle className="icon-success" />
                <h3>Depois do Magnetus III</h3>
              </div>
              <ul className="comparison-list">
                <li>Soberania biológica e regulação nervosa</li>
                <li>Valor social inquestionável e autêntico</li>
                <li>Magnetismo como consequência biológica</li>
                <li>Tornar-se o destino final: a Fonte</li>
                <li>Presença que governa e atrai sem esforço</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="method-section">
        <div className="container">
          <div className="method-grid">
            <div className="method-intro">
              <span className="eyebrow eyebrow-light">Como você usa</span>
              <h2 className="section-title text-white">Um protocolo de 15 dias para trocar ansiedade por direção.</h2>
              <p>
                O caminho precisa ser claro: primeiro você corta o vazamento de valor, depois regula a resposta emocional, então aplica presença.
              </p>
              <a href="#oferta" className="method-link">
                Ver oferta completa
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="method-steps">
              {methodSteps.map((step) => (
                <article className="method-step" key={step.label}>
                  <span>{step.label}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. A SOLUÇÃO (Apresentação do Produto) */}
      <section className="solution-section">
        <div className="container">
          <div className="section-header text-center mb-16">
            <h2 className="section-title">O Sistema Operacional de Alto Valor</h2>
            <p className="section-subtitle">A solução completa que une a poda estratégica à construção de poder.</p>
          </div>

          <div className="products-detailed-grid">
            {/* Ebook 1 */}
            <div className="product-detail-card">
              <div className="product-image">
                <img src="/images/capa_ebook_magnetus.jpeg" alt="Magnetus III" className="premium-book-img" />
              </div>
              <div className="product-info">
                <span className="product-tag">Manual Principal</span>
                <h3>MAGNETUS III: A Engenharia da Presença</h3>
                <p>
                  O protocolo de 15 dias para instalar soberania biológica. Este manual de engenharia comportamental ensina a regular o sistema nervoso para <strong>projetar um valor social inquestionável</strong>. É a ferramenta definitiva para quem deseja deixar de correr atrás e tornar-se o destino final: a Fonte.
                </p>
              </div>
            </div>

            {/* Ebook 2 */}
            <div className="product-detail-card reverse">
              <div className="product-image">
                <img src="/images/capa_ebook_antidoto.jpg" alt="Antidoto do Antivalor" className="premium-book-img" />
              </div>
              <div className="product-info">
                <span className="product-tag">O Diagnóstico</span>
                <h3>ANTIVALOR: O Extermínio da Sabotagem</h3>
                <p>
                  O diagnóstico brutal dos pontos cegos que repelem seus resultados. Este guia identifica e elimina os <strong>vazamentos invisíveis de insegurança</strong> e reatividade que comunicam carência. É o antídoto necessário para remover o "freio de mão" que sabota o seu magnetismo antes de você abrir a boca.
                </p>
              </div>
            </div>
          </div>
          
          <div className="combo-highlight-box">
            <div className="combo-image-wrap">
              <img src="/images/bonus-antivalor-secret.jpg" alt="Combo Magnetus III e Antidoto do Antivalor" className="combo-image" />
            </div>
            <div className="combo-content">
              <Sparkles className="text-gold mb-4" size={32} />
              <h3>O COMBO: Equilíbrio Perfeito</h3>
              <p>
                Enquanto o <em>Antivalor</em> limpa o terreno e estanca a perda de autoridade, o <em>Magnetus III</em> edifica a estrutura da presença magnética. É o equilíbrio perfeito entre parar de errar e começar a dominar.
              </p>
              <p className="result-highlight">Atração real como consequência biológica, não como esforço.</p>
            </div>
          </div>

          <div className="deliverables-section">
            <div className="deliverables-copy">
              <span className="eyebrow">O que chega para você</span>
              <h2>O produto deixa de ser abstrato quando você entende o papel de cada peça.</h2>
              <p>
                A compra reúne diagnóstico, protocolo e direção prática. Isso reduz a dúvida mais comum antes da decisão: "vou saber por onde começar?"
              </p>
            </div>
            <div className="deliverables-grid">
              {deliverables.map(({ icon: Icon, title, text }) => (
                <article className="deliverable-item" key={title}>
                  <Icon size={24} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUEBRA DE OBJEÇÕES E ANCORAGEM (A Oferta) */}
      <section id="oferta" className="offer-section">
        <div className="container">
          <div className="offer-wrapper">
            <div className="offer-kicker">
              <BadgeCheck size={20} />
              Oferta especial do combo
            </div>
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="offer-image-link" aria-label="Comprar combo Magnetus III">
              <img 
                src="/images/oferta_combo_nova.jpg" 
                alt="Magnetus III - Oferta Especial" 
                className="offer-image"
              />
            </a>
            <div className="purchase-clarity">
              <div>
                <ShieldCheck size={22} />
                <strong>Garantia de 7 dias</strong>
                <span>Você compra com tempo para avaliar se o material faz sentido para você.</span>
              </div>
              <div>
                <LockKeyhole size={22} />
                <strong>Checkout seguro</strong>
                <span>Pagamento processado por plataforma externa, com acesso digital após confirmação.</span>
              </div>
              <div>
                <Clock3 size={22} />
                <strong>Começo imediato</strong>
                <span>A proposta é simples: comprar, acessar e iniciar o protocolo hoje.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SOBRE A AUTORA */}
      <section className="author-section">
        <div className="container">
          <div className="author-grid">
            <div className="author-image-wrapper">
              <img src="/images/autora_sol_lima.jpg" alt="Autora Sol Lima" className="author-img" />
            </div>
            <div className="author-content">
              <h2 className="author-name">Sol Lima</h2>
              <h3 className="author-subtitle text-gold">Estrategista em Neurociência & Comportamento</h3>
              
              <div className="author-bio">
                <p className="author-highlight"><strong>Especialista em verdades que curam (depois de arder muito).</strong></p>
                
                <p>Sol Lima é uma estrategista e consultora especializada em neurociência aplicada e ciências comportamentais. Seu trabalho se concentra no desenvolvimento de metodologias de alto impacto, como o protocolo <strong>Magnetus III</strong> e o método <strong>Posicione-se™</strong>, que utilizam a neurobiologia, especialmente a regulação do sistema nervoso e do nervo vago, para reprogramação emocional e posicionamento de autoridade.</p>
                
                <p>Sua identidade profissional é marcada por uma abordagem "visceral" e sofisticada, fundamentada no que descreve como um "doutorado no campo de batalha", transformando vivências complexas em ferramentas estratégicas para desenvolvimento humano e social.</p>
                
                <div className="author-quote">
                  <p>"Meu foco está na intersecção entre a biologia do comportamento e estratégias de marketing magnético, visando resultados de alta performance e construção de marcas pessoais dominantes."</p>
                </div>
                
                <p>No campo da tecnologia, Sol Lima se dedica à criação de assistentes de inteligência artificial personalizados e à produção de conteúdos digitais com estética premium e "luxo editorial".</p>
                
                <div className="author-pillars">
                  <div className="pillar">
                    <h4 className="text-gold">Neurobiologia</h4>
                    <p>Regulação do sistema nervoso para autoridade.</p>
                  </div>
                  <div className="pillar">
                    <h4 className="text-gold">Luxo Editorial</h4>
                    <p>Estética premium e posicionamento dominante.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title text-center">Ainda tem dúvidas?</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <button
                type="button"
                key={index} 
                className={`faq-item ${openFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  <ChevronDown className="faq-icon" />
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="sticky-cta">
        Ativar agora
        <ArrowRight size={18} />
      </a>

      <footer className="footer">
        <div className="container">
          <div className="logo-placeholder footer-logo">M-III</div>
          <p>&copy; {new Date().getFullYear()} Magnetus III. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
