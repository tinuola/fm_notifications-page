const data = [
  {
    user: 'Mark Webber',
    statusUnread: true,
    img: 'assets/images/avatar-mark-webber.webp',
    time: '1m',
    actionType: 'reaction',
    action:
      'reacted to your recent post <span>My first tournament today!</span>',
  },
  {
    user: 'Angela Gray',
    statusUnread: true,
    img: 'assets/images/avatar-angela-gray.webp',
    time: '5m',
    actionType: 'follow',
    action: 'followed you',
  },
  {
    user: 'Jacob Thompson',
    statusUnread: true,
    img: 'assets/images/avatar-jacob-thompson.webp',
    time: '1 day',
    actionType: 'joinGroup',
    action: 'has joined your group <span>Chess Club</span>',
  },
  {
    user: 'Rizky Hasanuddin',
    statusUnread: false,
    img: 'assets/images/avatar-rizky-hasanuddin.webp',
    time: '5 days',
    actionType: 'message',
    action: 'sent you a private message',
    actionMsg:
      'Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.',
  },
  {
    user: 'Kimberly Smith',
    statusUnread: false,
    img: 'assets/images/avatar-kimberly-smith.webp',
    time: '1 week',
    actionType: 'comment',
    action: 'commented on your picture',
    actionMsg: 'assets/images/image-chess.webp',
  },
  {
    user: 'Nathan Peterson',
    statusUnread: false,
    img: 'assets/images/avatar-nathan-peterson.webp',
    time: '2 weeks',
    actionType: 'reaction',
    action:
      'reacted to your recent post <span>5 end-game strategies to increase your win rate</span>',
  },
  {
    user: 'Anna Kim',
    statusUnread: false,
    img: 'assets/images/avatar-anna-kim.webp',
    time: '2 weeks',
    actionType: 'leaveGroup',
    action: 'left the group <span>Chess Club</span>',
  },
]

export default data
