import React from 'react';
import { Input } from 'antd';

const step4Form = props => {
  const { handleChange, state } = props;
  const {
    emailError,
    passwordError,
    // emailMatchError,
    passwordMatchError
  } = state;
  return (
    <div className="steps-form">
      <div className="form-content" style={{ padding: '30px 53px 0 0' }}>
        {/* <img src={personalInfoIcon} /> */}
        <span className="f-title">معلومات الحساب</span>
        <span className="line"></span>
        <div className="form-fields">
          <div className="first-row">
            <div className="elements">
              <label className="info-label">البريد الالكتروني</label>
              <Input
                className="name-text"
                name="email"
                onChange={handleChange}
                type="email"
              />
              <span style={{ color: 'red' }}>
                {emailError && !state.email ? emailError : ''}
              </span>
            </div>
            {/* <div className="elements elm-mob">
              <label className="info-label">تأكيد البريد الالكتروني</label>
              <Input
                className="name-text"
                name="reEmail"
                onChange={handleChange}
                type="email"
              />
              <span style={{ color: 'red' }}>
                {state.email !== state.reEmail || !state.reEmail
                  ? emailMatchError
                  : ''}
              </span>
            </div> */}
          </div>
          <div className="first-row">
            <div className="elements">
              <label className="info-label">كلمة المرور</label>
              <Input
                className="name-text"
                name="password"
                onChange={handleChange}
                type="password"
              />
              <span style={{ color: 'red' }}>
                {passwordError && !state.password ? passwordError : ''}
              </span>
            </div>
            <div className="elements">
              <label className="info-label">تأكيد كلمة المرور</label>
              <Input
                className="name-text"
                name="rePassword"
                onChange={handleChange}
                type="password"
              />
              <span style={{ color: 'red' }}>
                {state.password !== state.rePassword || !state.rePassword
                  ? passwordMatchError
                  : ''}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default step4Form;
