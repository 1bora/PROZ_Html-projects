let pg_title = document.createElement("h1");
pg_title.innerText = "Este é um título h1 - via innerText";
pg_title.id = "titulo";

let titulo = document.querySelector("#title");
titulo.appendChild(pg_title);


let produto = document.createElement("ul");
produto.className = "item_info";

produto.insertAdjacentHTML("beforeend",`<li>Produto: TV 55 Polegadas</li>
                                        <li>Descrição: Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        <li>Valor: 999R$ </li>`);
produto.insertAdjacentHTML("beforeend",`<img src="https://media.istockphoto.com/id/613753096/pt/foto/big-led-tv-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=U6ReQooytzBsel7fv4FgYaErQB_UaoTDPgr8SnZvdTg=">`)

let product = document.querySelector("#product");
product.appendChild(produto);


