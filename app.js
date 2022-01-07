/* const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal() {
    const enteredValue =  inputEl.value;
    const listItemEl = document.createElement('li');
    if (enteredValue != '') {
        listItemEl.textContent = enteredValue;
        listEl.appendChild(listItemEl);
        inputEl.value = '';
    }
};

buttonEl.addEventListener('click', addGoal); */

const app = Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },

    methods: {
        addGoal() {

            console.log(this.enteredValue)

            if (this.enteredValue != '') {
                this.goals.push(this.enteredValue)
                this.enteredValue = '';
                console.log(this.enteredValue)
            }

        }
    },
}).mount('#app');