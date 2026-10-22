/**
 * Single source of truth for the club's confirmed facts and all Kazakh copy.
 * Both compositions (website and mobile-website) read from here.
 * Do not add group names, prices, clubs or reviews until the club confirms them.
 */

export const club = {
  name: "Балдаурен",
  title: "«Балдаурен» балалар клубы",
  legalName: "ТОО «Детский Клуб Балдаурен»",
  slogan: "Балалық шақтың ең жарқын күндері — бізбен бірге",
  lead: "2–5 жастағы балаларға арналған жылы әрі мейірімді орта. Тәрбие мен оқыту қазақ тілінде жүргізіледі.",

  ages: { from: 2, to: 5, label: "2–5 жас" },
  groupsCount: 4,
  mealsPerDay: 5,
  language: "қазақ тілі",
  hours: { opens: "08:00", closes: "18:30", label: "08:00–18:30" },

  phone: { display: "+7 705 279 51 60", tel: "+77052795160" },
  whatsapp: {
    url: "https://wa.me/77052795160",
    greeting: "Сәлеметсіз бе! «Балдаурен» балалар клубы туралы білгім келеді.",
  },
  instagram: { url: "https://www.instagram.com/baldauren_sad/", handle: "@baldauren_sad" },

  address: {
    full: "Алматы қаласы, Наурызбай ауданы, Қалқаман-2 шағынауданы, Кенесбаев көшесі, 1",
    street: "Кенесбаев көшесі, 1",
    area: "Қалқаман-2 шағынауданы, Наурызбай ауданы",
    city: "Алматы",
  },

  /**
   * 2GIS card «Балдаурен, частный детский сад» — улица Исмета Кенесбаева, 1, Калкаман-2 м-н,
   * Наурызбайский район (checked on 2gis.kz on 2026-10-22; the OSM building for the same
   * address sits ~60 m away, at 43.19631, 76.82476).
   */
  twoGis: {
    firmId: "70000001032615468",
    lat: 43.196733,
    lng: 76.825439,
  },
} as const;

/** WhatsApp chat with an optional prefilled message. */
export function whatsappLink(text: string = club.whatsapp.greeting) {
  return `${club.whatsapp.url}?text=${encodeURIComponent(text)}`;
}

export const links = {
  call: `tel:${club.phone.tel}`,
  whatsapp: whatsappLink(),
  instagram: club.instagram.url,
  twoGisCard: `https://2gis.kz/almaty/firm/${club.twoGis.firmId}`,
  twoGisRoute: `https://2gis.kz/almaty/directions/points/${encodeURIComponent(
    `|${club.twoGis.lng},${club.twoGis.lat};${club.twoGis.firmId}`,
  )}`,
} as const;

export const nav = [
  { id: "about", label: "Клуб туралы" },
  { id: "groups", label: "Топтар" },
  { id: "nutrition", label: "Тамақтану" },
  { id: "gallery", label: "Галерея" },
  { id: "contacts", label: "Байланыс" },
] as const;

export const heroFacts = [
  { value: "2–5", unit: "жас", label: "балалар жасы" },
  { value: "4", unit: "топ", label: "клубта" },
  { value: "5", unit: "мезгіл", label: "тамақтану" },
] as const;

export const about = {
  title: "Біздің клуб туралы",
  eyebrow: "Таныс болайық",
  paragraphs: [
    "«Балдаурен» — Алматы қаласының Наурызбай ауданында, Қалқаман-2 шағынауданында орналасқан балалар клубы. Біз 2 жастан 5 жасқа дейінгі балаларды қабылдаймыз.",
    "Клубта тәрбие мен оқыту қазақ тілінде жүргізіледі. Бала күн сайын ана тілінде сөйлеп, ойнап, жаңа нәрселерді үйренеді.",
    "Клубта төрт топ бар, балалар күніне бес мезгіл тамақтанады. Біз 08:00-ден 18:30-ға дейін жұмыс істейміз.",
  ],
  quote: "Әр баланың күні жылулық пен қуанышқа толы болсын.",
} as const;

export type AdvantageIcon = "language" | "age" | "groups" | "meals";

export const advantages: ReadonlyArray<{ icon: AdvantageIcon; title: string; text: string }> = [
  {
    icon: "language",
    title: "Қазақ тіліндегі тәрбие",
    text: "Күнделікті қарым-қатынас, ойын және оқу — ана тілінде.",
  },
  {
    icon: "age",
    title: "2–5 жас аралығындағы балалар",
    text: "Клуб мектепке дейінгі кішкентай балаларға арналған.",
  },
  {
    icon: "groups",
    title: "4 топ",
    text: "Клубта балаларға арналған төрт топ жұмыс істейді.",
  },
  {
    icon: "meals",
    title: "Күніне 5 мезгіл тамақтану",
    text: "Бала күні бойы клубта уақытылы тамақтанады.",
  },
];

