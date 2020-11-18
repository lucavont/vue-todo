// const userInput = [];

const myApp = new Vue({
    el: "#root",
    data: {
        userInput: [],
        message: ''
    },
    methods: {
        addText: function() {
            this.userInput.push(this.message)
        },
        removeText: function(delIndex) {
            this.userInput.splice(delIndex, 1)
        }
    }

})