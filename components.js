const {
  useState,
  useEffect,
  useRef
} = React;
function Header({
  lang,
  setLang,
  page,
  navigate,
  t,
  openModal
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);
  const menuRef = useRef(null);
  const partnerRef = useRef(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const onDown = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    const onKey = e => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);
  useEffect(() => {
    if (!partnerOpen) return;
    const onDown = e => {
      if (partnerRef.current && !partnerRef.current.contains(e.target)) setPartnerOpen(false);
    };
    const onKey = e => {
      if (e.key === "Escape") setPartnerOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [partnerOpen]);
  const navItems = [{
    key: "drop",
    label: t.nav.drop,
    action: () => navigate("drop"),
    current: page === "drop"
  }, {
    key: "business",
    label: t.nav.business,
    action: () => navigate("business"),
    current: page === "business"
  }, {
    key: "marchand",
    label: t.nav.marchand,
    action: () => navigate("marchand"),
    current: page === "marchand"
  }, {
    key: "particuliers",
    label: t.nav.particuliers,
    action: () => navigate("particuliers"),
    current: page === "particuliers"
  }, {
    key: "chauffeurs",
    label: t.nav.chauffeurs,
    action: () => navigate("chauffeurs"),
    current: page === "chauffeurs"
  }];
  const secondaryItems = [{
    key: "help",
    label: t.nav.help,
    action: () => navigate("help")
  }];
  const go = (e, item) => {
    e.preventDefault();
    setMenuOpen(false);
    item.action();
  };
  const isCurrent = item => !!item.current;
  return React.createElement("header", {
    className: "site-header" + (scrolled ? " scrolled" : "")
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "menu-cluster",
    ref: menuRef
  }, React.createElement("button", {
    type: "button",
    className: "menu-trigger",
    "aria-label": t.menu,
    "aria-haspopup": "true",
    "aria-expanded": menuOpen,
    onClick: () => setMenuOpen(v => !v)
  }, React.createElement(Icon, {
    name: menuOpen ? "close" : "menu"
  }), React.createElement("span", {
    className: "menu-trigger-label"
  }, t.menu)), React.createElement("div", {
    className: "burger-menu" + (menuOpen ? " open" : ""),
    role: "menu"
  }, navItems.map(item => React.createElement("a", {
    key: item.key,
    href: "#",
    role: "menuitem",
    "aria-current": isCurrent(item) ? "page" : undefined,
    onClick: e => go(e, item)
  }, item.label)))), React.createElement("a", {
    className: "brand",
    href: "#",
    "aria-label": "OMNIIA One \u2014 accueil",
    onClick: e => {
      e.preventDefault();
      setMenuOpen(false);
      navigate("home");
    }
  }, React.createElement(LogoMark, null), React.createElement("span", null, "OMNIIA ", React.createElement("span", {
    className: "one"
  }, "One"))), React.createElement("div", {
    className: "header-actions"
  }, React.createElement("nav", {
    className: "header-links",
    "aria-label": t.menu
  }, secondaryItems.map(item => React.createElement("a", {
    key: item.key,
    href: "#",
    onClick: e => go(e, item)
  }, item.label)), React.createElement("div", {
    className: "partner-cluster",
    ref: partnerRef
  }, React.createElement("button", {
    type: "button",
    className: "partner-trigger",
    "aria-haspopup": "true",
    "aria-expanded": partnerOpen,
    onClick: () => setPartnerOpen(v => !v)
  }, t.nav.partner, React.createElement(Icon, {
    name: "chevronD"
  })), React.createElement("div", {
    className: "partner-menu" + (partnerOpen ? " open" : ""),
    role: "menu"
  }, t.partners.map((p, i) => React.createElement("a", {
    key: i,
    href: "#",
    role: "menuitem",
    onClick: e => {
      e.preventDefault();
      setPartnerOpen(false);
      openModal({
        kind: "partner",
        role: p.label,
        partnerType: p.type
      });
    }
  }, p.label))))), React.createElement("div", {
    className: "lang-switch",
    role: "group",
    "aria-label": t.langGroup
  }, React.createElement("button", {
    type: "button",
    "aria-pressed": lang === "fr",
    onClick: () => setLang("fr")
  }, "FR"), React.createElement("button", {
    type: "button",
    "aria-pressed": lang === "en",
    onClick: () => setLang("en")
  }, "EN")))));
}
function Footer({
  lang,
  navigate,
  t,
  openModal
}) {
  const f = t.footer;
  const services = [{
    label: t.services.drop.name,
    action: () => navigate("drop")
  }, {
    label: t.nav.business,
    action: () => navigate("business")
  }, {
    label: t.nav.marchand,
    action: () => navigate("marchand")
  }, {
    label: t.nav.particuliers,
    action: () => navigate("particuliers")
  }, {
    label: t.nav.chauffeurs,
    action: () => navigate("chauffeurs")
  }];
  const year = 2026;
  return React.createElement("footer", {
    className: "site-footer"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "footer-grid"
  }, React.createElement("div", {
    className: "footer-brand"
  }, React.createElement("a", {
    className: "brand",
    href: "#",
    "aria-label": "OMNIIA One \u2014 accueil",
    onClick: e => {
      e.preventDefault();
      navigate("home");
    }
  }, React.createElement(LogoMark, null), React.createElement("span", null, "OMNIIA ", React.createElement("span", {
    className: "one"
  }, "One"))), React.createElement("p", null, f.tagline)), React.createElement("nav", {
    className: "footer-col",
    "aria-label": f.colServices
  }, React.createElement("h4", null, f.colServices), React.createElement("ul", null, services.map((s, i) => React.createElement("li", {
    key: i
  }, React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      s.action();
    }
  }, s.label))))), React.createElement("nav", {
    className: "footer-col",
    "aria-label": f.colCompany
  }, React.createElement("h4", null, f.colCompany), React.createElement("ul", null, f.company.map((c, i) => React.createElement("li", {
    key: i
  }, React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      openModal({
        kind: "page",
        label: c
      });
    }
  }, c))))), React.createElement("nav", {
    className: "footer-col",
    "aria-label": f.colHelp
  }, React.createElement("h4", null, f.colHelp), React.createElement("ul", null, f.help.map((c, i) => React.createElement("li", {
    key: i
  }, React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (i === 0) navigate("help");else if (i === 1) navigate("terms");else if (i === 2) navigate("privacy");else openModal({
        kind: "page",
        label: c
      });
    }
  }, c)))))), React.createElement("div", {
    className: "footer-bottom"
  }, React.createElement("span", null, "\xA9 ", year, " ", f.rights), React.createElement("span", null, f.legalNote))));
}
function PhoneMock({
  t,
  lang
}) {
  const aria = lang === "fr" ? "Maquette d’écran OMNIIA One montrant le solde du portefeuille et une course en cours." : "OMNIIA One screen mockup showing the wallet balance and a ride in progress.";
  return React.createElement("div", {
    className: "phone",
    role: "img",
    "aria-label": aria
  }, React.createElement("span", {
    className: "notch",
    "aria-hidden": "true"
  }), React.createElement("div", {
    className: "phone-screen"
  }, React.createElement("div", {
    className: "phone-status"
  }, React.createElement("span", null, "9:41"), React.createElement("span", {
    "aria-hidden": "true"
  }, "OMNIIA One")), React.createElement("div", {
    className: "phone-wallet"
  }, React.createElement("div", {
    className: "pw-label"
  }, t.home.walletLabel), React.createElement("div", {
    className: "pw-amount"
  }, t.home.walletAmount, " ", React.createElement("span", {
    style: {
      fontSize: "0.9rem",
      opacity: 0.7
    }
  }, "GNF")), React.createElement("div", {
    className: "pw-row"
  }, React.createElement("span", null, "Drop \xB7 Finance \xB7 Boutique"), React.createElement("span", null, "\u2022\u2022\u2022\u2022 24"))), React.createElement("div", {
    className: "phone-activity"
  }, React.createElement("span", {
    className: "pa-icon"
  }, React.createElement(Icon, {
    name: "drop"
  })), React.createElement("div", null, React.createElement("div", {
    className: "pa-title"
  }, t.home.phoneActivityTitle), React.createElement("div", {
    className: "pa-sub"
  }, t.home.phoneActivitySub))), React.createElement("div", {
    className: "phone-cta"
  }, t.home.phoneCta)));
}
function CarouselPhone({
  t,
  lang
}) {
  const cfg = t.home.carousel;
  const screens = cfg.screens;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => setI(p => (p + 1) % screens.length), 3600);
    return () => clearInterval(id);
  }, [reduce, paused, screens.length]);
  const aria = lang === "fr" ? "Aperçu de l’application OMNIIA One défilant entre Drop, Finance, Boutique et Discussions." : "OMNIIA One app preview cycling through Drop, Finance, Boutique and Discussions.";
  return React.createElement("div", {
    className: "phone",
    role: "group",
    "aria-label": aria,
    "aria-roledescription": lang === "fr" ? "carrousel" : "carousel",
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocusCapture: () => setPaused(true),
    onBlurCapture: () => setPaused(false)
  }, React.createElement("span", {
    className: "notch",
    "aria-hidden": "true"
  }), React.createElement("div", {
    className: "phone-screen carousel"
  }, React.createElement("div", {
    className: "phone-status"
  }, React.createElement("span", null, "9:41"), React.createElement("span", {
    "aria-hidden": "true"
  }, "OMNIIA One")), React.createElement("div", {
    className: "phone-wallet"
  }, React.createElement("div", {
    className: "pw-label"
  }, cfg.balanceLabel), React.createElement("div", {
    className: "pw-amount"
  }, cfg.amount, " ", React.createElement("span", {
    style: {
      fontSize: "0.9rem",
      opacity: 0.7
    }
  }, "GNF")), React.createElement("div", {
    className: "pw-row"
  }, React.createElement("span", null, "Drop \xB7 Finance \xB7 Boutique"), React.createElement("span", null, "\u2022\u2022\u2022\u2022 24"))), React.createElement("div", {
    className: "carousel-track",
    style: {
      transform: `translateX(-${i * 100}%)`
    }
  }, screens.map((s, idx) => React.createElement("div", {
    className: "carousel-slide",
    key: idx,
    "aria-hidden": idx !== i
  }, React.createElement("div", {
    className: "phone-activity"
  }, React.createElement("span", {
    className: "pa-icon"
  }, React.createElement(Icon, {
    name: s.service
  })), React.createElement("div", null, React.createElement("div", {
    className: "pa-title"
  }, s.title), React.createElement("div", {
    className: "pa-sub"
  }, s.sub))), React.createElement("div", {
    className: "phone-cta"
  }, s.cta)))), React.createElement("div", {
    className: "carousel-dots",
    role: "tablist",
    "aria-label": cfg.label
  }, screens.map((s, idx) => React.createElement("button", {
    key: idx,
    type: "button",
    role: "tab",
    "aria-current": idx === i,
    "aria-label": s.tag,
    onClick: () => setI(idx)
  })))));
}
function Eyebrow({
  children,
  center
}) {
  return React.createElement("p", {
    className: "eyebrow" + (center ? " eyebrow-center" : "")
  }, children);
}
function SectionHead({
  eyebrow,
  title,
  lead,
  center,
  id,
  light
}) {
  return React.createElement("div", {
    className: "section-head" + (center ? " center" : "")
  }, eyebrow && React.createElement(Eyebrow, null, eyebrow), React.createElement("h2", {
    id: id,
    style: light ? {
      color: "#fff"
    } : undefined
  }, title), lead && React.createElement("p", {
    className: "lead",
    style: light ? {
      color: "rgba(251,251,254,.78)"
    } : undefined
  }, lead));
}
Object.assign(window, {
  Header,
  Footer,
  PhoneMock,
  CarouselPhone,
  Eyebrow,
  SectionHead
});