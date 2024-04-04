const data = [
  {
    msgId: '1',
    time: '1m',
    statusUnread: true,
    msgType: 'reaction',
    msgData: {
      user: 'Mark Webber',
      userImg: 'assets/images/avatar-mark-webber.webp',
      action: 'reacted to your recent post',
      targetType: 'post',
      target: 'My first tournament today!',
    },
  },
  {
    msgId: '2',
    time: '5m',
    statusUnread: true,
    msgType: 'follow',
    msgData: {
      user: 'Angela Gray',
      userImg: 'assets/images/avatar-angela-gray.webp',
      action: 'followed you',
      target: null,
    },
  },
  {
    msgId: '3',
    time: '1 day',
    statusUnread: true,
    msgType: 'joinGroup',
    msgData: {
      user: 'Jacob Thompson',
      userImg: 'assets/images/avatar-jacob-thompson.webp',
      action: 'has joined your group',
      target: 'Chess Club',
    },
  },
  {
    msgId: '4',
    time: '5 days',
    statusUnread: false,
    msgType: 'message',
    msgData: {
      user: 'Rizky Hasanuddin',
      userImg: 'assets/images/avatar-rizky-hasanuddin.webp',
      action: 'sent you a private message',
      target:
        'Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.',
    },
  },
  {
    msgId: '5',
    time: '1 week',
    statusUnread: false,
    msgType: 'comment',
    msgData: {
      user: 'Kimberly Smith',
      userImg: 'assets/images/avatar-kimberly-smith.webp',
      action: 'commented on your picture',
      targetType: 'media',
      target: 'assets/images/image-chess.webp',
    },
  },
  {
    msgId: '6',
    time: '2 weeks',
    statusUnread: false,
    msgType: 'reaction',
    msgData: {
      user: 'Nathan Peterson',
      userImg: 'assets/images/avatar-nathan-peterson.webp',
      action: 'reacted to your recent post',
      targetType: 'post',
      target: '5 end-game strategies to increase your win rate',
    },
  },
  {
    msgId: '7',
    time: '2 weeks',
    statusUnread: false,
    msgType: 'leaveGroup',
    msgData: {
      user: 'Anna Kim',
      userImg: 'assets/images/avatar-anna-kim.webp',
      action: 'left the group',
      target: 'Chess Club',
    },
  },
  // Extra data for testing
  // {
  //   msgId: '8',
  //   time: '2 weeks',
  //   statusUnread: false,
  //   msgType: 'comment',
  //   msgData: {
  //     user: 'Kimberly Smith',
  //     userImg: 'assets/images/avatar-kimberly-smith.webp',
  //     action: 'commented on your post',
  //     targetType: null,
  //     target: 'Going on Vacation!',
  //   },
  // },
]

export default data
