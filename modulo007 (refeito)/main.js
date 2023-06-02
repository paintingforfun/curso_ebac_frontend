const btn = document.getElementById('btn');



function validat (v1 , v2 ) {
    const primeiro = Number(v1);
    const segundo = Number(v2);

    let outcome  = segundo > primeiro ;

    return outcome ; 

}


btn.addEventListener('click', function(e) {

    const valor1 = document.getElementById('numero-1').value;
    const valor2 = document.getElementById('numero-2').value;
    const message = document.getElementById('message');
    let result = validat(valor1, valor2)

    if (result == false) {

        e.preventDefault();
        message.className = "error";
        message.innerHTML = "<strong>Número 2</strong> deve ser maior que <strong>Número 1</strong>";
        document.querySelector('#numero-2').style.border = "2px solid red";
        document.querySelector('#numero-2').className = "num-2";






    } else
    {

        window.alert(`Número validado com sucesso!`);
        message.className = "null";
        document.querySelector('#numero-2').className = " ";
        

    }
})