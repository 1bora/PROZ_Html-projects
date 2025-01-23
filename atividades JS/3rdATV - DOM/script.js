let elemento_h1 = document.getElementById("titulo");
let elemento_ul = document.querySelector("ul");
let elemento_a = document.querySelector("a");
let elemento_ol = document.getElementById("lista-ordenada");


elemento_h1.innerText = "Título da página via innerText";
elemento_a.innerText = "Site da PROZ :D - via innerText";

elemento_ul.innerHTML = `<li>Item Simples 1</li>
                         <li>Item Simples 2</li>
                         <li>Item Simples 3</li>`;

elemento_ol.innerHTML = `<li> <a href="https://thispersondoesnotexist.com">Link 1</a></li>
                         <li> <a href="https://www.google.com">Link 2</a></li>
                         <li> <a href="https://www.youtube.com">Link 3</a></li>`;