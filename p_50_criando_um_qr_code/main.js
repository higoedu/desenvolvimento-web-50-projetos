const embrulho = document.querySelector(".embrulho"),
entradaQr = embrulho.querySelector(".form input"),
generateBtn = embrulho.querySelector(".form button"),
qrImg = embrulho.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = entradaQr.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Gerando QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        embrulho.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

entradaQr.addEventListener("keyup", () => {
    if(!entradaQr.value.trim()) {
        embrulho.classList.remove("active");
        preValue = "";
    }
});