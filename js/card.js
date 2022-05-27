/*
let cad=""
for(let i=0; i<fotos.length; i++){
   cad=cad+ `<img src="${fotos[i]}" alt="foto">`
}
document.getElementById("fotos").innerHTML=cad
*/


var digimon=`
<div class="container">
`
    for(let i=0; i< data.length ; i++){
      digimon += 
        `
        <div class="tarjeta">
            <img class="imagen" src="${data[i].img}" alt="foto">
            <div class="cuerpo">
                <h4>Nombre: ${data[i].name}</h4>
                <p>Nivel: ${data[i].level}</p>
            </div>
        </div>
       `
    }       
digimon+=`
    </div>
`    
const digimones = digimon
console.log(digimon)
const list_digimons = document.getElementById("list")
const pagination = document.getElementById("paginacion")

let current_page = 1;
let rows = 21;

function DisplayList (items,wrapper, rows_per_page, page){
    wrapper.innerHTML = "";
    page--;

    let start = rows_per_page*page;
    let end = start + rows_per_page
    let paginatedItems = items.slice(start,end);
    for(let i = 0; i< paginatedItems.length + rows_per_page; i++){
        let item = items[i]

        let item_element = document.createElement("div")
        item_element.classList.add("item");
        item_element.innerText = item;
        wrapper.appendChild(item_element)
    }
}
function setupPagination(items,wrapper,rows_per_page) {
    wrapper.innerHTML = "";
    let page_count = Math.ceil(items.length / rows_per_page)
    for(let i = 1; i< page_count +1; i++){
        let btn = paginationButton(i, items)
        wrapper.appendChild(btn)
    }
}
function paginationButton(page, items){
    let button = document.createElement("button");
    button.innerText = page;
    if(current_page == page) button.classList.add("activa");
    button.addEventListener("click", function(){
        current_page = page;
        DisplayList(items, list_digimons, rows,current_page)
        let current_btn = document.querySelector(".pagenumbers button.active")
        current_btn.classList.remove("active")
        button.classList.add("active")
    })
    return button
}
DisplayList(digimones, list_digimons, rows,current_page)
setupPagination(digimones, pagination_element, rows)