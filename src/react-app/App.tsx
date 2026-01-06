import { useMemo, useState } from "react";
import "./main.css";

type NavItem = {
  label: string;
  href: string;
};

type Feature = {
  title: string;
  description: string;
  icon: string; // emoji to keep it dependency-free
};

export default function App() {
  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Services", href: "#services" },
      { label: "Solutions", href: "#solutions" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  const features: Feature[] = useMemo(
    () => [
      {
        title: "Secure by design",
        description: "Hardened configs, least privilege, and practical security controls.",
        icon: "🛡️",
      },
      {
        title: "Fast & reliable",
        description: "Performance-minded builds, clean architecture, and predictable deployments.",
        icon: "⚡",
      },
      {
        title: "Modern UI/UX",
        description: "Polished layouts that look great on desktop and mobile.",
        icon: "✨",
      },
      {
        title: "Automation ready",
        description: "Reduce manual work with scripts, integrations, and repeatable workflows.",
        icon: "🤖",
      },
    ],
    []
  );

  return (
    <div className="app">
      <SiteHeader brand="Titanion Tech" navItems={navItems} />

      <main>
        <Hero
          eyebrow="IT • Security • Automation"
          title="Build a faster, safer, cleaner tech stack."
          subtitle="Titanion Tech helps small teams and builders ship reliable systems—securely, efficiently, and with a professional finish."
          primaryCta={{ label: "Get a Quote", href: "#contact" }}
          secondaryCta={{ label: "View Services", href: "#services" }}
        />

        <Section id="solutions" title="What we deliver" subtitle="Real-world outcomes, not buzzwords.">
          <div className="grid grid-4">
            {features.map((f) => (
              <Card key={f.title}>
                <div className="icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="services"
          title="Services"
          subtitle="Pick what you need now—scale up later."
        >
          <div className="grid grid-3">
            <ServiceCard
              title="Security Tune-Up"
              points={[
                "Account + device hardening",
                "Firewall + endpoint baseline",
                "Backup + recovery check",
              ]}
            />
            <ServiceCard
              title="Network & Wi-Fi"
              points={[
                "Router + segmentation setup",
                "Coverage + stability fixes",
                "Remote access done right",
              ]}
            />
            <ServiceCard
              title="Automation & Tools"
              points={[
                "Scripts to cut busywork",
                "Dashboards + monitoring",
                "Build & deploy pipelines",
              ]}
            />
          </div>
        </Section>

        <Section id="about" title="About Titanion Tech" subtitle="Built for practical problems.">
          <div className="split">
            <div>
              <p className="lead">
                We focus on clean setups, strong security, and systems that stay stable.
                Whether you’re running a small business or building something new, we make your tech stack feel professional.
              </p>
              <ul className="checklist">
                <li>Security-first configuration</li>
                <li>Documentation that actually helps</li>
                <li>Simple maintenance plan options</li>
              </ul>
            </div>

            <div className="panel">
              <h3>Typical projects</h3>
              <div className="tagRow">
                <span className="tag">Endpoint hardening</span>
                <span className="tag">Network cleanup</span>
                <span className="tag">Automation scripts</span>
                <span className="tag">Backups</span>
                <span className="tag">Monitoring</span>
                <span className="tag">Cloud migration</span>
              </div>

              <div className="miniCta">
                <div>
                  <strong>Want the layout customized?</strong>
                  <div className="muted">Colors, logo, sections, and content can be tailored quickly.</div>
                </div>
                <a className="btn btn-ghost" href="#contact">
                  Customize
                </a>
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact" subtitle="Tell us what you want to build or fix.">
          <ContactCta />
        </Section>
      </main>

      <SiteFooter brand="Titanion Tech" />
    </div>
  );
}

/* ---------------- Components ---------------- */

function SiteHeader({ brand, navItems }: { brand: string; navItems: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container headerInner">
        <a className="brand" href="#top" aria-label={`${brand} Home`}>
          <span className="brandMark" aria-hidden="true">⬢</span>
          <span className="brandText">{brand}</span>
        </a>

        <nav className="navDesktop" aria-label="Primary navigation">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="navLink">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm">
            Get Started
          </a>
        </nav>

        <button
          className="navToggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="navMobile" role="dialog" aria-label="Mobile navigation">
          <div className="container navMobileInner">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="navMobileLink"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero(props: {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}) {
  return (
    <section className="hero" id="top">
      <div className="container heroInner">
        <div className="heroText">
          <div className="eyebrow">{props.eyebrow}</div>
          <h1>{props.title}</h1>
          <p className="heroSubtitle">{props.subtitle}</p>

          <div className="ctaRow">
            <a className="btn btn-primary" href={props.primaryCta.href}>
              {props.primaryCta.label}
            </a>
            <a className="btn btn-ghost" href={props.secondaryCta.href}>
              {props.secondaryCta.label}
            </a>
          </div>

          <div className="trustRow">
            <span className="pill">✅ Fast turnaround</span>
            <span className="pill">🔒 Security-minded</span>
            <span className="pill">🧰 Built to maintain</span>
          </div>
        </div>

        <div className="heroArt" aria-hidden="true">
          <div className="glowCard">
            <div className="glowTop">
              <span className="statusDot" />
              <span className="muted">System Status</span>
            </div>
            <div className="glowBody">
              <div className="metric">
                <div className="muted">Uptime</div>
                <div className="metricValue">99.9%</div>
              </div>
              <div className="metric">
                <div className="muted">Security</div>
                <div className="metricValue">Hardened</div>
              </div>
              <div className="metric">
                <div className="muted">Latency</div>
                <div className="metricValue">Low</div>
              </div>
            </div>
            <div className="glowFooter">
              <span className="tag">Audit</span>
              <span className="tag">Backups</span>
              <span className="tag">Automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section(props: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section" id={props.id}>
      <div className="container">
        <div className="sectionHead">
          <h2>{props.title}</h2>
          {props.subtitle ? <p className="muted">{props.subtitle}</p> : null}
        </div>
        {props.children}
      </div>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

function ServiceCard({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="card cardService">
      <h3>{title}</h3>
      <ul className="bullets">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <a className="btn btn-ghost btn-sm" href="#contact">
        Ask about this
      </a>
    </div>
  );
}

function ContactCta() {
  return (
    <div className="contact">
      <div className="contactCard">
        <h3>Tell us what you need</h3>
        <p className="muted">
          Describe the project in 2–3 sentences and we’ll suggest the best path.
        </p>

        {/* Replace these with your real contact method */}
        <div className="ctaRow">
          <a className="btn btn-primary" href="mailto:contact@titaniontech.com">
            Email us
          </a>
          <a className="btn btn-ghost" href="#services">
            See services
          </a>
        </div>

        <div className="fineprint muted">
          Tip: If you have a logo + preferred colors, send them and we’ll match the theme.
        </div>
      </div>

      <div className="contactAside">
        <div className="card">
          <h3>What to include</h3>
          <ul className="checklist">
            <li>What’s broken / what you want improved</li>
            <li>Where it’s hosted (if you know)</li>
            <li>Any deadline you have</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function SiteFooter({ brand }: { brand: string }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerLeft">
          <div className="brand brandFooter">
            <span className="brandMark" aria-hidden="true">⬢</span>
            <span className="brandText">{brand}</span>
          </div>
          <div className="muted">© {year} {brand}. All rights reserved.</div>
        </div>

        <div className="footerRight">
          <a className="footerLink" href="#top">Back to top</a>
          <a className="footerLink" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
