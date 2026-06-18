const TYPE_TREATMENTS = {
  institutionnel: {
    weight: 800,
    size: "clamp(2.1rem, 5vw, 3.7rem)",
    tracking: "-0.02em",
    eyebrow: "0.14em"
  },
  editorial: {
    weight: 700,
    size: "clamp(2.3rem, 5.6vw, 4.4rem)",
    tracking: "-0.035em",
    eyebrow: "0.1em"
  },
  affirme: {
    weight: 800,
    size: "clamp(2.1rem, 5vw, 3.7rem)",
    tracking: "-0.004em",
    eyebrow: "0.26em"
  }
};
const TWEAK_DEFAULTS = {
  "heroVariant": "carousel",
  "hubVariant": "carousel",
  "typeTreatment": "institutionnel"
};
function getInitialLang() {
  try {
    const p = new URLSearchParams(window.location.search).get("lang");
    if (p === "en" || p === "fr") return p;
  } catch (e) {}
  return "fr";
}
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLangState] = useState(getInitialLang);
  const [page, setPage] = useState("home");
  const [pendingAnchor, setPendingAnchor] = useState(null);
  const [modal, setModal] = useState(null);
  const openModal = m => setModal(m);
  const closeModal = () => setModal(null);
  const C = CONTENT[lang];
  const setLang = l => {
    setLangState(l);
    try {
      const url = new URL(window.location.href);
      if (l === "en") url.searchParams.set("lang", "en");else url.searchParams.delete("lang");
      window.history.replaceState({}, "", url);
    } catch (e) {}
  };
  useEffect(() => {
    document.documentElement.lang = lang;
    const titles = CONTENT[lang].metaTitle;
    const titleMap = {
      drop: titles.drop,
      business: titles.business,
      particuliers: titles.particuliers,
      chauffeurs: titles.chauffeurs,
      marchand: titles.marchand,
      terms: titles.terms,
      privacy: titles.privacy,
      help: lang === "fr" ? "OMNIIA One — Centre d’aide" : "OMNIIA One — Help Centre"
    };
    document.title = titleMap[page] || titles.home;
  }, [lang, page]);
  useEffect(() => {
    const tr = TYPE_TREATMENTS[t.typeTreatment] || TYPE_TREATMENTS.institutionnel;
    const root = document.documentElement.style;
    root.setProperty("--h1-weight", tr.weight);
    root.setProperty("--h1-size", tr.size);
    root.setProperty("--h1-tracking", tr.tracking);
    root.setProperty("--eyebrow-tracking", tr.eyebrow);
  }, [t.typeTreatment]);
  const navigate = (nextPage, anchor) => {
    if (nextPage === page) {
      if (anchor) scrollToAnchor(anchor);else window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }
    setPage(nextPage);
    setPendingAnchor(anchor || "__top");
  };
  const scrollToAnchor = anchor => {
    const el = document.getElementById(anchor);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    }
  };
  useEffect(() => {
    if (!pendingAnchor) return;
    const id = requestAnimationFrame(() => {
      if (pendingAnchor === "__top") window.scrollTo({
        top: 0,
        behavior: "auto"
      });else scrollToAnchor(pendingAnchor);
      setPendingAnchor(null);
    });
    return () => cancelAnimationFrame(id);
  }, [page, pendingAnchor]);
  const tw = window.__tweaksMod || {};
  return React.createElement(React.Fragment, null, React.createElement("a", {
    className: "skip-link",
    href: "#main"
  }, C.skip), React.createElement(Header, {
    lang: lang,
    setLang: setLang,
    page: page,
    navigate: navigate,
    t: C,
    openModal: openModal
  }), page === "home" ? React.createElement(HomePage, {
    t: C,
    lang: lang,
    navigate: navigate,
    openModal: openModal,
    heroVariant: t.heroVariant,
    hubVariant: t.hubVariant
  }) : page === "business" ? React.createElement(BusinessPage, {
    t: C,
    lang: lang,
    navigate: navigate,
    openModal: openModal
  }) : page === "particuliers" ? React.createElement(ParticuliersPage, {
    t: C,
    lang: lang,
    navigate: navigate,
    openModal: openModal
  }) : page === "chauffeurs" ? React.createElement(ChauffeursPage, {
    t: C,
    lang: lang,
    navigate: navigate,
    openModal: openModal
  }) : page === "marchand" ? React.createElement(MarchandPage, {
    t: C,
    lang: lang,
    navigate: navigate,
    openModal: openModal
  }) : page === "terms" ? React.createElement(TermsPage, {
    t: C,
    lang: lang,
    navigate: navigate
  }) : page === "privacy" ? React.createElement(PrivacyPage, {
    t: C,
    lang: lang,
    navigate: navigate
  }) : page === "help" ? React.createElement(HelpPage, {
    t: C,
    lang: lang,
    navigate: navigate,
    openModal: openModal
  }) : React.createElement(DropPage, {
    t: C,
    lang: lang,
    navigate: navigate,
    openModal: openModal
  }), React.createElement(Footer, {
    lang: lang,
    navigate: navigate,
    t: C,
    openModal: openModal
  }), React.createElement(AppModal, {
    modal: modal,
    onClose: closeModal,
    t: C,
    lang: lang,
    navigate: navigate
  }), React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, React.createElement(TweakSection, {
    label: lang === "fr" ? "Accueil — Hero" : "Home — Hero"
  }), React.createElement(TweakSelect, {
    label: lang === "fr" ? "Mise en page" : "Layout",
    value: t.heroVariant,
    options: [{
      value: "split",
      label: lang === "fr" ? "Scindé (maquette)" : "Split (mockup)"
    }, {
      value: "carousel",
      label: lang === "fr" ? "Carrousel défilant" : "Auto-carousel"
    }, {
      value: "centered",
      label: lang === "fr" ? "Centré" : "Centered"
    }, {
      value: "panel",
      label: lang === "fr" ? "Panneau teinté" : "Dye panel"
    }],
    onChange: v => {
      setTweak("heroVariant", v);
      if (page !== "home") navigate("home");
    }
  }), React.createElement(TweakSection, {
    label: lang === "fr" ? "Accueil — Hub services" : "Home — Service hub"
  }), React.createElement(TweakSelect, {
    label: lang === "fr" ? "Disposition" : "Arrangement",
    value: t.hubVariant,
    options: [{
      value: "carousel",
      label: lang === "fr" ? "Carrousel (média)" : "Carousel (media)"
    }, {
      value: "grid",
      label: lang === "fr" ? "Grille 2×2 + hub" : "2×2 grid + hub"
    }, {
      value: "radiant",
      label: lang === "fr" ? "Rayonnant (connecteurs)" : "Radiant (connectors)"
    }, {
      value: "list",
      label: lang === "fr" ? "Liste verticale" : "Vertical list"
    }],
    onChange: v => {
      setTweak("hubVariant", v);
      if (page !== "home") navigate("home");
    }
  }), React.createElement(TweakSection, {
    label: lang === "fr" ? "Typographie" : "Typography"
  }), React.createElement(TweakSelect, {
    label: lang === "fr" ? "Traitement des titres" : "Title treatment",
    value: t.typeTreatment,
    options: [{
      value: "institutionnel",
      label: lang === "fr" ? "Institutionnel" : "Institutional"
    }, {
      value: "editorial",
      label: lang === "fr" ? "Éditorial (large)" : "Editorial (large)"
    }, {
      value: "affirme",
      label: lang === "fr" ? "Affirmé (espacé)" : "Bold (spaced)"
    }],
    onChange: v => setTweak("typeTreatment", v)
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));