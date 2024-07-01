let btnOrderPreco = document.getElementById('btnOrdenarPorPreco')
btnOrderPreco.addEventListener('click', ordenarLivrosPreco)

function ordenarLivrosPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivros(livrosOrdenados)
}