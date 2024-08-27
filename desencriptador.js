let texto = 'nimescoberlais' ;
function desencriptador(texto){
    let vocales=['a','e','i','o','u'];
    const keys=['ai','enter','imes','ober','ufat'];
    caracter = vocales.length;
    for (let i = 0; i < caracter; i++) {
        texto_desencriptado = texto = texto.replace(new RegExp(keys[i], 'g'), vocales[i]);
        console.log(texto);
    }
    return texto_desencriptado
}

texto_desencriptado = desencriptador (texto)
console.log(texto_desencriptado)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
texto = 'nicolas'
function encriptador(texto){
    let texto_encriptado = texto.split('');
    cantidad_caracteres= texto_encriptado.length;
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

texto_encriptado = encriptador(texto)
console.log(texto_encriptado)





function desencriptador(texto){
    let vocales=['a','e','i','o','u'];
    const keys=['ai','enter','imes','ober','ufat'];
    caracter = vocales.length;
    for (let i = 0; i < caracter; i++) {
        texto_desencriptado = texto = texto.replace(new RegExp(keys[i], 'g'), vocales[i]);
        console.log(texto);
    }
    return texto_desencriptado;
    texto_encriptado_resultante.value = texto_desencriptado;
}

function encriptador(texto){
    let texto_encriptado = texto.split('');
    cantidad_caracteres= texto_encriptado.length;
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