/**
 * Groups: only the count is confirmed. When the club provides names, ages or photos,
 * fill `name`, `note` and `photo` (a path in /public, e.g. "/images/groups/1.jpg").
 */
export type Group = { number: number; name: string | null; note: string | null; photo: string | null };

export const groups: Group[] = Array.from({ length: club.groupsCount }, (_, i) => ({
  number: i + 1,
  name: null,
  note: null,
  photo: null,
}));

export const groupsCopy = {
  title: "Біздің топтар",
  eyebrow: "Топтар",
  lead: "Клубта 2–5 жастағы балаларға арналған төрт топ бар. Әр топтың атауы мен фотосуреттері осы бөлімде жарияланады.",
  ask: "Топтар туралы сұрау",
  askMessage: "Сәлеметсіз бе! «Балдаурен» клубының топтары туралы білгім келеді.",
} as const;

export const nutrition = {
  title: "Дұрыс тамақтану",
  eyebrow: "Тамақтану",
  lead: "Бала клубта күні бойы болады, сондықтан тамақтану — күн тәртібінің маңызды бөлігі. Клубта балаларға күніне бес мезгіл тамақ беріледі.",
  highlight: "Күніне 5 мезгіл",
  points: [
    { title: "Күні бойы", text: "Тамақтану 08:00-ден 18:30-ға дейінгі күн тәртібіне сай." },
    { title: "Тұрақты кесте", text: "Бала күн сайын бір уақытта тамақтануға үйренеді." },
    { title: "Сұрақтарыңыз болса", text: "Мәзір туралы бізге хабарласып, толық біле аласыз." },
  ],
  ask: "Мәзір туралы сұрау",
  askMessage: "Сәлеметсіз бе! «Балдаурен» клубындағы тамақтану туралы білгім келеді.",
} as const;

export const galleryCopy = {
  title: "Біздің галерея",
  eyebrow: "Галерея",
  lead: "Клуб өмірінен сәттер.",
  more: "Тағы көрсету",
  less: "Жасыру",
  emptyTitle: "Фотосуреттер жақында қосылады",
  emptyText: "Әзірге клуб өмірін Instagram парақшамыздан көре аласыз.",
  open: "Суретті үлкейту",
  close: "Жабу",
  prev: "Алдыңғы",
  next: "Келесі",
  photoAlt: (n: number) => `«Балдаурен» балалар клубы, ${n}-сурет`,
  videoLabel: (n: number) => `«Балдаурен» балалар клубы, ${n}-бейне`,
} as const;

export const contactsCopy = {
  title: "Байланыс",
  eyebrow: "Бізге келіңіз",
  lead: "Сұрақтарыңыз болса, қоңырау шалыңыз немесе WhatsApp-қа жазыңыз.",
  addressLabel: "Мекенжай",
  phoneLabel: "Телефон",
  hoursLabel: "Жұмыс уақыты",
  call: "Қоңырау шалу",
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  openIn2gis: "2GIS-те ашу",
  route: "Маршрут құру",
  mapTitle: "«Балдаурен» балалар клубы картада",
  mapLoading: "Карта жүктелуде…",
  mapTap: "Картаны жылжыту үшін басыңыз",
} as const;

export const ui = {
  contactUs: "Бізге хабарласу",
  more: "Толығырақ",
  menu: "Мәзір",
  closeMenu: "Мәзірді жабу",
  skip: "Негізгі мазмұнға өту",
  newTab: "жаңа бетте ашылады",
  home: "Басты бет",
  rights: "Барлық құқықтар қорғалған.",
} as const;

export const seo = {
  title: "«Балдаурен» балалар клубы — Алматы, Қалқаман-2",
  description:
    "«Балдаурен» балалар клубы: 2–5 жастағы балалар, 4 топ, қазақ тіліндегі тәрбие мен оқыту, күніне 5 мезгіл тамақтану. Алматы, Наурызбай ауданы, Қалқаман-2, Кенесбаев көшесі, 1. Жұмыс уақыты 08:00–18:30.",
  keywords: [
    "Балдаурен",
    "балалар клубы Алматы",
    "балабақша Алматы",
    "Қалқаман-2 балабақша",
    "Наурызбай ауданы балабақша",
    "қазақ тілді балабақша",
    "детский клуб Балдаурен",
    "детский сад Калкаман",
  ],
} as const;
