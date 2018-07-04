class MensagemView extends View{

    //este construtor é desnecessário nesse contexto, mas caso houvesse um construtor diferente da classe pai,
    //o 'super(elemento)' deveria ser utilizado para que o 'this' seja inicializado com valor.
    constructor(elemento){
        super(elemento);
    }

    template(model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }
}