import React from 'react';
import { createPortal } from 'react-dom';
import { track } from '@vercel/analytics';
import { ArrowDown, Check, ShieldCheck } from 'lucide-react';
import './ConversionContinuityLayer.css';

const ANGLES = Object.freeze({
  F1_FORTE_QUANDO_GOSTA: {
    code: 'F1_FORTE_QUANDO_GOSTA',
    eyebrow: 'Você chegou pela pergunta certa',
    title: 'Você é forte até começar a gostar?',
    text: 'Sua capacidade não desapareceu. O que muda é que a resposta, o silêncio e o humor de outra pessoa começam a ocupar o centro das suas decisões.',
  },
  F2_DEPENDENCIA_DE_SINAL: {
    code: 'F2_DEPENDENCIA_DE_SINAL',
    eyebrow: 'O comportamento visível não é o começo',
    title: 'O silêncio dele não deveria comandar o seu dia.',
    text: 'Antes da mensagem impulsiva existe uma sequência: alerta, busca de segurança, reação para obter alívio e enfraquecimento dos próprios limites.',
  },
  F3_SEM_VIRAR_FRIA: {
    code: 'F3_SEM_VIRAR_FRIA',
    eyebrow: 'Presença não é frieza',
    title: 'Não é parar de sentir. É parar de se abandonar.',
    text: 'Você pode continuar sensível, conversar com clareza e sustentar limites sem usar silêncio, distância ou desinteresse como manipulação.',
  },
});

const DEFAULT_ANGLE = Object.freeze({
  code: 'ORGANICO',
  eyebrow: 'Magnetus III',
  title: 'Magnetismo não é chamar atenção. É não desaparecer de si quando a atenção chega.',
  text: 'O protocolo trabalha o momento anterior à reação para que sentimento, limite e escolha voltem a apontar na mesma direção.',
});

function resolveAngle() {
  if (typeof window === 'undefined') return DEFAULT_ANGLE;
  const code = new URLSearchParams(window.location.search).get('utm_content')?.toUpperCase();
  return ANGLES[code] ?? DEFAULT_ANGLE;
}

function createHost(id, beforeSelector) {
  const target = document.querySelector(beforeSelector);
  if (!target?.parentNode) return null;

  const existing = document.getElementById(id);
  if (existing) return { element: existing, created: false };

  const element = document.createElement('div');
  element.id = id;
  target.parentNode.insertBefore(element, target);
  return { element, created: true };
}

export default function ConversionContinuityLayer() {
  const [angle] = React.useState(resolveAngle);
  const [hosts, setHosts] = React.useState({ match: null, decision: null });

  React.useEffect(() => {
    const match = createHost('magnetus-feminino-message-match', '#entenda');
    const decision = createHost('magnetus-feminino-decision-bridge', '#oferta');

    setHosts({ match: match?.element ?? null, decision: decision?.element ?? null });
    track('message_match_loaded', { audience: 'feminino', creative: angle.code });

    return () => {
      if (match?.created) match.element.remove();
      if (decision?.created) decision.element.remove();
    };
  }, [angle.code]);

  const goToOffer = () => {
    track('conversion_bridge_click', { audience: 'feminino', creative: angle.code });
    document.querySelector('#oferta')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {hosts.match && createPortal(
        <section className="mag-continuity-match" aria-labelledby="mag-continuity-match-title">
          <div className="mag-continuity-container">
            <p className="mag-continuity-eyebrow">{angle.eyebrow}</p>
            <h2 id="mag-continuity-match-title">{angle.title}</h2>
            <p>{angle.text}</p>
            <a href="#entenda" onClick={() => track('message_match_continue', { audience: 'feminino', creative: angle.code })}>
              Entender o padrão <ArrowDown size={18} />
            </a>
          </div>
        </section>,
        hosts.match,
      )}

      {hosts.decision && createPortal(
        <section className="mag-decision-bridge" aria-labelledby="mag-decision-title">
          <div className="mag-decision-container">
            <div className="mag-decision-copy">
              <p className="mag-continuity-eyebrow">Antes da oferta</p>
              <h2 id="mag-decision-title">Você não precisa escolher entre sentir e se respeitar.</h2>
              <p>O Magnetus III organiza uma travessia curta e aplicável: perceber o gatilho, interromper a resposta de alívio e sustentar uma escolha coerente com o que você considera digno.</p>
              <div className="mag-decision-points">
                <span><Check size={18} /> Reconhecer o momento anterior à reação</span>
                <span><Check size={18} /> Reduzir a dependência de mensagens e sinais</span>
                <span><Check size={18} /> Sustentar limites sem virar uma mulher fria</span>
                <span><Check size={18} /> Aplicar uma etapa por dia durante 15 dias</span>
              </div>
            </div>

            <aside className="mag-decision-card" aria-label="Resumo para decisão">
              <ShieldCheck size={32} />
              <h3>O que esta oferta não promete</h3>
              <p>Não promete trazer alguém de volta, controlar outra pessoa ou produzir transformação sem aplicação.</p>
              <h3>O que ela entrega</h3>
              <p>Um protocolo digital, materiais complementares, acesso imediato e 7 dias de garantia por R$ 69,90.</p>
              <button type="button" onClick={goToOffer}>Ver exatamente o que recebo</button>
            </aside>
          </div>
        </section>,
        hosts.decision,
      )}
    </>
  );
}
