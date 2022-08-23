document.addEventListener("DOMContentLoaded", function () {

    var tela = document.getElementById("tela");

    //Array de elementos que receber uma listener
    var listenerBtn = [];

    //teclas adicionais do teclado
    var btnResultado = document.getElementById("resultado");
    var btnLimparTela = document.getElementById("limparTela");
    
    //teclas dos operadores
    listenerBtn.push(document.getElementById("soma"));
    listenerBtn.push(document.getElementById("subtracao"));
    listenerBtn.push(document.getElementById("divisao"));
    listenerBtn.push(document.getElementById("multiplicacao"));

    //teclas númericas da calculadora
    listenerBtn.push(document.getElementById("num0"));
    listenerBtn.push(document.getElementById("num1"));
    listenerBtn.push(document.getElementById("num2"));
    listenerBtn.push(document.getElementById("num3"));
    listenerBtn.push(document.getElementById("num4"));
    listenerBtn.push(document.getElementById("num5"));
    listenerBtn.push(document.getElementById("num6"));
    listenerBtn.push(document.getElementById("num7"));
    listenerBtn.push(document.getElementById("num8"));
    listenerBtn.push(document.getElementById("num9"));

    //Adicionando evento de click
    for (var i = 0; i < listenerBtn.length; i++) {
        listenerBtn[i].addEventListener("click", passarValorTela);
    }

    btnResultado.onclick = function () {
        verificarResulatado();
    }

    function verificarResulatado() {
        try {
            var aux = tela.value.substring(tela.value.length - 1, tela.value.length);
            if (verificarOperador(aux)) {
            }

            var valorCalculado = eval(tela.value);
            if (valorCalculado || valorCalculado == "0") {
                tela.value = valorCalculado;
            } else {
                throw "erro";
            }
        } catch (e) {
            console.error(e);
        }
    }

    function passarValorTela() {

        if (verificarOperador(this.value)) {
            var aux = tela.value.substring(tela.value.length - 1, tela.value.length);
        }
        
        if (this.value) {
            tela.value += this.value;
        }

    }

    btnLimparTela.onclick = function () {
        tela.value = "";
    }

    function verificarOperador(valor) {
        switch (valor) {
            case "+":
                return true;
            case "-":
                return true;
            case "*":
                return true;
            case "/":
                return true;

            default:
                return false;
        }
    }

});
