import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Dribbble, Linkedin, Mail, Palette, Pin } from "lucide-react";

import avatarImage from "@/assets/gema-avatar.jpg";
import independenceImage from "@/assets/independence-elements.jpg";
import codingImage from "@/assets/coding-stickers.jpg";
import { Button } from "@/components/ui/button";

const roles = [
  {
    company: "Potara Studio",
    title: "Project Manager",
    details: [
      "Managed and tracked designer tasks and project schedules through Jira",
      "Provided creative direction and review based on design analysis and user experience principles",
      "Conducted product development research and requirement for business growth",
      "Led client communication across project kick-off, hand-off, and weekly progress updates",
    ],
  },
  {
    company: "Andara Rejo",
    title: "Product Designer",
    details: [
      "Mapped user journeys and translated research findings into clear product requirements",
      "Designed responsive interfaces and prototypes for customer-facing digital products",
      "Collaborated with developers to review implementation quality and interaction details",
      "Presented design rationale and progress updates to project stakeholders",
    ],
  },
  {
    company: "IdeaVer Agency",
    title: "Creative Project Lead",
    details: [
      "Coordinated multidisciplinary teams across branding, content, and digital campaigns",
      "Turned client briefs into practical schedules, deliverables, and creative direction",
      "Facilitated concept reviews and maintained quality across parallel workstreams",
      "Managed client feedback from discovery through final delivery",
    ],
  },
  {
    company: "Andara Rejo",
    title: "Visual Designer",
    details: [
      "Created visual systems and campaign assets for growing consumer brands",
      "Developed reusable design libraries for faster and more consistent production",
      "Supported user research and competitive reviews for new product ideas",
      "Prepared polished presentations and production-ready design hand-offs",
    ],
  },
];

