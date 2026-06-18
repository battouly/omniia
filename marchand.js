function MarchandPage({
  t,
  lang,
  navigate,
  openModal
}) {
  const m = t.marchand;
  const onSignup = () => openModal({
    kind: "partner",
    role: m.eyebrow,
    partnerType: "merchant"
  });
  const onDownload = () => openModal({
    kind: "app"
  });
  return React.createElement("main", {
    id: "main",
    className: "mch"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("nav", {
    className: "breadcrumb",
    "aria-label": lang === "fr" ? "Fil d’Ariane" : "Breadcrumb"
  }, React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      navigate("home");
    }
  }, lang === "fr" ? "Accueil" : "Home"), React.createElement("span", {
    className: "sep",
    "aria-hidden": "true"
  }, "/"), React.createElement("span", {
    className: "current",
    "aria-current": "page"
  }, m.breadcrumb))), React.createElement("section", {
    className: "wrap mch-hero",
    "aria-labelledby": "mch-h1"
  }, React.createElement("div", {
    className: "mch-hero-copy"
  }, React.createElement("p", {
    className: "mch-label"
  }, m.eyebrow), React.createElement("h1", {
    id: "mch-h1",
    className: "mch-h1"
  }, m.h1), React.createElement("div", {
    className: "mch-cta"
  }, React.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: onSignup
  }, m.ctaPrimary), React.createElement("button", {
    type: "button",
    className: "btn btn-ghost",
    onClick: onDownload
  }, m.ctaSecondary))), React.createElement("image-slot", {
    id: "mch-hero",
    class: "mch-hero-img",
    shape: "rounded",
    radius: "18",
    placeholder: m.heroSlot
  })), React.createElement("div", {
    className: "wrap"
  }, React.createElement("hr", {
    className: "mch-rule"
  })), React.createElement("section", {
    className: "wrap mch-row",
    "aria-labelledby": "mch-overview"
  }, React.createElement("p", {
    className: "mch-col-label",
    id: "mch-overview"
  }, m.overview.label), React.createElement("p", {
    className: "mch-statement"
  }, m.overview.text)), React.createElement("div", {
    className: "wrap"
  }, React.createElement("hr", {
    className: "mch-rule"
  })), React.createElement("section", {
    className: "wrap mch-why",
    "aria-labelledby": "mch-why-label"
  }, React.createElement("p", {
    className: "mch-col-label",
    id: "mch-why-label"
  }, m.why.label), React.createElement("ol", {
    className: "mch-why-list"
  }, m.why.items.map((it, i) => React.createElement("li", {
    className: "mch-why-item",
    key: i
  }, React.createElement("div", {
    className: "mch-why-head"
  }, React.createElement("span", {
    className: "mch-num",
    "aria-hidden": "true"
  }, i + 1), React.createElement("h3", null, it.t)), React.createElement("p", {
    className: "mch-why-desc"
  }, it.d))))), React.createElement("div", {
    className: "wrap"
  }, React.createElement("hr", {
    className: "mch-rule"
  })), React.createElement("section", {
    className: "wrap mch-testi",
    "aria-labelledby": "mch-testi-label"
  }, React.createElement("p", {
    className: "mch-col-label",
    id: "mch-testi-label"
  }, m.testimonial.label), React.createElement("div", {
    className: "mch-avatars"
  }, m.testimonial.avatars.map((a, i) => React.createElement("image-slot", {
    key: i,
    id: "mch-av" + (i + 1),
    class: "mch-avatar",
    shape: "circle",
    placeholder: a
  }))), React.createElement("div", {
    className: "mch-quote-row"
  }, React.createElement("div", {
    className: "mch-who"
  }, React.createElement("div", {
    className: "mch-who-name"
  }, m.testimonial.name), React.createElement("div", {
    className: "mch-who-role"
  }, m.testimonial.role)), React.createElement("blockquote", {
    className: "mch-quote"
  }, "\u201C", m.testimonial.quote, "\u201D"))), React.createElement("section", {
    className: "mch-signup",
    "aria-labelledby": "mch-signup-h2"
  }, React.createElement("div", {
    className: "wrap mch-signup-inner"
  }, React.createElement("div", null, React.createElement("h2", {
    id: "mch-signup-h2"
  }, m.signup.h2), React.createElement("p", null, m.signup.lead)), React.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: onSignup
  }, m.signup.cta))));
}
Object.assign(window, {
  MarchandPage
});