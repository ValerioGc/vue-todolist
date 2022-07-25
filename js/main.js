var container = new Vue({
    el:'#container',
    data: {
        newT: {text: '', done: false},
        arrList: [
            {
                text: 'ripassare vue',
                done: false
            },
            {
                text: 'ripassare JavaScript',
                done: true
            },
            {
                text: 'ripassare HTML',
                done: false
            },
            {
                text: 'ripassare CSS',
                done: true
            }
        ]
    },
    methods : {
        // Funzioni sostituite con ternarie/freccia
        submitNew() {
            this.arrList.push(this.newT);
            this.newT = '';
        },
        changeStatus (index) {
            if (this.arrList[index].done) {
                this.arrList[index].done = false;
            } else {
                this.arrList[index].done = true;
            }
        },
        removeToDo (index) {
            this.arrList.splice(this.arrList[index], 1)
        }
    }
})