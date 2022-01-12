function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            winner: null,
            round: 0,
            logMessages: []
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth > 0) {
                return this.winner = 'monster'
            }
            if (value <= 0 && this.monsterHealth <= 0) {
                return this.winner = 'draw'
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth > 0) {
                return this.winner = 'player'
            }
            if (value <= 0 && this.playerHealth <= 0) {
                return this.winner = 'draw'
            }
        }
    },
    computed: {
        isCanSpecialAttack() {
            if (this.round !== 0 && this.round % 3 === 0) {
                return false
            } else {
                return true
            }
        },
        playerHealthBar() {
            if (this.playerHealth < 0) {
                return {width: '0%'}
            }
            console.log(this.round, this.playerHealth, this.monsterHealth)
            return {width: this.playerHealth + '%'}
        },
        monsterHealthBar() {
            if (this.monsterHealth < 0) {
                return {width: '0%'}
            }
            return {width: this.monsterHealth + '%'}
        }
    },
    methods: {
        playerAttack() {
            this.round++;
            const attackValue = randomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.addLogMessages(this.round, 'Player', 'attack', attackValue)
            this.monsterAttack();
        },
        monsterAttack() {
            const attackValue = randomValue(8, 15);
            this.playerHealth -= attackValue;
            this.addLogMessages(0, 'Monster', 'attack', attackValue)
        },
        specialAttack() {
            this.round++;
            const attackValue = randomValue(10, 20);
            this.monsterHealth -= attackValue;
            this.addLogMessages(this.round, 'Player', 'attack', attackValue)
            this.monsterAttack();
        },
        playerHeal() {
            this.round++;
            const healValue = randomValue(8, 15);
            if (this.playerHealth + healValue >= 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLogMessages(this.round, 'Player', 'heal', healValue)
            this.monsterAttack();
        },
        playerSurrender() {
            this.winner = 'Monster';
        },
        newGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.round = 0
        },
        addLogMessages(round, who, action, value) {
            this.logMessages.push({
                actionRound: round,
                actionBy: who,
                actionType: action,
                actionValue: value
            })
        }
    }
})

app.mount('#game')