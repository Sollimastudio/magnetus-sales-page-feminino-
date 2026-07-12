import React from 'react';
import { ArrowRight, BadgeCheck, Clock3, FileText, LockKeyhole, ShieldCheck, Sparkles, XCircle, CheckCircle } from 'lucide-react';
import './App.css';
import MobileScrollHero from './MobileScrollHero.jsx';

const checkoutUrl = 'https://pay.kiwify.com.br/m8cGccz';

const fitPoints = [
  'Você fica ansiosa quando gosta de alguém.',
  'Você quer parar de correr atrás e começar a se respeitar.',
  'Você quer ser lembrada sem precisar implorar atenção.',
  'Você precisa de um passo a passo simples para mudar seu comportamento.'
];

const methodSteps = [
  {
    label: 'Dia 0',
    title: 'Primeiro passo',
    text: 'Você entende como está hoje e aprende uma respiração simples para acalmar o corpo antes de agir.'
  },
  {
    label: 'Dias 1 a 7',
    title: 'Organizar por dentro',
    text: 'Você trabalha ansiedade, carência, medo de perder e o hábito de correr atrás.'
  },
  {
    label: 'Dia 8',
    title: 'Virada emocional',
    text: 'Você faz uma prática para soltar pesos, encerrar ciclos e parar de carregar o que te prende.'
  },
  {
    label: 'Dias 9 a 15',
    title: 'Agir diferente',
    text: 'Você aprende postura, comunicação, silêncio e limites para ser vista com mais valor.'
  }
];

const deliverables = [
  {
    icon: FileText,
    title: 'Magnetus III',
    text: 'O guia principal com o passo a passo dos 15 dias.'
  },
  {
    icon: Clock3,
    title: 'Guia do começo',
    text: 'A preparação para você iniciar com calma e clareza.'
  },
  {
    icon: BadgeCheck,
    title: 'Prática de liberação',
    text: 'Um exercício para soltar pesos emocionais e virar a chave.'
  },
  {
    icon: ShieldCheck,
    title: 'Bônus: o que evitar',
    text: 'Um guia para perceber atitudes que passam insegurança e diminuem seu valor.'
  }
];

const diagnosticQuestions = [
  {
    question: 'Quando você gosta de alguém, o que mais acontece com você?',
    answers: [
      'Fico esperando mensagem e sinais de atenção.',
      'Mudo meu jeito para agradar mais.',
      'Tenho medo de falar o que sinto.'
    ]
  },
  {
    question: 'Em qual situação você mais se sente invisível?',
    answers: [
      'Quando a pessoa some ou responde frio.',
      'Quando eu faço muito e recebo pouco.',
      'Quando preciso pedir o mínimo.'
    ]
  },
  {
    question: 'O que você mais quer mudar agora?',
    answers: [
      'Quero parar de correr atrás.',
      'Quero impor limites sem culpa.',
      'Quero me sentir mais segura e desejada.'
    ]
  }
];