const socialLinks = [
  { label: "gemaeka1@gmail.com", href: "mailto:gemaeka1@gmail.com", icon: Mail, tone: "social-gmail" },
  { label: "gemaeka", href: "https://dribbble.com/gemaeka", icon: Dribbble, tone: "social-dribbble" },
  { label: "@gemaeka", href: "https://contra.com/gemaeka", icon: Palette, tone: "social-contra" },
  { label: "gemaekashantip", href: "https://linkedin.com/in/gemaekashantip", icon: Linkedin, tone: "social-linkedin" },
  { label: "gemgemshi", href: "https://pinterest.com/gemgemshi", icon: Pin, tone: "social-pinterest" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gema Eka S. P. — Project Manager" },
      { name: "description", content: "Portfolio of Gema Eka S. P., project manager and designer focused on thoughtful digital products." },
      { property: "og:title", content: "Gema Eka S. P. — Project Manager" },
      { property: "og:description", content: "Work, projects, and contact details for project manager and designer Gema Eka S. P." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function FluidBackground() {
  return <div className="fluid-background" aria-hidden="true"><div className="fluid-ripple fluid-ripple-one" /><div className="fluid-ripple fluid-ripple-two" /></div>;
}

function Index() {
  const [activeRole, setActiveRole] = useState(0);
  const role = roles[activeRole] ?? roles[0];

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    window.location.href = `mailto:gemaeka1@gmail.com?subject=${encodeURIComponent(`Portfolio inquiry from ${name}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)}`;
  }

  return (
    <main className="relative isolate overflow-hidden bg-background text-foreground">
      <FluidBackground />

      <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4 md:top-7">
        <div className="flex items-center gap-2">
          <a href="#top" aria-label="Back to introduction" className="nav-avatar">
            <img src={avatarImage} alt="Gema Eka" width={1024} height={1024} />
          </a>
          <nav aria-label="Main navigation" className="nav-pill">
            <a href="#about">About</a><a href="#work">Work</a><a href="#project">Project</a>
          </nav>
        </div>
      </header>

      <a href="#contact" className="contact-float">Get in Touch !</a>

      <section id="top" className="frame-section flex items-center px-6 md:px-[5.3vw]">
        <div className="mt-14">
          <h1 className="text-[clamp(3rem,4vw,5rem)] font-normal leading-none">Gema Eka S. P.</h1>
          <p className="mt-6 text-[clamp(1.25rem,1.7vw,2rem)]">Project Manager</p>
        </div>
      </section>

      <section id="about" className="frame-section flex items-center px-6 md:px-[10vw]">
        <div className="w-full max-w-6xl">
          <h2 className="text-lg font-semibold">/Gema Eka</h2>
          <p className="mt-2 max-w-5xl text-base leading-snug md:text-xl">
            A passionate designer with management analysis, focused on user experience &amp; creating innovative solution through visual. I have great interest in research process, design thinking, and product management
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            {socialLinks.map(({ label, href, icon: Icon, tone }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={`social-pill ${tone}`}>
                <span className="social-icon"><Icon aria-hidden="true" /></span><span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="frame-section flex items-center px-6 md:px-[14vw]">
        <div className="grid w-full max-w-6xl gap-10 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-12">
          <div className="work-tabs" role="tablist" aria-label="Workplaces">
            {roles.map((item, index) => (
              <Button key={`${item.company}-${index}`} type="button" variant="ghost" role="tab" aria-selected={activeRole === index} onClick={() => setActiveRole(index)} className={`work-tab ${activeRole === index ? "is-active" : ""}`}>
                {item.company}
              </Button>
            ))}
          </div>
          <article className="min-w-0 animate-fade-in" key={activeRole} role="tabpanel">
            <h2 className="text-2xl font-semibold md:text-3xl"><span className="text-muted-foreground">{role?.title} @</span> {role?.company}</h2>
            <ul className="mt-4 space-y-2 text-base leading-snug text-muted-foreground md:text-xl">
              {role?.details.map((detail) => <li key={detail} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3"><span aria-hidden="true">›</span><span>{detail}</span></li>)}
            </ul>
          </article>
        </div>
      </section>

      <section id="project" className="project-section px-6 py-28 md:px-[11vw]">
        <div className="grid w-full max-w-[1250px] items-start gap-10 lg:grid-cols-[11rem_minmax(17rem,26rem)_12rem] lg:justify-between">
          <div className="project-menu lg:mt-16">
            <p className="font-medium text-foreground">Canva Element</p>
            <p>Independence Day</p><p>Tech Coding</p>
          </div>
          <div className="project-viewport" role="region" aria-label="Auto-scrolling Canva projects" tabIndex={0}>
            <div className="project-track">
              {[0, 1].map((copy) => (
                <div key={copy} aria-hidden={copy === 1} className="project-set">
                  <figure><img src={independenceImage} alt={copy === 0 ? "Independence Day Canva element collection" : ""} width={1024} height={1280} loading="lazy" /></figure>
                  <figure><img src={codingImage} alt={copy === 0 ? "Tech coding sticker collection" : ""} width={1024} height={1280} loading="lazy" /></figure>
                </div>
              ))}
            </div>
          </div>
          <div className="category-list lg:mt-4">
            <p className="font-semibold text-foreground">Graphic Design</p><p>UI Design</p>
            <p><span>Soon</span> Fun Project</p><p><span>Soon</span> Illustration</p>
          </div>
        </div>
      </section>

      <section id="contact" className="frame-section flex items-center justify-center px-6 py-28 md:justify-end md:px-[11vw]">
        <form onSubmit={sendMessage} className="contact-card w-full max-w-md">
          <h2 className="text-3xl">Let’s Collaborate</h2>
          <label htmlFor="name">Name</label><input id="name" name="name" placeholder="Full name" required />
          <label htmlFor="email">Email</label><input id="email" name="email" type="email" placeholder="gemaeka1@gmail.com" required />
          <label htmlFor="message">Message</label><textarea id="message" name="message" placeholder="Jot something down!" rows={4} required />
          <Button type="submit" className="mt-2 rounded-full px-6">Send</Button>
        </form>
      </section>
    </main>
  );
}