const initial = {
    searchText: []
  }
  
  export default function (state = initial, action) {
   
    switch (action.type) {
      case "SETSEARCHTEXT":
        state = {
          ...state,
          searchText: action.payload,
        }
        break;
     
    }
    return state;
  }
  
  
  
  