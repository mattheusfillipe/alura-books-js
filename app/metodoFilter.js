const btnFiltro = document.querySelectorAll('.btn')

btnFiltro.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria === 'disponivel' ? filtroDisponiveis() : filtroCategoria(categoria)
    exibirLivros(livrosFiltrados)

    if (categoria === 'disponivel') {
        const valorTotal = calcularValorTotal(livrosFiltrados)
        elementoValorTotal.innerHTML = `
        <div class="livros__disponiveis">
          <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
        `
    }
}

function filtroCategoria(categoria) {
    return livros.filter(livro => livro.categoria === categoria)
}

function filtroDisponiveis() {
    return livros.filter(livro => livro.quantidade > 0)
}