function App() {
  const [diagnosticAnswers, setDiagnosticAnswers] = React.useState({});
  const [diagnosticStep, setDiagnosticStep] = React.useState(0);

  const answeredCount = Object.keys(diagnosticAnswers).length;
  const diagnosticComplete = answeredCount === diagnosticQuestions.length;
  const currentDiagnostic = diagnosticQuestions[diagnosticStep];

  const answerDiagnosticQuestion = (questionIndex, answer) => {
    setDiagnosticAnswers((current) => ({ ...current, [questionIndex]: answer }));

    if (questionIndex < diagnosticQuestions.length - 1) {
      setDiagnosticStep(questionIndex + 1);
    }
  };

  return (
    <div className="app">
      <div className="mobile-only">
        <MobileScrollHero />
      </div>

      <header className="hero-section desktop-hero-section">
        <div className="hero-shell">
          <div className="hero-copy-overlay">
            <div className="hero-badge">
              <Sparkles size={18} />
              Guia prático para ser mais lembrada
            </div>
            <h1>Pare de se apagar por amor.</h1>
            <p>
              Um guia de 15 dias para acalmar a ansiedade, parar de correr atrás e se posicionar com mais segurança.
            </p>
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="hero-image-cta">
              Quero começar agora
              <ArrowRight size={18} />
            </a>
            <p className="secure-note">
              <LockKeyhole size={16} />
              Compra segura, acesso imediato e discreto
            </p>
          </div>
        </div>
      </header>

      <section id="questionario" className="mobile-lead-section mobile-only" aria-labelledby="questionario-title">
        <div className="mobile-lead-shell">
          <p className="mobile-lead-kicker">Diagnóstico rápido</p>
          <h2 id="questionario-title">Descubra onde você está se apagando.</h2>
          <p className="mobile-lead-intro">
            Responda uma pergunta por vez. No final, você vê o próximo passo mais claro.
          </p>

          <div className="mobile-lead-questions">
            <div className="mobile-lead-progress" aria-label={`Pergunta ${diagnosticStep + 1} de ${diagnosticQuestions.length}`}>
              <span>Pergunta {diagnosticStep + 1} de {diagnosticQuestions.length}</span>
              <div>
                {diagnosticQuestions.map((item, index) => (
                  <i key={item.question} className={index <= diagnosticStep ? 'active' : ''} />
                ))}
              </div>
            </div>

            <fieldset className="mobile-lead-question" key={currentDiagnostic.question}>
              <legend>{currentDiagnostic.question}</legend>
              {currentDiagnostic.answers.map((answer) => {
                const selected = diagnosticAnswers[diagnosticStep] === answer;

                return (
                  <button
                    type="button"
                    key={answer}
                    className={selected ? 'selected' : ''}
                    onClick={() => answerDiagnosticQuestion(diagnosticStep, answer)}
                  >
                    {answer}
                  </button>
                );
              })}
            </fieldset>

            {diagnosticStep > 0 && (
              <button
                type="button"
                className="mobile-lead-back"
                onClick={() => setDiagnosticStep((step) => Math.max(0, step - 1))}
              >
                Voltar
              </button>
            )}
          </div>

          <div className={diagnosticComplete ? 'mobile-lead-result is-visible' : 'mobile-lead-result'}>
            <p>
              Você não precisa continuar tentando ser escolhida. O próximo passo é seguir um roteiro simples para agir com mais calma, limite e presença.
            </p>
            <a href="#oferta">
              Ver o guia indicado
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. O DEDO NA FERIDA (Conexão Emocional) */}
      <section className="pain-section">
        <div className="container">
          <div className="pain-content">
            <h2 className="section-title">
              Você é forte para tudo, mas <span className="text-bordeaux">se perde</span> quando gosta de alguém?
            </h2>
            <div className="pain-text">
              <p>
                Você trabalha, resolve problemas e segura muita coisa. Mas quando gosta de alguém, começa a esperar mensagem, medir palavras e aceitar menos do que merece.
              </p>
              <div className="final-blow">
                <p>
                  <strong>Não é falta de sorte.</strong> É um <span className="highlight">jeito aprendido de agir</span>. Quando você não percebe isso, repete as mesmas escolhas e se sente cada vez menos valorizada.
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
              <h2 className="section-title">Este guia é para quem quer parar de se diminuir para manter alguém perto.</h2>
              <p>
                Magnetus III não promete controlar outra pessoa. Ele ajuda você a mudar sua postura, falar com mais clareza e parar de agir por medo de perder.
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
          <h2 className="section-title text-center text-white">Antes e depois do Magnetus</h2>
          <div className="comparison-grid">
            <div className="comparison-card before">
              <div className="card-header">
                <XCircle className="icon-error" />
                <h3>Antes</h3>
              </div>
              <ul className="comparison-list">
                <li>Ficar em alerta esperando resposta</li>
                <li>Buscar aprovação o tempo todo</li>
                <li>Falar com medo de desagradar</li>
                <li>Aceitar pouco para não perder a pessoa</li>
                <li>Sentir que não é vista de verdade</li>
              </ul>
            </div>
            <div className="comparison-card after">
              <div className="card-header">
                <CheckCircle className="icon-success" />
                <h3>Depois</h3>
              </div>
              <ul className="comparison-list">
                <li>Mais calma antes de responder</li>
                <li>Mais clareza para enxergar seus padrões</li>
                <li>Comunicação mais segura</li>
                <li>Limites sem culpa</li>
                <li>Mais presença sem fazer esforço para agradar</li>
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
              <h2 className="section-title text-white">15 dias para trocar ansiedade por atitude.</h2>
              <p>
                Você começa se acalmando, entende seus padrões e depois aprende como agir, falar e se posicionar sem parecer carente.
              </p>
              <a href="#oferta" className="method-link">
                Ver o que está incluso
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
            <h2 className="section-title">O que você vai receber</h2>
            <p className="section-subtitle">Materiais simples para você aplicar no dia a dia.</p>
          </div>

          <div className="products-detailed-grid">
            {/* Ebook 1 */}
            <div className="product-detail-card">
              <div className="product-image">
                <img src="/images/magnetus-iii.png" alt="Magnetus III" className="premium-book-img" />
              </div>
              <div className="product-info">
                <span className="product-tag">Guia principal</span>
                <h3>MAGNETUS III: Guia de Presença</h3>
                <p>
                  Um guia de 15 dias para acalmar a ansiedade, perceber seus padrões e agir com mais presença, limite e segurança.
                </p>
              </div>
            </div>

            {/* Ebook 2 */}
            <div className="product-detail-card reverse">
              <div className="product-image">
                <img src="/images/antidoto.png" alt="Bônus O que evitar" className="premium-book-img" />
              </div>
              <div className="product-info">
                <span className="product-tag">Bônus prático</span>
                <h3>O QUE EVITAR: atitudes que diminuem seu valor</h3>
                <p>
                  Um bônus para perceber atitudes como se explicar demais, ficar disponível demais, reagir por ansiedade e aceitar pouco.
                </p>
              </div>
            </div>
          </div>
          
          <div className="combo-highlight-box">
            <div className="combo-image-wrap">
              <img src="/images/magnetus-e-antidoto.png" alt="Combo Magnetus III e bônus O que evitar" className="combo-image" />
            </div>
            <div className="combo-content">
              <Sparkles className="text-gold mb-4" size={32} />
              <h3>O combo completo</h3>
              <p>
                O guia principal mostra o que fazer. O bônus mostra o que evitar. Juntos, eles ajudam você a parar de se diminuir e começar a se posicionar melhor.
              </p>
              <p className="result-highlight">Mais presença, menos desespero para ser escolhida.</p>
            </div>
          </div>

          <div className="deliverables-section">
            <div className="deliverables-copy">
              <span className="eyebrow">O que chega para você</span>
              <h2>Você recebe quatro materiais simples para começar e aplicar.</h2>
              <p>
                Cada material tem uma função: começar com calma, seguir os 15 dias, virar a chave emocional e evitar atitudes que te diminuem.
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
            <h2 id="price-anchor-title">Você já gasta mais do que isso com coisas que passam rápido.</h2>
            <p>
              Aqui, o investimento é em uma mudança que você leva para seus relacionamentos e para sua postura.
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
                  Mais calma
                  <small>Responder sem agir no impulso</small>
                </div>
                <span className="anchor-item-price gold">✓</span>
              </div>

              <div className="anchor-item">
                <div className="anchor-item-icon worth">🪞</div>
                <div className="anchor-item-label">
                  Clareza
                  <small>Perceber o que te faz correr atrás</small>
                </div>
                <span className="anchor-item-price gold">✓</span>
              </div>

              <div className="anchor-item">
                <div className="anchor-item-icon worth">👑</div>
                <div className="anchor-item-label">
                  Mais presença
                  <small>Ser vista com mais valor</small>
                </div>
                <span className="anchor-item-price gold">✓</span>
              </div>

              <div className="anchor-item">
                <div className="anchor-item-icon worth">🛡️</div>
                <div className="anchor-item-label">
                  Limites
                  <small>Se posicionar sem culpa</small>
                </div>
                <span className="anchor-item-price gold">✓</span>
              </div>

              <div className="anchor-item">
                <div className="anchor-item-icon worth">📖</div>
                <div className="anchor-item-label">
                  Guia de 15 dias
                  <small>Um passo por dia</small>
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
                Menos que uma manicure. Mais útil do que continuar tentando sozinha sem saber o que mudar.
              </p>
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="price-anchor-verdict-cta">
                QUERO COMEÇAR POR R$ 69,90
                <ArrowRight size={20} />
              </a>
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
                src="/images/valor-oferta.png" 
                alt="Magnetus III - Oferta Especial" 
                className="offer-image"
              />
            </a>
            <div className="offer-includes" aria-label="Itens inclusos na oferta">
              <strong>Esta oferta inclui:</strong>
              <ul>
                <li>Magnetus III</li>
                <li>Guia do começo</li>
                <li>Prática de liberação emocional</li>
                <li>Bônus O que evitar</li>
                <li>Garantia de 7 dias</li>
                <li>Acesso imediato</li>
                <li>Compra segura</li>
              </ul>
            </div>
            <div className="purchase-clarity">
              <div>
                <ShieldCheck size={22} />
                <strong>Garantia de 7 dias</strong>
                <span>Você tem tempo para ver se o material faz sentido para você.</span>
              </div>
              <div>
                <LockKeyhole size={22} />
                <strong>Checkout seguro</strong>
                <span>Pagamento seguro e acesso digital após a confirmação.</span>
              </div>
              <div>
                <Clock3 size={22} />
                <strong>Começo imediato</strong>
                <span>Você pode comprar, acessar e começar hoje.</span>
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
              <h3 className="author-subtitle text-gold">Autora do Magnetus III</h3>
              
              <div className="author-bio">
                <p className="author-highlight"><strong>Eu não criei este guia para ensinar joguinho. Eu criei para ajudar mulheres a voltarem para si.</strong></p>
                
                <p>Antes de criar o Magnetus, eu também vivi ansiedade, medo de perder, vontade de agradar e a sensação de esperar ser escolhida.</p>
                
                <p>O Magnetus nasceu dessa experiência: quando uma mulher perde a si mesma, ela também perde força, brilho e segurança.</p>
                
                <p>A mudança começa quando você para de agir por desespero e aprende a responder com mais calma, limite e clareza.</p>
                
                <p>Por isso, este guia não promete controlar ninguém. Ele entrega um caminho para você se observar, mudar atitudes e voltar a se posicionar melhor.</p>
                
                <div className="author-quote">
                  <p>"Você não precisa parecer perfeita. Precisa parar de se abandonar para ser escolhida."</p>
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
                <p>Eu sei como é tentar ser forte por fora e, por dentro, se sentir cansada de esperar atenção.</p>
                <p>Eu sei como é gostar de alguém e começar a medir cada palavra, cada silêncio e cada resposta.</p>
                <p>O Magnetus III nasceu para transformar essa dor em atitude prática.</p>
                <p>Eu não acredito em joguinho. Eu acredito em calma, limite, clareza e prática.</p>
                <p>Se você chegou até aqui, talvez esteja cansada de se diminuir para caber no desejo de alguém.</p>
              </blockquote>
              <p className="personal-note-signature">— Sol Lima</p>
            </div>
          </article>
        </div>
      </section>

      <section className="final-emotional-cta" aria-labelledby="final-emotional-title">
        <div className="container">
          <div className="final-emotional-shell">
            <p className="final-emotional-kicker">Último passo</p>
            <h2 id="final-emotional-title">
              Você não precisa continuar se perdendo quando gosta de alguém.
            </h2>
            <p className="final-emotional-subtitle">
              Existe um jeito mais calmo, claro e seguro de se posicionar.
            </p>

            <div className="final-emotional-copy">
              <p>
                Talvez você tenha passado tempo demais tentando ser escolhida, tentando provar valor e tentando parecer tranquila enquanto por dentro estava ansiosa.
              </p>
              <p>
                Mas você não precisa continuar vivendo desse jeito.
              </p>
              <p>
                O Magnetus III foi criado para ajudar você a voltar para si: com prática, respiração, calma, limite e atitudes mais claras.
              </p>
              <p>
                Você não precisa virar outra mulher. Você precisa parar de abandonar a mulher que já existe em você.
              </p>
            </div>

            <p className="final-emotional-highlight">
              Magnetismo não começa quando alguém te escolhe. Começa quando você volta para si.
            </p>

            <p className="final-emotional-before-button">
              Se você quer começar hoje, o próximo passo está abaixo.
            </p>

            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="final-emotional-button">
              QUERO COMEÇAR AGORA
              <ArrowRight size={20} />
            </a>
            <p className="final-emotional-note">
              Acesso imediato • 100% digital • Garantia de 7 dias
            </p>
            <p className="final-emotional-signature">
              Magnetus III — guia de 15 dias para presença feminina.
            </p>
          </div>
        </div>
      </section>

      <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="sticky-cta">
        Quero começar agora
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
