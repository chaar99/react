export const email = (ev, valor) => {
    ev.stopPropagation();
    ev.preventDefault();
    var estado = null;
    if(/^[a-zA-Z0-9.]+@[a-zA-Z]{5,10}.[a-zA-Z]{2,3}$/.test(valor)) {
        estado = true;
    }else {
        estado = false;
    }
    return estado;
}

export const compruebaText = (ev, valor) => {  
    ev.stopPropagation();
    ev.preventDefault();
    var estado = null;
    if(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(valor)) {
        estado = true;
    } else {
        estado = false;
    }
    return estado;
}

export const compruebaDNI = (ev, valor) => {  
    ev.stopPropagation();
    ev.preventDefault();
    var estado = null;
    if(/^[0-9]{8}[A-Z]{1}$/.test(valor)) {
        estado = true;
    } else {
        estado = false;
    }
    return estado;
}

export const longitudPass = (ev, valor) => {  
    ev.stopPropagation();
    ev.preventDefault();
    var estado = null;
    if(valor.length >= 10) {
        estado = true;
    } else {
        estado = false;
    }
    return estado;
}