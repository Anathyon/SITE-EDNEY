import { motion } from "framer-motion";
import {
  MessageCircle,
  Globe,
} from "lucide-react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LeadForm } from "../components/LeadForm";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";
import { FAQAccordion } from "../components/FAQAccordion";
import {
  Eyebrow,
  SectionTitle,
  PhotoCard,
  MetricPill,
  CTAButton,
  SectionDivider,
} from "../components/ui";

import { fadeUp } from "../animations";
import { useBreakpoint } from "../hooks/useBreakpoint";
import {
  diferenciais,
  stats,
  servicos,
  depoimentos,
  faqData,
  heroImg,
  editorialImg,
  portraitImg,
  mapaImg,
} from "../data/content";

import { type CardItem, type ServiceItem } from "../data/content";

export default function LandingPage() {
  const bp = useBreakpoint();

  // Responsive Styles
  const sectionPadding = bp === "none" ? "64px 16px" :
                         bp === "sm"   ? "80px 24px" :
                         bp === "md"   ? "96px 40px" :
                                         "120px 56px";
  
  const containerMarginTop = bp === "none" ? "48px" : "64px";
  const gridGap = bp === "none" ? "24px" : "32px";

  return (
    <div className="min-h-screen bg-black text-zinc-400 selection:bg-yellow-400/30 selection:text-yellow-200">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section 
          id="topo" 
          className="relative flex min-h-[90vh] items-center overflow-hidden" 
          style={{ padding: bp === "none" ? "40px 16px" : sectionPadding }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(250,204,21,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(250,204,21,0.08),transparent_40%)]" />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="container relative z-10 mx-auto max-w-7xl">
            <div 
              className="grid items-center lg:grid-cols-2"
              style={{ gap: bp === "none" ? "40px" : "64px" }}
            >
              <motion.div {...fadeUp} className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <Eyebrow>Marketing Político & Estratégia</Eyebrow>
                <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl">
                  Vença a <br />
                  <span className="text-yellow-400">narrativa.</span> <br />
                  Conquiste o <br />
                  <span className="text-yellow-400">voto.</span>
                </h1>
                <p className="mt-8 max-w-lg text-lg leading-relaxed text-zinc-300">
                  Direção de comunicação e estratégia digital para candidatos e
                  mandatos que buscam relevância, autoridade e vitória nas urnas.
                </p>
                <div 
                  className="mt-10 flex flex-col justify-center sm:flex-row lg:justify-start" 
                  style={{ gap: "16px", width: bp === "none" ? "100%" : "auto" }}
                >
                  <CTAButton href="#contato" primary={true}>
                    Quero vencer minha eleição
                  </CTAButton>
                  <CTAButton href="#sobre" primary={false}>
                    Conhecer metodologia
                  </CTAButton>
                </div>
                
                <div className="mt-12 flex items-center justify-center lg:justify-start" style={{ gap: "12px" }}>
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i: number) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-black bg-zinc-800" />
                    ))}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                    <span className="text-yellow-400">+12 anos</span> de experiência
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative hidden lg:block"
              >
                <div className="absolute -inset-4 rounded-4xl bg-yellow-400/20 blur-3xl" />
                <PhotoCard src={heroImg} alt="Edney Eslley" className="h-[640px] w-full" label="Estrategista Chefe" />
              </motion.div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* METRICS / STATS */}
        <section 
          className="bg-black/50"
          style={{ padding: bp === "none" ? "40px 16px" : "64px 24px" }}
        >
          <div className="container mx-auto max-w-7xl">
            <div 
              className="grid grid-cols-2 justify-items-center lg:grid-cols-4"
              style={{ gap: bp === "none" ? "24px" : "32px" }}
            >
              {stats.map((stat, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="text-2xl font-black text-white sm:text-4xl md:text-5xl">{stat.value}</div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-500 sm:text-xs">{stat.label}</div>
                  {stat.desc && <p className="mt-3 text-xs leading-relaxed text-zinc-500 sm:text-sm">{stat.desc}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ABOUT / METODOLOGIA */}
        <section 
          id="sobre" 
          className="relative overflow-hidden" 
          style={{ padding: sectionPadding }}
        >
          <div className="container relative z-10 mx-auto max-w-7xl">
            <div 
              className="grid items-center lg:grid-cols-2"
              style={{ gap: bp === "none" ? "48px" : "80px" }}
            >
              <div className="order-2 lg:order-1">
                <PhotoCard src={portraitImg} alt="Edney Eslley Portrait" className="aspect-4/5 w-full lg:aspect-auto lg:h-[700px]" />
              </div>
              
              <div className="order-1 lg:order-2">
                <SectionTitle
                  eyebrow="Quem Somos"
                  title="A mente por trás das estratégias de vitória"
                  desc="Edney Eslley é especialista em comunicação política e marketing eleitoral, com foco em construção de autoridade e gestão de crise."
                />
                
                <div 
                  className="mt-10 flex flex-col"
                  style={{ gap: bp === "none" ? "24px" : "32px" }}
                >
                  {diferenciais.map((f: CardItem, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                      style={{ gap: "16px" }}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/5 text-yellow-400">
                        <f.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{f.title}</h4>
                        <p className="mt-2 text-sm leading-7 text-zinc-400">{f.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div 
                  className="mt-12"
                  style={{ paddingTop: "32px" }}
                >
                  <CTAButton href="#contato" primary={true}>Falar com Edney</CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICOS / ATUACAO */}
        <section 
          id="servicos" 
          className="bg-zinc-950" 
          style={{ padding: sectionPadding }}
        >
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col items-center text-center">
              <SectionTitle
                eyebrow="Nossa Atuação"
                title="Estratégia completa para o seu sucesso"
                desc="Entregamos muito mais que posts. Entregamos uma máquina de comunicação política eficiente e profissional."
              />
            </div>

            <div 
              className="grid md:grid-cols-2 lg:grid-cols-3"
              style={{ gap: gridGap, marginTop: containerMarginTop }}
            >
              {servicos.map((s: ServiceItem, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 p-8 transition-all hover:border-yellow-400/30 hover:bg-yellow-400/5 sm:p-10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-300 transition-transform duration-500 group-hover:scale-110">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-8 text-xl font-black uppercase text-white">{s.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">{s.desc}</p>
                  <div className="mt-8 flex flex-wrap" style={{ gap: "8px" }}>
                    {s.tags.map((tag: string) => (
                      <MetricPill key={tag}>{tag}</MetricPill>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CASES / MAPA */}
        <section 
          id="cases" 
          className="relative overflow-hidden bg-black" 
          style={{ padding: sectionPadding }}
        >
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col items-center text-center">
              <SectionTitle
                eyebrow="Presença Estratégica"
                title="Consolidação e resultados no Ceará"
                desc="Nossa base de atuação é sólida e reconhecida pela eficiência em cenários desafiadores."
              />
            </div>

            <div 
              className="grid items-center lg:grid-cols-2"
              style={{ gap: bp === "none" ? "40px" : "64px", marginTop: containerMarginTop }}
            >
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, rotate: -5 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  className="relative z-10 overflow-hidden rounded-4xl border border-white/10 bg-zinc-900 shadow-2xl"
                >
                  <img src={editorialImg} alt="Cases editorial" className="w-full grayscale transition duration-700 hover:grayscale-0" />
                </motion.div>
                <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-yellow-400/20 blur-2xl" />
              </div>

              <div className="relative flex items-center justify-center">
                <img src={mapaImg} alt="Mapa Ceará" className="mx-auto max-w-full opacity-40 brightness-150 grayscale invert" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="text-5xl font-black text-white sm:text-7xl">60+</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-[0.3em] text-yellow-400 sm:text-sm">Municípios impactados</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section 
          id="depoimentos" 
          className="bg-zinc-950" 
          style={{ padding: sectionPadding }}
        >
          <div className="container mx-auto max-w-5xl">
            <div className="mb-14 flex flex-col items-center text-center">
              <Eyebrow>Depoimentos</Eyebrow>
              <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-4xl md:text-5xl">O que dizem os líderes</h2>
            </div>
            
            <TestimonialsCarousel items={depoimentos.map(d => ({
              content: d.texto,
              author: d.nome,
              role: d.cargo,
              avatar: portraitImg // Fallback for avatar
            }))} />
          </div>
        </section>

        {/* FAQ */}
        <section 
          id="faq" 
          className="bg-black" 
          style={{ padding: sectionPadding }}
        >
          <div className="container mx-auto max-w-4xl">
            <div className="mb-14 flex flex-col items-center text-center">
              <SectionTitle
                eyebrow="FAQ"
                title="Dúvidas Frequentes"
              />
            </div>
            <FAQAccordion items={faqData.map(f => ({
              question: f.pergunta,
              answer: f.resposta
            }))} />
          </div>
        </section>

        {/* CONTACT / LEAD FORM */}
        <section 
          id="contato" 
          className="relative overflow-hidden bg-zinc-950" 
          style={{ padding: sectionPadding }}
        >
          {/* Background Decor */}
          <div className="absolute left-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.06),transparent_50%)]" />

          <div className="container relative z-10 mx-auto max-w-7xl">
            <div 
              className="grid items-start lg:grid-cols-2"
              style={{ gap: bp === "none" ? "48px" : "80px" }}
            >
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <Eyebrow>Pronto para o próximo passo?</Eyebrow>
                <h2 className="mt-6 text-4xl font-black uppercase leading-tight text-white sm:text-6xl">Sua vitória começa <span className="text-yellow-400">aqui.</span></h2>
                <p className="mt-8 text-lg leading-relaxed text-zinc-400">
                  Entre em contato agora para agendar um diagnóstico estratégico inicial. 
                  Analisamos seu cenário e desenhamos o caminho para o sucesso.
                </p>
                
                <div 
                  className="mt-12 flex flex-col items-center lg:items-start"
                  style={{ gap: "24px" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/4 text-yellow-400">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                      <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Atendimento via WhatsApp</div>
                      <div className="text-lg font-bold text-white">(88) 99341-3974</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/4 text-yellow-400">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                      <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Localização física</div>
                      <div className="text-lg font-bold text-white">Sobral, Ceará</div>
                    </div>
                  </div>
                </div>
              </div>

              <LeadForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
