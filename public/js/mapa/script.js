var map;

function success(pos) {
  console.log(pos.coords.latitude, pos.coords.longitude);

  if (map === undefined) {
    map = L.map("mapid").setView([-23.71122, -46.41437], 13);
  } else {
    map.remove();
    map = L.map("mapid").setView([-23.71122, -46.41437], 13);
  }

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
 // L.marker([-23.71122, -46.41437]).addTo(map).bindPopup("ribeirao pires");
  var circle = L.circle([pos.coords.latitude, pos.coords.longitude], {
    color: "blue",
    fillColor: "blue",
    fillOpacity: 0.5,
    radius: 20,
  }).addTo(map);
  // var marker = L.marker([pos.coords.latitude, pos.coords.longitude]);
  circle.on("click", function () {
    z = 16;
    map.setView([pos.coords.latitude, pos.coords.longitude], z);
  });
 
  //marker.addTo(map);
}

function error(err) {
  console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
});

var map = L.map("mapid").setView([-23.711223, -46.41437], 14);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//L.marker([-23.71122, -46.41437]).addTo(map).bindPopup("ribeirao pires");
//.openPopup();
var circle = L.circle([-23.71122, -46.41437], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 50,
}).addTo(map);

// menu
const navMenu = document.getElementsByClassName("ul-menu")[0];
const btnMenu = document.getElementsByClassName("mobile-menu")[0];
const line1 = document.getElementsByClassName("line1")[0];
const line2 = document.getElementsByClassName("line2")[0];
const line3 = document.getElementsByClassName("line3")[0];
btnMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active-menu");
  line2.classList.toggle("remove");
  line1.classList.toggle("rotate1");
  line3.classList.toggle("rotate3");
});

function buscar() {
  let select1 = document.getElementById("selectLocal");
  let select2 = document.getElementById("selectLimitacao");
  console.log(select1.value, select2.value)

  //tilipe011
  //restaurante
  map.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  })
  if(select1.value == 1 && select2.value == 1){
    
    L.marker([-23.711057561905182, -46.41478237645776]).addTo(map).bindPopup("Castelo Azul");
    L.marker([-23.713161435197367, -46.41410278356849]).addTo(map).bindPopup("Habibs RP");
    L.marker([-23.709095359246998, -46.4140144052931]).addTo(map).bindPopup("Canoa Quebrada");
    L.marker([-23.71203799325391, -46.41328908829485]).addTo(map).bindPopup("Monte Castelo");
    L.marker([-23.70902744159961, -46.40832801757044]).addTo(map).bindPopup("McDonalds");
    L.marker([-23.70644672094215, -46.43351104541775]).addTo(map).bindPopup("Bar do vado");
    L.marker([-23.704481889504237, -46.42750717216824]).addTo(map).bindPopup("Padaria Mirante");
  
  }
   if(select1.value == 1 && select2.value == 2){
    
    L.marker([-23.711057561905182, -46.41478237645776]).addTo(map).bindPopup("Castelo Azul");
    L.marker([-23.713161435197367, -46.41410278356849]).addTo(map).bindPopup("Habibs RP");
    L.marker([-23.709095359246998, -46.4140144052931]).addTo(map).bindPopup("Canoa Quebrada");
    L.marker([-23.71203799325391, -46.41328908829485]).addTo(map).bindPopup("Monte Castelo");
    L.marker([-23.70902744159961, -46.40832801757044]).addTo(map).bindPopup("McDonalds");
    L.marker([-23.70644672094215, -46.43351104541775]).addTo(map).bindPopup("Bar do vado");
    L.marker([-23.704481889504237, -46.42750717216824]).addTo(map).bindPopup("Padaria Mirante");
  
    //mercado
  }
   if(select1.value == 2 && select2.value == 1){
 
    L.marker([-23.703505, -46.397398]).addTo(map).bindPopup("Assaí");
    L.marker([-23.705219, -46.398069]).addTo(map).bindPopup("Atacadão");
    L.marker([-23.712222231912826, -46.41190774298993]).addTo(map).bindPopup("Extra supermercado");
    L.marker([-23.71186049475916, -46.41416341159935]).addTo(map).bindPopup("Extra mercado");
    L.marker([-23.717031, -46.412400]).addTo(map).bindPopup("Supermercado Coop");
    L.marker([-23.707694, -46.400757]).addTo(map).bindPopup("Supermercado Joanin");
  }
   if(select1.value == 2 && select2.value == 2){
 
    L.marker([-23.703505, -46.397398]).addTo(map).bindPopup("Assaí");
    L.marker([-23.705219, -46.398069]).addTo(map).bindPopup("Atacadão");
    L.marker([-23.712222231912826, -46.41190774298993]).addTo(map).bindPopup("Extra supermercado");
    L.marker([-23.71186049475916, -46.41416341159935]).addTo(map).bindPopup("Extra mercado");
    L.marker([-23.717031, -46.412400]).addTo(map).bindPopup("Supermercado Coop");
    L.marker([-23.707694, -46.400757]).addTo(map).bindPopup("Supermercado Joanin");
  }
   if(select1.value == 3 && select2.value == 1){ //parque
    L.marker([-23.711818662342385, -46.40782375971842]).addTo(map).bindPopup("Parque Municipal Luiz Carlos Grecco");
    L.marker([-23.718283416549962, -46.433672909120986]).addTo(map).bindPopup("Parque Oriental");
    L.marker([-23.674935712939384, -46.35843870697392]).addTo(map).bindPopup("Parque Santa Helena");
  }
   if(select1.value == 3 && select2.value == 2){ //parque
    L.marker([-23.711818662342385, -46.40782375971842]).addTo(map).bindPopup("Parque Municipal Luiz Carlos Grecco");
    L.marker([-23.718283416549962, -46.433672909120986]).addTo(map).bindPopup("Parque Oriental");
    L.marker([-23.674935712939384, -46.35843870697392]).addTo(map).bindPopup("Parque Santa Helena");
  }



//alert
  if(select1.value == 0 || select2.value == 0){
    alert('Selecione as 2 opções corretamente!')
  }
}

// ainda falta resolver(Apagar o que está selecionado)
 function apagar(){
  map.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  })}

const themeSystem = localStorage.getItem('themeSystem') || 'dark'


function defineCurrentTheme(theme){
    document.documentElement.setAttribute("data-theme", theme)
}

defineCurrentTheme(themeSystem)