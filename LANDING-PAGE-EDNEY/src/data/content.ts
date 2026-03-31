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
}

export interface CardItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface ServiceItem {
  title: string;
  desc: string;
  icon: LucideIcon;
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
  { value: "Desde 2008", label: "Comunicação política na prática" },
  { value: "Equipe própria", label: "Produção e comunicação especializada" },
  { value: "Tráfego pago", label: "Anúncios em redes sociais" },
  { value: "Campanhas", label: "Experiência comprovada" },
  { value: "Eleições 2026", label: "Estratégias exclusivas" },
];

export const diferenciais: CardItem[] = [
  { icon: Target, title: "Leitura política de cenário", text: "Entendimento real de território, percepção pública, disputa de narrativa e comportamento do eleitor." },
  { icon: Sparkles, title: "Atuação personalizada", text: "Cada projeto exige estratégia, linguagem, estrutura e ritmo próprios, sem fórmula pronta." },
  { icon: BadgeCheck, title: "Vivência prática", text: "Experiência acumulada em campanha, gestão pública, mandato, reposicionamento e comunicação sob pressão." },
  { icon: Users, title: "Equipe própria", text: "Estrutura pronta para sustentar produção, operação, audiovisual, cobertura e resposta com velocidade." },
  { icon: ShieldCheck, title: "Capacidade de assumir crise", text: "Atuação em cenários de desgaste institucional, mídia negativa e comunicação desorganizada." },
  { icon: Workflow, title: "Atualização constante", text: "Formação contínua, congressos, feiras, imersões e acompanhamento permanente do mercado político." },
];

export const servicos: ServiceItem[] = [
  { title: "Estratégia e posicionamento político", desc: "Diagnóstico político, leitura de cenário, narrativa e construção de contraste.", icon: Target },
  { title: "Direção e coordenação de comunicação", desc: "Coordenação de equipes, organização de fluxo e comando da operação.", icon: Workflow },
  { title: "Campanhas e pré-campanhas", desc: "Estruturação tática, presença pública, discurso e sustentação de imagem.", icon: Megaphone },
  { title: "Assessoria de comunicação institucional", desc: "Comunicação pública, fortalecimento de imagem e resposta em contextos sensíveis.", icon: Radio },
  { title: "Produção audiovisual e direção criativa", desc: "Captação, cobertura, direção criativa e peças com força política.", icon: Play },
  { title: "Tráfego pago", desc: "Distribuição, impulsionamento e performance em redes sociais.", icon: CircleDollarSign },
  { title: "Gestão de crise e mídia negativa", desc: "Resposta estratégica em cenários de desgaste, ataque e pressão pública.", icon: ShieldCheck },
  { title: "Organização de equipes de comunicação", desc: "Estruturação de processos, papéis, rotina e comando operacional.", icon: Users },
  { title: "Fortalecimento de imagem pública", desc: "Posicionamento, presença e percepção pública alinhados ao objetivo político.", icon: Sparkles },
];

export const cases: CaseItem[] = [
  { cidade: "Santa Quitéria", resumo: "Atuação em um contexto de alta complexidade política e institucional, marcado por crise pública, desgaste, comunicação sob pressão, disputa de narrativa e necessidade de reorganização estratégica em meio à eleição suplementar.", img: heroImg },
  { cidade: "Hidrolândia", resumo: "Reposicionamento político com crescimento relevante de percepção ao longo do processo eleitoral.", img: editorialImg },
  { cidade: "Mucambo", resumo: "Atuação ligada ao fortalecimento de liderança, consolidação de projeto político e continuidade no cenário local.", img: portraitImg },
  { cidade: "Forquilha", resumo: "Ação estratégica em Forquilha, ampliando o portfólio de atuação em cenários políticos municipais e reforçando presença em operações de comunicação com foco em posicionamento, narrativa e resultado.", img: heroImg },
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
  { texto: "Edney assumiu a comunicação em um momento crítico e trouxe direção, organização e resposta.", nome: "Nome do depoente", cargo: "Cargo / função" },
  { texto: "Não entrou apenas para executar. Entrou para conduzir a comunicação com visão estratégica.", nome: "Nome do depoente", cargo: "Cargo / função" },
  { texto: "Tem leitura de cenário, velocidade de resposta e capacidade real de fazer a operação funcionar.", nome: "Nome do depoente", cargo: "Cargo / função" },
  { texto: "A comunicação saiu do improviso e ganhou planejamento, ritmo e resultado mensurável.", nome: "Nome do depoente", cargo: "Cargo / função" },
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
  { pergunta: "Como funciona o processo de contratação?", resposta: "O primeiro passo é uma conversa inicial para entender o cenário, os objetivos e as necessidades do projeto. A partir disso, elaboro um diagnóstico estratégico e apresento uma proposta personalizada com escopo, cronograma e investimento. Tudo é feito de forma transparente, sem surpresas." },
  { pergunta: "Você atende projetos fora do Ceará?", resposta: "Sim. Minha atuação não se prende a fronteiras geográficas. Atualmente estou localizado na região Norte do Ceará, mas vou onde o projeto exige presença, comando e resultado. Tenho experiência em projetos em diversos municípios e estados." },
  { pergunta: "Qual é a diferença entre consultoria e direção de comunicação?", resposta: "Na consultoria, o foco é o diagnóstico, o planejamento e a orientação estratégica. Na direção de comunicação, assumo o comando da operação, coordenando equipes, definindo fluxos, conduzindo a produção e garantindo execução com velocidade e padrão profissional." },
  { pergunta: "Trabalha com tráfego pago em campanhas políticas?", resposta: "Sim. Tenho equipe e expertise em distribuição, impulsionamento e performance em redes sociais. O tráfego pago é integrado à estratégia de comunicação, garantindo que o investimento gere alcance, engajamento e resultado eleitoral real." },
  { pergunta: "Como é feita a gestão de crise?", resposta: "A gestão de crise envolve leitura rápida do cenário, resposta estratégica imediata, controle de narrativa e condução da comunicação para minimizar danos e reposicionar a imagem. Atuo em cenários de desgaste institucional, mídia negativa e pressão pública com agilidade e precisão." },
  { pergunta: "Quais tipos de projetos você atende?", resposta: "Atendo pré-candidatos, candidatos, prefeitos, deputados, lideranças regionais, grupos políticos, assessores, equipes de comunicação e gestões públicas. Os projetos podem incluir pré-campanha, campanha eleitoral, mandato, gestão pública, reposicionamento de imagem e organização de comunicação." },
  { pergunta: "Possui equipe própria para execução dos projetos?", resposta: "Sim. Conto com equipe própria de produção e comunicação, preparada para atender projetos com agilidade, alinhamento e padrão profissional. Isso permite assumir desde consultorias e direções até operações completas de campanha." },
  { pergunta: "Qual o investimento para um projeto de comunicação política?", resposta: "Cada projeto é único, portanto o investimento varia conforme o escopo, a complexidade, a duração e os objetivos. Após o diagnóstico inicial, apresento uma proposta clara e transparente. O foco é entregar resultado real com equilíbrio entre investimento e retorno político." },
];

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#servicos" },
  { label: "Cases", href: "#cases" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];
