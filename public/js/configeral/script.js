/* contraste */

function mudarCor(){
  bntalto = document.getElementById('bntalto')

  
}

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('alto')
})
/* fim */

/* cor branco */

const modeSwitch = document.getElementById('modeSwitch');



modeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('branco');
});


/* function bordatemadark(){
  var switchh = document.getElementById('switchh');
  switchh.style.borderColor = "2px dashed blue";
} */

/* aparecer Tela */

function clickTela(){
  ProgressEvent.default
  if(telasitens.style.display == 'block'){
    telasitens.style.display = 'none'
  }else{
    telasitens.style.display = 'block'
  }
}

/* fim */


/* menu onde mostra opções 768px  */

function menuOpicao(){
menuopcao = document.getElementById('menuopcao')
optionid = document.getElementById('optionid')

if(menuopicao.style.display == 'block'){
  optionid.style.display = 'none'
}else{
  optionid.style.display = 'block'
}
}


const voltar = ()=>{
  window.history.back()
}
/* fim */


const themeSystem = localStorage.getItem('themeSystem') || 'dark'
function defineCurrentTheme(theme){
    document.documentElement.setAttribute("data-theme", theme)
}
defineCurrentTheme(themeSystem)