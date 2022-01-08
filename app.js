const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      num: 10,
      name: '',
      confirmName: '',
      alertMsg: 'This is an alert message!'
    };
  },
  methods: {
    confirmInput(event) {
      this.confirmName = event.target.value;
    },
    showAlert() {
      alert(this.alertMsg);
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
