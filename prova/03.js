        function calcularFatorial() {
            var fatorial = parseInt(document.getElementById("numero").value);
            
            if (!Number.isInteger(fatorial) || fatorial < 0) {
                document.getElementById("resultado").innerHTML = "Não existe fatorial de um número não natural";
                return
            }
            
            if (fatorial === 0 || fatorial === 1) {
                document.getElementById("resultado").innerHTML = "1";
                return
            }
            
            var resultado = fatorial;
            var primeiroMultipicador = fatorial - 1;

            for (var i = primeiroMultipicador; i > 1; i--) {
                resultado *= i;
            }

            document.getElementById("resultado").innerHTML = resultado;
        }