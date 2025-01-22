let co2 = 50;
let ch4 = 50;
let o2 = 20;

// Función de reiniciar
const resetCO2 = () => {
    co2 = 50;
    mostrarTexto("co2", co2);
    cambiarImg();
    btn(co2,50,"ocultBtnIFCo2");
}

const resetCH4 = () => {
    ch4 = 50;
    mostrarTexto("ch4", ch4);
    cambiarImg();
    btn(ch4,50,"ocultBtnIFCh4");
}

const resetO = () => {
    o2 = 20;
    mostrarTexto("o", o2);
    cambiarImg();
    btn(o2,20,"ocultBtnIFO");
}

// Funciones de aumento y decremento
const aumentarCO2 = () => {
    co2 += 10;
    mostrarTexto("co2", co2);
    cambiarImg();
    btn(co2,50,"ocultBtnIFCo2");
}

const decrementarCO2 = () => {
    if (co2 > 50) {
        co2 -= 10;
    }
    mostrarTexto("co2", co2);
    cambiarImg();
    btn(co2,50,"ocultBtnIFCo2");
}

const aumentarCH4 = () => {
    ch4 += 10;
    mostrarTexto("ch4", ch4);
    cambiarImg();
    btn(ch4,50,"ocultBtnIFCh4");
}

const decrementarCH4 = () => {
    if (ch4 > 50) {
        ch4 -= 10;
    }
    mostrarTexto("ch4", ch4);
    cambiarImg();
    btn(ch4,50,"ocultBtnIFCh4");
}

const aumentarO = () => {
    o2 += 1;
    mostrarTexto("o", o2);
    cambiarImg();
    btn(o2,20,"ocultBtnIFO");
}

const decrementarO = () => {
    if (o2 > 20) {
        o2 -= 1;
    }
    mostrarTexto("o", o2);
    cambiarImg();
    btn(o2,20,"ocultBtnIFO");
}

const cambiarImg = () => {
    if (co2 > 100 && ch4 > 100 && o2 > 23) {
        mostrarImagen("imgIF", "../img/entorno/entorno/todoElevado.png");
        mostrarTexto("resIF","Todo Elevado")
    } else if (co2 > 100 && ch4 > 100) {
        mostrarImagen("imgIF", "../img/entorno/entorno/co2_ch4_elevado.png");
        mostrarTexto("resIF","CO₂ y CH₄ Elevado")
    } else if (ch4 > 50 && o2 > 23) {
        mostrarImagen("imgIF", "../img/entorno/entorno/ch4_o_elevado.png");
        mostrarTexto("resIF","CH₄ y O₂ Elevados")
    } else if (co2 > 100) {
        mostrarImagen("imgIF", "../img/entorno/entorno/co2Elevado.png");
        mostrarTexto("resIF","CO₂ Elevado")
    } else if (ch4 > 50) {
        mostrarImagen("imgIF", "../img/entorno/entorno/ch4Elevado.png");
        mostrarTexto("resIF","CH₄ Elevado")
    } else if (o2 > 23) {
        mostrarImagen("imgIF", "../img/entorno/entorno/oElevado.png");
        mostrarTexto("resIF","O₂ Elevado")
    } else if (co2 <= 50 && ch4 <= 50 && o2 >= 19 && o2 <= 23) {
        mostrarImagen("imgIF", "../img/entorno/entorno/Natural.png");
        mostrarTexto("resIF","Natural")
    }
}

//ocultar/mostrar boton de disminuir
const btn=(comp,valDefault,btnId)=>{
    if (comp==valDefault) {
        ocultarComponente(btnId)
    }else{
        mostrarComponente(btnId)
    }
}
