var btn = document.createElement("BUTTON");
        btn.innerHTML = "trocar de cor";
        document.body.appendChild(btn);

var h2 = document.createElement("h2");
        h2.innerHTML = "prova 01 web III";
        document.body.appendChild(h2);

btn.onclick = function(){h2.style.color = "black";}