var botaoEnviar = document.querySelector("#button_autoriz");
var emailUser = document.getElementById("email_autoriz");
var textNecessidades = "";

function testaEnvioEmail() {
  var checkedBoxes = [];
  $("input:checkbox[name=necessidades]:checked").each(function(){
    checkedBoxes.push($(this).val());
  });

  var planetaArray = document.getElementsByClassName("labelNecess");

  var imageLink = verificaNave(document.querySelector("#nave").value);
  verificaEmail(checkedBoxes, planetaArray, imageLink);
}

function verificaNave(nave) {
  var imageLink = "";

  switch (nave) {
    case "1":
      return imageLink = "http://i.imgur.com/E4tL4Eo.jpg";
      break;
    case "2":
      return imageLink = "http://i.imgur.com/JOPZ24m.jpg";
      break;
    case "3":
      return imageLink = "http://i.imgur.com/9Vf9zyA.jpg";
      break;
    case "4":
      return imageLink = "http://i.imgur.com/Xd6BwER.jpg";
      break;
    case "5":
      return imageLink = "http://i.imgur.com/keMpLlI.jpg";
      break;
    case "6":
      return imageLink = "http://i.imgur.com/yMPxwXz.jpg";
      break;
    case "7":
      return imageLink = "http://i.imgur.com/s7RV246.jpg";
      break;
    default:
      return imageLink;
  }
}

function verificaEmail(boxes, array, imageLink) {
  var emails = emailUser.value;
  for (var i = 0; i <= boxes.length; i++) {
    textNecessidades += array[i].innerText + "; ";
    switch (boxes[i]) {
      case "1":
        emails += "; " + "fuel@fhinck.com";
        break;
      case "2":
        emails += "; " + "cargo@fhinck.com";
        break;
      case "3":
        emails += "; " + "eletr@fhinck.com";
        break;
      case "4":
        emails += "; " + "mechanic@fhinck.com";
        break;
      case "5":
        emails += "; " + "prop@fhinck.com";
        break;
      case "6":
        emails += "; " + "sys@fhinck.com";
        break;
      case "7":
        emails += "; " + "clean@fhinck.com";
        break;
      default:
        enviaEmail(emails, imageLink);
    }
  }
}

function enviaEmail(email, imageLink) {

  // foram retirados acentos por questão de incompatibilidade com alguns os provedores de email
  var link = "mailto:"+email
           + "&subject=" + "Autorizacao e Acesso FHK_STAR_HQ3"
           + "&body=" + "INFORMACOES PARA AUTORIZACAO E ACESSO DE PILOTO NO HANGAR %0D%0A %0D%0A"
           + "Codigo de acesso: " +document.getElementById("cod_acesso").value
           + "%0D%0A Email: " +document.getElementById("email_autoriz").value
           + "%0D%0A Nome: " +document.getElementById("text_nome").value
           + "%0D%0A Identificacao interplanetaria: " +document.getElementById("text_id").value
           + "%0D%0A Planeta Natal: " +document.getElementById("planeta_natal").value + " - " + $("#planeta_natal option:selected").text()
           + "%0D%0A Necessidades: " +textNecessidades
           + "%0D%0A Nave: " +document.getElementById("nave").value + " - " + $("#nave option:selected").text()
           + "%0D%0A Imagem da nave: " + imageLink
           + "%0D%0A Data de pouso: " +(document.getElementById("dt_pouso").value = new Date).toUTCString()
           + "%0D%0A Data de decolagem: " +(document.getElementById("dt_decolagem").value = new Date).toUTCString()
           + "%0D%0A Selfie do piloto: validada e aprovada pelo conselho de seguranca";

  window.location.href = link;

  setTimeout(function(){
    alert("Seu pedido de acesso para atracar no hangar está sendo gerado...");
    limparCampos();
    atualizaContador(document.querySelector(".contador"));
  }, 5000);

	  // $myform.prop ('action','mailto:'+email);
	  // $myform.submit();
}
