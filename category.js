const cat = window.CATEGORIA_PAGINA;
const lista = document.getElementById("listaCategoria");
const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

function renderCategoria() {
    if (!lista) return;
    lista.innerHTML = "";

    const filtrados = produtos.filter(p => p.categoria === cat);

    filtrados.forEach((p, i) => {
        const index = produtos.indexOf(p); // para linkar com ID correto
        lista.innerHTML += `
        <div class="product-card">
            <img src="${p.imagem}" alt="${p.nome}">
            <h3>${p.nome}</h3>
            <p class="price">R$ ${p.preco}</p>
            <a href="product.html?id=${index}">
                <button>Comprar</button>
            </a>
        </div>`;
    });

    if (filtrados.length === 0) {
        lista.innerHTML = "<p style='text-align:center;'>Nenhum produto nessa categoria ainda.</p>";
    }
}

renderCategoria();
