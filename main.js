document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const inputs = document.getElementsByTagName("input");
  const mensagem = document.getElementById("MensagemErro-Sucesso");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let validaForm = true;

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === "") {
        validaForm = false;
        break;
      }
    }

    if (validaForm) {
      mensagem.innerHTML = "Sua mensagem foi encaminhada com sucesso";
    } else {
      mensagem.innerHTML = "Favor preencher todos os campos";
    }
  });
});
