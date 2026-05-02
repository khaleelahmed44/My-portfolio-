const { createElement: h } = React;

const tags = [
  { label: "Available", className: "green" },
  { label: "UI Design", className: "purple" },
  { label: "Branding", className: "cyan" },
];

const stats = [
  { value: "126", label: "Projects" },
  { value: "84", label: "Clients" },
  { value: "6+", label: "Years" },
];

const profileSkills = ["React", "Tailwind", "UI/UX", "SEO"];

const contact = {
  whatsappDisplay: "+92 331045 2744",
  whatsappUrl: "https://wa.me/923310452744",
  email: "rajarkhaleel@gamil.com",
};

const projects = [
  {
    title: "Rehabion Physio Centre",
    category: "Healthcare Website",
    url: "https://rehabionphysiocentrekarachi.netlify.app/",
    image: "https://image.thum.io/get/width/900/crop/650/https://rehabionphysiocentrekarachi.netlify.app/",
    description: "Advanced physiotherapy and rehabilitation website with services, doctors, booking, and WhatsApp appointment flow.",
  },
  {
    title: "Virtual Physio",
    category: "Physiotherapy Platform",
    url: "https://virtualphysio.ca/",
    image: "https://image.thum.io/get/width/900/crop/650/https://virtualphysio.ca/",
    description: "Remote physiotherapy brand experience for digital care, patient trust, and service discovery.",
  },
  {
    title: "Petroleum Brand",
    category: "Corporate Website",
    url: "#contact",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=85",
    description: "Premium industrial web presence for petroleum services, operations, and company credibility.",
  },
  {
    title: "Fuel Pump Station",
    category: "Business Website",
    url: "#contact",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=900&q=85",
    description: "Clean service layout for fuel station operations, locations, facilities, and customer information.",
  },
  {
    title: "Real Estate Portfolio",
    category: "Property Website",
    url: "#contact",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    description: "High-end property showcase with modern visuals, project highlights, and lead-focused contact flow.",
  },
  {
    title: "More Client Projects",
    category: "Web Design",
    url: "#contact",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    description: "Multiple custom websites for personal brands, service businesses, clinics, and digital portfolios.",
  },
];

const services = [
  "Banner Design",
  "Advertisement Board",
  "Logo Design",
  "SEO Ranked Website",
  "Website Maintenance",
  "Business Website",
  "Portfolio Website",
  "Brand Identity",
];

function Pill({ label, className }) {
  return h("span", { className: `pill ${className}` }, label);
}

function Stat({ value, label }) {
  return h(
    "div",
    { className: "stat" },
    h("strong", null, value),
    h("span", null, label)
  );
}

function LaptopPreview() {
  return h(
    "section",
    { className: "laptop-section", "aria-label": "Portfolio preview" },
    h(
      "div",
      { className: "laptop" },
      h(
        "div",
        { className: "laptop-screen" },
        h(
          "div",
          { className: "screen-nav" },
          h("span", { className: "screen-logo" }, "KRA"),
          h("span", null, "Menu")
        ),
        h(
          "div",
          { className: "screen-copy" },
          h("h2", null, "Creative"),
          h("em", null, "Visual"),
          h("h2", null, "Designer")
        ),
        h("div", { className: "screen-stats" }, stats.map((item) => h(Stat, { ...item, key: item.label })))
      ),
      h("div", { className: "laptop-base" })
    )
  );
}

