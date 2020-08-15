const no_avatar = 'https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png'

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