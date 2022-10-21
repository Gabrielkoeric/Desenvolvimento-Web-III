class NegociacaoController{

    constructor(){
        const $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negiciacoes = ProxyFactory.create(
            new Negociacoes(),
            ['adiciona', 'esvazia'], model => this._negiciacoesView.update(model)
        )
        this._negociacoesView = NegociacoesView('#negociacoes');
        this._negociacoesView.update(this._negiciacoes);

        this._mensagem = ProxyFactory.create(
            new Mensagem(),
            ['texto'], model => this._mensagemView.update(model)
        );
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView('#mensagemView');
    }

    adiciona(event){
        event.preventDefault();

        this._negociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'negociação adicionada com sucesso';
        this._limparFormulario();
    }

    _limparFormulario(){
        this._inputData.value = '2020-01-01';
        this._inputQuantidade.value = 1
        this._inputValor.value = 2.0
        this._inputData.focus();
    }

    _criaNegociacao(){
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )
    }

    apaga(){
        this._negiciacoes.esvazia()
        this._texto = 'negociação apagadas';
        }

    importaNegociacoes(){
        console.log('importando negociacao');
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');

        xhr.onreadtatechange = () =>{
            if (xhr.readState == 4){
                if (xhr.status == 200){
                    console.log('obtendo as negociaçoes do servidor');
                    JSON.parse(xhr.responseText)
                    .map(Object =>new Negociacao(new Date (objeto.data), objeto.quantidade, objeto.valor))
                    .forEach(negociacao => this._negociacoes.adiciona(negociacao));
                    this._mensagem.texto = 'negociação importada com sucesso'
                }else{
                    console.log('nao foi possivel obter a negociação');
                    console.log(xhr.responseText);
                    this._mensagem.texto = 'não foi possivel importar as negociações'
                }
                
            }
            xhr.send();
        }
    }
}