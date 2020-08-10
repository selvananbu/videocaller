const initial = {
  groupList: []
}

export default function (state = initial, action) {
 
  switch (action.type) {
    case "SETGROUPLIST":
      state = {
        ...state,
        groupList: action.payload,
      }
      break;
   
  }
  return state;
}



