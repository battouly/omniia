const {
  createElement: h
} = React;
const ICON_PATHS = {
  drop: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M3 13l1.6-4.2A2 2 0 0 1 6.5 7.5h11a2 2 0 0 1 1.9 1.3L21 13"
  }), React.createElement("path", {
    d: "M3 13h18v4.5a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1V17H6.5v.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"
  }), React.createElement("circle", {
    cx: "6.5",
    cy: "15",
    r: "0.6",
    fill: "currentColor",
    stroke: "none"
  }), React.createElement("circle", {
    cx: "17.5",
    cy: "15",
    r: "0.6",
    fill: "currentColor",
    stroke: "none"
  })),
  finance: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("rect", {
    x: "3",
    y: "6",
    width: "18",
    height: "12",
    rx: "2.5"
  }), React.createElement("path", {
    d: "M3 10h18"
  }), React.createElement("circle", {
    cx: "16.5",
    cy: "14",
    r: "1.1"
  })),
  boutique: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M4 9.5L5 5h14l1 4.5"
  }), React.createElement("path", {
    d: "M4 9.5a2.2 2.2 0 0 0 4.3 0 2.2 2.2 0 0 0 4.3 0 2.2 2.2 0 0 0 4.3 0"
  }), React.createElement("path", {
    d: "M5 10.5V19h14v-8.5"
  }), React.createElement("path", {
    d: "M10 19v-4h4v4"
  })),
  chat: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 3.5V6a1 1 0 0 1 1-1z"
  }), React.createElement("path", {
    d: "M9 10h6M9 12.6h3.5"
  })),
  wallet: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("rect", {
    x: "3",
    y: "6",
    width: "18",
    height: "12",
    rx: "2.5"
  }), React.createElement("path", {
    d: "M16 12h5M16 12a2 2 0 0 0 0 0"
  }), React.createElement("circle", {
    cx: "16.5",
    cy: "12",
    r: "1.4",
    fill: "currentColor",
    stroke: "none"
  })),
  check: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M4 12.5l5 5 11-11"
  })),
  arrow: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  chevronD: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M5 9l7 7 7-7"
  })),
  chevronL: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M15 5l-7 7 7 7"
  })),
  chevronR: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M9 5l7 7-7 7"
  })),
  menu: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round"
  }, React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16"
  })),
  close: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round"
  }, React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  })),
  pin: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"
  }), React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.4"
  })),
  flag: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M6 21V4M6 5h11l-2 3 2 3H6"
  })),
  package: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M21 8.5L12 3 3 8.5v7L12 21l9-5.5z"
  }), React.createElement("path", {
    d: "M3 8.5L12 14l9-5.5M12 14v7"
  })),
  calendar: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("rect", {
    x: "4",
    y: "5.5",
    width: "16",
    height: "15",
    rx: "2.5"
  }), React.createElement("path", {
    d: "M4 10h16M8 3.5v4M16 3.5v4"
  })),
  city: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M4 21V9l5-3v15M9 21h11V12l-5-2.5M13 13h2M13 16h2M9 13h.01M9 16h.01"
  })),
  person: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "3.4"
  }), React.createElement("path", {
    d: "M5 20a7 7 0 0 1 14 0"
  })),
  business: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("rect", {
    x: "4",
    y: "8",
    width: "16",
    height: "12",
    rx: "2"
  }), React.createElement("path", {
    d: "M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M4 13h16"
  })),
  steering: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8.5"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2.6"
  }), React.createElement("path", {
    d: "M9.6 14.2L4.5 17M14.4 14.2l5.1 2.8M12 9.4V4"
  })),
  send: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M20 4L3 11l6 2.5L20 4zM20 4l-6 16-2.8-6.2"
  })),
  track: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("circle", {
    cx: "12",
    cy: "11",
    r: "2.6"
  }), React.createElement("path", {
    d: "M12 13.6V20M5 20h14"
  }), React.createElement("path", {
    d: "M7.5 6.5a6 6 0 0 1 9 0",
    opacity: "0.5"
  })),
  apple: React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M16.4 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.5.8-3.1.8s-1.6-.8-2.7-.7c-1.4 0-2.6.8-3.3 2-1.4 2.5-.4 6.1 1 8.1.7 1 1.5 2.1 2.5 2 1-.04 1.4-.65 2.6-.65s1.6.65 2.7.63c1.1-.02 1.8-1 2.5-2 .8-1.1 1.1-2.2 1.1-2.3-.02-.01-2.1-.8-2.1-3.2zM14.3 6.3c.5-.7.9-1.6.8-2.5-.8.03-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9.07 1.7-.4 2.3-1.1z"
  })),
  play: React.createElement("g", null, React.createElement("path", {
    d: "M4 4.2v15.6c0 .5.5.8.9.6l8.4-4.7-2.9-2.9L4 4.2z",
    fill: "currentColor",
    opacity: "0.85"
  }), React.createElement("path", {
    d: "M4.9 3.6l8.4 8.4 2.8-1.6c.6-.4.6-1.3 0-1.6L5.8 3.2c-.3-.2-.7-.1-.9.4z",
    fill: "currentColor"
  }), React.createElement("path", {
    d: "M13.3 12l3 3 2.9-1.6c.6-.4.6-1.3 0-1.6L16.3 10l-3 2z",
    fill: "currentColor",
    opacity: "0.55"
  })),
  lock: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("rect", {
    x: "5",
    y: "10.5",
    width: "14",
    height: "9",
    rx: "2"
  }), React.createElement("path", {
    d: "M8 10.5V8a4 4 0 0 1 8 0v2.5"
  })),
  search: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "6.5"
  }), React.createElement("path", {
    d: "M20 20l-3.9-3.9"
  })),
  lifebuoy: React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8.5"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3.4"
  }), React.createElement("path", {
    d: "M6 6l3.6 3.6M14.4 14.4L18 18M18 6l-3.6 3.6M9.6 14.4L6 18"
  }))
};
ICON_PATHS.marchand = ICON_PATHS.boutique;
ICON_PATHS.particuliers = ICON_PATHS.person;
ICON_PATHS.chauffeurs = ICON_PATHS.steering;
function Icon({
  name,
  className,
  style
}) {
  const inner = ICON_PATHS[name];
  if (!inner) return null;
  return h("svg", {
    viewBox: "0 0 24 24",
    className,
    style,
    "aria-hidden": "true",
    focusable: "false"
  }, inner);
}
function LogoMark({
  size = 30
}) {
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 36 36",
    "aria-hidden": "true",
    focusable: "false",
    style: {
      flexShrink: 0
    }
  }, React.createElement("circle", {
    cx: "10",
    cy: "18",
    r: "6.5",
    fill: "var(--kola)"
  }), React.createElement("line", {
    x1: "16.5",
    y1: "18",
    x2: "25.5",
    y2: "18",
    stroke: "var(--dye)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeDasharray: "0.2 4.4"
  }), React.createElement("circle", {
    cx: "27",
    cy: "18",
    r: "6.5",
    fill: "none",
    stroke: "var(--indigo)",
    strokeWidth: "2.4"
  }));
}
Object.assign(window, {
  Icon,
  LogoMark,
  ICON_PATHS
});