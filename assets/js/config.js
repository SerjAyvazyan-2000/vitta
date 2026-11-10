/* ==========================================================================
   НАСТРОЙКИ САЙТА «ВИТТА» — редактируйте только этот файл.
   Источники: карточка салона в 2ГИС (прайс обновлён 31.03.2026, фото салона,
   подтверждённые отзывы, часы, способы оплаты), jsprav.ru (телефоны).
   ВАЖНО: фото пока подгружаются с сервера 2ГИС (опубликованы салоном).
   Перед публикацией согласовать с салоном и перенести в assets/images.
   ========================================================================== */

/* Фото из галереи салона в 2ГИС; w — ширина превью */
const G = (path, w = 900) => "https://" + path.replace(/\.jpg$/, `_${w}x.jpg`);

const PHOTO = {
  // первый экран
  blondePortrait: G("i1.photo.2gis.com/photo-gallery/9eb5591f-e011-4735-a5e7-bdcd1c4b96c1.jpg", 1000),
  waves:          G("i5.photo.2gis.com/images/branch/0/30258560175774429_05eb.jpg"),
  nailsRing:      G("i0.photo.2gis.com/photo-gallery/2e4669a7-e06d-449d-8ed1-6eacfe6521ed.jpg", 700),
  // работы
  longBlonde:     G("i8.photo.2gis.com/images/branch/0/30258560175774434_8175.jpg"),
  french:         G("i5.photo.2gis.com/photo-gallery/2e0ee107-66b3-4110-8616-a4a33bb7eca9.jpg"),
  blondeBack:     G("i9.photo.2gis.com/images/branch/0/30258560081992014_319a.jpg", 800),
  brows:          G("i7.photo.2gis.com/images/branch/0/30258560175774466_7e8c.jpg"),
  burgundy:       G("i8.photo.2gis.com/images/branch/0/30258560175774444_6439.jpg"),
  pedicure:       G("i1.photo.2gis.com/images/branch/0/30258560175774478_f413.jpg"),
  nailDesign:     G("i7.photo.2gis.com/photo-gallery/fdba8981-8fab-412f-9242-12a1acec693c.jpg"),
  nude:           G("i9.photo.2gis.com/photo-gallery/978c8c0b-e874-4a26-ac16-c55e653babe2.jpg"),
  menNails:       G("i3.photo.2gis.com/photo-gallery/43968e35-1c23-4343-bcf3-cdb1713666fe.jpg"),
  lashLam:        G("i1.photo.2gis.com/photo-gallery/5d059fb7-9f19-4d64-972c-35b9cbec4e1d.jpg", 800),
  lashExt:        G("i3.photo.2gis.com/photo-gallery/35fb3f43-0322-45a5-b9be-bef3d8a4a761.jpg"),
  facial:         G("i7.photo.2gis.com/images/branch/0/30258560175774424_c4e9.jpg"),
  peel:           G("i1.photo.2gis.com/images/branch/0/30258560175774414_bdaa.jpg"),
  browTattoo:     G("i3.photo.2gis.com/photo-gallery/4c307ced-afa2-4a71-815b-4d2ad801a8a8.jpg", 800),
  // команда за работой
  team1:          G("i2.photo.2gis.com/images/branch/0/30258560175774412_d63f.jpg", 700),
  team2:          G("i6.photo.2gis.com/images/branch/0/30258560175774459_e023.jpg", 700),
  team3:          G("i8.photo.2gis.com/images/branch/0/30258560175774411_cb10.jpg", 700),
  team4:          G("i7.photo.2gis.com/images/branch/0/30258560175774443_c739.jpg", 700),
  team5:          G("i0.photo.2gis.com/images/branch/0/30258560175774483_bb43.jpg", 700),
};

