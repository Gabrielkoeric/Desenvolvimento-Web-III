calcular(5,12,'*');

        function calcular(x, y, operador) {
            if(operador === '+') {
                result= x + y;
            } else if (operador === '-') {
                result= x - y;
            } else if (operador === '*') {
                result= x * y;
            } else if (operador === '/') {
                result= x / y;
            } 
            console.log(result)
        }