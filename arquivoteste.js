class Errocometido extends Error {
    constructor(mensage) {
        super(mensage);
        this.name = "Erro: está faltando adicionar os atributos";
    }
}

class Produto {
    constructor(nome, dataCadastro, descricao, preco) {
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao;
        this.preco = preco;
    }

    mostrarProduto() {
        try {
            return this.atributos()
        } catch (erro) {
            console.log(erro)
        }
    }

    atributos() {
        if (this.nome != "" && this.dataCadastro != "" && this.descricao != "" && this.preco != "") {
            return `
          <div class="produto">
              <h2>${this.nome}</h2>
              <p>${this.descricao}</p>
              <div class="preco">R$${this.preco},00</div>
              <div class="cadastro">Cadastrado em: ${this.dataCadastro}</div>
          </div>
              `
        } else {
            throw new Errocometido("Está faltando inserir alguma das informações necessárias para elaborar o produto :(")
        }
    }

}


class destaque extends Produto {
    constructor(nome, dataCadastro, descricao, preco, imagem) {
        super(nome, dataCadastro, descricao, preco)
        this.imagem = imagem
    }

    mostrarDestaque() {
        try {
            return this.imgdestaque()
        } catch (erro) {
            console.log(erro)
        }
    }

    imgdestaque() {
        if (this.nome != "" && this.dataCadastro != "" && this.descricao != "" && this.preco != "" && this.imagem != "") {
            return `
          <div class="pDestaque">
            <img class="imgDestaque" src="${this.imagem}"></img>
            <h2>${this.nome}</h2>
            <p>${this.descricao}</p>
            <div class="precoDestaque">R$${this.preco},00</div>
            <div class="cadastroDestaque">Cadastrado em: ${this.dataCadastro}</div>
          </div>
              `
        } else {
            throw new Errocometido("Está faltando inserir alguma das informações necessárias para elaborar o produto :(")
        }
    }

}