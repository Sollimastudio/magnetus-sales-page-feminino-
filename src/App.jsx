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
    label: 'Dia 0',
    title: 'Anamnese e restart da respiração',
    text: 'Você responde a anamnese inicial e aprende a ativar o restart da respiração, o primeiro comando para sair do automático emocional.'
  },
  {
    label: 'Dias 1 a 7',
    title: 'Fase 1: magnetismo interior',
    text: 'A primeira fase trata o campo interno: ansiedade, reatividade, escassez, autoabandono e o padrão de correr atrás.'
  },
  {
    label: 'Dia 8',
    title: 'Transição: Matemática da Liberação',
    text: 'O oitavo dia marca a passagem entre a reconstrução interna e a projeção externa, com uma prática de liberação emocional para soltar pesos internos, fechar ciclos e preparar o corpo para sustentar presença fora.'
  },
  {
    label: 'Dias 9 a 15',
    title: 'Fase 2: magnetismo exterior',
    text: 'A segunda fase aplica presença, postura, linguagem, silêncio estratégico e valor percebido na forma como você se posiciona no mundo.'
  }
];

const deliverables = [
  {
    icon: FileText,
    title: 'Magnetus III',
    text: 'O manual central do método, com a estrutura completa para desenvolver presença, clareza emocional, limites e magnetismo pessoal.'
  },
  {
    icon: Clock3,
    title: 'Manual Dia 0',
    text: 'A abertura do protocolo: anamnese inicial e restart da respiração para preparar o corpo antes da fase 1.'
  },
  {
    icon: BadgeCheck,
    title: 'Ritual Matemática da Liberação',
    text: 'A transição do Dia 8 para fechar ciclos internos, soltar pesos emocionais e preparar a entrada no magnetismo exterior.'
  },
  {
    icon: ShieldCheck,
    title: 'Bônus Antídoto do Antivalor',
    text: 'Um guia prático para identificar comportamentos que vazam insegurança, alimentam reatividade e enfraquecem sua presença antes mesmo de qualquer conversa.'
  }
];

const clearOfferItems = [
  'Magnetus III — manual principal do método',
  'Manual Dia 0 — anamnese + restart da respiração',
  'Matemática do Perdão — virada de chave do Dia 8',
  'Bônus Antídoto do Antivalor — diagnóstico dos comportamentos que sabotam sua presença'
];

const clearOfferBenefits = [
  'Acesso imediato',
  '100% digital',
  'Leitura no celular',
  'Garantia de 7 dias',
  'Compra segura'
];

