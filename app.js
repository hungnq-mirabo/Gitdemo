const app = Vue.createApp({
/*   createApp() {
    console.log('createApp')
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  } */
});

app.component('friend-contact', {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetail">{{ detailIsVisile ? 'Hide' : 'Show' }} details</button>
    <ul v-show="detailIsVisile">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailIsVisile: false,
      friend: {
        id: 'Manuel',
        name: 'Manuel Lorenz',
        phone: '01234 5678 991',
        email: 'manuel@localhost.com'
      }
    }
  },
  methods: {
    toggleDetail() {
      this.detailIsVisile = !this.detailIsVisile;
    }
  }
})

app.mount('#app');

/* let message = 'Hello ';

let longMessage = message + 'World!';

console.log(longMessage);

const data = {
  message: 'H123',
  longMessage: 'Hello! World!'
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + ' world!'
    }
    target.message = value;
  }
}

const proxy = new Proxy(data, handler);

proxy.longMessage = 'Hello!!!!! 123'

console.log(proxy.longMessage) */