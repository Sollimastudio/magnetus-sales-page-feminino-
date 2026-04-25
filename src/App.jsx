import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';
import './App.css';

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
      answer: "Sim, o bônus \"Efeito Vogue\" foi desenhado exatamente para isso. Você vai aprender a gerar o contraste necessário para que ele perceba a nova versão irresistível de você."
    },
    {
      question: "Tenho vergonha, o nome aparece na fatura?",
      answer: "Não. Sabemos da importância da sua privacidade. A compra aparecerá discretamente como \"Compra Digital\" na sua fatura."
    }
  ];

  return (
    <div className="app">
      {/* 1. CABEÇALHO (A Promessa Irresistível) */}
      <header className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container relative z-10">
          <div className="hero-content animate-fade-in">
            <div className="logo-placeholder">M-III</div>
            <h1 className="headline delay-1">
              O Fim da Era da Espera:<br/>
              <span className="text-gold">Ative a Presença que Magnetiza sem Esforço.</span>
            </h1>
            <p className="sub-headline delay-2">
              O protocolo de 15 dias para mulheres que cansaram de se moldar para serem escolhidas e decidiram retomar o comando da própria atração.
            </p>
            
              <div className="hero-visual delay-3">
                <img src="/hero_mockup_1777137906980.png" alt="Magnetus III" className="main-visual-img" />
              </div>

            <div className="hero-cta delay-3">
              <a href="#oferta" className="btn btn-primary btn-large">
                QUERO ATIVAR MEU MAGNETISMO AGORA
                <ArrowRight className="icon-right" />
              </a>
            </div>
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

      {/* 3. A SOLUÇÃO (Apresentação do Produto) */}
      <section className="solution-section">
        <div className="container">
          <div className="solution-grid">
            <div className="solution-image">
              <img src="/book_cover_1777137926977.png" alt="O Manual da Atração" className="premium-book-img" />
            </div>
            <div className="solution-content">
              <h2 className="section-title text-left">Conheça o Magnetus III: O Manual da Atração para Mulheres.</h2>
              <p className="solution-description">
                Este não é um livro de "dicas de paquera". É um protocolo de 15 dias baseado em neuro-persuasão para você <strong>habitar a si mesma</strong>. Você vai aprender a sair do modo "Espera" e entrar no modo "Presença".
              </p>
              
              <h3 className="list-title">O que você vai dominar em 15 dias:</h3>
              <ul className="benefits-list">
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>Como <strong>desinstalar o sistema de busca por aprovação</strong>.</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>A ciência de se apresentar sem "doses" (<strong>ser inteira</strong>).</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span><strong>O fim da necessidade</strong> de ser "a mulher legal" que ninguém valoriza.</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <a href="#oferta" className="btn btn-primary">
                  QUERO ENTRAR NO MODO PRESENÇA
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. O "PUXA TAPETE" (Os Bônus Inesperados) */}
      <section className="bonus-section">
        <div className="container">
          <div className="section-header text-center">
            <Sparkles className="section-icon mx-auto" />
            <h2 className="section-title text-white">Você não vai trilhar esse caminho sozinha.</h2>
          </div>
          
          <div className="bonus-grid">
            <div className="bonus-card">
              <div className="bonus-image">
                <img src="/bonus_cover_1777137940296.png" alt="Protocolo Antivalor" className="bonus-img" />
              </div>
              <div className="bonus-info">
                <h3>Protocolo Antivalor</h3>
                <p><strong>O Guia do que NÃO fazer.</strong> Identifique os 5 comportamentos que geram repulsa imediata no homem que você deseja.</p>
              </div>
            </div>

            <div className="bonus-card">
              <div className="bonus-image">
                <img src="/bonus_cover_1777137940296.png" alt="Efeito Vogue" className="bonus-img" />
              </div>
              <div className="bonus-info">
                <h3>Efeito Vogue</h3>
                <p><strong>O manual da metamorfose.</strong> Como fazer ele se reapaixonar pela sua nova versão — a versão que ele não consegue ignorar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUEBRA DE OBJEÇÕES E ANCORAGEM (A Oferta) */}
      <section id="oferta" className="offer-section">
        <div className="container">
          <div className="offer-wrapper">
            <h2 className="section-title">Quanto vale nunca mais se sentir "insuficiente"?</h2>
            <p className="offer-copy">
              Você poderia gastar milhares de reais em terapia, roupas novas ou jantares para tentar atrair atenção. Ou você pode investir menos que o valor de uma manicure para <strong>mudar sua identidade para sempre</strong>.
            </p>

            <div className="offer-box">
              <div className="offer-mockup">
                <img src="/bundle_mockup_1777137954242.png" alt="Magnetus III Bundle Completo" className="bundle-img" />
              </div>
              <div className="offer-pricing">
                <div className="price-real">De: <span>R$ 441,00</span></div>
                <div className="price-offer">
                  <span className="por">Por apenas</span>
                  <div className="price-huge">12x de R$ 9,74</div>
                  <span className="avista">ou R$ 97,00 à vista</span>
                </div>
                
                <button className="btn btn-primary btn-block btn-buy pulse-animation">
                  QUERO GARANTIR MINHA VAGA AGORA
                </button>
                <div className="secure-checkout">
                  <ShieldCheck size={16} /> Compra 100% Segura e Criptografada
                </div>
              </div>
            </div>

            <div className="guarantee-box">
              <div className="guarantee-icon">🛡️</div>
              <div className="guarantee-text">
                <h3>GARANTIA DE 7 DIAS</h3>
                <p>Se em uma semana você não sentir seu poder voltando, eu devolvo cada centavo. Sem perguntas, sem burocracia. O risco é todo meu.</p>
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
              <img src="/author_photo_1777138062783.png" alt="Autora Silvia Lima" className="author-img" />
            </div>
            <div className="author-content">
              <h2 className="author-name">Sobre a Autora</h2>
              <div className="author-quote">
                <p>
                  "Eu já estive onde você está. Eu criei o Magnetus III porque entendi que a liberdade só é real quando somos donas da nossa própria atração. Não se trata de manipulação, trata-se de resgatar quem você nasceu para ser antes que o mundo te dissesse para ser menor."
                </p>
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
              <div 
                key={index} 
                className={`faq-item ${openFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  <ChevronDown className="faq-icon" />
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
