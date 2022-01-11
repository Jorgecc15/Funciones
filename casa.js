function piso(){
console.log("[    _   _    ]")
console.log("[   [_] [_]   ]")
console.log("[             ]")
}
function pisoBase(){
console.log("[      _      ]")
console.log("[     / \\     ]")
console.log("[____/[_]\\____]")
}
function techo(){
console.log("  _______/\\__")
console.log("/______________\\")
}
function casa(nPisos){
    for(let i=0;i<nPisos;i++){
        techo();
        piso();
        pisoBase();
    }
}
