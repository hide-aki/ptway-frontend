const initialUser = {
    _id: undefined,
    email: undefined,
    roles: undefined,
    loggedIn: false,
    sessionToken: undefined
  };
  
  const user = (state = initialUser, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
          ...action.payload.data.user,
          loggedIn: true,
          sessionToken: action.payload.data.sessionToken
        };
      case "LOGIN_WORKER_SUCCESS":
        return {
          ...action.payload.data.user,
          loggedIn: true,
          sessionToken: action.payload.data.sessionToken
        };
      case "LOGIN_ADMIN_SUCCESS":
        return {
          ...action.payload.data.user,
          loggedIn: true,
          sessionToken: action.payload.data.sessionToken
        };
      case "LOGOUT":
        return { roles: undefined, loggedIn: false, sessionToken: undefined };
      default:
        return state;
    }
  };
  
  export default user;
  