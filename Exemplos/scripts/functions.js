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
        let num1 = conta.slice(0, conta.indexOf("/"-1))
        let num2 = conta.slice(conta.indexOf("/" + 1))
        num1 = parseInt(num1)
        num2 = parseInt(num2)
        valorDisplay = num1/num2
        

 
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