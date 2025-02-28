import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  // .use(HttpBackend) // *** added this ***
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "RU",
    // supportedLngs: ["en", "es"], // *** added this ***
    // ns: ["translations"],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // backend: {
    //   loadPath: `http://localhost:4000/locales/{{lng}}/{{ns}}.json`,
    // },
    resources: {
      UZ: {
        translation: {
          all: "Barchasi",
          ministr:
            "O‘ZBEKISTON RESPUBLIKASI OLIY TA’LIM, FAN VA INNOVATSIYALAR VAZIRLIGI",
          nav: {
            about: "Kengash haqida",
            about_description: [
              "SI Maslahat kengashi Oliy taʼlim, fan va innovatsiyalar vazirligi qoshida tashkil etilgan boʻlib, mamlakatimizda qabul qilingan asosiy hujjatlar va dasturlar asosida yaratilgan poydevorga tayangan holda keyinchalik O‘zbekiston iqtisodiyotida eksperimentlardan haqiqiy jiddiy tatbiqlarga o‘tishni ta’minlaydigan, shu orqali sun’iy intellekt taqdim etayotgan vositalar va imkoniyatlar tufayli har bir fuqaroning farovonligini oshirishga xizmat qiladigan ilmiy tadqiqotlar, amaliy startaplar va boshqa tashabbuslar uchun turli ilg‘or g‘oyalarni taklif eta oladigan, muhim mutaxassislar hamjamiyatini (professional komyunitini) shakllantirish uchun shart-sharoitlar yaratish <strong>maqsadida</strong> tuzilgan.",
              "Kengash <strong>vazifalariga</strong> individual loyihalarni rivojlantirish, istiqbolli tashabbuslarni tayyorlash va ularni “1+1” ikki emas, balki ancha katta natijaga aylanganda sinergik jarayonga aylanadigan tarzda birlashtirish imkoniyatlarini topish kiradi. Shuningdek, SIdan ongli va axloqiy foydalanish ustida ishlayotgan global hamjamiyatga qo'shilish uchun xalqaro aloqalarni o'rnatish.",
              "Ilg‘or amaliyot va tajribani har tomonlama muhokama qilish hamda har bir muammoni to‘liq anglash uchun turli tomonlardan ko‘rib chiqish Kengashning samarali faoliyatining asosiy <strong>vositasi</strong> hisoblanadi. Shu bois muhokama jarayonida iqtisodiy taraqqiyotga, hayotiy tajribaga, bilim va malakaga turlicha qarashlarga ega bo‘lgan shaxslarning ishtirok etishi nihoyatda muhimdir.",
              "Kengash faoliyatida 10 ta davlatdan xalqaro tashkilotlar hamda xorijiy universitetlar vakillari va ekspertlari, yirik mahalliy tashkilotlar vakillari, ilg‘or startap loyihalar asoschilari va yetakchilari, xususiy sektor, akademik va ekspert doiralari, ommaviy axborot vositalari vakillari, shuningdek, taniqli jamoat arboblari ishtirok etadi.",
            ],
            projects: "Loyihalar",
            edu: "Ta'lim",
            blog: "Blog",
            contact: "Aloqa",
            about2: "Kengash ishtirokchilari",
            home: "Bosh sahifa",
            news: "Yangiliklar",
          },
          home: {
            title:
              "OTFIV huzuridagi Sun’iy intellekt bo‘yicha maslahat kengashi",
            title2:
              "O‘zbekiston turkiy dunyoning IT-mutaxassislarini birlashtirdi",
            info: "Raqamlashtirish boʻyicha mutaxassislar forumi “aqlli shaharlar” sohasida bilim va tajriba almashish uchun muhim platforma boʻlib xizmat qilishi hamda Turkiy davlatlar tashkiloti davlatlarining tegishli davlat organlariga tavsiyalar berishi kerak.",
            more: "Batafsil",
            mission: "Kengash haqida",
            mission_title:
              "Maslahat kengashi mamlakatimizda qabul qilingan asosiy hujjatlar va dasturlar asosida yaratilgan poydevorga tayangan holda keyinchalik O‘zbekiston iqtisodiyotida eksperimentlardan haqiqiy jiddiy tatbiqlarga o‘tishni ta’minlaydigan, shu orqali sun’iy intellekt taqdim etayotgan vositalar va imkoniyatlar tufayli har bir fuqaroning farovonligini oshirishga xizmat qiladigan ilmiy tadqiqotlar, amaliy startaplar va boshqa tashabbuslar uchun turli ilg‘or g‘oyalarni taklif eta oladigan, muhim mutaxassislar hamjamiyatini (professional komyunitini) shakllantirish uchun shart-sharoitlar yaratish maqsadida tuzilgan.",
            work_title: "FAOLIYAT YO'NALISHLARI",
            work1: "GOVERNMENT AI READINESS INDEX",
            work2: "Sun'iy intellekt etikasi",
            work3: "Ta'lim",
            work4: "TA'LIMDA SI",
            work1_info:
              "Oxford Insights xalqaro tadqiqot markazi tomonidan tuzilgan hukumatning sunʼiy intellektga tayyorligi indeksida Oʻzbekiston darajasini yaxshilashga hissa qoʻshish.",
            work2_info:
              "Ta'lim jarayonlarida SIdan foydalanishning etika tamoyillari, me'yorlari va standartlarini shakllantirish va muhokama qilish. Taʼlimda SIdan foydalanishda maxfiylik, maʼlumotlar xavfsizligi va javobgarlik masalalarini tadqiq qilish. Ta'lim muassasalarida SIni joriy etishning etika masalalari bo'yicha tavsiyalar va ko'rsatmalar ishlab chiqish.",
            work3_info:
              "Oʻrta va yuqori sinflar, oʻrta maxsus va oliy taʼlim muassasalari oʻqituvchilari va talabalari uchun taʼlim dasturlarini, shuningdek, iqtisodiyotning turli tarmoqlarida barcha darajadagi rahbar va mutaxassislarning malakasini oshirish va kasbiy qayta tayyorlash kurslarini yaratish va amalga oshirishga koʻmaklashish. SI sohasida stajirovkalarni tashkil etishda yordam berish. O'qituvchilar va ma'muriy xodimlar o'rtasida SI sohasida habardorlik va bilimlarni oshirishga bag'ishlangan treninglar, seminarlar va tadbirlarni tashkil etish.",
            work4_info:
              "Ta'lim jarayonlarini avtomatlashtirish va optimallashtirish, ta’lim olishni personallashtirish va innovatsion ta'lim vositalarini yaratish uchun sun'iy intellekt imkoniyatlarini tadqiq qilish. Ta’lim muassasalarida SI texnologiyalarini joriy etish bo‘yicha amaliy tavsiyalar va ko‘rsatmalar ishlab chiqish.",
            download: "Nizom matnini yuklab olish",
            blog: "Blog",
            blog1:
              "Umumta’lim maktablari o‘qituvchilari uchun bepul malaka oshirish kursi yo‘lga qo‘yildi",
            blog2:
              "Toshkentdagi TEAM universitetida 6th Global Entrepreneurship Week GEW-2022 (Global Entrepreneurship Week) boshlandi.",
            blog3: `"Sun'iy intellekt" tushunchasi haqida.`,
            partners: "Ishtirokchilar",
            organizations: "Tashkilotlar",
            universities: "Universitetlar va ilmiy-tadqiqot institutlari",
            startups: "Startaplar va venchur fondlari",
            ministers_view: "VAZIR FIKRI",
            about_info:
              "Sun'iy intellekt ta'lim va ilm-fan sohalarini qayta shakllantirishda muhim rol o'ynaydi, samarali o'qitish va ilmiy kashfiyotlarni tezlashtirish uchun noyob vositalarni taqdim etib, kelajakdagi taraqqiyot uchun imkoniyatlar yaratadi.",
            about_info2:
              "Ishni oddiy va jo‘n ko‘ringan vazifalardan boshlaganimizga qaramay, oldimizda mashaqqatli vazifa turibdi. Bu mashaqqatni yengib o‘tish uchun esa, kelgusi 50 yil uchun o‘z qarashlarimiz va ustuvor yo‘nalishlarimizni belgilab olishimiz zarur.",
            about_name: "Kongratbay Sharipov",
            about_work:
              "O‘zbekiston Respublikasi Oliy ta’lim, fan va innovatsiyalar vaziri",
            email: "Yangiliklarga obuna bo'ling",
            email_info:
              "Elektron pochta manzilingizni kiritib, yangiliklar va maslahatlarni to'g'ridan-to'g'ri oling",
            email_name: "Elektron pochta",
            email_button: "Obuna boʻling",
            email_check: "Yangiliklarni olishga rozilik berish",
            footer:
              "Portalda e’lon qilingan materiallardan nusxa ko‘chirish, tarqatish va ulardan foydalanishning boshqa shakllari faqat tahririyatning yozma roziligi bilan amalga oshirilishi mumkin.",
            socials: "Ijtimoiy tarmoqlarimiz",
            telegram: "Telegram",
            instagram: "Instagram",
            facebook: "Facebook",
            links: "Foydali havolalar",
            made: "© Ishlab chiqaruvchi: Raqamli taʼlim texnologiyalarini rivojlantirish markazi",
            news1:
              "Umumta’lim maktablari o‘qituvchilari uchun bepul o‘quv kursi yo‘lga qo‘yildi",
            news1_info:
              "Oliy ta’lim, fan va innovatsiyalar vazirligi, Maktabgacha va maktab ta’limi vazirligi hamda Toshkent shahridagi Amity universiteti hamkorligida Toshkent shahridagi umumta’lim maktablarining informatika fani o‘qituvchilari uchun Sun’iy intellekt asoslari va Buyumlar interneti (Internet of Things - IoT) bo‘yicha bepul o‘quv kursiga start berildi.",
            news2:
              "Sun'iy intellekt bo'yicha boshlang'ich bilim beruvchi platforma ishga tushiriladi",
            news2_info:
              "Oliy ta’lim, fan va innovatsiyalar vazirining AKT masalalari bo‘yicha maslahatchisi B.Raximov Toshkent Pediatriya Tibbiyot Instituti huzuridagi Ilg’or texnologiyalar va strategik tashabbuslar markazi faoliyati va markazning sun'iy intellekt bo'yicha amalga oshirayotgan loyihalari bilan yaqindan tanishdi.",
            news3:
              "Sun'iy intellekt va ta'lim jarayonini raqamlashtirish masalalarida hamkorlik bo'yicha uchrashuv o'tkazildi",
            news3_info:
              "Joriy yilning 16-fevral kuni Oliy ta’lim, fan va innovatsiyalar vazirining AKT masalalari bo‘yicha maslahatchisi B.Raximov va Toshkentdagi AMITY universiteti direktori B.Abdullayev o'rtasida sun'iy intellekt va ta'lim jarayonini raqamlashtirish masalalarida hamkorlik bo'yicha uchrashuv bo'lib o'tdi.",
          },
          about: {
            user1: {
              name: "Bobur Raximov",
              work: "O‘zbekiston Respublikasi Oliy ta’lim, fan va innovatsiyalar vazirining maslahatchisi, Maslahat kengashi raisi",
            },
            user2: {
              name: "Zafar Yuldashev",
              work: "Oliy taʼlim, fan va innovatsiyalar vazirligi AKTni joriy etish va raqamlashtirish boshqarmasi boshligʻi oʻrinbosari, rais oʻrinbosari",
            },
            user3: {
              name: "Baxtiyor Maxkamov",
              work: "Iqtisodiyot fanlari doktori, prof. Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti rektori",
            },
            user4: {
              name: "Andrey Neznamov",
              work: "Rossiyada sun'iy intellekt etika kodeksini joriy etish bo'yicha komissiya rahbari. Boshqaruvchi direktor - Sberbankning sun'iy intellektni tartibga solish markazi rahbari",
            },
            user5: {
              name: "Igor Vixrov",
              work: `Toshkent pediatriya tibbiyot instituti Innovatsiya markazining "E-Health" boʻlimi boshligʻi`,
            },
            user6: {
              name: "Vladimir Opredelenov",
              work: "CDO, San'at va madaniy meros bo'yicha texnik ekspert, .ART domenlari, Rossiya",
            },
            user7: {
              name: "Farhod Xoliqov",
              work: "“O‘zbektelekom” AK “Sun’iy intellekt” departamenti boshlig‘i, maslahatchi-konsultant",
            },
            user8: {
              name: "Shahzod Umirzoqov",
              work: "TASS VISION asoschisi va bosh direktori",
            },
            user9: {
              name: "Doktor Danish Ather",
              work: "Tashkent shahridagi Amity universiteti dotsenti, IEEE katta a'zosi, Hindiston",
            },
            user10: {
              name: "Azizjon Azimi",
              work: "Tojikiston sunʼiy intellekt milliy kengashi raisi, “zypl.ai” MChJ asoschisi",
            },
            user11: {
              name: "Sherzod Abdullaev",
              work: "Oliy ta’lim, fan va innovatsiyalar vazirligi bosh mutaxassisi, kengash kotibi",
            },
            user12: {
              name: "Abdullayev Alisher",
              work: "Oliy ta'lim, fan va innovatsiyalar vazirligi huzuridagi Raqamli ta'lim texnologiyalarini rivojlantirish markazi direktori",
            },
            user13: {
              name: "Nilufar A'zamova",
              work: "Raqamli texnologiyalar va sun'iy intellektni rivojlantirish ilmiy-tadqiqot instituti direktorining ilm-fan bo‘yicha o‘rinbosari",
            },
            work_group: "Ishchi guruhlar",
            work_info: `Ishchi guruhlar Kodeksning ayrim qoidalari va vazifalarini amalga oshirish uchun Komissiya a'zolarining umumiy qarori va yoki AI etikasi bo'yicha vakillar yig'ilishining qarori bilan tuziladi. Ishchi guruhlar tarkibi tadbirkorlik, fan, davlat hokimiyati organlari va boshqa manfaatdor shaxslar (kuzatuvchilar) vakillaridan tuzilishi mumkin.`,
            work1: {
              title: "Sun'iy intellekt etikasi ishchi guruhi",
              info: "Mamlakatda shakllangan madaniyat va qadriyatlarni hisobga olgan holda sun'iy intellektning etika kodeksini ishlab chiqish",
              group: "Ishchi guruh tarkibi:",
              label: "Rahbar",
              team: "Vladimir Opredelenov, Ammar Yunas, Igor Vixrov, Shaxzod Umirzakov, Zafar Yuldashev, Andrey Neznamov.",
              name: "Bobur Raximov",
            },
            work2: {
              title:
                "Sun'iy intellekt sohasida ma'rifiy va ta'lim loyihalarini rivojlantirish bo'yicha ishchi guruh",
              info: "O‘zbekistonda sun’iy intellektni o‘qitish jarayoni samaradorligini oshirishga hissa qo‘shish",
              group: "Ishchi guruh tarkibi:",
              label: "Rahbar",
              team: "Sherzod Abdullaev, Nodirbek Abulov, Yusuf Avazov, Igor Vixrov, Ulug'bek Berdanov, Vladimir Oprelenov, Axmed Seffax",
              name: "Doktor Danish Ather",
            },
            work3: {
              title:
                "Turizm, madaniyat va kreativ industriyalar bo‘yicha ishchi guruh",
              info: "Raqamli texnologiyalar va sun'iy intellekt texnologiyalaridan foydalangan holda turizm va madaniyat uchun yechimlarni taklif etish",
              group: "Ishchi guruh tarkibi:",
              label: "Rahbar",
              name: "Bobur Raximov",
              team: "Anna Ubaydullaeva, Jaxongir Mirmo'minov, Vladimir Operedinov, Ammar Yunas",
            },
            work4: {
              title: "Tibbiyotda sun'iy intellekt bo'yicha ishchi guruhi",
              info: "Sun'iy intellekt texnologiyalaridan foydalangan holda tibbiyot va sog'liqni saqlash sohalari uchun echimlarni taklif eting",
              group: "Ishchi guruh tarkibi:",
              label: "Rahbar",
              name: "Igor Vixrov",
              team: "Otabek Xujaev, Ammar Yunas",
            },
            documents: "Hujjatlar",
            document1: {
              name: "“Raqamli O‘zbekiston – 2030” strategiyasini tasdiqlash va uni samarali amalga oshirish chora-tadbirlari to‘g‘risida",
              info: "O‘zbekiston Respublikasi Prezidentining 2020-yil 05-oktabrdagi PF-6079-son qarori",
            },
            document2: {
              name: "2022-2026-yillarda O‘zbekiston Respublikasini innovatsion rivojlantirish strategiyasini amalga oshirish bo‘yicha tashkiliy chora-tadbirlar to‘g‘risida",
              info: "O‘zbekiston Respublikasi Prezidentining 2022-yil 6-iyuldagi PQ-307-son qarori.",
            },
            document3: {
              name: "Sun'iy intellekt texnologiyalarini jadal joriy etish uchun shart-sharoitlar yaratish chora-tadbirlari to'g'risida",
              info: "O‘zbekiston Respublikasi Prezidentining 2021-yil 17-fevraldagi PQ-4996-son qarori",
            },
            document4: {
              name: "Oliy ta’lim, fan va innovatsiyalar vazirligi huzurida sun’iy intellekt texnologiyalari bo‘yicha Maslahat kengashi nizomi",
              info: "",
            },
            document5: {
              name: "Sun’iy intellekt texnologiyalarini 2030-yilga qadar rivojlantirish strategiyasini tasdiqlash to‘g‘risida",
              info: "O‘zbekiston Respublikasi Prezidentining qarori, 14.10.2024 yildagi PQ-358-son",
            },
          },
          news: {
            title:
              "Umumta’lim maktablari o‘qituvchilari uchun bepul o‘quv kursi yo‘lga qo‘yildi",
            p1: "Oliy ta’lim, fan va innovatsiyalar vazirligi, Maktabgacha va maktab ta’limi vazirligi hamda Toshkent shahridagi Amity universiteti hamkorligida Toshkent shahridagi umumta’lim maktablarining informatika fani o‘qituvchilari uchun Sun’iy intellekt asoslari va Buyumlar interneti (Internet of Things - IoT) bo‘yicha bepul o‘quv kursiga start berildi.",
            p2: "Ishtirok etish istagini bildirgan nomzodlar orasida onlayn so‘rovnoma o‘tkazilib, 24 nafar informatika o‘qituvchisi saralab olindi. Ular oʻquv kursidan olgan o‘z tajribalari bilan keyingi bosqichda qolgan informatika fani oʻqituvchilari bilan boʻlishadilar. Mazkur kurs davomiyligi 3 oy boʻlib, Python dasturlash tili, Sun’iy intellekt asoslari va Buyumlar interneti (IoT) modullarini o’z ichiga olgan. ",
            p3: "Kurs asosan amaliy mashgʻulotlar va qurilmalarni boshqarishga yoʻnaltirilgan dasturlarni yaratishdan iborat boʻlib, oʻqituvchilarga xalqaro maktablardagi oʻqitish uslubiyotini ulashishga qaratilgan. Mashg‘ulotlar Toshkent shahridagi Amiti universitetining malakali xorijiy professorlari tomonidan olib boriladi.",
          },
          news2: {
            title:
              "Sun'iy intellekt bo'yicha boshlang'ich bilim beruvchi platforma ishga tushiriladi",
            p1: "Oliy ta’lim, fan va innovatsiyalar vazirining AKT masalalari bo‘yicha maslahatchisi B.Raximov Toshkent Pediatriya Tibbiyot Instituti huzuridagi Ilg’or texnologiyalar va strategik tashabbuslar markazi faoliyati va markazning sun'iy intellekt bo'yicha amalga oshirayotgan loyihalari bilan yaqindan tanishdi.",
            p2: "Xususan, markaz tomonidan Toshkent pediatriya tibbiyot instituti faoliyatini raqamlashtirish doirasida ishlab chiqilgan tizimlar, Toshkent shahrida institut talaba yoshlari uchun yaratilgan wi-fi hududlar va ularning monitoring tizimi, sog'liqni saqlash sohasiga sun'iy intellekt texnologiyalarini joriy qilishga qaratilgan loyihalar bilan tanishildi.",
            p3: `Shu bilan birga, 2022-yilda o'tkazilgan UrbanTech xakatonida qatnashgan "Homila AI" loyihasi taqdimoti o'tkazilib, loyihani takomillashtirish hamda ommalashtirish bo'yicha tavsiyalar berildi.`,
            p4: "Tashrif davomida markaz va vazirlik huzuridagi sun'iy intellekt bo'yicha maslahat kengashi o'rtasida hamkorlikni kuchaytirish, xususan sog'liqni saqlash sohasiga sun'iy intellekt texnologiyalarini keng joriy etish, soha xodimlariga sun'iy intellekt bo'yicha boshlang'ich bilim beruvchi  platformani hamkorlikda ishga tushirish yuzasidan kelishib olindi.",
          },
          news3: {
            title:
              "Sun'iy intellekt va ta'lim jarayonini raqamlashtirish masalalarida hamkorlik bo'yicha uchrashuv o'tkazildi",
            p1: "Joriy yilning 16-fevral kuni Oliy ta’lim, fan va innovatsiyalar vazirining AKT masalalari bo‘yicha maslahatchisi B.Raximov va Toshkentdagi AMITY universiteti direktori B.Abdullayev o'rtasida sun'iy intellekt va ta'lim jarayonini raqamlashtirish masalalarida hamkorlik bo'yicha uchrashuv bo'lib o'tdi.",
            p2: "Unda Toshkent shahridagi 24 nafar informatika o‘qituvchilari uchun Sun’iy intellekt asoslari va Buyumlar Interneti bo‘yicha bepul kursni tashkil etish masalasi muhokama qilindi.",
            p3: "Shuningdek AMITY universitetida IT-ta’limni tashkil etish va ta’lim jarayonini raqamlashtirish bo‘yicha universitetda olib borilayotgan ishlar, xususan, universitetning LMS tizimi, imtixonlarni masofadan tashkil etish, HEMIS tizimi imkoniyatlarini universitetda yanada kengroq foydalanish imkoniyatlari muhokama qilindi.",
          },
          news4: {
            title:
              "Innovatsion rivojlanish vazirligi huzuridagi Sun'iy intellekt bo'yicha maslahat kengashining ilk yig'ilishi o'z ishini boshladi",
            p1: "2022 yil 18 oktyabr` kuni «InnoWeek.uz-2022» xalqaro innovatsion g'oyalar haftaligi doirasida O'zbekiston Respublikasi Innovatsion rivojlanish vazirligi huzuridagi Sun'iy intellekt bo'yicha maslahat Kengashining birinchi tarkibini shakllantirish bo'yicha rasmiy marosim va uning yig'ilishi bo'lib o'tdi. Tadbirning birinchi kuni sun'iy intellekt texnologiyalarini rivojlantirishning ayrim yo'nalishlari bo'yicha ma'ruzalar tinglandi, etakchi soha mutaxassislari bilan tanishtirildi va Kengash tarkibiga a'zo vakillar qabul qilindi.",
            p2: "Yig'ilishni Kengash faxriy raisi – Innovatsion rivojlanish vaziri Ibroxim Abduraxmonov ochib berdi. Tadbirda ishtirok etish uchun Birlashgan Arab Amirliklari, eron, Xitoy va Hindistondan xalqaro hamkorlar, shuningdek, AQSh, Evropa Ittifoqi mamlakatlari, Rossiya va Tojikistondan ekspertlar taklif etilgan. Birinchi ish kuni yakunida Maslahat kengashi a'zolari unga a'zo bo'lish to'g'risidagi hujjatlarni imzoladilar.",
            p3: "Majlisning ikkinchi kuni, ya'ni 19 oktyabrda O'zbekiston Respublikasida sun'iy intellektni rivojlantirish bo'yicha 2022–2024 yillarga mo'ljallangan aniq vazifalar, tashabbuslar hamda ilmiy-amaliy, innovatsion va ta'limga oid loyihalar bo'yicha Kengashning dasturi ko'rib chiqiladi. Kengash tarkibi va ish dasturi O'zbekiston Respublikasi Innovatsion rivojlanish vazirligi veb-saytida e'lon qilinadi.",
            p4: "Innovatsion rivojlanish vazirligi huzurida sun'iy intellekt bo'yicha maslahat kengashi joriy yilning avgust oyida tashkil etilgan bo'lib, kengash tuzilishidan asosiy maqsad sun'iy intellekt bo'yicha ekspertlar hamjamiyatini shakllantirish va ushbu soha haqida jamoatchilik tasavvurini rivojlantirish uchun keng sharoitlar yaratishdir. Kengashning asosiy vazifalariga O'zbekiston Respublikasida sun'iy intellekt bilan bog'liq barcha faoliyat yo'nalishlarini qo'llab-quvvatlash, individual loyihalar ishlab chiqish, istiqbolli tashabbuslarni yo'lga qo'yish hamda sun'iy intellektdan ongli va inson qadriyatlariga mos tarzda foydalanish kiradi.",
          },
          news5: {
            title:
              "Sun'iy intellekt bo'yicha maslahat kengashining faoliyat yo'nalishlari belgilandi",
            p1: "Innovatsion rivojlanish vazirligi yig'ilishining ikkinchi kunida «InnoWeek-2022» doirasida Kengashning 2022–2024-yillarga mo'ljallangan ish dasturi loyihasi ko'rib chiqildi.",
            p2: `Kengashning bir qator a'zolari ma'ruzalari bilan chiqib, taklif-mulohazalarini bildirishdi. Natijada Kengash tomonidan asosiy faoliyat yo'nalishlari belgilab olindi va ma'qullandi. Mazkur yo'nalishlar bo'yicha 8 ta ishchi guruhi tasdiqlandi. Aniq loyihalarning dastlabki ro'yxati tuzilib, «Yo'l xaritalari» ishlab chiqish va keyingi yig'ilishda tasdiqlash to'g'risida qaror qabul qilindi.`,
            p3: `Sun'iy intellekt bo'yicha maslahat kengashi raisi Bobur Raximov shunday ta'kidlaydi: «Sun'iy intellekt bo'yicha Kengashning ikki kunlik faoliyati natijasida xalqaro tendentsiyalar, ekspert hisobotlari hamda Kengashning 2022–2024-yillarga mo'ljallangan rejasi va loyihalarini qizg'in muhokama qilish asosida biz shunday xulosaga keldikki, sun'iy intellekt texnologiyalarini sinovdan o'tkazish va joriy etishning aniq natijalari davlat boshqaruvi va bank xizmatlari, huquq, tibbiyot va, albatta, sanoat va xavfsizlik, turizm va madaniyat sohalarida yaqqol namoyon bo'lishi  bilan bir qatorda, ijodkorlik bilan bog'liq  sohalarni ham rivojlantirishga hissa qo'shishi kerak.  Ijodkorlik hamda raqamli texnologiyalar birlashishi, ular kesishgan nuqta  innovatsion echimlar uchun ulkan maydon bo'dib xizmat qiladi. Bu kelgusi yillarda mamlakatimizda  sanoat rivojiga va ijodkorlik  iqtisodiyoti shakllanishiga katta hissa qo'shadi».`,
            p4: "Kengash tarkibiga 50 kishi, jumladan, 7 nafar xalqaro ekspert (Hindiston, eron, Xitoy, BAA, Rossiya, Janubiy Koreya), O'zbekiston sun'iy intellekt al`yansi, shuningdek, sun'iy intellekt bo'yicha istiqbolli startaplar, jamoat arboblari va ommaviy axborot vositalari vakillari kiritilgan.",
          },
          news6: {
            title:
              "Innovatsion rivojlanish vazirligi huzuridagi Sun'iy intellekt bo'yicha maslahat kengashi yig'ilishi doirasida Oliy ta'lim muassasalari bilan hamkorlik o'rnatildi.",
            p1: `Sun'iy intellekt bo'yicha maslahat kengashining birinchi yig'ilishida Kengash raisi B.Raximov va AMITI universiteti direktor o'rinbosari o'rtasida hamkorlik memorandumi imzolandi.`,
            p2: `Hujjatga ko'ra nazariy va amaliy bilimlarni uyg'unlashtirish, tomonlar o'rtasida o'zaro hamkorlikni yo'lga qo'yish orqali IT sohasi uchun zarur bo'lgan etuk kadrlarni tayyorlash hamda umumiy o'rta ta'lim maktablarida informatika yo'nalishi bo'yicha 25 nafar o'qituvchi-kadrlar uchun qo'shma malaka oshirish kurslarini tashkil etishga kelishildi.`,
            p3: `Hamkorlik doirasida, avvaliga, bir oy mobaynida umumiy o'rta ta'lim maktablarida faoliyat yurituvchi fidoyi kardlarni tanlab olish rejalashtirilgan. Shuningdek, olti oylik maxsus kurs davomida ularga sun'iy intellekt sohasida malaka oshirish imkoniyati yaratiladi.`,
          },
          test: "Sayt test rejimida ishlamoqda (mumkin xatolar uchun uzr so'raymiz)",
          footer: {
            about: {
              work: "Kengash ishtirokchilari",
              group: "Ishchi guruhlar",
              partner: "Ishtirokchilar",
              documents: "Hujjatlar",
            },
            project: {
              catalog: "Loyihalar katalogi",
              list: "Tadbirlar ro'yxati",
            },
            blog: {
              news: "Yangiliklar",
              state: "Maqolalar",
              anons: "Anonslar",
            },
          },
          newsTitle: "yangilik",
          feedback: {
            title: "Murojaat yuborish",
            name: "Ism sharifi",
            phone: "Telefon raqami",
            email: "Elektron pochata",
            send: "Yuborish",
            text: "Murojaat matni",
            info: `O'zingizni qiziqtirgan savolingizni yozing, tez orada javob beramiz`,
          },
          development: {
            title: `Kengash faoliyatining asosiy yo‘nalishlari:`,
            info: `Loyihalar ro'yxati:`,
            list: [
              "SI ni joriy qilish bilan bog'liq axloqiy va ijtimoiy masalalar;",
              "o‘rta va yuqori sinflar, o‘rta maxsus va oliy ta’lim muassasalari o‘qituvchilari va talabalari uchun ta’lim dasturlarini, shuningdek, iqtisodiyotning turli tarmoqlarida barcha darajadagi rahbar va mutaxassislarni malakasini oshirish va qayta tayyorlash kurslarini yaratish va joriy qilishga ko‘maklashish;",
              "SI sohasida innovatsion va ilmiy-amaliy loyihalarni rivojlantirishga hissa qo‘shish;",
              "Oxford Insights xalqaro tadqiqot markazi tomonidan shakllantiriladigan Hukumat SIga tayyorlik indeksida O‘zbekiston darajasini yaxshilashga hissa qo‘shish;",
              "nashriyot dasturi va ilmiy-ommabop ta'lim kanallarini shakllantirish;",
              "SI texnologiyalarini ommalashtirish va jamoatchilik bilan muloqotni ta'minlash bo'yicha tadbirlarni tashkil etish va o'tkazish;",
              "O‘zbekiston Respublikasida SI mavzusi bo‘yicha turli dastur va tashabbuslarda ishtirok etish, zarur qonunchilik va qonunosti hujjatlarini tayyorlashga ko‘maklashish;",
              "SIdan foydalangan holda tizimlar va xizmatlarning ishlashi uchun asos sifatida O‘zbekiston Respublikasi iqtisodiyotining barcha sohalarida yuqori sifatli ma’lumotlarni yaratish, to‘plash va ochiqligini ta’minlashga ko‘maklashish;",
              "Xalqaro hamkorlikni rivojlantirish.",
            ],
          },
          education: {
            title: `Ta’lim loyihalari katalogi shakllantirilmoqda va yaqin orada bu yerda e’lon qilinadi.`,
            info: `Loyihalar roʻyxati:`,
            name1: `Umumta’lim maktablarining informatika fani o‘qituvchilari uchun AI asoslari bo‘yicha o‘quv kursini ishga tushirish`,
          },
        },
      },
      EN: {
        translation: {
          all: "All",
          ministr:
            "MINISTRY OF HIGHER EDUCATION, SCIENCE AND INNOVATIONS OF THE REPUBLIC OF UZBEKISTAN",
          nav: {
            about: "About",
            about_description: [
              "The AI Advisory Council was established under the auspices of the Ministry of Higher Education, Science, and Innovation, with the <strong>aim</strong> of cultivating a significant community of professionals. Relying on the foundations set by the key documents and programs implemented in the country, this community is expected to propose various innovative ideas for scientific research, practical startups, and foster other initiatives. These efforts will subsequently facilitate a transition from experiments to serious practical implementations in Uzbekistan's economy, thus improving every resident's well-being through AI's tools and opportunities.",
              "The Council's <strong>responsibilities</strong> include developing individual projects, formulating prospective initiatives, and identifying opportunities to amalgamate them into a synergistic process where \"1+1\" yields a result far greater than two. Furthermore, it is responsible for establishing international connections, aiming to integrate into the global community that advocates for AI's conscious and ethical utilization.",
              "A vital <strong>element</strong> of the Council's effective operation is the comprehensive discussion of best practices and experiences and considering each issue from different angles for a complete understanding. It's extremely important that the discussion involves individuals with diverse perspectives on economic development, life experiences, education, and skills.",
              "The Council's operations involve representatives and experts from international organizations and universities from 10 countries, major domestic organizations, founders, and leaders of advanced startup projects, private sector representatives, academic and expert communities, media, and notable public figures.",
            ],
            projects: "Projects",
            edu: "Education",
            blog: "Blog",
            contact: "Contact",
            about2: "Council Members",
            home: "Home",
            news: "News",
          },
          home: {
            title:
              "Advisory Council on Artificial Intelligence under the MHESI",
            title2:
              "Uzbekistan brought together IT specialists from the Turkic world",
            info: "The Forum of Digitalization Specialists should serve as an important platform for the exchange of knowledge and experience in the field of 'smart cities' and provide recommendations to the relevant government agencies of the ATC countries",
            more: "More",
            mission: "About",
            mission_title:
              "The Advisory Council was formed with the aim of creating opportunities for the formation of a significant community of specialists (professional community) who will be able, based on the foundation laid by the main documents and programs adopted in the country, to offer various breakthrough ideas in scientific research, practical startups, and develop other initiatives that will subsequently ensure the transition from experiments to real serious implementations in the economy of Uzbekistan, thereby increasing the well-being of every resident thanks to the tools and opportunities that AI provides.",
            work_title: "AREAS OF WORK",
            work1: "GOVERNMENT AI READINESS INDEX",
            work2: "The ethics of artificial intelligence",
            work3: "Education",
            work4: "AI IN EDUCATION",
            work1_info:
              "Contributing to the improvement of Uzbekistan's level in the government's readiness index for And, formed by Oxford Insights and the International Research Center.",
            work2_info:
              "Discussion and formulation of ethical principles, norms, and standards for the use of AI in educational processes. Research on issues of confidentiality, data security, and responsibility when using AI in education. Development of recommendations and guidelines on ethical issues of AI implementation in educational institutions.",
            work3_info:
              "Creation and promotion of educational programs for teachers and students of secondary and senior classes, institutions of secondary specialized and higher education, as well as advanced training courses and professional retraining of managers and specialists of all levels in various spheres of the economy. Assistance in organizing internships in the field of AI. Organization of trainings, seminars, and events dedicated to raising awareness and knowledge in the field and among teachers and administrative staff.",
            work4_info:
              "Research of AI potential for automation and optimization of educational processes, personalization of training and creation of innovative educational tools. Development of practical recommendations and guidelines for the introduction of AI technologies in educational institutions.",
            download: "Download PDF",
            blog: "Blog",
            blog1:
              "A free training course for teachers of secondary schools has been launched",
            blog2:
              "The 6th Global Entrepreneurship Week GEW-2022 (Global Entrepreneurship Week) has been launched at TEAM University in Tashkent.",
            blog3: `On the concept of "artificial intelligence".`,
            partners: "Partners",
            organizations: "Organizations",
            universities: "Universities and research institutes",
            startups: "Startups and venture funds",
            ministers_view: "THE MINISTER'S VIEW",
            about_info:
              "Artificial intelligence plays a key role in transforming education and science, providing unique tools for effective learning and accelerating scientific discoveries, creating opportunities for future progress.",
            about_info2:
              "Despite the fact that we started with seemingly simple tasks, we have a difficult task ahead of us. To overcome this challenge, we need to define our vision and priorities for the next 50 years.",
            about_name: "Kongratbay Sharipov",
            about_work:
              "Minister of Higher Education, Science and Innovation of the Republic of Uzbekistan",
            email: "Subscribe to news",
            email_info:
              "Receive news and tips directly by entering your email address",
            email_name: "Электронная почта",
            email_button: "Subscribe",
            email_check: "Accept, receiving email",
            footer:
              "Copying, distribution and other forms of use of materials published on the portal can be carried out only with the written consent of the editors.",
            socials: "Social networks",
            telegram: "Telegram",
            instagram: "Instagram",
            facebook: "Facebook",
            links: "Usefull links",
            made: "© Producer: Center for the Development of Digital Educational Technologies",

            news1: "School Teachers Technical Skill Development Programme",
            news1_info:
              "Basics of Artificial Intelligence and Internet of Things (IoT) for IT teachers of public schools in Tashkent in cooperation with the Ministry of Higher Education, Science and Innovation, the Ministry of Preschool and School Education and Amity University in Tashkent a free training course was started.",
            news2:
              "An artificial intelligence education platform will be launched",
            news2_info:
              "B. Rakhimov, ICT adviser to the Minister of Higher Education, Science and Innovation, got acquainted with the activities of the Center for Advanced Technologies and Strategic Initiatives under the Tashkent Pediatric Medical Institute and the projects implemented by the center on artificial intelligence.",
            news3:
              "A meeting was held on cooperation in the issues of artificial intelligence and digitization of the educational process",
            news3_info:
              "On February 16 of this year, B. Rakhimov, ICT advisor to the Minister of Higher Education, Science and Innovation, and B. Abdullayev, director of AMITY University in Tashkent, held a meeting on cooperation in the field of artificial intelligence and digitization of the educational process. the meeting took place.",
          },
          about: {
            user1: {
              name: "Bobur Raximov",
              work: "Advisor on ICT issues to the Minister of Higher Education, Science and Innovation of the Republic of Uzbekistan, Chairman of the Advisory Council",
            },
            user2: {
              name: "Zafar Yuldashev",
              work: "Deputy Head of the Department of ICT Implementation and Digitalization, Ministry of Higher Education, Science and Innovation, Deputy Chairman",
            },
            user3: {
              name: "Bakhtiyor Makhkamov",
              work: "Doctor of Economics, prof. Rector of the University of Tashkent University of Information Technologies named after Muhammad al-Khwarizm",
            },
            user4: {
              name: "Andrey Neznamov",
              work: "Head of the Commission for the Implementation of the Code of Ethics for Artificial Intelligence in Russia. Managing Director - Head of the AI Regulation Center, Sberbank",
            },
            user5: {
              name: "Igor Vikhrov",
              work: "Head of E-Health Department, Innovation center, Tashkent Pediatric Medical Institute",
            },
            user6: {
              name: "Vladimir Opredelenov",
              work: "CDO, Art and Cultural Heritage Technical Expert, .ART domains, Russia",
            },
            user7: {
              name: "Farkhod Kholikov",
              work: `Head of the Department "Artificial Intelligence", advisor-consultant of JSC "Uzbektelecom"`,
            },
            user8: {
              name: "Shakhzod Umirzakov",
              work: "Founder and CEO of TASS VISION",
            },
            user9: {
              name: "Danish Ather",
              work: "Associate Professor, Amity University Tashkent, IEEE Senior Member, India",
            },
            user10: {
              name: "Azizjon Azimi",
              work: "Chairman of the National Council of Tajikistan on Artificial Intelligence, founder of “zypl.ai” LLC",
            },
            user11: {
              name: "Sherzod Abdullaev",
              work: "Chief Specialist at the Ministry of Higher Education, Scientific and Innovation, secretary of the Council",
            },
            user12: {
              name: "Abdullaev Alisher",
              work: "Director of the Center for The Development of Digital Education Technologies under The Ministry of Higher Education, Science and Innovations of the Republic of Uzbekistan",
            },
            user13: {
              name: "Nilufar A'zamova",
              work: "Deputy Director of the Scientific Research Institute for the Development of Digital Technologies and Artificial Intelligence",
            },
            work_group: "Working groups",
            work_info:
              "Working groups are created by a common decision of the members of the Commission and   or a decision of the Meeting of Commissioners for AI Ethics to implement certain provisions and tasks of the Code. The composition of the working groups can be formed from representatives of business, science, public authorities and other interested parties (observers).",
            work1: {
              title: "AI Ethics Working Group",
              info: "Develop a code of ethics for artificial intelligence, taking into account the culture and values formed in the country",
              group: "Composition of the working group:",
              label: "Team leader",
              name: "Bobur Raximov",
              team: "Vladimir Opredelenov, Ammar Younas, Igor Vixrov, Shaxzod Umirzakov, Zafar Yuldashev, Andrey Neznamov.",
            },
            work2: {
              title:
                "Working group on the development of education and training projects in the field of AI",
              info: "To contribute to the improvement of the effectiveness of the artificial intelligence training process in Uzbekistan",
              group: "Composition of the working group:",
              label: "Team leader",
              name: "Doctor Danish Ather",
              team: "Sherzod Abdullaev, Nodirbek Abulov, Yusuf Avazov, Igor Vixrov, Ulugbek Berdanov, Vladimir Oprelenov, Axmed Seffax",
            },
            work3: {
              title:
                "Working Group on Tourism, Culture and Creative Industries",
              info: "Offer solutions for tourism and culture using digital technologies and artificial intelligence technologies",
              group: "Composition of the working group:",
              label: "Team leader",
              name: "Bobur Raximov",
              team: "Vladimir Opredelenov, Anna Ubaydullaeva, Jakhongir Mirmuminov, Ammar Younas",
            },
            work4: {
              title: "Working Group on Artificial Intelligence in Medicine",
              info: "Offer solutions for the field of medicine and healthcare using artificial intelligence technologies",
              group: "Composition of the working group:",
              label: "Team leader",
              name: "Igor Vikhrov",
              team: "Otabek Khuzhaev, Ammar Younas",
            },
            documents: "Documents",
            document1: {
              name: `On the approval of the "Digital Uzbekistan - 2030" strategy and measures for its effective implementation`,
              info: "Resolution No. PF-6079 of the President of the Republic of Uzbekistan dated October 5, 2020",
            },
            document2: {
              name: "On organizational measures to implement the innovative development strategy of the Republic of Uzbekistan in 2022-2026",
              info: "Decision PQ-307 of the President of the Republic of Uzbekistan dated July 6, 2022.",
            },
            document3: {
              name: "On measures to create conditions for rapid introduction of artificial intelligence technologies",
              info: "Decision PQ-4996 of the President of the Republic of Uzbekistan dated February 17, 2021",
            },
            document4: {
              name: "Regulation about the Advisory Council on Artificial Intelligence under the Ministry of Higher Education, Science and Innovation of the Republic of Uzbekistan",
              info: "",
            },
            document5: {
              name: "On the approval of the Strategy for the Development of Artificial Intelligence Technologies until 2030",
              info: "Resolution of the President of the Republic of Uzbekistan, от 14.10.2024 г. № RP-358",
            },
          },
          news: {
            title: "School Teachers Technical Skill Development Programme",
            p1: "A free training course on the basics of Artificial Intelligence and the Internet of Things (IoT) has been launched for teachers of informatics of public schools in Tashkent. The course is organized in collaboration of the Ministry of Higher Education, Science and Innovation, the Ministry of Preschool and School Education of the Republic of Uzbekistan and Amity University in Tashkent.",
            p2: "An online survey was conducted among the candidates who expressed their desire to participate, and 24 informatics teachers were selected. They will share their experiences from the training course with the rest of the computer science teachers at the next level. The duration of this course is 3 months and includes Python programming language, Basics of Artificial Intelligence and Internet of Things (IoT) modules.",
            p3: "The training is aimed at combining theoretical and practical knowledge, sharing the teaching methodology of international schools with Informatics teachers. The course is conducted by qualified international Faculty of Amity University in Tashkent.",
          },
          news2: {
            title:
              "It is expected to launch the platform for the provision of basic knowledge of artificial intelligence",
            p1: "Advisor to the Minister of Higher Education, Science and Innovation on ICT Bobur Rakhimov got acquainted with the activities of the Center for Advanced Technologies and Strategic Initiatives at the Tashkent Pediatric Medical Institute and with projects implemented by the Center for Artificial Intelligence.",
            p2: "Systems developed by the center under the digitalization of the Tashkent Pediatric Medical Institute, Wi-Fi zones created for students of the Institute and their monitoring systems, as well as projects aimed at introducing artificial intelligence technologies in the health sector.",
            p3: "The project “Homila AI” was also presented, which took part in the Hakaton Urbantech, in 2022, and at the end of the presentation, recommendations were given to improve and popularize the project.",
            p4: "During the visit, the issues of strengthening cooperation between the center and the advisory council of artificial intelligence under the Ministry, in particular, the wide implementation of artificial intelligence technologies in the healthcare sphere, an agreement on the joint launch of the platform for the provision of basic knowledge of artificial intelligence employees of the industry were discussed.",
          },
          news3: {
            title:
              "A meeting was held on cooperation in the field of artificial intelligence and digitalization of educational processes",
            p1: "On February 16 this year, a meeting was held between Advisor to the Minister of Higher Education, Science and Innovation on ICT B. Rakhimov and Director of AMITY University in Tashkent B. Abdullayev on cooperation in the field of artificial intelligence and digitalization of educational processes.",
            p2: "During the meeting, the issues of organizing a free course on the basics of artificial intelligence and the Internet of things for 24 computer science teachers in Tashkent were discussed.",
            p3: "Information was also presented about the work on the organization of IT education and digitalization of the educational process, in particular, the possibility of wider use of the University of LMS, and the organization of remote passing exams. It was proposed to expand the possibilities of using the Hemis system at the university.",
          },
          news4: {
            title:
              "The first meeting of the advisory council on artificial intelligence under the Ministry of Innovative Development was held",
            p1: "On October 18, 2022, as part of the International Week of Innovative Ideas, Innoweek.uz-2022, an official ceremony of forming the first composition of the advisory council for artificial intelligence under the Ministry of Innovative Development of the Republic of Uzbekistan and its programmatic meeting was held. The first day is dedicated to acquaintance and adoption of leading experts and industry specialists to the Council.",
            p2: "The meeting was opened by the Honorary Chairman of the Council - Minister of Innovation Development Ibro -Chief Abdurakhmonov. International partners from the United Arab Emirates, Iran, China and India, as well as experts from the USA, EU countries, Russia and Tajikistan are invited to participate. Council members received certificates confirming their participation in his work.",
            p3: "The result of the second day of the meeting should be the Council work program for 2022-2024, with a list of specific areas of work, initiatives, scientific, practical, innovative, educational and business development projects in the Republic of Uzbekistan. The composition of the Council and the work program will be published on the website of the Ministry of Innovative Development of the Republic of Uzbekistan.",
            p4: "The advice on artificial intelligence (AI) was established in August of this year under the Ministry of Innovative Development of Uzbekistan in order to create conditions for the formation of a community of experts and the development of public dialogue on this topic. The tasks of the Council include supporting areas of activity related to AI in the RUZ, the development of individual projects, the study of promising initiatives and the establishment of international contacts, to integrate into the world community that works on the conscious and ethical use of artificial intelligence. An integrated approach to ethics, the use of human potential, the flexibility of adaptation of technology and the development of the general IT infrastructure of the country is designed to influence the general economic and social development of the Republic of Uzbekistan, and, as a result, to increase the rating of Uzbekistan in the world.",
          },
          news5: {
            title:
              "Determined areas of the Council of Consulting Council for Artificial Intelligence",
            p1: "On the second day of the meeting of the advisory council on artificial intelligence under the Ministry of Innovation Development as part of the Innoweek-2022, a draft program of the Council for 2022-2024 was considered.",
            p2: `Several members of the Council made their proposals and made reports on this topic, a lively discussion took place. As a result, the main directions of the work were agreed by the Soviets that approved unanimously, 8 working groups in these areas were also approved. A preliminary list of specific projects has been adopted, a decision was made to develop "road maps" and approving them at the next meeting.`,
            p3: `"As a result of two days of the work of the AI, relying on international trends, expert reports and a living discussion of the activities and draft councils for 2022-2024, we came to the conclusion that one of the visible and tangible results of the testing and implementation of artificial intelligence technologies for a number with obvious tasks for state and banking services, law, medicine and, of course, industry and security, should be the scope of tourism and culture, but one of the main directions that were practically not talked about before, there will be a search for the maximum development of creative in Uzbekistan industries. We see a great potential in this area and a huge field for innovative solutions at the junction of creativity and digital technologies, which in the coming years should make a significant contribution to the development of the traditional industries and the sector of the creative economy in our country., ”said the chairman of the advisory council in artificial intelligence Bobur Rakhimov.`,
            p4: "The council included 50 people, including 7 international experts (India, Iran, China, the UAE, Russia, South Korea), the Alliance of the II of Uzbekistan, as well as promising startups using AI, public figures and media representatives.",
          },
          news6: {
            title:
              "Cooperation with higher educational institutions has been established as part of a meeting of the advisory council for artificial intelligence under the Ministry of Innovative Development.",
            p1: `At the first meeting of the advisory council on artificial intelligence, which took place on October 18 on the fields of Innoweek.uz-2022 signed a memorandum of cooperation between the chairman of the Council of B. Rakhimov and Deputy Director of the University of Ami.`,
            p2: `The goal of the memorandum is to unite theoretical and practical knowledge, training for an IT sector by establishing mutual cooperation between the parties. It is agreed to organize joint advanced training courses for 25 teachers in the field of computer science in general schools.`,
            p3: `As part of cooperation, it is planned to select the best personnel of workers in secondary schools for training for 6 months within the framework of a special course.`,
          },
          test: "The site is working in test mode (we apologize for possible errors)",
          footer: {
            about: {
              work: "Council members",
              group: "Working groups",
              partner: "Members",
              documents: "Documentation",
            },
            project: {
              catalog: "Project catalog",
              list: "List of events",
            },
            blog: {
              news: "News",
              state: "Articles",
              anons: "Event announcements",
            },
          },
          newsTitle: "news",
          feedback: {
            title: "Send a request",
            name: "Full name",
            phone: "Phone number",
            email: "Email",
            send: "Send",
            text: "Request text",
            info: `Write your question, we will answer soon`,
          },
          development: {
            title: `The main activities of the Council:`,
            info: `List of projects:`,
            list: [
              `Developing proposals aimed at resolving ethical and social challenges associated with the implementation of AI`,
              `Creating and facilitating the implementation of educational programs for middle and high school teachers and students, vocational and higher education institutions, as well as providing continuing education and professional retraining courses for managers and specialists at all levels across various economic sectors.`,
              "Supporting the development of innovative and applied science projects in the field of AI.",
              "Assisting in improving Uzbekistan's ranking in the Government AI Readiness Index, which is formulated by Oxford Insights and the International Research Center.",
              "Developing a publishing program and popular science educational channels.",
              "Organizing and conducting activities to popularize AI technologies and facilitating public dialogue.",
              "Participating in various AI-related programs and initiatives in the Republic of Uzbekistan, assisting in the preparation of necessary legislative and regulatory acts.",
              "Promoting the creation, collection, and openness of high-quality data in all sectors of Uzbekistan's economy, which serves as a basis for the operation of AI-based systems and services.",
              "Fostering international cooperation.",
            ],
          },
          education: {
            title: `A catalog of educational projects is being formed and will be announced here in the near future.`,
            info: `List of projects:`,
            name1: `Launch of a training course on the basics of AI for computer science teachers of secondary schools.`,
          },
        },
      },
      RU: {
        translation: {
          all: "Все",
          ministr:
            "Министерство высшего образования, науки и инноваций Республики Узбекистан",
          nav: {
            about: "О совете",
            about_description: [
              "Консультативный совет по ИИ образован при Министерстве высшего образования науки и инноваций, с <strong>целью</strong> создания условий для формирования значимого сообщества специалистов (профессионального комьюнити), которые смогут, основываясь на фундаменте, заложенном основными принятыми в стране документами и программами, предложить различные прорывные идеи научных исследований, практических стартапов и развить другие инициативы, которые впоследствии обеспечат переход от экспериментов к реальным серьезным внедрениям в экономику Узбекистана, тем самым повышая благосостояние каждого жителя благодаря инструментам и возможностям, которые дает ИИ.",
              "В <strong>задачи</strong> Совета входит развивать отдельные проекты, прорабатывать перспективные инициативы и находить возможности для их объединения таким образом, чтобы это стало синергетическим процессом, когда «1+1» становится равно не два, а значительно большему результату. А также – установление международных контактов, чтобы интегрироваться в мировое сообщество, которое работает над осознанным и этичным использованием ИИ.",
              "Основным <strong>инструментом</strong> эффективной работы Совета является всестороннее обсуждение лучших практик и опыта и рассмотрение каждой проблемы с разных сторон для полноценного ее осмысления. Поэтому крайне важно, чтобы в процессе обсуждения участвовали люди с разными взглядами на развитие экономики, жизненным опытом, образованием и компетенциями.",
              "В работе совета принимают участие представители и эксперты из международных организаций и зарубежных университетов 10 стран, представители крупных отечественных организаций, основатели и руководители передовых стартап-проектов, представители частного сектора, академических и экспертных кругов, СМИ, а также видные общественные деятели.",
            ],
            projects: "Проекты",
            edu: "Образование",
            blog: "Блог",
            contact: "Контакты",
            about2: "Участники совета",
            home: "Главная",
            news: "Новости",
          },
          home: {
            title:
              "Консультативный совет по искусственному интеллекту при МВОНИ",
            title2: "Узбекистан собрал IT-специалистов тюркского мира",
            info: "Форум специалистов в сфере цифровизации должен послужить важной платформой для обмена знаниями и опытом в области «умных городов» и предоставить рекомендации для соответствующих государственных учреждений стран ОТГ",
            more: "Подробнее",
            mission: "О совете",
            mission_title:
              "Консультативный совет образован с целью создания условий для формирования значимого сообщества специалистов (профессионального комьюнити), которые смогут, основываясь на фундаменте, заложенном основными принятыми в стране документами и программами, предложить различные прорывные идеи научных исследований, практических стартапов и развить другие инициативы, которые впоследствии обеспечат переход от экспериментов к реальным серьезным внедрениям в экономику Узбекистана, тем самым повышая благосостояние каждого жителя благодаря инструментам и возможностям, которые дает ИИ.",
            work_title: "ОСНОВНЫЕ НАПРАВЛЕНИЯ РАБОТЫ",
            work1: "Government AI Readiness Index",
            work2: "Этика ИИ",
            work3: "Образования",
            work4: "ИИ в образовании",
            work1_info:
              "Способствование повышению уровня Узбекистана в индексе готовности правительства к ИИ, формируемого Oxford Insights и международным научно-исследовательским центром.",
            work2_info:
              "Обсуждение и формулирование этических принципов, норм и стандартов для использования ИИ в образовательных процессах. Исследование вопросов конфиденциальности, безопасности данных и ответственности при использовании ИИ в образовании. Разработка рекомендаций и руководств по этическим вопросам внедрения ИИ в образовательные учреждения.",
            work3_info:
              "Создание и содействие внедрению образовательных программ для преподавателей и учащихся средних и старших классов, учреждений среднего специального и высшего образования, а также курсов повышения квалификации и профессиональной переподготовки руководителей и специалистов всех уровней в различных сферах экономики. Содействие в организации стажировок в области ИИ. Организация тренингов, семинаров и мероприятий, посвященных повышению осведомленности и знаний в области ИИ среди учителей и административного персонала.",
            work4_info:
              "Исследование потенциала ИИ для автоматизации и оптимизации образовательных процессов, персонализации обучения и создания инновационных образовательных инструментов. Разработка практических рекомендаций и руководств по внедрению технологий ИИ в образовательные учреждения.",
            download: "Скачать Положение PDF",
            blog: "Блог",
            blog1:
              "Запущен бесплатный учебный курс для учителей среднеобразовательных школ",
            blog2: "О понятии «искусственный интеллект».",
            blog3: "О понятии «искусственный интеллект».",
            partners: "Партнёры",
            organizations: "Организации",
            universities: "Университеты и НИИ",
            startups: "Стартапы и венчурные фонды",
            ministers_view: "ВЗГЛЯД МИНИСТРА",
            about_info:
              "«Искусственный интеллект играет ключевую роль в преобразовании образования и науки, предоставляя уникальные инструменты для эффективного обучения и ускорения научных открытий, создавая возможности для будущего прогресса.»",
            about_info2:
              "Несмотря на то, что мы начали с казалось бы, простых задач, перед нами стоит непростая задача. Чтобы преодолеть эту проблему, нам необходимо определить наше видение и приоритеты на следующие 50 лет.",
            about_name: "Конгратбай Шарипов",
            about_work:
              "Министр высшего образования, науки и инноваций Республики Узбекистан",
            email: "Подписаться на новости",
            email_info:
              "Получайте новости и советы напрямую, введя свой адрес электронной почты",
            email_name: "Электронная почта",
            email_button: "Подписаться",
            email_check: "Согласие на получение рассылки",
            footer:
              "Копирование, распространение и иные формы использования материалов, опубликованных на портале, могут осуществляться только с письменного согласия редакции.",
            socials: "Мы в социальных сетях",
            telegram: "Telegram",
            instagram: "Instagram",
            facebook: "Facebook",
            links: "Полезные ссылки",
            made: "© Разработчик: Центр развития цифровых образовательных технологий",
            news1:
              "Запущен бесплатный учебный курс для учителей среднеобразовательных школ",
            news1_info:
              "Основы искусственного интеллекта и интернета вещей (IoT) для учителей информационных технологий общеобразовательных школ г.Ташкента в сотрудничестве с Министерством высшего образования, науки и инноваций, Министерством дошкольного и школьного образования и Университетом Амити в Ташкенте стартовал бесплатный курс обучения .",
            news2:
              "Состоялась встреча по сотрудничеству в вопросах искусственного интеллекта и цифровизации образовательного процесса",
            news2_info:
              "Советник министра высшего образования, науки и инноваций по ИКТ Б.Рахимов ознакомился с деятельностью Центра передовых технологий и стратегических инициатив при Ташкентском педиатрическом медицинском институте и проектами, реализуемыми центром по искусственному интеллекту.",
            news3:
              "Состоялась встреча по сотрудничеству в вопросах искусственного интеллекта и цифровизации образовательного процесса",
            news3_info:
              "16 февраля т.г. советник министра высшего образования, науки и инноваций по ИКТ Б.Рахимов и директор Университета AMITY в Ташкенте Б.Абдуллаев провели встречу по вопросам сотрудничества в области искусственного интеллекта и цифровизации учебный процесс.состоялась встреча.",
          },
          about: {
            user1: {
              name: "Бoбур Рахимов",
              work: "Советник Министра высшего образования, науки и инноваций Республики Узбекистан, председатель Консультативного совета",
            },
            user2: {
              name: "Зафар Юлдашев",
              work: "Заместитель начальника управлении, Министерства высшего образования, науки и инноваций, заместитель председателья",
            },
            user3: {
              name: "Бахтиёр Махкамов",
              work: "Ректор университета  Ташкентского университета информационных технологий имени Мухаммада ал-Хоразми, доктор экономических наук, профессор",
            },
            user4: {
              name: "Андрей Незнамов",
              work: "Глава комиссии по внедрению Кодекса этики искусственного интеллекта России. Управляющий директор - начальник Центра регулирования AI, Сбербанк",
            },
            user5: {
              name: "Игор Вихров",
              work: "Руководитель отдела  E-Health Инновационного центра Ташкентского педиатрического медицинского института",
            },
            user6: {
              name: "Владимир Определенов",
              work: "CDO, Технический эксперт по искусству и культурному наследию, домены .ART, Россия",
            },
            user7: {
              name: "Фарход Холиков",
              work: `Начальник департамента «Искусственный интеллект», советник-консультант АК «Узбектелеком»`,
            },
            user8: {
              name: "Шахзод Умирзаков",
              work: "Основатель и главный директор компании  TASS VISION",
            },
            user9: {
              name: "Даниш Атер",
              work: "Доцент Университета Амити в Ташкенте, Старший член IEEE",
            },
            user10: {
              name: "Азизжон Азими",
              work: "Председатель совета Таджикистана по искусственному интеллекту, основатель ООО Zypl.ai",
            },
            user11: {
              name: "Шерзод Абдуллаев",
              work: "Главный специалист Министерства высшего образования, науки и инноваций, cекретарь совета",
            },
            user12: {
              name: "Абдуллаев Алишер",
              work: "Директор Центра развития цифровых образовательных технологий при Министерстве высшего образования, науки и инноваций Республики Узбекистан",
            },
            user13: {
              name: "Нилуфар Аъзамова",
              work: "Заместитель директора НИИ развития цифровых технологий и искусственного интеллекта",
            },
            work_group: "Рабочие группы",
            work_info:
              "Рабочие группы создаются по общему решению членов Комиссии и/или решению Собрания уполномоченных по этике ИИ для реализации отдельных положений и задач Кодекса. Состав рабочих групп может формироваться из представителей бизнеса, науки, органов государственной власти и иных заинтересованных сторон (наблюдателей).",
            work1: {
              title: "Рабочая группа по этике ИИ",
              info: "Разработать этический кодекс для искусственного интеллекта с учетом культуры и ценностей, сформировавшихся в стране",
              group: "Состав рабочей группы:",
              label: "Руководитель",
              name: "Бoбур Рахимов",
              team: "Владимир Определенов, Аммар Юнaс, Игор Вихров, Шахзод Умирзаков, Зафар Юлдашев, Андрей Незнамов.",
            },
            work2: {
              title:
                "Рабочая группа по разработке образовательных и обучающих проектов в области ИИ",
              info: "Способствовать повышению эффективности процесса обучения искусственному интеллекту в Узбекистане",
              group: "Состав рабочей группы:",
              label: "Руководитель",
              name: "Доктор Даниш Атер",
              team: "Шерзод Абдуллаев, Нодирбек Абулов, Юсуф Авазов, Игор Вихров, Улугбек Берданов, Владимир Определенов, Ахмед Сеффах",
            },
            work3: {
              title:
                "Рабочая группа по туризму, культуре и креативной индустрии",
              info: "Предложить решениe для туризма и культуры с использованием цифровых технологий и технологий искусственного интеллекта",
              group: "Состав рабочей группы:",
              label: "Руководитель",
              name: "Бoбур Рахимов",
              team: "Владимир Определенов, Анна Убайдуллаева, Жахонгир Мирмуминов, Аммар Юнaс",
            },
            work4: {
              title: "Рабочая группа по искусственному интеллекту в медицине",
              info: "Предложить решениe для сферы медицины и здравоохранение с использованием технологий искусственного интеллекта",
              group: "Состав рабочей группы:",
              label: "Руководитель",
              name: "Игорь Вихров",
              team: "Отабек Хужаев, Аммар Юнaс",
            },
            documents: "Документы",
            document1: {
              name: "Об утверждении стратегии «Цифровой Узбекистан – 2030» и мерах по ее эффективной реализации",
              info: "Постановление Президента Республики Узбекистан от 5 октября 2020 года № ПФ-6079",
            },
            document2: {
              name: "Об организационных мерах по реализации Стратегии инновационного развития Республики Узбекистан на 2022-2026 годы",
              info: "Постановление Президента Республики Узбекистан PQ-307 от 6 июля 2022 года.",
            },
            document3: {
              name: "О мерах по созданию условий для быстрого внедрения технологий искусственного интеллекта",
              info: "Постановление Президента Республики Узбекистан PQ-4996 от 17 февраля 2021 года",
            },
            document4: {
              name: "Положение о консультативном совете по искусственному интеллекту при Министерстве высшего образования, науки и инноваций Республики Узбекистан",
              info: "",
            },
            document5: {
              name: "Об утверждении Стратегии развития технологий искусственного интеллекта до 2030 года",
              info: "Постановление Президента Республики Узбекистан, от 14.10.2024 г. № ПП-35",
            },
          },
          news: {
            title:
              "Запущен бесплатный учебный курс для учителей среднеобразовательных школ",
            p1: 'Стартовал бесплатный учебный курс по "Основам искусственного интеллекта" и "Интернета вещей" (Internet of Things - IoT) для учителей информатики среднеобразовательных школ при содействии Министерства высшего образования, науки и инноваций, Министерства дошкольного и школьного образования и университета Amity в Ташкенте. ',
            p2: "Среди заявителей на обучение проведен онлайн опрос, по итогам которого отобраны 24 учителя информатики. Они поделятся своим опытом на учебном курсе с учителями информатики на следующем этапе. Продолжительность курса составляет 3 месяца, что включает в себя модули язык программирования Phython, основы искусственного интеллекта и Интернет вещей (IoT).",
            p3: "Курс в основном заключается в создании программ для практических занятий и управления устройствами, при этом делясь методиками зарубежного опыта. Занятия будут проводиться квалифицированными зарубежными профессорами Университета Amity в Ташкенте.",
          },
          news2: {
            title:
              "Ожидается запуск платформы предоставления базовых знаний по искусственному интеллекту",
            p1: "Советник министра высшего образования, науки и инноваций по вопросам ИКТ Бобур Рахимов ознакомился с деятельностью Центра передовых технологий и стратегических инициатив при Ташкентском педиатрическом медицинском институте и с проектами, реализуемыми центром по искусственному интеллекту.",
            p2: "Представлены системы, разработанные центром в рамках цифровизации Ташкентского педиатрического медицинского института, зоны Wi-Fi, созданные для студентов института и системы их мониторинга, а также проекты, направленные на внедрение технологий искусственного интеллекта в секторе здравоохранения.",
            p3: "Также был представлен проект «Homila AI», принимавший участие в хакатоне UrbanTech, в 2022 году, и в конце презентации были даны рекомендации по улучшению и популяризации проекта.",
            p4: "В ходе визита обсуждены вопросы укрепления сотрудничества между центром и Консультативным советом по искусственному интеллекту при министерстве, в частности, широкое внедрение технологий искусственного интеллекта в сферу здравоохранения, достигнуты договоренности о совместном запуске платформы предоставления базовых знаний по искусственному интеллекту работникам отрасли.",
          },
          news3: {
            title:
              "Состоялась встреча по вопросам сотрудничества в области искусственного интеллекта и цифровизации учебных процессов",
            p1: "16 февраля текущего года состоялась встреча между советником министра высшего образования, науки и инноваций по вопросам ИКТ Б.Рахимовым и директором Университета AMITY в Ташкенте Б.Абдуллаевым по вопросам сотрудничества в области искусственного интеллекта и цифровизации учебных процессов.",
            p2: "В ходе встречи обсуждены вопросы организации бесплатного курса по основам искусственного интеллекта и Интернета вещей для 24 учителей информатики в Ташкенте.",
            p3: "Также была представлена информация о проведенной в университете AMITY работе по организации ИТ-образования и цифровизации образовательного процесса, в частности, возможности более широкого использования системы LMS университета, организации дистанционной сдачи экзаменов. Было предложено расширить возможности применения системы HEMIS в университете.",
          },
          news4: {
            title:
              "Состоялось первое заседание Консультативного совета по искусственному интеллекту при Министерстве инновационного развития",
            p1: "18 октября 2022 года в рамках Международной недели инновационных идей «InnoWeek.Uz-2022» состоялась официальная церемония формирования первого состава Консультативного совета по искусственному интеллекту при Министерстве инновационного развития Республики Узбекистан и его программное заседание. Первый день  посвящен знакомству и принятию в состав Совета ведущих экспертов и специалистов отрасли.",
            p2: "Заседание открыл почётный председатель Совета - министр инновационного развития Иброхим Абдурахмонов. Приглашены к участию международные партнеры из Объединенных Арабских Эмиратов, Ирана, Китая и Индии, а также эксперты из США, стран ЕС, России и Таджикистана. Члены совета получили сертификаты, подтверждающие их участие в его работе.",
            p3: "Итогом второго дня заседания должна стать Программа работы Совета на 2022-2024, с перечнем конкретных направлений работы, инициатив, научно-практических, инновационных, образовательных и бизнес проектов по развитии искусственного интеллекта в Республике Узбекистан. Состав Совета и Программа работы будут опубликованы на сайте Министерства инновационного развития Республики Узбекистан.",
            p4: "Консультативный совет по искусственному интеллекту (Совета по ИИ) был учрежден в августе текущего года при Министерстве инновационного развития Узбекистана с целью создания условий для формирования сообщества экспертов и развития общественного диалога по этой теме. В задачи Совета входит поддержка направлений деятельности, связанных с ИИ в РУз, развитие отдельных проектов, проработка перспективных инициатив и установление международных контактов, для интеграции в мировое сообщество, которое работает над осознанным и этичным использованием искусственного интеллекта. Комплексный подход к вопросам этики, использования человеческого потенциала, гибкости адаптации технологий и развития общей ИТ-инфраструктуры страны призван повлиять на общее экономическое и социальное развитие Республики Узбекистан, и как следствие — на повышение рейтинга Узбекистана в мире.",
          },
          news5: {
            title:
              "Определены направления деятельности Консультативного совета по искусственному интеллекту",
            p1: "Во второй день заседания Консультативного совета по искусственному интеллекту при Министерстве инновационного развития в рамках «InnoWeek-2022» рассмотрен проект программы работы Совета на 2022-2024 годы.",
            p2: `Несколько членов Совета выступили со своими предложениями и сделали доклады на эту тему, состоялась оживленная дискуссия. В итоге были согласованы основные направления работы Советы, которые утвердили единогласно, также были утверждены 8 рабочих групп по этим направлениям. Принят предварительный список конкретных проектов, принято решение о разработке "Дорожных карт" и утверждения их на следующем заседании. `,
            p3: `В результате двух дней работы Совета по ИИ, опираясь на международные тенденции, доклады экспертов и живое обсуждение направлений деятельности и проектов Совета на 2022-2024 годы, мы пришли к выводу, что одним из видимых и ощутимых результатов апробации и внедрении технологий искусственного интеллекта на ряду с очевидными задачами по государственным и банковским сервисам, праву, медицине и, конечно промышленности и обеспечению безопасности, должна стать сфера туризма и культуры, но одним из главных направлений, о котором раньше практически не говорили, будет поиск возможностей для максимального развития в Узбекистане креативных индустрий.  Мы видим большой потенциал в этой сфере и огромное поле для инновационных решений на стыке креативности и цифровых технологий, что в ближайшие годы должно внести существенный вклад в развитие помимо традиционных отраслей и сектора креативной экономики в нашей стране.", — отметил председатель Консультативного совета по искусственному интеллекту Бобур Рахимов.`,
            p4: "В состав Совета вошло 50 человек в том числе 7 международных экспертов (Индия, Иран, Китай, ОАЭ, Россия, Южная Корея), Альянс ИИ Узбекистана, а также перспективные стартапы с использованием ИИ, общественные деятели и представители СМИ.",
          },
          news6: {
            title:
              "Сотрудничество с высшими учебными заведениями налажено в рамках заседания Консультативного совета по искусственному интеллекту при Министерстве инновационного развития.",
            p1: `На первом заседании Консультативного совета по искусственному интеллекту, который состоялся 18 октября на полях "InnoWeek.uz-2022" подписан меморандум о сотрудничестве между председателем Совета Б.Рахимовым и заместителем директора Университета АМИТИ.`,
            p2: `Целью меморандума является объединение теоретических и практических знаний, подготовка кадров для IT-сектора путем установления взаимного сотрудничества между сторонами. Согласовано организовать совместные курсы повышения квалификации для 25 преподавателей в области информатики в общеобразовательные средние школы.`,
            p3: `В рамках сотрудничества планируется отобрать лучших кадров работающих в общеобразовательных школах для обучения в течение 6 месяцев в рамках спецкурса.`,
          },
          test: "Сайт работает в тестовом режиме (приносим свои извинения за возможные ошибки)",
          footer: {
            about: {
              work: "Участники совета",
              group: "Рабочая группа",
              partner: "Партнёры",
              documents: "Документы",
            },
            project: {
              catalog: "Каталог проектов",
              list: "Список мероприятий",
            },
            blog: {
              news: "Новости",
              state: "Статьи",
              anons: "Анонсы мероприятий",
            },
          },
          newsTitle: "новости",
          feedback: {
            title: "Отправить запрос",
            name: "Имя",
            phone: "Телефон номер",
            email: "Электронная почта",
            send: "Отправить",
            text: "Текст заявки",
            info: `Напишите свой вопрос, мы ответим в ближайшее время`,
          },
          development: {
            title: `Основные направления деятельности совета:`,
            info: `Список проектов:`,
            list: [
              "Этические и социальные вопросы, связанные с внедрением ИИ;",
              "Создание и содействие внедрению образовательных программ для преподавателей и учащихся средних и старших классов, учреждений среднего специального и высшего образования, а также курсов повышения квалификации и профессиональной переподготовки руководителей и специалистов всех уровней в различных сферах экономики;",
              "Способствование повышению уровня Узбекистана в индексе готовности правительства к ИИ (Government AI Readiness Index), формируемого Oxford Insights и Международным научно-исследовательским центром;",
              "Формирование издательской программы и научно-популярных просветительских каналов;",
              "Организация и проведение мероприятий для популяризации технологий ИИ и обеспечения общественного диалога;",
              "Участие в различных программах и инициативах по теме ИИ в Республике Узбекистан, помощь в подготовке необходимых законодательных и подзаконных актов;",
              "Способствование созданию, сбору и открытости качественных данных во всех сферах экономики РУз, как основы для работы систем и сервисов с использованием ИИ;",
              "Развитие международного сотрудничества.",
            ],
          },
          education: {
            title: `Формируется каталог образовательных проектов и будут здесь анонсированы в ближайшее время.`,
            info: `Список проектов:`,
            name1: `Запуск учебного курса по основам ИИ для учителей информатики среднеобразовательных школ`,
          },
        },
      },
    },
  });

export default i18n;
