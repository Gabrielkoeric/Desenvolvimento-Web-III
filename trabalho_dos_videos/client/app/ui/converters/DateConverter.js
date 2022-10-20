class DateConverter{

    constructor(){
        throw new Error('esta classe n pode ser instanciada');
    }
    static paraTexto(data){
        //return data.getDate() + '/' +  (data.getMonth() + 1) + '/' + data.getFullYear();
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;

    static paraData(texto){
        if(!/^\d{4}-\d{2}- \d{2}$/.test(texto)) throw new Error('deve estar em outro formato')
        return new Date(...texto.split('-').map((item, indice)=> item - (indice % 2)));
    }
}