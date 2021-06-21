// 2. create user reducer function
// {type: 'LOGGED_IN_USER', payload: {name: 'Ryan', role: 'Seller'}}
export const authReducer = (state = {name: "Roshan", role:"Seller"}, action) => {
    switch (action.type) {
      case "LOGGED_IN_USER":
        return { ...state, ...action.payload }
      case "LOGOUT":
        return action.payload;
      default:
        return state;
    }
}
  
