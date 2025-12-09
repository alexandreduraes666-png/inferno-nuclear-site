function login() {
    const u = document.getElementById("user").value;
    const p = document.getElementById("pass").value;

    if (u === "admin" && p === "1234") {
        document.getElementById("login-box").style.display = "none";
        document.getElementById("admin-panel").style.display = "block";
    } else {
        document.getElementById("login-error").innerHTML = "Usuário ou senha incorretos!";
    }
}

function carregarSubcategorias() {
    const cat = document.getElementById("categoria").value;
    const sub = document.getElementById("subcategoria");
    sub.innerHTML = "";

    if (cat === "vestuario") {
        sub.innerHTML += "<option>Camisas</option><option>Bonés</option><option>Shorts</option>";
    }
    if (cat === "cerveja") {
        sub.innerHTML += "<option>Cervejas</option>";
    }
    if (cat === "acessorios") {
        sub.innerHTML += "<option>Patchs</option><option>Bottons</option><option>Café</option>";
    }
}

function salvarProduto() {
    const nome = document.getElementById("nomeProduto").value;
    const categoria = document.getElementById("categoria").value;
    const sub = document.getElementById("subcategoria").value;
    const preco = document.getElementById("preco").value;
    const estoque = document.getElementById("estoque").value;
    const imgFile = document.getElementById("imgInput").files[0];

    if (!nome || !categoria || !sub || !preco || !imgFile) {
        alert("Preencha todos os campos!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
        produtos.push({
            nome: nome,
            categoria: categoria,
            subcategoria: sub,
            preco: preco,
            estoque: estoque,
            imagem: e.target.result
        });
        localStorage.setItem("produtos", JSON.stringify(produtos));
        listarProdutos();
    };
    reader.readAsDataURL(imgFile);
}

function listarProdutos() {
    const area = document.getElementById("listaProdutos");
    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    area.innerHTML = "";

    produtos.forEach((p, i) => {
        area.innerHTML += `
        <div class="produto-card">
            <img src="${p.imagem}">
            <h4>${p.nome}</h4>
            <p>R$ ${p.preco}</p>
            <small>Estoque: ${p.estoque}</small>
            <button onclick="removerProduto(${i})">Excluir</button>
        </div>`;
    });
}

function removerProduto(i) {
    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    produtos.splice(i, 1);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    listarProdutos();
}

window.onload = listarProdutos;
