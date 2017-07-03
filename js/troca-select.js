var planetas = document.getElementById("planeta_natal");
var arrayMandalore = [
  {"Id": "default", "Name": "Escolha uma opção..."},
  {"Id": 1, "Name": "Kruart-mon"},
  {"Id": 2, "Name": "Clivelle"},
  {"Id": 3, "Name": "Kracken"}];

var arrayNalHutta = [
  {"Id": "default", "Name": "Escolha uma opção..."},
  {"Id": 1, "Name": "Vril-Kh5a3r-Non"},
  {"Id": 2, "Name": "Hd2gas4ter"},
  {"Id": 3, "Name": "H1Jlç098aioewtw"},
  {"Id": 4, "Name": "P0oetsr"},
  {"Id": 5, "Name": "Za12reopd´os"},
  {"Id": 6, "Name": "Q8Pei-usa8jndl_etar"}];


function leNome() {
  var val = document.getElementById("text_nome").value;
  trocaSelect(arrayMandalore);
  if(val.match(/\d/) != null){
    trocaSelect(arrayNalHutta);
  }
}

function trocaSelect(arrayPlanetas) {
  limparPlanetas();
  for (var i = 0; i <= arrayPlanetas.length - 1; i++) {
        $(planetas).append('<option value="' + arrayPlanetas[i].Id + '">' + arrayPlanetas[i].Name + '</option>');
  }
}

function limparPlanetas() {
    while (planetas.options.length > 0) {
        planetas.remove(0);
    }
}

document.getElementById('nave').onchange = function(){
  document.querySelectorAll('.shipImg')[0].src = 'images/' + this.value + '.jpg';
};
