const initialState ={
    user: '',
    company: '',
    updatedUser: '',
    updatedCompany: ''

}

const adminCRUD = (state = initialState, action) => {  
    switch (action.type) {
      case "DELETE_USER_SUCCESS":
        return {
          ...state,
          user: action.payload,
        }; 
      case "DELETE_COMPANY_SUCCESS":
        return {
          ...state,
          company: action.payload,
      }; 
      case "UPDATE_USER_SUCCESS":
        return {
          ...state,
          updatedUser: action.payload,
      };
      case "UPDATE_COMPANY_SUCCESS":
        return {
          ...state,
          updatedCompany: action.payload,
      };    
      default:
        return state;
    }
  };
  
  export default adminCRUD;
  