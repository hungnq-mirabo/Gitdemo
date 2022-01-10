const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: '',
      buttonLabel: 'Show list',
      listIsVisible: true
    };
  },

  methods: {

    addTask() {
      if(this.enteredTask === '') {
        alert("Please input task")
      } else {
        this.tasks.push(this.enteredTask)
      }
    },

    resetGoals() {
      this.tasks = [];
      this.enteredTask = '';
    },

    removeTask(index) {
      this.tasks.splice(index, 1)
    },

    toggleTasklist() {
      this.listIsVisible = !this.listIsVisible;
      this.buttonLabel = this.listIsVisible ? "Show list" : "Hide list";
    }

  }
});

app.mount('#user-tasks');
