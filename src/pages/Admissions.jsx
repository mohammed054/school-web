import React, { useState, useEffect } from 'react';
import Accordion from '../components/Accordion';

const Admissions = () => {
  const [selectedBranch, setSelectedBranch] = useState('nieemyah');
  const [showFees, setShowFees] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tuitionFees = {
    nieemyah: {
      name: 'النعيمية',
      fees: [
        { grade: 'الروضة الأولى', amount: '12,000' },
        { grade: 'الروضة الثانية', amount: '12,000' },
        { grade: 'الصف الأول', amount: '15,000' },
        { grade: 'الصف الثاني', amount: '15,000' },
        { grade: 'الصف الثالث', amount: '15,000' },
        { grade: 'الصف الرابع', amount: '15,000' },
        { grade: 'الصف الخامس', amount: '15,000' },
        { grade: 'الصف السادس', amount: '15,000' },
        { grade: 'الصف السابع', amount: '18,000' },
        { grade: 'الصف الثامن', amount: '18,000' },
        { grade: 'الصف التاسع', amount: '18,000' },
        { grade: 'الصف العاشر', amount: '18,000' },
        { grade: 'الصف الحادي عشر', amount: '18,000' },
        { grade: 'الصف الثاني عشر', amount: '18,000' }
      ]
    },
    tallah: {
      name: 'التلة',
      fees: [
        { grade: 'الروضة الأولى', amount: '12,000' },
        { grade: 'الروضة الثانية', amount: '12,000' },
        { grade: 'الصف الأول', amount: '15,000' },
        { grade: 'الصف الثاني', amount: '15,000' },
        { grade: 'الصف الثالث', amount: '15,000' },
        { grade: 'الصف الرابع', amount: '15,000' },
        { grade: 'الصف الخامس', amount: '15,000' },
        { grade: 'الصف السادس', amount: '15,000' },
        { grade: 'الصف السابع', amount: '18,000' },
        { grade: 'الصف الثامن', amount: '18,000' },
        { grade: 'الصف التاسع', amount: '18,000' },
        { grade: 'الصف العاشر', amount: '18,000' },
        { grade: 'الصف الحادي عشر', amount: '18,000' },
        { grade: 'الصف الثاني عشر', amount: '18,000' }
      ]
    },
    jurf: {
      name: 'الجرف',
      fees: [
        { grade: 'الروضة الأولى', amount: '12,000' },
        { grade: 'الروضة الثانية', amount: '12,000' },
        { grade: 'الصف الأول', amount: '15,000' },
        { grade: 'الصف الثاني', amount: '15,000' },
        { grade: 'الصف الثالث', amount: '15,000' },
        { grade: 'الصف الرابع', amount: '15,000' },
        { grade: 'الصف الخامس', amount: '15,000' },
        { grade: 'الصف السادس', amount: '15,000' },
        { grade: 'الصف السابع', amount: '18,000' },
        { grade: 'الصف الثامن', amount: '18,000' },
        { grade: 'الصف التاسع', amount: '18,000' },
        { grade: 'الصف العاشر', amount: '18,000' },
        { grade: 'الصف الحادي عشر', amount: '18,000' },
        { grade: 'الصف الثاني عشر', amount: '18,000' }
      ]
    },
    masfoot: {
      name: 'مصفوت',
      fees: [
        { grade: 'الروضة الأولى', amount: '12,000' },
        { grade: 'الروضة الثانية', amount: '12,000' },
        { grade: 'الصف الأول', amount: '15,000' },
        { grade: 'الصف الثاني', amount: '15,000' },
        { grade: 'الصف الثالث', amount: '15,000' },
        { grade: 'الصف الرابع', amount: '15,000' },
        { grade: 'الصف الخامس', amount: '15,000' },
        { grade: 'الصف السادس', amount: '15,000' },
        { grade: 'الصف السابع', amount: '18,000' },
        { grade: 'الصف الثامن', amount: '18,000' },
        { grade: 'الصف التاسع', amount: '18,000' },
        { grade: 'الصف العاشر', amount: '18,000' },
        { grade: 'الصف الحادي عشر', amount: '18,000' },
        { grade: 'الصف الثاني عشر', amount: '18,000' }
      ]
    }
  };

  const handleBranchChange = (branchKey) => {
    setSelectedBranch(branchKey);
    setShowFees(true);
  };

  return (
    <div>
      <main>
        <section className="registration-section">
          <div className="container">
            <aside className="registration-sidebar">
              <h3>معلومات التسجيل</h3>
              <ul>
                <li><a href="#documents" className="sidebar-link">الوثائق المطلوبة للقبول</a></li>
                <li><a href="#fees" className="sidebar-link">الرسوم الدراسية 2025-2026</a></li>
                <li><a href="#uniform" className="sidebar-link">الزي المدرسي الموحد</a></li>
              </ul>
            </aside>

            <div className="registration-content">
              <Accordion title="الوثائق المطلوبة لتسجيل الطلبة للعام الدراسي 2025-2026" defaultOpen={false}>
                <p>لإتمام عملية التسجيل في مدرسة الحكمة الخاصة، يرجى تقديم المستندات التالية:</p>
                <ul>
                  <li>ثلاث صور شخصية حديثة للطالب بخلفية بيضاء (حجم جواز السفر)</li>
                  <li>صورة من شهادة الميلاد (نسخة أصلية)</li>
                  <li>صورة من دفتر التطعيم ساري المفعول</li>
                  <li>صورة من جواز السفر والهوية الإماراتية (للطالب، الأب، والأم)</li>
                  <li>شهادة الانتقال الأصلية مصدقة للطلاب القادمين من مدارس أخرى</li>
                  <li>آخر شهادة دراسية مصدقة</li>
                </ul>
                <div className="highlight-box">
                  <p className="highlight-red">شروط القبول حسب العمر حسب وزارة التربية والتعليم:</p>
                  <ul>
                    <li><span className="highlight-bold">الروضة الأولى (KG1):</span> من أكمل 4 سنوات في 31 أغسطس</li>
                    <li><span className="highlight-bold">الروضة الثانية (KG2):</span> من أكمل 5 سنوات في 31 أغسطس</li>
                    <li><span className="highlight-bold">الصف الأول:</span> من أكمل 6 سنوات ولا يتجاوز 8 سنوات</li>
                  </ul>
                </div>
              </Accordion>

              <Accordion title="الرسوم الدراسية للعام الدراسي 2025-2026" defaultOpen={false}>
                <p className="fees-intro">اختر الفرع لعرض الرسوم الدراسية المحدثة:</p>

                <div className="branch-selector">
                  <button
                    className={`branch-btn ${selectedBranch === 'nieemyah' ? 'active' : ''}`}
                    onClick={() => handleBranchChange('nieemyah')}
                  >
                    فرع النعيمية
                  </button>
                  <button
                    className={`branch-btn ${selectedBranch === 'tallah' ? 'active' : ''}`}
                    onClick={() => handleBranchChange('tallah')}
                  >
                    فرع التلة
                  </button>
                  <button
                    className={`branch-btn ${selectedBranch === 'jurf' ? 'active' : ''}`}
                    onClick={() => handleBranchChange('jurf')}
                  >
                    فرع الجرف
                  </button>
                  <button
                    className={`branch-btn ${selectedBranch === 'masfoot' ? 'active' : ''}`}
                    onClick={() => handleBranchChange('masfoot')}
                  >
                    فرع مصفوت
                  </button>
                </div>

                {showFees && (
                  <div className="fees-table-container">
                    <div className="fees-table-wrapper">
                      <table className="fees-table">
                      <thead>
                        <tr>
                          <th>المرحلة الدراسية</th>
                          <th>الرسوم السنوية (درهم إماراتي)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tuitionFees[selectedBranch].fees.map((fee, index) => (
                          <tr key={index}>
                            <td>{fee.grade}</td>
                            <td>{fee.amount} درهم</td>
                          </tr>
                        ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="fees-notes">
                    <p className="note-text"><strong>شروط وملاحظات الرسوم:</strong></p>
                    <ul>
                      <li>رسوم التسجيل: 500 درهم (غير مستردة، تُخصم من الرسوم الدراسية)</li>
                      <li>الرسوم تشمل الكتب الدراسية والمواد التعليمية الأساسية</li>
                      <li>الرسوم لا تشمل الزي المدرسي أو خدمات المواصلات المدرسية</li>
                      <li>يُمكن دفع الرسوم على دفعتين: 50% عند التسجيل و50% في بداية الفصل الثاني</li>
                      </ul>
                    </div>
                  </div>
                )}
              </Accordion>

              <Accordion title="الزي المدرسي الموحد" defaultOpen={false}>
                <p>الالتزام بالزي المدرسي الموحد إلزامي لجميع طلاب مدرسة الحكمة في جميع الفروع:</p>
                <ul>
                  <li><span className="highlight-bold">الزي الرسمي للبنين:</span> قميص أزرق فاتح، بنطلون كحلي، حذاء أسود (غترة للمسلمين)</li>
                  <li><span className="highlight-bold">الزي الرسمي للبنات:</span> مريول كحلي (بغطاء الرأس)، قميص أبيض، حذاء أسود</li>
                  <li><span className="highlight-bold">الزي الرياضي:</span> زي رياضي خاص بمدرسة الحكمة (متوفر في المتجر المدرسي في جميع الفروع)</li>
                </ul>
                <p>يمكن شراء الزي المدرسي من قسم المبيعات في المدرسة يومياً من الساعة 8:00 صباحاً حتى 1:00 ظهراً في أي فرع من فروعنا (النعيمية، التلة، الجرف، أو مصفوت).</p>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admissions;
