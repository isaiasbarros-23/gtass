let nome= document.querySelector(".nome")
let pessoa= document.querySelector(".pessoa")

function escolherpessoa() {
    nome.innerHTML = "Franklin";
    pessoa.src = "img/franklin.png";
    pessoa.style.width = "500px";
    pessoa.style.height = "800px";
    pessoa.style.objectFit = "contain";
        nome.style.color = "#320636";

}

function escolhermichael() {
    nome.innerHTML = "Michael";
    pessoa.src = "img/michael.png";
    pessoa.style.width = "";
    pessoa.style.height = "";
    nome.style.color = "white";

}

function escolhertrevor() {
    nome.innerHTML = "Trevor";
    pessoa.src = "img/trevor.webp";
    pessoa.style.width = "500px";
    pessoa.style.height = "800px";
    pessoa.style.objectFit = "contain";
    nome.style.color = "yellow";
}

function escolherfoto(event) {
    const arquivo = event.target.files[0];
    if (!arquivo) return;

    pessoa.src = URL.createObjectURL(arquivo);
    nome.innerHTML = "Você";
    pessoa.style.width = "500px";
    pessoa.style.height = "1000px";
    pessoa.style.objectFit = "contain";
}