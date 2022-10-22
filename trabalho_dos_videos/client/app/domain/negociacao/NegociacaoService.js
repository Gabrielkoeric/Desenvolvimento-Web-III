class NegociacaoService{
    obterNegociacaoDaSemana(callback){
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');

        xhr.onreadtatechange = () =>{
            if (xhr.readState == 4){
                if (xhr.status == 200){
                    console.log('obtendo as negociaçoes do servidor');
                    const negociacoes = JSON.parse(xhr.responseText)
                    .map(Object =>new Negociacao(new Date (objeto.data), objeto.quantidade, objeto.valor))
                    callback(null, negociacoes);
                }else{
                    console.log(xhr.responseText);
                    callback('não foi possivel obter as negociaçoes da semana', null)
                }
                
            }
            xhr.send();
        }
    }
}