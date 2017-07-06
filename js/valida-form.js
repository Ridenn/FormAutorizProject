var dataAtual = new Date();

jQuery.validator.addMethod('codvalido', function(value, element) {
  var dia = value.substring(0,2);
  var mes = value.substring(2,4);
  var dig = value.substring(4,5);
  return ((dia>=1 && dia<=31) && (mes>=1 && mes<=12) && dig==5);
}, 'Deve ser um código válido.');

jQuery.validator.addMethod('valueNotEquals', function(value, element, param){
  return param != value;
}, "O valor não pode ser igual o parâmetro.");

jQuery.validator.addMethod("maiorQue", function(value, element, param) {
  if(param instanceof Date){
    return isNaN(value) && isNaN(param) || (Number(new Date(value)) >= Number(param));
  }
  if (!/Invalid|NaN/.test(new Date(value))) {
      return new Date(value) > new Date($(param).val());
  }
  return isNaN(value) && isNaN($(param).val()) || (Number(value) > Number($(param).val()));
},'É necessário ser maior que {0}.');

$('#autorizForm').validate({
    rules:{
      cod_acesso:{
        required: true, minlength: 5, codvalido: true
      },
      email_autoriz:{
        required: true, email: true
      },
      text_nome:{
        required: true
      },
      planeta_natal:{
        required: true,
        valueNotEquals: "default"
      },
      necessidades:{
              required: true
      },
      nave:{
        required: true,
        valueNotEquals: "default"
      },
      selfie_select:{
        required: true,
        extension: "png|jpg|jpeg|gif|bmp"
      },
      dt_pouso:{
        required: true, date: true, maiorQue: new Date()
      },
      dt_decolagem:{
        required: true, date: true, maiorQue: "#dt_pouso"
      }
    },

    messages:{
    cod_acesso:{
      required: "Digite o código de acesso",
      minlength: "O código deve possuir 5 caracteres"
    },
    email_autoriz:{
      required: "Digite seu e-mail",
      email: "Digite um e-mail válido"
    },
    text_nome:{
      required: "Digite o seu nome"
    },
    planeta_natal:{
      valueNotEquals: "Selecione um planeta"
    },
    necessidades: {
      required: "Selecione pelo menos uma opção"
    },
    nave:{
      valueNotEquals: "Selecione uma nave"
    },
    selfie_select:{
      required: "Selecione uma selfie para o sistema verificar sua face",
      extension: "O arquivo deve ser uma imagem"
    },
    dt_pouso:{
      required: "Entre com a data de pouso válida",
      date: "Entre com uma data válida",
      maiorQue: "Data de pouso deve vir depois da data atual"
    },
    dt_decolagem:{
      required: "Entre com a data de decolagem válida",
      date: "Entre com uma data válida",
      maiorQue: "Data de decolagem deve vir depois da data de pouso"
    }
  }
});
