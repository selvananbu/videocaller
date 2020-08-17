export const setGroupList = (value) => {
  return{
    type: "SETGROUPLIST",
    payload: value
  }
};

export const setVideoList = (value) => {
  return{
    type: "SETVIDEOLIST",
    payload: value
  }
};

export const setUserData = (value) => {
  return{
    type: "USERDATA",
    payload: value
  }
};