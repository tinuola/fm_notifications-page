import data from '../data/data.json' with { type: 'json' }

const NotificationsPage = {
  data() {
    return {
      notifications: data,
      statusCount: 3
    }
  },

  methods: {
    markAllAsRead() {
      this.notifications.forEach(note => {
        note.statusUnread === true ? note.statusUnread = false : ''
      })
      this.statusCount = 0
    },

  }
}

Vue.createApp(NotificationsPage).mount('#app')
