const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoencriptado = encriptar(textArea.value)
    mensaje.value = textoencriptado;
    textArea.value="";
    mensaje.style.backgroundImage = "none"
    

}


function encriptar(stringEncriptado){
    let matrizCodigo=[[ "e","enter"],["i" , "imes"],["a" , "ai"],["o" , "ober"],["u" , "ufat"]];
      //stringEncriptado = stringEncriptado.tolowerCase();
    for(let i = 0; i< matrizCodigo.length; i ++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado= stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }


    }
    return stringEncriptado;



}


function btnDesencriptar(){
    const textoencriptado=desencriptar(textArea.value)
    mensaje.value=textoencriptado;
    textArea.value=""

}

function desencriptar(StringDesencriptado){
    let matrizCodigo=[[ "e","enter"],["i" , "ines"],["a" , "ai"],["o" , "ober"],["u" , "ufat"]];
   // StringDesencriptado=StringDesencriptado.tolowerCase()
    for(let i = 0; i< matrizCodigo.length; i ++){
        if (StringDesencriptado.includes(matrizCodigo[i][1])){
        StringDesencriptado= StringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }


    }
    return StringDesencriptado;



}

function copiar() {
    var text = document.getElementById("mensaje").value;
 
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });
}



