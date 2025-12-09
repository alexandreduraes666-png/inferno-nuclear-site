const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
const p = produtos[id];
const area = document.getElementById("produto-area");

if (!p) {
    area.innerHTML = "<h2>Produto não encontrado.</h2>";
} else {
    let html = `
        <img src="${p.imagem}" class="produto-img" alt="${p.nome}">
        <div class="produto-info">
            <h1>${p.nome}</h1>
            <p class="preco-prod">R$ ${p.preco}</p>
    `;

    if (p.categoria === "vestuario") {
        html += `
            <h3>Tamanhos</h3>
            <div class="tamanhos">
                <label>P</label>
                <label>M</label>
                <label>G</label>
                <label>GG</label>
                <label>XGG</label>
            </div>
        `;
    }

    html += `</div>`;
    area.innerHTML = html;
}
