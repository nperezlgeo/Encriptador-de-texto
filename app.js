const accion_boton_desencriptar = document.querySelector(".boton_desencriptar");
const accion_boton_encriptar = document.querySelector(".boton_encriptar");
const captura_texto_encriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".advertencia_texto");
const procesado = document.querySelector(".caja_egreso")
const egreso_sin = document.querySelector(".caja_de_texto")
const accion_copiar = document.querySelector(".boton_copiar")

accion_boton_encriptar.addEventListener("click",e=>{e.preventDefault();
    let texto = captura_texto_encriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );

    if(texto==""){
        aviso.style.backgroud = "#0A3871";
        aviso.style.color = "Dark green";
        aviso.style.fontWeight = "800";
        aviso.textContent="Debes ingresar un texto para procesar";

        setTimeout(()=>(aviso.removeAttribute("style") ),1500);
    }
    else if (texto !==txt) {
        aviso.style.backgroud = "#0A3871";
        aviso.style.color = "Dark green";
        aviso.style.fontWeight = "800";
        aviso.textContent="Recuerda que no debes colocar acentos ni caracteres especiales";
        setTimeout(()=>(aviso.removeAttribute("style") ),1500);
    }
    else if (texto !== texto.toLowerCase()) {
        aviso.style.backgroud = "#0A3871";
        aviso.style.color = "Dark green";
        aviso.style.fontWeight = "800";
        aviso.textContent="SOLO MINUSCULAS";
        setTimeout(()=>(aviso.removeAttribute("style") ),1500); 
    }
    else{
        
        let resultado = encriptador(texto)
        procesado.innerHTML=resultado;
        accion_copiar.style.visibility = "inherit";
        egreso_sin.remove();
    }

})

accion_boton_desencriptar.addEventListener("click",e=>{e.preventDefault();
    let texto = captura_texto_encriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );

    if(texto==""){
        aviso.style.backgroud = "#0A3871";
        aviso.style.color = "Dark green";
        aviso.style.fontWeight = "800";
        aviso.textContent="Debes ingresar un texto para procesar";

        setTimeout(()=>(aviso.removeAttribute("style") ),1500);
    }
    else if (texto !==txt) {
        aviso.style.backgroud = "#0A3871";
        aviso.style.color = "Dark green";
        aviso.style.fontWeight = "800";
        aviso.textContent="Recuerda que no debes colocar acentos ni caracteres especiales";
        setTimeout(()=>(aviso.removeAttribute("style") ),1500);
    }
    else if (texto !== texto.toLowerCase()) {
        aviso.style.backgroud = "#0A3871";
        aviso.style.color = "Dark green";
        aviso.style.fontWeight = "800";
        aviso.textContent="SOLO MINUSCULAS";
        setTimeout(()=>(aviso.removeAttribute("style") ),1500); 
    }
    else{
        
        let resultado = desencriptador(texto);
        procesado.innerHTML=resultado;
        
    }

})
accion_copiar.addEventListener("click",e=>{e.preventDefault();
    let copiar = procesado;
    copiar.select();
    document.execCommand("copy");
})


function desencriptador(texto){
    let vocales=['a','e','i','o','u'];
    const keys=['ai','enter','imes','ober','ufat'];
    let caracter = vocales.length;
    for (let i = 0; i < caracter; i++) {
        var texto_desencriptado = texto = texto.replace(new RegExp(keys[i], 'g'), vocales[i]);
    }
    return texto_desencriptado
}

function encriptador(texto){
    let texto_encriptado = texto.split('');
    let cantidad_caracteres= texto_encriptado.length;
    for(let i = 0; i < cantidad_caracteres; i++ ){
        if(texto_encriptado[i] == 'a'){
            texto_encriptado[i]= 'ai';
        }
        else if(texto_encriptado[i] == 'e'){
            texto_encriptado[i]= 'enter';
        }
        else if(texto_encriptado[i] == 'i'){
            texto_encriptado[i]= 'imes';
        }
        else if(texto_encriptado[i] == 'o'){
            texto_encriptado[i]= 'ober';
        }
        else if(texto_encriptado[i] == 'u'){
            texto_encriptado[i]= 'ufat';
        }
        else {
        }
    }
    texto_encriptado = texto_encriptado.join('')
    return  texto_encriptado
}
