import baseRequest from '../_core/index';

const statatisticsService = {
  age: num => {
    return baseRequest
      .get(`/get/UsersDepenedsOnAge/:age?${num}`)
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  city: params => {
    return baseRequest
      .get(
        `get/UsersDepenedsOnArea?city=${params.city_id}&country=${params.country_id}`
      )
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  major: params => {
    return baseRequest
      .get(
        `/get/UsersDepenedsOnMajor/?major=${params.major}&spMajor=${params.spMajor}`
      )
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  getDataDependCityAndMajor: params => {
    return baseRequest
      .get(
        `/get/UsersDepenedsOnAreaAndMajor/?country=${params.country}&city=${params.city}&major=${params.major}&spMajor=${params.spMajor}`
      )
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  growth: () => {
    return baseRequest
      .get('/get/growthRate')
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  allCountries: () => {
    return baseRequest.get('/getcountry').then(countries => {
      return countries.map(elm => {
        return {
          id: elm._id,
          value: elm.countryName,
          label: elm.countryName
        };
      });
    });
  },
  allMajors: () => {
    return baseRequest.get('/get/majors').then(majors => {
      return majors.map(value => {
        return {
          id: value._id,
          value: value.majorName,
          label: value.majorName,
          key: value.key
        };
      });
    });
  },
  getAllCompanyMajors: () => {
    return baseRequest.get('/getsectors').then(majors => {
      return majors.map(value => {
        return {
          id: value._id,
          value: value.sectorName,
          label: value.sectorName,
          key: value.key
        };
      });
    });
  },
  sMajor: majorId => {
    return baseRequest.get(`/get/spMajors?id=${majorId}`).then(specialMajor => {
      return specialMajor.map(elm => {
        return {
          id: elm._id,
          value: elm.majorName,
          label: elm.majorName
        };
      });
    });
  },
  getCompanySMajor: () => {
    return baseRequest.get('/getspec').then(specialMajor => {
      return specialMajor.map(elm => {
        return {
          id: elm._id,
          value: elm.specialistName,
          label: elm.specialistName
        };
      });
    });
  },
  companiesInfo: () => {
    return baseRequest
      .get('/get/companiesInfo')
      .then(companiesInfo => companiesInfo);
  },
  allCities: () => {
    return baseRequest.get('/getcity').then(cityData => {
      return cityData.map(elm => {
        return {
          id: elm._id,
          value: elm.cityName,
          label: elm.cityName
        };
      });
    });
  },
  getAllCompaniesBSpecialist: params => {
    return baseRequest
      .get(
        `/get/searchCompanyByCompanySpecialist/?CompanySp=${params.CompanySp}`
      )
      .then(result => result)
      .catch(e => console.log(e));
  },
  getAllCompaniesBSector: params => {
    return baseRequest
      .get(`/get/searchCompanyBySector/?sectorName=${params.sectorName}`)
      .then(result => result)
      .catch(e => console.log(e));
  },
  getAllCompanies: () => {
    return baseRequest.get('/get/allCompanies').then(companies => {
      return companies.map(value => {
        return {
          id: value._id,
          value: value.companyName,
          label: value.companyName
        };
      });
    });
  },
  getCompanyProjects: params => {
    return baseRequest
      .get(`/getprojectsById/?_id=${params.id}`)
      .then(projects => {
        return projects.map(elm => {
          return {
            id: elm._id,
            value: elm.projectName,
            label: elm.projectName
          };
        });
      })
      .catch(e => console.log(e));
  },
  getAllUniversities: () => {
    return baseRequest
      .get('/get/allUniversty')
      .then(result => {
        return result.map(elm => {
          return {
            id: elm._id,
            value: elm.universtyName,
            label: elm.universtyName
          };
        });
      })
      .catch(e => console.log(e));
  }
};

export default statatisticsService;
