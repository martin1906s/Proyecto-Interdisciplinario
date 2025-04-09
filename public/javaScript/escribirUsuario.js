function enviarMensaje() {
    const input = document.getElementById("mensajeUsuario");
    const texto = input.value.trim();

    if (texto === "") return;

    const chatBox = document.getElementById("chat-box");

    const mensajeHTML = `
        <div class="message sent">
            <img src="./img/colaborators/Users.png" alt="avatar" class="avatar">
            <div class="bubble">
                <span class="name">Usuario</span>
                <p>${texto}</p>
            </div>
        </div>
        `;

    chatBox.innerHTML += mensajeHTML;
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
