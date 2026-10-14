const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

for (let j = 0; j < botoes.length; j++) {
botoes[j].classList.remove("ativo");
textos[j].classList.remove("ativo");
        }

botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
    };
}

const contadores = Document.querySelectorAll(".contador")
const tempoObjetivo1 = new Dat("2026-10-30T00:00:00")

let tempoAtual = new Dat();

contadores[0]. textContent = tempoObjetivo1 - tempoAtual;