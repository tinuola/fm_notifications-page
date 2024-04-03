import data from '../data/data.json' with { type: 'json' }

const NotificationsPage = {
  data() {
    return {
      notifications: data,
      statusCount: 0
    }
  },

  methods: {
    markAllMsgsAsRead() {
      this.notifications.forEach(note => {
        note.statusUnread === true ? note.statusUnread = false : ''
      })
      this.statusCount = 0
    },
    markMsgAsRead(index) {
      const status = this.notifications[index].statusUnread

      if (status) {
        this.notifications[index].statusUnread = false
        this.statusCount--
      }
    },
    countStatus() {
      const count = this.notifications.filter(obj => obj.statusUnread === true)
      return count.length
    }
  },

  mounted() {
    this.statusCount = this.countStatus()    
  }
}

Vue.createApp(NotificationsPage).mount('#app')
