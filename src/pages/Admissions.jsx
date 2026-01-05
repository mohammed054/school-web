import React, { useState } from 'react';
import Accordion from '../components/Accordion';

const Admissions = () => {
  const [selectedBranch, setSelectedBranch] = useState('nieemyah');

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
  };

  return (
    <div>
      <main>
        <section className="registration-section">
          <div className="container">
            <aside className="registration-sidebar">
              <h3>القائمة</h3>
              <ul>
                <li><a href="#documents" className="sidebar-link">الوثائق المطلوبة</a></li>
                <li><a href="#fees" className="sidebar-link">الرسوم الدراسية</a></li>
                <li><a href="#uniform" className="sidebar-link">الزي المدرسي</a></li>
              </ul>
            </aside>

            <div className="registration-content">
              <Accordion title="الوثائق المطلوبة لتسجيل الطلبة للعام الدراسي الجديد" defaultOpen={false}>
                <p>لإتمام عملية التسجيل، يرجى تقديم المستندات التالية:</p>
                <ul>
                  <li>ثلاث صور شخصية حديثة للطالب (خلفية بيضاء).</li>
                  <li>صورة من شهادة الميلاد.</li>
                  <li>صورة من دفتر التطعيم (سارية المفعول).</li>
                  <li>صورة من جواز السفر والهوية الإماراتية (للطالب، الأب، والأم).</li>
                  <li>شهادة الانتقال الأصلية (مصدقة) للطلاب القادمين من مدارس أخرى.</li>
                  <li>آخر شهادة دراسية (مصدقة).</li>
                </ul>
                <div className="highlight-box">
                  <p className="highlight-red">شروط القبول حسب العمر:</p>
                  <ul>
                    <li><span className="highlight-bold">الروضة الأولى:</span> من أكمل 4 سنوات في 31 أغسطس.</li>
                    <li><span className="highlight-bold">الروضة الثانية:</span> من أكمل 5 سنوات في 31 أغسطس.</li>
                    <li><span className="highlight-bold">الصف الأول:</span> من أكمل 6 سنوات ولا يتجاوز 8 سنوات.</li>
                  </ul>
                </div>
              </Accordion>

              <Accordion title="الرسوم الدراسية" defaultOpen={false}>
                <p className="fees-intro">اختر الفرع لعرض الرسوم الدراسية:</p>

                <div className="branch-selector">
                  <button
                    className={`branch-btn ${selectedBranch === 'nieemyah' ? 'active' : ''}`}
                    onClick={() => handleBranchChange('nieemyah')}
                  >
                    النعيمية
                  </button>
                  <button
                    className={`branch-btn ${selectedBranch === 'tallah' ? 'active' : ''}`}
                    onClick={() => handleBranchChange('tallah')}
                  >
                    التلة
                  </button>
                  <button
                    className={`branch-btn ${selectedBranch === 'jurf' ? 'active' : ''}`}
                    onClick={() => handleBranchChange('jurf')}
                  >
                    الجرف
                  </button>
                  <button
                    className={`branch-btn ${selectedBranch === 'masfoot' ? 'active' : ''}`}
                    onClick={() => handleBranchChange('masfoot')}
                  >
                    مصفوت
                  </button>
                </div>

                <div className="fees-table-container">
                  <div className="fees-table-wrapper">
                    <table className="fees-table">
                      <thead>
                        <tr>
                          <th>المرحلة</th>
                          <th>الرسوم السنوية</th>
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
                    <p className="note-text"><strong>ملاحظات:</strong></p>
                    <ul>
                      <li>رسوم التسجيل: 500 درهم (غير مستردة، تخصم من الرسوم الدراسية)</li>
                      <li>الرسوم تشمل الكتب الدراسية</li>
                      <li>الرسوم لا تشمل الزي المدرسي أو المواصلات</li>
                    </ul>
                  </div>
                </div>
              </Accordion>

              <Accordion title="الزي المدرسي" defaultOpen={false}>
                <p>الالتزام بالزي المدرسي الموحد إلزامي لجميع الطلاب:</p>
                <ul>
                  <li><span className="highlight-bold">البنين:</span> قميص أزرق فاتح، بنطلون كحلي، حذاء أسود.</li>
                  <li><span className="highlight-bold">البنات:</span> مريول كحلي، قميص أبيض، حذاء أسود.</li>
                  <li><span className="highlight-bold">الرياضة:</span> زي رياضي خاص بالمدرسة (متوفر في المتجر المدرسي).</li>
                </ul>
                <p>يمكن شراء الزي المدرسي من قسم المبيعات في المدرسة يومياً من الساعة 8:00 صباحاً حتى 1:00 ظهراً.</p>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admissions;
