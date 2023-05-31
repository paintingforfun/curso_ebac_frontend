const btn = document.getElementById('btn');


function validaCodigo (valor1, valor2) {
    
    const v1 = Number(valor1.slice(2,3));
    const v2 = Number(valor1.slice(3,4));
    const quantidadeNecessaria = (v1 + v2);
    const quantidade = (valor2.toString()).length;

    let result = quantidade === quantidadeNecessaria;

    return result ; 

};

btn.addEventListener('click', function(e) {

let birth = document.getElementById('nascimento').value;
let code = document.getElementById('codigo').value;
let validacao = (validaCodigo(birth, code));


if (validacao == true) {
    window.alert('CONTA ATIVADA COM SUCESSO');
    
} else 
{
    e.preventDefault()
    
    const errorMessage = document.getElementById('error-message');
    const containerForm = document.getElementById('container-form');

        errorMessage.classList = "error-on";
        containerForm.classList.add("container-off");
    }    
})





