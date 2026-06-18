const CITIES = [{
  fr: "Conakry",
  en: "Conakry",
  country: {
    fr: "Guinée",
    en: "Guinea"
  },
  currency: "GNF",
  locale: "fr-GN",
  status: "ok"
}, {
  fr: "Dubréka",
  en: "Dubréka",
  country: {
    fr: "Guinée",
    en: "Guinea"
  },
  currency: "GNF",
  locale: "fr-GN",
  status: "ok"
}, {
  fr: "Kindia",
  en: "Kindia",
  country: {
    fr: "Guinée",
    en: "Guinea"
  },
  currency: "GNF",
  locale: "fr-GN",
  status: "ok"
}, {
  fr: "Mamou",
  en: "Mamou",
  country: {
    fr: "Guinée",
    en: "Guinea"
  },
  currency: "GNF",
  locale: "fr-GN",
  status: "soon"
}, {
  fr: "Labé",
  en: "Labé",
  country: {
    fr: "Guinée",
    en: "Guinea"
  },
  currency: "GNF",
  locale: "fr-GN",
  status: "soon"
}, {
  fr: "Kankan",
  en: "Kankan",
  country: {
    fr: "Guinée",
    en: "Guinea"
  },
  currency: "GNF",
  locale: "fr-GN",
  status: "soon"
}, {
  fr: "Siguiri",
  en: "Siguiri",
  country: {
    fr: "Guinée",
    en: "Guinea"
  },
  currency: "GNF",
  locale: "fr-GN",
  status: "soon"
}, {
  fr: "Nzérékoré",
  en: "Nzérékoré",
  country: {
    fr: "Guinée",
    en: "Guinea"
  },
  currency: "GNF",
  locale: "fr-GN",
  status: "soon"
}];
const FARE_BASE = {
  GNF: 18000,
  XOF: 900,
  NGN: 1500,
  GHS: 12,
  KES: 220
};
function fmtCurrency(value, currency, locale) {
  try {
    return new Intl.NumberFormat(locale || "fr-FR", {
      style: "currency",
      currency,
      maximumFractionDigits: 0
    }).format(value);
  } catch (e) {
    return Math.round(value) + " " + currency;
  }
}
const CONTENT = {
  fr: {
    metaTitle: {
      home: "OMNIIA One — Le quotidien de votre ville, en une plateforme",
      drop: "OMNIIA Drop — Transport & livraison · OMNIIA One",
      business: "OMNIIA pour les entreprises — Encaissez, payez, livrez · OMNIIA One",
      particuliers: "OMNIIA pour les particuliers — Votre ville en une app · OMNIIA One",
      chauffeurs: "OMNIIA pour les chauffeurs & vendeurs — Gagnez votre revenu · OMNIIA One",
      marchand: "OMNIIA pour les marchands — Développez votre activité · OMNIIA One",
      terms: "Conditions d’utilisation · OMNIIA One",
      privacy: "Politique de confidentialité · OMNIIA One"
    },
    nav: {
      drop: "Drop",
      finance: "Finance",
      boutique: "Boutique",
      chat: "Discussions",
      cities: "Villes",
      business: "Entreprises",
      particuliers: "Particuliers",
      chauffeurs: "Chauffeur & livreur",
      marchand: "Marchand",
      help: "Centre d’aide",
      partner: "Devenez partenaire"
    },
    cta: {
      platform: "Accéder à la plateforme",
      download: "Télécharger l’app",
      waitlist: "Être notifié",
      drop: "Commandez un Drop"
    },
    partners: [{
      label: "Chauffeur Drop",
      type: "driver"
    }, {
      label: "Livreur de repas/express",
      type: "driver"
    }, {
      label: "Marchand restaurant / épicerie",
      type: "merchant"
    }, {
      label: "Marchand paiement",
      type: "merchant"
    }],
    skip: "Aller au contenu",
    langGroup: "Choix de la langue",
    menu: "Menu",
    services: {
      drop: {
        name: "Drop",
        tag: "Transport & livraison",
        desc: "Réservez une course ou faites livrer un colis, payez en espèces ou avec votre portefeuille."
      },
      finance: {
        name: "Finance",
        tag: "Portefeuille & paiements",
        desc: "Un seul solde pour payer, recevoir et envoyer de l’argent partout dans la plateforme."
      },
      boutique: {
        name: "Boutique",
        tag: "Place de marché locale",
        desc: "Achetez et vendez près de chez vous, encaissez directement sur votre portefeuille."
      },
      chat: {
        name: "Discussions",
        tag: "Messagerie & transferts",
        desc: "Discutez avec chiffrement de bout en bout et envoyez de l’argent dans la même conversation."
      },
      business: {
        name: "Entreprises",
        tag: "Encaissements & paie",
        desc: "Encaissez vos clients, payez vos équipes et livrez vos commandes depuis un seul portefeuille."
      },
      marchand: {
        name: "Marchand",
        tag: "Encaissements marchands",
        desc: "Acceptez les paiements, suivez vos ventes et recevez vos versements sur votre portefeuille."
      },
      particuliers: {
        name: "Particuliers",
        tag: "Pour votre quotidien",
        desc: "Déplacez-vous, payez et envoyez de l’argent à vos proches depuis une seule app."
      },
      chauffeurs: {
        name: "Chauffeur & livreur",
        tag: "Devenez partenaire",
        desc: "Conduisez ou livrez avec OMNIIA, gérez vos courses et suivez vos gains en temps réel."
      }
    },
    discover: "Découvrir",
    modal: {
      close: "Fermer",
      notify: "M’inscrire pour être prévenu",
      later: "Plus tard",
      appTitle: "Accéder à OMNIIA One",
      appBody: "Un seul compte réunit Drop, Finance, Boutique et Discussions autour d’un même portefeuille. L’application pèse moins de 25 Mo.",
      appSoon: "Lancement bientôt. Inscrivez-vous pour être prévenu — sans spam.",
      serviceTitle: {
        finance: "OMNIIA Finance — bientôt",
        boutique: "OMNIIA Boutique — bientôt",
        chat: "OMNIIA Discussions — bientôt"
      },
      serviceBody: "Cette page de service arrive bientôt. Inscrivez-vous pour être prévenu de son ouverture dans votre ville.",
      pageSoon: "Page en préparation",
      pageBody: "Cette page arrive bientôt. Merci de votre patience.",
      driver: {
        title: "Devenir chauffeur OMNIIA Drop",
        body: "Gagnez votre revenu avec Drop, sans intermédiaire. Laissez vos coordonnées : notre équipe vous recontacte.",
        name: "Nom complet",
        namePh: "Ex. Aïssata Diallo",
        phone: "Téléphone",
        phonePh: "Ex. +224 600 00 00 00",
        city: "Ville",
        cityPh: "Choisir une ville",
        vehicle: "Type de véhicule",
        vehicleOptions: ["Moto", "Voiture", "Tricycle", "Vélo cargo"],
        submit: "Envoyer ma candidature",
        successTitle: "Candidature reçue",
        successBody: "Merci. Notre équipe vous recontacte sous quelques jours au numéro indiqué.",
        privacyNote: "En envoyant, vous acceptez notre"
      },
      partner: {
        titlePrefix: "Devenir",
        bodyDriver: "Roulez avec OMNIIA et gagnez votre revenu, sans intermédiaire. Laissez vos coordonnées : notre équipe vous recontacte.",
        bodyMerchant: "Développez votre activité avec OMNIIA et encaissez sur votre portefeuille. Laissez vos coordonnées : notre équipe vous recontacte.",
        activity: "Type d’activité",
        activityPh: "Choisir une activité",
        merchantOptions: ["Restaurant", "Épicerie / Mart", "Boutique", "Services", "Autre"]
      }
    },
    home: {
      eyebrow: "Une plateforme, un compte",
      h1: "Le quotidien de votre ville, dans une seule plateforme.",
      lead: "Transport, paiements, marché local et messagerie — réunis par un seul portefeuille. OMNIIA One est pensé pour les villes d’Afrique de l’Ouest.",
      note: "Une plateforme, un compte",
      carousel: {
        label: "Aperçu de l’application, en mouvement",
        balanceLabel: "Solde du portefeuille",
        amount: "248 500",
        screens: [{
          service: "drop",
          tag: "Drop",
          title: "Course vers Kaloum",
          sub: "Chauffeur dans 6 min",
          cta: "Payer 25 000 GNF"
        }, {
          service: "finance",
          tag: "Finance",
          title: "Envoyer de l’argent",
          sub: "À Mariama · instantané",
          cta: "Envoyer 50 000 GNF"
        }, {
          service: "boutique",
          tag: "Boutique",
          title: "Commande #2048",
          sub: "Tissu wax · 3 articles",
          cta: "Encaisser 120 000 GNF"
        }, {
          service: "chat",
          tag: "Discussions",
          title: "Mariama Diallo",
          sub: "« Voici pour le marché »",
          cta: "Recevoir 50 000 GNF"
        }]
      },
      hubLabel: "Un portefeuille",
      walletAmount: "248 500",
      walletLabel: "Solde du portefeuille",
      phoneActivityTitle: "Course vers Kaloum",
      phoneActivitySub: "Chauffeur dans 6 min",
      phoneCta: "Payer 25 000 GNF",
      interconnect: {
        eyebrow: "Pourquoi un seul compte",
        h2: "Le même solde, dans toute votre journée.",
        lead: "Pas de recharge entre les services. L’argent qui entre par une vente sert à payer la course suivante.",
        flows: [{
          t: "Payez une course",
          d: "Réglez votre trajet Drop directement depuis le portefeuille, sans espèces."
        }, {
          t: "Envoyez de l’argent dans un chat",
          d: "Transférez à un proche au fil de la conversation, en quelques secondes."
        }, {
          t: "Encaissez une vente",
          d: "Recevez le paiement d’une commande Boutique sur le même solde."
        }, {
          t: "Tout est relié",
          d: "Un historique, un solde, une identité vérifiée pour les quatre services."
        }]
      },
      cities: {
        eyebrow: "Couverture",
        h2: "Disponible et en route vers votre ville.",
        lead: "Nous ouvrons ville par ville, en commençant là où la plateforme est déjà active.",
        statusOk: "Disponible",
        statusSoon: "Bientôt"
      },
      download: {
        eyebrow: "Téléchargement",
        h2: "Installez OMNIIA One, gratuitement.",
        lead: "Moins de 25 Mo. Conçue pour fonctionner sur les réseaux 3G/4G variables.",
        benefits: ["Moins de 25 Mo à l’installation", "Fonctionne en réseau 3G/4G variable", "Un seul compte pour les quatre services", "Paiement en espèces ou par portefeuille"],
        appStore: "App Store",
        googlePlay: "Google Play",
        downloadOn: "Télécharger sur l’",
        getItOn: "Disponible sur"
      },
      segments: {
        eyebrow: "Pour qui",
        h2: "Un compte adapté à votre usage.",
        lead: "Que vous bougiez, vendiez ou conduisiez, la plateforme s’ajuste.",
        items: [{
          t: "Particuliers",
          d: "Déplacez-vous, payez vos achats et gardez le contact avec vos proches."
        }, {
          t: "Entreprises",
          d: "Encaissez vos ventes, gérez vos livraisons et suivez vos paiements."
        }, {
          t: "Chauffeur & livreur",
          d: "Gagnez votre revenu et recevez vos paiements sans intermédiaire."
        }]
      },
      trust: {
        eyebrow: "Confiance",
        h2: "Inscrivez-vous pour être notifié au lancement.",
        lead: "Pas de date de lancement annoncée tant qu’elle n’est pas certaine. On vous prévient, sans spam.",
        emailPlaceholder: "Votre adresse e-mail",
        nospam: "Aucun spam. Voir notre",
        privacy: "politique de confidentialité",
        stats: [{
          num: "1 200+",
          label: "inscrits sur la liste d’attente"
        }, {
          num: "3",
          label: "villes actives"
        }, {
          num: "4",
          label: "partenaires confirmés"
        }],
        partners: "Partenaires"
      }
    },
    drop: {
      eyebrow: "OMNIIA Drop",
      h1: "Arrivez à bon port. Ou faites livrer.",
      lead: "Réservez une course ou un colis en quelques secondes. Payez en espèces ou avec votre portefeuille OMNIIA.",
      checklist: ["Chauffeur en 4 à 12 minutes", "Tarif estimé avant de réserver", "Paiement espèces ou portefeuille", "Suivi de la course en temps réel"],
      secondaryCta: "Devenir chauffeur",
      booking: {
        tabs: {
          ride: "Course",
          parcel: "Colis",
          schedule: "Réservation"
        },
        cityLabel: "Ville",
        cityPlaceholder: "Choisir une ville",
        fromLabel: "Départ",
        fromPlaceholder: "Point de départ",
        toLabel: "Arrivée",
        toPlaceholder: "Destination",
        whenLabel: "Quand",
        now: "Maintenant",
        later: "Plus tard",
        estimate: "Estimer le prix",
        estEmpty: "Renseignez le trajet, puis estimez le prix.",
        etaPrefix: "Chauffeur estimé dans",
        etaUnit: "min",
        note: "Estimation indicative. Payez en espèces ou avec votre portefeuille OMNIIA."
      },
      features: {
        eyebrow: "Fonctionnalités",
        h2: "Trois façons d’utiliser Drop.",
        items: [{
          t: "Course à la demande",
          d: "Un chauffeur vérifié vous récupère et vous suivez le trajet en direct."
        }, {
          t: "Livraison de colis",
          d: "Envoyez un colis d’un point à un autre dans la ville, suivi inclus."
        }, {
          t: "Réservation à l’avance",
          d: "Planifiez un trajet pour plus tard et payez au moment de la course."
        }]
      },
      how: {
        eyebrow: "Comment ça marche",
        h2: "Réservez en trois étapes.",
        steps: [{
          t: "Indiquez votre trajet",
          d: "Saisissez le départ et l’arrivée, choisissez course ou colis."
        }, {
          t: "Estimez et confirmez",
          d: "Voyez la fourchette de prix et le délai, puis confirmez."
        }, {
          t: "Suivez et payez",
          d: "Suivez le chauffeur en direct et payez à l’arrivée, espèces ou portefeuille."
        }]
      },
      cta: {
        h2: "Téléchargez OMNIIA One et réservez votre première course.",
        lead: "L’app pèse moins de 25 Mo et fonctionne sur les réseaux variables."
      }
    },
    business: {
      breadcrumb: "Entreprises",
      hero: {
        eyebrow: "Pour les entreprises",
        h1: "Encaissez, payez, livrez — avec OMNIIA.",
        lead: "Quand un client règle une commande, quand vous partagez les frais avec un fournisseur, ou quand vous versez la prime de votre meilleur employé — OMNIIA fait arriver l’argent au bon moment, sur un seul portefeuille.",
        ctaPrimary: "Devenir marchand OMNIIA",
        ctaSecondary: "Télécharger l’app",
        cardLabel: "Paiement reçu",
        cardAmount: "120 000",
        cardName: "Commande #2048 · Aïssata B.",
        cardStatus: "Disponible sur votre portefeuille"
      },
      why: {
        eyebrow: "Pourquoi OMNIIA pour votre entreprise ?",
        h2: "Encaissez vos clients et payez vos équipes, simplement.",
        body: "Recevez les paiements de vos clients, réglez vos fournisseurs, payez le loyer du local et même vos employés — depuis un seul solde. Ne transférez de l’argent qu’aux personnes que vous connaissez et en qui vous avez confiance.",
        panelLabel: "Solde marchand",
        panelAmount: "1 480 000",
        rows: [{
          t: "Vente Boutique · Tissu wax",
          v: "+120 000"
        }, {
          t: "Salaire · Mamadou D.",
          v: "−650 000"
        }, {
          t: "Fournisseur · Marché Madina",
          v: "−210 000"
        }]
      },
      use: {
        h2: "Vous pouvez utiliser OMNIIA pour",
        items: [{
          icon: "finance",
          t: "Encaisser vos clients",
          d: "Recevez les paiements de vos ventes Boutique et Finance."
        }, {
          icon: "wallet",
          t: "Être payé en quelques minutes",
          d: "L’argent arrive sur un seul portefeuille, disponible aussitôt."
        }, {
          icon: "send",
          t: "Payer employés & fournisseurs",
          d: "Versez salaires, primes et règlements en quelques secondes."
        }, {
          icon: "drop",
          t: "Vendre et livrer avec Drop",
          d: "Faites livrer vos commandes par un coursier Drop."
        }, {
          icon: "chat",
          t: "Échanger avec vos clients",
          d: "Confirmez et encaissez au fil de la conversation Discussions."
        }]
      },
      band: "Rejoignez les commerces de Conakry, Dubréka et Kindia qui encaissent déjà avec OMNIIA. Un même portefeuille relie vos ventes, vos paiements et vos livraisons — demandez à votre banque ou contactez-nous pour démarrer.",
      how: {
        h2: "Comment OMNIIA fonctionne pour les entreprises",
        steps: [{
          icon: "business",
          t: "Activez votre compte pro",
          d: "Tout commerce éligible s’inscrit depuis l’app avec un e-mail, un numéro mobile ou un tag OMNIIA."
        }, {
          icon: "finance",
          t: "Le client paie",
          d: "Votre client règle sa commande depuis son app, directement vers votre compte."
        }, {
          icon: "check",
          t: "Vous êtes payé·e",
          d: "L’argent arrive sur votre portefeuille, disponible en quelques minutes. Vous recevez une notification. C’est tout !"
        }]
      },
      learn: {
        h2: "En savoir plus sur OMNIIA pour les entreprises",
        cta: "Devenir marchand OMNIIA",
        links: ["Je suis déjà marchand OMNIIA", "OMNIIA déclare-t-il mes encaissements à l’administration ?", "Quels sont les frais et délais de versement ?"]
      },
      notes: ["Disponible pour les commerces éligibles à Conakry, Dubréka et Kindia. Les deux parties doivent disposer d’un compte OMNIIA actif. Les transferts arrivent généralement en quelques minutes.", "N’envoyez de l’argent qu’aux personnes et commerces que vous connaissez et en qui vous avez confiance.", "Renseignez-vous auprès de votre conseiller sur vos obligations déclaratives selon votre activité."]
    },
    particuliers: {
      breadcrumb: "Particuliers",
      hero: {
        eyebrow: "Pour les particuliers",
        h1: "Votre ville, dans une seule app.",
        lead: "Réservez une course, envoyez de l’argent à un proche, achetez au marché local et discutez — tout est relié par un même portefeuille, sans carte bancaire.",
        ctaPrimary: "Télécharger l’app",
        ctaSecondary: "Découvrir Drop",
        cardLabel: "Course payée",
        cardAmount: "25 000",
        cardName: "Trajet vers Kaloum",
        cardStatus: "Chauffeur arrivé"
      },
      why: {
        eyebrow: "Pourquoi OMNIIA au quotidien ?",
        h2: "Un seul portefeuille pour toute votre journée.",
        body: "Payez vos courses, recevez l’argent d’un proche, réglez vos achats au marché — sans espèces et sans jongler entre plusieurs applis. Un solde, un historique, une identité vérifiée.",
        panelLabel: "Mon portefeuille",
        panelAmount: "248 500",
        rows: [{
          t: "Argent reçu · Mariama",
          v: "+50 000"
        }, {
          t: "Course Drop · Kaloum",
          v: "−25 000"
        }, {
          t: "Achat Boutique · Marché",
          v: "−18 000"
        }]
      },
      use: {
        h2: "Avec OMNIIA, vous pouvez",
        items: [{
          icon: "drop",
          t: "Réserver une course",
          d: "Un trajet ou une livraison en quelques minutes."
        }, {
          icon: "finance",
          t: "Envoyer & recevoir",
          d: "De l’argent à un proche, instantanément."
        }, {
          icon: "boutique",
          t: "Acheter au marché local",
          d: "Commandez près de chez vous et payez en un geste."
        }, {
          icon: "chat",
          t: "Discuter & payer",
          d: "Échangez et envoyez de l’argent dans la même conversation."
        }, {
          icon: "wallet",
          t: "Payer sans espèces",
          d: "Un seul solde pour tous vos services du quotidien."
        }]
      },
      band: "Des milliers d’habitants de Conakry, Dubréka et Kindia gèrent déjà leur quotidien avec OMNIIA. Téléchargez l’app gratuite — elle pèse moins de 25 Mo et fonctionne sur les réseaux variables.",
      how: {
        h2: "Comment démarrer",
        steps: [{
          icon: "business",
          t: "Téléchargez l’app",
          d: "Disponible sur Android et iOS, en moins de 25 Mo."
        }, {
          icon: "person",
          t: "Créez votre compte",
          d: "Un numéro mobile suffit pour ouvrir votre portefeuille."
        }, {
          icon: "check",
          t: "Commencez à l’utiliser",
          d: "Ajoutez de l’argent, réservez une course, transférez à un proche ou réglez vos achats. C’est tout !"
        }]
      },
      learn: {
        h2: "En savoir plus sur OMNIIA",
        cta: "Télécharger l’app",
        items: [{
          q: "Envoyer de l’argent à un proche, comment ça marche ?",
          a: "Ouvrez une discussion avec votre proche, saisissez le montant et confirmez. L’argent arrive instantanément sur son portefeuille OMNIIA — sans carte bancaire ni frais cachés."
        }, {
          q: "Disponible à Conakry, Dubréka et Kindia",
          a: "OMNIIA One fonctionne aujourd’hui à Conakry, Dubréka et Kindia. D’autres villes de Guinée ouvriront prochainement."
        }, {
          q: "À propos d’OMNIIA One",
          a: "OMNIIA One réunit transport, paiements, marché local et messagerie autour d’un même portefeuille, pensé pour le quotidien des villes d’Afrique de l’Ouest."
        }]
      },
      notes: ["OMNIIA One est disponible à Conakry, Dubréka et Kindia. D’autres villes ouvriront prochainement.", "Aucune carte bancaire requise. L’app fonctionne sur les smartphones Android milieu de gamme.", "N’envoyez de l’argent qu’aux personnes que vous connaissez et en qui vous avez confiance."]
    },
    chauffeurs: {
      breadcrumb: "Chauffeur & livreur",
      hero: {
        eyebrow: "Chauffeur & livreur partenaire",
        h1: "Devenez chauffeur ou livreur OMNIIA",
        cta: "Télécharger l’app Chauffeur",
        photoSlot: "Photo : chauffeur OMNIIA au volant"
      },
      why: {
        label: "Pourquoi rouler avec nous",
        items: [{
          t: "Versement instantané",
          d: "Transférez vos gains vers votre portefeuille OMNIIA à tout moment."
        }, {
          t: "Assistance 7j/7",
          d: "Support partenaire et trousse de sécurité dès que vous en avez besoin."
        }, {
          t: "Suivi de vos gains",
          d: "Pour vous aider à maximiser vos revenus et mieux planifier vos finances."
        }]
      },
      testimonial: {
        label: "Témoignage",
        name: "Mamadou Baldé",
        role: "chauffeur-partenaire OMNIIA depuis 2024",
        quote: "Tout se fait depuis l’application : encaisser, suivre mes courses et gérer mes paiements. C’est ce qui rend le quotidien tellement plus simple.",
        avatars: ["Chauffeur 1", "Livreur 2", "Chauffeuse 3"]
      },
      ways: {
        h2: "Comment devenir partenaire",
        benefitsLabel: "Avantages",
        tabs: [{
          key: "driver",
          label: "Chauffeur",
          blocks: [{
            t: "Gardez la main sur vos revenus",
            items: ["Décidez quand vous commencez et arrêtez de travailler", "Gagnez davantage en roulant plus", "Offres exclusives sur l’entretien, le carburant et l’assurance via le Programme Fidélité"],
            link: null
          }, {
            t: "Une seule app pour les chauffeurs OMNIIA",
            items: ["Recevez les demandes de course et suivez vos gains", "Alertes en direct sur les zones à forte demande", "Navigation intégrée, du point de départ à l’arrivée"],
            link: "Découvrir l’app Chauffeur OMNIIA"
          }, {
            t: "Louez auprès des partenaires flotte",
            items: ["Remise supplémentaire sur vos gains nets", "Tarifs de location raisonnables", "Carburant à prix réduit"],
            link: "En savoir plus sur les partenaires flotte"
          }, {
            t: "Protégé sur la route et en dehors",
            items: ["Couverture accident pendant vos courses", "Indemnité journalière en cas d’arrêt de plus de 5 jours", "Avance sur revenu en cas de besoin"],
            link: "Voir les services financiers partenaires"
          }]
        }, {
          key: "courier",
          label: "Livreur",
          blocks: [{
            t: "Livrez à votre rythme",
            items: ["Acceptez les livraisons quand vous êtes disponible", "Colis express et repas dans votre zone", "Cumulez les courses aux heures de pointe"],
            link: null
          }, {
            t: "Une seule app pour les livreurs",
            items: ["Demandes de livraison et itinéraires en temps réel", "Suivi de vos gains à chaque course", "Preuve de livraison intégrée"],
            link: "Découvrir l’app Chauffeur OMNIIA"
          }, {
            t: "À vélo, à moto ou à pied",
            items: ["Aucun véhicule requis pour les courses à pied ou à vélo", "Location de moto auprès des partenaires flotte", "Équipement de livraison fourni au démarrage"],
            link: null
          }, {
            t: "Protégé à chaque livraison",
            items: ["Couverture accident pendant vos livraisons", "Assistance partenaire 7j/7", "Avance sur revenu en cas de besoin"],
            link: "Voir les services financiers partenaires"
          }]
        }]
      },
      apply: {
        h2: "Qui peut s’inscrire ?",
        items: ["Résident·e de Conakry, Dubréka ou Kindia, âgé·e de 21 ans ou plus", "Permis de conduire valide depuis au moins 1 an (chauffeurs et livreurs à moto)", "Pièce d’identité valide pour les livraisons à vélo ou à pied"],
        note: "Pas de véhicule ? Louez auprès d’un partenaire flotte OMNIIA, ou livrez à vélo ou à pied.",
        photoSlot: "Photo : équipe OMNIIA accompagnant un nouveau partenaire"
      },
      todo: {
        h2: "Que dois-je faire ?",
        steps: [{
          t: "Permis de conduire",
          d: "Munissez-vous d’un permis valide pour la voiture ou la moto. Non requis pour les livraisons à vélo ou à pied."
        }, {
          t: "Véhicule & assurance",
          d: "Roulez avec un véhicule conforme et assuré, ou louez auprès d’un partenaire flotte OMNIIA."
        }, {
          t: "Préparez vos documents",
          d: "Pièce d’identité, permis, carte grise et coordonnées de votre portefeuille OMNIIA."
        }, {
          t: "C’est presque prêt",
          d: "Inscrivez-vous dans l’app Chauffeur, suivez la formation d’intégration en ligne, puis commencez à rouler."
        }],
        scheme: {
          t: "Programme d’accompagnement partenaire",
          d: "Une fois l’intégration terminée, vous rejoignez le programme fidélité et débloquez des ressources d’accompagnement dédiées."
        }
      },
      faq: {
        h2: "Des questions ? Nous avons les réponses.",
        lead: "Pour toute autre question, consultez notre Centre d’aide.",
        items: [{
          q: "À quelle fréquence puis-je encaisser mes gains ?",
          a: "Vos gains arrivent sur votre portefeuille OMNIIA après chaque course ou livraison, et vous pouvez les transférer vers votre compte à tout moment."
        }, {
          q: "Quelles incitations propose OMNIIA ?",
          a: "Des bonus aux heures de pointe, des primes sur objectifs de courses et des offres saisonnières selon votre ville."
        }, {
          q: "Puis-je être à la fois chauffeur et livreur ?",
          a: "Oui. Un même compte partenaire vous permet d’accepter des courses et des livraisons selon vos disponibilités."
        }, {
          q: "Dois-je posséder un véhicule ?",
          a: "Non. Vous pouvez louer auprès d’un partenaire flotte OMNIIA, ou livrer à vélo ou à pied."
        }]
      },
      band: {
        label: "Devenir partenaire",
        h2: "Démarrez votre parcours de chauffeur-partenaire.",
        cta: "S’inscrire"
      },
      notes: ["Programme partenaires ouvert à Conakry, Dubréka et Kindia. Conditions d’éligibilité selon l’activité.", "Les gains sont versés directement sur le portefeuille OMNIIA, disponibles généralement en quelques minutes.", "Renseignez-vous sur vos obligations selon votre statut et votre activité."]
    },
    marchand: {
      breadcrumb: "Marchand",
      eyebrow: "Marchand partenaire",
      h1: "Développez votre activité avec OMNIIA.",
      ctaPrimary: "S’inscrire",
      ctaSecondary: "Télécharger l’app marchand",
      heroSlot: "Déposez une photo de votre commerce",
      overview: {
        label: "Aperçu",
        text: "Touchez des milliers de clients sur OMNIIA, tout en offrant plus de praticité et d’avantages à vos clients existants."
      },
      why: {
        label: "Pourquoi nous choisir",
        items: [{
          t: "Facile à gérer",
          d: "Gérez tous vos paiements depuis le portail et l’application marchand."
        }, {
          t: "Accès aux fonds",
          d: "Encaissez sur votre portefeuille OMNIIA, disponible en quelques minutes."
        }, {
          t: "Des outils pour réussir",
          d: "Profitez d’analyses exclusives pour développer durablement votre activité."
        }]
      },
      testimonial: {
        label: "Témoignage",
        name: "Aïssata Camara",
        role: "Propriétaire de Tissu Wax Madina et marchande OMNIIA",
        quote: "Depuis que j’encaisse avec OMNIIA, mes ventes arrivent directement sur mon portefeuille. Je gère mes paiements, mes livraisons et mes clients au même endroit.",
        avatars: ["Marchande 1", "Marchand 2", "Marchande 3"]
      },
      signup: {
        h2: "Prêt·e à vendre avec OMNIIA ?",
        lead: "Inscrivez votre commerce en quelques minutes. Notre équipe vous accompagne au démarrage.",
        cta: "S’inscrire"
      }
    },
    help: {
      breadcrumb: "Centre d’aide",
      eyebrow: "Centre d’aide",
      h1: "Comment pouvons-nous vous aider ?",
      lead: "Trouvez des réponses sur votre compte, vos paiements et chacun des services OMNIIA One.",
      searchPlaceholder: "Rechercher une question, un service…",
      searchCta: "Rechercher",
      topicsLabel: "Parcourir par thème",
      topics: [{
        icon: "wallet",
        t: "Compte & portefeuille",
        d: "Créer un compte, gérer votre solde et vérifier votre identité.",
        links: ["Créer mon portefeuille", "Modifier mes informations", "Récupérer l’accès à mon compte"]
      }, {
        icon: "drop",
        t: "Drop — transport & livraison",
        d: "Réserver une course, suivre un colis et payer un trajet.",
        links: ["Réserver une course", "Suivre ma livraison", "Annuler ou modifier un trajet"]
      }, {
        icon: "finance",
        t: "Paiements & transferts",
        d: "Envoyer de l’argent, encaisser et lire vos relevés.",
        links: ["Envoyer de l’argent", "Recevoir un paiement", "Consulter mon historique"]
      }, {
        icon: "lock",
        t: "Sécurité & confidentialité",
        d: "Protéger votre compte et signaler une activité suspecte.",
        links: ["Sécuriser mon compte", "Signaler une fraude", "Gérer mes données"]
      }, {
        icon: "steering",
        t: "Chauffeur, livreur & marchand",
        d: "Rejoindre OMNIIA comme partenaire et suivre vos gains.",
        links: ["Devenir chauffeur ou livreur", "Devenir marchand", "Encaisser mes gains"]
      }, {
        icon: "pin",
        t: "Villes & disponibilité",
        d: "Savoir où OMNIIA One est actif et quand votre ville ouvre.",
        links: ["Villes disponibles", "Demander l’ouverture chez moi", "À propos d’OMNIIA One"]
      }],
      contact: {
        h2: "Vous ne trouvez pas votre réponse ?",
        lead: "Notre équipe d’assistance répond 7j/7, en français et en anglais.",
        cta: "Nous contacter",
        secondary: "Espace partenaire"
      }
    },
    footer: {
      tagline: "La plateforme du quotidien pour les villes africaines. Quatre services, un seul portefeuille.",
      colServices: "Services",
      colCompany: "Entreprise",
      colHelp: "Aide & légal",
      company: ["Carrières", "Presse", "Partenaires"],
      help: ["Centre d’aide", "Conditions d’utilisation", "Politique de confidentialité"],
      rights: "OMNIIA One. Tous droits réservés.",
      legalNote: "Données protégées conformément à la loi guinéenne L/2016/037."
    },
    terms: {
      breadcrumb: "Conditions d’utilisation",
      eyebrow: "Informations légales",
      h1: "Conditions d’utilisation",
      updated: "Dernière mise à jour : 17 juin 2026",
      intro: "Ces conditions encadrent votre utilisation de la plateforme OMNIIA et de l’ensemble de ses services. En créant un compte ou en utilisant l’application, vous les acceptez.",
      tocLabel: "Sommaire",
      sections: [{
        t: "À propos de la plateforme",
        blocks: [{
          p: "OMNIIA est une plateforme numérique qui propose des services de portefeuille électronique, des paiements par carte, des dépôts et virements bancaires, des services de réservation de taxi, des services de livraison de colis, des services liés aux cryptomonnaies, ainsi que d’autres services financiers et de mobilité."
        }, {
          p: "La plateforme met en relation les utilisateurs avec des institutions financières, des chauffeurs, des partenaires de livraison et des prestataires tiers."
        }]
      }, {
        t: "Éligibilité",
        blocks: [{
          p: "Pour utiliser la plateforme, vous devez :"
        }, {
          list: ["Avoir au moins 18 ans", "Fournir des informations personnelles exactes", "Respecter l’ensemble des lois et réglementations applicables"]
        }, {
          p: "Nous pouvons suspendre les comptes qui enfreignent ces conditions."
        }]
      }, {
        t: "Création de compte",
        blocks: [{
          p: "Lors de la création d’un compte, vous vous engagez à fournir des informations exactes et complètes, à préserver la sécurité de vos identifiants de connexion et à nous signaler immédiatement tout accès non autorisé à votre compte. Vous êtes responsable de toutes les activités effectuées depuis votre compte."
        }]
      }, {
        t: "Portefeuille électronique",
        blocks: [{
          p: "Le portefeuille vous permet de conserver des fonds, d’envoyer de l’argent à d’autres utilisateurs, de payer des marchands et de régler des courses de taxi ou des livraisons."
        }, {
          p: "Conditions importantes : les soldes du portefeuille ne génèrent pas d’intérêts. Les transactions peuvent être soumises à des limites. Nous pouvons vérifier votre identité à des fins de conformité."
        }]
      }, {
        t: "Paiements par carte",
        blocks: [{
          p: "Les utilisateurs peuvent associer une carte de débit ou de crédit pour effectuer des paiements. Vous acceptez que les paiements par carte soient traités par des prestataires de paiement tiers sécurisés. Nous ne conservons pas les numéros de carte complets sur nos serveurs."
        }]
      }, {
        t: "Virements bancaires",
        blocks: [{
          p: "La plateforme permet aux utilisateurs de déposer des fonds depuis des banques et de transférer des fonds vers des comptes bancaires. Les virements bancaires dépendent des systèmes bancaires tiers et peuvent être soumis à des délais."
        }]
      }, {
        t: "Services de taxi",
        blocks: [{
          p: "Les utilisateurs peuvent demander des courses de taxi via l’application. Les chauffeurs sont des partenaires indépendants. Les tarifs estimés peuvent varier en fonction de la distance, du trafic ou du temps d’attente. Les utilisateurs doivent se comporter avec respect envers les chauffeurs."
        }]
      }, {
        t: "Livraison de colis",
        blocks: [{
          p: "Les utilisateurs peuvent envoyer des colis via des partenaires de livraison. Restrictions :"
        }, {
          list: ["Les articles illégaux sont interdits", "Les matières dangereuses ne sont pas autorisées", "Les utilisateurs sont responsables de l’exactitude des informations sur le colis"]
        }, {
          p: "Nous ne sommes pas responsables des dommages causés par un emballage inadéquat."
        }]
      }, {
        t: "Services de cryptomonnaie",
        blocks: [{
          p: "Si des services de cryptomonnaie sont disponibles, les utilisateurs doivent respecter l’ensemble des réglementations locales. La valeur des cryptomonnaies est très volatile. Nous ne sommes pas responsables des pertes causées par les fluctuations du marché. Les services de cryptomonnaie peuvent être restreints selon les exigences réglementaires."
        }]
      }, {
        t: "Frais",
        blocks: [{
          p: "Nous pouvons facturer des frais pour certains services, notamment les transactions du portefeuille, les réservations de taxi, les services de livraison et les opérations de change ou de cryptomonnaie. Tous les frais sont affichés avant la confirmation des transactions."
        }]
      }, {
        t: "Activités interdites",
        blocks: [{
          p: "Les utilisateurs ne doivent pas utiliser la plateforme à des fins illégales, tenter de commettre une fraude ou du blanchiment d’argent, porter atteinte à la sécurité de la plateforme, ni utiliser le service à des fins commerciales non autorisées. Toute infraction peut entraîner la suspension du compte."
        }]
      }, {
        t: "Disponibilité du service",
        blocks: [{
          p: "Nous nous efforçons d’assurer un service continu, mais ne garantissons pas un fonctionnement ininterrompu. Le service peut être temporairement indisponible en raison d’opérations de maintenance, de problèmes techniques ou d’exigences réglementaires."
        }]
      }, {
        t: "Limitation de responsabilité",
        blocks: [{
          p: "Dans toute la mesure permise par la loi, nous ne sommes pas responsables des dommages indirects, ni des pertes causées par des services tiers, et notre responsabilité totale est limitée au montant de la transaction concernée."
        }]
      }, {
        t: "Résiliation",
        blocks: [{
          p: "Nous pouvons suspendre ou résilier des comptes en cas de non-respect des conditions, de suspicion d’activité frauduleuse, ou si la loi, les autorités ou les régulateurs l’exigent."
        }]
      }, {
        t: "Modification des conditions",
        blocks: [{
          p: "Nous pouvons mettre à jour ces conditions périodiquement. Les utilisateurs sont informés par notifications dans l’application, par e-mail ou par mises à jour du site. La poursuite de l’utilisation vaut acceptation des nouvelles conditions."
        }]
      }, {
        t: "Nous contacter",
        blocks: [{
          p: "Pour toute question concernant ces conditions, contactez-nous :"
        }, {
          email: "legales@omniiaone.com"
        }]
      }]
    },
    privacy: {
      breadcrumb: "Politique de confidentialité",
      eyebrow: "Informations légales",
      h1: "Politique de confidentialité",
      updated: "Dernière mise à jour : 17 juin 2026",
      intro: "Cette politique explique comment OMNIIA One collecte, utilise et protège vos données personnelles, conformément à la loi guinéenne L/2016/037 relative à la protection des données à caractère personnel.",
      tocLabel: "Sommaire",
      sections: [{
        t: "Introduction",
        blocks: [{
          p: "OMNIIA One s’engage à protéger votre vie privée. Cette politique s’applique à l’ensemble des services de la plateforme : portefeuille électronique, paiements, courses de taxi, livraisons et services associés."
        }, {
          p: "Le traitement de vos données est réalisé dans le respect de la loi guinéenne L/2016/037 relative à la protection des données à caractère personnel."
        }]
      }, {
        t: "Données que nous collectons",
        blocks: [{
          p: "Selon les services que vous utilisez, nous pouvons collecter :"
        }, {
          list: ["Données d’identité : nom, date de naissance, pièce d’identité", "Coordonnées : numéro de téléphone, adresse e-mail, adresse postale", "Données financières : solde du portefeuille, historique des transactions, cartes liées", "Données de localisation : pour les courses de taxi et les livraisons", "Données techniques : type d’appareil, identifiants et adresse IP"]
        }]
      }, {
        t: "Comment nous collectons vos données",
        blocks: [{
          p: "Nous collectons ces données lorsque vous créez un compte, effectuez des transactions, réservez une course ou une livraison, contactez notre support ou utilisez l’application. Certaines données techniques sont collectées automatiquement lors de votre navigation."
        }]
      }, {
        t: "Comment nous utilisons vos données",
        blocks: [{
          p: "Nous utilisons vos données pour :"
        }, {
          list: ["Fournir, exploiter et sécuriser nos services", "Traiter les paiements, les courses et les livraisons", "Vérifier votre identité et prévenir la fraude", "Respecter nos obligations légales et réglementaires", "Améliorer la plateforme et communiquer avec vous"]
        }]
      }, {
        t: "Base légale du traitement",
        blocks: [{
          p: "Nous traitons vos données sur la base de votre consentement, de l’exécution du contrat qui nous lie, du respect de nos obligations légales, et de notre intérêt légitime à sécuriser et améliorer la plateforme."
        }]
      }, {
        t: "Partage des données",
        blocks: [{
          p: "Nous pouvons partager certaines données avec les chauffeurs et partenaires de livraison afin d’exécuter votre course ou votre livraison, avec les institutions financières et prestataires de paiement, et avec les autorités lorsque la loi l’exige. Nous ne vendons pas vos données personnelles."
        }]
      }, {
        t: "Transferts internationaux",
        blocks: [{
          p: "Lorsque vos données sont traitées en dehors de la Guinée, nous prenons des mesures appropriées pour garantir un niveau de protection conforme à la loi L/2016/037."
        }]
      }, {
        t: "Conservation des données",
        blocks: [{
          p: "Nous conservons vos données aussi longtemps que nécessaire pour fournir nos services et respecter nos obligations légales, comptables et réglementaires. Au-delà, elles sont supprimées ou anonymisées."
        }]
      }, {
        t: "Sécurité des données",
        blocks: [{
          p: "Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données : chiffrement, contrôle des accès et surveillance. Nous ne stockons pas les numéros de carte complets sur nos serveurs."
        }]
      }, {
        t: "Vos droits",
        blocks: [{
          p: "Conformément à la loi L/2016/037, vous disposez des droits suivants :"
        }, {
          list: ["Accéder à vos données personnelles", "Rectifier des données inexactes ou incomplètes", "Demander la suppression de vos données", "Vous opposer à certains traitements ou en demander la limitation", "Retirer votre consentement à tout moment"]
        }]
      }, {
        t: "Cookies et traceurs",
        blocks: [{
          p: "Notre site et notre application peuvent utiliser des cookies et technologies similaires pour assurer leur fonctionnement, mémoriser vos préférences et mesurer l’audience. Vous pouvez gérer vos préférences à tout moment."
        }]
      }, {
        t: "Protection des mineurs",
        blocks: [{
          p: "Nos services sont réservés aux personnes âgées d’au moins 18 ans. Nous ne collectons pas sciemment de données concernant des mineurs."
        }]
      }, {
        t: "Modification de la politique",
        blocks: [{
          p: "Nous pouvons mettre à jour cette politique de confidentialité. Toute modification importante vous sera notifiée par l’application, par e-mail ou sur le site. La date de dernière mise à jour figure en haut de cette page."
        }]
      }, {
        t: "Nous contacter",
        blocks: [{
          p: "Pour exercer vos droits ou pour toute question relative à vos données personnelles, contactez notre équipe :"
        }, {
          email: "confidentialite@omniiaone.com"
        }]
      }]
    }
  },
  en: {
    metaTitle: {
      home: "OMNIIA One — Your city’s daily life, one platform",
      drop: "OMNIIA Drop — Rides & delivery · OMNIIA One",
      business: "OMNIIA for business — Get paid, pay, deliver · OMNIIA One",
      particuliers: "OMNIIA for individuals — Your city in one app · OMNIIA One",
      chauffeurs: "OMNIIA for drivers & sellers — Earn your income · OMNIIA One",
      marchand: "OMNIIA for merchants — Grow your business · OMNIIA One",
      terms: "Terms of use · OMNIIA One",
      privacy: "Privacy policy · OMNIIA One"
    },
    nav: {
      drop: "Drop",
      finance: "Finance",
      boutique: "Boutique",
      chat: "Discussions",
      cities: "Cities",
      business: "Business",
      particuliers: "Individuals",
      chauffeurs: "Driver & courier",
      marchand: "Merchant",
      help: "Help Centre",
      partner: "Be our partner"
    },
    cta: {
      platform: "Open the platform",
      download: "Get the app",
      waitlist: "Get notified",
      drop: "Order a Drop"
    },
    partners: [{
      label: "Drop Driver",
      type: "driver"
    }, {
      label: "Food / Express Delivery Driver",
      type: "driver"
    }, {
      label: "Food / Mart Merchant",
      type: "merchant"
    }, {
      label: "Pay Merchant",
      type: "merchant"
    }],
    skip: "Skip to content",
    langGroup: "Language selection",
    menu: "Menu",
    services: {
      drop: {
        name: "Drop",
        tag: "Rides & delivery",
        desc: "Book a ride or send a parcel, pay with cash or your wallet."
      },
      finance: {
        name: "Finance",
        tag: "Wallet & payments",
        desc: "One balance to pay, receive and send money across the whole platform."
      },
      boutique: {
        name: "Boutique",
        tag: "Local marketplace",
        desc: "Buy and sell nearby, get paid straight to your wallet."
      },
      chat: {
        name: "Discussions",
        tag: "Messaging & transfers",
        desc: "Chat with end-to-end encryption and send money in the same conversation."
      },
      business: {
        name: "Business",
        tag: "Payments & payroll",
        desc: "Collect from customers, pay your team and deliver orders from one wallet."
      },
      marchand: {
        name: "Merchant",
        tag: "Merchant payments",
        desc: "Accept payments, track your sales and receive payouts to your wallet."
      },
      particuliers: {
        name: "Individuals",
        tag: "For your daily life",
        desc: "Get around, pay and send money to your loved ones from a single app."
      },
      chauffeurs: {
        name: "Driver & courier",
        tag: "Become a partner",
        desc: "Drive or deliver with OMNIIA, manage your trips and track your earnings in real time."
      }
    },
    discover: "Discover",
    modal: {
      close: "Close",
      notify: "Sign up to be notified",
      later: "Later",
      appTitle: "Open OMNIIA One",
      appBody: "One account brings Drop, Finance, Boutique and Discussions together around a single wallet. The app is under 25 MB.",
      appSoon: "Launching soon. Sign up to be notified — no spam.",
      serviceTitle: {
        finance: "OMNIIA Finance — soon",
        boutique: "OMNIIA Boutique — soon",
        chat: "OMNIIA Discussions — soon"
      },
      serviceBody: "This service page is coming soon. Sign up to be notified when it opens in your city.",
      pageSoon: "Page in progress",
      pageBody: "This page is coming soon. Thanks for your patience.",
      driver: {
        title: "Become an OMNIIA Drop driver",
        body: "Earn your income with Drop, no middleman. Leave your details and our team will get back to you.",
        name: "Full name",
        namePh: "e.g. Aïssata Diallo",
        phone: "Phone",
        phonePh: "e.g. +224 600 00 00 00",
        city: "City",
        cityPh: "Choose a city",
        vehicle: "Vehicle type",
        vehicleOptions: ["Motorbike", "Car", "Tricycle", "Cargo bike"],
        submit: "Send my application",
        successTitle: "Application received",
        successBody: "Thank you. Our team will contact you within a few days on the number provided.",
        privacyNote: "By submitting, you agree to our"
      },
      partner: {
        titlePrefix: "Become a",
        bodyDriver: "Drive with OMNIIA and earn your income, no middleman. Leave your details and our team will get back to you.",
        bodyMerchant: "Grow your business with OMNIIA and get paid to your wallet. Leave your details and our team will get back to you.",
        activity: "Business type",
        activityPh: "Choose a business type",
        merchantOptions: ["Restaurant", "Grocery / Mart", "Shop", "Services", "Other"]
      }
    },
    home: {
      eyebrow: "One platform, one account",
      h1: "Your city’s daily life, in a single platform.",
      lead: "Rides, payments, the local market and messaging — held together by one wallet. OMNIIA One is built for West African cities.",
      note: "One platform, one account",
      carousel: {
        label: "A live look at the app",
        balanceLabel: "Wallet balance",
        amount: "248,500",
        screens: [{
          service: "drop",
          tag: "Drop",
          title: "Ride to Kaloum",
          sub: "Driver in 6 min",
          cta: "Pay 25,000 GNF"
        }, {
          service: "finance",
          tag: "Finance",
          title: "Send money",
          sub: "To Mariama · instant",
          cta: "Send 50,000 GNF"
        }, {
          service: "boutique",
          tag: "Boutique",
          title: "Order #2048",
          sub: "Wax fabric · 3 items",
          cta: "Collect 120,000 GNF"
        }, {
          service: "chat",
          tag: "Discussions",
          title: "Mariama Diallo",
          sub: "“Here’s for the market”",
          cta: "Receive 50,000 GNF"
        }]
      },
      hubLabel: "One wallet",
      walletAmount: "248,500",
      walletLabel: "Wallet balance",
      phoneActivityTitle: "Ride to Kaloum",
      phoneActivitySub: "Driver in 6 min",
      phoneCta: "Pay 25,000 GNF",
      interconnect: {
        eyebrow: "Why one account",
        h2: "The same balance, all day long.",
        lead: "No top-up between services. Money from a sale pays for your next ride.",
        flows: [{
          t: "Pay for a ride",
          d: "Settle your Drop trip straight from the wallet, no cash needed."
        }, {
          t: "Send money in a chat",
          d: "Transfer to someone right in the conversation, in seconds."
        }, {
          t: "Get paid for a sale",
          d: "Receive a Boutique order payment on the same balance."
        }, {
          t: "Everything is linked",
          d: "One history, one balance, one verified identity for all four services."
        }]
      },
      cities: {
        eyebrow: "Coverage",
        h2: "Live now, and on the way to your city.",
        lead: "We open city by city, starting where the platform is already active.",
        statusOk: "Available",
        statusSoon: "Soon"
      },
      download: {
        eyebrow: "Download",
        h2: "Install OMNIIA One, free.",
        lead: "Under 25 MB. Built to run on variable 3G/4G networks.",
        benefits: ["Under 25 MB to install", "Works on variable 3G/4G networks", "One account for all four services", "Pay with cash or wallet"],
        appStore: "App Store",
        googlePlay: "Google Play",
        downloadOn: "Download on the",
        getItOn: "Get it on"
      },
      segments: {
        eyebrow: "Who it’s for",
        h2: "An account that fits how you live.",
        lead: "Whether you move, sell or drive, the platform adjusts.",
        items: [{
          t: "Individuals",
          d: "Get around, pay for purchases and stay in touch with the people you care about."
        }, {
          t: "Businesses",
          d: "Collect sales, manage deliveries and track your payments."
        }, {
          t: "Driver & courier",
          d: "Earn your income and get paid with no middleman."
        }]
      },
      trust: {
        eyebrow: "Trust",
        h2: "Sign up to be notified at launch.",
        lead: "No launch date announced until it’s certain. We’ll let you know — no spam.",
        emailPlaceholder: "Your email address",
        nospam: "No spam. See our",
        privacy: "privacy policy",
        stats: [{
          num: "1,200+",
          label: "on the waitlist"
        }, {
          num: "3",
          label: "active cities"
        }, {
          num: "4",
          label: "confirmed partners"
        }],
        partners: "Partners"
      }
    },
    drop: {
      eyebrow: "OMNIIA Drop",
      h1: "Get where you’re going. Or have it delivered.",
      lead: "Book a ride or a parcel in seconds. Pay with cash or your OMNIIA wallet.",
      checklist: ["Driver in 4 to 12 minutes", "Estimated fare before you book", "Pay with cash or wallet", "Live trip tracking"],
      secondaryCta: "Become a driver",
      booking: {
        tabs: {
          ride: "Ride",
          parcel: "Parcel",
          schedule: "Schedule"
        },
        cityLabel: "City",
        cityPlaceholder: "Choose a city",
        fromLabel: "From",
        fromPlaceholder: "Pickup point",
        toLabel: "To",
        toPlaceholder: "Destination",
        whenLabel: "When",
        now: "Now",
        later: "Later",
        estimate: "Estimate the price",
        estEmpty: "Enter your trip, then estimate the price.",
        etaPrefix: "Driver in about",
        etaUnit: "min",
        note: "Indicative estimate. Pay with cash or your OMNIIA wallet."
      },
      features: {
        eyebrow: "Features",
        h2: "Three ways to use Drop.",
        items: [{
          t: "On-demand ride",
          d: "A verified driver picks you up and you follow the trip live."
        }, {
          t: "Parcel delivery",
          d: "Send a parcel across the city, tracking included."
        }, {
          t: "Schedule ahead",
          d: "Plan a trip for later and pay at the time of the ride."
        }]
      },
      how: {
        eyebrow: "How it works",
        h2: "Book in three steps.",
        steps: [{
          t: "Enter your trip",
          d: "Type the pickup and destination, choose ride or parcel."
        }, {
          t: "Estimate and confirm",
          d: "See the price range and the wait, then confirm."
        }, {
          t: "Track and pay",
          d: "Follow the driver live and pay on arrival, cash or wallet."
        }]
      },
      cta: {
        h2: "Download OMNIIA One and book your first ride.",
        lead: "The app is under 25 MB and works on variable networks."
      }
    },
    business: {
      breadcrumb: "Business",
      hero: {
        eyebrow: "For business",
        h1: "Get paid, pay, deliver — with OMNIIA.",
        lead: "When a customer settles an order, when you split costs with a supplier, or when you send a bonus to your best employee — OMNIIA gets the money there when it counts, on a single wallet.",
        ctaPrimary: "Become an OMNIIA merchant",
        ctaSecondary: "Get the app",
        cardLabel: "Payment received",
        cardAmount: "120,000",
        cardName: "Order #2048 · Aïssata B.",
        cardStatus: "Available on your wallet"
      },
      why: {
        eyebrow: "Why use OMNIIA for your business?",
        h2: "Collect from customers and pay your team, easily.",
        body: "Receive payments from customers, pay suppliers, cover the shop rent and even your employees — all from one balance. Only send money to people and businesses you know and trust.",
        panelLabel: "Merchant balance",
        panelAmount: "1,480,000",
        rows: [{
          t: "Boutique sale · Wax fabric",
          v: "+120,000"
        }, {
          t: "Wage · Mamadou D.",
          v: "−650,000"
        }, {
          t: "Supplier · Madina market",
          v: "−210,000"
        }]
      },
      use: {
        h2: "You can use OMNIIA to",
        items: [{
          icon: "finance",
          t: "Collect from customers",
          d: "Receive payments from your Boutique and Finance sales."
        }, {
          icon: "wallet",
          t: "Get paid within minutes",
          d: "Money lands on a single wallet, available right away."
        }, {
          icon: "send",
          t: "Pay employees & suppliers",
          d: "Send wages, bonuses and settlements in seconds."
        }, {
          icon: "drop",
          t: "Sell and deliver with Drop",
          d: "Have your orders delivered by a Drop courier."
        }, {
          icon: "chat",
          t: "Talk with your customers",
          d: "Confirm and get paid right inside a Discussions chat."
        }]
      },
      band: "Join the shops in Conakry, Dubréka and Kindia already getting paid with OMNIIA. One wallet links your sales, your payments and your deliveries — ask your bank or contact us to get started.",
      how: {
        h2: "How OMNIIA works for businesses",
        steps: [{
          icon: "business",
          t: "Activate your business account",
          d: "Any eligible shop signs up from the app with an email, a mobile number or an OMNIIA tag."
        }, {
          icon: "finance",
          t: "The customer pays",
          d: "Your customer settles their order from their app, straight to your account."
        }, {
          icon: "check",
          t: "You get paid",
          d: "Money lands on your wallet, available within minutes. You get a notification. That’s it!"
        }]
      },
      learn: {
        h2: "Learn more about OMNIIA for business",
        cta: "Become an OMNIIA merchant",
        links: ["I’m already an OMNIIA merchant", "Will OMNIIA report how much I receive to the authorities?", "What are the fees and payout times?"]
      },
      notes: ["Available to eligible shops in Conakry, Dubréka and Kindia. Both parties must hold an active OMNIIA account. Transfers typically arrive within minutes.", "Only send money to people and businesses you know and trust.", "Check with your advisor about your reporting obligations depending on your activity."]
    },
    particuliers: {
      breadcrumb: "Individuals",
      hero: {
        eyebrow: "For individuals",
        h1: "Your city, in a single app.",
        lead: "Book a ride, send money to a loved one, shop at the local market and chat — all linked by one wallet, no bank card needed.",
        ctaPrimary: "Get the app",
        ctaSecondary: "Explore Drop",
        cardLabel: "Ride paid",
        cardAmount: "25,000",
        cardName: "Trip to Kaloum",
        cardStatus: "Driver arrived"
      },
      why: {
        eyebrow: "Why OMNIIA every day?",
        h2: "One wallet for your whole day.",
        body: "Pay for rides, receive money from a loved one, settle your market purchases — cashless and without juggling several apps. One balance, one history, one verified identity.",
        panelLabel: "My wallet",
        panelAmount: "248,500",
        rows: [{
          t: "Money received · Mariama",
          v: "+50,000"
        }, {
          t: "Drop ride · Kaloum",
          v: "−25,000"
        }, {
          t: "Boutique purchase · Market",
          v: "−18,000"
        }]
      },
      use: {
        h2: "With OMNIIA, you can",
        items: [{
          icon: "drop",
          t: "Book a ride",
          d: "A trip or a delivery in just a few minutes."
        }, {
          icon: "finance",
          t: "Send & receive",
          d: "Money to a loved one, instantly."
        }, {
          icon: "boutique",
          t: "Shop the local market",
          d: "Order nearby and pay in one tap."
        }, {
          icon: "chat",
          t: "Chat & pay",
          d: "Message and send money in the same conversation."
        }, {
          icon: "wallet",
          t: "Pay cashless",
          d: "One balance for all your everyday services."
        }]
      },
      band: "Thousands of residents in Conakry, Dubréka and Kindia already run their day with OMNIIA. Download the free app — it’s under 25 MB and works on variable networks.",
      how: {
        h2: "How to get started",
        steps: [{
          icon: "business",
          t: "Download the app",
          d: "Available on Android and iOS, under 25 MB."
        }, {
          icon: "person",
          t: "Create your account",
          d: "A mobile number is all it takes to open your wallet."
        }, {
          icon: "check",
          t: "Start using it",
          d: "Add money, book a ride, send to a loved one or pay for purchases. That’s it!"
        }]
      },
      learn: {
        h2: "Learn more about OMNIIA",
        cta: "Get the app",
        items: [{
          q: "How does sending money to a loved one work?",
          a: "Open a chat with your contact, enter the amount and confirm. The money lands instantly in their OMNIIA wallet — no bank card and no hidden fees."
        }, {
          q: "Available in Conakry, Dubréka and Kindia",
          a: "OMNIIA One currently works in Conakry, Dubréka and Kindia. More cities across Guinea will open soon."
        }, {
          q: "About OMNIIA One",
          a: "OMNIIA One brings rides, payments, the local market and messaging together around a single wallet, built for daily life in West African cities."
        }]
      },
      notes: ["OMNIIA One is available in Conakry, Dubréka and Kindia. More cities are opening soon.", "No bank card required. The app runs on mid-range Android phones.", "Only send money to people you know and trust."]
    },
    chauffeurs: {
      breadcrumb: "Driver & courier",
      hero: {
        eyebrow: "Driver & courier partner",
        h1: "Become an OMNIIA driver or courier",
        cta: "Download the Driver app",
        photoSlot: "Photo: OMNIIA driver at the wheel"
      },
      why: {
        label: "Why use us",
        items: [{
          t: "Instant cash-out",
          d: "Transfer your earnings to your OMNIIA wallet whenever you want."
        }, {
          t: "24/7 support",
          d: "Partner support and a safety toolkit whenever you need them."
        }, {
          t: "Earning insights",
          d: "To help you maximise your earnings and plan your finances better."
        }]
      },
      testimonial: {
        label: "Testimonial",
        name: "Mamadou Baldé",
        role: "OMNIIA driver-partner since 2024",
        quote: "Everything is done from the app: getting paid, tracking my rides and managing my payments. That’s what makes everyday life so much easier.",
        avatars: ["Driver 1", "Courier 2", "Driver 3"]
      },
      ways: {
        h2: "How to become a partner",
        benefitsLabel: "Benefits",
        tabs: [{
          key: "driver",
          label: "Driver",
          blocks: [{
            t: "Take control of your earnings",
            items: ["Decide when you start and stop work", "Earn more when you drive more", "Exclusive deals on maintenance, fuel and insurance through the Loyalty Programme"],
            link: null
          }, {
            t: "One app for OMNIIA drivers",
            items: ["Receive ride requests and track your earnings", "Live alerts on high-demand areas", "Built-in navigation, from pick-up to drop-off"],
            link: "Explore the OMNIIA Driver app"
          }, {
            t: "Rent from fleet partners",
            items: ["Extra rebate on your net earnings", "Reasonable rental rates", "Discounted fuel"],
            link: "Learn more about fleet partners"
          }, {
            t: "Protected on and off the road",
            items: ["Accident cover during your rides", "Daily income if you’re off for more than 5 days", "Cash advance when you need one"],
            link: "Browse financial services for partners"
          }]
        }, {
          key: "courier",
          label: "Courier",
          blocks: [{
            t: "Deliver at your own pace",
            items: ["Accept deliveries when you’re available", "Express parcels and meals in your area", "Stack runs during peak hours"],
            link: null
          }, {
            t: "One app for couriers",
            items: ["Delivery requests and routes in real time", "Track your earnings per run", "Built-in proof of delivery"],
            link: "Explore the OMNIIA Driver app"
          }, {
            t: "By bike, motorbike or on foot",
            items: ["No vehicle needed for walking or cycling runs", "Motorbike rental from fleet partners", "Delivery gear provided when you start"],
            link: null
          }, {
            t: "Protected on every delivery",
            items: ["Accident cover during your deliveries", "24/7 partner support", "Cash advance when you need one"],
            link: "Browse financial services for partners"
          }]
        }]
      },
      apply: {
        h2: "Who can apply?",
        items: ["Resident of Conakry, Dubréka or Kindia, aged 21 or above", "Valid driving licence held for at least 1 year (drivers and motorbike couriers)", "Valid ID for cycling or walking deliveries"],
        note: "No vehicle? Rent from an OMNIIA fleet partner, or deliver by bike or on foot.",
        photoSlot: "Photo: OMNIIA team onboarding a new partner"
      },
      todo: {
        h2: "What do I need to do?",
        steps: [{
          t: "Driving licence",
          d: "Hold a valid licence for a car or motorbike. Not required for cycling or walking deliveries."
        }, {
          t: "Vehicle & insurance",
          d: "Drive a compliant, insured vehicle, or rent from an OMNIIA fleet partner."
        }, {
          t: "Prepare your documents",
          d: "ID, driving licence, vehicle log card and your OMNIIA wallet details."
        }, {
          t: "You’re almost set",
          d: "Sign up in the Driver app, complete the online onboarding training, then start driving."
        }],
        scheme: {
          t: "Partner growth support scheme",
          d: "Once onboarding is complete, you join the loyalty programme and unlock dedicated support resources."
        }
      },
      faq: {
        h2: "Got questions? We’ve got answers.",
        lead: "For more questions, please visit our Help Centre.",
        items: [{
          q: "How often can I cash out my earnings?",
          a: "Your earnings land on your OMNIIA wallet after each ride or delivery, and you can transfer them to your account at any time."
        }, {
          q: "What earning incentives does OMNIIA offer?",
          a: "Peak-hour bonuses, trip-target rewards and seasonal offers depending on your city."
        }, {
          q: "Can I be both a driver and a courier?",
          a: "Yes. A single partner account lets you accept rides and deliveries based on your availability."
        }, {
          q: "Do I need to own a vehicle?",
          a: "No. You can rent from an OMNIIA fleet partner, or deliver by bike or on foot."
        }]
      },
      band: {
        label: "Become a partner",
        h2: "Start your journey as a driver-partner.",
        cta: "Sign up"
      },
      notes: ["Partner programme open in Conakry, Dubréka and Kindia. Eligibility conditions vary by activity.", "Earnings are paid straight to the OMNIIA wallet, typically available within minutes.", "Check your obligations depending on your status and activity."]
    },
    marchand: {
      breadcrumb: "Merchant",
      eyebrow: "Merchant partner",
      h1: "Grow your business with OMNIIA.",
      ctaPrimary: "Sign up",
      ctaSecondary: "Download the Merchant app",
      heroSlot: "Drop a photo of your shop",
      overview: {
        label: "Overview",
        text: "Reach thousands of customers on OMNIIA, while offering greater convenience and rewards to your existing customers."
      },
      why: {
        label: "Why use us",
        items: [{
          t: "Easy to manage",
          d: "Manage all your payments from the merchant portal and app."
        }, {
          t: "Access to funds",
          d: "Get paid to your OMNIIA wallet, available within minutes."
        }, {
          t: "Tools for success",
          d: "Exclusive business insights to help you grow sustainably."
        }]
      },
      testimonial: {
        label: "Testimonial",
        name: "Aïssata Camara",
        role: "Owner of Tissu Wax Madina and OMNIIA merchant",
        quote: "Since I started getting paid with OMNIIA, my sales land straight on my wallet. I manage payments, deliveries and customers in one place.",
        avatars: ["Merchant 1", "Merchant 2", "Merchant 3"]
      },
      signup: {
        h2: "Ready to sell with OMNIIA?",
        lead: "Sign up your shop in a few minutes. Our team helps you get started.",
        cta: "Sign up"
      }
    },
    help: {
      breadcrumb: "Help Centre",
      eyebrow: "Help Centre",
      h1: "How can we help you?",
      lead: "Find answers about your account, your payments and every OMNIIA One service.",
      searchPlaceholder: "Search a question or a service…",
      searchCta: "Search",
      topicsLabel: "Browse by topic",
      topics: [{
        icon: "wallet",
        t: "Account & wallet",
        d: "Create an account, manage your balance and verify your identity.",
        links: ["Create my wallet", "Edit my details", "Recover account access"]
      }, {
        icon: "drop",
        t: "Drop — rides & delivery",
        d: "Book a ride, track a parcel and pay for a trip.",
        links: ["Book a ride", "Track my delivery", "Cancel or change a trip"]
      }, {
        icon: "finance",
        t: "Payments & transfers",
        d: "Send money, get paid and read your statements.",
        links: ["Send money", "Receive a payment", "View my history"]
      }, {
        icon: "lock",
        t: "Security & privacy",
        d: "Protect your account and report suspicious activity.",
        links: ["Secure my account", "Report fraud", "Manage my data"]
      }, {
        icon: "steering",
        t: "Driver, courier & merchant",
        d: "Join OMNIIA as a partner and track your earnings.",
        links: ["Become a driver or courier", "Become a merchant", "Cash out my earnings"]
      }, {
        icon: "pin",
        t: "Cities & availability",
        d: "See where OMNIIA One is live and when your city opens.",
        links: ["Available cities", "Request my city", "About OMNIIA One"]
      }],
      contact: {
        h2: "Can’t find your answer?",
        lead: "Our support team replies 7 days a week, in French and English.",
        cta: "Contact us",
        secondary: "Partner space"
      }
    },
    footer: {
      tagline: "The everyday platform for African cities. Four services, one wallet.",
      colServices: "Services",
      colCompany: "Company",
      colHelp: "Help & legal",
      company: ["Careers", "Press", "Partners"],
      help: ["Help center", "Terms of use", "Privacy policy"],
      rights: "OMNIIA One. All rights reserved.",
      legalNote: "Data protected under Guinean law L/2016/037."
    },
    terms: {
      breadcrumb: "Terms of use",
      eyebrow: "Legal information",
      h1: "Terms of use",
      updated: "Last updated: 17 June 2026",
      intro: "These terms govern your use of the OMNIIA platform and all of its services. By creating an account or using the app, you accept them.",
      tocLabel: "Contents",
      sections: [{
        t: "About the platform",
        blocks: [{
          p: "OMNIIA is a digital platform that provides digital wallet services, card payments, bank deposits and transfers, taxi booking services, parcel delivery services, cryptocurrency related services, and other financial and mobility services."
        }, {
          p: "The platform connects users with financial institutions, drivers, delivery partners, and third-party service providers."
        }]
      }, {
        t: "Eligibility",
        blocks: [{
          p: "To use the platform you must:"
        }, {
          list: ["Be at least 18 years old", "Provide accurate personal information", "Comply with all applicable laws and regulations"]
        }, {
          p: "We may suspend accounts that violate these conditions."
        }]
      }, {
        t: "Account registration",
        blocks: [{
          p: "When creating an account you agree to provide accurate and complete information, maintain the security of your login credentials, and notify us immediately of unauthorized account access. You are responsible for all activities under your account."
        }]
      }, {
        t: "Digital wallet",
        blocks: [{
          p: "The wallet allows you to store funds, send money to other users, pay merchants, and pay for taxi or delivery services."
        }, {
          p: "Important conditions: wallet balances do not earn interest. Transactions may be subject to limits. We may verify your identity for compliance purposes."
        }]
      }, {
        t: "Card payments",
        blocks: [{
          p: "Users may link debit or credit cards to make payments. You agree that card payments are processed through secure third-party payment providers. We do not store full card numbers on our servers."
        }]
      }, {
        t: "Bank transfers",
        blocks: [{
          p: "The platform allows users to deposit funds from banks and transfer funds to bank accounts. Bank transfers depend on third-party banking systems and may be subject to delays."
        }]
      }, {
        t: "Taxi services",
        blocks: [{
          p: "Users can request taxi rides through the application. Drivers are independent partners. Estimated fares may change depending on distance, traffic, or waiting time. Users must behave respectfully toward drivers."
        }]
      }, {
        t: "Parcel delivery",
        blocks: [{
          p: "Users may send parcels through delivery partners. Restrictions:"
        }, {
          list: ["Illegal items are prohibited", "Hazardous materials are not allowed", "Users are responsible for accurate parcel details"]
        }, {
          p: "We are not responsible for damages caused by improper packaging."
        }]
      }, {
        t: "Cryptocurrency services",
        blocks: [{
          p: "If crypto services are available, users must comply with all local regulations. Cryptocurrency values are highly volatile. We are not responsible for losses caused by market fluctuations. Crypto services may be restricted depending on regulatory requirements."
        }]
      }, {
        t: "Fees",
        blocks: [{
          p: "We may charge fees for certain services including wallet transactions, taxi bookings, delivery services, and currency or crypto exchanges. All fees will be displayed before confirming transactions."
        }]
      }, {
        t: "Prohibited activities",
        blocks: [{
          p: "Users must not use the platform for illegal activities, attempt fraud or money laundering, interfere with platform security, or use the service for unauthorized commercial purposes. Violation may result in account suspension."
        }]
      }, {
        t: "Service availability",
        blocks: [{
          p: "We strive to provide continuous service but do not guarantee uninterrupted operation. Services may be temporarily unavailable due to maintenance, technical issues, or regulatory requirements."
        }]
      }, {
        t: "Limitation of liability",
        blocks: [{
          p: "To the maximum extent permitted by law, we are not liable for indirect damages, not responsible for losses caused by third-party services, and our total liability is limited to the amount of the transaction involved."
        }]
      }, {
        t: "Termination",
        blocks: [{
          p: "We may suspend or terminate accounts if terms are violated, fraudulent activity is suspected, or required by law enforcement or regulators."
        }]
      }, {
        t: "Changes to terms",
        blocks: [{
          p: "We may update these Terms periodically. Users will be notified through app notifications, email, or website updates. Continued use means acceptance of the new terms."
        }]
      }, {
        t: "Contact us",
        blocks: [{
          p: "For questions regarding these Terms, please reach out to us:"
        }, {
          email: "legales@omniiaone.com"
        }]
      }]
    },
    privacy: {
      breadcrumb: "Privacy policy",
      eyebrow: "Legal information",
      h1: "Privacy policy",
      updated: "Last updated: 17 June 2026",
      intro: "This policy explains how OMNIIA One collects, uses and protects your personal data, in accordance with Guinean law L/2016/037 on the protection of personal data.",
      tocLabel: "Contents",
      sections: [{
        t: "Introduction",
        blocks: [{
          p: "OMNIIA One is committed to protecting your privacy. This policy applies to all of the platform’s services: digital wallet, payments, taxi rides, deliveries and related services."
        }, {
          p: "Your data is processed in compliance with Guinean law L/2016/037 on the protection of personal data."
        }]
      }, {
        t: "Data we collect",
        blocks: [{
          p: "Depending on the services you use, we may collect:"
        }, {
          list: ["Identity data: name, date of birth, identity document", "Contact details: phone number, email address, postal address", "Financial data: wallet balance, transaction history, linked cards", "Location data: for taxi rides and deliveries", "Technical data: device type, identifiers and IP address"]
        }]
      }, {
        t: "How we collect your data",
        blocks: [{
          p: "We collect this data when you create an account, make transactions, book a ride or delivery, contact our support, or use the application. Some technical data is collected automatically as you browse."
        }]
      }, {
        t: "How we use your data",
        blocks: [{
          p: "We use your data to:"
        }, {
          list: ["Provide, operate and secure our services", "Process payments, rides and deliveries", "Verify your identity and prevent fraud", "Comply with our legal and regulatory obligations", "Improve the platform and communicate with you"]
        }]
      }, {
        t: "Legal basis for processing",
        blocks: [{
          p: "We process your data based on your consent, the performance of our contract with you, compliance with our legal obligations, and our legitimate interest in securing and improving the platform."
        }]
      }, {
        t: "Data sharing",
        blocks: [{
          p: "We may share certain data with drivers and delivery partners to carry out your ride or delivery, with financial institutions and payment providers, and with authorities where the law requires it. We do not sell your personal data."
        }]
      }, {
        t: "International transfers",
        blocks: [{
          p: "Where your data is processed outside Guinea, we take appropriate measures to ensure a level of protection consistent with law L/2016/037."
        }]
      }, {
        t: "Data retention",
        blocks: [{
          p: "We keep your data for as long as necessary to provide our services and meet our legal, accounting and regulatory obligations. Beyond that, it is deleted or anonymized."
        }]
      }, {
        t: "Data security",
        blocks: [{
          p: "We implement technical and organizational measures to protect your data: encryption, access control and monitoring. We do not store full card numbers on our servers."
        }]
      }, {
        t: "Your rights",
        blocks: [{
          p: "In accordance with law L/2016/037, you have the following rights:"
        }, {
          list: ["Access your personal data", "Rectify inaccurate or incomplete data", "Request the deletion of your data", "Object to or request the restriction of certain processing", "Withdraw your consent at any time"]
        }]
      }, {
        t: "Cookies and trackers",
        blocks: [{
          p: "Our website and app may use cookies and similar technologies to operate, remember your preferences and measure audience. You can manage your preferences at any time."
        }]
      }, {
        t: "Protection of minors",
        blocks: [{
          p: "Our services are reserved for people aged at least 18. We do not knowingly collect data about minors."
        }]
      }, {
        t: "Changes to this policy",
        blocks: [{
          p: "We may update this privacy policy. Any significant change will be notified to you through the app, by email or on the website. The last updated date appears at the top of this page."
        }]
      }, {
        t: "Contact us",
        blocks: [{
          p: "To exercise your rights or for any question about your personal data, contact our team:"
        }, {
          email: "confidentialite@omniiaone.com"
        }]
      }]
    }
  }
};
Object.assign(window, {
  CONTENT,
  CITIES,
  FARE_BASE,
  fmtCurrency
});