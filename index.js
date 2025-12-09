function carregarProdutosLoja() {
    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    let area = document.getElementById("listaLoja");
    area.innerHTML = "";

    produtos.forEach((p, i) => {
        area.innerHTML += `
        <div class="product-card">
            <img src="${p.imagem}" alt="${p.nome}">
            <h3>${p.nome}</h3>
            <p class="price">R$ ${p.preco}</p>
            <a href="product.html?id=${i}">
                <button>Comprar</button>
            </a>
        </div>`;
    });

    if (produtos.length === 0) {
        area.innerHTML = "<p style='text-align:center;'>Nenhum produto cadastrado ainda.</p>";
    }
}

carregarProdutosLoja();
