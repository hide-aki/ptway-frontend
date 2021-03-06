import baseRequest from '../_core/index';
import { loadState } from '../_core/localStorage';

const statatisticsService = {
  age: num => {
    return baseRequest
      .get(`/get/UsersDepenedsOnAge/:age?${num}`, loadState())
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
        `get/UsersDepenedsOnArea?city=${params.city_id}&country=${params.country_id}`,
        loadState()
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
        `/get/UsersDepenedsOnMajor/?major=${params.major}&spMajor=${params.spMajor}`,
        loadState()
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
        `/get/UsersDepenedsOnAreaAndMajor/?country=${params.country}&city=${params.city}&major=${params.major}&spMajor=${params.spMajor}`,
        loadState()
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
      .get('/get/growthRate', loadState())
      .then(result => {
        return result;
      })
      .catch(error => {
        console.log('error', error);
      });
  },
  allCountries: () => {
    return baseRequest.get('/getcountry', loadState()).then(countries => {
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
    return baseRequest.get('/get/majors', loadState()).then(majors => {
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
    return baseRequest.get('/getsectors', loadState()).then(majors => {
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
    return baseRequest
      .get(`/get/spMajors?id=${majorId}`, loadState())
      .then(specialMajor => {
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
    return baseRequest.get('/getspec', loadState()).then(specialMajor => {
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
      .get('/get/companiesInfo', loadState())
      .then(companiesInfo => companiesInfo);
  },
  allCities: () => {
    return baseRequest.get('/getcity', loadState()).then(cityData => {
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
        `/get/searchCompanyByCompanySpecialist/?CompanySp=${params.CompanySp}`,
        loadState()
      )
      .then(result => result)
      .catch(e => console.log(e));
  },
  getAllCompaniesBSector: params => {
    return baseRequest
      .get(
        `/get/searchCompanyBySector/?sectorName=${params.sectorName}`,
        loadState()
      )
      .then(result => result)
      .catch(e => console.log(e));
  },
  getAllCompanies: () => {
    return baseRequest.get('/get/allCompanies', loadState()).then(companies => {
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
      .get(`/getprojectsById/?_id=${params.id}`, loadState())
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
      .get('/get/allUniversty', loadState())
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
