import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://mohammed054.github.io/school-web';
const SCHOOL_NAME = 'مدرسة الحكمة الخاصة';
const SCHOOL_NAME_EN = 'Al Hikmah Private School';

const SEO_CONFIG = {
  '/': {
    title: `${SCHOOL_NAME} - الصفحة الرئيسية | مدرسة خاصة في الشارقة وعجمان`,
    description: 'مدرسة الحكمة الخاصة في الشارقة وعجمان، الإمارات العربية المتحدة. تقدم تعليماً متميزاً من الروضة حتى الثانوية للبنين والبنات. سجل الآن للعام الدراسي 2025-2026.',
    keywords: 'مدرسة خاصة، مدرسة في الشارقة، مدرسة في عجمان، مدارس خاصة في الإمارات، تعليم خاص، تسجيل مدرسة، مدرسة روضة، مدرسة ابتدائية، مدرسة ثانوية',
    ogImage: '/images/body/own-og.png',
  },
  '/goals-values': {
    title: `عن ${SCHOOL_NAME} | رؤيتنا، رسالتنا، وأهدافنا التعليمية`,
    description: 'تعرف على رؤية مدرسة الحكمة ورسالتها في تقديم تعليم ابتكاري وعالمي المستوى. اكتشف قيمنا الأساسية ومناهجنا التعليمية المتميزة.',
    keywords: 'عن المدرسة، رؤية المدرسة، رسالة المدرسة، قيم المدرسة، أهداف تعليمية، مناهج دراسية، مجلس الأمهات، تعليم في الإمارات',
    ogImage: '/images/body/intro-section.png',
  },
  '/branches': {
    title: `فروع ${SCHOOL_NAME} | النعيمية، التلة، الجرف، ومصفوت`,
    description: 'اكتشف فروع مدرسة الحكمة الأربعة في الشارقة وعجمان: النعيمية، التلة، الجرف، ومصفوت. مرافق تعليمية حديثة ومعلمون متخصصون في جميع الفروع.',
    keywords: 'فروع المدرسة، مدرسة في النعيمية، مدرسة في التلة، مدرسة في الجرف، مدرسة في مصفوت، مدارس في الشارقة، مدارس في عجمان، موقع المدرسة',
    ogImage: '/images/body/wallapper.jpg',
  },
  '/admissions': {
    title: `التسجيل في ${SCHOOL_NAME} | القبول، الرسوم، والوثائق المطلوبة`,
    description: 'سجل أبناءك في مدرسة الحكمة الخاصة. تعرف على الرسوم الدراسية، الوثائق المطلوبة للقبول، شروط العمر، وإجراءات التسجيل للعام 2025-2026.',
    keywords: 'تسجيل مدرسة، قبول مدرسة، رسوم دراسية، وثائق التسجيل، شروط القبول، تسجيل الروضة، تسجيل الابتدائية، مدرسة خاصة رسوم',
    ogImage: '/images/body/student.png',
  },
  '/careers': {
    title: `فرص العمل في ${SCHOOL_NAME} | وظائف تعليمية وإدارية`,
    description: 'انضم لفريق مدرسة الحكمة. اكتشف الوظائف الشاغرة للمعلمين والإداريين في جميع الفروع. قدم سيرتك الذاتية وتابع حالة طلبك.',
    keywords: 'وظائف في المدارس، معلمين، وظائف تعليمية، عمل في الإمارات، وظائف مدرسية، سيرة ذاتية، تقديم وظيفة، وظائف الشارقة',
    ogImage: '/images/body/student.png',
  },
  '/kindergarten': {
    title: `مرحلة الروضة في ${SCHOOL_NAME} | تعليم أساسي متميز للأطفال`,
    description: 'برنامج الروضة في مدرسة الحكمة للأطفال من 4-5 سنوات. تعليم تفاعلي وممتع يطور المهارات الأساسية في بيئة آمنة ومحفزة.',
    keywords: 'روضة أطفال، تعليم الروضة، حضانة، رياض أطفال، مرحلة ما قبل المدرسة، تسجيل الروضة، مدرسة روضة في الشارقة',
    ogImage: '/images/body/kindergarten.jpg',
  },
  '/elementary': {
    title: `المرحلة الابتدائية في ${SCHOOL_NAME} | تعليم أساسي متقدم للصفوف 1-6`,
    description: 'المرحلة الابتدائية في مدرسة الحكمة للصفوف من الأول إلى السادس. مناهج دراسية متطورة ومعلمون مؤهلون لبناء قاعدة تعليمية قوية.',
    keywords: 'المرحلة الابتدائية، الصف الابتدائي، تعليم ابتدائي، مدرسة ابتدائية، صف أول، مدارس ابتدائية في الشارقة',
    ogImage: '/images/body/first-school.jpeg',
  },
  '/highschool-boys': {
    title: `المرحلة الثانوية للبنين في ${SCHOOL_NAME} | تعليم ثانوي متميز`,
    description: 'القسم الثانوي للبنين في مدرسة الحكمة للصفوف من السابع إلى الثاني عشر. إعداد الطلاب للجامعة والحياة المهنية مع منهج أكاديمي شامل.',
    keywords: 'ثانوية بنين، مدرسة ثانوية للبنين، تعليم ثانوي، صف ثانوي، إعداد الجامعة، مدرسة ثانوية في الشارقة',
    ogImage: '/images/body/highschool-boys.jpg',
  },
  '/highschool-girls': {
    title: `المرحلة الثانوية للبنات في ${SCHOOL_NAME} | تعليم ثانوي للفتيات`,
    description: 'القسم الثانوي للبنات في مدرسة الحكمة للصفوف من السابع إلى الثاني عشر. بيئة تعليمية آمنة ومحفزة لبناء قائدات المستقبل.',
    keywords: 'ثانوية بنات، مدرسة ثانوية للبنات، تعليم ثانوي للفتيات، صف ثانوي بنات، مدرسة ثانوية في عجمان',
    ogImage: '/images/body/highschool-girls.jpg',
  },
};

const SEO = () => {
  const location = useLocation();

  useEffect(() => {
    const config = SEO_CONFIG[location.pathname] || SEO_CONFIG['/'];

    document.title = config.title;

    updateMetaTag('description', config.description);
    updateMetaTag('keywords', config.keywords);

    updateMetaTag('og:title', config.title, 'property');
    updateMetaTag('og:description', config.description, 'property');
    updateMetaTag('og:image', `${BASE_URL}${config.ogImage}`, 'property');
    updateMetaTag('og:url', `${BASE_URL}${location.pathname}`, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:site_name', SCHOOL_NAME, 'property');
    updateMetaTag('og:locale', 'ar_AR', 'property');

    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', config.title, 'name');
    updateMetaTag('twitter:description', config.description, 'name');
    updateMetaTag('twitter:image', `${BASE_URL}${config.ogImage}`, 'name');

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.href = `${BASE_URL}${location.pathname}`;
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = `${BASE_URL}${location.pathname}`;
      document.head.appendChild(link);
    }
  }, [location]);

  const updateMetaTag = (name, content, attribute = 'name') => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  return null;
};

export default SEO;
export { SEO_CONFIG };
