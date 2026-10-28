/**
 * Single source of truth for the kindergarten's confirmed facts and all Kazakh copy.
 * Both compositions (website and mobile-website) read from here.
 * Do not add group names, prices, clubs or reviews until the kindergarten confirms them.
 * Public name: «Балдаурен» балабақшасы. The legal name (ТОО) is kept exactly as registered.
 */

export const club = {
  name: "Балдаурен",
  /** what follows the name: «Балдаурен» балабақшасы */
  kind: "балабақшасы",
  title: "«Балдаурен» балабақшасы",
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
    greeting: "Сәлеметсіз бе! «Балдаурен» балабақшасы туралы білгім келеді.",
  },
  instagram: { url: "https://www.instagram.com/baldauren_sad/", handle: "@baldauren_sad" },
  /** Official documents live only in this Google Drive folder; the site just links to it. */
  documentsFolder: "https://drive.google.com/drive/folders/10OgMBK2bQdEbEtWDUjcjGpcUsbp0SLot",

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
  documents: club.documentsFolder,
  twoGisCard: `https://2gis.kz/almaty/firm/${club.twoGis.firmId}`,
  twoGisRoute: `https://2gis.kz/almaty/directions/points/${encodeURIComponent(
    `|${club.twoGis.lng},${club.twoGis.lat};${club.twoGis.firmId}`,
  )}`,
} as const;

export const nav = [
  { id: "about", label: "Балабақша туралы" },
  { id: "groups", label: "Топтар" },
  { id: "nutrition", label: "Тамақтану" },
  { id: "gallery", label: "Галерея" },
  { id: "documents", label: "Құжаттар" },
  { id: "contacts", label: "Байланыс" },
] as const;

export const heroFacts = [
  { value: "2–5", unit: "жас", label: "балалар жасы" },
  { value: "4", unit: "топ", label: "балабақшада" },
  { value: "5", unit: "мезгіл", label: "тамақтану" },
] as const;

export const about = {
  title: "Біздің балабақша туралы",
  eyebrow: "Таныс болайық",
  paragraphs: [
    "«Балдаурен» — Алматы қаласының Наурызбай ауданында, Қалқаман-2 шағынауданында орналасқан балабақша. Біз 2 жастан 5 жасқа дейінгі балаларды қабылдаймыз.",
    "Балабақшада тәрбие мен оқыту қазақ тілінде жүргізіледі. Бала күн сайын ана тілінде сөйлеп, ойнап, жаңа нәрселерді үйренеді.",
    "Балабақшада төрт топ бар, балалар күніне бес мезгіл тамақтанады. Біз 08:00-ден 18:30-ға дейін жұмыс істейміз.",
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
    text: "Балабақша мектепке дейінгі кішкентай балаларға арналған.",
  },
  {
    icon: "groups",
    title: "4 топ",
    text: "Балабақшада балаларға арналған төрт топ жұмыс істейді.",
  },
  {
    icon: "meals",
    title: "Күніне 5 мезгіл тамақтану",
    text: "Бала күні бойы балабақшада уақытылы тамақтанады.",
  },
];

/**
 * Groups: only the count is confirmed. When the kindergarten provides names, ages or photos,
 * fill `name`, `note` and `photo` (a path in /public, e.g. "/images/groups/1.jpg").
 */
export type Group = { number: number; name: string | null; note: string | null; photo: string | null };

export const groups: Group[] = Array.from({ length: club.groupsCount }, (_, i) => ({
  number: i + 1,
  name: null,
  note: null,
  photo: null,
}));

/**
 * How the two named photos sit in their shaped frames (CSS object-position) and their alt text.
 * Tuned for the current main-page.jpeg (the building and its sign) and main-page2.jpeg
 * (children with their dance awards — faces in the lower middle). Update if the files change.
 */
export const photos = {
  hero: { alt: "«Балдаурен» балабақшасының ғимараты", focus: "38% 50%" },
  about: { alt: "«Балдаурен» тәрбиеленушілері би байқауының марапатымен", focus: "50% 62%" },
} as const;

export const groupsCopy = {
  title: "Біздің топтар",
  eyebrow: "Топтар",
  lead: "Балабақшада 2–5 жастағы балаларға арналған төрт топ бар. Әр топтың атауы мен фотосуреттері осы бөлімде жарияланады.",
  ask: "Топтар туралы сұрау",
  askMessage: "Сәлеметсіз бе! «Балдаурен» балабақшасының топтары туралы білгім келеді.",
} as const;

export const nutrition = {
  title: "Дұрыс тамақтану",
  eyebrow: "Тамақтану",
  lead: "Балалар балабақшада күні бойы болады, сондықтан тамақтану — күн тәртібінің маңызды бөлігі. Балабақшада балаларға күніне бес мезгіл тамақ беріледі.",
  highlight: "Күніне 5 мезгіл",
  points: [
    { title: "Күні бойы", text: "Тамақтану 08:00-ден 18:30-ға дейінгі күн тәртібіне сай." },
    { title: "Тұрақты кесте", text: "Бала күн сайын бір уақытта тамақтануға үйренеді." },
    { title: "Сұрақтарыңыз болса", text: "Мәзір туралы бізге хабарласып, толық біле аласыз." },
  ],
  ask: "Мәзір туралы сұрау",
  askMessage: "Сәлеметсіз бе! «Балдаурен» балабақшасындағы тамақтану туралы білгім келеді.",
} as const;

export const galleryCopy = {
  title: "Біздің галерея",
  eyebrow: "Галерея",
  lead: "Балабақша өмірінен сәттер.",
  more: "Тағы көрсету",
  less: "Жасыру",
  emptyTitle: "Фотосуреттер жақында қосылады",
  emptyText: "Әзірге балабақша өмірін Instagram парақшамыздан көре аласыз.",
  open: "Суретті үлкейту",
  close: "Жабу",
  prev: "Алдыңғы",
  next: "Келесі",
  photoAlt: (n: number) => `«Балдаурен» балабақшасы, ${n}-сурет`,
  videoLabel: (n: number) => `«Балдаурен» балабақшасы, ${n}-бейне`,
} as const;

export const documentsCopy = {
  title: "Құжаттар",
  eyebrow: "Ресми ақпарат",
  lead: "Балабақшаның ресми құжаттары Google Drive-тағы бір папкада жинақталған. Оларды кез келген уақытта ашып, танысуға болады.",
  open: "Құжаттарды қарау",
  where: "Google Drive",
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
  mapTitle: "«Балдаурен» балабақшасы картада",
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
  title: "«Балдаурен» балабақшасы — Алматы, Қалқаман-2",
  description:
    "«Балдаурен» балабақшасы: 2–5 жастағы балалар, 4 топ, қазақ тіліндегі тәрбие мен оқыту, күніне 5 мезгіл тамақтану. Алматы, Наурызбай ауданы, Қалқаман-2, Кенесбаев көшесі, 1. Жұмыс уақыты 08:00–18:30.",
  keywords: [
    "Балдаурен",
    "балабақша Алматы",
    "Қалқаман-2 балабақша",
    "Наурызбай ауданы балабақша",
    "қазақ тілді балабақша",
    "детский сад Балдаурен",
    "детский сад Калкаман",
  ],
} as const;
