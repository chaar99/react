export const email = (ev, valor) => {
    ev.stopPropagation();
    ev.preventDefault();
    var estado = null;
    if(/^[a-zA-Z0-9.]+@[a-zA-Z]{5,10}.[a-zA-Z]{2,3}$/.test(valor)){
        estado = true;
    }else{
        estado = false;
    }
    return estado;
}