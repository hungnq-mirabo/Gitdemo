const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
/*       fullName: '' */
    };
  },

  watch: {
/*     name(value) {
      if (value === '') {
        this.fullName = ''
      } else {
        this.fullName = value + ' ' + this.lastName
      }
    },

    lastName(value) {
      if (value === '') {
        this.fullName = ''
      } else {
        this.fullName = this.name + ' ' + value
      }
    } */
    counter(value) {
      if (value > 37) {
        alert('Too much');
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 1000)
      }
    }

  },
  computed: {
    fullName() {
      if (this.name === '' && this.lastName === '') {
        return ''
      }
      return this.name + ' ' + this.lastName
    }
  }, 
  methods: {
    resetInput() {
      this.name = '';
      this.lastName = '';
    },
    addFive() {
      this.counter = this.counter + 5;
    },
    addOne() {
      this.counter = this.counter + 1;
      // this.counter--;
    }
  }
});

app.mount('#events');