function ProjectCard({ title, category, url, image, description }) {
  return h(
    "article",
    { className: "project-card" },
    h(
      "a",
      { className: "project-media", href: url, target: url.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" },
      h("img", { src: image, alt: `${title} project preview`, loading: "lazy" })
    ),
    h(
      "div",
      { className: "project-body" },
      h("span", null, category),
      h("h3", null, title),
      h("p", null, description),
      h("a", { href: url, target: url.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" }, url.startsWith("http") ? "Open Project" : "Discuss Project")
    )
  );
}

function ServicesSection() {
  return h(
    "section",
    { className: "services-section", id: "services" },
    h(
      "div",
      { className: "service-copy" },
      h("span", null, "Creative Services"),
      h("h2", null, "Everything your brand needs to look premium and rank better."),
      h(
        "p",
        null,
        "From banners, logos, advertisement boards, and social visuals to SEO-ranked websites and long-term website maintenance."
      )
    ),
    h(
      "div",
      { className: "service-list" },
      services.map((service) => h("span", { key: service }, service))
    )
  );
}


function App() {
  return h(
    "main",
    { className: "portfolio-shell" },
    h("div", { className: "ambient ambient-one" }),
    h("div", { className: "ambient ambient-two" }),
    h(
      "nav",
      { className: "topbar", "aria-label": "Primary navigation" },
      h("a", { href: "#", className: "brand" }, "Khaleel"),
      h(
        "div",
        { className: "nav-links" },
        h("a", { href: "#work" }, "Work"),
        h("a", { href: "#projects" }, "Projects"),
        h("a", { href: "#services" }, "Services"),
        h("a", { href: "#studio" }, "Studio"),
        h("a", { href: "#contact" }, "Contact")
      )
    ),
    h(
      "section",
      { className: "hero", id: "work" },
      h(
        "div",
        { className: "hero-copy" },
        h("div", { className: "experience-badge" }, "+6 YEARS"),
        h(
          "h1",
          { className: "hero-title" },
          h("span", null, "Port"),
          h("span", null, "folio")
        ),
        h("p", { className: "script-subtitle" }, "Visual"),
        h(
          "p",
          { className: "hero-description" },
          "A Visual Portfolio for marketing, identity systems, and complete creative growth."
        ),
        h("div", { className: "pill-row" }, tags.map((tag) => h(Pill, { ...tag, key: tag.label }))),
        h(
          "div",
          { className: "profile-card", id: "profile" },
          h("div", { className: "profile-avatar" }, "KA"),
          h(
            "div",
            { className: "profile-content" },
            h("span", { className: "profile-kicker" }, "Personal Profile"),
            h("h2", null, "Khaleel Ahmed"),
            h(
              "p",
              null,
              "Professional web developer with 3+ years of experience and 100+ completed projects across client work, responsive interfaces, and brand-focused digital experiences."
            ),
            h(
              "div",
              { className: "profile-skills" },
              profileSkills.map((skill) => h("span", { key: skill }, skill))
            )
          )
        ),
        h(
          "div",
          { className: "hero-actions" },
          h("a", { href: "#contact", className: "primary-button" }, "Start a Project"),
          h("a", { href: contact.whatsappUrl, className: "ghost-button", target: "_blank", rel: "noreferrer" }, "WhatsApp Now")
        )
      ),
      h(
        "aside",
        { className: "portrait-panel", "aria-label": "Designer portrait" },
        h("div", { className: "portrait-glass" }),
        h("img", {
          src: "My profile.jpeg",
          alt: "Professional portrait of a senior creative designer",
        }),
        h("div", { className: "portrait-caption" }, "Senior Graphic Designer")
      )
    ),
    h(LaptopPreview),
    h(ServicesSection),
    h(
      "section",
      { className: "projects-section", id: "projects" },
      h(
        "div",
        { className: "section-heading" },
        h("span", null, "Selected Work"),
        h("h2", null, "Multiple client projects with polished web presentation."),
        h("p", null, "Healthcare, physiotherapy, petroleum, pump station, real estate, and custom business websites.")
      ),
      h("div", { className: "projects-grid" }, projects.map((project) => h(ProjectCard, { ...project, key: project.title })))
    ),
    h(
      "section",
      { className: "signature-bar", id: "studio" },
      h("span", null, "Brand Systems"),
      h("span", null, "Campaign Visuals"),
      h("span", null, "Digital Direction")
    ),
    h(
      "footer",
      { className: "contact-strip", id: "contact" },
      h("span", null, "Need banners, logos, advertisement boards, SEO websites, or monthly maintenance?"),
      h(
        "div",
        { className: "contact-actions" },
        h("a", { href: contact.whatsappUrl, target: "_blank", rel: "noreferrer" }, `WhatsApp ${contact.whatsappDisplay}`),
        h("a", { href: `mailto:${contact.email}` }, contact.email)
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
