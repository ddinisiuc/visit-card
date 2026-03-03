export interface Testimonial {
  id: string;
  name: {
    en: string;
    ru: string;
    md: string;
  };
  role: {
    en: string;
    ru: string;
    md: string;
  };
  company: {
    en: string;
    ru: string;
    md: string;
  };
  testimonial: {
    en: string;
    ru: string;
    md: string;
  };
  avatar?: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: {
      en: 'Alex Thompson',
      ru: 'Алекс Томпсон',
      md: 'Alex Thompson'
    },
    role: {
      en: 'Founder & CEO',
      ru: 'Основатель и CEO',
      md: 'Fondator & CEO'
    },
    company: {
      en: 'HealthTech Startup',
      ru: 'HealthTech стартап',
      md: 'Startup HealthTech'
    },
    testimonial: {
      en: 'Daniil took our messy idea and turned it into a shipped product in 4 months. What impressed me most wasn\'t the code — it was how he handled the chaos. Every week, I knew exactly where we were and what decisions needed to be made. He owns the outcome, not just tasks.',
      ru: 'Даниил взял нашу размытую идею и превратил её в запущенный продукт за 4 месяца. Впечатлило меня не столько код — сколько то, как он справлялся с хаосом. Каждую неделю я точно знал, где мы находимся и какие решения нужно принять. Он отвечает за результат, а не просто за задачи.',
      md: 'Daniil a luat ideea noastră haotică și a transformat-o într-un produs lansat în 4 luni. Ce m-a impresionat cel mai mult nu a fost codul — ci cum a gestionat haosul. În fiecare săptămână, știam exact unde suntem și ce decizii trebuiau luate. El răspunde pentru rezultat, nu doar pentru task-uri.'
    },
    featured: true
  },
  {
    id: '2',
    name: {
      en: 'Maria Rodriguez',
      ru: 'Мария Родригес',
      md: 'Maria Rodriguez'
    },
    role: {
      en: 'Co-Founder',
      ru: 'Сооснователь',
      md: 'Co-Fondator'
    },
    company: {
      en: 'FinTech Platform',
      ru: 'FinTech платформа',
      md: 'Platformă FinTech'
    },
    testimonial: {
      en: 'We had a nightmare legacy system that nobody wanted to touch. Daniil didn\'t run away — he mapped it, designed a migration strategy, and coordinated the team to pull it off without downtime. His technical depth and clear communication saved us months of headaches.',
      ru: 'У нас была кошмарная legacy-система, к которой никто не хотел прикасаться. Даниил не сбежал — он составил её карту, разработал стратегию миграции и координировал команду для её выполнения без простоя. Его техническая глубина и чёткая коммуникация сэкономили нам месяцы головной боли.',
      md: 'Aveam un sistem legacy de coșmar pe care nimeni nu voia să-l atingă. Daniil nu a fugit — l-a cartografiat, a conceput o strategie de migrare și a coordonat echipa să o realizeze fără downtime. Profunzimea sa tehnică și comunicarea clară ne-au salvat luni de dureri de cap.'
    },
    featured: true
  },
  {
    id: '3',
    name: {
      en: 'James Chen',
      ru: 'Джеймс Чен',
      md: 'James Chen'
    },
    role: {
      en: 'Product Lead',
      ru: 'Продуктовый лид',
      md: 'Product Lead'
    },
    company: {
      en: 'SaaS Startup',
      ru: 'SaaS стартап',
      md: 'Startup SaaS'
    },
    testimonial: {
      en: 'I\'ve worked with agencies, freelancers, and in-house teams. Daniil is different. He thinks like a founder — balancing speed with quality, calling out risks early, and making sure we\'re building the right thing. Our MVP launched on time and we\'re still using the architecture he designed.',
      ru: 'Я работал с агентствами, фрилансерами и внутренними командами. Даниил другой. Он думает как основатель — балансирует скорость с качеством, озвучивает риски заранее и следит за тем, чтобы мы строили правильную вещь. Наш MVP запустился в срок, и мы до сих пор используем архитектуру, которую он спроектировал.',
      md: 'Am lucrat cu agenții, freelanceri și echipe interne. Daniil este diferit. Gândește ca un fondator — echilibrează viteza cu calitatea, semnalează riscurile devreme și se asigură că construim lucrurile potrivite. MVP-ul nostru a fost lansat la timp și încă folosim arhitectura pe care a proiectat-o.'
    },
    featured: true
  },
  {
    id: '4',
    name: {
      en: 'Sophie Laurent',
      ru: 'Софи Лоран',
      md: 'Sophie Laurent'
    },
    role: {
      en: 'Technical Co-Founder',
      ru: 'Технический кофаундер',
      md: 'Co-Fondator Tehnic'
    },
    company: {
      en: 'EdTech Platform',
      ru: 'EdTech платформа',
      md: 'Platformă EdTech'
    },
    testimonial: {
      en: 'Even as a technical founder, I needed someone who could take full ownership while I focused on fundraising. Daniil coordinated our dev team, made architectural decisions, and kept stakeholders aligned. His weekly updates were so clear that our board actually understood what was happening.',
      ru: 'Даже как технический основатель, мне был нужен кто-то, кто возьмёт полную ответственность, пока я сосредоточена на фандрайзинге. Даниил координировал нашу команду разработки, принимал архитектурные решения и держал стейкхолдеров aligned. Его еженедельные обновления были настолько ясными, что наш борд действительно понимал, что происходит.',
      md: 'Chiar și ca fondator tehnic, aveam nevoie de cineva care să preia responsabilitatea completă în timp ce mă concentram pe strângere de fonduri. Daniil a coordonat echipa noastră de dezvoltare, a luat decizii de arhitectură și a menținut stakeholderii aliniați. Actualizările sale săptămânale erau atât de clare încât consiliul nostru chiar înțelegea ce se întâmpla.'
    },
    featured: true
  },
  {
    id: '5',
    name: {
      en: 'Michael Foster',
      ru: 'Майкл Фостер',
      md: 'Michael Foster'
    },
    role: {
      en: 'Founder',
      ru: 'Основатель',
      md: 'Fondator'
    },
    company: {
      en: 'E-Commerce Platform',
      ru: 'E-Commerce платформа',
      md: 'Platformă E-Commerce'
    },
    testimonial: {
      en: 'We burned through two agencies before finding Daniil. The difference? He told us what we needed to hear, not what we wanted to hear. Cut scope ruthlessly, prioritized what would move the needle, and delivered a working product we could actually maintain. Best technical decision we made.',
      ru: 'Мы прошли через два агентства перед тем, как найти Даниила. Разница? Он говорил нам то, что нужно услышать, а не то, что мы хотели услышать. Безжалостно сократил скоуп, приоритизировал то, что реально двинет иглу, и поставил работающий продукт, который мы действительно можем поддерживать. Лучшее техническое решение, которое мы приняли.',
      md: 'Am ars două agenții înainte de a-l găsi pe Daniil. Diferența? Ne-a spus ce trebuia să auzim, nu ce voiam să auzim. A redus scope-ul necruțător, a prioritizat ce ar mișca acul și a livrat un produs funcțional pe care chiar îl puteam întreține. Cea mai bună decizie tehnică pe care am luat-o.'
    },
    featured: true
  }
];

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter(t => t.featured);
}

export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find(t => t.id === id);
}
