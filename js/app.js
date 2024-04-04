import data from '../data/data.json' with { type: 'json' }

const NotificationsPage = {
  data() {
    return {
      notifications: data,
      unreadCount: 0
    }
  },

  methods: {
    markAllMsgsAsRead() {
      this.notifications.forEach(msg => {
        msg.statusUnread === true ? msg.statusUnread = false : ''
      })
      this.unreadCount = 0
    },
    markMsgAsRead(index) {
      const status = this.notifications[index].statusUnread

      if (status) {
        this.notifications[index].statusUnread = false
        this.unreadCount--
      }
    },
    countUnreadStatus() {
      const count = this.notifications.filter(obj => obj.statusUnread === true)
      return count.length
    }
  },

  mounted() {
    this.unreadCount = this.countUnreadStatus()    
  }
}

Vue.createApp(NotificationsPage).mount('#app')