const strategicFaqs = [
  {
    question: 'O acesso é imediato?',
    answer: 'Sim. Após a confirmação do pagamento, você recebe o acesso ao material digital para começar pelo celular, tablet ou computador.'
  },
  {
    question: 'O Magnetus III é um curso ou um ebook?',
    answer: 'É um protocolo digital em formato de leitura guiada, com materiais complementares. Você recebe o manual principal, o Dia 0, a Matemática do Perdão e o bônus Antídoto do Antivalor.'
  },
  {
    question: 'Quanto tempo preciso por dia?',
    answer: 'O ideal é separar de 15 a 30 minutos por dia para ler, refletir e aplicar os exercícios. O protocolo foi pensado para ser prático, direto e possível de encaixar na rotina.'
  },
  {
    question: 'Serve para quem quer reconquistar o ex?',
    answer: 'O Magnetus III não promete reconquista nem controle sobre outra pessoa. O foco é devolver presença, eixo, clareza emocional, postura e valor percebido para você se relacionar melhor com quem for compatível com essa nova versão.'
  },
  {
    question: 'Isso funciona para mulheres solteiras ou comprometidas?',
    answer: 'Sim. O protocolo é indicado para mulheres que querem parar de agir por ansiedade, carência ou autoabandono em relações amorosas, sociais e na forma como se posicionam no mundo.'
  },
  {
    question: 'Preciso fazer todos os dias seguidos?',
    answer: 'A recomendação é seguir a sequência de 15 dias para manter continuidade. Se precisar pausar, você pode retomar de onde parou, mas o melhor resultado vem da prática consistente.'
  },
  {
    question: 'O que é o Dia 0?',
    answer: 'O Dia 0 é a preparação antes do protocolo. Nele, você faz uma anamnese inicial e aprende o restart da respiração para regular o corpo antes de iniciar a jornada.'
  },
  {
    question: 'O que é a Matemática do Perdão?',
    answer: 'É o material de transição do Dia 8. Ele não trata perdão como obrigação emocional, mas como uma decisão de liberação interna para fechar ciclos, soltar pesos e entrar na fase de magnetismo externo com mais leveza e presença.'
  },
  {
    question: 'O que é o Antídoto do Antivalor?',
    answer: 'É um bônus diagnóstico que mostra comportamentos que drenam sua presença, vazam insegurança e enfraquecem seu valor percebido antes mesmo de você perceber.'
  },
  {
    question: 'Esse material substitui terapia?',
    answer: 'Não. O Magnetus III é um material educativo e de desenvolvimento pessoal. Ele não substitui acompanhamento psicológico, psiquiátrico ou terapêutico quando necessário.'
  },
  {
    question: 'Tenho garantia?',
    answer: 'Sim. Você tem garantia de 7 dias para avaliar se o material faz sentido para você, conforme as regras da plataforma de pagamento.'
  },
  {
    question: 'Como aparece na fatura?',
    answer: 'O pagamento é processado pela plataforma externa de checkout. A identificação pode variar conforme o processador de pagamento utilizado.'
  },
  {
    question: 'É discreto?',
    answer: 'Sim. O acesso é digital, individual e enviado após a confirmação do pagamento.'
  },
  {
    question: 'Posso ler pelo celular?',
    answer: 'Sim. O material é 100% digital e foi pensado para leitura prática no celular.'
  },
  {
    question: 'O Magnetus ensina joguinho ou manipulação?',
    answer: 'Não. O Magnetus III não ensina manipulação emocional. O foco é presença, regulação emocional, limites, comunicação, postura e reposicionamento interno.'
  }
];

