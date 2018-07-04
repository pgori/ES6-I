class NegociacoesView extends View{
    constructor(elemento){
        super(elemento);
    }

    template(model){
        return `<table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
        ${model.negociacoes.map(n => {
            return `
                <tr>
                    <td>${DateHelper.dataParaTexto(n.data)}</td>
                    <td>${n.quantidade}</td>
                    <td>${n.valor}</td>
                    <td>${n.volume}</td>
                 </tr>
            `
        }).join('')}
        </tbody>

        <tfoot>
            <td colspan="3"></td>
            <td>
                ${model.negociacoes.reduce((total,n) => total += n.volume, 0.0)}
            </td>    
        </tfoot>
    </table>`;
    //o método reduce na tag tfoot é utilizado para lidar com o problema de ter que retornar um único valor 
    //nos comandos '$', de maneira funcional, ao invés de usar IIFE(Immediately Invoked Function Expression)
    /*${
        (function() {

            let total = 0;
            model.negociacoes.forEach(n => total+= n.volume);
            return total;
      })()
     }*/
    }
}