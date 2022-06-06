
var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copiar");
const textoIngresado = document.querySelector("#texto-ingresado");
const nuevoTexto = document.querySelector("#resultado");


botonEncriptar.addEventListener("click",function(){
    const textoEncriptado = encriptar(textoIngresado.value);
    nuevoTexto.value = textoEncriptado;
});

botonDesencriptar.addEventListener("click",function(){
    const textoDesencriptado = desencriptar(textoIngresado.value);
    nuevoTexto.value = textoDesencriptado;
});

botonCopiar.addEventListener("click",copiarTexto);

function encriptar(parametro) {
    var caracteres = document.querySelector("#texto-ingresado").value;
    if(caracteres.length == 0){
        document.getElementById("sin-texto").classList.remove("invisible");
        alert("no ha ingresado ningun texto");
    
    }else{
        if(validarMinusculas(caracteres)=="false"){
            document.getElementById("sin-texto").classList.remove("invisible");
            alert("Solo se permite ingresar letras minusculas");
       
        }else{
            document.getElementById("sin-texto").classList.add("invisible");
            document.getElementById("con-texto").classList.remove("invisible");
            
            let matrizCodigo = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
            parametro = parametro.toLowerCase();
            for (let i =0; i < matrizCodigo.length; i++) {
                if(parametro.includes(matrizCodigo[i][0])){
                    parametro = parametro.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
                }
            }return parametro;
        }        
    }
}

function desencriptar(parametroDes){
    var caracteres = document.querySelector("#texto-ingresado").value;
    if(caracteres.length == 0){
        document.getElementById("sin-texto").classList.remove("invisible");
        alert("no ha ingresado ningun texto");
    
    }else{
        if(validarMinusculas(caracteres)=="false"){
            document.getElementById("sin-texto").classList.remove("invisible");
            alert("Solo se permite ingresar letras minusculas");
       
        }else{
            document.getElementById("sin-texto").classList.add("invisible");
            document.getElementById("con-texto").classList.remove("invisible");
            let matrizCodigo = [["enter","e"], ["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
            parametroDes = parametroDes.toLowerCase();
            for (let i =0; i < matrizCodigo.length; i++) {
                if(parametroDes.includes(matrizCodigo[i][0])){
                    parametroDes = parametroDes.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
                }
            }return parametroDes;
        }
    }
}

function copiarTexto() {
    let copyText = document.querySelector("#resultado");
    copyText.select();
    document.execCommand("copy");
}

function validarMinusculas(letras){
    letras = String(letras).trim();
    const regxs = {"lower": /^[a-z\W]+$/g, 
                "upper": /^[A-Z]+$/g, 
                "upperLower": /^[A-Za-z]+$/g,
                "number":/^[0-9]+$/g,
                "space":/\W/g}            
    if (regxs.lower.test(letras))return "true";
    if (regxs.upper.test(letras))return "false";
    if (regxs.upperLower.test(letras))return "false";
    if (regxs.number.test(letras))return "false";
    if (regxs.space.test(letras))return "false";   
}




