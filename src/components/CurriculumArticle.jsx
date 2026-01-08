import React, { useEffect } from 'react';

const CurriculumArticle = () => {
  useEffect(() => {
    const curriculumArticle = document.querySelector('.curriculum-article');
    if (curriculumArticle) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
      observer.observe(curriculumArticle);
    }
  }, []);

  return (
    <div className="curriculum-article">
      <div className="curriculum-img">
        <img src={`${import.meta.env.BASE_URL}images/body/moe.png`} alt="وزارة التربية والتعليم" />
      </div>
      <div className="curriculum-text">
        <p>مدرسة الحكمة هي مدرسة خاصة تابعة للوزارة تعتمد المنهج الوزاري الكامل. يتم تقديم جميع المواد وفق تعليمات وزارة التربية والتعليم، مع التركيز على التطوير الأكاديمي والشامل للطلاب، بما يشمل الرياضيات والعلوم واللغة العربية والإنجليزية.</p>
      </div>
    </div>
  );
};

export default CurriculumArticle;
