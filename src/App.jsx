import React from 'react';
import { ArrowRight, BadgeCheck, ChevronDown, LockKeyhole, Sparkles, XCircle, CheckCircle } from 'lucide-react';
import './App.css';

const checkoutUrl = 'https://pay.kiwify.com.br/m8cGccz';

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
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large pulse-animation">
              Quero ativar minha presença
              <ArrowRight className="icon-right" size={22} />
            </a>
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
                  O protocolo de 15 dias para instalar soberania biológica. Este manual de engenharia comportamental ensina a regular o sistema nervoso para <strong>projectar um valor social inquestionável</strong>. É a ferramenta definitiva para quem deseja deixar de ser um "caçador" e tornar-se o destino final: a Fonte.
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
                  O diagnóstico brutal dos pontos cegos que repelem os teus resultados. Este guia identifica e elimina os <strong>vazamentos invisíveis de insegurança</strong> e reatividade que comunicam carência. É o antídoto necessário para remover o "travão de mão" que sabota o teu magnetismo antes de abrires a boca.
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
        </div>
      </section>

      {/* 4. O "PUXA TAPETE" (Os Bônus Inesperados) */}
      <section className="bonus-section">
        <div className="container">
          <div className="section-header text-center">
            <Sparkles className="section-icon mx-auto" />
            <h2 className="section-title text-white">Bônus Exclusivos de Ativação</h2>
          </div>
          
          <div className="bonus-grid">
            <div className="bonus-card">
              <div className="bonus-image">
                <img src="/images/antivalor_cover_premium.png" alt="Protocolo Antivalor" className="bonus-img" />
              </div>
              <div className="bonus-info">
                <h3>Protocolo Antivalor</h3>
                <p><strong>O Guia do que NÃO fazer.</strong> Identifique os 5 comportamentos que geram repulsa imediata no homem que você deseja.</p>
              </div>
            </div>

            <div className="bonus-card">
              <div className="bonus-image">
                <img src="/images/capa_ebook_antidoto.jpg" alt="Efeito Vogue" className="bonus-img" />
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
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large offer-cta">
              Garantir meu acesso agora
              <ArrowRight className="icon-right" size={22} />
            </a>
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
                
                <p>Sol Lima é uma estrategista e consultora especializada em neurociência aplicada e ciências comportamentais. O seu trabalho foca-se no desenvolvimento de metodologias de alto impacto, como o protocolo <strong>Magnetus III</strong> e o método <strong>Posicione-se™</strong>, que utilizam a neurobiologia — especificamente a regulação do sistema nervoso e do nervo vago — para reprogramação emocional e posicionamento de autoridade.</p>
                
                <p>A sua identidade profissional é marcada por uma abordagem "visceral" e sofisticada, fundamentada no que descreve como um "doutorado no campo de batalha", transformando vivências complexas em ferramentas estratégicas para o desenvolvimento humano e social.</p>
                
                <div className="author-quote">
                  <p>"O meu foco está na intersecção entre a biologia do comportamento e estratégias de marketing magnético, visando resultados de alta performance e a construção de marcas pessoais dominantes."</p>
                </div>
                
                <p>No campo da tecnologia, Sol Lima dedica-se à criação de assistentes de inteligência artificial personalizados e à produção de conteúdos digitais com uma estética premium e de "luxo editorial".</p>
                
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
