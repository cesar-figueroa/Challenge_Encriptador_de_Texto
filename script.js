// Función para encriptar el texto
function encrypt() {
    let inputText = document.getElementById("input-text").value.trim();
    if (inputText === "") {
        return;
    }
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    displayOutput(encryptedText);
}

// Función para desencriptar el texto
function decrypt() {
    let inputText = document.getElementById("input-text").value.trim();
    if (inputText === "") {
        return;
    }
    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    displayOutput(decryptedText);
}

// Función para mostrar el resultado en la pantalla
function displayOutput(text) {
    const outputContent = document.getElementById("output-content");
    const outputText = document.getElementById("output-text");
    const placeholderImage = document.getElementById("placeholder-image");

    if (text.trim() === "") {
        outputContent.classList.add("empty");
        outputContent.classList.remove("filled");
        outputText.innerText = "Ningún mensaje fue encontrado";
    } else {
        outputContent.classList.remove("empty");
        outputContent.classList.add("filled");
        outputText.innerText = text;
    }
}

// Función para copiar el texto al portapapeles
function copyToClipboard() {
    const outputText = document.getElementById("output-text").innerText;
    navigator.clipboard.writeText(outputText).then(function() {
        alert("Texto copiado al portapapeles");
    }, function() {
        alert("Error al copiar el texto");
    });
}
