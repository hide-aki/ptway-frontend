import React from 'react';
import './style.scss';
import Header from '../../Header';
import Filter from '../../Filter';
import Footer from '../../Footer';

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const Applicants = props => {
  return (
    <React.Fragment>
      <Header />
      <div className="company-container">
        <Filter />
        <div className="applicant-header">
          <h3>اسم المتقدم</h3>
          <h3>السيرة الذاتية</h3>
          <h3>اسم المشروع</h3>
          <h3>اسم العرض</h3>
          <h3>الحالة</h3>
        </div>
        {array.map(elm => (
          <div className="applicant" key={elm}>
            <h4>ياسر أحمد القحطاني</h4>
            <button
              className="display-cv"
              onClick={() => props.history.push('/company/applicant/profile')}
            >
              عرض
            </button>
            <h4>مشروع تأمين أفرع الشركة التجارية </h4>
            <h4>
              {' '}
              <span>اسم العرض : </span>
              محاسب في شركة بيتزا هت
            </h4>
            <h4>قيد الانتظار</h4>
            <button
              className="display-cv-mob"
              onClick={() => props.history.push('/company/applicant/profile')}
            >
              عرض السيرة الذاتية
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default Applicants;
