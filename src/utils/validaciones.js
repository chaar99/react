export const email = (ev, valor) => {
    ev.stopPropagation();
    ev.preventDefault();
    var estado = null;
    if(/^[\w\.]{4,20}@[a-zA-Z]{4,20}\.[a-zA-Z]{2,4}$/.test(valor)) {
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

export const compruebaCalle = (ev, valor) => {  
    ev.stopPropagation();
    ev.preventDefault();
    var estado = null;
    if(/^[a-z-_,ºª\\/.0-9A-ZÀ-ÿ" "]+$/.test(valor)) {
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
    if(/^[0-9]{8}[a-zA-Z]{1}$/.test(valor)) {
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

export const stock = (ev, valor) => {  
    ev.stopPropagation();
    ev.preventDefault();
    var estado = null;
    if (/^[1-9][0-9]{0,2}$/.test(valor)) {
        estado = true;
    } else {
        estado = false;
    }
    return estado;
}

export const precio = (ev, valor) => {  
    ev.stopPropagation();
    ev.preventDefault();
    var estado = null;
    if (/^[1-9][0-9]?(.[0-9])*$/.test(valor)) {
        estado = true;
    } else {
        estado = false;
    }
    return estado;
}

export const cod_postal = (ev, valor) => {
    ev.stopPropagation();
    ev.preventDefault();
    var estado = null;
    if(/^[0-9]{5}$/.test(valor)){
        estado = true;
    } else {
        estado = false;
    }
    return estado;
}

export const provincias = (ev, valor) => {
    ev.stopPropagation();
    ev.preventDefault();
    var palabra = valor[0].toUpperCase() + valor.slice(1).toLowerCase() ;
    var estado = null;
    var provincias = ["Coruna", "Alava", "Albacete", "Alicante", "Almeria", "Asturias", "Avila", "Badajoz", "Baleares", "Barcelona", "Burgos", "Caceres", "Cadiz", "Cantabria",
    "Castellon", "Ciudad Real", "Cordoba", "Cuenca", "Girona", "Granada", "Guadalajara", "Gipuzkoa", "Huelva", "Huesca", "Jaen", "La Rioja", "Las Palmas", "Leon", "Lerida",
    "Madrid", "Málaga", "Murcia", "Navarra", "Ourense", "Palencia", "Pontevedra", "Salamanca", "Segovia", "Sevilla", "Soria", "Tarragona", "Santa cruz de Tenerife", "Teruel",
     "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza", "Ceuta", "Melilla"];

    if(provincias.includes(palabra)){
        estado = true;
    } else {
        estado = false;
    }
    return estado;
}

export const telefono = (ev, valor) => {
    ev.stopPropagation();
    ev.preventDefault();
    var estado = null;
    if(/^[0-9]{9}$/.test(valor)){
        estado = true;
    } else {
        estado = false;
    }
    return estado;
}

export const titular = (ev, valor) => {
    ev.stopPropagation();
    ev.preventDefault();
    var estado = null;
    if(/^[a-zA-ZÀ-ÿ" "]+$/.test(valor)){
        estado = true;
    } else {
        estado = false;
    }
    return estado;
}

export const numTarjet = (ev, valor ) => {
    ev.stopPropagation();
    ev.preventDefault();
    var estado = null;
    if(/^[0-9]{16}$/.test(valor)){
        estado = true;
    } else {
        estado = false;
    }
    return estado;
}

export const validarcvv = (ev, valor) => {
    ev.stopPropagation();
    ev.preventDefault();
    var estado = null;
    if(/^[0-9]{3}$/.test(valor)){
        estado = true;
    } else {
        estado = false;
    }
    return estado;
}

export const validarFech = (ev, valor) => {
    ev.stopPropagation();
    ev.preventDefault();
    var estado = null;
    var valor = valor.split("-");
    var fecha = new Date();
    if(valor[0] > fecha.getFullYear()){
        estado = true;
    }else if( valor[0] < fecha.getFullYear()){
        estado = false;
    }else{
        if(valor[1] >= (fecha.getMonth() + 1)){
            estado = true;
        }else {
            estado = false;
        }
    }
    
    return estado;
}