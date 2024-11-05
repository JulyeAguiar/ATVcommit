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


const produto1 = new Produto("Tapete de Vaquinha", "", "Nosso tapete de vaquinha é o destaque perfeito para qualquer cômodo que ofereça mais do que apenas um aperto sob os pés", 38);
const id1 = document.getElementById("produto1");
id1.insertAdjacentHTML('afterbegin',produto1.mostrarProduto())
console.log(produto1)

const produto2 = new Produto("Luminária de sapinho", "02/12/2022", "Caro Ebbo, você ilumina nosso dia (e noite) com sua personalidade brilhante.", 22);
const id2 = document.getElementById("produto2");
id2.insertAdjacentHTML('afterbegin',produto2.mostrarProduto())
console.log(produto2)

const produto3 = new Produto("Vaso de planta de vaquinha", "05/11/2022", "Caro Ebbo, você ilumina nosso dia (e noite) com sua personalidade brilhante.", 18);
const id3 = document.getElementById("produto3");
id3.insertAdjacentHTML('afterbegin',produto3.mostrarProduto())
console.log(produto3)

const imgDestaque = new destaque("Luminária de Vaquinha", "20/12/2022", "Caro Ebbo, você ilumina nosso dia (e noite) com sua personalidade brilhante.", 20, "./img/Chuck 70 Plus Preto.jpg");
const id4 = document.getElementById("produtoDestaque");
id4.insertAdjacentHTML('afterbegin',imgDestaque.mostrarDestaque())
console.log(imgDestaque)

const imgDestaque1 = new destaque("Luminária de Vaquinha", "20/12/2022", "Caro Ebbo, você ilumina nosso dia (e noite) com sua personalidade brilhante.", 20, "./img/Chuck 70 Plus Pride Branco.jpg");
const id5 = document.getElementById("produtoDestaque2");
id4.insertAdjacentHTML('afterbegin',imgDestaque1.mostrarDestaque())
console.log(imgDestaque)

const imgDestaque2 = new destaque("Luminária de Vaquinha", "20/12/2022", "Caro Ebbo, você ilumina nosso dia (e noite) com sua personalidade brilhante.", 20, "./img/Chuck 70 Prism Glitter Amarelo.jpg");
const id6 = document.getElementById("produtoDestaque3");
id4.insertAdjacentHTML('afterbegin',imgDestaque2.mostrarDestaque())
console.log(imgDestaque)