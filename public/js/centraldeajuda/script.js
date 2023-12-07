//
const denuncia_id = document.getElementById('denuncia_id')
function clickMenu() {
  console.log('ola')
  if (denuncia_id.onclick != null) {
    let ate = document.getElementById("ate-1");
    let tela = document.getElementById("denuncia");
    tela.style.display = "block";
    ate.style.display = "none";
  }
}

function closeMenu() {
  let visor = document.getElementById("denuncia");
  let close = document.getElementById("ate-1");
  visor.style.display = "none";
  close.style.display = "block";
}

function clickMenuu(){
    if(denuncia_idd.onclick != null){
        let ate2 = document.getElementById("ate-2");
        let tela_2 = document.getElementById("denuncia");
        tela_2.style.display = "block";
        ate2.style.display = "none";
    }
}

function enviar(){
  closeMenu()
}

// verifica se tem token