window.SITE = {
  /* --- Бренд --- */
  brand: {
    name: "Витта",
    tagline: "салон-парикмахерская",
    city: "Новосибирск",
  },

  /* --- Цвета: фиолетовый и нежно-розовый с фирменных сертификатов салона --- */
  theme: {
    ink: "#24172e",
    paper: "#faf5f3",
    accent: "#6b2d86",
    blush: "#ecdde1",
  },

  /* --- Какие блоки показывать.
         До/после скрыт: в галерее салона нет парных снимков одной работы --- */
  show: { beforeAfter: false, masters: true, works: true, reviews: true, faq: true },

  /* --- Контакты --- */
  contacts: {
    phone: "+7 (383) 279-85-55",
    phoneRaw: "+73832798555",
    phone2: "+7 (913) 917-56-52",
    phone2Raw: "+79139175652",
    email: "salonvitta@gmail.com",
    whatsapp: "79139175652",
    telegram: "vittasalon",
    vk: "vittasalon",
    address: "просп. Дзержинского, 22",
    hours: [["Ежедневно", "8:00 — 20:00"]],
    mapEmbed: "https://yandex.ru/map-widget/v1/?ll=82.970829%2C55.053559&z=17&pt=82.970829%2C55.053559%2Cpm2vvm",
    mapLink: "https://2gis.ru/novosibirsk/firm/141265769370551",
  },

  /* --- Первый экран --- */
  hero: {
    eyebrow: "Окрашивание · Маникюр · Педикюр · Брови · Ресницы",
    title: ["Красота,", "которую", "замечают"],
    accentWord: 2,
    text: "Сложное окрашивание, стрижки, маникюр и педикюр, брови и ресницы — в салоне-парикмахерской на проспекте Дзержинского, 22. Работаем каждый день с 8 до 20.",
    cta: "Записаться",
    images: [PHOTO.blondePortrait, PHOTO.waves, PHOTO.nailsRing],
    badge: "запись в WhatsApp • Telegram • по телефону • ",
    visitLine: false,
  },

  /* --- Бегущая строка --- */
  marquee: ["Сложное окрашивание", "Стрижки", "Маникюр", "Педикюр", "Брови", "Ресницы", "Причёски", "Косметология", "Татуаж"],

  /* --- Цифры (данные 2ГИС) --- */
  stats: [
    { value: 4.9, suffix: "", label: "рейтинг в 2ГИС", decimals: 1, link: "https://2gis.ru/novosibirsk/firm/141265769370551/tab/reviews" },
    { value: 202, suffix: "", label: "оценки гостей", link: "https://2gis.ru/novosibirsk/firm/141265769370551/tab/reviews" },
    { value: 38, suffix: "", label: "услуг в прайсе" },
    { value: 12, suffix: " ч", label: "работаем каждый день" },
  ],

  /* --- Услуги и цены (2ГИС, обновлено 31.03.2026). from: true — цена «от» ---
     Длительность в источниках не указана — добавьте min (минуты), когда салон подтвердит. */
  services: [
    { cat: "Окрашивание", items: [
      { name: "Окрашивание в сложных техниках", desc: "В 2ГИС указана акция на сложное окрашивание — от 5 900 ₽, условия уточняйте у администратора", price: 7900, from: true, img: PHOTO.waves },
      { name: "Мелирование", price: 3000, from: true, img: PHOTO.blondeBack },
      { name: "Окрашивание в один тон", price: 2500, from: true, img: PHOTO.longBlonde },
      { name: "Камуфлирование седины", price: 810, img: PHOTO.team4 },
    ]},
    { cat: "Стрижки и причёски", items: [
      { name: "Женская стрижка — короткие волосы", price: 1400, img: PHOTO.blondePortrait },
      { name: "Женская стрижка — средние волосы", price: 1700, img: PHOTO.blondePortrait },
      { name: "Женская стрижка — длинные волосы", price: 1900, img: PHOTO.longBlonde },
      { name: "Мужская стрижка", price: 600, from: true, img: PHOTO.team4 },
      { name: "Причёска", price: 2500, from: true, img: PHOTO.waves },
    ]},
    { cat: "Маникюр и педикюр", items: [
      { name: "Женский маникюр", price: 900, img: PHOTO.nude },
      { name: "Маникюр с покрытием гель-лаком", price: 2100, img: PHOTO.french },
      { name: "Мужской маникюр", price: 1000, img: PHOTO.menNails },
      { name: "Женский педикюр", desc: "Аппаратный или классический", price: 1900, img: PHOTO.pedicure },
      { name: "Мужской педикюр", desc: "Аппаратный или классический", price: 2100, img: PHOTO.pedicure },
    ]},
    { cat: "Брови и ресницы", items: [
      { name: "Оформление бровей", desc: "Воском или пинцетом", price: 500, img: PHOTO.brows },
      { name: "Окрашивание бровей", price: 600, img: PHOTO.brows },
      { name: "Окрашивание ресниц", price: 600, img: PHOTO.lashLam },
      { name: "Ламинирование ресниц", price: 2500, img: PHOTO.lashLam },
      { name: "Наращивание ресниц 1D", price: 2000, img: PHOTO.lashExt },
      { name: "Наращивание ресниц 1.5D", price: 2200, img: PHOTO.lashExt },
      { name: "Наращивание ресниц 2D", price: 2400, img: PHOTO.lashExt },
      { name: "Наращивание ресниц 2.5D", price: 2600, img: PHOTO.lashExt },
      { name: "Наращивание ресниц 3D", price: 2900, img: PHOTO.lashExt },
    ]},
    { cat: "Лицо и татуаж", items: [
      { name: "Атравматичная чистка лица Holy Land", price: 3500, img: PHOTO.facial },
      { name: "Комбинированная чистка лица", price: 2500, from: true, img: PHOTO.facial },
      { name: "Всесезонный пилинг BioRePeel", price: 3600, img: PHOTO.peel },
      { name: "Моделирующий лимфодренажный массаж", price: 1800, img: PHOTO.peel },
      { name: "Татуаж бровей", desc: "Коррекция — 3 500 ₽", price: 7000, img: PHOTO.browTattoo },
      { name: "Татуаж губ", desc: "Коррекция — 3 500 ₽", price: 7000 },
      { name: "Межресничный татуаж", desc: "Коррекция — 2 500 ₽", price: 5000, img: PHOTO.lashLam },
      { name: "Татуаж «стрелка»", desc: "Коррекция — 2 500 ₽", price: 5000 },
    ]},
  ],
  currency: "₽",
  priceOnRequest: "цена по записи",
  priceNote: "Цены по прайсу салона в 2ГИС (обновлён 31.03.2026). Не является публичной офертой — точную стоимость назовёт администратор.",

  /* --- До / После: скрыт (show.beforeAfter = false). Когда салон пришлёт
         пару снимков одной работы, укажите их и включите блок:
         beforeAfter: { title: "...", text: "...", before: "assets/images/before.jpg", after: "assets/images/after.jpg" }, */
  beforeAfter: null,

  /* --- Команда: фото мастеров за работой из 2ГИС, без имён до согласования --- */
  masters: [
    { name: "", role: "", img: PHOTO.team1 },
    { name: "", role: "", img: PHOTO.team2 },
    { name: "", role: "", img: PHOTO.team3 },
    { name: "", role: "", img: PHOTO.team4 },
    { name: "", role: "", img: PHOTO.team5 },
  ],

  /* --- Портфолио по направлениям (фото салона из 2ГИС) --- */
  gallery: [PHOTO.longBlonde, PHOTO.french, PHOTO.blondeBack, PHOTO.brows, PHOTO.burgundy, PHOTO.pedicure, PHOTO.nailDesign, PHOTO.nude],

  /* --- Отзывы: подтверждённые отзывы из 2ГИС (дословно, с сокращениями) --- */
  reviews: [
    { name: "Ольга", service: "Окрашивание", source: "2ГИС", rating: 5, text: "Я уже несколько лет крашу волосы в этом салоне. Качество и обслуживание отличное! Мастера вежливые и у них золотые руки ♥️" },
    { name: "Юлия О.", service: "Парикмахер", source: "2ГИС", rating: 5, text: "Хожу в Витту к мастеру Василине больше 15 лет, довольна на 100% работой и подходом к клиенту!!! Спасибо огромное 😘" },
    { name: "Галина", service: "Аппаратный маникюр", source: "2ГИС", rating: 5, text: "Маникюрный мастер Галина Николаевна своей работой сильно порадовала. Так профессионально всё сделала. Меня маникюр пугает, а здесь я отдыхала." },
    { name: "Галина Г.", service: "Причёски", source: "2ГИС", rating: 5, text: "Была у мастера Светланы! Прекрасный мастер с золотыми руками! Если вы не можете найти своего мастера по красивым причёскам, то вам к Светлане 🥰" },
    { name: "Николай Е.", service: "Стрижка", source: "2ГИС", rating: 5, text: "Впервые решил посетить это замечательное место и не прогадал! Мастер-универсал Василина — профессионал своего дела! Огромное спасибо за подход и модную стрижку." },
  ],

  /* --- Вопросы (только подтверждённые факты из карточки 2ГИС) --- */
  faq: [
    ["Как записаться?", "Напишите в WhatsApp или Telegram или позвоните: +7 (383) 279-85-55, +7 (913) 917-56-52. Форма на сайте сразу откроет WhatsApp с готовой заявкой."],
    ["Когда вы работаете?", "Каждый день с 8:00 до 20:00, без выходных."],
    ["Как вас найти?", "Новосибирск, Дзержинский район, проспект Дзержинского, 22, 1 этаж. Ближайшая остановка — «Авиационный колледж», около 2 минут пешком."],
    ["Как можно оплатить?", "Картой, наличными, по QR-коду или переводом через банк."],
    ["Есть подарочные сертификаты?", "Да, в салоне можно оформить подарочный сертификат — сумму и оформление уточняйте у администратора."],
  ],

  /* --- Форма записи: endpoint пустой → заявка открывается в WhatsApp салона --- */
  form: {
    endpoint: "",
    successText: "Открыли WhatsApp с вашей заявкой — отправьте сообщение, и администратор подтвердит время.",
  },

  /* --- Подвал --- */
  footer: {
    legal: "",
    credit: { text: "", url: "" },
  },
};
