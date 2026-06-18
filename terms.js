function LegalPage({
  doc,
  lang,
  navigate,
  idp
}) {
  const goToSection = i => {
    const el = document.getElementById(idp + "-sec-" + i);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({
      top,
      behavior: "smooth"
    });
  };
  return React.createElement("main", {
    id: "main",
    className: "tc"
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
  }, doc.breadcrumb))), React.createElement("header", {
    className: "wrap tc-head"
  }, React.createElement("p", {
    className: "mch-label"
  }, doc.eyebrow), React.createElement("h1", {
    className: "tc-h1"
  }, doc.h1), React.createElement("p", {
    className: "tc-updated"
  }, doc.updated), React.createElement("p", {
    className: "lead tc-intro"
  }, doc.intro)), React.createElement("div", {
    className: "wrap tc-body"
  }, React.createElement("aside", {
    className: "tc-toc",
    "aria-label": doc.tocLabel
  }, React.createElement("p", {
    className: "tc-toc-label"
  }, doc.tocLabel), React.createElement("ol", null, doc.sections.map((s, i) => React.createElement("li", {
    key: i
  }, React.createElement("a", {
    href: "#" + idp + "-sec-" + i,
    onClick: e => {
      e.preventDefault();
      goToSection(i);
    }
  }, React.createElement("span", {
    className: "tc-toc-num"
  }, i + 1), React.createElement("span", null, s.t)))))), React.createElement("div", {
    className: "tc-sections"
  }, doc.sections.map((s, i) => React.createElement("section", {
    className: "tc-section",
    id: idp + "-sec-" + i,
    key: i,
    "aria-labelledby": idp + "-h-" + i
  }, React.createElement("div", {
    className: "tc-section-head"
  }, React.createElement("span", {
    className: "tc-num",
    "aria-hidden": "true"
  }, String(i + 1).padStart(2, "0")), React.createElement("h2", {
    id: idp + "-h-" + i
  }, s.t)), React.createElement("div", {
    className: "tc-section-body"
  }, s.blocks.map((b, j) => {
    if (b.list) return React.createElement("ul", {
      className: "tc-list",
      key: j
    }, b.list.map((it, k) => React.createElement("li", {
      key: k
    }, it)));
    if (b.email) return React.createElement("p", {
      className: "tc-email",
      key: j
    }, React.createElement("a", {
      href: "mailto:" + b.email
    }, b.email));
    return React.createElement("p", {
      key: j
    }, b.p);
  })))))));
}
function TermsPage({
  t,
  lang,
  navigate
}) {
  return React.createElement(LegalPage, {
    doc: t.terms,
    lang: lang,
    navigate: navigate,
    idp: "tc"
  });
}
function PrivacyPage({
  t,
  lang,
  navigate
}) {
  return React.createElement(LegalPage, {
    doc: t.privacy,
    lang: lang,
    navigate: navigate,
    idp: "pp"
  });
}
Object.assign(window, {
  LegalPage,
  TermsPage,
  PrivacyPage
});