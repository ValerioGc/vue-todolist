var container = new Vue({
    el:'#container',
    data: {
        arrList: [
            {
                text: 'ripassare vue',
                done: false
            },
            {
                text: 'ripassare html',
                done: false
            },
            {
                text: 'ripassare css',
                done: true
            }
        ]
    },
    methods : {
        changeStatus (index) {
            if (this.arrList[index].done) {
                this.arrList[index].done = false;
            } else {
                this.arrList[index].done = true;
            }
        }
    }
})
