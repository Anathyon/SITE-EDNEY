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

import { fadeUp, fadeUpVariants, staggerContainer, scaleInVariants } from "../animations";
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
  const sectionPadding = bp === "none" ? "80px 20px" :
                         bp === "sm"   ? "100px 32px" :
                         bp === "md"   ? "120px 48px" :
                                         "160px 64px";
  
  const containerMarginTop = bp === "none" ? "64px" : "80px";
  const gridGap = bp === "none" ? "32px" : "48px";

  return (
    <div className="min-h-screen bg-black text-zinc-400 selection:bg-yellow-400/30 selection:text-yellow-200 w-full">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section 
          id="topo" 
          className="relative flex items-center overflow-hidden" 
          style={{ padding: bp === "none" ? "40px 16px" : sectionPadding }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(250,204,21,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(250,204,21,0.08),transparent_40%)]" />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="container relative z-10" style={{ marginLeft: "auto", marginRight: "auto" }}>
            <div 
              className="grid items-center lg:grid-cols-2"
              style={{ gap: bp === "none" ? "40px" : "64px" }}
            >
              <motion.div {...fadeUp} className="flex flex-col items-center text-center">
                <Eyebrow>Marketing Político & Estratégia</Eyebrow>
                <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl">
                  Vença a <br />
                  <span className="text-yellow-400">narrativa.</span> <br />
                  Conquiste o <br />
                  <span className="text-yellow-400">resultado.</span>
                </h1>
                <p className="text-lg leading-relaxed text-zinc-300" style={{ marginTop: "2rem" }}>
                  Quando a disputa eleitoral aperta e cada voto conta, 
                  eu assumo o comando da sua comunicação estratégica.
                </p>
                <div 
                  className="flex flex-col justify-center sm:flex-row" 
                  style={{ gap: "16px", width: bp === "none" ? "100%" : "auto", marginTop: "2.5rem" }}
                >
                  <CTAButton href="#contato" primary={true}>
                    Quero vencer minha eleição
                  </CTAButton>
                  <CTAButton href="#sobre" primary={false}>
                    Conhecer metodologia
                  </CTAButton>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start" style={{ gap: "12px", marginTop: "3rem" }}>
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i: number) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-black bg-zinc-800" />
                    ))}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                    Atuação desde <span className="text-yellow-400">2008</span>
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
                <PhotoCard 
                  src={heroImg} 
                  alt="Edney Eslley" 
                  className="h-[640px] w-full" 
                  label="Estrategista Chefe" 
                  objectPosition="top"
                />
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
          <div className="container max-w-7xl" style={{ marginLeft: "auto", marginRight: "auto" }}>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-2 justify-items-center lg:grid-cols-4"
              style={{ gap: bp === "none" ? "24px" : "32px" }}
            >
              {stats.map((stat, i: number) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  className="flex flex-col items-center text-center"
                >
                  <div className="text-2xl font-black text-white sm:text-4xl md:text-5xl">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-500 sm:text-xs" style={{ marginTop: "8px" }}>{stat.label}</div>
                  {stat.desc && <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm" style={{ marginTop: "12px" }}>{stat.desc}</p>}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <SectionDivider />

        {/* ABOUT / METODOLOGIA */}
        <section 
          id="sobre" 
          className="relative overflow-hidden" 
          style={{ padding: sectionPadding }}
        >
          <div className="container relative z-10 max-w-7xl" style={{ marginLeft: "auto", marginRight: "auto" }}>
            <div className="flex flex-col items-center text-center">
              <SectionTitle
                eyebrow="Quem Somos"
                title="A mente por trás das estratégias de vitória"
                desc="Edney Eslley é especialista em comunicação política e marketing eleitoral, com foco em construção de autoridade e gestão de crise."
              />
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              style={{ marginTop: "64px" }}
            >
              {diferenciais.map((f: CardItem, i: number) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  className="flex flex-col items-center text-center overflow-hidden rounded-3xl border border-white/5 bg-white/2 p-8 transition-all hover:border-yellow-400/20 hover:bg-yellow-400/5 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/5 text-yellow-400 transition-transform duration-500 group-hover:scale-110">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <div style={{ marginTop: "24px" }}>
                    <h4 className="text-lg font-bold text-white">{f.title}</h4>
                    <p className="text-sm leading-7 text-zinc-400" style={{ marginTop: "12px" }}>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div 
              className="grid items-center lg:grid-cols-2"
              style={{ gap: bp === "none" ? "48px" : "80px", marginTop: "80px" }}
            >
              <div className="relative">
                <PhotoCard 
                  src={portraitImg} 
                  alt="Edney Eslley Portrait" 
                  className="aspect-4/5 w-full lg:aspect-auto lg:h-[600px]" 
                  objectPosition="top"
                />
                <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-yellow-400/20 blur-3xl opacity-50" />
              </div>
              
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h3 className="text-2xl font-black uppercase text-white sm:text-3xl">Experiência que gera <span className="text-yellow-400">resultado.</span></h3>
                <p className="mt-6 text-sm leading-8 text-zinc-400 sm:text-base">
                  Com anos de atuação direta em campanhas de diferentes escalas, nossa metodologia é testada no calor do processo eleitoral. 
                  Não entregamos apenas peças, entregamos a segurança de uma direção estratégica que entende o jogo político.
                </p>
                <div 
                  className="flex justify-center"
                  style={{ paddingTop: "32px", marginTop: "32px" }}
                >
                  <CTAButton href="#contato" primary={true}>Falar com Edney</CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* SERVICOS / ATUACAO */}
        <section 
          id="servicos" 
          className="bg-zinc-950" 
          style={{ padding: sectionPadding }}
        >
          <div className="container max-w-7xl" style={{ marginLeft: "auto", marginRight: "auto" }}>
            <div className="flex flex-col items-center text-center">
              <SectionTitle
                eyebrow="Nossa Atuação"
                title="Estratégia completa para o seu sucesso"
                desc="Entregamos muito mais que posts. Entregamos uma máquina de comunicação política eficiente e profissional."
              />
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.1 }}
              className="grid md:grid-cols-2 lg:grid-cols-3"
              style={{ gap: gridGap, marginTop: containerMarginTop }}
            >
              {servicos.map((s: ServiceItem, i: number) => (
                <motion.div
                  key={i}
                  variants={scaleInVariants}
                  className="group relative flex flex-col items-center text-center overflow-hidden rounded-4xl border border-white/10 bg-white/4 transition-all hover:border-yellow-400/30 hover:bg-yellow-400/5"
                  style={{ padding: bp === "none" ? "32px" : "40px" }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-300 transition-transform duration-500 group-hover:scale-110">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-black uppercase text-white" style={{ marginTop: "32px" }}>{s.title}</h3>
                  <p className="text-sm leading-7 text-zinc-400" style={{ marginTop: "16px" }}>{s.desc}</p>
                  <div className="flex flex-wrap justify-center" style={{ gap: "8px", marginTop: "32px" }}>
                    {s.tags.map((tag: string) => (
                      <MetricPill key={tag}>{tag}</MetricPill>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CASES / MAPA */}
        <section 
          id="cases" 
          className="relative overflow-hidden bg-black" 
          style={{ padding: sectionPadding }}
        >
          <div className="container max-w-7xl" style={{ marginLeft: "auto", marginRight: "auto" }}>
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
              <div className="relative flex justify-center">
                <motion.div
                  {...fadeUp}
                  className="relative z-10 w-full overflow-hidden rounded-4xl border border-white/10 bg-zinc-900 shadow-2xl lg:max-w-[440px]"
                >
                  <img 
                    src={editorialImg} 
                    alt="Cases editorial" 
                    className="aspect-4/5 h-full w-full object-cover object-top grayscale transition duration-700 hover:grayscale-0" 
                  />
                </motion.div>
                <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-yellow-400/20 blur-2xl opacity-50" />
              </div>

              <div className="relative flex items-center justify-center">
                <img 
                  src={mapaImg} 
                  alt="Mapa Ceará" 
                  className="max-w-[85%] opacity-90 transition-all duration-500 hover:scale-105" 
                  style={{ marginLeft: "auto", marginRight: "auto" }} 
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="text-5xl font-black text-white sm:text-7xl drop-shadow-2xl">60+</div>
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-400 sm:text-sm drop-shadow-md" style={{ marginTop: "8px" }}>Municípios impactados</div>
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
          <div className="container max-w-5xl" style={{ marginLeft: "auto", marginRight: "auto" }}>
            <motion.div 
              {...fadeUp}
              className="flex flex-col items-center text-center" 
              style={{ marginBottom: "56px" }}
            >
              <Eyebrow>Depoimentos</Eyebrow>
              <h2 className="text-3xl font-black uppercase text-white sm:text-4xl md:text-5xl" style={{ marginTop: "16px" }}>O que dizem os líderes</h2>
            </motion.div>
            
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <TestimonialsCarousel items={depoimentos.map(d => ({
                content: d.texto,
                author: d.nome,
                role: d.cargo
              }))} />
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section 
          id="faq" 
          className="bg-black" 
          style={{ padding: sectionPadding }}
        >
          <div className="container max-w-4xl" style={{ marginLeft: "auto", marginRight: "auto" }}>
            <motion.div 
              {...fadeUp}
              className="flex flex-col items-center text-center" 
              style={{ marginBottom: "56px" }}
            >
              <SectionTitle
                eyebrow="FAQ"
                title="Dúvidas Frequentes"
              />
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <FAQAccordion items={faqData.map(f => ({
                question: f.pergunta,
                answer: f.resposta
              }))} />
            </motion.div>
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

          <div className="container relative z-10 max-w-7xl" style={{ marginLeft: "auto", marginRight: "auto" }}>
            <div 
              className="grid items-start lg:grid-cols-2"
              style={{ gap: bp === "none" ? "48px" : "80px" }}
            >
              <motion.div 
                {...fadeUp}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <Eyebrow>Pronto para o próximo passo?</Eyebrow>
                <h2 className="text-4xl font-black uppercase leading-tight text-white sm:text-6xl" style={{ marginTop: "24px" }}>Sua vitória começa <span className="text-yellow-400">aqui.</span></h2>
                <p className="text-lg leading-relaxed text-zinc-400" style={{ marginTop: "32px" }}>
                  Entre em contato agora para agendar um diagnóstico estratégico inicial. 
                  Analisamos seu cenário e desenhamos o caminho para o sucesso.
                </p>
                
                <div className="flex flex-col items-center lg:items-start" style={{ marginTop: "48px", gap: "24px" }}>
                  <div className="flex items-center" style={{ gap: "16px" }}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/4 text-yellow-400">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Atendimento Direto</div>
                        <div className="text-lg font-bold text-white">(85) 99217-5196</div>
                    </div>
                  </div>
                  <div className="flex items-center" style={{ gap: "16px" }}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/4 text-yellow-400">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Localização física</div>
                        <div className="text-lg font-bold text-white">Ceará</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                <LeadForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
