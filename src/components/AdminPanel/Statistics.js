import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './index.scss';
import {
  ageStatistic,
  cityStatistic,
  majorStatistic
} from '../../store/actions/statisticsAction';
import { Statistic, Row, Col, Button, Cascader, Input } from 'antd';
import statatisticsService from '../../services/statisticsService';
const { allCountries, allMajors, sMajor, allCities } = statatisticsService;

class AgeStatistics extends React.Component {
  state = {
    value: '',
    countries: [],
    cities: []
  };
  componentDidMount() {
    allCountries().then(data => {
      this.setState({ countries: data });
    });

    allMajors().then(majorsValues => {
      this.setState({ majors: majorsValues });
    });
  }

  getCountryCityData = () => {
    const { city } = this.props;
    city({
      city_id: this.state.city.id,
      country_id: this.state.country.id
    });
  };

  getMajorAndSubMajorData = () => {
    const { major } = this.props;
    major({
      major: this.state.major.id,
      spMajor: this.state.sub_major ? this.state.sub_major.id : undefined
    });
  };

  cityChange = (value, selectedOptions) => {
    this.setState({
      city: selectedOptions[0]
    });
  };

  countryChange = (value, selectedOptions) => {
    this.setState(
      {
        country: selectedOptions[0]
      },
      () => {
        allCities().then(cityFormate => {
          this.setState({
            cities: cityFormate
          });
        });
      }
    );
  };
  majorChange = (value, selectedOptions) => {
    this.setState(
      {
        major: selectedOptions[0]
      },
      () => {
        const majorId = this.state.major.id;
        sMajor(majorId).then(specialMajor => {
          this.setState({ specialMajor });
        });
      }
    );
  };
  majorSpecialChange = (value, selectedOptions) => {
    this.setState({
      sub_major: selectedOptions[0]
    });
  };
  onChange = event => {
    this.setState({
      value: event.value
    });
  };
  ageCount = () => {
    const { age } = this.props;
    age(this.state.value);
  };

  render() {
    const { age, city, major } = this.props.statistics;
    return (
      <React.Fragment>
        <Row className="user-statistics">
          <Col md={6} className="statistic">
            <Input placeholder="ادخل عمر المستخدم" onChange={this.onChange} />
            <Button onClick={this.ageCount} className="submit">
              {' '}
              اضغط
            </Button>
            <Statistic
              title="عدد المستخدمين بناءً على العمر"
              value={age !== '' ? age : ''}
            />
          </Col>
          <Col md={6} className="statistic">
            <Cascader
              className="dropdown-menu"
              options={this.state.countries}
              onChange={this.countryChange}
              placeholder="اختر الدولة"
            />
            <Cascader
              className="dropdown-menu"
              options={this.state.cities}
              onChange={this.cityChange}
              placeholder="اختر المدينة"
            />
            <Button onClick={this.getCountryCityData} className="submit">
              {' '}
              اضغط
            </Button>
            <Statistic
              title="عدد المستخدمين بناءً على المدينة"
              value={city !== undefined ? city.users : ''}
            />
          </Col>
          <Col md={6} className="statistic">
            <Cascader
              className="dropdown-menu"
              options={this.state.majors}
              onChange={this.majorChange}
              placeholder=" التخصص العام"
            />
            <Cascader
              className="dropdown-menu"
              options={this.state.specialMajor}
              onChange={this.majorSpecialChange}
              placeholder="الفرع الخاص"
            />
            <Button onClick={this.getMajorAndSubMajorData} className="submit">
              {' '}
              اضغط
            </Button>
            <Statistic
              title="عدد المستخدمين بناءً على التخصص"
              value={major !== undefined ? major.users : ''}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    statistics: state.statistics
  };
};
const mapDispatchToProps = dispatch => {
  return {
    age: params => {
      return dispatch(ageStatistic(params));
    },
    city: params => dispatch(cityStatistic(params)),
    major: params => dispatch(majorStatistic(params))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AgeStatistics);
