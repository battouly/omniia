function Modal({
  open,
  onClose,
  titleId,
  children
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement;
    document.body.style.overflow = "hidden";
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const id = requestAnimationFrame(() => {
      const node = ref.current;
      if (!node) return;
      const target = node.querySelector("[data-autofocus]") || node.querySelector("button, input, select, a");
      if (target) target.focus();
    });
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      cancelAnimationFrame(id);
      if (prev && prev.focus) prev.focus();
    };
  }, [open]);
  if (!open) return null;
  return React.createElement("div", {
    className: "modal-overlay",
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, React.createElement("div", {
    className: "modal",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": titleId,
    ref: ref
  }, children));
}
function StoreButtons({
  t
}) {
  const dl = t.home.download;
  return React.createElement("div", {
    className: "store-btns",
    style: {
      margin: "1.2rem 0 0.4rem"
    }
  }, React.createElement("a", {
    className: "store-btn",
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": dl.appStore
  }, React.createElement(Icon, {
    name: "apple"
  }), React.createElement("span", null, React.createElement("span", {
    className: "sb-small"
  }, dl.downloadOn), React.createElement("br", null), React.createElement("span", {
    className: "sb-big"
  }, dl.appStore))), React.createElement("a", {
    className: "store-btn",
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": dl.googlePlay
  }, React.createElement(Icon, {
    name: "play"
  }), React.createElement("span", null, React.createElement("span", {
    className: "sb-small"
  }, dl.getItOn), React.createElement("br", null), React.createElement("span", {
    className: "sb-big"
  }, dl.googlePlay))));
}
function SoonBadge({
  t
}) {
  return React.createElement("span", {
    className: "badge badge-soon"
  }, React.createElement("span", {
    className: "dot",
    "aria-hidden": "true"
  }), t.home.cities.statusSoon);
}
function DriverForm({
  t,
  lang,
  onClose,
  role,
  partnerType
}) {
  const d = t.modal.driver;
  const p = t.modal.partner;
  const isMerchant = partnerType === "merchant";
  const title = role ? p.titlePrefix + " " + role : d.title;
  const body = role ? isMerchant ? p.bodyMerchant : p.bodyDriver : d.body;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    vehicle: ""
  });
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  if (submitted) {
    return React.createElement("div", {
      className: "modal-body",
      style: {
        textAlign: "center"
      }
    }, React.createElement("span", {
      className: "modal-success-icon",
      "aria-hidden": "true"
    }, React.createElement(Icon, {
      name: "check"
    })), React.createElement("h2", {
      id: "modal-title"
    }, d.successTitle), React.createElement("p", {
      className: "muted",
      style: {
        marginTop: "0.6rem"
      }
    }, d.successBody), React.createElement("div", {
      className: "modal-actions",
      style: {
        justifyContent: "center"
      }
    }, React.createElement("button", {
      type: "button",
      className: "btn btn-ink",
      onClick: onClose
    }, t.modal.close)));
  }
  return React.createElement("div", {
    className: "modal-body"
  }, React.createElement("h2", {
    id: "modal-title"
  }, title), React.createElement("p", {
    className: "muted",
    style: {
      marginTop: "0.5rem"
    }
  }, body), React.createElement("form", {
    className: "modal-form",
    onSubmit: e => {
      e.preventDefault();
      setSubmitted(true);
    }
  }, React.createElement("div", {
    className: "field no-icon"
  }, React.createElement("label", {
    htmlFor: "dr-name"
  }, d.name), React.createElement("input", {
    id: "dr-name",
    type: "text",
    required: true,
    "data-autofocus": true,
    value: form.name,
    onChange: set("name"),
    placeholder: d.namePh,
    autoComplete: "name"
  })), React.createElement("div", {
    className: "field no-icon"
  }, React.createElement("label", {
    htmlFor: "dr-phone"
  }, d.phone), React.createElement("input", {
    id: "dr-phone",
    type: "tel",
    required: true,
    value: form.phone,
    onChange: set("phone"),
    placeholder: d.phonePh,
    autoComplete: "tel"
  })), React.createElement("div", {
    className: "field no-icon"
  }, React.createElement("label", {
    htmlFor: "dr-city"
  }, d.city), React.createElement("select", {
    id: "dr-city",
    required: true,
    value: form.city,
    onChange: set("city")
  }, React.createElement("option", {
    value: ""
  }, d.cityPh), CITIES.map((c, i) => React.createElement("option", {
    key: i,
    value: c.fr
  }, c[lang], " \u2014 ", c.country[lang])))), React.createElement("div", {
    className: "field no-icon"
  }, React.createElement("label", {
    htmlFor: "dr-vehicle"
  }, isMerchant ? p.activity : d.vehicle), React.createElement("select", {
    id: "dr-vehicle",
    required: true,
    value: form.vehicle,
    onChange: set("vehicle")
  }, React.createElement("option", {
    value: ""
  }, isMerchant ? p.activityPh : d.cityPh), (isMerchant ? p.merchantOptions : d.vehicleOptions).map((v, i) => React.createElement("option", {
    key: i,
    value: v
  }, v)))), React.createElement("button", {
    type: "submit",
    className: "btn btn-primary btn-block"
  }, d.submit)), React.createElement("p", {
    className: "nospam",
    style: {
      marginTop: "0.8rem"
    }
  }, d.privacyNote, " ", React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, t.home.trust.privacy), "."));
}
function AppModal({
  modal,
  onClose,
  t,
  lang,
  navigate
}) {
  const m = t.modal;
  const open = !!modal;
  const notify = () => {
    onClose();
    navigate("home", "trust");
  };
  let body = null;
  if (modal && modal.kind === "app") {
    body = React.createElement("div", {
      className: "modal-body"
    }, React.createElement(SoonBadge, {
      t: t
    }), React.createElement("h2", {
      id: "modal-title"
    }, m.appTitle), React.createElement("p", {
      className: "muted",
      style: {
        marginTop: "0.6rem"
      }
    }, m.appBody), React.createElement(StoreButtons, {
      t: t
    }), React.createElement("p", {
      className: "nospam"
    }, m.appSoon), React.createElement("div", {
      className: "modal-actions"
    }, React.createElement("button", {
      type: "button",
      className: "btn btn-primary",
      onClick: notify
    }, m.notify), React.createElement("button", {
      type: "button",
      className: "btn btn-ghost",
      onClick: onClose
    }, m.later)));
  } else if (modal && modal.kind === "soon") {
    body = React.createElement("div", {
      className: "modal-body"
    }, React.createElement(SoonBadge, {
      t: t
    }), React.createElement("h2", {
      id: "modal-title"
    }, m.serviceTitle[modal.service]), React.createElement("p", {
      className: "muted",
      style: {
        marginTop: "0.6rem"
      }
    }, m.serviceBody), React.createElement("div", {
      className: "modal-actions"
    }, React.createElement("button", {
      type: "button",
      className: "btn btn-primary",
      onClick: notify
    }, m.notify), React.createElement("button", {
      type: "button",
      className: "btn btn-ghost",
      onClick: onClose
    }, m.later)));
  } else if (modal && modal.kind === "page") {
    body = React.createElement("div", {
      className: "modal-body"
    }, React.createElement(SoonBadge, {
      t: t
    }), React.createElement("h2", {
      id: "modal-title"
    }, modal.label || m.pageSoon), React.createElement("p", {
      className: "muted",
      style: {
        marginTop: "0.6rem"
      }
    }, m.pageBody), React.createElement("div", {
      className: "modal-actions"
    }, React.createElement("button", {
      type: "button",
      className: "btn btn-primary",
      onClick: notify
    }, m.notify), React.createElement("button", {
      type: "button",
      className: "btn btn-ghost",
      onClick: onClose
    }, m.later)));
  } else if (modal && modal.kind === "driver") {
    body = React.createElement(DriverForm, {
      t: t,
      lang: lang,
      onClose: onClose
    });
  } else if (modal && modal.kind === "partner") {
    body = React.createElement(DriverForm, {
      t: t,
      lang: lang,
      onClose: onClose,
      role: modal.role,
      partnerType: modal.partnerType
    });
  }
  return React.createElement(Modal, {
    open: open,
    onClose: onClose,
    titleId: "modal-title"
  }, React.createElement("button", {
    type: "button",
    className: "modal-close",
    "aria-label": m.close,
    onClick: onClose
  }, React.createElement(Icon, {
    name: "close"
  })), body);
}
Object.assign(window, {
  Modal,
  AppModal
});