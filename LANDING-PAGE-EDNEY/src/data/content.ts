import {
  Target,
  Sparkles,
  BadgeCheck,
  ShieldCheck,
  Radio,
  Play,
  CircleDollarSign,
  Workflow,
  Users,
  type LucideIcon,
} from "lucide-react";

import heroImg from "../assets/edney-hero.png";
import portraitImg from "../assets/edney-about.png";
import editorialImg from "../assets/edney-cases.png";
import sleeveImg from "../assets/edney-sleeve.png";
import mapaImg from "../assets/mapa-ceara.png";

/* ──── Re-export assets for convenience ──── */
export { heroImg, editorialImg, portraitImg, mapaImg, sleeveImg };

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
    label: "Mercado político", 
    desc: "Mais de uma década na linha de frente da comunicação estratégica." 
  },
  { 
    value: "Equipe própria", 
    label: "Operações internas", 
    desc: "Estrutura completa para audiovisual e operação digital com velocidade e padrão." 
  },
  { 
    value: "Tráfego pago", 
    label: "Gestão estratégica", 
    desc: "Especialistas em impulsionamento de resultados e alcance segmentado." 
  },
  { 
    value: "Campanhas", 
    label: "Posicionamento", 
    desc: "Planejamento tático e comando de narrativa para vencer disputas reais." 
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
    desc: "Construção de narrativa, definição de território político e planejamento de campanha.", 
    icon: Target,
    tags: ["Narrativa", "Diagnóstico", "Contraste"]
  },
  { 
    title: "Direção e coordenação", 
    desc: "Comando de equipes de comunicação, definição de prioridades e gestão de agenda estratégica.", 
    icon: Workflow,
    tags: ["Liderança", "Operação", "Fluxo"]
  },
  { 
    title: "Gestão de crise", 
    desc: "Resposta rápida, controle de danos e reversão de cenários adversos na opinião pública.", 
    icon: ShieldCheck,
    tags: ["Eleitoral", "Tático", "Discurso"]
  },
  { 
    title: "Tráfego pago", 
    desc: "Campanhas de mídia digital segmentadas para maximizar alcance e conversão eleitoral.", 
    icon: CircleDollarSign,
    tags: ["Meta Ads", "Google Ads", "Alcance"]
  },
  { 
    title: "Produção audiovisual", 
    desc: "Criação de conteúdo em vídeo, fotografia de campanha e materiais para redes sociais.", 
    icon: Play,
    tags: ["Vídeo", "Design", "Impacto"]
  },
  { 
    title: "Automações e soluções", 
    desc: "Ferramentas inteligentes para otimizar processos, agilizar a comunicação e escalar resultados.", 
    icon: Radio,
    tags: ["IA", "Eficiência", "Escala"]
  },
];

export const cases: CaseItem[] = [
  { cidade: "Crise Pública", resumo: "Atuação em crise pública e desgaste institucional. Disputa de narrativa em eleição suplementar com reversão de cenário adverso.", img: editorialImg },
  { cidade: "Reposicionamento", resumo: "Reposicionamento político estratégico com crescimento mensurável de percepção pública e fortalecimento da imagem.", img: heroImg },
  { cidade: "Narrativa", resumo: "Operações de comunicação com foco em construção de narrativa e fortalecimento de liderança política regional.", img: portraitImg },
  { cidade: "Comunicação Efetiva", resumo: "Estruturação da comunicação institucional com posicionamento estratégico e presença digital.", img: sleeveImg },
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
  { 
    texto: "Com a entrada do Edney, a comunicação da gestão ganhou um novo fôlego. Em pouco tempo, a nossa imagem estava com um novo ar, um novo tom e um novo ritmo.", 
    nome: "Joel Barroso", 
    cargo: "Liderança Política"
  },
  { 
    texto: "Não entrou apenas para executar. Entrou para conduzir. Tem visão de campo, sabe onde apertar e onde recuar.", 
    nome: "Wilebaldo Melo", 
    cargo: "Coordenador e Estrategista"
  },
  { 
    texto: "Tem leitura de cenário, velocidade de resposta e não foge de crise. É o tipo de profissional que você quer do seu lado quando a eleição aperta.", 
    nome: "Edinardo Filho", 
    cargo: "Liderança e Gestor Público"
  },
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
