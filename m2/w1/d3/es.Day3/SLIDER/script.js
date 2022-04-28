var cubex = -50,
cubey = -38,
cubez = 0;
function rotate(variableName, gradi) {
    finestra[variableName] = finestra[variableName] + gradi;
    rotCube(cubex, cubey, cubez);
}
function rotCube(degx, degy, degz){
    segmentos = "rotateX("+degx+"deg) rotateY("+degy+"deg) rotateZ("+degz+"deg) translateX(0) translateY(0) translateZ(0)";
    $('#Cubo').css({"transform":segmentos});
}
function giraDestra() {
    rotate("cuboassey", 90);
}
function giraSinistra() {
    rotate("cuboassey", -100);
}
function giraCubo() {
    rotate("cuboassey", -80);
}

// NON SONO RIUSCITO A METTERE I TASTI