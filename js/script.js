// const userInput = [];

const myApp = new Vue({
    el: "#root",
    data: {
        userInput: [],
        message: ''
    },
    methods: {
        addText: function() {
            if (this.message === "") {
                alert('Inserisci un messaggio!')
            } else {
                this.userInput.push(this.message);
                this.message = ''
            }

        },
        removeText: function(delIndex) {
            this.userInput.splice(delIndex, 1)
        }
    }

})