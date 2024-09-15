function logar(event) {
  event.preventDefault(); // Impede o envio do formulário e o recarregamento da página
  
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;
  const message = document.querySelector("#message");
  message.style.display = "none";
  message.classList.remove("error", "success");

  if (email === "" || senha === "") {
    message.textContent = "Há campos não preenchidos!";
    message.classList.add("error");
    message.style.display = "block"; 
  } else {
    message.textContent = `Email: ${email}, Senha: ${senha}`;
    message.classList.add("success");
    message.style.display = "block"; 
  }
}
