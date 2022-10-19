var date = document.createElement("h1");
        date.setAttribute("id","date");


        document.body.appendChild(date); 
        function mudarSegundos()
        {
            var x = "";
            var y = new Date();
            x = y.toDateString() +' '+y.toLocaleTimeString() ;
            document.getElementById("date").innerHTML = x;
        }

        setInterval(mudarSegundos, 1000);