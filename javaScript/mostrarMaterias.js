function mostrarBarraMaterias() {
    mostrarComponente("nav2");
    ocultarComponente("btnNavMat");
    mostrarComponente("btnNavMat2")
}
function ocultarBarraMaterias() {
    ocultarComponente("nav2");
    ocultarComponente("btnNavMat2");
    mostrarComponente("btnNavMat");
}
function toggleBarraMaterias() {
    const isNavVisible = document.getElementById("btnNavMat").style.display === "none";
    if (isNavVisible) {
        ocultarBarraMaterias();
    } else {
        mostrarBarraMaterias();
    }
}
