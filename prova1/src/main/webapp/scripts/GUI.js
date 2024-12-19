
class GUI {
    constructor() {
        this.index = 0;
        this.number = 0;
    }
    addNumber(num) {
        if (this.index <= 3) {
            let spans = document.querySelectorAll("h2 span");
            spans[this.index++].textContent = num;
        }
    }
    correct() {
        let spans = document.querySelectorAll("h2 span");
        for (let span of spans) {
            span.innerHTML = "&nbsp;";
        }
        this.index = 0;
        this.writeMessage("");
    }
    writeMessage(msg) {
        let p = document.querySelector("#name");
        p.textContent = msg;
    }
    go(evt) {
        let input = evt.currentTarget;
        let h2 = document.querySelector("h2");
        switch (input.value) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addNumber(input.value);
                let text = h2.textContent.split(' ').join('').trimEnd();
                this.number = parseInt(text);
                this.writeMessage("");
                if (text.length === 2) {
                    let p = verificaPartido(this.number)
                    if (p == null) {
                        this.writeMessage("Partido não existe")
                    } else {
                        this.writeMessage(`${partidos.nomePartido}`)
                    }

                }
                if (text.length === 4) {
                    let c = verificaCandidato(this.number)
                    if (c == null) {
                        this.writeMessage("Candidato não inscrito")
                    } else {
                        this.writeMessage(`${candidato.nomeCandidato}`)
                    }
                }
                break;
            case 'Branco':
                this.writeMessage("Branco");
                this.number = 96;
                break;
            case 'Corrige':
                this.correct();
                break;
            case 'Confirma':
                this.registerEvents(false);

                this.writeMessage("Vote computed successfully!");
                setTimeout(() => {
                    this.correct();
                    this.registerEvents(true);
                }, 2000);
                break;
        }
    }
    registerEvents(reg) {
        let botoes = document.querySelectorAll("input:enabled[type='button']");
        botoes.forEach(e => reg ? e.onclick = this.go.bind(this) : e.onclick = null);
    }
    async init() {
        this.registerEvents(true);

    }
}

const verificaPartido = function (np) {
    let xhr = new XMLHttpRequest()
    xhr.open("get", `servidor/eleicao/verificapartido/${np}`, false)
    xhr.send()
    if (xhr.status != 200) {
        return null;
    }
    return JSON.parse(xhr.responseText)
}

const verificaCandidato = async function (nc) {
    try {
        const response = await fetch(`servidor/eleicao/verificacandidato/${nc}`, {
            method: "get"
        });

        if (response.status != 200) {
            return null
        } else {
            return await response.json()
        }
    } catch (e) {
        return null
    }
}

let bb = new GUI();
bb.init();