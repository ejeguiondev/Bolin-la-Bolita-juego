 //AUDIO
 let MuerteAudio = new Audio()
 MuerteAudio.src = "pacman-eating-cherry.mp3"
 let PocionSonido = new Audio()
 PocionSonido.src = "pacman-eating-ghost.mp3"
 let MusicaDeFondo = new Audio()
 MusicaDeFondo.src = "pixel-perfect-112527.mp3"
 let BottonSonido = new Audio()
 BottonSonido.src = "button-click-off-click.mp3"
 
 //OTRAS FUNCIONES
 function myFunction(e) {
    let bolin = document.getElementById("bolin")
    var x = e.clientX;
    var y = e.clientY;
    bolin.style.marginLeft = x - 5 + "px"
    bolin.style.marginTop = y - 5 + "px"
  }
//PERDER
  function Perder(){
    let pantallaPerder = document.getElementById("PantallaDePerder")
    pantallaPerder.style.display = "block"
    document.getElementById("Nivel1").style.display = "none"
    document.getElementById("bolin").style.display = "none"
    MuerteAudio.play()
  }
  function EmpesarDenuevo(){
    let bolin = document.getElementById("bolin")
    let pantallaPerder = document.getElementById("PantallaDePerder")
    pantallaPerder.style.display = "none"
    document.getElementById("Nivel1").style.display = "block"

    bolin.style.marginLeft = "0px"
    bolin.style.marginTop = "0px"
    bolin.style.display = "block"
  }
  function Perder2(){
    document.getElementById("Nivel2").style.display = "none"
    document.getElementById("PantallaDePerder2").style.display = "block"
    MuerteAudio.play()
  }
  function EmpesarDeNuevo2(){
    document.getElementById("Nivel2").style.display = "block"
    document.getElementById("PantallaDePerder2").style.display = "none"
  }
  function Perder3(){
    alert("Perdiste :( empesaras del nivel 1")
    location.reload()
    MuerteAudio.play()
  } 
  //PASAR NIVEL
  function PasarNivel1(){
    document.getElementById("Nivel1").style.display = "none"
    document.getElementById("Nivel2").style.display = "grid"
    PocionSonido.play()
    MusicaDeFondo.play()
  }
  function PasarNivel2(){
    document.getElementById("Nivel2").style.display = "none"
    document.getElementById("Nivel3").style.display = "grid"
    document.getElementById("MensajeAzul").style.display = "none"
    document.getElementById("Lienso").style.height = "400px"
    document.getElementById("Lienso").style.width = "500px"
    document.getElementById("Lienso").style.left = "400px"
    document.getElementById("Enemigo").style.display = "block"

    setTimeout(PonerAvisoUnoYDos, 2000)
    setTimeout(PonerAvisoTresYCuatro,4000)
    setTimeout(QuitarAtaquesLentos,7000)
    setTimeout(Circulo,10000)
    setTimeout(PonerAvisoUnoYDos,12000)
    setTimeout(PonerAvisoTresYCuatro,14000)
    setTimeout(QuitarAtaquesLentos,16000)
    setTimeout(PonerAnimacion,18000)
    PocionSonido.play()
    MusicaDeFondo.play()
  }
