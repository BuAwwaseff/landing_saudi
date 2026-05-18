import type { Language } from "@/lib/translations";
import type { StaticImageData } from "next/image";
import offerBoostImage from "@/public/home/offers/boost.png";
import offerCashbackImage from "@/public/home/offers/cashback.png";
import offerWelcomeImage from "@/public/home/offers/welcome.png";

type HomeImageSource = string | StaticImageData;

type HomeMediaCard = {
  title: string;
  body: string;
  image: HomeImageSource;
  eyebrow: string;
  metric?: string;
};

type HomeOfferCard = {
  title: string;
  body: string;
  image: HomeImageSource;
  kicker: string;
  detail: string;
};

type HomeContent = {
  nav: {
    games: string;
    sports: string;
    offers: string;
    support: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    chips: string[];
    stats: {
      label: string;
      value: string;
    }[];
    spotlight: HomeMediaCard;
    stack: HomeMediaCard[];
  };
  games: {
    eyebrow: string;
    title: string;
    body: string;
    cards: HomeMediaCard[];
  };
  sports: {
    eyebrow: string;
    title: string;
    body: string;
    lead: HomeMediaCard;
    rails: HomeMediaCard[];
  };
  offers: {
    eyebrow: string;
    title: string;
    body: string;
    cards: HomeOfferCard[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
  };
  footer: {
    body: string;
    homeLabel: string;
    marketLabel: string;
    supportLabel: string;
  };
};

const homeContent: Record<Language, HomeContent> = {
  en: {
    nav: {
      games: "Games",
      sports: "Sports",
      offers: "Offers",
      support: "Support",
    },
    hero: {
      eyebrow: "Saudi player home",
      title: "Live sports, premium casino picks, and offers built for a fast start.",
      body:
        "A cleaner Saudi-facing home flow for players who want match coverage, casino discovery, promo value, and quick support without noise.",
      primaryCta: "Explore games",
      secondaryCta: "View offers",
      chips: ["Live football", "Casino tables", "Fast deposits", "Mobile flow"],
      stats: [
        { label: "Live focus", value: "24/7" },
        { label: "Top markets", value: "120+" },
        { label: "Player support", value: "Fast" },
      ],
      spotlight: {
        eyebrow: "Match center",
        title: "Football remains the main entry point, with live coverage ready at a glance.",
        body: "Saudi players can jump from headline matches into deeper markets, then continue into casino and games without losing momentum.",
        image: "/products/football.png",
        metric: "Live now",
      },
      stack: [
        {
          eyebrow: "Casino",
          title: "Table games and live dealers in the same premium shell.",
          body: "A smoother casino path keeps discovery tight and sessions easier to continue on mobile.",
          image: "/home/games/live.png",
        },
        {
          eyebrow: "Games",
          title: "Quick-play titles for players who want a faster session rhythm.",
          body: "Arcade and casual layers create a strong second step after sports traffic lands.",
          image: "/home/games/fast.png",
        },
      ],
    },
    games: {
      eyebrow: "Games and casino",
      title: "Discover the sections players open after the first match visit.",
      body:
        "This mix follows the stronger player-home patterns from the mature markets: a lead discovery card, smaller supporting picks, and a premium mobile rhythm.",
      cards: [
        {
          eyebrow: "Live casino",
          title: "Dealer tables and premium casino surfaces.",
          body: "A stronger table-first lane for players looking for live rounds, roulette, blackjack, and a sharper premium feel.",
          image: "/home/games/live.png",
          metric: "Tables",
        },
        {
          eyebrow: "Crash and quick play",
          title: "Fast cycles for shorter sessions.",
          body: "The quick-play layer helps players move from sport into a lighter, faster game session with minimal friction.",
          image: "/home/games/fast.png",
          metric: "Fast",
        },
        {
          eyebrow: "Evergreen picks",
          title: "Casino and game variety that extends the session.",
          body: "A broader mix keeps the home page player-facing instead of treating the market like a partnership shell.",
          image: "/home/games/247.png",
          metric: "24/7",
        },
      ],
    },
    sports: {
      eyebrow: "Sports",
      title: "A broader sports section with one clear lead and deeper secondary lanes.",
      body:
        "This section borrows the stronger split seen in Jordan and Iraq: one lead surface, then supporting cards with different event angles and pace.",
      lead: {
        eyebrow: "Live football",
        title: "Headline football stays front and center for Saudi traffic.",
        body: "Use the main football entry to move players into leagues, cups, totals, and in-play moments without breaking the premium flow.",
        image: "/products/worldcup.png",
        metric: "90+ mins",
      },
      rails: [
        {
          eyebrow: "European leagues",
          title: "LaLiga and Ligue 1 stay easy to reach.",
          body: "A balanced path for players who move between headline fixtures and deeper league action.",
          image: "/products/sports/laliga.png",
          metric: "Daily",
        },
        {
          eyebrow: "Basketball",
          title: "NBA and basketball markets for a faster tempo.",
          body: "A useful second sports lane for players who want shorter cycles and more frequent scoring swings.",
          image: "/products/sports/nba.png",
          metric: "Fast",
        },
        {
          eyebrow: "UEFA nights",
          title: "High-intent event traffic with clear match-day focus.",
          body: "European event nights help the sports layer feel active and premium from the first scroll.",
          image: "/products/sports/uefa.png",
          metric: "Prime",
        },
      ],
    },
    offers: {
      eyebrow: "Offers and rewards",
      title: "Real offer moments for welcome value, match-day boosts, and cashback return.",
      body:
        "The offers block works best when each card feels like a live campaign. These visuals now frame a welcome gift, a football boost, and a cashback return in a cleaner, more premium way.",
      cards: [
        {
          kicker: "Welcome gift",
          title: "Welcome bonus for new players",
          body: "A gift-led first offer that makes the opening reward feel immediate, generous, and easy to understand at a glance.",
          image: offerWelcomeImage,
          detail: "Gift bonus",
        },
        {
          kicker: "Match boost",
          title: "Football boost for match day",
          body: "The football-led visual gives this card a clear sports angle, making the promo feel timely for live fixtures and event traffic.",
          image: offerBoostImage,
          detail: "Live boost",
        },
        {
          kicker: "Cashback",
          title: "Night cashback for repeat play",
          body: "The wallet and return-arrow visual makes the retention message clearer, positioning this card as a simple payback offer for later sessions.",
          image: offerCashbackImage,
          detail: "Wallet return",
        },
      ],
    },
    finalCta: {
      eyebrow: "Player support",
      title: "Keep the next step simple for players who are ready to continue.",
      body:
        "Use Telegram or WhatsApp for support follow-up, onboarding help, and a faster route into the product experience.",
      primary: "Telegram support",
      secondary: "WhatsApp support",
    },
    footer: {
      body: "A player-facing Saudi shell with stronger sports discovery, premium casino rhythm, and a cleaner reward close.",
      homeLabel: "Home",
      marketLabel: "Market routes",
      supportLabel: "Support",
    },
  },
  ar: {
    nav: {
      games: "الألعاب",
      sports: "الرياضة",
      offers: "العروض",
      support: "الدعم",
    },
    hero: {
      eyebrow: "الصفحة الرئيسية للاعبين",
      title: "رياضات مباشرة، اكتشاف كازينو أقوى، وعروض جاهزة لبداية سريعة.",
      body:
        "مسار منزلي أوضح للسوق السعودي موجّه للاعبين الذين يريدون تغطية المباريات، واكتشاف الألعاب، وقيمة ترويجية، ودعماً سريعاً بدون ضوضاء.",
      primaryCta: "استكشف الألعاب",
      secondaryCta: "شاهد العروض",
      chips: ["كرة قدم مباشرة", "طاولات كازينو", "إيداع سريع", "تجربة موبايل"],
      stats: [
        { label: "تركيز مباشر", value: "24/7" },
        { label: "أسواق قوية", value: "+120" },
        { label: "دعم اللاعبين", value: "سريع" },
      ],
      spotlight: {
        eyebrow: "مركز المباريات",
        title: "تبقى كرة القدم نقطة الدخول الرئيسية مع تغطية مباشرة واضحة من أول نظرة.",
        body: "يمكن للاعب السعودي الانتقال من المباراة الرئيسية إلى أسواق أعمق ثم إلى الكازينو والألعاب بدون فقدان الإيقاع.",
        image: "/products/football.png",
        metric: "مباشر الآن",
      },
      stack: [
        {
          eyebrow: "الكازينو",
          title: "طاولات مباشرة وتجربة كازينو ضمن نفس الهيكل المميز.",
          body: "مسار كازينو أوضح يساعد اللاعبين على اكتشاف الطاولات بسهولة ومتابعة الجلسة بسلاسة على الموبايل.",
          image: "/home/games/live.png",
        },
        {
          eyebrow: "الألعاب",
          title: "ألعاب سريعة لمن يريد جلسة أخف وأسرع.",
          body: "طبقة الألعاب السريعة تمنح اللاعب خطوة ثانية قوية بعد دخول الرياضة.",
          image: "/home/games/fast.png",
        },
      ],
    },
    games: {
      eyebrow: "الألعاب والكازينو",
      title: "اكتشف الأقسام التي يفتحها اللاعب بعد الزيارة الرياضية الأولى.",
      body:
        "هذا الترتيب يستعير من الصفحات المكتملة أفضل إيقاع للاعب: بطاقة اكتشاف رئيسية، ثم بطاقات دعم أصغر، وتجربة موبايل أنظف.",
      cards: [
        {
          eyebrow: "كازينو مباشر",
          title: "طاولات مباشرة وسطح كازينو أكثر تميزاً.",
          body: "مسار طاولات أوضح للاعبين الذين يريدون الروليت والبلاك جاك والجولات الحية ضمن تجربة أكثر فخامة.",
          image: "/home/games/live.png",
          metric: "طاولات",
        },
        {
          eyebrow: "ألعاب سريعة",
          title: "دورات سريعة للجلسات القصيرة.",
          body: "طبقة الألعاب السريعة تساعد اللاعب على الانتقال من الرياضة إلى جلسة أخف بإيقاع أعلى.",
          image: "/home/games/fast.png",
          metric: "سريع",
        },
        {
          eyebrow: "اختيارات ثابتة",
          title: "تنوع في الألعاب يطيل الجلسة بشكل طبيعي.",
          body: "هذا المزيج يجعل الصفحة الرئيسية موجّهة للاعبين بالفعل بدلاً من أن تبدو كشكل شراكة.",
          image: "/home/games/247.png",
          metric: "24/7",
        },
      ],
    },
    sports: {
      eyebrow: "الرياضة",
      title: "قسم رياضي أعمق مع بطاقة رئيسية واضحة ومسارات دعم متعددة.",
      body:
        "هذه البنية تستعير الفصل الأقوى من الأردن والعراق: سطح رئيسي واحد ثم بطاقات دعم بزوايا مختلفة وإيقاع أسرع.",
      lead: {
        eyebrow: "كرة القدم المباشرة",
        title: "تبقى كرة القدم في الواجهة لحركة السوق السعودي.",
        body: "استخدم مدخل كرة القدم الرئيسي لنقل اللاعب إلى الدوريات والكؤوس والأسواق المباشرة بدون كسر التدفق الفاخر.",
        image: "/products/worldcup.png",
        metric: "90+ دقيقة",
      },
      rails: [
        {
          eyebrow: "الدوريات الأوروبية",
          title: "الوصول إلى الليجا والدوري الفرنسي يبقى سهلاً.",
          body: "مسار متوازن للاعبين الذين ينتقلون بين المباريات الكبرى والدوريات اليومية.",
          image: "/products/sports/laliga.png",
          metric: "يومي",
        },
        {
          eyebrow: "كرة السلة",
          title: "NBA وأسواق أسرع إيقاعاً.",
          body: "مسار رياضي ثانٍ مفيد للاعبين الذين يريدون دورات أقصر وتسجيلات أسرع.",
          image: "/products/sports/nba.png",
          metric: "سريع",
        },
        {
          eyebrow: "ليالي UEFA",
          title: "حركة عالية النية وتركيز أوضح في أيام المباريات.",
          body: "الليالي الأوروبية تجعل الطبقة الرياضية نشطة ومميزة منذ أول تمرير.",
          image: "/products/sports/uefa.png",
          metric: "مميز",
        },
      ],
    },
    offers: {
      eyebrow: "العروض والمكافآت",
      title: "إغلاق أقوى بعرض ترحيبي وتعزيزات وحوافز للعودة.",
      body:
        "الأسواق المكتملة تنجح أكثر عندما يكون بلوك العروض مقصوداً وليس زخرفياً. هذه البطاقات تجهز ذلك بشكل واضح حتى قبل وضع الصور النهائية.",
      cards: [
        {
          kicker: "الترحيب",
          title: "مكافأة بداية سريعة",
          body: "حافز أول واضح للجلسات الجديدة، جاهز لاحقاً لصورة عرض محلية.",
          image: offerWelcomeImage,
          detail: "لاعبون جدد",
        },
        {
          kicker: "يوم المباراة",
          title: "تعزيز كرة القدم ومكافأة الحدث",
          body: "يستخدم شريط العروض لدعم حركة الرياضة عالية النية بسبب واضح للدخول الآن.",
          image: offerBoostImage,
          detail: "تعزيز المباراة",
        },
        {
          kicker: "الاحتفاظ",
          title: "كاش باك ليلي ودعم العودة",
          body: "بطاقة احتفاظ أخف تجعل الصفحة متوازنة بين الحركة الفورية والقيمة المستمرة للاعب.",
          image: offerCashbackImage,
          detail: "كاش باك",
        },
      ],
    },
    finalCta: {
      eyebrow: "دعم اللاعبين",
      title: "اجعل الخطوة التالية بسيطة للاعب الجاهز للمتابعة.",
      body: "استخدم تيليجرام أو واتساب للمتابعة والدعم وطريق أسرع نحو التجربة الكاملة.",
      primary: "دعم تيليجرام",
      secondary: "دعم واتساب",
    },
    footer: {
      body: "هيكل سعودي موجّه للاعبين مع اكتشاف رياضي أقوى وإيقاع كازينو أكثر تميزاً وإغلاق أفضل للعروض.",
      homeLabel: "الرئيسية",
      marketLabel: "روابط السوق",
      supportLabel: "الدعم",
    },
  },
};

const arabicOffersOverride: HomeContent["offers"] = {
  eyebrow: "العروض والمكافآت",
  title: "عروض أوضح للترحيب، وتعزيز يوم المباراة، وكاش باك العودة.",
  body:
    "ينجح بلوك العروض أكثر عندما تبدو كل بطاقة كحملة حقيقية. هذه الصور توضّح الآن هدية الترحيب، وتعزيز كرة القدم، وكاش باك العودة بشكل أنظف وأكثر فخامة.",
  cards: [
    {
      kicker: "هدية ترحيب",
      title: "مكافأة ترحيب للاعبين الجدد",
      body: "صورة الهدية تجعل العرض الأول واضحاً ومباشراً، وتمنح الحافز الافتتاحي إحساساً أعلى بالقيمة من أول نظرة.",
      image: offerWelcomeImage,
      detail: "هدية البداية",
    },
    {
      kicker: "تعزيز المباراة",
      title: "تعزيز كرة القدم ليوم المباراة",
      body: "الكرة وسهم الصعود يمنحان البطاقة زاوية رياضية واضحة، لتشعر وكأنها عرض مرتبط بالمباريات الحية وحركة الحدث.",
      image: offerBoostImage,
      detail: "تعزيز مباشر",
    },
    {
      kicker: "كاش باك",
      title: "كاش باك ليلي للعودة",
      body: "المحفظة وسهم العودة يوضحان فكرة الاسترجاع بسرعة، ويجعلان البطاقة أقرب إلى عرض احتفاظ بسيط ومفهوم.",
      image: offerCashbackImage,
      detail: "استرجاع المحفظة",
    },
  ],
};

export function getSaudiHomeContent(language: Language) {
  if (language === "ar") {
    return {
      ...homeContent[language],
      offers: arabicOffersOverride,
    };
  }

  return homeContent[language];
}
