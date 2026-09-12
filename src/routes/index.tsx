import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Asterisk } from "lucide-react";

import nusaImage from "@/assets/project-nusa.jpg";
import ruangImage from "@/assets/project-ruang.jpg";
import svaraImage from "@/assets/project-svara.jpg";

const projects = [
  {
    number: "01",
    title: "Svara",
    discipline: "Product design · 2026",
    image: svaraImage,
    alt: "Svara wellness application shown on two phones",
  },
  {
    number: "02",
    title: "Nusa",
    discipline: "Digital experience · 2025",
    image: nusaImage,
    alt: "Nusa cultural travel website shown on a laptop and phone",
  },
  {
    number: "03",
    title: "Ruang",
    discipline: "Brand & product · 2025",
    image: ruangImage,
    alt: "Ruang community platform shown on a tablet and phone",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gema Eka — Digital Designer" },
      {
        name: "description",
        content:
          "Portfolio of Gema Eka, an independent digital designer creating thoughtful identities and digital experiences.",
      },
      { property: "og:title", content: "Gema Eka — Digital Designer" },
      {
        property: "og:description",
        content: "Selected work and practice of independent digital designer Gema Eka.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function WaterBackground() {
  return (
    <div className="water" aria-hidden="true">
      <div className="water-rays" />
      <div className="water-caustics" />
      <div className="water-grain" />
    </div>
  );
}

function Index() {
  return (
    <main className="relative isolate overflow-hidden bg-background text-foreground">
      <WaterBackground />

      <header className="fixed inset-x-0 top-0 z-50 grid grid-cols-[minmax(0,1fr)_auto] items-center border-b border-border/50 px-5 py-5 backdrop-blur-md md:px-10 lg:px-14">
        <a href="#top" className="min-w-0 font-display text-sm font-semibold uppercase tracking-normal">
          Gema Eka<span className="text-accent">.</span>
        </a>
        <nav aria-label="Main navigation" className="flex shrink-0 items-center gap-5 text-[0.68rem] uppercase md:gap-8">
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#work">Work</a>
          <a className="nav-link" href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="relative flex min-h-[96svh] flex-col justify-end px-5 pb-9 pt-28 md:px-10 md:pb-12 lg:px-14">
        <div className="mb-auto flex items-center gap-2 pt-20 text-[0.65rem] uppercase text-muted-foreground md:pt-24">
          <span className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
          Independent designer · Indonesia
        </div>

        <h1 className="max-w-[15ch] font-display text-[clamp(3.5rem,10vw,9.5rem)] font-medium leading-[0.84]">
          Digital ideas,
          <br />made <span className="font-serif italic text-accent">tangible.</span>
        </h1>

        <div className="mt-10 grid gap-7 border-t border-border/60 pt-5 text-xs uppercase md:grid-cols-[1fr_1fr_auto] md:items-end">
          <p className="max-w-56 leading-relaxed text-muted-foreground">
            Design systems, identities and experiences for people with something meaningful to say.
          </p>
          <p className="text-muted-foreground md:text-center">Selected work · 2024—26</p>
          <a href="#work" className="group inline-flex items-center gap-3 justify-self-start md:justify-self-end">
            Explore work
            <span className="grid size-9 place-items-center rounded-full border border-border transition-colors group-hover:bg-foreground group-hover:text-background">
              <ArrowDown className="size-3.5" aria-hidden="true" />
            </span>
          </a>
        </div>
      </section>

      <section id="about" className="relative border-y border-border/60 bg-surface/70 px-5 py-24 backdrop-blur-sm md:px-10 md:py-36 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_2.2fr]">
          <div className="flex items-start gap-2 text-[0.68rem] uppercase text-muted-foreground">
            <Asterisk className="size-3.5 text-accent" aria-hidden="true" />
            About the practice
          </div>
          <div>
            <p className="max-w-5xl font-display text-[clamp(2rem,4.5vw,4.8rem)] leading-[1.02]">
              I turn complex stories into clear, characterful digital experiences — balancing strategy, craft, and a little bit of wonder.
            </p>
            <div className="mt-14 grid gap-8 border-t border-border/60 pt-6 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2">
              <p>Working independently and with teams across brand strategy, product design, art direction, and creative development.</p>
              <p>Based in Indonesia. Available for selected collaborations with studios, founders, and cultural organizations worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="relative py-24 md:py-36">
        <div className="mb-12 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 px-5 md:px-10 lg:px-14">
          <div className="min-w-0">
            <p className="mb-3 text-[0.68rem] uppercase text-accent">Selected projects</p>
            <h2 className="font-display text-[clamp(2.7rem,7vw,7rem)] leading-none">Recent work</h2>
          </div>
          <span className="shrink-0 pb-2 text-xs text-muted-foreground">03 / 03</span>
        </div>

        <div className="project-rail" role="region" aria-label="Auto-scrolling selected projects" tabIndex={0}>
          <div className="project-track">
            {[...projects, ...projects].map((project, index) => (
              <article className="project-card group" key={`${project.title}-${index}`} aria-hidden={index >= projects.length}>
                <div className="overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={index < projects.length ? project.alt : ""}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-4 border-t border-border pt-4">
                  <span className="text-[0.65rem] text-muted-foreground">{project.number}</span>
                  <div className="min-w-0">
                    <h3 className="truncate font-display text-2xl md:text-3xl">{project.title}</h3>
                    <p className="mt-1 text-[0.65rem] uppercase text-muted-foreground">{project.discipline}</p>
                  </div>
                  <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-5 px-5 text-[0.65rem] uppercase text-muted-foreground md:px-10 lg:px-14">Drag to explore · pauses on hover</p>
      </section>

      <footer id="contact" className="relative bg-accent px-5 pb-8 pt-20 text-accent-foreground md:px-10 md:pt-28 lg:px-14">
        <p className="text-[0.68rem] uppercase">Have a project in mind?</p>
        <a href="mailto:hello@gemaeka.com" className="group mt-8 flex items-end justify-between gap-4 border-b border-accent-foreground/40 pb-5">
          <span className="font-display text-[clamp(3rem,9vw,9rem)] leading-none">Let’s talk.</span>
          <ArrowUpRight className="mb-2 size-8 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:size-12" aria-hidden="true" />
        </a>
        <div className="mt-16 grid gap-8 text-[0.68rem] uppercase sm:grid-cols-3">
          <p>Gema Eka<br />Independent digital designer</p>
          <div className="flex gap-6 sm:justify-center">
            <a href="#top" className="underline-offset-4 hover:underline">Instagram</a>
            <a href="#top" className="underline-offset-4 hover:underline">LinkedIn</a>
          </div>
          <p className="sm:text-right">© 2026<br />All rights reserved</p>
        </div>
      </footer>
    </main>
  );
}