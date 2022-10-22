class NegociacaoController{

    constructor(){
        const $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");


        this._negiciacoes = new Bind(new Negociacoes(), new NegociacoesView('#negociacoes'), 'adiciona', 'esvazia');
        this._service = new NegociacaoService();
        this._mensagem = new Bind (new Mensagem(), new MensagemView('#mensagemView'), ['texto']);
    }

    adiciona(event){
        try{
        event.preventDefault();

        this._negociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'negociação adicionada com sucesso';
        this._limparFormulario();
    }catch(err){
        console.log(err);
        if (err instanceof DataInvalidaException){
            this._mensagem.texto = err.mensage;
        }else{
            this._mensagem.texto = 
            'um erro não esperado aconteceu. entre em contato com o suporte';
        }
        
    }
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
        this._service.obterNegociacaoDaSemana(err, negociacoes)=>{
            if (err){
                this._mensagem.texto = 'nao foi possivel obter as negociações da semana.'
            }
            negociacoes.forEach(Negociacao => this._negiciacoes.adiciona(negociacao));
            this._mensagem.texto = 'negociação importadas com sucesso';
        };
      
    }
}