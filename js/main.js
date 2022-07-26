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
                text: 'ripassare javacript',
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
    // Funzione controllo newT
        subM () {
            let control = null;
            if (this.newT.text == '') {
                control = false
            } else {
                control = true;
                //this.$refs.subBtn.focus(); // focus inizia appena viene inserito un carattere
            }
            return control;
        },
        submitNew() {
            if ((this.newT.text == '') || (!isNaN(this.newT.text))) {
                alert('inserisci il titolo della nota')
            } else {
                let toDo = {
                    text: this.newT.text,
                    done: this.newT.done
                }
                this.arrList.push(toDo);
                this.newT.text = ' ';
            }
        },
    // Funzioni sostituite con ternarie/freccia
        changeStatus (index) {
            if (this.arrList[index].done) {
                this.arrList[index].done = false;
            } else {
                this.arrList[index].done = true;
            }
        },
        removeToDo (index) {
            this.arrList.splice(index, 1)
        }
    }
})