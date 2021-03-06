import React from 'react';
import { Input, Select } from 'antd';
import personalInfoIcon from '../../../../images/personal-info-icon.svg';
import _ from 'lodash';

const { Option } = Select;

const step3Form = props => {
  const { handleChange, handleSelect, majors, state } = props;
  const { firstNameError, lastNameError, majorError } = state;
  return (
    <div className="steps-form">
      <div className="form-content" style={{ padding: '30px 53px 0 0' }}>
        <img src={personalInfoIcon} />
        <span className="f-title">معلومات شخصية</span>
        <span className="line"></span>
        <div className="form-fields">
          <div className="first-row">
            <div className="elements">
              <label className="info-label">الاسم الأول</label>
              <Input
                className="name-text"
                name="firstName"
                onChange={handleChange}
              />
              <span style={{ color: 'red' }}>
                {firstNameError && !state.firstName ? firstNameError : ''}
              </span>
            </div>
            <div className="elements">
              <label className="info-label">الاسم الأخير</label>
              <Input
                className="name-text"
                name="lastName"
                onChange={handleChange}
              />
              <span style={{ color: 'red' }}>
                {lastNameError && !state.lastName ? lastNameError : ''}
              </span>
            </div>
          </div>
          <label className="info-label">التخصص العام</label>
          <Select
            onChange={value => handleSelect(value, 'major')}
            className="major-text"
          >
            {_.isArray(majors)
              ? majors.map(elm => {
                  return (
                    <Option value={elm.id} key={elm.id}>
                      {elm.value}
                    </Option>
                  );
                })
              : ''}
          </Select>
          <span style={{ color: 'red' }}>
            {majorError && !state.major ? majorError : ''}
          </span>
          {/* <Input  name="major" onChange={handleChange} /> */}
        </div>
      </div>
    </div>
  );
};

export default step3Form;
