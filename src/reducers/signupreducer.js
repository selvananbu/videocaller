const initial = {
    userData: {}
  }
  
  export default function (state = initial, action) {
   
    switch (action.type) {
      case "USERDATA":
        state = {
          ...state,
          userData: action.payload,
        }
        break;
     
    }
    return state;
  }
  
  
  
  