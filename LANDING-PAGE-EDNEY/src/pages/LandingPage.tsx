import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Phone, Mail, MapPin } from "lucide-react";

import { stats, diferenciais, servicos, cases, publico, selos } from "../data/content";
import { heroImg, editorialImg, portraitImg, mapaImg } from "../data/content";
import { fadeUp, staggerContainer } from "../animations";
import {
  Eyebrow,
  SectionTitle,
  PhotoCard,
  MetricPill,
  CTAButton,
  SectionDivider,
} from "../components/ui";
import { Header } from "../components/Header";
import { FAQAccordion } from "../components/FAQAccordion";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";
import { LeadForm } from "../components/LeadForm";
import { Footer } from "../components/Footer";

/* ──────────────── MAIN PAGE ──────────────── */

export default function LandingPage() {
  const [showTop, setShowTop] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* ──── Background ──── */}
      <div className="fixed inset-0 -z-10 opacity-90" style={{ background: "radial-gradient(circle at 20% 10%, rgba(250,204,21,0.18), transparent 24%), radial-gradient(circle at 85% 20%, rgba(250,204,21,0.12), transparent 18%), radial-gradient(circle at 50% 60%, rgba(255,255,255,0.04), transparent 24%), linear-gradient(180deg, #0b0b0b 0%, #050505 100%)" }} />
      <div className="fixed inset-0 -z-10 bg-grid" />

      {/* ──── Header ──── */}
      <Header />

      {/* ──── Hero ──── */}
      <section id="topo" className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:grid md:grid-cols-2 md:items-center md:gap-8 md:py-20 lg:gap-10 lg:px-14 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-300 sm:mb-5 sm:px-3 sm:py-1 sm:text-xs sm:tracking-[0.24em]">
              <Zap className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              Marketing e Política
            </div>
            <h1 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Onde a política amadora termina,
              <span className="mt-1 block text-yellow-300 sm:mt-2">sua vitória começa.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
              Quando a disputa eleitoral aperta e cada voto conta, eu assumo o comando da sua comunicação. Organização de campanha, posicionamento e comunicação estratégica que transforma propostas em votos.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
              <MetricPill>Comunicação política desde 2008</MetricPill>
              <MetricPill>Equipe própria especializada</MetricPill>
              <MetricPill>Estratégias para 2026</MetricPill>
            </div>

            <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
              <CTAButton href="#contato" primary>Falar sobre meu projeto <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /></CTAButton>
              <CTAButton href="#contato" primary={false}>Solicitar diagnóstico</CTAButton>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 xl:grid-cols-3">
              {stats.map((item) => (
                <motion.div key={item.label} whileHover={{ y: -3 }} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur sm:rounded-3xl sm:p-5">
                  <div className="text-sm font-black uppercase text-yellow-300 sm:text-base md:text-lg">{item.value}</div>
                  <div className="mt-0.5 text-xs leading-5 text-zinc-300 sm:mt-1 sm:text-sm sm:leading-6">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Images */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-10 md:mt-0">
            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr] md:gap-5">
              <PhotoCard src={heroImg} alt="Foto principal" className="h-[320px] sm:h-[400px] md:min-h-[480px] lg:min-h-[540px]" label="EDNEY ESLLEY">
                <div className="flex h-full items-end p-5 sm:p-6">
                  <div className="max-w-xs">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-yellow-300 sm:text-xs sm:tracking-[0.22em]">Marketing e Política</div>
                    <div className="mt-2 text-xl font-black uppercase leading-[0.95] text-white sm:mt-3 sm:text-2xl md:text-3xl">
                      Direção estratégica para campanhas que precisam vencer.
                    </div>
                  </div>
                </div>
              </PhotoCard>
              <div className="grid gap-4 md:gap-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:rounded-[2rem] sm:p-6">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-yellow-300 sm:text-xs sm:tracking-[0.22em]">Vitória com direção</div>
                  <h3 className="mt-3 text-lg font-black uppercase leading-tight text-white sm:mt-4 sm:text-xl md:text-2xl">Comunicação estratégica que transforma proposta em voto.</h3>
                  <p className="mt-3 text-xs leading-6 text-zinc-300 sm:mt-4 sm:text-sm sm:leading-7">Página organizada para uma leitura mais política, mais direta e mais comercial.</p>
                </div>
                <PhotoCard src={editorialImg} alt="Retrato complementar" className="h-[180px] sm:h-[220px] md:min-h-[250px]" label="Posicionamento" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* ──── Sobre ──── */}
      <section id="sobre" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-14">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[0.94fr_1.06fr]">
          <div>
            <SectionTitle
              eyebrow="Sobre"
              title="A sua campanha com quem realmente entende do assunto"
              desc="Sou estrategista e marketeiro político, especialista em comunicação política e institucional. Atuo desde 2008, oferecendo construção de posicionamento eleitoral, fortalecimento de imagem, direção de comunicação e organização de operações políticas."
            />
            <motion.p {...fadeUp} className="mt-5 max-w-2xl text-sm leading-7 text-zinc-300 md:leading-8 md:text-base">
              Minha trajetória foi construída no campo real da política. Atualmente localizado na região Norte do Ceará, minha atuação não se prende a território: vou onde o projeto exige presença, comando e resultado.
            </motion.p>
            <motion.p {...fadeUp} className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300 md:mt-4 md:leading-8 md:text-base">
              Meu objetivo é trazer resultados de forma individual, com base nas suas necessidades e de acordo com o momento político, o território e a estrutura disponível.
            </motion.p>
          </div>

          <motion.div {...fadeUp} className="space-y-4 sm:space-y-5">
            <PhotoCard src={mapaImg} alt="Mapa do Ceará" className="h-[260px] sm:h-[340px] md:min-h-[420px]" label="Atuação no Ceará" />
            <div className="rounded-2xl border border-yellow-400/20 bg-zinc-950/80 p-5 sm:rounded-[1.75rem] md:p-8">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-yellow-300 sm:text-xs sm:tracking-[0.22em]">Atuação</div>
              <h3 className="mt-3 text-xl font-black uppercase leading-tight text-white sm:mt-4 md:text-2xl lg:text-3xl">
                Sua campanha com quem conhece a política na prática.
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300 sm:mt-4 md:leading-8">
                Trabalhos em cidades como Sobral, Mucambo, Graça, Hidrolândia, Santa Quitéria, Forquilha, Ubajara e outros contextos que exigem leitura política e capacidade de execução.
              </p>
              <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-3.5 text-sm font-semibold leading-7 text-yellow-100 sm:mt-5 sm:rounded-2xl sm:p-4">
                Ganha a eleição quem domina o que o povo sente; se você não controla sua narrativa, o adversário controla seus resultados.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── Diferenciais ──── */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16 md:px-10 md:pb-20 lg:px-14">
        <SectionTitle
          eyebrow="Diferenciais"
          title="Experiência de quase 20 anos à sua disposição"
          desc="Leitura política, execução, personalização e repertório para enfrentar disputa de verdade."
        />
        <motion.div {...staggerContainer} className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {diferenciais.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.05 }}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-yellow-400/20 hover:bg-white/[0.06] sm:rounded-[1.75rem] sm:p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black sm:h-12 sm:w-12 sm:rounded-2xl">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-black uppercase text-white sm:mt-4 sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-300 sm:mt-3">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ──── Serviços ──── */}
      <section id="servicos" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-14">
          <SectionTitle
            eyebrow="Áreas de atuação"
            title="Soluções sob medida para comunicação política."
            desc="Atendo projetos em formato de consultoria, assessoria, direção, coordenação ou operação completa."
          />

          <div className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm leading-7 text-yellow-100 sm:mt-8 sm:rounded-[1.75rem] sm:p-5">
            Área em destaque: <span className="font-semibold">{servicos[activeService].title}</span> — {servicos[activeService].desc}
          </div>

          <motion.div {...staggerContainer} className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {servicos.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeService === index;
              return (
                <motion.button key={item.title} type="button" {...fadeUp} transition={{ duration: 0.45, delay: index * 0.04 }} onClick={() => setActiveService(index)} className="text-left">
                  <div className={`group h-full rounded-2xl border p-5 transition hover:-translate-y-1 sm:rounded-[1.75rem] sm:p-6 ${
                    isActive ? "border-yellow-400/40 bg-white/[0.07]" : "border-white/10 bg-white/[0.04] hover:border-yellow-400/30 hover:bg-white/[0.06]"
                  }`}>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-lg shadow-yellow-500/20 sm:h-12 sm:w-12 sm:rounded-2xl">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-sm font-black uppercase leading-tight text-white sm:mt-5 sm:text-base md:text-lg">{item.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-zinc-300 sm:mt-3 sm:text-sm sm:leading-7">{item.desc}</p>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ──── Público-alvo ──── */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-300 text-black">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-2 md:gap-10 md:px-10 md:py-20 lg:px-14">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.22em]">
              📊 Público de atuação
            </div>
            <h2 className="mt-4 text-2xl font-black uppercase leading-[0.95] sm:mt-5 sm:text-3xl md:text-4xl lg:text-5xl">
              Projetos para quem precisa de comunicação profissional e resultados concretos.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-black/80 sm:mt-5 sm:text-base sm:leading-8">
              Pré-campanha, campanha, mandato, gestão pública, posicionamento e organização de comunicação com objetivo claro de resultado.
            </p>
            <div className="mt-5 sm:mt-6">
              <CTAButton href="#contato" primary className="bg-black text-yellow-300 hover:bg-black/80">
                Falar sobre meu projeto <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </CTAButton>
            </div>
          </motion.div>
          <motion.div {...staggerContainer} className="grid grid-cols-2 gap-2.5 content-start sm:gap-3">
            {publico.map((item) => (
              <motion.div key={item} {...fadeUp} className="rounded-xl border border-black/10 bg-white/50 px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] backdrop-blur sm:rounded-2xl sm:px-4 sm:py-4 sm:text-sm sm:tracking-[0.12em]">
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──── Cases ──── */}
      <section id="cases" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-14">
        <SectionTitle
          eyebrow="Cases"
          title="Experiência em cenários de disputa e virada política."
          desc="Participei de projetos em cidades como Quixadá, Sobral, Mucambo, Graça, Hidrolândia, Santa Quitéria, Forquilha e Ubajara."
        />

        <div className="mt-8 grid gap-5 md:mt-10 lg:grid-cols-[1.08fr_0.92fr]">
          {/* Featured case */}
          <div className="space-y-4 sm:space-y-5">
            <motion.div {...fadeUp}>
              <PhotoCard src={cases[0].img} alt={`Case ${cases[0].cidade}`} className="h-[280px] sm:h-[340px] md:min-h-[340px]" label="Case destaque">
                <div className="flex h-full items-end p-4 sm:p-6 md:p-8">
                  <div className="max-w-xl rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur sm:rounded-[1.5rem] sm:p-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300 sm:text-sm sm:tracking-[0.22em]">{cases[0].cidade}</div>
                    <p className="mt-2 text-xs leading-6 text-zinc-200 sm:mt-3 sm:text-sm sm:leading-7">{cases[0].resumo}</p>
                  </div>
                </div>
              </PhotoCard>
            </motion.div>
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              {cases.slice(1).map((item, index) => (
                <motion.div key={item.cidade} {...fadeUp} transition={{ duration: 0.45, delay: index * 0.05 }}>
                  <PhotoCard src={item.img} alt={`Case ${item.cidade}`} className="h-[240px] sm:h-[260px]" label="Case">
                    <div className="flex h-full items-end p-4 sm:p-5">
                      <div className="w-full rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur sm:rounded-[1.5rem] sm:p-5">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300 sm:text-sm sm:tracking-[0.22em]">{item.cidade}</div>
                        <p className="mt-2 text-xs leading-6 text-zinc-200 sm:mt-3 sm:text-sm sm:leading-7">{item.resumo}</p>
                      </div>
                    </div>
                  </PhotoCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-5">
            <motion.div {...fadeUp} className="rounded-2xl border border-yellow-400/20 bg-zinc-950/90 p-5 sm:rounded-[2rem] md:p-8">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-yellow-300 sm:text-xs sm:tracking-[0.22em]">Resultados em disputa</div>
              <h3 className="mt-3 text-xl font-black uppercase leading-tight text-white sm:mt-4 md:text-2xl lg:text-3xl">
                Cases com peso visual e leitura rápida.
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300 sm:mt-4 md:leading-8">
                Ajustei a landing para que os cases tenham presença visual própria e não pareçam apenas cartões de texto.
              </p>
            </motion.div>
            <motion.div {...fadeUp}>
              <PhotoCard src={editorialImg} alt="Editorial" className="h-[200px] sm:h-[260px] md:min-h-[280px]" label="Experiência prática" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── Repertório ──── */}
      <SectionDivider />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-14">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-5 sm:space-y-6">
            <SectionTitle
              eyebrow="Atualização e repertório"
              title="Experiência de campo com visão eleitoral."
              desc="Mantenho formação contínua no mercado político, com foco em estratégia eleitoral, tráfego pago, narrativa e posicionamento."
            />
            <motion.p {...fadeUp} className="max-w-2xl text-sm leading-7 text-zinc-300 md:leading-8 md:text-base">
              Participo de feiras, congressos e ambientes de imersão no Brasil e no exterior, acompanhando as mudanças que impactam a comunicação pública.
            </motion.p>
            <motion.div {...staggerContainer} className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {selos.map((item) => (
                <motion.div key={item} {...fadeUp} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-100 sm:rounded-2xl sm:px-4 sm:py-4 sm:text-sm sm:tracking-[0.12em]">
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 p-4 sm:rounded-[2rem] sm:p-6 md:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/10 via-transparent to-transparent" />
            <div className="relative grid gap-4 sm:gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-3 sm:space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:rounded-[1.5rem] sm:p-5">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-yellow-300 sm:text-xs sm:tracking-[0.22em]">Repertório</div>
                  <p className="mt-2 text-xs leading-6 text-zinc-300 sm:mt-3 sm:text-sm sm:leading-7">Atualização permanente e aplicação prática do que move o mercado eleitoral.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:rounded-[1.5rem] sm:p-5">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-yellow-300 sm:text-xs sm:tracking-[0.22em]">Campo</div>
                  <p className="mt-2 text-xs leading-6 text-zinc-300 sm:mt-3 sm:text-sm sm:leading-7">Vivência real em campanhas, gestões e operações de comunicação política.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:rounded-[1.5rem] sm:p-5">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-yellow-300 sm:text-xs sm:tracking-[0.22em]">Visão eleitoral</div>
                  <p className="mt-2 text-xs leading-6 text-zinc-300 sm:mt-3 sm:text-sm sm:leading-7">Estratégia, tráfego e narrativa conectados ao objetivo de voto.</p>
                </div>
              </div>
              <PhotoCard src={portraitImg} alt="Imagem de apoio" className="h-[250px] sm:h-[350px] lg:min-h-[430px]" label="Imagem principal" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── Equipe ──── */}
      <SectionDivider />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-14">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Equipe"
              title="Equipe própria com consistência, velocidade e padrão."
              desc="Conto com equipe própria de produção e comunicação, preparada para atender projetos com agilidade e padrão profissional."
            />
            <motion.p {...fadeUp} className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 md:leading-8">
              Isso permite assumir desde consultorias e direções até operações completas de campanha, audiovisual, cobertura e posicionamento.
            </motion.p>
          </div>
          <motion.div {...fadeUp} className="grid gap-4 sm:gap-5 md:grid-cols-2">
            <PhotoCard src={heroImg} alt="Equipe" className="h-[260px] sm:h-[340px] md:min-h-[380px]" label="Equipe própria" />
            <div className="grid gap-4 sm:gap-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:rounded-[1.75rem] sm:p-6">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-yellow-300 sm:text-xs sm:tracking-[0.22em]">Consistência</div>
                <p className="mt-2 text-xs leading-6 text-zinc-300 sm:mt-3 sm:text-sm sm:leading-7">Alinhamento, velocidade e padrão profissional para campanhas e gestão pública.</p>
              </div>
              <PhotoCard src={editorialImg} alt="Operação" className="h-[140px] sm:h-[180px]" label="Operação" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── Depoimentos ──── */}
      <section id="depoimentos" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-14">
          <div className="mb-8 max-w-3xl sm:mb-10">
            <SectionTitle
              eyebrow="Depoimentos"
              title="Confiança construída na prática."
              desc="Percepção de quem viu a comunicação sair do improviso para a direção estratégica."
            />
          </div>
          <motion.div {...fadeUp}>
            <TestimonialsCarousel />
          </motion.div>
        </div>
      </section>

      {/* ──── FAQ ──── */}
      <section id="faq" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-14">
          <div className="grid gap-8 md:gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionTitle
                eyebrow="Perguntas frequentes"
                title="Dúvidas sobre comunicação política."
                desc="As perguntas mais comuns de pré-candidatos, lideranças e equipes de comunicação."
              />
              <motion.div {...fadeUp} className="mt-5 sm:mt-6">
                <CTAButton href="#contato" primary>
                  Ainda tem dúvidas? Fale comigo <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </CTAButton>
              </motion.div>
            </div>
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* ──── Contato ──── */}
      <section id="contato" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-14">
          <div className="grid gap-6 md:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div {...fadeUp} className="relative overflow-hidden rounded-2xl border border-yellow-400/20 bg-gradient-to-br from-[#171717] via-[#0d0d0d] to-[#050505] p-6 sm:rounded-[2.25rem] sm:p-8 md:p-12">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl sm:h-48 sm:w-48" />
              <div className="absolute -bottom-16 left-0 h-48 w-48 rounded-full bg-yellow-400/10 blur-3xl sm:h-56 sm:w-56" />
              <div className="relative z-10">
                <Eyebrow>Diagnóstico estratégico</Eyebrow>
                <h2 className="mt-4 max-w-4xl text-2xl font-black uppercase leading-[0.95] text-white sm:mt-5 sm:text-3xl md:text-4xl lg:text-5xl">
                  Sua comunicação precisa de direção para enfrentar disputa de verdade?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:mt-5 md:text-base md:leading-8">
                  Construo o trabalho conforme a necessidade real de cada projeto — pré-campanha, campanha, gestão, tráfego pago ou enfrentamento de crise.
                </p>
                <div className="mt-6 grid gap-3 grid-cols-3 sm:mt-8 sm:gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:rounded-2xl sm:p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-300 sm:h-10 sm:w-10 sm:rounded-xl">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-400 sm:mt-3 sm:text-xs sm:tracking-[0.16em]">WhatsApp</div>
                    <div className="mt-0.5 text-xs font-semibold text-white sm:mt-1 sm:text-sm">Atendimento rápido</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:rounded-2xl sm:p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-300 sm:h-10 sm:w-10 sm:rounded-xl">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-400 sm:mt-3 sm:text-xs sm:tracking-[0.16em]">Briefing</div>
                    <div className="mt-0.5 text-xs font-semibold text-white sm:mt-1 sm:text-sm">Recebimento organizado</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:rounded-2xl sm:p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-300 sm:h-10 sm:w-10 sm:rounded-xl">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-400 sm:mt-3 sm:text-xs sm:tracking-[0.16em]">Atuação</div>
                    <div className="mt-0.5 text-xs font-semibold text-white sm:mt-1 sm:text-sm">Ceará e nacional</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── Footer ──── */}
      <Footer />

      {/* ──── Floating Buttons ──── */}
      <a
        href="#contato"
        className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-1.5 rounded-full bg-yellow-400 px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.14em] text-black shadow-2xl shadow-yellow-500/20 transition hover:-translate-y-1 hover:bg-yellow-300 sm:bottom-5 sm:right-5 sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.2em]"
      >
        Diagnóstico
      </a>

      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#topo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-16 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-white backdrop-blur transition hover:bg-white/[0.14] sm:bottom-20 sm:right-5 sm:h-11 sm:w-11"
            aria-label="Voltar ao topo"
          >
            ↑
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
