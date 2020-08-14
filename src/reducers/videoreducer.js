const initial = {
    videoList: []
  }
  
  export default function (state = initial, action) {
   
    switch (action.type) {
      case "SETVIDEOLIST":
        state = {
          ...state,
          videoList: action.payload,
        }
        break;
     
    }
    return state;
  }
  
  
  
  