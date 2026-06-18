function ParticuliersPage({
  t,
  lang,
  navigate,
  openModal
}) {
  const p = t.particuliers;
  const [openLearn, setOpenLearn] = useState(-1);
  const onDownload = () => openModal({
    kind: "app"
  });
  const onDrop = () => navigate("drop");
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
  }, p.breadcrumb))), React.createElement("section", {
    className: "wrap mch-hero",
    "aria-labelledby": "part-h1"
  }, React.createElement("div", {
    className: "mch-hero-copy"
  }, React.createElement("p", {
    className: "mch-label"
  }, p.hero.eyebrow), React.createElement("h1", {
    id: "part-h1",
    className: "mch-h1"
  }, p.hero.h1), React.createElement("p", {
    className: "lead part-hero-lead"
  }, p.hero.lead), React.createElement("div", {
    className: "mch-cta part-hero-cta"
  }, React.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: onDownload
  }, p.hero.ctaPrimary), React.createElement("button", {
    type: "button",
    className: "btn btn-ghost",
    onClick: onDrop
  }, p.hero.ctaSecondary))), React.createElement("img", {
    className: "mch-hero-img",
    src: "uploads/livreur.jpg",
    alt: lang === "fr" ? "Photo : habitant·e utilisant OMNIIA en ville" : "Photo: a resident using OMNIIA in the city"
  })), React.createElement("div", {
    className: "wrap"
  }, React.createElement("hr", {
    className: "mch-rule"
  })), React.createElement("section", {
    className: "wrap mch-row",
    "aria-labelledby": "part-overview"
  }, React.createElement("p", {
    className: "mch-col-label",
    id: "part-overview"
  }, p.why.eyebrow), React.createElement("div", null, React.createElement("p", {
    className: "mch-statement"
  }, p.why.h2), React.createElement("p", {
    className: "lead part-overview-body"
  }, p.why.body))), React.createElement("div", {
    className: "wrap"
  }, React.createElement("hr", {
    className: "mch-rule"
  })), React.createElement("section", {
    className: "wrap mch-why",
    "aria-labelledby": "part-use-label"
  }, React.createElement("p", {
    className: "mch-col-label",
    id: "part-use-label"
  }, p.use.h2), React.createElement("ol", {
    className: "mch-why-list"
  }, p.use.items.map((it, i) => React.createElement("li", {
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
    className: "wrap drv-todo",
    "aria-labelledby": "part-how-label"
  }, React.createElement("h2", {
    id: "part-how-label",
    className: "mch-col-label drv-todo-label"
  }, p.how.h2), React.createElement("div", {
    className: "drv-todo-steps"
  }, p.how.steps.map((s, i) => React.createElement("div", {
    className: "drv-todo-step",
    key: i
  }, React.createElement("h3", null, s.t), React.createElement("p", null, s.d))))), React.createElement("div", {
    className: "wrap"
  }, React.createElement("hr", {
    className: "mch-rule"
  })), React.createElement("section", {
    className: "wrap mch-row",
    "aria-labelledby": "part-learn-label"
  }, React.createElement("p", {
    className: "mch-col-label",
    id: "part-learn-label"
  }, p.learn.h2), React.createElement("div", {
    className: "drv-acc part-learn-acc"
  }, p.learn.items.map((it, i) => {
    const isOpen = openLearn === i;
    return React.createElement("div", {
      className: "drv-acc-item" + (isOpen ? " open" : ""),
      key: i
    }, React.createElement("button", {
      type: "button",
      className: "drv-acc-btn",
      "aria-expanded": isOpen,
      "aria-controls": "part-learn-p" + i,
      onClick: () => setOpenLearn(isOpen ? -1 : i)
    }, React.createElement("span", null, it.q), React.createElement("span", {
      className: "drv-acc-icon",
      "aria-hidden": "true"
    })), isOpen && React.createElement("div", {
      className: "drv-acc-panel",
      id: "part-learn-p" + i
    }, it.a));
  }))), React.createElement("section", {
    className: "wrap drv-notes",
    "aria-label": ""
  }, React.createElement("ol", null, p.notes.map((n, i) => React.createElement("li", {
    key: i
  }, n)))), React.createElement("section", {
    className: "mch-signup",
    "aria-labelledby": "part-signup-h2"
  }, React.createElement("div", {
    className: "wrap mch-signup-inner"
  }, React.createElement("div", null, React.createElement("h2", {
    id: "part-signup-h2"
  }, p.hero.h1), React.createElement("p", null, p.band)), React.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: onDownload
  }, p.hero.ctaPrimary))));
}
Object.assign(window, {
  ParticuliersPage
});