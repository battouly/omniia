function HelpPage({
  t,
  lang,
  navigate,
  openModal
}) {
  const hc = t.help;
  const onPage = label => openModal({
    kind: "page",
    label
  });
  return React.createElement("main", {
    id: "main",
    className: "help"
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
  }, hc.breadcrumb))), React.createElement("section", {
    className: "help-hero",
    "aria-labelledby": "help-h1"
  }, React.createElement(Eyebrow, {
    center: true
  }, hc.eyebrow), React.createElement("h1", {
    id: "help-h1"
  }, hc.h1), React.createElement("p", {
    className: "help-lead"
  }, hc.lead), React.createElement("form", {
    className: "help-search",
    role: "search",
    onSubmit: e => e.preventDefault()
  }, React.createElement(Icon, {
    name: "search"
  }), React.createElement("input", {
    type: "search",
    "aria-label": hc.searchPlaceholder,
    placeholder: hc.searchPlaceholder
  }), React.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, hc.searchCta))), React.createElement("section", {
    className: "help-topics wrap",
    "aria-labelledby": "help-topics-label"
  }, React.createElement("h2", {
    className: "help-topics-label",
    id: "help-topics-label"
  }, hc.topicsLabel), React.createElement("div", {
    className: "help-grid"
  }, hc.topics.map((tp, i) => React.createElement("article", {
    className: "help-card",
    key: i
  }, React.createElement("span", {
    className: "help-card-icon"
  }, React.createElement(Icon, {
    name: tp.icon
  })), React.createElement("h3", null, tp.t), React.createElement("p", null, tp.d), React.createElement("ul", {
    className: "help-links"
  }, tp.links.map((l, j) => React.createElement("li", {
    key: j
  }, React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onPage(l);
    }
  }, React.createElement("span", null, l), React.createElement(Icon, {
    name: "chevronR"
  }))))))))), React.createElement("section", {
    className: "help-contact wrap",
    "aria-labelledby": "help-contact-h2"
  }, React.createElement("div", {
    className: "help-contact-inner"
  }, React.createElement("span", {
    className: "help-contact-icon"
  }, React.createElement(Icon, {
    name: "lifebuoy"
  })), React.createElement("div", {
    className: "help-contact-text"
  }, React.createElement("h2", {
    id: "help-contact-h2"
  }, hc.contact.h2), React.createElement("p", null, hc.contact.lead)), React.createElement("div", {
    className: "help-contact-actions"
  }, React.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: () => onPage(hc.contact.cta)
  }, hc.contact.cta), React.createElement("button", {
    type: "button",
    className: "btn btn-ghost help-contact-ghost",
    onClick: () => onPage(hc.contact.secondary)
  }, hc.contact.secondary)))));
}
Object.assign(window, {
  HelpPage
});