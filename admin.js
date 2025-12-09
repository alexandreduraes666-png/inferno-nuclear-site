function login(){let u=document.getElementById("user").value;let p=document.getElementById("pass").value;
if(u==="admin"&&p==="1234"){document.getElementById("login-box").style.display="none";
document.getElementById("admin-panel").style.display="block";}
else{document.getElementById("login-error").innerHTML="Usuário ou senha incorretos!";}}

function carregarSubcategorias(){
let cat=document.getElementById("categoria").value;
let sub=document.getElementById("subcategoria");
sub.innerHTML="";
if(cat==="vestuario"){sub.innerHTML+="<option value='camisa'>Camisas</option><option value='bone'>Bonés</option><option value='shorts'>Shorts</option>";}
if(cat==="cerveja"){sub.innerHTML+="<option value='cerveja'>Cervejas</option>";}
if(cat==="acessorios"){sub.innerHTML+="<option value='patch'>Patch</option><option value='bottons'>Bottons</option><option value='cafe'>Café</option>";}
}

function salvarProduto(){
let nome=document.getElementById("nomeProduto").value;
let categoria=document.getElementById("categoria").value;
let sub=document.getElementById("subcategoria").value;
let preco=document.getElementById("preco").value;
let estoque=document.getElementById("estoque").value;
let imgFile=document.getElementById("imgInput").files[0];
if(!nome||!categoria||!sub||!preco||!imgFile){alert("Preencha tudo!");return;}

let reader=new FileReader();
reader.onload=function(e){
let produtos=JSON.parse(localStorage.getItem("produtos"))||[];
produtos.push({nome:nome,categoria:categoria,subcategoria:sub,preco:preco,estoque:estoque,imagem:e.target.result});
localStorage.setItem("produtos",JSON.stringify(produtos));
listarProdutos();
};
reader.readAsDataURL(imgFile);
}

function listarProdutos(){
let area=document.getElementById("listaProdutos");
let produtos=JSON.parse(localStorage.getItem("produtos"))||[];
area.innerHTML="";
produtos.forEach((p,i)=>{
area.innerHTML+=`<div class="produto-card">
<img src="${p.imagem}">
<h4>${p.nome}</h4>
<p>R$ ${p.preco}</p>
<small>Estoque: ${p.estoque}</small>
<button onclick="removerProduto(${i})">Excluir</button>
</div>`;
});
}

function removerProduto(i){
let produtos=JSON.parse(localStorage.getItem("produtos"))||[];
produtos.splice(i,1);
localStorage.setItem("produtos",JSON.stringify(produtos));
listarProdutos();
}

window.onload=listarProdutos;
