function SegmentHero({
  seg,
  act,
  idp
}) {
  const h = seg.hero;
  return React.createElement("section", {
    className: "biz-hero",
    "aria-labelledby": idp + "-h1"
  }, React.createElement("div", {
    className: "wrap biz-hero-grid"
  }, React.createElement("div", {
    className: "biz-hero-copy"
  }, React.createElement(Eyebrow, null, h.eyebrow), React.createElement("h1", {
    id: idp + "-h1"
  }, h.h1), React.createElement("p", {
    className: "lead"
  }, h.lead), React.createElement("div", {
    className: "hero-cta"
  }, React.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: act.onPrimary
  }, h.ctaPrimary), React.createElement("button", {
    type: "button",
    className: "btn btn-ghost btn-on-dye",
    onClick: act.onSecondary
  }, h.ctaSecondary))), React.createElement("div", {
    className: "biz-hero-media",
    "aria-hidden": "true"
  }, React.createElement("div", {
    className: "biz-cloth"
  }), React.createElement("div", {
    className: "biz-pay-card"
  }, React.createElement("span", {
    className: "biz-pay-icon"
  }, React.createElement(Icon, {
    name: "check"
  })), React.createElement("div", {
    className: "biz-pay-label"
  }, h.cardLabel), React.createElement("div", {
    className: "biz-pay-amount"
  }, h.cardAmount, " ", React.createElement("span", {
    className: "biz-cur"
  }, "GNF")), React.createElement("div", {
    className: "biz-pay-name"
  }, h.cardName), React.createElement("div", {
    className: "biz-pay-status"
  }, React.createElement("span", {
    className: "biz-dot"
  }), h.cardStatus)))));
}
function SegmentWhy({
  seg,
  idp
}) {
  const w = seg.why;
  return React.createElement("section", {
    className: "section biz-why",
    "aria-labelledby": idp + "-why-h2"
  }, React.createElement("div", {
    className: "wrap biz-split"
  }, React.createElement("div", {
    className: "biz-ledger",
    "aria-hidden": "true"
  }, React.createElement("div", {
    className: "biz-ledger-top"
  }, React.createElement("span", {
    className: "biz-ledger-label"
  }, w.panelLabel), React.createElement("span", {
    className: "biz-ledger-amount"
  }, w.panelAmount, " ", React.createElement("span", {
    className: "biz-cur"
  }, "GNF"))), React.createElement("ul", {
    className: "biz-ledger-rows"
  }, w.rows.map((r, i) => {
    const isIn = r.v.trim().charAt(0) === "+";
    return React.createElement("li", {
      key: i
    }, React.createElement("span", {
      className: "bl-icon"
    }, React.createElement(Icon, {
      name: isIn ? "finance" : "send"
    })), React.createElement("span", {
      className: "bl-text"
    }, r.t), React.createElement("span", {
      className: "bl-val" + (isIn ? " in" : "")
    }, r.v));
  }))), React.createElement("div", {
    className: "biz-why-copy"
  }, React.createElement(Eyebrow, null, w.eyebrow), React.createElement("h2", {
    id: idp + "-why-h2"
  }, w.h2), React.createElement("p", {
    className: "lead"
  }, w.body))));
}
function SegmentUse({
  seg,
  idp
}) {
  const u = seg.use;
  return React.createElement("section", {
    className: "section section-cloth biz-use",
    "aria-labelledby": idp + "-use-h2"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("h2", {
    id: idp + "-use-h2",
    className: "biz-center-h2"
  }, u.h2), React.createElement("div", {
    className: "use-grid"
  }, u.items.map((it, i) => React.createElement("article", {
    className: "use-tile",
    key: i
  }, React.createElement("span", {
    className: "use-icon"
  }, React.createElement(Icon, {
    name: it.icon
  })), React.createElement("h3", null, it.t), React.createElement("p", null, it.d))))));
}
function SegmentBand({
  seg
}) {
  return React.createElement("section", {
    className: "biz-band",
    "aria-label": ""
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("p", null, seg.band)));
}
function SegmentHow({
  seg,
  idp
}) {
  const hw = seg.how;
  return React.createElement("section", {
    className: "section biz-how",
    "aria-labelledby": idp + "-how-h2"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("h2", {
    id: idp + "-how-h2",
    className: "biz-center-h2"
  }, hw.h2), React.createElement("div", {
    className: "biz-how-grid"
  }, hw.steps.map((s, i) => React.createElement("div", {
    className: "biz-how-item",
    key: i
  }, React.createElement("span", {
    className: "biz-how-icon"
  }, React.createElement(Icon, {
    name: s.icon
  })), React.createElement("h3", null, s.t), React.createElement("p", null, s.d))))));
}
function SegmentLearn({
  seg,
  act,
  openModal,
  idp
}) {
  const l = seg.learn;
  return React.createElement("section", {
    className: "biz-learn",
    "aria-labelledby": idp + "-learn-h2"
  }, React.createElement("div", {
    className: "wrap biz-learn-grid"
  }, React.createElement("div", {
    className: "biz-learn-copy"
  }, React.createElement("h2", {
    id: idp + "-learn-h2"
  }, l.h2), React.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: act.onLearn
  }, l.cta)), React.createElement("ul", {
    className: "biz-learn-links"
  }, l.links.map((lk, i) => React.createElement("li", {
    key: i
  }, React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      openModal({
        kind: "page",
        label: lk
      });
    }
  }, lk, " ", React.createElement(Icon, {
    name: "chevronR"
  })))))));
}
function SegmentNotes({
  seg
}) {
  return React.createElement("section", {
    className: "biz-notes",
    "aria-label": ""
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("ol", null, seg.notes.map((n, i) => React.createElement("li", {
    key: i
  }, n)))));
}
function SegmentPage({
  seg,
  act,
  openModal,
  navigate,
  lang,
  idp
}) {
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
  }, seg.breadcrumb))), React.createElement(SegmentHero, {
    seg: seg,
    act: act,
    idp: idp
  }), React.createElement(SegmentWhy, {
    seg: seg,
    idp: idp
  }), React.createElement(SegmentUse, {
    seg: seg,
    idp: idp
  }), React.createElement(SegmentBand, {
    seg: seg
  }), React.createElement(SegmentHow, {
    seg: seg,
    idp: idp
  }), React.createElement(SegmentLearn, {
    seg: seg,
    act: act,
    openModal: openModal,
    idp: idp
  }), React.createElement(SegmentNotes, {
    seg: seg
  }));
}
function BusinessPage({
  t,
  lang,
  navigate,
  openModal
}) {
  const seg = t.business;
  const act = {
    onPrimary: () => openModal({
      kind: "partner",
      role: seg.hero.ctaPrimary,
      partnerType: "merchant"
    }),
    onSecondary: () => navigate("home", "download"),
    onLearn: () => openModal({
      kind: "partner",
      role: seg.learn.cta,
      partnerType: "merchant"
    })
  };
  return React.createElement(SegmentPage, {
    seg: seg,
    act: act,
    openModal: openModal,
    navigate: navigate,
    lang: lang,
    idp: "biz"
  });
}
Object.assign(window, {
  SegmentPage,
  BusinessPage
});