//PODER 
function PoderAzulNivel2() {
    document.getElementById("ConseguisteElPoderAzul").style.display = "flex"
    PocionSonido.play()
    function QuitarTextoPoderAzul(){
      document.getElementById("ConseguisteElPoderAzul").style.display = "none"
    }
    setTimeout(QuitarTextoPoderAzul,3000)
    document.getElementById("PoderAzulNivel2").style.display = "none"
document.addEventListener("keydown", function(e){
    if (e.keyCode === 69){
        DetectarBloqueQuitable()
        MuerteAudio.play()
    }
    if (e.keyCode === 81){
        PonerBloqueQuitable()
        MuerteAudio.play()
    }
})

function DetectarBloqueQuitable(){
    document.getElementById("SiQuitableConAzul").style.display = "none"
    document.getElementById("SiQuitableConAzul2").style.display = "none"
    document.getElementById("NoQuitableConAzul").style.display = "block"
    document.getElementById("NoQuitableConAzul2").style.display = "block"
    document.getElementById("NoQuitableConAzul").style.background = "red"
    document.getElementById("NoQuitableConAzul2").style.background = "red"
}
function PonerBloqueQuitable(){
    document.getElementById("SiQuitableConAzul").style.display = "block"
    document.getElementById("SiQuitableConAzul2").style.display = "block"
    document.getElementById("SiQuitableConAzul").style.background = "blue"
    document.getElementById("SiQuitableConAzul2").style.background = "blue"
    document.getElementById("NoQuitableConAzul").style.display = "none"
    document.getElementById("NoQuitableConAzul2").style.display = "none"
}    
}
//Avisos y Ataques
function PonerAvisoUnoYDos() {
    document.getElementById("Aviso1").style.display = "block"
    document.getElementById("Aviso2").style.display = "block"

    function AtaquesUnoyDos(){
        document.getElementById("Ataque1").style.display = "block"
        document.getElementById("Ataque2").style.display = "block"
        document.getElementById("Aviso1").style.display = "none"
        document.getElementById("Aviso2").style.display = "none"
    }
setTimeout(AtaquesUnoyDos, 1000)
}
function PonerAvisoTresYCuatro(){
    document.getElementById("Aviso3").style.display = "block"
    document.getElementById("Aviso4").style.display = "block"
    function PonerAtaqueTresYCuatro(){
        document.getElementById("Ataque3").style.display = "block"
        document.getElementById("Ataque4").style.display = "block"
        document.getElementById("Aviso3").style.display = "none"
        document.getElementById("Aviso4").style.display = "none"
    }
    setTimeout(PonerAtaqueTresYCuatro,1000)
}
function QuitarAtaquesLentos(){
    document.getElementById("Ataque1").style.height = "140px"
    document.getElementById("Ataque2").style.height = "140px"
    document.getElementById("Ataque3").style.width = "140px"
    document.getElementById("Ataque4").style.width = "140px"
    document.getElementById("Aviso1").style.height = "140px"
    document.getElementById("Aviso2").style.height = "140px"
    document.getElementById("Aviso3").style.width = "140px"
    document.getElementById("Aviso4").style.width = "140px"
    function Quitar(){
        document.getElementById("Ataque1").style.display = "none"
        document.getElementById("Ataque2").style.display = "none"
        document.getElementById("Ataque3").style.display = "none"
        document.getElementById("Ataque4").style.display = "none"
    }
    setTimeout(Quitar,1000)
}
function Circulo(){
    document.getElementById("AvisoCirculo").style.display = "block"
    function CirculoAtaque(){
        document.getElementById("AvisoCirculo").style.display = "none"
        document.getElementById("AtaqueCirculo").style.display = "block"
        function QuitarCirculo(){
            document.getElementById("AvisoCirculo").style.display = "none"
            document.getElementById("AtaqueCirculo").style.display = "none"
        }
        setTimeout(QuitarCirculo,1000)
    }
    setTimeout(CirculoAtaque,900)
}
function PonerAnimacion(){
    document.getElementById("Pared1Nivel3").style.display = "none"
    document.getElementById("Pared1Nivel3Animacion").style.display = "block"
    function Ganar(){
        document.getElementById("Lienso").style.display = "none"
    }
    setTimeout(Ganar,500)
}

//Lobby
function EmpesarJuego(){
  document.getElementById("Lobby").style.display = "none"
  document.getElementById("Lienso").style.display = "block"
  BottonSonido.play()
  MusicaDeFondo.play()
}
function PonerOpciones(){
  document.getElementById("Opciones").style.display = "grid"
}
function QuitarOpciones(){
  document.getElementById("Opciones").style.display = "none"
}
function GanarElJuego(){
  document.getElementById("Ganaste").style.display = "block"
  document.getElementById("Enemigo").style.display = "none"
}
