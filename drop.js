function BookingWidget({
  t,
  lang
}) {
  const b = t.drop.booking;
  const [tab, setTab] = useState("ride");
  const [city, setCity] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [whenMode, setWhenMode] = useState("now");
  const [when, setWhen] = useState("");
  const [estimate, setEstimate] = useState(null);
  const tabs = [{
    key: "ride",
    label: b.tabs.ride
  }, {
    key: "parcel",
    label: b.tabs.parcel
  }, {
    key: "schedule",
    label: b.tabs.schedule
  }];
  const doEstimate = () => {
    const cityObj = CITIES.find(c => c.fr === city);
    if (!cityObj || !from.trim() || !to.trim()) {
      setEstimate({
        error: true
      });
      return;
    }
    const base = FARE_BASE[cityObj.currency] || 1000;
    const factor = 1 + (from.length + to.length) % 7 * 0.12;
    const low = base * factor;
    const high = low * 1.5 * (tab === "parcel" ? 1.15 : 1);
    const eta = 4 + (from.length + to.length) % 9;
    setEstimate({
      range: fmtCurrency(low, cityObj.currency, cityObj.locale) + " – " + fmtCurrency(high, cityObj.currency, cityObj.locale),
      eta
    });
  };
  useEffect(() => {
    setEstimate(null);
  }, [city, from, to, tab, whenMode, when]);
  return React.createElement("div", {
    className: "dye-panel booking",
    role: "region",
    "aria-label": lang === "fr" ? "Réserver une course" : "Book a ride"
  }, React.createElement("div", {
    className: "booking-tabs",
    role: "tablist",
    "aria-label": lang === "fr" ? "Type de réservation" : "Booking type"
  }, tabs.map(tb => React.createElement("button", {
    key: tb.key,
    type: "button",
    role: "tab",
    id: "tab-" + tb.key,
    "aria-selected": tab === tb.key,
    "aria-controls": "booking-panel",
    onClick: () => setTab(tb.key)
  }, tb.label))), React.createElement("div", {
    className: "booking-fields",
    id: "booking-panel",
    role: "tabpanel",
    "aria-labelledby": "tab-" + tab
  }, React.createElement("div", {
    className: "field no-icon"
  }, React.createElement("label", {
    htmlFor: "bk-city"
  }, b.cityLabel), React.createElement("select", {
    id: "bk-city",
    value: city,
    onChange: e => setCity(e.target.value),
    style: {
      paddingLeft: "0.9rem"
    }
  }, React.createElement("option", {
    value: ""
  }, b.cityPlaceholder), CITIES.map((c, i) => React.createElement("option", {
    key: i,
    value: c.fr
  }, c[lang], " \u2014 ", c.country[lang])))), React.createElement("div", {
    className: "field"
  }, React.createElement("label", {
    htmlFor: "bk-from"
  }, b.fromLabel), React.createElement("span", {
    className: "field-icon"
  }, React.createElement(Icon, {
    name: "pin"
  })), React.createElement("input", {
    id: "bk-from",
    type: "text",
    value: from,
    onChange: e => setFrom(e.target.value),
    placeholder: b.fromPlaceholder
  })), React.createElement("div", {
    className: "field"
  }, React.createElement("label", {
    htmlFor: "bk-to"
  }, tab === "parcel" ? lang === "fr" ? "Destinataire" : "Recipient" : b.toLabel), React.createElement("span", {
    className: "field-icon"
  }, React.createElement(Icon, {
    name: "flag"
  })), React.createElement("input", {
    id: "bk-to",
    type: "text",
    value: to,
    onChange: e => setTo(e.target.value),
    placeholder: b.toPlaceholder
  })), React.createElement("div", null, React.createElement("span", {
    className: "label",
    style: {
      display: "block",
      color: "rgba(255,255,255,.7)",
      marginBottom: "0.4rem",
      fontSize: "0.72rem"
    }
  }, b.whenLabel), React.createElement("div", {
    className: "when-toggle",
    role: "group",
    "aria-label": b.whenLabel
  }, React.createElement("button", {
    type: "button",
    "aria-pressed": whenMode === "now",
    onClick: () => setWhenMode("now")
  }, b.now), React.createElement("button", {
    type: "button",
    "aria-pressed": whenMode === "later",
    onClick: () => setWhenMode("later")
  }, b.later)), whenMode === "later" && React.createElement("div", {
    className: "field no-icon"
  }, React.createElement("label", {
    htmlFor: "bk-when",
    style: {
      position: "absolute",
      width: 1,
      height: 1,
      overflow: "hidden",
      clip: "rect(0 0 0 0)"
    }
  }, b.whenLabel), React.createElement("input", {
    id: "bk-when",
    type: "datetime-local",
    value: when,
    onChange: e => setWhen(e.target.value),
    style: {
      paddingLeft: "0.9rem"
    }
  }))), React.createElement("button", {
    type: "button",
    className: "btn btn-primary btn-block",
    onClick: doEstimate
  }, b.estimate)), React.createElement("div", {
    className: "estimate-out",
    "aria-live": "polite"
  }, !estimate && React.createElement("p", {
    className: "est-empty"
  }, b.estEmpty), estimate && estimate.error && React.createElement("p", {
    className: "est-empty"
  }, lang === "fr" ? "Choisissez une ville et renseignez le départ et l’arrivée." : "Choose a city and fill in the pickup and destination."), estimate && !estimate.error && React.createElement("div", null, React.createElement("div", {
    className: "est-price"
  }, estimate.range), React.createElement("div", {
    className: "est-eta"
  }, b.etaPrefix, " ", estimate.eta, " ", b.etaUnit))), React.createElement("p", {
    className: "booking-note"
  }, b.note));
}
function DropPage({
  t,
  lang,
  navigate,
  openModal
}) {
  const d = t.drop;
  return React.createElement("main", {
    id: "main"
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
  }, d.eyebrow))), React.createElement("section", {
    className: "hero wrap",
    "aria-labelledby": "drop-h1"
  }, React.createElement("div", {
    className: "hero-grid"
  }, React.createElement("div", null, React.createElement(Eyebrow, null, d.eyebrow), React.createElement("h1", {
    id: "drop-h1"
  }, d.h1), React.createElement("p", {
    className: "lead"
  }, d.lead), React.createElement("ul", {
    className: "svc-checklist"
  }, d.checklist.map((c, i) => React.createElement("li", {
    key: i
  }, React.createElement("span", {
    className: "check"
  }, React.createElement(Icon, {
    name: "check"
  })), c))), React.createElement("div", {
    className: "hero-cta"
  }, React.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: () => navigate("home", "download")
  }, t.cta.download), React.createElement("button", {
    type: "button",
    className: "btn btn-ink",
    onClick: () => openModal({
      kind: "driver"
    })
  }, d.secondaryCta))), React.createElement("div", null, React.createElement(BookingWidget, {
    t: t,
    lang: lang
  })))), React.createElement("section", {
    className: "section section-cloth",
    "aria-labelledby": "drop-feat-h2"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(SectionHead, {
    eyebrow: d.features.eyebrow,
    id: "drop-feat-h2",
    title: d.features.h2,
    center: true
  }), React.createElement("div", {
    className: "segments-grid"
  }, d.features.items.map((it, i) => React.createElement("article", {
    className: "segment-card",
    key: i,
    style: {
      background: "var(--paper)"
    }
  }, React.createElement("span", {
    className: "icon-box"
  }, React.createElement(Icon, {
    name: ["drop", "package", "calendar"][i]
  })), React.createElement("h3", null, it.t), React.createElement("p", null, it.d)))))), React.createElement("section", {
    className: "section",
    "aria-labelledby": "drop-how-h2"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(SectionHead, {
    eyebrow: d.how.eyebrow,
    id: "drop-how-h2",
    title: d.how.h2
  }), React.createElement("div", {
    className: "steps-grid"
  }, d.how.steps.map((s, i) => React.createElement("div", {
    className: "step",
    key: i
  }, React.createElement("h3", null, s.t), React.createElement("p", null, s.d)))))), React.createElement("section", {
    className: "section section-ink",
    "aria-labelledby": "drop-cta-h2"
  }, React.createElement("div", {
    className: "wrap cta-compact"
  }, React.createElement("div", {
    className: "cta-copy"
  }, React.createElement("h2", {
    id: "drop-cta-h2"
  }, d.cta.h2), React.createElement("p", null, d.cta.lead)), React.createElement("div", {
    className: "store-btns",
    style: {
      margin: 0
    }
  }, React.createElement("a", {
    className: "store-btn",
    href: "#",
    onClick: e => {
      e.preventDefault();
      openModal({
        kind: "app"
      });
    },
    "aria-label": t.home.download.appStore
  }, React.createElement(Icon, {
    name: "apple"
  }), React.createElement("span", null, React.createElement("span", {
    className: "sb-small"
  }, t.home.download.downloadOn), React.createElement("br", null), React.createElement("span", {
    className: "sb-big"
  }, t.home.download.appStore))), React.createElement("a", {
    className: "store-btn",
    href: "#",
    onClick: e => {
      e.preventDefault();
      openModal({
        kind: "app"
      });
    },
    "aria-label": t.home.download.googlePlay
  }, React.createElement(Icon, {
    name: "play"
  }), React.createElement("span", null, React.createElement("span", {
    className: "sb-small"
  }, t.home.download.getItOn), React.createElement("br", null), React.createElement("span", {
    className: "sb-big"
  }, t.home.download.googlePlay)))))));
}
Object.assign(window, {
  DropPage,
  BookingWidget
});