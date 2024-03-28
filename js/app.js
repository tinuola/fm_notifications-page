console.log('Vue!')
import data from '../data/data.json' with { type: 'json' }

const NotificationsPage = {
  data() {
    return {
      notifications: data,
    }
  },
}

Vue.createApp(NotificationsPage).mount('#app')
