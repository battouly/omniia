const SERVICE_KEYS = ["drop", "finance", "boutique", "chat"];
const CAROUSEL_KEYS = ["drop", "business", "marchand", "particuliers", "chauffeurs"];
const CAROUSEL_IMG = {
  business: "uploads/Entreprises.jpg",
  marchand: "uploads/merchant.jpg",
  particuliers: "uploads/Particuliers.jpg",
  chauffeurs: "uploads/chauffeurs.jpg"
};
const CAROUSEL_IMG_DEFAULT = "uploads/vitaly-gariev-imageholder.jpg";
function ServiceCard({
  sKey,
  t,
  navigate,
  openModal,
  variant
}) {
  const s = t.services[sKey];
  const onGo = e => {
    e.preventDefault();
    if (sKey === "drop") navigate("drop");else openModal({
      kind: "soon",
      service: sKey
    });
  };
  if (variant === "list") {
    return React.createElement("article", {
      className: "svc-card"
    }, React.createElement("span", {
      className: "icon-box"
    }, React.createElement(Icon, {
      name: sKey
    })), React.createElement("div", {
      className: "svc-body"
    }, React.createElement("h3", null, s.name, " ", React.createElement("span", {
      className: "muted",
      style: {
        fontWeight: 400,
        fontSize: "0.92rem"
      }
    }, "\xB7 ", s.tag)), React.createElement("p", null, s.desc)), React.createElement("a", {
      className: "discover",
      href: "#",
      onClick: onGo
    }, t.discover, " ", React.createElement(Icon, {
      name: "arrow",
      className: "arrow"
    })));
  }
  return React.createElement("article", {
    className: "svc-card"
  }, React.createElement("span", {
    className: "icon-box"
  }, React.createElement(Icon, {
    name: sKey
  })), React.createElement("h3", null, s.name), React.createElement("p", null, s.desc), React.createElement("a", {
    className: "discover",
    href: "#",
    onClick: onGo
  }, t.discover, " ", React.createElement(Icon, {
    name: "arrow",
    className: "arrow"
  })));
}
function ServiceCarousel({
  t,
  lang,
  navigate,
  openModal
}) {
  const [idx, setIdx] = React.useState(0);
  const n = CAROUSEL_KEYS.length;
  const go = d => setIdx(i => (i + d + n) % n);
  const onGo = (sKey, e) => {
    e.preventDefault();
    if (sKey === "drop") navigate("drop");else if (sKey === "business") navigate("business");else if (sKey === "marchand") navigate("marchand");else if (sKey === "particuliers") navigate("particuliers");else if (sKey === "chauffeurs") navigate("chauffeurs");else openModal({
      kind: "soon",
      service: sKey
    });
  };
  const prevLabel = lang === "fr" ? "Service pr\u00e9c\u00e9dent" : "Previous service";
  const nextLabel = lang === "fr" ? "Service suivant" : "Next service";
  return React.createElement("div", {
    className: "svc-carousel",
    role: "region",
    "aria-roledescription": lang === "fr" ? "carrousel" : "carousel",
    "aria-label": lang === "fr" ? "Services OMNIIA One" : "OMNIIA One services"
  }, React.createElement("div", {
    className: "svc-carousel-viewport"
  }, React.createElement("div", {
    className: "svc-carousel-track",
    style: {
      transform: "translateX(-" + idx * 100 + "%)"
    }
  }, CAROUSEL_KEYS.map((k, i) => {
    const s = t.services[k];
    return React.createElement("div", {
      className: "svc-slide",
      key: k,
      "aria-hidden": i !== idx
    }, React.createElement("div", {
      className: "svc-slide-media"
    }, React.createElement("img", {
      className: "svc-slide-img",
      src: CAROUSEL_IMG[k] || CAROUSEL_IMG_DEFAULT,
      alt: "",
      loading: "lazy"
    }), React.createElement("span", {
      className: "svc-slide-badge"
    }, React.createElement(Icon, {
      name: k
    }), " ", s.tag)), React.createElement("div", {
      className: "svc-slide-body"
    }, React.createElement(Eyebrow, null, s.tag), React.createElement("h3", null, s.name), React.createElement("p", null, s.desc), React.createElement("div", {
      className: "svc-slide-cta"
    }, React.createElement("button", {
      type: "button",
      className: "btn btn-primary",
      onClick: e => onGo(k, e)
    }, t.discover))));
  }))), React.createElement("button", {
    type: "button",
    className: "svc-arrow prev",
    onClick: () => go(-1),
    "aria-label": prevLabel
  }, React.createElement(Icon, {
    name: "chevronL"
  })), React.createElement("button", {
    type: "button",
    className: "svc-arrow next",
    onClick: () => go(1),
    "aria-label": nextLabel
  }, React.createElement(Icon, {
    name: "chevronR"
  })), React.createElement("div", {
    className: "svc-carousel-dots"
  }, CAROUSEL_KEYS.map((k, i) => React.createElement("button", {
    key: k,
    type: "button",
    "aria-current": i === idx,
    "aria-label": t.services[k].name,
    onClick: () => setIdx(i)
  }))));
}
function WalletHub({
  t
}) {
  return React.createElement("div", {
    className: "wallet-hub",
    "aria-hidden": "false"
  }, React.createElement(Icon, {
    name: "wallet"
  }), React.createElement("span", null, t.home.hubLabel));
}
function PlatformCluster({
  t,
  lang,
  navigate,
  openModal,
  variant
}) {
  if (variant === "carousel") {
    return React.createElement(ServiceCarousel, {
      t: t,
      lang: lang,
      navigate: navigate,
      openModal: openModal
    });
  }
  if (variant === "list") {
    return React.createElement("div", {
      className: "platform-list"
    }, SERVICE_KEYS.map(k => React.createElement(ServiceCard, {
      key: k,
      sKey: k,
      t: t,
      navigate: navigate,
      openModal: openModal,
      variant: "list"
    })));
  }
  return React.createElement("div", {
    className: "platform-grid" + (variant === "radiant" ? " radiant" : "")
  }, SERVICE_KEYS.map(k => React.createElement(ServiceCard, {
    key: k,
    sKey: k,
    t: t,
    navigate: navigate,
    openModal: openModal,
    variant: variant
  })), React.createElement(WalletHub, {
    t: t
  }));
}
function HomeHero({
  t,
  lang,
  navigate,
  openModal,
  heroVariant,
  hubVariant
}) {
  const cta = React.createElement("div", {
    className: "hero-cta"
  }, React.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: () => openModal({
      kind: "app"
    })
  }, t.cta.platform), React.createElement("button", {
    type: "button",
    className: "btn btn-ghost",
    onClick: () => navigate("drop")
  }, t.cta.drop));
  if (heroVariant === "centered") {
    return React.createElement("section", {
      className: "hero wrap",
      "aria-labelledby": "hero-h1"
    }, React.createElement("div", {
      className: "hero-center"
    }, React.createElement(Eyebrow, null, t.home.eyebrow), React.createElement("h1", {
      id: "hero-h1"
    }, t.home.h1), React.createElement("p", {
      className: "lead"
    }, t.home.lead), cta, React.createElement("p", {
      className: "hero-note"
    }, t.home.note)), React.createElement("div", {
      style: {
        marginTop: "clamp(2.5rem,5vw,3.5rem)"
      }
    }, React.createElement(PlatformCluster, {
      t: t,
      lang: lang,
      navigate: navigate,
      openModal: openModal,
      variant: hubVariant
    })));
  }
  if (heroVariant === "panel") {
    return React.createElement("section", {
      className: "hero wrap",
      "aria-labelledby": "hero-h1"
    }, React.createElement("div", {
      className: "hero-grid"
    }, React.createElement("div", null, React.createElement(Eyebrow, null, t.home.eyebrow), React.createElement("h1", {
      id: "hero-h1"
    }, t.home.h1), React.createElement("p", {
      className: "lead"
    }, t.home.lead), cta, React.createElement("p", {
      className: "hero-note"
    }, t.home.note)), React.createElement("div", {
      className: "hero-phone-wrap dye-panel",
      style: {
        padding: "2rem 1.6rem"
      }
    }, React.createElement(PhoneMock, {
      t: t,
      lang: lang
    }))));
  }
  const Visual = heroVariant === "carousel" ? React.createElement(CarouselPhone, {
    t: t,
    lang: lang
  }) : React.createElement(PhoneMock, {
    t: t,
    lang: lang
  });
  return React.createElement("section", {
    className: "hero wrap",
    "aria-labelledby": "hero-h1"
  }, React.createElement("div", {
    className: "hero-grid"
  }, React.createElement("div", null, React.createElement(Eyebrow, null, t.home.eyebrow), React.createElement("h1", {
    id: "hero-h1"
  }, t.home.h1), React.createElement("p", {
    className: "lead"
  }, t.home.lead), cta, React.createElement("p", {
    className: "hero-note"
  }, t.home.note)), React.createElement("div", {
    className: "hero-phone-wrap"
  }, Visual)));
}
function HomePage({
  t,
  lang,
  navigate,
  openModal,
  heroVariant,
  hubVariant
}) {
  const h = t.home;
  return React.createElement("main", {
    id: "main"
  }, React.createElement(HomeHero, {
    t: t,
    lang: lang,
    navigate: navigate,
    openModal: openModal,
    heroVariant: heroVariant,
    hubVariant: hubVariant
  }), heroVariant !== "centered" && React.createElement("section", {
    className: "section section-cloth" + (hubVariant === "carousel" ? " section-flush services-flush" : ""),
    id: "services",
    "aria-label": lang === "fr" ? "Services OMNIIA One" : "OMNIIA One services"
  }, hubVariant !== "carousel" && React.createElement("div", {
    className: "wrap"
  }, React.createElement(Eyebrow, {
    center: true
  }, h.eyebrow)), hubVariant === "carousel" ? React.createElement(ServiceCarousel, {
    t: t,
    lang: lang,
    navigate: navigate,
    openModal: openModal
  }) : React.createElement("div", {
    className: "wrap"
  }, React.createElement(PlatformCluster, {
    t: t,
    lang: lang,
    navigate: navigate,
    openModal: openModal,
    variant: hubVariant
  }))), heroVariant === "centered" && React.createElement("div", {
    id: "services"
  }), React.createElement("section", {
    className: "section",
    "aria-labelledby": "ic-h2"
  }, React.createElement("div", {
    className: "wrap interconnect"
  }, React.createElement("div", null, React.createElement(SectionHead, {
    eyebrow: h.interconnect.eyebrow,
    id: "ic-h2",
    title: h.interconnect.h2,
    lead: h.interconnect.lead
  })), React.createElement("ol", {
    className: "flow-list"
  }, h.interconnect.flows.map((fl, i) => React.createElement("li", {
    className: "flow-item",
    key: i
  }, React.createElement("span", {
    className: "flow-num",
    "aria-hidden": "true"
  }, i + 1), React.createElement("div", null, React.createElement("h3", null, fl.t), React.createElement("p", null, fl.d))))))), React.createElement("section", {
    className: "section section-cloth",
    id: "cities",
    "aria-labelledby": "cities-h2"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(SectionHead, {
    eyebrow: h.cities.eyebrow,
    id: "cities-h2",
    title: h.cities.h2,
    lead: h.cities.lead
  }), React.createElement("div", {
    className: "cities-grid"
  }, CITIES.map((c, i) => React.createElement("article", {
    className: "city-card",
    key: i
  }, React.createElement("div", {
    className: "city-name"
  }, c[lang]), React.createElement("div", {
    className: "city-country"
  }, c.country[lang]), React.createElement("span", {
    className: "badge " + (c.status === "ok" ? "badge-ok" : "badge-soon")
  }, React.createElement("span", {
    className: "dot",
    "aria-hidden": "true"
  }), c.status === "ok" ? h.cities.statusOk : h.cities.statusSoon)))))), React.createElement("section", {
    className: "section",
    id: "download",
    "aria-labelledby": "dl-h2"
  }, React.createElement("div", {
    className: "wrap download-grid"
  }, React.createElement("div", null, React.createElement(SectionHead, {
    eyebrow: h.download.eyebrow,
    id: "dl-h2",
    title: h.download.h2,
    lead: h.download.lead
  }), React.createElement("div", {
    className: "store-btns"
  }, React.createElement("a", {
    className: "store-btn",
    href: "#",
    onClick: e => {
      e.preventDefault();
      openModal({
        kind: "app"
      });
    },
    "aria-label": h.download.appStore
  }, React.createElement(Icon, {
    name: "apple"
  }), React.createElement("span", null, React.createElement("span", {
    className: "sb-small"
  }, h.download.downloadOn), React.createElement("br", null), React.createElement("span", {
    className: "sb-big"
  }, h.download.appStore))), React.createElement("a", {
    className: "store-btn",
    href: "#",
    onClick: e => {
      e.preventDefault();
      openModal({
        kind: "app"
      });
    },
    "aria-label": h.download.googlePlay
  }, React.createElement(Icon, {
    name: "play"
  }), React.createElement("span", null, React.createElement("span", {
    className: "sb-small"
  }, h.download.getItOn), React.createElement("br", null), React.createElement("span", {
    className: "sb-big"
  }, h.download.googlePlay)))), React.createElement("ul", {
    className: "benefit-list"
  }, h.download.benefits.map((b, i) => React.createElement("li", {
    key: i
  }, React.createElement("span", {
    className: "check"
  }, React.createElement(Icon, {
    name: "check"
  })), b)))), React.createElement("div", {
    className: "hero-phone-wrap"
  }, React.createElement(PhoneMock, {
    t: t,
    lang: lang
  })))), React.createElement("section", {
    className: "section section-cloth",
    "aria-labelledby": "seg-h2"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(SectionHead, {
    eyebrow: h.segments.eyebrow,
    id: "seg-h2",
    title: h.segments.h2,
    lead: h.segments.lead,
    center: true
  }), React.createElement("div", {
    className: "segments-grid"
  }, h.segments.items.map((it, i) => React.createElement("article", {
    className: "segment-card",
    key: i
  }, React.createElement("span", {
    className: "icon-box"
  }, React.createElement(Icon, {
    name: ["person", "business", "steering"][i]
  })), React.createElement("h3", null, it.t), React.createElement("p", null, it.d)))))), React.createElement("section", {
    className: "section",
    "aria-labelledby": "trust-h2"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "trust-strip",
    style: {
      marginBottom: "clamp(2rem,4vw,3rem)"
    }
  }, h.trust.stats.map((s, i) => React.createElement("div", {
    className: "trust-stat",
    key: i
  }, React.createElement("span", {
    className: "ts-num"
  }, s.num), React.createElement("span", {
    className: "ts-label"
  }, s.label)))), React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, React.createElement(SectionHead, {
    eyebrow: h.trust.eyebrow,
    id: "trust-h2",
    title: h.trust.h2,
    lead: h.trust.lead
  }), React.createElement("form", {
    className: "waitlist-form",
    onSubmit: e => e.preventDefault()
  }, React.createElement("label", {
    htmlFor: "wl-email",
    style: {
      position: "absolute",
      width: 1,
      height: 1,
      overflow: "hidden",
      clip: "rect(0 0 0 0)"
    }
  }, h.trust.emailPlaceholder), React.createElement("input", {
    id: "wl-email",
    type: "email",
    placeholder: h.trust.emailPlaceholder,
    autoComplete: "email"
  }), React.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, t.cta.waitlist)), React.createElement("p", {
    className: "nospam"
  }, h.trust.nospam, " ", React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      navigate("privacy");
    }
  }, h.trust.privacy), ".")))));
}
Object.assign(window, {
  HomePage
});