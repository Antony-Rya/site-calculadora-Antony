function digitarValor(valor){
    valorDisplay = document.getElementById("display");

    if(valorDisplay.value == 0){
        valorDisplay.value = valor;
    } else {
        valorDisplay.value += valor;
    }
}
function imprimirMsg(texto){
    alert('Vc clicou no botão ' + texto);
}

function engual(){
    let conta = valorDisplay.value
    if (valorDisplay.includes("/")){
            var numeros = conta.split("/")
            num1 = numeros[0]
            num2 = numeros[1]
            valorDisplay.value = num1/num2
    }
    elif (valorDisplay.includes("-"));{
        var numeros = conta.split("-")
            num1 = numeros[0]
            num2 = numeros[1]
            valorDisplay.value = num1-num2
    }
    elif (valorDisplay.includes("+"));{
        var numeros = conta.split("+")
            num1 = numeros[0]
            num2 = numeros[1]
            valorDisplay.value = num1+num2
    }
    elif (valorDisplay.includes("x"));{
        var numeros = conta.split("x")
            num1 = numeros[0]
            num2 = numeros[1]
            valorDisplay.value = num1*num2
    }

            

        

 
}

function zerar(){
    valorDisplay.value = "0"
}

function login(){
    const emailCorreto = "luciano@gmail.com";
    const senhaCorreta = "senha";
    
    var email = document.getElementById("email").value;
    var senha = document.getElementById("pwd").value;

    if(email == emailCorreto){        
        if(senha == senhaCorreta){

            alert("E-mail e senha corretos");
            window.location.href = "../index.html";

        } else {
            alert("Senha incorreta.");
        }

    } else {
        alert("E-mail incorreto");
    }

    /*
    if(email == emailCorreto && senha == senhaCorreta ){
        alert("E-mail e senha corretos");
    } else {
        alert("E-mail ou senha incorretos.");
    }

    alert("E-mail digitado: " + email);
    alert("Senha digitada: " + senha);
*/
}