function App() {
  const [openFaq, setOpenFaq] = React.useState(null);
  const [openStrategicFaq, setOpenStrategicFaq] = React.useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const toggleStrategicFaq = (index) => {
    if (openStrategicFaq === index) {
      setOpenStrategicFaq(null);
    } else {
      setOpenStrategicFaq(index);
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
      answer: "Você recebe o Magnetus principal, o Manual Dia 0, o ritual Matemática da Liberação e o bônus Antídoto Antivalor. A proposta é entregar um caminho de aplicação, não apenas leitura passiva."
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
            Protocolo guiado de presença feminina
          </div>
          <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="hero-image-link" aria-label="Comprar Magnetus III">
            <div className="hero-copy-overlay">
              <h1>Pare de se abandonar por amor.</h1>
              <p>
                Um protocolo guiado de 15 dias para regular seu corpo, reconhecer padrões emocionais e construir presença, limites e magnetismo pessoal sem se abandonar por amor.
              </p>
            </div>
          <img 
            src="/images/magnetus_feminina_hero.png" 
            alt="Magnetus III - Ative sua Presença" 
              className="hero-image"
          />
            <span className="hero-image-cta">
              Quero acessar o protocolo
              <ArrowRight size={18} />
            </span>
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
              Você é forte na vida, mas <span className="text-bordeaux">perde o eixo</span> quando gosta de alguém?
            </h2>
            <div className="pain-text">
              <p>
                Você trabalha, resolve, sustenta tanta coisa... mas quando o assunto é vínculo, começa a esperar mensagem, medir palavras, se adaptar demais e aceitar menos do que merece só para não perder a conexão.
              </p>
              <div className="final-blow">
                <p>
                  <strong>Não é falta de sorte.</strong> É um <span className="highlight">padrão emocional aprendido</span>. Enquanto ele continua invisível, você tende a repetir escolhas, reações e entregas que enfraquecem sua presença.
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
              <h2 className="section-title">Este protocolo é para quem quer parar de se abandonar para manter um vínculo.</h2>
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
                <li>Estado constante de alerta emocional</li>
                <li>Busca por aprovação externa</li>
                <li>Comunicação que transmite ansiedade e insegurança</li>
                <li>Ser a "mulher legal" que sempre aceita menos</li>
                <li>Sensação de insuficiência e invisibilidade</li>
              </ul>
            </div>
            <div className="comparison-card after">
              <div className="card-header">
                <CheckCircle className="icon-success" />
                <h3>Depois do Magnetus III</h3>
              </div>
              <ul className="comparison-list">
                <li>Corpo mais regulado antes de reagir</li>
                <li>Mais clareza para perceber padrões</li>
                <li>Comunicação com menos ansiedade e mais presença</li>
                <li>Limites mais firmes sem precisar endurecer</li>
                <li>Magnetismo como consequência de postura interna</li>
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
                O processo começa no Dia 0, com anamnese e restart da respiração. Depois vem a fase de magnetismo interior, a transição da Matemática da Liberação e a fase de magnetismo exterior.
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
                  Um protocolo guiado de 15 dias para regular o corpo, reconhecer padrões emocionais e desenvolver presença, limites e magnetismo pessoal. Você aprende a sair do automático, parar de correr atrás e se posicionar com mais calma, clareza e valor.
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
                <h3>ANTÍDOTO DO ANTIVALOR: O Manual do Que Evitar</h3>
                <p>
                  Enquanto o Magnetus mostra o que construir, o Antídoto revela o que interromper: excesso de disponibilidade, reatividade, carência disfarçada de entrega, explicações demais e padrões que comunicam insegurança antes mesmo de você falar.
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
                Enquanto o <em>Antivalor</em> limpa o terreno e estanca a perda de autoridade, o <em>Magnetus III</em> edifica a estrutura da presença magnética. É o equilíbrio entre interromper o que drena seu valor e construir uma presença que se sustenta.
              </p>
              <p className="result-highlight">Atração real como consequência biológica, não como esforço.</p>
            </div>
          </div>

          <div className="deliverables-section">
            <div className="deliverables-copy">
              <span className="eyebrow">O que chega para você</span>
              <h2>Você recebe quatro peças para atravessar o protocolo com começo, meio e aplicação.</h2>
              <p>
                Cada material tem uma função dentro da jornada: preparar o corpo, conduzir os 15 dias, atravessar a virada do Dia 8 e interromper padrões que drenam sua presença.
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

      {/* QUEBRA DE OBJEÇÕES — Ancoragem de Preço */}
      <section className="price-anchor-section" aria-labelledby="price-anchor-title">
        <div className="container">
          <div className="price-anchor-header">
            <span className="eyebrow">Perspectiva real</span>
            <h2 id="price-anchor-title">Você gasta mais do que isso com coisas que não mudam nada na sua vida.</h2>
            <p>
              Antes de pensar no preço, olhe para o que você já investe — sem retorno emocional, sem transformação, sem direção.
            </p>
          </div>

          <div className="price-anchor-grid">
            {/* Coluna: Gastos comuns */}
            <div className="price-anchor-col">
              <span className="price-anchor-col-title expenses">
                <XCircle size={16} />
                Você já gasta com isso
              </span>

              <div className="anchor-item">
                <div className="anchor-item-icon expense">💅</div>
                <div className="anchor-item-label">
                  Manicure + pedicure
                  <small>Dura uma semana</small>
                </div>
                <span className="anchor-item-price red">R$ 85</span>
              </div>

              <div className="anchor-item">
                <div className="anchor-item-icon expense">🍷</div>
                <div className="anchor-item-label">
                  Um jantar fora
                  <small>Dura uma noite</small>
                </div>
                <span className="anchor-item-price red">R$ 120</span>
              </div>

              <div className="anchor-item">
                <div className="anchor-item-icon expense">💄</div>
                <div className="anchor-item-label">
                  Um perfume importado
                  <small>Dura alguns meses</small>
                </div>
                <span className="anchor-item-price red">R$ 250</span>
              </div>

              <div className="anchor-item">
                <div className="anchor-item-icon expense">🛋️</div>
                <div className="anchor-item-label">
                  Uma sessão de terapia
                  <small>Dura 50 minutos</small>
                </div>
                <span className="anchor-item-price red">R$ 200</span>
              </div>

              <div className="anchor-item">
                <div className="anchor-item-icon expense">📱</div>
                <div className="anchor-item-label">
                  Assinaturas mensais
                  <small>Streaming + apps que você nem usa</small>
                </div>
                <span className="anchor-item-price red">R$ 90</span>
              </div>
            </div>

            {/* Divisor VS */}
            <div className="price-anchor-divider">
              <div className="price-anchor-divider-line" />
            </div>

            {/* Coluna: O que você recebe */}
            <div className="price-anchor-col">
              <span className="price-anchor-col-title value">
                <Sparkles size={16} />
                O que o Magnetus entrega
              </span>

              <div className="anchor-item">
                <div className="anchor-item-icon worth">🧠</div>
                <div className="anchor-item-label">
                  Regulação emocional
                  <small>Parar de reagir por impulso</small>
                </div>
                <span className="anchor-item-price gold">✓</span>
              </div>

              <div className="anchor-item">
                <div className="anchor-item-icon worth">🪞</div>
                <div className="anchor-item-label">
                  Reconhecimento de padrões
                  <small>Enxergar o que te sabota</small>
                </div>
                <span className="anchor-item-price gold">✓</span>
              </div>

              <div className="anchor-item">
                <div className="anchor-item-icon worth">👑</div>
                <div className="anchor-item-label">
                  Presença e magnetismo
                  <small>Mudar como o outro te percebe</small>
                </div>
                <span className="anchor-item-price gold">✓</span>
              </div>

              <div className="anchor-item">
                <div className="anchor-item-icon worth">🛡️</div>
                <div className="anchor-item-label">
                  Limites sem endurecer
                  <small>Se posicionar com calma</small>
                </div>
                <span className="anchor-item-price gold">✓</span>
              </div>

              <div className="anchor-item">
                <div className="anchor-item-icon worth">📖</div>
                <div className="anchor-item-label">
                  Protocolo guiado de 15 dias
                  <small>Começo, meio e aplicação prática</small>
                </div>
                <span className="anchor-item-price gold">✓</span>
              </div>
            </div>
          </div>

          {/* Veredito */}
          <div className="price-anchor-verdict">
            <div className="price-anchor-verdict-card">
              <div className="price-anchor-verdict-price">
                <span className="old">R$ 174,75</span>
                <span className="current">R$ 69,90</span>
                <span className="installments">ou 12x de R$ 6,99</span>
              </div>
              <p>
                Menos que uma manicure. Mais valioso que meses de tentativa sozinha. Um investimento que muda a forma como você se posiciona em todos os seus relacionamentos.
              </p>
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="price-anchor-verdict-cta">
                QUERO COMEÇAR POR R$ 69,90
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="clear-offer-section" aria-labelledby="clear-offer-title">
        <div className="container">
          <div className="clear-offer-grid">
            <div className="clear-offer-copy">
              <span className="eyebrow eyebrow-light">Oferta clara</span>
              <h2 id="clear-offer-title">Comece hoje o Magnetus III</h2>
              <p className="clear-offer-subtitle">
                Um protocolo digital de 15 dias para sair da ansiedade, recuperar sua presença e construir magnetismo real.
              </p>
              <p className="clear-offer-text">
                Você não recebe apenas um ebook. Você recebe uma jornada guiada com começo, meio e aplicação prática para parar de agir por ansiedade e voltar ao próprio centro.
              </p>
            </div>

            <div className="clear-offer-card">
              <div className="clear-offer-includes">
                <p>Incluso no acesso:</p>
                <ul>
                  {clearOfferItems.map((item) => (
                    <li key={item}>
                      <CheckCircle size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="clear-offer-benefits" aria-label="Benefícios da compra">
                {clearOfferBenefits.map((benefit) => (
                  <span key={benefit}>{benefit}</span>
                ))}
              </div>

              <div className="clear-offer-price" aria-label="Preço da oferta">
                <p className="clear-offer-old-price">De R$ 174,75</p>
                <p className="clear-offer-current-price">por apenas R$ 69,90</p>
                <p className="clear-offer-installments">ou 12x de R$ 6,99</p>
              </div>

              <p className="clear-offer-reinforcement">
                Se você está pronta para parar de se perder quando gosta e voltar para a sua presença, este é o seu próximo passo.
              </p>

              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="clear-offer-button">
                QUERO COMEÇAR AGORA
                <ArrowRight size={20} />
              </a>
              <p className="clear-offer-access-note">
                Acesso liberado após a confirmação do pagamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="strategic-faq-section" aria-labelledby="strategic-faq-title">
        <div className="container">
          <div className="strategic-faq-header">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2 id="strategic-faq-title">Ainda tem dúvidas?</h2>
            <p>Antes de começar, veja as respostas para as perguntas mais comuns.</p>
          </div>

          <div className="strategic-faq-list">
            {strategicFaqs.map((faq, index) => (
              <button
                type="button"
                key={faq.question}
                className={`strategic-faq-item ${openStrategicFaq === index ? 'active' : ''}`}
                onClick={() => toggleStrategicFaq(index)}
                aria-expanded={openStrategicFaq === index}
              >
                <span className="strategic-faq-question">
                  <span>{faq.question}</span>
                  <ChevronDown size={22} />
                </span>
                <span className="strategic-faq-answer">
                  {faq.answer}
                </span>
              </button>
            ))}
          </div>

          <div className="strategic-faq-close">
            <p>
              Se a sua dúvida principal era saber se este protocolo é claro, prático e aplicável, agora você já sabe: o Magnetus III foi criado para conduzir você passo a passo.
            </p>
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="strategic-faq-button">
              QUERO COMEÇAR AGORA
              <ArrowRight size={20} />
            </a>
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
            <div className="offer-includes" aria-label="Itens inclusos na oferta">
              <strong>Esta oferta inclui:</strong>
              <ul>
                <li>Magnetus III</li>
                <li>Manual Dia 0 / Restart da Respiração</li>
                <li>Ritual Matemática da Liberação</li>
                <li>Bônus Antídoto do Antivalor</li>
                <li>Garantia de 7 dias</li>
                <li>Acesso imediato</li>
                <li>Compra segura</li>
              </ul>
            </div>
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
              <h3 className="author-subtitle text-gold">Autora do Magnetus III e criadora do Método Posicione-se™</h3>
              
              <div className="author-bio">
                <p className="author-highlight"><strong>Eu não criei este protocolo para ensinar mulheres a fingirem atração. Eu criei para conduzir mulheres de volta à própria presença.</strong></p>
                
                <p>Antes de transformar essa jornada em método, eu precisei atravessar meus próprios padrões: autoabandono, ansiedade relacional, ressentimentos antigos, tentativas de caber no desejo do outro e a sensação de viver esperando alguma forma de escolha externa.</p>
                
                <p>O Magnetus III nasceu desse lugar: não da teoria vazia, mas da experiência de quem entendeu, no corpo, que uma mulher perde magnetismo quando perde presença.</p>
                
                <p>Ao longo da minha própria reconstrução, percebi que atração não começa no outro. Começa no sistema nervoso, na postura, nos limites, na forma como uma mulher responde ao que sente e na decisão de parar de se trair para manter vínculos que a diminuem.</p>
                
                <p>Por isso, este protocolo não promete controle sobre ninguém. Ele entrega uma estrutura para você se observar, regular seu corpo, reconhecer padrões emocionais, atravessar a liberação interna e construir presença com mais clareza, firmeza e valor.</p>
                
                <div className="author-quote">
                  <p>"Credibilidade, para mim, não nasce de parecer perfeita. Nasce de ter atravessado a dor, nomeado o padrão e transformado isso em direção prática."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. NOTA PESSOAL */}
      <section className="personal-note-section">
        <div className="container">
          <article className="personal-note-card">
            <span className="personal-note-mark" aria-hidden="true">“</span>
            <div className="personal-note-content">
              <p className="eyebrow">Uma nota pessoal da Sol</p>
              <blockquote>
                <p>Eu sei o que é ouvir que você precisa perdoar, superar, ser forte e seguir em frente — enquanto por dentro ninguém sabe o tamanho do que ficou preso.</p>
                <p>Eu sei o que é tentar amar carregando ressentimento, tensão e memória de dor no corpo. E também sei o quanto isso contamina a presença, os vínculos, as escolhas e até a forma como uma mulher se permite ser vista.</p>
                <p>O Magnetus III não nasceu para transformar dor em discurso bonito. Nasceu para transformar dor em direção.</p>
                <p>Eu não acredito em atração construída por joguinho. Eu acredito em presença construída por verdade, corpo regulado, limite, clareza e prática.</p>
                <p>Se você chegou até aqui, talvez não seja porque precisa ser mais desejada. Talvez seja porque está cansada de se abandonar para caber no desejo de alguém.</p>
              </blockquote>
              <p className="personal-note-signature">— Sol Lima</p>
            </div>
          </article>
        </div>
      </section>

      {/* 8. FAQ */}
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

      <section className="final-emotional-cta" aria-labelledby="final-emotional-title">
        <div className="container">
          <div className="final-emotional-shell">
            <p className="final-emotional-kicker">Fechamento da jornada</p>
            <h2 id="final-emotional-title">
              Você não precisa continuar se perdendo quando gosta de alguém.
            </h2>
            <p className="final-emotional-subtitle">
              Existe um caminho mais claro, mais calmo e mais seu.
            </p>

            <div className="final-emotional-copy">
              <p>
                Talvez você tenha passado tempo demais tentando ser escolhida, tentando ser compreendida, tentando provar valor, tentando parecer leve enquanto por dentro estava em alerta.
              </p>
              <p>
                Mas a sua presença não precisa continuar nascendo da ansiedade.
              </p>
              <p>
                O Magnetus III foi criado para conduzir você de volta ao próprio centro: com direção, prática, respiração, consciência emocional, limite e reposicionamento.
              </p>
              <p>
                Você não precisa virar outra mulher. Você precisa parar de abandonar a mulher que já existe em você.
              </p>
            </div>

            <p className="final-emotional-highlight">
              Magnetismo não começa quando alguém te escolhe. Começa quando você volta para si.
            </p>

            <p className="final-emotional-before-button">
              Se você quer começar essa jornada hoje, o próximo passo está abaixo.
            </p>

            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="final-emotional-button">
              QUERO COMEÇAR AGORA
              <ArrowRight size={20} />
            </a>
            <p className="final-emotional-note">
              Acesso imediato • 100% digital • Garantia de 7 dias
            </p>
            <p className="final-emotional-signature">
              Magnetus III — Protocolo de Presença Feminina em 15 dias.
            </p>
          </div>
        </div>
      </section>

      <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="sticky-cta">
        Quero acessar o protocolo
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
