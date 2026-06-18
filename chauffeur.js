function ChauffeursPage({
  t,
  lang,
  navigate,
  openModal
}) {
  const c = t.chauffeurs;
  const [tab, setTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const onSignup = () => openModal({
    kind: "driver"
  });
  const onDownload = () => openModal({
    kind: "app"
  });
  const active = c.ways.tabs[tab];
  return React.createElement("main", {
    id: "main",
    className: "drv"
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
  }, c.breadcrumb))), React.createElement("section", {
    className: "wrap drv-hero",
    "aria-labelledby": "drv-h1"
  }, React.createElement("div", {
    className: "drv-hero-copy"
  }, React.createElement("p", {
    className: "drv-label"
  }, c.hero.eyebrow), React.createElement("h1", {
    id: "drv-h1",
    className: "drv-h1"
  }, c.hero.h1), React.createElement("div", {
    className: "drv-hero-cta"
  }, React.createElement("button", {
    type: "button",
    className: "btn btn-ghost btn-sm",
    onClick: onDownload
  }, c.hero.cta))), React.createElement("img", {
    className: "drv-hero-img",
    src: "uploads/driverOmniia.jpg",
    alt: c.hero.photoSlot
  })), React.createElement("div", {
    className: "wrap"
  }, React.createElement("hr", {
    className: "mch-rule"
  })), React.createElement("section", {
    className: "wrap drv-why",
    "aria-labelledby": "drv-why-label"
  }, React.createElement("p", {
    className: "mch-col-label",
    id: "drv-why-label"
  }, c.why.label), React.createElement("ol", {
    className: "drv-why-list"
  }, c.why.items.map((it, i) => React.createElement("li", {
    className: "drv-why-item",
    key: i
  }, React.createElement("span", {
    className: "drv-num",
    "aria-hidden": "true"
  }, i + 1), React.createElement("h3", null, it.t), React.createElement("p", {
    className: "drv-why-desc"
  }, it.d))))), React.createElement("div", {
    className: "wrap"
  }, React.createElement("hr", {
    className: "mch-rule"
  })), React.createElement("section", {
    className: "wrap mch-testi",
    "aria-labelledby": "drv-testi-label"
  }, React.createElement("p", {
    className: "mch-col-label",
    id: "drv-testi-label"
  }, c.testimonial.label), React.createElement("div", {
    className: "mch-avatars"
  }, c.testimonial.avatars.map((a, i) => React.createElement("img", {
    key: i,
    className: "mch-avatar",
    src: ["uploads/Driver1.jpg", "uploads/Binta.jpg", "uploads/Dug.jpg"][i],
    alt: a
  }))), React.createElement("div", {
    className: "mch-quote-row"
  }, React.createElement("div", {
    className: "mch-who"
  }, React.createElement("div", {
    className: "mch-who-name"
  }, c.testimonial.name), React.createElement("div", {
    className: "mch-who-role"
  }, c.testimonial.role)), React.createElement("blockquote", {
    className: "mch-quote"
  }, "\u201C", c.testimonial.quote, "\u201D"))), React.createElement("div", {
    className: "wrap"
  }, React.createElement("hr", {
    className: "mch-rule"
  })), React.createElement("section", {
    className: "wrap drv-ways",
    "aria-labelledby": "drv-ways-h2"
  }, React.createElement("h2", {
    id: "drv-ways-h2",
    className: "drv-ways-h2"
  }, c.ways.h2), React.createElement("div", {
    className: "drv-tabs",
    role: "tablist",
    "aria-label": c.ways.h2
  }, c.ways.tabs.map((tb, i) => React.createElement("button", {
    key: tb.key,
    type: "button",
    role: "tab",
    id: "drv-tab-" + tb.key,
    "aria-selected": i === tab,
    "aria-controls": "drv-panel-" + tb.key,
    onClick: () => setTab(i)
  }, tb.label))), React.createElement("div", {
    className: "drv-benefits",
    role: "tabpanel",
    id: "drv-panel-" + active.key,
    "aria-labelledby": "drv-tab-" + active.key
  }, React.createElement("p", {
    className: "mch-col-label drv-benefits-label"
  }, c.ways.benefitsLabel), React.createElement("div", {
    className: "drv-blocks"
  }, active.blocks.map((b, i) => React.createElement("article", {
    className: "drv-block",
    key: i
  }, React.createElement("h3", null, b.t), React.createElement("ul", null, b.items.map((it, j) => React.createElement("li", {
    key: j
  }, React.createElement("span", {
    className: "drv-tick",
    "aria-hidden": "true"
  }, React.createElement(Icon, {
    name: "chevronR"
  })), it))), b.link && React.createElement("a", {
    className: "drv-block-link",
    href: "#",
    onClick: e => {
      e.preventDefault();
      openModal({
        kind: "page",
        label: b.link
      });
    }
  }, b.link, " ", React.createElement(Icon, {
    name: "arrow"
  }))))))), React.createElement("div", {
    className: "wrap"
  }, React.createElement("hr", {
    className: "mch-rule"
  })), React.createElement("section", {
    className: "wrap drv-apply",
    "aria-labelledby": "drv-apply-h2"
  }, React.createElement("h2", {
    id: "drv-apply-h2",
    className: "drv-section-h2"
  }, c.apply.h2), React.createElement("div", {
    className: "drv-apply-body"
  }, React.createElement("ul", {
    className: "drv-apply-list"
  }, c.apply.items.map((it, i) => React.createElement("li", {
    key: i
  }, React.createElement("span", {
    className: "drv-check",
    "aria-hidden": "true"
  }, React.createElement(Icon, {
    name: "check"
  })), it))), React.createElement("p", {
    className: "drv-apply-note"
  }, c.apply.note))), React.createElement("div", {
    className: "wrap"
  }, React.createElement("img", {
    className: "drv-apply-photo",
    src: "uploads/rentalpartner.jpg",
    alt: c.apply.photoSlot
  })), React.createElement("section", {
    className: "wrap drv-todo",
    "aria-labelledby": "drv-todo-h2"
  }, React.createElement("h2", {
    id: "drv-todo-h2",
    className: "mch-col-label drv-todo-label"
  }, c.todo.h2), React.createElement("div", {
    className: "drv-todo-steps"
  }, c.todo.steps.map((s, i) => React.createElement("div", {
    className: "drv-todo-step",
    key: i
  }, React.createElement("h3", null, s.t), React.createElement("p", null, s.d))), React.createElement("div", {
    className: "drv-todo-step drv-scheme"
  }, React.createElement("h3", null, c.todo.scheme.t), React.createElement("p", null, c.todo.scheme.d)))), React.createElement("div", {
    className: "wrap"
  }, React.createElement("hr", {
    className: "mch-rule"
  })), React.createElement("section", {
    className: "wrap drv-faq",
    "aria-labelledby": "drv-faq-h2"
  }, React.createElement("div", {
    className: "drv-faq-head"
  }, React.createElement("h2", {
    id: "drv-faq-h2",
    className: "drv-section-h2"
  }, c.faq.h2), React.createElement("p", null, c.faq.lead)), React.createElement("div", {
    className: "drv-acc"
  }, c.faq.items.map((f, i) => {
    const isOpen = openFaq === i;
    return React.createElement("div", {
      className: "drv-acc-item" + (isOpen ? " open" : ""),
      key: i
    }, React.createElement("button", {
      type: "button",
      className: "drv-acc-btn",
      "aria-expanded": isOpen,
      "aria-controls": "drv-acc-p" + i,
      onClick: () => setOpenFaq(isOpen ? -1 : i)
    }, React.createElement("span", null, f.q), React.createElement("span", {
      className: "drv-acc-icon",
      "aria-hidden": "true"
    })), isOpen && React.createElement("div", {
      className: "drv-acc-panel",
      id: "drv-acc-p" + i
    }, f.a));
  }))), React.createElement("section", {
    className: "wrap drv-notes",
    "aria-label": ""
  }, React.createElement("ol", null, c.notes.map((n, i) => React.createElement("li", {
    key: i
  }, n)))), React.createElement("section", {
    className: "drv-band",
    "aria-labelledby": "drv-band-h2"
  }, React.createElement("div", {
    className: "wrap drv-band-inner"
  }, React.createElement("div", null, React.createElement("p", {
    className: "drv-band-label"
  }, c.band.label), React.createElement("h2", {
    id: "drv-band-h2"
  }, c.band.h2)), React.createElement("button", {
    type: "button",
    className: "btn btn-light",
    onClick: onSignup
  }, c.band.cta))));
}
Object.assign(window, {
  ChauffeursPage
});