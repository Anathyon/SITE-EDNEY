import {
  Target,
  Sparkles,
  BadgeCheck,
  ShieldCheck,
  Megaphone,
  Radio,
  Play,
  CircleDollarSign,
  Workflow,
  Users,
  type LucideIcon,
} from "lucide-react";

import heroImg from "../assets/hero.png";
import editorialImg from "../assets/editorial.png";
import portraitImg from "../assets/portrait.png";
import mapaImg from "../assets/mapa-ceara.png";

/* ──── Re-export assets for convenience ──── */
export { heroImg, editorialImg, portraitImg, mapaImg };

/* ──── Types ──── */
export interface StatItem {
  value: string;
  label: string;
  desc?: string;
}

export interface CardItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ServiceItem {
  title: string;
  desc: string;
  icon: LucideIcon;
  tags: string[];
}

export interface CaseItem {
  cidade: string;
  resumo: string;
  img: string;
}

export interface TestimonialItem {
  texto: string;
  nome: string;
  cargo: string;
}

export interface FAQItem {
  pergunta: string;
  resposta: string;
}

export interface SocialLink {
  icon: LucideIcon;
  label: string;
}

/* ──── Content Data ──── */

export const stats: StatItem[] = [
  { 
    value: "Desde 2008", 
    label: "Comunicação política", 
    desc: "Mais de uma década na linha de frente da comunicação estratégica." 
  },
  { 
    value: "Equipe própria", 
    label: "Produção especializada", 
    desc: "Estrutura completa para audiovisual e operação digital rápida." 
  },
  { 
    value: "Tráfego pago", 
    label: "Anúncios políticos", 
    desc: "Especialistas em impulsionamento de resultados e alcance local." 
  },
  { 
    value: "Eleições 2026", 
    label: "Estratégias exclusivas", 
    desc: "Planejamento tático para os novos desafios do cenário nacional." 
  },
];

export const diferenciais: CardItem[] = [
  { icon: Target, title: "Leitura de cenário", desc: "Entendimento real de território, percepção pública e comportamento do eleitor." },
  { icon: Sparkles, title: "Atuação personalizada", desc: "Cada projeto exige estratégia e linguagem próprias, sem fórmulas prontas." },
  { icon: BadgeCheck, title: "Vivência prática", desc: "Experiência acumulada em campanhas, gestões públicas e comunicação sob pressão." },
  { icon: Users, title: "Equipe robusta", desc: "Estrutura pronta para sustentar produção, operação e resposta com velocidade." },
  { icon: ShieldCheck, title: "Gestão de crise", desc: "Atuação em cenários de desgaste institucional e mídia negativa organizada." },
  { icon: Workflow, title: "Atualização constante", desc: "Acompanhamento permanente das tendências do mercado político global." },
];

export const servicos: ServiceItem[] = [
  { 
    title: "Estratégia e posicionamento", 
    desc: "Diagnóstico político, leitura de cenário, narrativa e construção de contraste.", 
    icon: Target,
    tags: ["Narrativa", "Diagnóstico", "Contraste"]
  },
  { 
    title: "Direção de comunicação", 
    desc: "Coordenação de equipes, organização de fluxo e comando da operação.", 
    icon: Workflow,
    tags: ["Liderança", "Operação", "Fluxo"]
  },
  { 
    title: "Campanhas e pré-campanhas", 
    desc: "Estruturação tática, presença pública, discurso e sustentação de imagem.", 
    icon: Megaphone,
    tags: ["Eleitoral", "Tático", "Discurso"]
  },
  { 
    title: "Assessoria institucional", 
    desc: "Comunicação pública, fortalecimento de imagem e resposta em contextos sensíveis.", 
    icon: Radio,
    tags: ["Gestão", "Imagem", "Resposta"]
  },
  { 
    title: "Audiovisual e direção criativa", 
    desc: "Captação, cobertura, direção criativa e peças com força política.", 
    icon: Play,
    tags: ["Vídeo", "Design", "Impacto"]
  },
  { 
    title: "Tráfego pago especializado", 
    desc: "Distribuição, impulsionamento e performance em redes sociais.", 
    icon: CircleDollarSign,
    tags: ["Meta Ads", "Google Ads", "Alcance"]
  },
];

export const cases: CaseItem[] = [
  { cidade: "Santa Quitéria", resumo: "Atuação em um contexto de alta complexidade política e institucional, marcado por crise pública e necessidade de reorganização estratégica.", img: heroImg },
  { cidade: "Hidrolândia", resumo: "Reposicionamento político com crescimento relevante de percepção ao longo do processo eleitoral.", img: editorialImg },
  { cidade: "Mucambo", resumo: "Atuação ligada ao fortalecimento de liderança, consolidação de projeto político e continuidade no cenário local.", img: portraitImg },
  { cidade: "Forquilha", resumo: "Ação estratégica focada em posicionamento, narrativa e resultado em cenários municipais competitivos.", img: heroImg },
];

export const publico: string[] = [
  "Pré-candidatos e candidatos",
  "Prefeitos e lideranças municipais",
  "Deputados e lideranças regionais",
  "Grupos políticos locais",
  "Assessores e coordenadores",
  "Equipes de comunicação",
  "Gestões e prefeituras",
];

export const depoimentos: TestimonialItem[] = [
  { texto: "Edney assumiu a comunicação em um momento crítico e trouxe direção, organização e resposta.", nome: "Carlos Oliveira", cargo: "Ex-Prefeito e Liderança Política" },
  { texto: "Não entrou apenas para executar. Entrou para conduzir a comunicação com visão estratégica.", nome: "Mariana Costa", cargo: "Coordenadora de Campanha" },
  { texto: "Tem leitura de cenário, velocidade de resposta e capacidade real de fazer a operação funcionar.", nome: "Ricardo Santos", cargo: "Secretário de Comunicação" },
  { texto: "A comunicação saiu do improviso e ganhou planejamento, ritmo e resultado mensurável.", nome: "Ana Paula Silva", cargo: "Consultora Política" },
];

export const selos: string[] = [
  "Tráfego pago",
  "Estratégia eleitoral",
  "Narrativa política",
  "Congressos e feiras",
  "Formação contínua",
  "Operação de comunicação",
];

export const faqData: FAQItem[] = [
  { pergunta: "Como funciona o processo de contratação?", resposta: "O primeiro passo é uma conversa inicial para entender o cenário e os objetivos. A partir disso, elaboro um diagnóstico e apresento uma proposta personalizada." },
  { pergunta: "Você atende projetos fora do Ceará?", resposta: "Sim. Minha atuação não se prende a fronteiras. Atualmente estou no Ceará, mas vou onde o projeto exige presença e resultado." },
  { pergunta: "Qual a diferença entre consultoria e direção?", resposta: "Na consultoria, o foco é o planejamento estratégico. Na direção, assumo o comando da operação, coordenando equipes e garantindo a execução." },
  { pergunta: "Trabalha com tráfego pago em campanhas?", resposta: "Sim. Integramos o tráfego pago à estratégia de comunicação, garantindo que o investimento gere alcance e resultado eleitoral real." },
  { pergunta: "Como é feita a gestão de crise?", resposta: "Envolve leitura rápida, resposta imediata e controle de narrativa para minimizar danos e reposicionar a imagem com precisão." },
  { pergunta: "Quais tipos de projetos você atende?", resposta: "Atende pré-candidatos, candidatos, prefeitos, deputados, lideranças regionais, grupos políticos e gestões públicas." },
];

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#servicos" },
  { label: "Cases", href: "#cases" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];
