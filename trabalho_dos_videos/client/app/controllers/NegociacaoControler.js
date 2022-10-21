class NegociacaoController{

    constructor(){
        const $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this.negiciacoes = new Negociacoes(model => this._negiciacoesView.update(model));
        this._negociacoesView = NegociacoesView('#negociacoes');
        this._negociacoesView = update(this._negociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView('#mensagemView');
    }

    adiciona(event){
        event.preventDefault();

        this._negociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
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
        this._negociacoesView.update(this._negiciacoes)
        this._texto = 'negociação apagadas';
        this._mensagemView.update(this._mensagem);
    }
}