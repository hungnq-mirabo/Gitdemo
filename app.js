const app = Vue.createApp({
    data() {
        return {
            myName: 'Nguyen Quoc Hung',
            myAge: 32,
            imgLink: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg'
        };
    },

    methods: {
        myAgeAfter5Year() {
            return this.myAge + 5;
        }
    }
});

app.mount('#user-goal');