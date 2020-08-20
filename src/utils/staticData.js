const no_avatar = 'https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png'

export const notificationData =
  {
    notification:[{
      _id:"4512-ck23",
      avatar:require("../assets/icons/user.png"),
      content:"Joined Chat",
      time:"5 mins ago",
      username:"Happy Hour"
    },
    {
      _id:"4512-ck23",
      avatar:require("../assets/icons/user.png"),
      content:"Joined Chat",
      time:"5 mins ago",
      username:"Happy Hour"
    },
    {
      _id:"4512-ck23",
      avatar:require("../assets/icons/user.png"),
      content:"Joined Chat",
      time:"5 mins ago",
      username:"Happy Hour"
    }]
  }
  export const messageData =
  {
    messages:[{
      _id:"234-443rt",
      avatar:require("../assets/icons/user.png"),
      name:"hunj",
      content:"Last message",
      time:"Wednesday,Jan 3,2020",
      count:12
    },
    {
      _id:"234-q223",
      avatar:require("../assets/icons/user.png"),
      name:"wrer",
      content:"Last message",
      time:"Wednesday,Jan 3,2020",
      count:2
    },{
      _id:"234-sdcf",
      avatar:require("../assets/icons/user.png"),
      name:"fgyh",
      content:"Last message",
      time:"Wednesday,Jan 3,2020",
      count:3
    }]
  }
export const friendsData =
  {
    friends:[{
      _id:"234-443rt",
      avatar:require("../assets/icons/user.png"),
      name:"hunj",
      status:0,
      type:"person",
      
  },
  {
    _id:"234-443rt",
    avatar:require("../assets/icons/user.png"),
    name:"efrefr",
    status:1,
    type:"person",
    
},
{
  _id:"234-443rt",
  avatar:require("../assets/icons/user.png"),
  name:"trgtgse",
  status:1,
  type:"group",
  
},
{
  _id:"234-443rt",
  avatar:require("../assets/icons/user.png"),
  name:"avtrgtr",
  status:0,
  type:"person",
  
},
{
  _id:"234-443rt",
  avatar:require("../assets/icons/user.png"),
  name:"gstertrt",
  status:0,
  type:"person",
  
},
]}
export const messagesData = [
  {
    messages: [{
      _id: "735709a3-c0af-475f-86e5-399246657514",
      createdAt: "2020-07-23T11:00:00Z",
      text: "I'm fine. Thank you!",
      isRead: false,
      user: {
        _id: 2,
        avatar: no_avatar,
        name: "Ray"
      },
    }, {
      _id: "6c5daa19-5f83-43b4-b9ae-78d4d699930f",
      createdAt: "2020-07-23T10:31:00Z",
      text: "Hi Ray, how are you?",
      isRead: true,
      user: {
        _id: 14401,
        avatar: no_avatar,
        name: "TonyNUS"
      },
    }, {
      _id: "525c928a-b7a4-427a-81f5-85085a79dbba",
      createdAt: "2020-07-23T10:30:00Z",
      text: "Hi Tony, i'm Ray.",
      isRead: true,
      user: {
        _id: 2,
        avatar: no_avatar,
        name: "Ray"
      },
    }],
    participants: [{
      avatar: no_avatar,
      deletedAt: "",
      name: "TonyNUS",
      typing: false,
      userId: 14401
    }, {
      avatar: no_avatar,
      deletedAt: "",
      name: "Ray",
      typing: false,
      userId: 2
    }]
  },
  {
    messages: [{
      _id: "735709a3-c0af-475f-86e5-399246657514",
      createdAt: "2020-07-23T11:00:00Z",
      text: "Okay",
      isRead: true,
      user: {
        _id: 3,
        avatar: no_avatar,
        name: "Tom"
      },
    }, {
      _id: "6c5daa19-5f83-43b4-b9ae-78d4d699930f",
      createdAt: "2020-07-23T10:31:00Z",
      text: "Hi Tom, how are you?",
      isRead: true,
      user: {
        _id: 14401,
        avatar: no_avatar,
        name: "TonyNUS"
      },
    }, {
      _id: "525c928a-b7a4-427a-81f5-85085a79dbba",
      createdAt: "2020-07-23T10:30:00Z",
      text: "Hi Tony, i'm Tom.",
      isRead: true,
      user: {
        _id: 3,
        avatar: no_avatar,
        name: "Tom"
      },
    }],
    participants: [{
      avatar: no_avatar,
      deletedAt: "",
      name: "TonyNUS",
      typing: false,
      userId: 14401
    }, {
      avatar: no_avatar,
      deletedAt: "",
      name: "Tom",
      typing: false,
      userId: 3
    }]
  }
]